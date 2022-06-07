import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductDetailsPageRoutingModule } from './product-details-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ProductDetailsPage } from './product-details.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsPageRoutingModule,
    LazyLoadImageModule,
    SharedModule
  ],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsPageModule {}
