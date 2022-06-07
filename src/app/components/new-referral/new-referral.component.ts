import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-new-referral',
  templateUrl: './new-referral.component.html',
  styleUrls: ['./new-referral.component.scss'],
})
export class NewReferralComponent implements OnInit {
  user;
  urlReferral: string = '';

  constructor(
    private popoverCtrl: PopoverController,
    private clipboard: Clipboard
  ) { }

  ngOnInit() {
    this.referralLink();
  }

  referralLink() {
    if (localStorage.getItem('userLogin') != null) {
      this.user = JSON.parse(localStorage.getItem('userLogin'));
      this.urlReferral = 'https://neuron-red-post-api.azurewebsites.net/#/nuevoReferido/'+this.user.id_login+'/'+this.user.fullName
    }else{
      this.urlReferral= 'Error al crear url de referido'
    }
  }

  getDates(){ 
    this.copyString();
    this.popoverCtrl.dismiss();
  }

  // Copy
  copyString() {
    this.clipboard.copy(this.urlReferral);
  }

}
