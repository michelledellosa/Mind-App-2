import { Injectable } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AlertConfirmComponent } from '../../_alert/alert-confirm/alert-confirm.component';
import { AlertComponent } from '../../_alert/alert/alert.component';
import { modalEnterAnimation, modalLeaveAnimation } from '../../_animations/custom.animation';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController,
    public modalController: ModalController) { }


  async presentAlert(header: string = null, text: string = null, message: string = null) {
    const modal = await this.modalController.create({
      component: AlertComponent,
      backdropDismiss: true,
      cssClass: 'my-class-alert-modal',
      enterAnimation: modalEnterAnimation,
      leaveAnimation: modalLeaveAnimation,
      componentProps: {
        'data': { header, message, text: text }
      }
    });


    return await modal.present();
  }

  async presentAlertConfirm(message: string = null) {
    return new Promise(async (resolve) => {
      const modal = await this.modalController.create({
        component: AlertConfirmComponent,
        backdropDismiss: true,
        cssClass: 'my-class-alert-modal',
        enterAnimation: modalEnterAnimation,
        leaveAnimation: modalLeaveAnimation,
        componentProps: {
          'data': { title: 'MIND', question: message }
        }
      });

      /**
       * TODO: definir accion al hacer click en backdrop
       * esto genera error, se solventa momentaneamente
       */
      modal.onDidDismiss()
        .then((dataReturned) => {
          const { resp = false } = (dataReturned.data) ? dataReturned.data : {};
          resolve(resp);
          return;
        });


      return await modal.present();
    })
  }

  getTranslation(text: string) { return text; }
}
