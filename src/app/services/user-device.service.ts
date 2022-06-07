import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { userDevice } from '../model/user-device.model';
import { Storage } from '@ionic/storage-angular';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UserDeviceService {
  //Recuperar coleccion de firestore
  userCollection: AngularFirestoreCollection<userDevice>;
  userDoc: AngularFirestoreDocument<userDevice>;
  //va a guardar la coleccion de objetos de tipo userDevice
  users: Observable<userDevice[]>;
  user: Observable<userDevice>;
  dataDevice: userDevice[];

  constructor(
    private db: AngularFirestore,
    private storage: Storage
  ) {
    //obtener coleccion de dispositivos
    this.userCollection = db.collection('devices');
  }

  getDevices() {
    //obtener dispositivos registrados en firestore
    this.users = this.userCollection.snapshotChanges().pipe(
      map(res => {
        return res.map(data => { //obtener payload
          // console.log('data = '+JSON.stringify(data));
          const devices = data.payload.doc.data() as any;//userDevice;
          devices.id = data.payload.doc.id;
          return devices;
        })
      })
    );
    return this.users
  }

  deviceRegister(user: userDevice) {

    if ((localStorage.getItem('user') == null)) {
      //almacenar parametros en local storage
      localStorage.setItem('user', JSON.stringify(user))

      //almacenar parametos en firestore
      this.userCollection.add(user);

    } else {
      if ((localStorage.getItem('user') != null)) {
        //cuando se reciban los parametros de login, se deben comparar con estos
        //para saber si hay que actualizar o no

        //convierte el string en objeto - array
        this.dataDevice = JSON.parse(localStorage.getItem('user'));
      }

    }
  }
}
