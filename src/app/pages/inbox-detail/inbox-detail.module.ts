import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InboxDetailPageRoutingModule } from './inbox-detail-routing.module';
import { InboxDetailPage } from './inbox-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InboxDetailPageRoutingModule,
    ComponentsModule,
    LazyLoadImageModule
  ],
  declarations: [InboxDetailPage]
})
export class InboxDetailPageModule {}
