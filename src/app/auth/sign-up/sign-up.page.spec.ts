import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { IonicStorageModule } from "@ionic/storage";
import { IonicModule, ModalController } from "@ionic/angular";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../../../../environments/environment";
import { OneSignal } from "@ionic-native/onesignal/ngx";

import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";

import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { Facebook } from "@ionic-native/facebook/ngx";

let modalSpy = jasmine.createSpyObj("Modal", ["present"]);
let modalCtrlSpy = jasmine.createSpyObj("ModalController", ["create"]);
modalCtrlSpy.create.and.callFake(function () {
  return modalSpy;
});

import { SignUp2Page } from "./sign-up.page";

fdescribe("SignUp2Page", () => {
  let component: SignUp2Page;
  let fixture: ComponentFixture<SignUp2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SignUp2Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
        IonicModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
        IonicStorageModule.forRoot(),
      ],
      providers: [
        FormBuilder,
        Storage,
        OneSignal,
        { provide: ModalController, useValue: modalCtrlSpy },
        GooglePlus,
        Facebook,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
