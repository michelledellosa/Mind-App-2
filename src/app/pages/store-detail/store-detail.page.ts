import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AgmService } from 'src/app/services/agm.service';
import { CategoriesService } from 'src/app/services/categories.service';
//import { StoresService } from 'src/app/services/stores.service';
import { CommonService } from 'src/app/services/common/common.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.page.html',
  styleUrls: ['./store-detail.page.scss'],
})
export class StoreDetailPage implements OnInit {
  store: any = [];
  detail: any = [];
  recipeId:string;
  phoneNumber = '';

  //Coordenadas para mi ubicacion actual 
  origin = {
    position: {
      lat: 0,
      lng: 0,
    },
    title: 'origin'
  }
location

  constructor(
    private iab: InAppBrowser,
    public commonService: CommonService,
    public agmService: AgmService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoriesServices: CategoriesService,
    public alertController: AlertController
    
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      this.recipeId = data.get('id_store');
      this.categoriesServices.getCategories()
        .subscribe(data => {
          this.store = data.result;
          this.detail = this.store.find(res => { return res.Id == this.recipeId });
          //console.log('details store= '+JSON.stringify(this.detail))
        });
    });
  }



  //abrir red social del establecimiento
  goSocialNetwork(social) {
    console.log('social=' + social.substr(0, 25));
    if ((social.substr(0, 25) == 'https://www.facebook.com/') || (social.substr(0, 26) == 'https://www.instagram.com/') || (social.substr(0, 20) == 'https://twitter.com/') || (social.substr(0, 24) == 'https://www.youtube.com/')) {
      this.iab.create(social, '_system', 'zoom=no').show();
    }else{
      this.presentAlert()
    }
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header:'Error',
      subHeader:'Error al acceder a la red social, por favor intente otra opción',
      //message: 'esta es una alerta',
      buttons:['Aceptar']
    });

    await alert.present();
  }

  goProducts(id:number){
    console.log('id de products = '+id)
    this.router.navigate(['/pages/products/' +id])
  }

  goComments(id:number){
    if(id==undefined){
        alert('Por favor, espere a que se cargue la informacion del establecimiento');
    }else{
      console.log('id recibido en goComments = ', id)
      this.router.navigate(['/pages/comments/' +id])
    }
  }

  call() {
    window.open(`tel:${this.phoneNumber}`, '_system');
  }


  
}
