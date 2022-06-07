import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  apiUrl = environment.API
  user;


  constructor(
    private http: HttpClient,
    private categoriesService: CategoriesService
  ) { }

  getShoppings(dateInit, dateFinish) {

    if (localStorage.getItem('userLogin') != null) {
      this.user = JSON.parse(localStorage.getItem('userLogin'));
      
      let headers = {
        'Authorization': this.user.token
      }
      let body = {
        "cualSP":"14",
        "Dato0":"", 
        "Dato01":JSON.stringify(this.user.id_login),
        "Dato02":dateInit,
        "Dato03":dateFinish,
        "Dato04":""
      }

      return this.http.post<any>(this.apiUrl + '/clientesManejo', body, { 'headers': headers })

    } else {
      return 
    }
  }

  getReferrals() {
    if (localStorage.getItem('userLogin') != null) {
      this.user = JSON.parse(localStorage.getItem('userLogin'));

      let headers = {
        'Authorization': this.user.token
      }

      let body = {
        "cualSP": "8",
        "Dato0": "1",
        "Dato01": "0",
        "Dato02": JSON.stringify(this.user.id_login)
      }

      return this.http.post<any>(this.apiUrl + '/clientesManejo', body, { 'headers': headers })

    } else {
      return
    }
  }


}
