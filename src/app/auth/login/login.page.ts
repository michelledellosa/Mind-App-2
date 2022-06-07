import {
  Component,
  NgZone,
  OnInit,
  OnDestroy,
  AfterViewInit,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertController } from "@ionic/angular";
import { Observable } from "rxjs";
import { CommonService } from "src/app/services/common/common.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit, OnDestroy, AfterViewInit {
  public loginForm: FormGroup;

  public loginError: string;
  public view = true;

  public lang;
  public customActionSheetOptions: any = {
    subHeader: "Select a language",
  };

  public info: any;
  public typeInput = "password";

  location: any;

  route_back: any;

  destroy$ = new Subject<boolean>();

  activated = false;

  deactivated = false;
  item: Observable<any>;
  data: any;
  route_url = "/members/welcome";
  constructor(
    private router: Router,
    public fb: FormBuilder,
    public commonService: CommonService,
    public alertController: AlertController,
    private route: ActivatedRoute,
  ) {

    this.loginForm = fb.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });

  }

  ngOnInit() { }

  signUp() {

  }

  password_type: string = 'password';
  togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  ngAfterViewInit() {
  }

  async login() {


    try {

      const data = this.loginForm.value;

      if (!data.email) {
        return;
      }

      const credentials = {
        email: data.email.trim(),
        password: data.password,
      };




    } catch (err) {
      console.log("err", err);

    }


  }



  seePassword() {
    return (this.typeInput =
      this.typeInput === "password" ? "text" : "password");
  }



  ngOnDestroy() {
    return this.destroy$.next(true);
  }
}
