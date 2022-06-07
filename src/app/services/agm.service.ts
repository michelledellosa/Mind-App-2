import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { LocationService } from './location.service'

@Injectable({
  providedIn: 'root'
})
export class AgmService {
  public agmMarket = new BehaviorSubject(null);
  public storesList = new BehaviorSubject(null);
  //public couponsList = new BehaviorSubject(null);
  public storeDetail = new BehaviorSubject(null);
  public modalCalification = new BehaviorSubject(null);
  public nearToMe = new BehaviorSubject(null);
  public myLocation = new BehaviorSubject(null);
  public user= new BehaviorSubject(null);
  public markers_stores;
  apiUrl = environment.API
  userData;

  constructor(
    private http: HttpClient,
    private locationService:LocationService
  ) {}

  getMarkers(){
    if(localStorage.getItem('userLogin')!=null){
      console.log( 'points services ='+JSON.parse(localStorage.getItem('userLogin')) );
      this.userData=JSON.parse(localStorage.getItem('userLogin'));
      
      this.locationService._location.subscribe(data=>{
        console.log('getMarkers = '+JSON.stringify(data))
      })
      /*
      let headers = {
        'Authorization': this.userData.token 
      }
  
      let body = {
        "cualsp":11,
        "Dato0":this.userData.id_login,
        "Dato02":1 
      }
      
      //return this.http.post<any>(this.apiUrl + 'establecimientos', body, { 'headers':headers })
      return this.http.post<any>(this.apiUrl + '/RedApi/reportes/ls', body, { 'headers':headers })*/
     

    }else{
      return 
    }
  }

  


}
