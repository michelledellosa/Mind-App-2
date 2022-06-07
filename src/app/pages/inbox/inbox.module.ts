import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { InboxPageRoutingModule } from './inbox-routing.module';
import { InboxPage } from './inbox.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InboxPageRoutingModule,
    ComponentsModule,
    LazyLoadImageModule,
    SharedModule
  ],
  declarations: [InboxPage]
})
export class InboxPageModule {}
