import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { CouponDetailsPageRoutingModule } from './coupon-details-routing.module';
import { CouponDetailsPage } from './coupon-details.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CouponDetailsPageRoutingModule,
    ComponentsModule,
    LazyLoadImageModule
  ],
  declarations: [CouponDetailsPage]
})
export class CouponDetailsPageModule {}
