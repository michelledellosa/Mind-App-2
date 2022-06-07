import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/auth/login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "recover-password",
    loadChildren: () =>
      import("./recover-password/recover-password.module").then(
        (m) => m.RecoverPasswordPageModule
      ),
  },
  {
    path: "sign-up",
    loadChildren: () =>
      import("./sign-up/sign-up.module").then((m) => m.SignUp2PageModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
