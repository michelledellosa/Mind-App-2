import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgmService } from 'src/app/services/agm.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {
apiUrl = environment.API;



  userData: any=[];
  
  constructor(
    private http: HttpClient,
    private agmService: AgmService
  ) { }

  ngOnInit(){}

  getCoupons(){
      //obtener datos del usuario luego de loguearse
      this.agmService.user.subscribe(res=>{
        this.userData = res;
      })
      
      if(this.userData.token){
        let headers = {
          'Authorization': this.userData.token
        }
    
        let body={
          'cualSP':4,
          'Tienda':234
         }
        return this.http.post<any>(this.apiUrl+'/cuponesManejo', body, { 'headers':headers })
      }else{
        return JSON.parse('1');
      }
      
  }
}
