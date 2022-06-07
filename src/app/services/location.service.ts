import { Injectable } from '@angular/core';


import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  /*options: GeolocationOptions;
  currentPos: Geoposition;*/

  public geohash = new BehaviorSubject({});
  public _location = new BehaviorSubject({});

  public gpsActivated = new BehaviorSubject(null);
  
  locCords: any;
  times: any;
  timetest: any;
/*
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy: number;
  geoAddress: string;

  watchLocationUpdates: any;
  loading: any;
  isWatching: boolean;

  // Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };*/

  constructor(
    public platform: Platform,
    private nativeGeocoder: NativeGeocoder,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy,
    private router: Router
  ) {

    this.locCords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
    }

    this.times = Date.now();
    this.timetest = Date.now();
    
  }

  ngOnInit() {
//    this.getGeolocation();
  }

 /* getCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        //this.latitude = position.coords.latitude;
        //this.longitude = position.coords.longitude;

        alert('position.coords.latitude = '+ position.coords.latitude)
        //this.zoom = 12;
        const { latitude, longitude } = position.coords;
        //const range = this.getGeohashRange(latitude, longitude, 5);
        
      });
    }
  }*/

  /*Activacion de GPS*/

  chckAppGpsPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
      .then(
        result => {
          //result = false : gps desactivado
          //result = true : gps activado
          //result = true : gps desactivado pero ha sido activado antes dentro de la app
          if (result.hasPermission) {
             this.requestToSwitchOnGPS();
          } else {
            this.askGPSPermission(); //cuando el gps esta apagado
          }
        }).catch(err => {
          console.log('Ha ocurrido un error : '+err)
        })
  }

   askGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) { }
      else {
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then((response) => {
            //alert('request inside askGPSPermission() response = '+JSON.stringify(response)) //true si se ;e da aceptar al alert
                                                                                          // response.hasPermission=false  si le doy a no gracias
            this.requestToSwitchOnGPS()
          })
          .catch(error => { console.log('Ha ocurrido un error : '+error) })
      }
    });
  }

   requestToSwitchOnGPS() {
     //alert('1');
     this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
      .then((response) => { 
        //response.code == 1 : GPS Activado
        //response.code == 4 : GPS Desactivado
        switch (response.code ) {
          case 1: { this.getLocationAccCords(); break}
          case 4: { this.gpsActivated.next(null); break }
          default: {  
            try{
              this.getLocationAccCords(); break
            }catch {err=>{
              console.log(err);
              this.gpsActivated.next(null);
            }}
          }
        }         
      })
      .catch(error => console.log('Ha ocurrido un error : '+error));
  }

  async getLocationAccCords() {
    //alert('getlocation');
    await this.geolocation.getCurrentPosition()
      .then((response) => {
        this.locCords.latitude = response.coords.latitude;
        this.locCords.longitude = response.coords.longitude;
        this.locCords.accuracy = response.coords.accuracy;
        this.locCords.timestamp = response.timestamp;
        this.gpsActivated.next(this.locCords);
       // alert(JSON.stringify(this.locCords));
      }).catch((err) => {
        console.log('Ha ocurrido un error : '+err);
      })
  }

  /* Final activacion GPS*/

}
