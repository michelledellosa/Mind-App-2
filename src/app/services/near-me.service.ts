import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocationService } from 'src/app/services/location.service'

@Injectable({
  providedIn: 'root'
})
export class NearMeService {
  apiUrl = environment.API
  user;
  location;
  /*location={
    latitude:"",
    longitude:""
  }*/

  constructor(
    private http: HttpClient,
    private locationService: LocationService 
  ) {}

  //validando que token utilizar
  getToken(){
    let token;

    if(localStorage.getItem('userLogin')!=null){
      this.user=JSON.parse(localStorage.getItem('userLogin'));
      return token= this.user.token;    
    }else{
      return token= environment.token_test;
    }

  }
}
