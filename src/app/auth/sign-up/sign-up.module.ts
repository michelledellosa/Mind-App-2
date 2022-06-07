import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SignUp2Page } from "./sign-up.page";
import { ReactiveFormsModule } from "@angular/forms";

import { TranslateModule } from "@ngx-translate/core";
import { IonicSelectableModule } from "ionic-selectable";

const routes: Routes = [
  {
    path: "",
    component: SignUp2Page,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    IonicSelectableModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SignUp2Page],
})
export class SignUp2PageModule { }
