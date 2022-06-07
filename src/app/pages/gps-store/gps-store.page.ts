import { Component, OnInit } from '@angular/core';
import { AgmService } from 'src/app/services/agm.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { LocationService } from 'src/app/services/location.service';

import { ActivatedRoute, Router } from '@angular/router';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-gps-store',
  templateUrl: './gps-store.page.html',
  styleUrls: ['./gps-store.page.scss'],
})
export class GpsStorePage implements OnInit {

  map = null;
  recipeId;

  //retorno de la ruta optima
  directionsService = new google.maps.DirectionsService();
  //renderiza ruta en el mapa
  directionsDisplay = new google.maps.DirectionsRenderer();




  store: any = [];
  detail: any = [];

  origin = {
    position: {
      lat: 0,
      lng: 0,
    },
    title: 'origin'
  }

  destination: {
    position: {
      lat: '',
      lng: '',
    },
    title: ''
  }
  constructor(
    private categoriesServices: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private agmService: AgmService,
    public locationService: LocationService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      this.recipeId = data.get('id_store');
      console.log('recipe id gps map component = '+this.recipeId);
      this.loadMap()
   })

    

  }

  loadMap() {
    this.locationService.gpsActivated.subscribe((res: any) => {
      console.log('accors = '+ JSON.stringify(res))
       if (res==null) { 
         console.log('Por favor active su gps');
         this.router.navigate(['pages/store-detail/' + this.recipeId]);
       }
       this.origin.position.lat = res.latitude
       this.origin.position.lng = res.longitude
       console.log('this.origin.position.lat)',this.origin.position.lat);
      
       // create a new map by passing HTMLElement - acceder al elemento con id map
       const mapEle: HTMLElement = document.getElementById('map');
   
       //indicadores
       const indicatorsEle: HTMLElement = document.getElementById('indicators');
   
       // create map
   
       this.map = new google.maps.Map(mapEle, {
         center: new google.maps.LatLng(8.353993,-62.6802515),
         zoom: 13
       })
       
       // servicio de display, con referencia al mapa para mostrar los marcadores
       this.directionsDisplay.setMap(this.map);
       //panel para mostrar indicaciones
       this.directionsDisplay.setPanel(indicatorsEle);
   
       //renderiza map con todos sus elementos
       google.maps.event.addListenerOnce(this.map, 'idle', () => {
         mapEle.classList.add('show-map');
         //this.renderMarkers();
         this.calculateRoute();
       })

     });    
  }

  addMarker(marker: Marker) {

    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  private calculateRoute() {
    console.log('this.origin.position.lng = calculateRoute()' + this.origin.position.lng)
    this.activatedRoute.paramMap.subscribe(data => {

      let recipeId = data.get('id_store');
      this.categoriesServices.getCategories()
        .subscribe(data => {
          this.store = data.result;
          this.detail = this.store.find(res => { return res.Id == recipeId });
         console.log(this.detail);
          this.directionsService.route({
            
            origin: new google.maps.LatLng(this.origin.position.lat, this.origin.position.lng),//"cambridge, ma",
            destination: new google.maps.LatLng(this.detail.Latitud, this.detail.Logitud),//"boston, ma",
            
           //Datos para pruebas en el navegador
            /*origin: new google.maps.LatLng(8.353993, -62.6802515),
            destination: new google.maps.LatLng(6.2227041, -75.5816355),*/

            //tipo de viaje
            travelMode: google.maps.TravelMode.DRIVING,
          }, (response, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.directionsDisplay.setDirections(response);
            } else {
              alert('Erro al Calcular las rutas');
              //alert('Could not display directions due to: ' + status);
            }
          });

        })
    });

  }

}