import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AgmService } from 'src/app/services/agm.service';
import { RewardService } from 'src/app/services/reward.service';
import { CommonService } from 'src/app/services/common/common.service';
import { CouponsService } from 'src/app/services/coupons.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {
  rewards: any = [];
  _loginServices: any
  constructor(
    public commonService: CommonService,
    public agmService: AgmService,
    private rewardService: RewardService,
    private couponServices: CouponsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loginServices: LoginService
  ) {
    this._loginServices = this.loginServices.isLogged()
  }

  ngOnInit() {

    if (this.loginServices.isLogged() == true) {
      this.rewardService.getRewards()
        .subscribe(res => {
          // si existe el parametro Id_Asignado en la posicion 0,
          //no existe listado de recompensas para este usuario
          if (res.result[0].Id_Asignado == 'La Promocion con ID  NO existe en la base de datos o esta Des Habilitada') {
            return this.rewards = res.result[0]
          } else {
            return this.rewards = res.result;
          }
        });
    } else {
      return
    }
  }

  rewardDetails(id: number) {
    this.router.navigate(['/pages/rewards/reward-details/' + id])
  }
}
