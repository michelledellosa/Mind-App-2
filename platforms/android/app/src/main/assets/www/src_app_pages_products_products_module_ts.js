"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_products_products_module_ts"],{

/***/ 82020:
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageRoutingModule": () => (/* binding */ ProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.page */ 99293);




const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsPage
    }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ 47827:
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageModule": () => (/* binding */ ProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-lazyload-image */ 2478);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 82020);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.page */ 99293);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 91173);











let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsPageRoutingModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__.LazyLoadImageModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__.PipesModule
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_2__.ProductsPage]
    })
], ProductsPageModule);



/***/ }),

/***/ 99293:
/*!*************************************************!*\
  !*** ./src/app/pages/products/products.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPage": () => (/* binding */ ProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./products.page.html */ 36256);
/* harmony import */ var _products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page.scss */ 39862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 8735);
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products.service */ 2885);
/* harmony import */ var src_app_services_common_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/loading.service */ 99439);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 18260);









let ProductsPage = class ProductsPage {
    constructor(commonService, productsServices, activatedRoute, router, loadingService) {
        this.commonService = commonService;
        this.productsServices = productsServices;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingService = loadingService;
        this.product = [];
        this.products = [];
        this.showToolbar = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.activatedRoute.paramMap.subscribe(data => {
                this.recipeId = data.get('id_store');
                // console.log('recipeId = '+recipeId)
                this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.productDetails + this.recipeId;
                console.log(this.url);
            });
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                // await this.loadingService.presentLoading()
            }), 300);
        });
    }
    closeModal() {
        console.log("closeModal");
        this.commonService.goToRouter("/home");
    }
    dismissLoading() {
        //console.log("dismissLoading")
        // this.loadingService.dismissLoading()
    }
};
ProductsPage.ctorParameters = () => [
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__.ProductsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_common_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService }
];
ProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-products',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_products_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsPage);



/***/ }),

/***/ 2885:
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 53755);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);







let ProductsService = class ProductsService {
    constructor(http, activatedRoute, loginService, agmService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.agmService = agmService;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API;
        this.store_id = 0;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(data => {
            let recipeId = data.get('id_product');
            console.log('recipeId = ' + recipeId);
            this.product_id = recipeId;
        });
    }
    getAllProducts(store_id) {
        this.agmService.user.subscribe(res => {
            console.log(JSON.stringify(res));
            this.token = res.token;
            this.store_id = res.id_store;
        });
        this.headers = {
            'Authorization': this.token
        };
        let body = {
            'cualSP': 3,
            'Tienda': this.store_id
        };
        return this.http.post(this.apiUrl + '/productosManejo', body, { 'headers': this.headers });
    }
    getComboCompound(id) {
        let body = {
            'cualSP': 6,
            'Tienda': this.store_id,
            'Dato0': id
        };
        return this.http.post(this.apiUrl + '/productosManejo', body, { 'headers': this.headers });
    }
    getSuppliesUniques(id) {
        let body = {
            'cualSP': 6,
            'Tienda': this.store_id,
            'Dato0': id
        };
        return this.http.post(this.apiUrl + '/productosManejo', body, { 'headers': this.headers });
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_1__.AgmService }
];
ProductsService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ 36256:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/products/products.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div style=\"padding: 0;\"></div>\r\n  <div class=\"container\">\r\n    <iframe allowfullscreen (load)=\"dismissLoading()\" style=\"width: 100%;\" height=\"100%\"\r\n      [src]=\"url | safeUrl:'resourceUrl'\" frameborder=\"0\"></iframe>\r\n    <!--<ion-button size=\"small\" (click)=\"closeModal()\" style=\"margin-top: 17%;\">Atras<ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>-->\r\n   \r\n    <app-spinner></app-spinner>\r\n  </div>\r\n</ion-content>\r\n<app-webview-tab [param]=\"recipeId\"></app-webview-tab>");

/***/ }),

/***/ 39862:
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.container iframe {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.container ion-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\niframe {\n  display: block;\n  /* iframes are inline by default */\n  border: none;\n  /* Reset default border */\n  height: 100vh;\n  /* Viewport-relative units */\n  width: 100vw;\n}\n\nion-content {\n  /* --background: var(--ion-color-primary);*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUFnQixrQ0FBQTtFQUVoQixZQUFBO0VBQWMseUJBQUE7RUFDZCxhQUFBO0VBQWUsNEJBQUE7RUFDZixZQUFBO0FBR0o7O0FBQUE7RUFDRywyQ0FBQTtBQUdIIiwiZmlsZSI6InByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgLyogaWZyYW1lcyBhcmUgaW5saW5lIGJ5IGRlZmF1bHQgKi9cclxuICAgIC8vYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyOiBub25lOyAvKiBSZXNldCBkZWZhdWx0IGJvcmRlciAqL1xyXG4gICAgaGVpZ2h0OiAxMDB2aDsgLyogVmlld3BvcnQtcmVsYXRpdmUgdW5pdHMgKi9cclxuICAgIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAvKiAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsqL1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_products_products_module_ts.js.map