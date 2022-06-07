import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { GridComponent } from './grid/grid.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from 'src/app/components/components.module';

import { PipesModule } from 'src/app/pipes/pipes.module';

//import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    GridComponent,
    SidebarMenuComponent,
    HeaderComponent,
    HeaderBackComponent
  ],
  entryComponents: [
    GridComponent,
    SidebarMenuComponent,
    HeaderComponent,
    HeaderBackComponent
  ],
  exports: [
    GridComponent,
    SidebarMenuComponent,
    HeaderComponent,
    HeaderBackComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    TranslateModule,
    PipesModule,
    ComponentsModule/*,
    MatIconModule*/
  ]
})
export class SharedModule { }
