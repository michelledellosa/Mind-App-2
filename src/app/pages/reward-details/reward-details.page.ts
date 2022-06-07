import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RewardService } from 'src/app/services/reward.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-reward-details',
  templateUrl: './reward-details.page.html',
  styleUrls: ['./reward-details.page.scss'],
})
export class RewardDetailsPage implements OnInit {
  title:string;
  reward:any=[];

  constructor(
    public commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private rewardService: RewardService
    ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      //toma el id de la url actual
      let recipeId = data.get('id_reward');
      let temp : any=[];
      this.rewardService.getRewards()
      .subscribe(res=>{
        temp=res.result;

        this.reward = temp.find(data=>{
          return data.Id_Promociones == recipeId
        });
        //console.log('this.reward= '+JSON.stringify(this.reward));
        this.title=this.reward.Nombre_Promocion;
//        console.log('titulo de details recompensa='+this.title)
      })
    });

  }

}
