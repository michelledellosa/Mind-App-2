import { Component, Input, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ActivatedRoute, Router } from '@angular/router';

import { AgmService } from 'src/app/services/agm.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { LocationService } from 'src/app/services/location.service';



@Component({
  selector: 'app-tab-products',
  templateUrl: './tab-products.component.html',
  styleUrls: ['./tab-products.component.scss'],
})
export class TabProductsComponent implements OnInit {
  @Input() location: number

  store: any = [];
  detail: any = [];
  constructor(
    public locationService: LocationService,
    private categoriesServices: CategoriesService,
    private callNumber: CallNumber,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private agmService: AgmService,
    private iab: InAppBrowser
  ) { }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      let recipeId = data.get('id_store');
      //alert('recipeId = '+recipeId)
      this.categoriesServices.getCategories()
        .subscribe(data => {
          this.store = data.result;
          this.detail = this.store.find(res => { return res.Id == recipeId });
        })
    });

  }

  whatsapp(phone) {
    //alert('phone = '+phone);
    let url = 'https://api.whatsapp.com/send?phone=' + phone
    window.open(url, '_system');
  }

  call(phone: string) {
   /* window.open( `tel:12345` , '_system');
    this.iab.create(`tel:12345`,'_system');*/
    let phone_number;
    
    if (phone == undefined) {
      alert('Por favor, espere a que se cargue la informacion del establecimiento');
    } else {
      if(phone == ''){
        alert('Numero de Telefono no Disponible');
      }else{
        //alert('dentro del ultimo else');
        phone_number=phone;
        this.callNumber.callNumber(phone_number, true)
        .then(res => { })
        .catch(err =>{alert('No podemos realizar la llamada en este momento')});

      }

    }
  }

  goToProducts(id){
    this.router.navigate(['/pages/products/' +id])
  }

  async goToGPS(id) {    
     this.locationService.chckAppGpsPermission(); 
     this.router.navigate(['pages/gps-store/' + id]);
      
  }

}
