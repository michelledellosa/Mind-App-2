import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    TranslateModule,
    RouterModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
