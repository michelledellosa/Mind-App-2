import { Component, OnInit, ViewChild } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http'
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

import { AgmService } from 'src/app/services/agm.service';
import { StorageService } from '../../services/storage.service';
import { FormsModule, FormGroup, NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  event;
  usuario={
    email:'',
    password:''
  }

  userData={
    email:'',
    fullName:'',    
    token:'',
    id_store:0,
    id_login:0,
    name_store:''
  }

  constructor(
    private http: HttpClient,
    private loginService: LoginService, 
    private storageService:StorageService,
    private  storage:Storage,
    private agmService: AgmService,
    private router:Router,
    private alertController: AlertController
  ) { }

  ionViewWillEnter() {  
 }
  ngOnInit() {}

  
onSubmitData(){
  if(this.validarCampos()){
 //   console.log(JSON.stringify(this.formulario))
       this.loginService.validateUser(this.usuario.email,this.usuario.password)
       .subscribe(data=>{
         let temp1:any=[];
         let array:any=[];
          temp1=data;
          //console.log('temp1 = '+JSON.stringify(temp1))
          if(temp1.result==1){
            this.userData.email= temp1.datos[0].Correo;
            this.userData.token= 'Bearer '+temp1.token;
            this.userData.id_store= temp1.datos[0].Tienda;
            this.userData.name_store= temp1.datos[0].Establecimiento;
            this.userData.id_login=temp1.datos[0].Id_Persona_Login;
            this.userData.fullName=temp1.datos[0].NombresyApellidos
            
            this.agmService.user.next(this.userData);
            localStorage.setItem('userLogin',JSON.stringify(this.userData));
            this.loginService.userData.next(this.userData);
      

            this.presentAlert(this.userData.fullName)
            this.router.navigate(['/home']);
          }

          if(temp1.result==2){
            alert('Usuario no registrado');
            //this.router.navigate(['/pages/login'])
          }
       });
      /*this.agmService.user.subscribe(userData=>{
         //console.log('userData = '+JSON.stringify(userData))
       })*/
  }
}

  validarCampos() {
    let valido = false;
    if (this.usuario.email.length != 0) {

      if (this.usuario.password.length != 0) {

        valido = true;
      } else {
        alert('Error de Credenciales');
      }
    } else {
      alert('Error de Credenciales');
    }
    return valido;
  }

  async presentAlert(email:string) {

    const alert = await this.alertController.create({

      // subHeader: 'Acc',
      message: 'Bienvenido '+email,
      buttons: [
        {
          text: 'ACEPTAR',
          role: 'si',
          cssClass: 'secondary'
        }]

    });
    await alert.present();
    let result = await alert.onDidDismiss();

  }
}
