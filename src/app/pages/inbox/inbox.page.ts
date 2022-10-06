import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service'
import { AgmService } from 'src/app/services/agm.service';
import { log } from 'console';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})

export class InboxPage implements OnInit {
  //este valor (id )debe ser cambiado, por un input que reciba el id_login del usuario
  id: number=0;
  test: number = 0;
  allNotifications: any[];
  userNotification: any[];
  _loginServices: boolean;
  data0 : boolean;
  constructor(
    private notiService: NotificationsService,
    private router: Router,
    private loginServices: LoginService,
    private agmService: AgmService
  ) {
    this._loginServices = this.loginServices.isLogged()
  }

  ngOnInit() {
    let temp: any = []; //parametro temporal, para almacenar data del usuario
    if (this.loginServices.isLogged() == true) {
      this.loginServices.getUserStored();
      this.agmService.user.subscribe(res => {
        console.log('res de inbox = '+JSON.stringify(res))
        temp = res;
        this.id = temp.id_login
      })
      this.notiService.getNotifications()
        .subscribe(data => {
          this.allNotifications = data;
          console.log('data == ',data);

          if (data.length == 0 ) {
            this.data0 = true;
            console.log(this.data0);
          }
  
          this.userNotification = this.allNotifications.filter(res => {
            console.log('res user notification ==',res);
            return res.id_login === this.id
          });
        })

    } else {
      return
    }

  }

  goDetails(id: string) {
    console.log('id = ' + id)
    this.router.navigate(['/pages/inbox/inbox-details/' + id])
  }
}
