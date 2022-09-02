import { CommonService } from './../../services/common/common.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AgmService } from 'src/app/services/agm.service';
import { PointsControlService }  from 'src/app/services/points-control.service';
import { ReferralsService } from 'src/app/services/referrals.service';

//import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  //event
  //sin el parametro click, el alert de openLogin se abre automaticamente  
  click = 0;
  //user_email: string = '';
  interval
  user: any;

  //Puntos Pendientes
  outstanding_points: number;
  //Puntos Disponibles
  available_points:number;
  referralsQtty:number=0;
  temp;

  menuSidebar: any[] = [
    {
      name: 'Mi Cuenta',
      img: 'home',
      router: this.loginService.openLogin(),
      type: 'navigate',
      public: true,
      isNew: false,
      description: '',
      icon: 'person-outline'
    },
    {
      name: 'Home',
      img: 'notifications',
      router: '/home',
      type: 'navigate',
      public: true,
      isNew: false,
      description: '',
      icon : 'home-outline'
    },
    {
      name: 'Referidos',
      img: 'notifications',
      router: '/pages/referrals',
      type: 'navigate',
      public: true,
      isNew: false,
      description: '',
      icon: 'document-text-outline'
    },
    {
      name: 'Mis Compras',
      img: 'notifications',
      router: '/pages/shopping',
      type: 'navigate',
      public: true,
      isNew: false,
      description: '',
      icon:'cart-outline'
    },
    {
      name: 'Inbox',
      img: 'notifications',
      router: '/pages/inbox',
      type: 'navigate',
      public: true,
      isNew: false,
      description: '',
      icon: 'chatbox-outline'
    },
    {
      name: 'Recompensas',
      img: 'notifications',
      router: '/pages/rewards',
      type: 'navigate',
      public: true,
      isNew: false,
      description: '',
      icon:'repeat-outline'
    },
    {
      name: 'Cupones',
      img: 'notifications',
      router: '/pages/coupons',
      type: 'navigate',
      public: true,
      isNew: false,
      description: '',
      icon: 'pricetag-outline'
    },
    {
      name: 'Mi Establecimiento',
      img: 'notifications',
      router: '/pages/account',
      type: 'navigate',
      public: true,
      isNew: false,
      description: '',
      icon:'storefront-outline'
    },
    {
      name: 'Mis Transferencias',
      img: 'notifications',
      router: '/pages/transfers',
      type: 'navigate',
      public: true,
      isNew: false,
      description: '',
      icon: 'share-outline'
    },/*
    {
      name: 'Choose language',
      img: 'pin',
      router: '#',
      type: 'method',
      action: () => { this.presentActionChooselanguage(); },
      public: true,
      isNew: false,
      description: '',
    }, {
      name: 'enjoying eq?',
      img: 'star',
      router: '#',
      type: 'method',
      action: () => { },
      public: this.commonService.isCordova(),
      isNew: false,
      description: '',
    },*/
    {
      name: 'Logout',
      img: 'exit',
      // router: 'notificaciones',
      type: 'method',
      icon : 'power-outline',
      action: () => {
        if ((this.loginService.isLogged() == false)) {
          
          alert('Usted no posee una sesiòn activa')
        } else {
          if ((this.loginService.isLogged() == true)) {
            this.presentAlert()
          }
        }
      },
      public: true,
      isNew: false,
      description: '',
    }];

  constructor(
    public menuController: MenuController,
    public router: Router,
    public languageService: LanguageService,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public commonService: CommonService,
    public loginService: LoginService,
    public agmService: AgmService,
    public pointsService: PointsControlService,
    public referralService: ReferralsService

  ) { }
                                                                                                                                                                                                                                                                  
  ngOnInit() {
    this.getUser();  
    //console.log('sidemenu 1 : ');
    
    
   /* this.referralService.getReferrals().subscribe(data=>{
      if(data.result.Mensaje){
        this.referralsQtty=0;
      }else{
        try{
          this.temp=data.result;
          this.referralsQtty = this.temp.length;
        }catch{
          this.referralsQtty=0;

        }
      }
    });*/

   }

   getReferrals() {
    this.referralService.getReferrals().subscribe(data => {
      if (data.result) {
        this.referralsQtty = data.result.length;
      } else {
        console.log('Error al obtener listado de referidos')
      }

    })
  }

  getUser(){
    this.loginService.userData.subscribe(data=>{
      if(data){
       this.user= data.email;
       this.pointsService.getPoints().subscribe(data=>{
        this.outstanding_points = Number(data.result[0].Cli_Puntos_Pendientes) + Number(data.result[0].Patro_Puntos_Pendientes) + Number(data.result[0].Dis_Puntos_Pendientes);
        this.available_points = Number(data.result[0].Cli_Puntos_Sin_Cobrar) + Number(data.result[0].Patro_Puntos_Sin_Cobrar) + Number(data.result[0].Dis_Puntos_Sin_Cobrar);
  
      });
      this.getReferrals();
      }else{
        this.user='';
      }
    });
  }

  loginAccess() {
    if (this.loginService.isLogged() == true) {
      console.log('Logged true');
      alert('Usted ya posee una sesion abierta, por favor cierre sesion.')
      this.router.navigate['/home'];
    }

    if (this.loginService.isLogged() == false) {
      console.log('Logged false');
      console.log('login button......');
      
      this.router.navigate['/pages/login'];
    }
  }


  _method(item: any) {
    //accion a tomar cuando el usuario esta lsogueado y quiera acceder a login
    if ((item.name == 'Mi Cuenta') && (this.loginService.isLogged() == true)) {
      alert('Usted ya posee una sesion abierta, por favor cierre sesion.');

      const { router, type, action } = item;
       console.log({ router, type, action })
      return this.router.navigate(['/home']);
      this.menuController.close();
    }

    const { router, type, action } = item;
    switch (type) {
      case 'navigate': this.router.navigate([router]); break;
      case 'method':
        if (action) { action(); }
        break;
      default: console.log('default type'); break;
    }

    this.menuController.close();
  }

  /**
 * Seleccionar idioma
 */
  async presentActionChooselanguage() {
    const actionSheet = await this.actionSheetController.create({
      header: `${this.languageService.getTranslation('Choose language')} ?`,
      cssClass: 'seleclanguaje',
      buttons: [
        {
          text: 'English',
          handler: () => {
            this.languageService.switchLanguage('en');
          },
        },
        {
          text: 'Español',
          handler: () => {
            this.languageService.switchLanguage('es');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async presentAlert() {

    const alert = await this.alertController.create({

      // subHeader: 'Acc',
      message: '¿Desea Cerrar Sesion?',
      buttons: [
        {
          text: 'SI',
          role: 'si',
          cssClass: 'secondary',

          handler: () => {
            console.log('cierre Sesion');
            
            //localStorage.clear()
            localStorage.removeItem('userLogin');
            localStorage.clear();
            this.loginService.userData.next(null);
          }
        },

        {
          text: 'NO',
          role: 'no',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigate(['/home']);
          }
        }]

    });
    await alert.present();
    let result = await alert.onDidDismiss();
  }
}
