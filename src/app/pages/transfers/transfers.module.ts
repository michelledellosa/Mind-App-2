import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TransfersPageRoutingModule } from './transfers-routing.module';
import { TransfersPage } from './transfers.page';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransfersPageRoutingModule,
    ComponentsModule,
    LazyLoadImageModule,
    SharedModule
  ],
  declarations: [TransfersPage]
})
export class TransfersPageModule {}
