import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { CouponsPageRoutingModule } from './coupons-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CouponsPage } from './coupons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CouponsPageRoutingModule,
    ComponentsModule,
    LazyLoadImageModule,
    SharedModule
  ],
  declarations: [CouponsPage]
})
export class CouponsPageModule {}
