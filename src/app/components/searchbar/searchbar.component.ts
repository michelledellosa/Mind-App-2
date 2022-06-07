import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  text= '';
  categories: any = [];
  temp: any = [];
  stores:any = [];
  //searchButton:number;
  @Output()  searchbarText : EventEmitter<string>= new EventEmitter<string>();
  @Output()  searchToolbar : EventEmitter<number>= new EventEmitter<number>();

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories()
      .subscribe(res => {
        this.stores = res.result;
        //console.log('this.array1 = '+JSON.stringify(this.array));
        for (var i = 0; i <= this.stores.length - 1; i++) {
          this.temp[i] = this.stores[i].Tipo
        };
        this.categories = this.temp.reduce((a, e) => {
          if (!a.find(d => d == e)) {
            a.push(e);
          }
          return a;
        }, []);
      });
  }

  getSearchCode(){
    //console.log('Michelle Dellosa = '+e)
    this.searchToolbar.emit(0);
  }
  
  search(event){
    this.text = event.detail.value;
    this.searchbarText.emit(this.text)
  }
}
