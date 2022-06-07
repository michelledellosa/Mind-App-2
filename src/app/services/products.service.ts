import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service'
import { AgmService } from 'src/app/services/agm.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  headers
  apiUrl =environment.API;
  
  token
  store_id: number = 0;
  product_id;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private agmService: AgmService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      let recipeId = data.get('id_product');
      console.log('recipeId = ' + recipeId)
      this.product_id = recipeId
    });

    
  }

  getAllProducts(store_id: number) {
    this.agmService.user.subscribe(res => {
      console.log(JSON.stringify(res))
      this.token = res.token;
      this.store_id = res.id_store
    })

    this.headers = {
      'Authorization': this.token
    }
    let body = {
      'cualSP': 3,
      'Tienda': this.store_id
    }
    return this.http.post<any>(this.apiUrl + '/productosManejo', body, { 'headers': this.headers })
  }

  getComboCompound(id: number) {
    let body = {
      'cualSP': 6,
      'Tienda': this.store_id,
      'Dato0': id
    }
    return this.http.post<any>(this.apiUrl + '/productosManejo', body, { 'headers': this.headers })
  }

  getSuppliesUniques(id: number) {
    let body = {
      'cualSP': 6,
      'Tienda': this.store_id,
      'Dato0': id
    }
    return this.http.post<any>(this.apiUrl + '/productosManejo', body, { 'headers': this.headers })

  }
}
