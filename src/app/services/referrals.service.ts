import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReferralsService {
  apiUrl = environment.API
  user;
  constructor(private http: HttpClient){}

  getReferrals(){
    if(localStorage.getItem('userLogin')!=null){
      this.user=JSON.parse(localStorage.getItem('userLogin'));
     
      let headers = {
        'Authorization': this.user.token
      }
  
      let body = {
        "cualSP":"8",
        "Dato0":"1",
        "Dato01":"0",
        "Dato02":JSON.stringify(this.user.id_login)
      }
      
      return this.http.post<any>(this.apiUrl + '/clientesManejo', body, { 'headers':headers })
     
    }else{
      return 
    }
  }
}
