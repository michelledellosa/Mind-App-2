import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {NgxPaginationModule} from 'ngx-pagination';
//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';
import { customAnimation } from './_animations/custom.animation';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from "ion2-calendar";
import { DatePipe } from '@angular/common';
import { TranslationService } from './services/translation-service.service';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { AppRate } from '@awesome-cordova-plugins/app-rate/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { BackgroundGeolocation } from '@awesome-cordova-plugins/background-geolocation/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Media } from '@awesome-cordova-plugins/media/ngx';
import { MediaCapture} from '@awesome-cordova-plugins/media-capture/ngx';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';
import { StreamingMedia } from '@awesome-cordova-plugins/streaming-media/ngx';


//  Google Maps
import { AgmCoreModule } from '@agm/core';


// Font Awesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

//Firestore
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserModule, 
    CalendarModule,
    CommonModule,
    HttpClientModule,
    IonicModule.forRoot(), 
    FormsModule,
    ReactiveFormsModule,  
    //MatIconModule,
    NgxPaginationModule,
    PipesModule,
    IonicSelectableModule,
    IonicStorageModule.forRoot(),
    SharedModule,
    IonicModule.forRoot({ navAnimation: customAnimation }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationService,
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Mind Club'),
    AgmCoreModule.forRoot({
      apiKey: environment.API_KEY_GOOGLE_MAPS
    }),

  ],
  providers: [
    AndroidPermissions,
    AppRate,
    Base64,
    Camera,
    CallNumber,
    Clipboard,
    DatePipe,
    Device,
    Diagnostic,
    FCM,
    File,
    Geolocation,
    InAppBrowser,
    LocationAccuracy,
    MediaCapture,
    Media,
    NativeGeocoder, 
    NativeStorage,
    PhotoViewer,
    StreamingMedia,
    BackgroundGeolocation,
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }
}
