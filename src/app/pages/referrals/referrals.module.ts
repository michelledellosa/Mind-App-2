import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReferralsPageRoutingModule } from './referrals-routing.module';

import { ReferralsPage } from './referrals.page';

import { ComponentsModule } from 'src/app/components/components.module';
import { NgxPaginationModule } from 'ngx-pagination'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NgxPaginationModule,
    ReferralsPageRoutingModule
  ],
  declarations: [ReferralsPage]
})
export class ReferralsPageModule {}
