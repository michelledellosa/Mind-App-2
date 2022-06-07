import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AgmService } from './agm.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userData = new BehaviorSubject(null);
  logged = false;
  //apiUrl = 'http://190.146.25.34:3000/';
  apiUrl = environment.API;
  user = '';
  password = '';

  headers = {
    //'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MTY1OTMyOCIsImlhdCI6MTYzNjM4MjAzMH0.G2F6GezeBATL88fYqb54TbXjzUsoSTQSpWFAsXcaUuw'
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMDEyMzQwMjIwIiwiaWF0IjoxNjQ3MzgwNjU4fQ.eLfxOXbfjuz5ZBdsFb51jv5M7cYAPSbD0u39THnfAwc'
  };

  constructor(
    private http: HttpClient,
    private agmService: AgmService,
    private router: Router
  ) { }

  validateUser(correo, password) {
    let body = {
      'correo': correo,
      'password': password
    }
    return this.http.post<any>(this.apiUrl + '/login', body)
  }

  //verifica si el usuario esta logueado, return true o false
  isLogged() {
    if ((localStorage.getItem('userLogin') == null)) {
      this.logged = false;
    } else {
      if ((localStorage.getItem('userLogin') != null)) {
        this.logged = true;
      }
    }
    return this.logged
  }

  openLogin() {
    //console.log('dentro dee open login')
     if (this.isLogged() == true) {
      if (this.router['routerState'].snapshot.url = '/home') {
        return '/home'
      }
    } else {
      //console.log('Usuario no ha iniciado sesion');
      if (this.isLogged() == false) {
        if (this.router['routerState'].snapshot.url = '/home') {
          return '/pages/login'
        }
      }
    }
  }

  //obtener datos de usuario
  getUserStored() {
    if (this.isLogged() == true) {
      //console.log('usuario = ' + localStorage.getItem('userLogin'));
      this.agmService.user.next(JSON.parse(localStorage.getItem('userLogin')));
    } else {
      
      //console.log('Usuario no ha iniciado sesion');
    }
  }



}
