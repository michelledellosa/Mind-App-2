import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgmService } from 'src/app/services/agm.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RewardService {
  apiUrl =environment.API;

  userData: any=[];
  
  constructor(
    private http: HttpClient,
    private agmService: AgmService
    ) {}

  getRewards(){
     //obtener datos del usuario luego de loguearse
     this.agmService.user.subscribe(res=>{
      this.userData = res;
    })
    
    let headers = {
      'Authorization': this.userData.token
    }

    let body={
      'cualSP':4,
      'Tienda':234
    } 
    return this.http.post<any>(this.apiUrl+'/promocionesManejo', body, { 'headers':headers })
  }
}
