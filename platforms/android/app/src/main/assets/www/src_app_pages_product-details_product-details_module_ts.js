"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_product-details_product-details_module_ts"],{

/***/ 85825:
/*!*************************************************************************!*\
  !*** ./src/app/pages/product-details/product-details-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsPageRoutingModule": () => (/* binding */ ProductDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details.page */ 66316);




const routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsPage
    }
];
let ProductDetailsPageRoutingModule = class ProductDetailsPageRoutingModule {
};
ProductDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductDetailsPageRoutingModule);



/***/ }),

/***/ 42813:
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsPageModule": () => (/* binding */ ProductDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details-routing.module */ 85825);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-lazyload-image */ 2478);
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details.page */ 66316);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);










let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _product_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsPageRoutingModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__.LazyLoadImageModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_1__.ProductDetailsPage]
    })
], ProductDetailsPageModule);



/***/ }),

/***/ 66316:
/*!***************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsPage": () => (/* binding */ ProductDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product-details.page.html */ 9632);
/* harmony import */ var _product_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details.page.scss */ 64249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 8735);
/* harmony import */ var src_app_services_common_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/loading.service */ 99439);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 18260);








let ProductDetailsPage = class ProductDetailsPage {
    constructor(commonService, router, activatedRoute, loadingService) {
        this.commonService = commonService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingService = loadingService;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(data => {
            let recipeId = data.get('id_product');
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.account + recipeId;
            console.log('URL = ' + this.url);
        });
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_common_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService }
];
ProductDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-product-details',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductDetailsPage);



/***/ }),

/***/ 9632:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/product-details/product-details.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<ion-content>\r\n  <div class=\"ion-padding\"></div>\r\n  <div class=\"container\">\r\n    <iframe allowfullscreen (load)=\"dismissLoading()\" style=\"width: 100%;\" height=\"100%\"\r\n      [src]=\"url | safeUrl:'resourceUrl'\" frameborder=\"0\"></iframe>\r\n    <ion-button size=\"small\" (click)=\"closeModal()\">\r\n\r\n      Atras\r\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</ion-content>-->\r\n");

/***/ }),

/***/ 64249:
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "/*.center{\n    text-align: center;    \n}\n\n.styleText{\n    margin: 0 auto;\n    background: #ef7a06; \n    color: white; \n    width: 90%;\n}\nh1{\n    font-size: 12pt;\n}\n\nh2{\n    margin: auto;\n    margin-top: 2%;\n    text-align: center;\n    //font-size: 12pt;\n    font-family: Arial, Helvetica, sans-serif;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5zdHlsZVRleHR7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNlZjdhMDY7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL2ZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59Ki8iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-details_product-details_module_ts.js.map