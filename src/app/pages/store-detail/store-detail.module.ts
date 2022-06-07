import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { IonicModule } from '@ionic/angular';
import { StoreDetailPageRoutingModule } from './store-detail-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { StoreDetailPage } from './store-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreDetailPageRoutingModule,
    ComponentsModule,
    LazyLoadImageModule
  ],
  declarations: [StoreDetailPage]
})
export class StoreDetailPageModule {}
