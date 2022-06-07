import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, ToastController } from "@ionic/angular";

@Component({
  selector: "app-recover-password",
  templateUrl: "./recover-password.page.html",
  styleUrls: ["./recover-password.page.scss"],
})
export class RecoverPasswordPage implements OnInit {
  public forgotForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    public alertController: AlertController,
    public toastController: ToastController
  ) {
    this.forgotForm = fb.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
    });
  }

  ngOnInit() { }

  async forgotYourPassword() {
    let data = this.forgotForm.value;
    if (data) {

    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: "top",
      duration: 3500,
    });
    toast.present();
  }
}
