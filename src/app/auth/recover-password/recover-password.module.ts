import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { IonicModule } from "@ionic/angular";

import { RecoverPasswordPage } from "./recover-password.page";

const routes: Routes = [
  {
    path: "",
    component: RecoverPasswordPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RecoverPasswordPage],
})
export class RecoverPasswordPageModule { }
