import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loader: any;

  constructor(public loadingController: LoadingController) { }


  async presentLoading(message?) {
    if (this.loader) {
      this.loader.dismiss();
    }
    this.loader = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading'
    });

    this.loader.present();
    this.loader.onDidDismiss(() => {
      this.loader = null;
    });
  }

  dismissLoading() {
    if (this.loader) {
      this.loader.dismiss();
    }
  }
}
