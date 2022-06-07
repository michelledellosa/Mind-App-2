import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointsControlService {

  apiUrl = environment.API
  user;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getPoints(){
    if(localStorage.getItem('userLogin')!=null){
      //console.log( 'points services ='+JSON.parse(localStorage.getItem('userLogin')) );
      this.user=JSON.parse(localStorage.getItem('userLogin'));
     
      let headers = {
        'Authorization': this.user.token
      }
  
      let body = {
        "cualsp":11,
        "Dato0":this.user.id_login,
        "Dato02":1 
      }
      
      //return this.http.post<any>(this.apiUrl + 'establecimientos', body, { 'headers':headers })
      return this.http.post<any>(this.apiUrl + '/RedApi/reportes/ls', body, { 'headers':headers })
     

    }else{
      return 
    }
  }

 
}
