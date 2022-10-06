import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgmService } from 'src/app/services/agm.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {

  apiUrl = environment.API

  // google maps zoom level
  zoom: number = 16;
  icon_map = '/assets/images/marker-puntosya.png';
  // initial center position for the map
  lat: number = 0;
  lng: number = 0;

  //Coordenadas para mi ubicacion actual
  mylat;
  mylng;

  located: boolean = false;
  markers: marker[] = [];
  markers_nearme: any[] = [];

  marker_image_base: string = '/assets/markers-v3/';

  marker_image: string = '';
  marker_nearme_image: string='';

  nearme;

  public mapStyles = [
    {
      "featureType": "poi",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ];

  public iconMarker;

  constructor(
    private router: Router,
    public agmService: AgmService,
    public categoriesService: CategoriesService,
    private geolocation: Geolocation,
    private http: HttpClient,
  ) {
  }

  ngOnInit() {
    this.checkNearme();
    this.geo();
  }

  geo(){
    
    this.geolocation.getCurrentPosition().then((resp) => {
      this.mylat =  resp.coords.latitude;
      this.mylng =  resp.coords.longitude; 
      console.log("my latitud =", this.mylat);
      console.log("my longitud =", this.mylng);

      let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMDEyMzQwMjIwIiwiaWF0IjoxNjU4OTI3MDk5fQ.sMAeTi21RqfHKJEfVVq6Mb2qMeZXXt3K6-j1jJ-cNYA'//this.userData.token
      }
       
      let body = {
        'cualsp' : '20',
        //'Dato0': "6.2227153",//JSON.stringify(latitude),
        //'Dato01': "-75.5816264",//JSON.stringify(longitude),
        'Dato0':  this.mylat, //JSON.stringify(latitude),
        'Dato01': this.mylng, //JSON.stringify(longitude),
        'Dato02': '10'
      }

      fetch(this.apiUrl + '/RedApi/reportes/ls', {
          method: "POST",
          body: JSON.stringify(body),
          headers: headers
        })
        .then(res => res.json())
        .then(res => console.log(res));
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });

   
  }

  //check opcion cerca de mi
  checkNearme() {
    this.agmService.agmMarket.subscribe(data => {
      if (data == 1) {
        this.nearme = 1;
        this.categoriesService.getNearToMe().subscribe(stores => {
         // console.log('stores result =',JSON.stringify(stores.result));
          if(stores){
            if(stores.result[0].Mensaje){
              this.markers_nearme = [];
            }else{
              this.markers_nearme = stores.result;

              this.listMarkers(true);
            }
          }
        });
      } else {
        this.nearme = 0;
        this.listMarkers(false);
      }
    });
  }

  listMarkers(param:any) {
    //console.log('hola33')
 
    this.agmService.agmMarket.subscribe(listMarkers => {
      if (!listMarkers) {
       // console.log('91 ==',listMarkers);
        return
      };
      //console.log('this.markers_nearme=',this.markers_nearme[0])
      if(param==false){
     
         console.log('97 ==',listMarkers);

        this.lat = listMarkers[0].lat;
        this.lng = listMarkers[0].lng ;
        this.markers = listMarkers;

        switch (this.markers[0].category) {
          case 'Oro':
            this.marker_image = this.marker_image_base + 'Pin-Oro-1.png';
            break;
          case 'Plata':
            this.marker_image = this.marker_image_base + 'Pin-Plata-1.png';
            break;
          case 'Bronce':
            this.marker_image = this.marker_image_base + 'Pin-Bronce-1.png';
            break;
  
            case undefined:
              console.log('la categorias e sundefined')
            this.marker_image = this.marker_image_base + 'Pin-Bronce-1.png';
            break;
  
  
          default:
            this.marker_image = this.marker_image_base + 'Pin-Plata-1.png';
            break;
        }
  
        this.iconMarker = {
          url: this.marker_image,
          scaledSize: {
            height: 40,
            width: 35
          }
        };
      }else{ 
        this.lat = Number(this.markers_nearme[0].Latitud_A); 
        this.lng = Number(this.markers_nearme[0].Longitud_A);
     
        this.marker_nearme_image = this.marker_image_base + 'Pin-Plata-1.png';
          
        this.iconMarker = {
          url: this.marker_nearme_image,
          scaledSize: {
            height: 40,
            width: 35
          }
        };
      }     
    })
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  goToStore(m) {
    if (m.id) {
      this.router.navigate(['/pages/store-detail/' + m.id])
    }
    if (m.Id) {
      this.router.navigate(['/pages/store-detail/' + m.Id])
    }
    if (m.Tienda) {
      this.router.navigate(['/pages/store-detail/' + m.Tienda])
    }
  }

  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      address: ""
    });
  }

  markerDragEnd(m: marker, $event: any) {
  }
}

interface marker {
  lat: number;
  lng: number;
  address: string
  label?: string;
  category?: string;
  id?: number
  draggable?: boolean;
}

