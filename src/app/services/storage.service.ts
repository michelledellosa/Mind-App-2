import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    public storage: Storage,
    private nativeStorage: NativeStorage
  ) { }

  async init() {
    const storage = await this.storage.create();
    this.storage = storage;

    this.getValue();
  }

  async setValue(usuario, password) {
    await this.storage.set('credenciales', { usuario: usuario, password: password })
  }

  async getValue() {
    await this.storage.get('credenciales').then((val) => {
      console.log('Credenciales= '+JSON.stringify(val))
    })
  }

  async ValidarUsuario() {
    return await this.storage.get("credenciales");
  }
}
