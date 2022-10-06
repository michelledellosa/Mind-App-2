"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_coupons_coupons_module_ts"],{

/***/ 89909:
/*!*********************************************************!*\
  !*** ./src/app/pages/coupons/coupons-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponsPageRoutingModule": () => (/* binding */ CouponsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _coupons_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coupons.page */ 54747);




const routes = [
    {
        path: '',
        component: _coupons_page__WEBPACK_IMPORTED_MODULE_0__.CouponsPage
    }
];
let CouponsPageRoutingModule = class CouponsPageRoutingModule {
};
CouponsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CouponsPageRoutingModule);



/***/ }),

/***/ 72094:
/*!*************************************************!*\
  !*** ./src/app/pages/coupons/coupons.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponsPageModule": () => (/* binding */ CouponsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-lazyload-image */ 2478);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var _coupons_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coupons-routing.module */ 89909);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);
/* harmony import */ var _coupons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupons.page */ 54747);










let CouponsPageModule = class CouponsPageModule {
};
CouponsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _coupons_routing_module__WEBPACK_IMPORTED_MODULE_1__.CouponsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__.LazyLoadImageModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_coupons_page__WEBPACK_IMPORTED_MODULE_3__.CouponsPage]
    })
], CouponsPageModule);



/***/ }),

/***/ 54747:
/*!***********************************************!*\
  !*** ./src/app/pages/coupons/coupons.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponsPage": () => (/* binding */ CouponsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coupons_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coupons.page.html */ 16584);
/* harmony import */ var _coupons_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coupons.page.scss */ 74307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ 36983);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 8735);
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/coupons.service */ 35395);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ 53755);










let CouponsPage = class CouponsPage {
    constructor(commonService, agmService, categoriesServices, couponServices, activatedRoute, router, loginServices) {
        this.commonService = commonService;
        this.agmService = agmService;
        this.categoriesServices = categoriesServices;
        this.couponServices = couponServices;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loginServices = loginServices;
        // title:string='Cupones';
        this.coupons = [];
        this.stores = [];
        this._loginServices = this.loginServices.isLogged();
    }
    ngOnInit() {
        if (this.loginServices.isLogged() == true) {
            this.couponServices.getCoupons()
                .subscribe(res => {
                console.log('res cupones ==', res);
                // si existe el parametro Id_Asignado en la posicion 0,
                //no existe listado de cupones para este usuario
                if (res.result[0].Id_Asignado == 'El Cupon con ID  NO existe en la base de datos o esta Des Habilitado') {
                    return this.coupons = res.result[0];
                }
                else {
                    return this.coupons = res.result;
                }
            });
        }
        else {
            return;
        }
    }
    //filtrar id de la tienda para obtener el nombre a mostrar en el card
    filterStore(id) {
        let temp = [];
        this.categoriesServices.getCategories()
            .subscribe(res => {
            if (!res) {
                return;
            }
            this.stores = res.result;
        });
        temp = this.stores.find(res => {
            return res.Id == id;
        });
        //console.log('tem  = '+JSON.stringify(temp))
        //this.storeName = temp.Establecimiento;
        return this.storeName;
    }
    couponDetails(id) {
        this.router.navigate(['/pages/coupons/coupon-details/' + id]);
    }
};
CouponsPage.ctorParameters = () => [
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__.AgmService },
    { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__.CategoriesService },
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_5__.CouponsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService }
];
CouponsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-coupons',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coupons_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_coupons_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CouponsPage);



/***/ }),

/***/ 16584:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/coupons/coupons.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header2 [title]=\"'Cupones'\" [go]=\"'pages/coupon'\"></app-header2>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"_loginServices==true && !coupons.Id_Asignado; else couponsExist\">\r\n    <ion-card *ngFor=\"let coupon of coupons \" (click)='couponDetails(coupon.Id_Cupones)'>\r\n      <ion-card-content>\r\n        <div style=\"margin: 0 auto;height: 40%;width: 40%;\">\r\n          <img [defaultImage]=\"commonService.defaultImage\" [lazyLoad]=\"coupon.Foto\">\r\n        </div>\r\n        <label>{{coupon.Nombre_del_Cupon}}</label>\r\n        <div>\r\n          <label>{{filterStore(coupon.Tienda)}}</label>\r\n        </div>\r\n        <div>\r\n          <label>Descripcion: {{coupon.Descripcion}}</label>\r\n        </div>\r\n        <div>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <label style=\"text-align: left;\">Inicio: {{coupon.Fecha_inicio}}</label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <label style=\"text-align: left;\">Finaliza: {{coupon.Fecha_final}}</label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <ng-template #couponsExist>\r\n    <ion-card>\r\n      <ion-card-content>\r\n        <div *ngIf=\"_loginServices==true && coupons.Id_Asignado;\" style=\"text-align: center;\">\r\n          <label> Usted no posee cupones disponibles</label>\r\n        </div>\r\n        <div *ngIf=\"_loginServices==false\" style=\"text-align: center;\">\r\n          <label> Inicie sesión para acceder a sus cupos disponibles</label>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ng-template>\r\n\r\n</ion-content>");

/***/ }),

/***/ 74307:
/*!*************************************************!*\
  !*** ./src/app/pages/coupons/coupons.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "center {\n  display: flex;\n}\n\nimage-card {\n  height: 40%;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXBvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksYUFBQTtBQURKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFBSiIsImZpbGUiOiJjb3Vwb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNlbnRlcntcclxuICAgIC8vbWFyZ2luOiAwIGF1dG87ICAgXHJcbiAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuaW1hZ2UtY2FyZHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_coupons_coupons_module_ts.js.map