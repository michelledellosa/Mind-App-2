import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ProductsPageRoutingModule } from './products-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductsPage } from './products.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProductsPageRoutingModule,
    LazyLoadImageModule,
    SharedModule,
    PipesModule
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
