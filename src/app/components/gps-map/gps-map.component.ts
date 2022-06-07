import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocationService } from 'src/app/services/location.service';
import { CategoriesService } from 'src/app/services/categories.service';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-gps-map',
  templateUrl: './gps-map.component.html',
  styleUrls: ['./gps-map.component.scss'],
})
export class GpsMapComponent implements OnInit {

  @Input() latOrigin: any;
  @Input() lngOrigin: any;
  /*@Input() latDestination: any;
  @Input() lngDestination: any;
  @Input() titleDestination: any;*/
  recipeId;
  map = null;

  store: any = [];
  detail: any = [];

  //retorno de la ruta optima
  directionsService = new google.maps.DirectionsService();
  //renderiza ruta en el mapa
  directionsDisplay = new google.maps.DirectionsRenderer();

  //Coordenadas para mi ubicacion actual 
  origin = {
    position: {
      lat: 8.35399066632706,
      lng: -62.68010258674622,
    },
    title: 'origin'
    /*lat: 8.35399066632706, 
    lng: -62.68010258674622*/
  }

  detination: {
    lat: 8.34467058872437,
    lng: 62.69622802734376
  }

  //renderMarkers;
  constructor(
    public locationService: LocationService,
    private categoriesServices: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    alert('gps component');
    await this.locationService.chckAppGpsPermission()

    this.activatedRoute.paramMap.subscribe(data => {
      this.recipeId = data.get('id_store');
      alert('recipe id gps map component = '+this.recipeId);
   })
      /*this.locationService._location.subscribe((res: any) => {
        if (!res) { alert ('ubicacion desactivada'); return }
        //alert('ubicacion')
          this.origin.position.lat = res.latitude
          this.origin.position.lng = res.longitude
      });*/

      

      this.loadMap();  
     
        
  }



  loadMap() {
    
    this.locationService.gpsActivated.subscribe((res:any)=>{
      if (!res) { return }
      this.origin.position.lat = res.locCords.latitude;
      this.origin.position.lng = res.locCords.latitude;

      alert('this.origin = '+ this.origin.position)


           // create a new map by passing HTMLElement - acceder al elemento con id map
    const mapEle: HTMLElement = document.getElementById('map');

    //indicadores
    const indicatorsEle: HTMLElement = document.getElementById('indicators');

    // create map
  
      this.map = new google.maps.Map(mapEle, {
        center: new google.maps.LatLng(this.origin.position.lat, this.origin.position.lng),
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

    })


  }


  addMarker(marker: Marker) {
    
      return new google.maps.Marker({
        position: marker.position,
        map: this.map,
        title: marker.title
      });
  }

  private calculateRoute() {
 alert('this.origin.position.lng = '+this.origin.position.lng)
      this.activatedRoute.paramMap.subscribe(data => {
 
        let recipeId = data.get('id_store');
        this.categoriesServices.getCategories()
          .subscribe(data => {
            this.store = data.result;
            this.detail = this.store.find(res => { return res.Id == recipeId });
            alert('this.detail = '+ JSON.stringify(this.detail));
            this.directionsService.route({
              origin: new google.maps.LatLng(this.origin.position.lat,this.origin.position.lng),//"cambridge, ma",
              destination: new google.maps.LatLng(8.34467058872437, 62.69622802734376),//"boston, ma",
              //tipo de viaje
              travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.directionsDisplay.setDirections(response);
              } else {
                //alert('Could not display directions due to: ' + status);
              }
            });
            
          })
      });
  
  }

}
