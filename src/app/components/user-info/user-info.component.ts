import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ReferralsService } from 'src/app/services/referrals.service';
import { PointsControlService }  from 'src/app/services/points-control.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  user: any;
  userData;
  event;
  referralsQtty:number=0;
  

  //Puntos Pendientes
  outstanding_points: number;
  //Puntos Disponibles
  available_points:number;

  constructor(
    public loginService: LoginService,    
    public pointsService: PointsControlService
  ) {
   }

  ngOnInit() {
    this.loginService.userData.subscribe(data=>{
      //console.log('data = '+JSON.stringify(data));
      if(data){
       this.user= data.fullName;
       this.userData=1;
      }else{
        this.user='';
        this.userData=0;
      };

    })
  }


}
