import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { AgmService } from 'src/app/services/agm.service';
import { CommonService } from 'src/app/services/common/common.service';
import { LoginService } from 'src/app/services/login.service'

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  searchBarText: any = '';
  @Input() category: string;
  @Input() arrayCategories: string;
  @Input() searchBar: number;
  @Input() searchbarText: string;
  @Input() logged: any;
  @Output() storeDetail: EventEmitter<any> = new EventEmitter<any>();
  stores: any = [];
  temp: any = [];
  categories: any = [];
  storesCategories: any = [];
  nearToMe: any = [];


  constructor(
    public commonService: CommonService,
    public agmService: AgmService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.storeList();
    this.storesNearToMe();
  }

  storeList(){
   
    this.agmService.storesList.subscribe(res => {
      if (!res) { return }
      this.stores = res;
      
    })
  }

  storesNearToMe(){
    this.categoriesService.getNearToMe().subscribe(storesNear => {
      //console.log('stores result =',JSON.stringify(stores.result));
      if(storesNear){
        if(storesNear.result[0].Mensaje){
          this.nearToMe = [];
        }else{
          this.nearToMe = storesNear.result;

          //this.listMarkers(true);
        }
      }
    });
  }

  goMap(store: any,param:number) {
    //si param es igual a 1, vienen establecimientos cercanos..
    //si param es igual a 0 vienen las demas categorias
    console.log('store = '+JSON.stringify(store));
   if(param==1){
    this.agmService.agmMarket.next([{
      lat: Number(store.Latitud_A),
      lng: Number(store.Longitud_A),
      label: store.Establecimiento,
      draggable: false,
      id: store.Tienda,
      type: 'CERCA DE MI',
    }])
   }else{
    if(param==0){
      this.agmService.agmMarket.next([{
        lat: Number(store.lat),
        lng: Number(store.lng),
        label: store.label,
        draggable: false,
        id: store.id,
        type: store.type,
      }])
    }
   }
    
  }

    //funtion store Details
  goDetails(id: number) {
    this.router.navigate(['/pages/store-detail/' + id])
  }

  filterStores(category: string) {
    console.log('Dentro de filter stores')
    if(category=='CERCA DE MI'){
      console.log('filterstores = ',this.stores)
      this.storesCategories = this.stores;

/******************************************************* */
/*
this.categoriesService.getNearToMe().subscribe(storesNearToMe => {
  console.log('stores result =',JSON.stringify(storesNearToMe.result));
  if(storesNearToMe){
    if(storesNearToMe.result[0].Mensaje){
      this.storesCategories = [];
    }else{
      this.storesCategories = storesNearToMe.result;

    }
  }
});*/

/*************************************************** */


    }else{
      console.log('hola samsung')
      this.storesCategories = this.stores.filter(data => { return data.Tipo == category });
    }
    

  }

  goToStore(m) {
    //this.router.navigate(['/pages/store-detail/' + m.id])
    this.router.navigate(['/pages/store-detail/' + m.id])
  }
}