"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_coupon-details_coupon-details_module_ts"],{

/***/ 41080:
/*!***********************************************************************!*\
  !*** ./src/app/pages/coupon-details/coupon-details-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponDetailsPageRoutingModule": () => (/* binding */ CouponDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _coupon_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coupon-details.page */ 30675);




const routes = [
    {
        path: '',
        component: _coupon_details_page__WEBPACK_IMPORTED_MODULE_0__.CouponDetailsPage
    }
];
let CouponDetailsPageRoutingModule = class CouponDetailsPageRoutingModule {
};
CouponDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CouponDetailsPageRoutingModule);



/***/ }),

/***/ 63884:
/*!***************************************************************!*\
  !*** ./src/app/pages/coupon-details/coupon-details.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponDetailsPageModule": () => (/* binding */ CouponDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 2478);
/* harmony import */ var _coupon_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coupon-details-routing.module */ 41080);
/* harmony import */ var _coupon_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coupon-details.page */ 30675);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);









let CouponDetailsPageModule = class CouponDetailsPageModule {
};
CouponDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _coupon_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CouponDetailsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule
        ],
        declarations: [_coupon_details_page__WEBPACK_IMPORTED_MODULE_1__.CouponDetailsPage]
    })
], CouponDetailsPageModule);



/***/ }),

/***/ 30675:
/*!*************************************************************!*\
  !*** ./src/app/pages/coupon-details/coupon-details.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponDetailsPage": () => (/* binding */ CouponDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coupon_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coupon-details.page.html */ 76449);
/* harmony import */ var _coupon_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coupon-details.page.scss */ 41382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/coupons.service */ 35395);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 8735);








let CouponDetailsPage = class CouponDetailsPage {
    constructor(commonService, agmService, router, activatedRoute, couponService) {
        this.commonService = commonService;
        this.agmService = agmService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.couponService = couponService;
        this.coupon = [];
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(data => {
            let recipeId = data.get('id_coupon');
            let temp = [];
            this.couponService.getCoupons()
                .subscribe(res => {
                temp = res.result;
                this.coupon = temp.find(res => {
                    return res.Id_Cupones == recipeId;
                });
                //console.log('this.coupons= '+JSON.stringify(this.coupon));
                this.title = this.coupon.Nombre_del_Cupon;
            });
        });
    }
};
CouponDetailsPage.ctorParameters = () => [
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__.AgmService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_3__.CouponsService }
];
CouponDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-coupon-details',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coupon_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_coupon_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CouponDetailsPage);



/***/ }),

/***/ 76449:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/coupon-details/coupon-details.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header2 [title]='title'></app-header2>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <div style=\"margin: 0 auto;height: 40%;width: 40%;\" >\r\n        <img [defaultImage]=\"commonService.defaultImage\" [lazyLoad]=\"coupon.Foto\">\r\n      </div>\r\n      <div class=\"center\">\r\n      <label >{{coupon.Nombre_del_Cupon}}</label>\r\n    </div>\r\n    <div class=\"center\">\r\n        <label >Puntos: {{coupon.Cantidad}}</label> \r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div >\r\n    <ion-row class=\"center\">\r\n      <ion-col size=\"6\">\r\n        <label >Inicio: {{coupon.Fecha_inicio}}</label> \r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <label >Finaliza: {{coupon.Fecha_final}}</label> \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"margin-left: 7%;\" >\r\n      Tlf: {{coupon.Telefono}}\r\n    </ion-row>\r\n      <ion-row style=\"margin-left: 7%;\"> \r\n        Direccion: {{coupon.Direccion}}  \r\n    </ion-row>\r\n  </div>\r\n\r\n  <div class=\"styleText\">\r\n    <h1 class=\"center\"> DESCRIPCIÓN </h1>\r\n  </div>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <p>{{coupon.Descripcion}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div class=\"styleText\">\r\n    <h1 class=\"center\">  TÉRMINOS </h1>\r\n  </div>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <p>{{coupon.Terminos}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <!--ESTA OPCION NOP ESTA EN LA API-->\r\n  <!--\r\n  <div class=\"ion-text-center\" style=\"margin: 2%;\">\r\n    <ion-button expand=\"block\" size=\"small\">{{'SOLICITAR' | titlecase}}</ion-button>\r\n  </div>-->\r\n\r\n  \r\n</ion-content>");

/***/ }),

/***/ 41382:
/*!***************************************************************!*\
  !*** ./src/app/pages/coupon-details/coupon-details.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".center {\n  text-align: center;\n}\n\n.styleText {\n  margin: 0 auto;\n  background: #ef7a06;\n  color: white;\n  width: 90%;\n}\n\nh1 {\n  font-size: 12pt;\n}\n\nh2 {\n  margin: auto;\n  margin-top: 2%;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXBvbi1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLHlDQUFBO0FBQ0oiLCJmaWxlIjoiY291cG9uLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5zdHlsZVRleHR7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNlZjdhMDY7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL2ZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_coupon-details_coupon-details_module_ts.js.map