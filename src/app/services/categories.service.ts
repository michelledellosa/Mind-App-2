import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AgmService } from 'src/app/services/agm.service';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiUrl = environment.API


  array: any = [];
  temp: any = [];
  categories: any = [];
  //obtener parametros de usuario luego de loguearse
  userData: any = [];

  stores: [];

  constructor(
    private http: HttpClient,
    private agmService: AgmService
  ) { }

  ngOnInit() {
  }

  getCategories() {
    //obtener datos del usuario luego de loguearse
    this.agmService.user.subscribe(res => {
      this.userData = res;
    })

    let headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MTY1OTMyOCIsImlhdCI6MTYzNjkzMDIyM30.JAcX2qUQ5HdZ8WBTroamKnjPvlPOKoANG-r1Pl8Cm0k'//this.userData.token
    }

    let body = {
      'cualSP': 4
    }

    //return this.http.post<any>(this.apiUrl + 'establecimientos', body, { 'headers':headers })
    return this.http.post<any>(this.apiUrl + '/establecimientos', body, { 'headers': headers })
  }

  getNearToMe() {
    let latitude;
    let longitude;
    this.agmService.myLocation.subscribe(response => {
      latitude = response.position.lat;
      longitude = response.position.lng;
    });


    let headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MTY1OTMyOCIsImlhdCI6MTYzNjkzMDIyM30.JAcX2qUQ5HdZ8WBTroamKnjPvlPOKoANG-r1Pl8Cm0k'//this.userData.token
    }

    let body = {
      'cualsp': '20',
      'Dato0': "6.2227153",//JSON.stringify(latitude),
      'Dato01': "-75.5816264",//JSON.stringify(longitude),
      'Dato02': '30'
    }

    return this.http.post<any>(this.apiUrl + '/RedApi/reportes/ls', body, { 'headers': headers })

  }

  getNameStoreById(id) {
    let dataStore;
    this.getCategories().subscribe(allStores => {
      this.stores = allStores.result;

      this.stores.filter(resp => { return resp }).map(store => {
        dataStore = store;
        if (dataStore.Id == id) {
          return dataStore.Establecimiento
        }
      })
    })

  }
}
