import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AlertController, LoadingController } from "@ionic/angular";

import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { MustMatch } from "src/app/helpers/must-match.validator";
import { LanguageService } from "src/app/services/language.service";


@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.page.html",
  styleUrls: ["./sign-up.page.scss"],
})
export class SignUp2Page implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  fileUrl: any;
  public country: any[];
  monthShortNames = [
    this.languageService.getTranslation("January"),
    this.languageService.getTranslation("February"),
    this.languageService.getTranslation("March"),
    this.languageService.getTranslation("April"),
    this.languageService.getTranslation("May"),
    this.languageService.getTranslation("June"),
    this.languageService.getTranslation("July"),
    this.languageService.getTranslation("August"),
    this.languageService.getTranslation("September"),
    this.languageService.getTranslation("October"),
    this.languageService.getTranslation("November"),
    this.languageService.getTranslation("December"),
  ];
  destroy$ = new Subject<boolean>();

  get f() {
    return this.registerForm.controls;
  }

  constructor(
    public languageService: LanguageService,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public loadingController: LoadingController,
  ) {
    this.registerForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        surnames: ["", Validators.required],
        identification: ["", [Validators.required, Validators.minLength(4)],
        ],
        prefijo: ["", Validators.required],
        phone: ["", [Validators.required, Validators.minLength(3)]],
        email: [
          "",
          [Validators.required, Validators.email],
        ],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
      },
      { validator: MustMatch("password", "confirmPassword") }
    );
  }

  ngOnInit() {
  }


  getCountryText(port: any, portIndex: number, ports: any[]) {
    if (portIndex === 0 || port.id !== ports[portIndex - 1].id) {
      return port.phonecode;
    }
    return null;
  }

  password_type: string = 'password';
  togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  async onSubmit() {
    try {
      this.submitted = true;

      // stop here if form is invalid
      console.log(this.registerForm.invalid);

      const profile = this.registerForm.value;

      if (this.registerForm.invalid) {
        return;
      }


    } catch (err) {
      console.error("err",)
    }

  }



  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
