import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

let notifications = "push_notifications"

@Injectable({
  providedIn: 'root'
})
export class OnesignalService {

  public notifications = new BehaviorSubject(false);
  mensajes: any[] = [];
  userId: string;
  //pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(
    public router: Router,
    //private oneSignal: OneSignal,
    public modalController: ModalController,
    public platform: Platform
  ) {
    this.loadMessages();
  }

  /**
   * 
   * @returns inicialiamoz el servisio de notificaciones
   */

  async initialSetup() {
/*
    if (!this.platform.is("cordova")) { return }

    // Inicializar OneSignal
    this.oneSignal.startInit(environment.ONE_SIGNAL_APP_ID, environment.ONE_SIGNAL_GOOGLE_PROJECT_NUMBER);

    // enfoque de la notificacion
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    // se activa cuando el usuario recibe una notificacion
    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      // do something when notification is received
      console.log("Notificación recibida", noti);
      this.notifications.next(true);
      this.notificacionRecibida(noti);
    });

    // se activa cuando el usuario hace click en la notificacion
    this.oneSignal.handleNotificationOpened().subscribe(async (noti) => {
      // do something when a notification is opened
      console.log("Notificación abierta", noti);
      await this.notificacionRecibida(noti.notification);
      this.actionNoticationPush(noti.notification);
    });

    this.oneSignal.endInit();
*/
  }



  // preguntat  a byron donde almacenamos este id push
  async getIdsOneSignal() {/*
    // Obtener ID del suscriptor
    let info = await this.oneSignal.getIds()
    this.userId = info.userId || "bb4c4088-3427-44ff-8380-570aa6c1ce1a";
    console.log("Obtener ID del suscriptor", this.userId);*/
  }


  /**
   * 
   * @returns retornamos el id del suscriptot
   */
  async getUserIdOneSignal() {
   /* if (!this.platform.is("cordova")) { return false }
    console.log("Cargando userId");
    // Obtener ID del suscriptor
    const info = await this.oneSignal.getIds();
    this.userId = info.userId;
    console.log("Cargando userId", this.userId);
    return info.userId;
*/
  }


  /**
   * 
   * @param noti agregamos los mensajes al localstorage y tratamos la data que nos envia onesignal
   * @returns 
   */
  async notificacionRecibida(/*noti: OSNotification*/) {

   /* this.loadMessages();

    const payload = noti.payload;

    const existePush = this.mensajes.find(
      (mensaje) => mensaje.notificationID === payload.notificationID
    );

    if (existePush) { return; }

    const notication = {
      type: payload.additionalData.type ? payload.additionalData.type : 1,
      notificationID: payload.notificationID,
      img: payload.additionalData.img ? payload.additionalData.img : false,
      title: payload.title,
      subtitle: payload.body,
      date: Date.now(),
      body: payload.additionalData.body,
      url: payload.additionalData.url ? payload.additionalData.url : false,
    };

    this.mensajes.unshift(notication);

    this.pushListener.emit(payload);

    this.saveMessages();*/
  }


  /**
   * 
   * @param noti realizamos un accion con la parametros de la notifiacion
   */
  async actionNoticationPush(/*noti: OSNotification*/) {
  //  console.log("noti", noti)
  }


  /**
   * 
   *@param noti savalmoas los mensajes en el localstorage
   */
  saveMessages() {
    localStorage.setItem(notifications, JSON.stringify(this.mensajes));
  }

  /**
   * 
   *@param noti  cargamos los mensajes del localstorage
   */

  loadMessages() {
    this.mensajes = JSON.parse(localStorage.getItem(notifications)) || [];
    return this.mensajes;
  }

  /**
   * 
   *@param noti  borramos los mensajes del localstorage
   */
  deleteMessages() {
    this.mensajes = [];
    localStorage.removeItem(notifications);
    this.saveMessages();
  }

  /**
     * 
     *@param noti  obtenemos los mensajes del localstorage
     */
  getMensajes() {
    this.loadMessages();
    return [...this.mensajes];
  }
}
