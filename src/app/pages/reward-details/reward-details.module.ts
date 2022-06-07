import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { RewardDetailsPageRoutingModule } from './reward-details-routing.module';
import { RewardDetailsPage } from './reward-details.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardDetailsPageRoutingModule,
    ComponentsModule,
    LazyLoadImageModule
  ],
  declarations: [RewardDetailsPage]
})
export class RewardDetailsPageModule {}
