import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PopoverController } from '@ionic/angular';
import { ReferralsService } from 'src/app/services/referrals.service';
import { NewReferralComponent } from 'src/app/components/new-referral/new-referral.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.page.html',
  styleUrls: ['./referrals.page.scss'],
})
export class ReferralsPage implements OnInit {
  public page: number;
  referrals= [];
  itemsPage: number = 5;
  apiUrl = environment.API
  

  constructor(
    public datePipe: DatePipe,
    public popoverController: PopoverController,
    public referralService: ReferralsService,
    
  ) { }

  ngOnInit() {
    this.getReferrals();
  }


  getReferrals() {
    this.referralService.getReferrals().subscribe(data => {
      if (data.result) {
        this.referrals = data.result;
      } else {
        console.log('Error al obtener listado de referidos')
        return 
      }

    })
  }

  async showPopover(ev) {
    console.log('dentro del popover');
    const popover = await this.popoverController.create({
      component: NewReferralComponent,
      event: ev,
      mode: 'ios',
      backdropDismiss: true

    });
    await popover.present();

  }

}
