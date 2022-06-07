import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';
import { TranslateModule } from '@ngx-translate/core';
//import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MapComponent } from './map/map.component';
import { StoresComponent } from 'src/app/components/stores/stores.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';
import { TabProductsComponent } from 'src/app/components/tab-products/tab-products.component';
import { StoreVideosComponent } from 'src/app/components/store-videos/store-videos.component';
import { ModalCalificateComponent } from 'src/app/components/modal-calificate/modal-calificate.component';
import { GpsMapComponent } from 'src/app/components/gps-map/gps-map.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { UserInfoComponent } from './user-info/user-info.component';
import { WebviewTabComponent } from './webview-tab/webview-tab.component';
import { CommentsVideosComponent } from './comments-videos/comments-videos.component';
import { PopoverCalendarComponent } from './popover-calendar/popover-calendar.component';
import { CalendarModule } from 'ion2-calendar';
import { NewReferralComponent } from './new-referral/new-referral.component';
//import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MapComponent, 
    StoresComponent, 
    HeaderComponent, 
    NotFoundComponent,
    SearchbarComponent, 
    TabProductsComponent, 
    GpsMapComponent, 
    StoreVideosComponent, 
    ModalCalificateComponent,
    SpinnerComponent,
    UserInfoComponent,
    WebviewTabComponent,
    CommentsVideosComponent,
    PopoverCalendarComponent,
    NewReferralComponent
  ],
  exports: [
    MapComponent, 
    StoresComponent, 
    HeaderComponent, 
    NotFoundComponent, 
    SearchbarComponent, 
    TabProductsComponent, 
    GpsMapComponent, 
    StoreVideosComponent, 
    ModalCalificateComponent,
    SpinnerComponent,
    UserInfoComponent,
    WebviewTabComponent,
    CommentsVideosComponent,
    PopoverCalendarComponent,
    NewReferralComponent
  ],
  entryComponents: [MapComponent, HeaderComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    PipesModule,
    CalendarModule,
    LazyLoadImageModule,
    /*MatIconModule,
    CallNumber*/
  ]
})
export class ComponentsModule { }
