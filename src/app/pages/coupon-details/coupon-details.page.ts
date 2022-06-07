import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AgmService } from 'src/app/services/agm.service';
import { CouponsService } from 'src/app/services/coupons.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.page.html',
  styleUrls: ['./coupon-details.page.scss'],
})
export class CouponDetailsPage implements OnInit {
  title:string;
  coupon :any=[];

  constructor(
    public commonService: CommonService,
    public agmService: AgmService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private couponService: CouponsService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      let recipeId = data.get('id_coupon');
      let temp : any=[];

      this.couponService.getCoupons()
      .subscribe(res=>{
        temp=res.result;  

        this.coupon= temp.find(res=>{
          return res.Id_Cupones==recipeId
        });
        //console.log('this.coupons= '+JSON.stringify(this.coupon));
        this.title=this.coupon.Nombre_del_Cupon;
      })

    })
  }

}
