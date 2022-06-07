import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition, GeolocationOptions } from '@awesome-cordova-plugins/geolocation/ngx';
import { BackgroundGeolocation, BackgroundGeolocationResponse, BackgroundGeolocationConfig } from '@awesome-cordova-plugins/background-geolocation/ngx';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityTrackerService {

  public watch: any;
   public lat: number = 0;
   public lng: number = 0;
   options: GeolocationOptions;
   currentPos: Geoposition;
   time: any;


  constructor(
    public zone: NgZone,
   public backgroundGeolocation: BackgroundGeolocation,
   private geolocation: Geolocation,
  ) {}

  async startTracking() {
    let config: BackgroundGeolocationConfig = {
    desiredAccuracy: 10,
    stationaryRadius: 0,
    distanceFilter: 0,
    notificationTitle: 'Background Tracking',
    notificationText: 'Enabled',
    debug: false,
    interval: 5*60*1000,
    stopOnTerminate: false,
    url: 'http://medtrix.medimojo.co/api/v3/store-geo-location',
    httpHeaders: {
      'Content-Type': 'application/json'
    },
    postTemplate: {
      lat: '@latitude',
      lng: '@longitude',
      time: '@time',
    },
  }
  this.backgroundGeolocation.configure(config).then((location: BackgroundGeolocationResponse) => {
      this.zone.run(() => {
        this.lat = location.latitude;
        this.lng = location.longitude;
        this.time = location.time;
      });
   }, (err) => {
    console.log(err);
  });
  // Turn ON the background-geolocation system.
  this.backgroundGeolocation.start();
  // Foreground Tracking
  let options = {
    frequency: 3000,
    enableHighAccuracy: true
  };
  this.watch = this.geolocation.watchPosition(options)
   .pipe(filter((p: any) => p.code === undefined))
   .subscribe((position: Geoposition) => {
    // Run update inside of Angular's zone
     this.zone.run(() => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
       this.time = new Date();
      const location = {
        src: 'bg trcker',
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        time: new Date(),
      };
    });
   });
  }
    stopTracking() {
     // console.log('stopTracking');
     this.backgroundGeolocation.finish();
     this.watch.unsubscribe();
    }

}
