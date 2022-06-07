import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  //Recuperar coleccion de firestore, esta colocado en any
  //por si quieren cambiar la estructura de las notificaciones en el backend
  notiCollection: AngularFirestoreCollection<any>;
  notiDoc:AngularFirestoreDocument<any>;

  notifications:Observable<any[]>;
  notification: Observable<any>;

  notiArray={
    id_login:0,
    title:'',
    body:'',
    wasTapped:'',
    date:''
  }
  
  constructor(private db: AngularFirestore) {
    //obtener coleccion de notificaciones
    this.notiCollection = db.collection('notifications',ref=> ref.orderBy('date','desc'));
   }

  getNotifications(){
    this.notifications = this.notiCollection.snapshotChanges().pipe(
      map(res=>{
        return res.map(data=>{
          let notifications = data.payload.doc.data() as any;
          notifications.id = data.payload.doc.id;
          return notifications;
        })
      })
    );
    return this.notifications
  }

  // se recibe parametro de tipo any, porque la estructura de la notificacion puede cambiar mas adelante
  addNotification(notification:any,id:number){
    this.notiArray.id_login=id;
    this.notiArray.title= notification.title;
    this.notiArray.body = notification.body;
    this.notiArray.wasTapped = notification.wasTapped;
    this.notiArray.date =  new Date().toISOString();
    this.notiCollection.add(this.notiArray);
  }

  deleteNotification(id:string){
    this.notiDoc = this.db.doc('notifications/'+id);
    this.notiDoc.delete();
    
  }

}
