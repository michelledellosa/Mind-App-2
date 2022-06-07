import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AgmService } from 'src/app/services/agm.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CommonService } from 'src/app/services/common/common.service';
import { CouponsService } from 'src/app/services/coupons.service';
import { LoginService } from 'src/app/services/login.service'

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {
  // title:string='Cupones';
  coupons: any = [];
  stores: any = [];
  storeName: string;
  _loginServices: any

  constructor(
    public commonService: CommonService,
    public agmService: AgmService,
    private categoriesServices: CategoriesService,
    private couponServices: CouponsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loginServices: LoginService
  ) {
    this._loginServices = this.loginServices.isLogged()
  }

  ngOnInit() {
    if (this.loginServices.isLogged() == true) {
      this.couponServices.getCoupons()
        .subscribe(res => {
          // si existe el parametro Id_Asignado en la posicion 0,
          //no existe listado de cupones para este usuario
          if (res.result[0].Id_Asignado == 'El Cupon con ID  NO existe en la base de datos o esta Des Habilitado') {
            return this.coupons = res.result[0]
          } else {
            return this.coupons = res.result;
          }
        });
    } else {
      return
    }
  }
  //filtrar id de la tienda para obtener el nombre a mostrar en el card
  filterStore(id) {
    let temp: any = [];
    this.categoriesServices.getCategories()
      .subscribe(res => {
        if (!res) { return }
        this.stores = res.result;
      })
    temp = this.stores.find(res => {
      return res.Id == id
    });

    //console.log('tem  = '+JSON.stringify(temp))
    //this.storeName = temp.Establecimiento;
    return this.storeName
  }

  couponDetails(id: number) {
    this.router.navigate(['/pages/coupons/coupon-details/' + id])
  }

}
