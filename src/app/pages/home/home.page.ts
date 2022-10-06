import { Component, OnInit } from '@angular/core';



import { AgmService } from 'src/app/services/agm.service';
import { AlertService } from 'src/app/services/common/alert.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { LoadingService } from 'src/app/services/common/loading.service';
import { LoginService } from 'src/app/services/login.service';
import { LocationService } from 'src/app/services/location.service';
import { PluginService } from 'src/app/services/plugin.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

 
  /*********************************** */

  logged = false;
  showToolbar = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    breakpoints: {
      /*150: {
        slidesPerView: 1
      },*/
      300: {
        slidesPerView: 1
      },
      400: {
        slidesPerView: 2
      },
      600: {
        slidesPerView: 3
      },
      750: {
        slidesPerView: 4
      },
      1000: {
        slidesPerView: 5
      }
    }
  };
  searchBar: number = 0;
  searchCode: string;
  categories: any = [];
  searchbarText: string;
  paramMapDetails: any = [];

  userData = {
    email: '',
    token: '',
    id_store: 0,
    id_login: 0
  }

  data = [];
  items: any = [];
  arrayCategories: any = [];
  stores: any = [];
  storesFiltred: any = [];
  temp: any = [];

  mapDestroye = true;
  


  /*********************************** */
  constructor(
    
    public alertService: AlertService,
    public loadingService: LoadingService,
    public agmService: AgmService,
    private categoriesService: CategoriesService,
    private loginService: LoginService,
    private locationService:LocationService,
    private pluginService: PluginService
  ) {
   

  }

  ngOnInit(){
    //this.chckAppGpsPermission();
    this.checkLogged();
    this.getCategories();
    this.getNearToMe();
  }

  
  getNearToMe(){
    this.categoriesService.getNearToMe()
  }


  checkLogged(){
    this.logged = this.loginService.isLogged();

    if (this.logged == true) {
      this.loginService.getUserStored();
    }
  }

  async getCategories(){
    try {
      await this.loadingService.presentLoading()

      this.categoriesService.getCategories()
        .subscribe(res => {
          //console.log("categories = ", res)
          this.arrayCategories = res.result;

          for (var i = 0; i <= this.arrayCategories.length - 1; i++) {

            if (this.arrayCategories[i].Tipo != '') {
              this.temp[i] = this.arrayCategories[i].Tipo
            }
          };
          //elimina los items repetidos
          this.categories = this.temp.reduce((a, e) => {
            if (!a.find(d => d == e)) { a.push(e); }
            return a;
          }, []);

          // filtramos el array por su categoria
          this.filterStores(this.categories['1'])

        });
    } catch (error) {
      alert("error line 139 = "+ error)
      this.alertService.presentAlert("Error", "Error al cargar las categorias")
      this.loadingService.dismissLoading()
    }
  }

  search(categoryId: string) {
    //console.log(categoryId);
    if(categoryId=='CERCA DE MI'){
      console.log('click en cerca de mi')
      this.searchCode='CERCA DE MI'
      //return this.agmService.agmMarket.next(1);
      console.log(this.searchCode);
      return this.searchCode
     
      
    }else{
      this.agmService.agmMarket.next(0);
      this.mapDestroye = false
      this.searchCode = categoryId;
      if (this.searchCode == '' || this.filterStores(this.searchCode) == 0) { return }
  
      setTimeout(() => {
        this.mapDestroye = true
      }, 1000);
      return this.searchCode
    } 
  }

  getParamMap(e) {
    this.paramMapDetails = e;
  }

  filterStores(category: string) {
      //obtiene los parametros que se necesitan para listar los componentes
    this.stores = this.arrayCategories
      .map(res => {
        return {
          lat: this.isLatitude(Number(res.Latitud)) ? Number(res.Latitud) : false,
          lng: this.isLongitude(Number(res.Logitud)) ? Number(res.Logitud) : false,
          id: res.Id,
          type: res.Tipo,
          address: res.Direccion,
          label: res.Establecimiento,
          draggable: false
        }
      }).filter(res => res.lat && res.lng);

      //lista filtrada por categoria, utilizada para los markers
      this.storesFiltred = this.arrayCategories
        .filter(data => { return data.Tipo == category })
        .map(res => {
          return {
            lat: this.isLatitude(Number(res.Latitud)) ? Number(res.Latitud) : false,
            lng: this.isLongitude(Number(res.Logitud)) ? Number(res.Logitud) : false,
            id: res.Id,
            type: res.Tipo,
            address: res.Direccion,
            label: res.Establecimiento,
            category: res.Categoria,
            draggable: false
          }
        }).filter(res => res.lat && res.lng);
    

    // este es para mostrar la lista en el componente
    this.agmService.storesList.next(this.stores);

    // Este es para el mostrar los marcadores en el mapa / click
    this.agmService.agmMarket.next(this.storesFiltred);
    this.loadingService.dismissLoading()

    return this.stores.length
  }

  isLatitude(lat) {
    return isFinite(lat) && Math.abs(lat) <= 90;
  }

  isLongitude(lng) {
    return isFinite(lng) && Math.abs(lng) <= 180;
  }


  /**
   * 
   * @returns {void}
   */
  searchView() {
    this.searchBar = 1;
  }

  getText(e) {
    this.searchbarText = e;
  }

  changeSearchToolbar(e) {
    this.searchBar = e;
    this.searchbarText = '';
  }

  onScroll($event: any) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 225;
    }
  }



  
}
