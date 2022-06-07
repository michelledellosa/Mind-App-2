import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GpsStorePageRoutingModule } from './gps-store-routing.module';
import { GpsStorePage } from './gps-store.page';

import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpsStorePageRoutingModule,
    ComponentsModule,
    SharedModule,
    FontAwesomeModule
  ],
  declarations: [GpsStorePage]
})
export class GpsStorePageModule {}
