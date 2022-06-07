import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-confirm',
  templateUrl: './alert-confirm.component.html',
  styleUrls: ['./alert-confirm.component.scss'],
})
export class AlertConfirmComponent implements OnInit {
  @Input() data: any;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log("data", this.data);
  }


  dismiss(resp = false) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({resp});
  }

}
