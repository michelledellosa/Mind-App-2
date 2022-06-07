import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  @Input() data: any;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log("data", this.data)
  }


  dismiss(resp) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'resp': resp,
    });
  }

}
