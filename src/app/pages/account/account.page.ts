import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { LoadingService } from 'src/app/services/common/loading.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  showToolbar = false;
  url = environment.account
  constructor(
    public commonService: CommonService,
    public loadingService: LoadingService
  ) { }

  async ngOnInit() {
    setTimeout(async () => {
      // await this.loadingService.presentLoading()
    }, 300);
  }

  closeModal() {
    console.log("closeModal")
    this.commonService.goToRouter("/home")
  }

  dismissLoading() {
    //console.log("dismissLoading")
    // this.loadingService.dismissLoading()
  }



}
