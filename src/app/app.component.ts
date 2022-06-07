import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { Geolocation, GeolocationOptions } from '@awesome-cordova-plugins/geolocation/ngx';

import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { AgmService } from './services/agm.service';

import { userDevice } from './model/user-device.model';
import { UserDeviceService } from 'src/app/services/user-device.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { LoginService } from './services/login.service';
import { PluginService } from './services/plugin.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {

  devices: userDevice[];
  user: userDevice = {
    // id:'',
    id_login: 7510,
    uuid: '',
    token: ''
  };

  //Coordenadas para mi ubicacion actual 
  myLocation = {
    position: {
      lat: 0,
      lng: 0,
    },
    title: 'Tu'
    /*lat: 8.35399066632706, 
    lng: -62.68010258674622*/
  }

  locCords: any;

  constructor(
    private fcm: FCM,
    public platform: Platform,
    private device: Device,
    private router: Router,
    private userDevice: UserDeviceService,
    private notiService: NotificationsService,
    public alertController: AlertController,
    public loginService: LoginService,
    public agm:AgmService,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy,
    private pluginService: PluginService
  ) {
    this.checkLogin();
  }

  ngOnInit(){

  }
  
  checkLogin() {
    //al abrir la app lo primero que valida es si existe una sesion abierta
    //para llenar el behavior en loginService que muesta los datos de usuarios en el sidemenu
    if (this.loginService.isLogged() == true) {
      this.loginService.userData.next(JSON.parse(localStorage.getItem('userLogin')));
    } else {
      //console.log('sesion no iniciada')
    }
  }

  checkPlatform() {
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
        //uuid es un codigo identificador unico para cada tlf
        this.user.uuid = this.device.uuid;
        this.userDevice.getDevices().subscribe(data => {
          this.devices = data;
        });
        this.firebaseNotifications();
      
 
      } else { 
        alert('No es Cordova');
        return 
      }

    })
  }
  
  firebaseNotifications() {
    this.fcm.subscribeToTopic('puntosya');
    //obtener token de firebase para recibir notificaciones personalizadas
    this.fcm.getToken().then(token => {
      this.user.token = token;
      this.userDevice.deviceRegister(this.user);
      //se ejecuta cada vez que se abre la app, y detecta si se abrio desde una notificacion
      this.fcm.getInitialPushPayload().then(data => {
        if (data != null) {
          this.presentAlert(JSON.stringify(data.title));
          this.notiService.addNotification(data, this.user.id_login);
        }
      })
    }).catch(err => {
     // alert('error=' + err);
     
    });

    this.fcm.onNotification().subscribe(data => {
      if (data) {
        this.presentAlert(JSON.stringify(data.title));
        this.notiService.addNotification(data, this.user.id_login);

      }
    });
  }

  async presentAlert(title) {
    const alert = await this.alertController.create({
      subHeader: title,/*
      message: this.usuario.email,*/
      buttons: [
        {
          text: 'ABRIR',
          role: 'abrir',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigate(['pages/inbox']);
          }
        },

        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: () => {
            return
          }
        }]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
  }  

}
