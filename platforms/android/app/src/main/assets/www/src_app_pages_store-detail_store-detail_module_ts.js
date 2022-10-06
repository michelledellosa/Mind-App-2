"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_store-detail_store-detail_module_ts"],{

/***/ 5035:
/*!*******************************************************************!*\
  !*** ./src/app/pages/store-detail/store-detail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreDetailPageRoutingModule": () => (/* binding */ StoreDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _store_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-detail.page */ 78540);




const routes = [
    {
        path: '',
        component: _store_detail_page__WEBPACK_IMPORTED_MODULE_0__.StoreDetailPage
    }
];
let StoreDetailPageRoutingModule = class StoreDetailPageRoutingModule {
};
StoreDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoreDetailPageRoutingModule);



/***/ }),

/***/ 1764:
/*!***********************************************************!*\
  !*** ./src/app/pages/store-detail/store-detail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreDetailPageModule": () => (/* binding */ StoreDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 2478);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _store_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-detail-routing.module */ 5035);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var _store_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store-detail.page */ 78540);









let StoreDetailPageModule = class StoreDetailPageModule {
};
StoreDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _store_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoreDetailPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule
        ],
        declarations: [_store_detail_page__WEBPACK_IMPORTED_MODULE_2__.StoreDetailPage]
    })
], StoreDetailPageModule);



/***/ }),

/***/ 78540:
/*!*********************************************************!*\
  !*** ./src/app/pages/store-detail/store-detail.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreDetailPage": () => (/* binding */ StoreDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_store_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./store-detail.page.html */ 34811);
/* harmony import */ var _store_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-detail.page.scss */ 2093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ 36983);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 8735);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80838);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);







//import { StoresService } from 'src/app/services/stores.service';



let StoreDetailPage = class StoreDetailPage {
    constructor(iab, commonService, agmService, activatedRoute, router, categoriesServices, alertController) {
        this.iab = iab;
        this.commonService = commonService;
        this.agmService = agmService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.categoriesServices = categoriesServices;
        this.alertController = alertController;
        this.store = [];
        this.detail = [];
        this.phoneNumber = '';
        //Coordenadas para mi ubicacion actual 
        this.origin = {
            position: {
                lat: 0,
                lng: 0,
            },
            title: 'origin'
        };
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(data => {
            this.recipeId = data.get('id_store');
            this.categoriesServices.getCategories()
                .subscribe(data => {
                this.store = data.result;
                this.detail = this.store.find(res => { return res.Id == this.recipeId; });
                //console.log('details store= '+JSON.stringify(this.detail))
            });
        });
    }
    //abrir red social del establecimiento
    goSocialNetwork(social) {
        console.log('social=' + social.substr(0, 25));
        if ((social.substr(0, 25) == 'https://www.facebook.com/') || (social.substr(0, 26) == 'https://www.instagram.com/') || (social.substr(0, 20) == 'https://twitter.com/') || (social.substr(0, 24) == 'https://www.youtube.com/')) {
            this.iab.create(social, '_system', 'zoom=no').show();
        }
        else {
            this.presentAlert();
        }
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Error',
                subHeader: 'Error al acceder a la red social, por favor intente otra opción',
                //message: 'esta es una alerta',
                buttons: ['Aceptar']
            });
            yield alert.present();
        });
    }
    goProducts(id) {
        console.log('id de products = ' + id);
        this.router.navigate(['/pages/products/' + id]);
    }
    goComments(id) {
        if (id == undefined) {
            alert('Por favor, espere a que se cargue la informacion del establecimiento');
        }
        else {
            console.log('id recibido en goComments = ', id);
            this.router.navigate(['/pages/comments/' + id]);
        }
    }
    call() {
        window.open(`tel:${this.phoneNumber}`, '_system');
    }
};
StoreDetailPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__.AgmService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__.CategoriesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
StoreDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-store-detail',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_store_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_store_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StoreDetailPage);



/***/ }),

/***/ 34811:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/store-detail/store-detail.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar [class.show-background]=\"showToolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{detail.Establecimiento}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <!--   <ion-img class=\"logo-header\" src=\"assets/images/logo-puntosya.png\"></ion-img>-->\r\n        <ion-img class=\"logo-header\" src=\"assets/images/logo-2.png\"></ion-img>\r\n\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <div class=\"datsprn\">\r\n    <!-- Colocar la imagen aca como background -->\r\n    <div class=\"cont_dprn\">\r\n\r\n      <h2>{{detail.Establecimiento}}</h2>\r\n\r\n      <div class=\"itemstdets\" style=\"margin-top:2%; margin-bottom:2%;\">\r\n        <ion-icon name=\"location-outline\" color=\"medium\"></ion-icon>\r\n        <label>{{detail.Direccion}}</label>\r\n      </div>\r\n      <div class=\"itemstdets\">\r\n        <ion-icon name=\"call-outline\" color=\"medium\"></ion-icon>\r\n        <label>Telf: {{detail.Telefono}}</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"labelstdtls\">\r\n    <div class=\"icon\">\r\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n    </div>\r\n    <div class=\"text\"> INFORMACIÓN COMPLEMENTARIA </div>\r\n  </div>\r\n\r\n  <div class=\"contedoinfo padding-lateral\">\r\n    <p>{{detail.InformacionComplementaria}}</p>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"labelstdtls\">\r\n    <div class=\"icon\">\r\n      <ion-icon name=\"alarm-outline\"></ion-icon>\r\n    </div>\r\n    <div class=\"text\"> HORARIOS </div>\r\n  </div>\r\n\r\n  <div class=\"contedoinfo padding-lateral\">\r\n    <div>\r\n      <p>{{detail.Horarios}}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <!--\r\n  <div class=\"labelstdtls\">\r\n    <div class=\"icon\"><ion-icon name=\"bag-handle-outline\"></ion-icon></div>\r\n    <div class=\"text\"> PRODUCTOS </div>\r\n    \r\n  </div>\r\n\r\n  <div class=\"contedoinfo\">\r\n    <div class=\"ion-text-center\" style=\"margin: 2%;\" (click)=\"goProducts(detail.Id)\">\r\n        <ion-button expand=\"block\" size=\"small\">{{'VER PRODUCTOS' | titlecase}}</ion-button>\r\n    </div>\r\n  </div>\r\n-->\r\n\r\n  <div class=\"labelstdtls\">\r\n    <div class=\"icon\">\r\n      <ion-icon name=\"clipboard-outline\"></ion-icon>\r\n    </div>\r\n    <div class=\"text\"> SERVICIOS </div>\r\n  </div>\r\n\r\n  <div class=\"contedoinfo padding-lateral\">\r\n    <div>\r\n      <p>{{detail.Servicios}}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"labelstdtls\">\r\n    <div class=\"icon\">\r\n      <ion-icon name=\"call-outline\"></ion-icon>\r\n    </div>\r\n    <div class=\"text\"> CONTACTÁNOS </div>\r\n  </div>\r\n\r\n  <div class=\"contedoinfo \">\r\n    <div class=\"redscont\">\r\n      <a class=\"redc\" *ngIf=\"detail.Facebook!=''\" (click)=\"goSocialNetwork(detail.Facebook)\">\r\n        <ion-icon name=\"logo-facebook\"></ion-icon>\r\n      </a>\r\n      <a class=\"redc\" *ngIf=\"detail.Instagram!=''\" (click)=\"goSocialNetwork(detail.Instagram)\">\r\n        <ion-icon name=\"logo-instagram\"></ion-icon>\r\n      </a>\r\n      <a class=\"redc\" *ngIf=\"detail.Twitter!=''\" (click)=\"goSocialNetwork(detail.Twitter)\">\r\n        <ion-icon name=\"logo-twitter\"></ion-icon>\r\n      </a>\r\n      <a class=\"redc\" *ngIf=\"detail.Youtube!=''\" (click)=\"goSocialNetwork(detail.Youtube)\">\r\n        <ion-icon name=\"logo-youtube\"></ion-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"labelstdtls\">\r\n    <div class=\"icon\">\r\n      <ion-icon name=\"people\"></ion-icon>\r\n    </div>\r\n    <div class=\"text\"> CALIFICACIONES Y OPINIONES</div>\r\n  </div>\r\n\r\n  <!--\r\n  <div>    \r\n    <div class=\"btn-comments\"  type=\"button\" (click)=\"goComments(detail.Id)\">\r\n      <img src=\"assets/images/comments.png\" style=\"height: 50px;width: 50px;\" alt=\"\">\r\n    </div>\r\n  </div>\r\n-->\r\n\r\n  <app-comments-videos [recipeId]=\"recipeId\"></app-comments-videos>\r\n\r\n\r\n</ion-content>\r\n\r\n\r\n<app-tab-products style=\"margin-top: 5%;\"></app-tab-products>");

/***/ }),

/***/ 2093:
/*!***********************************************************!*\
  !*** ./src/app/pages/store-detail/store-detail.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "h1 {\n  font-size: 12pt;\n}\n\nh2 {\n  margin: auto;\n  margin-top: 2%;\n  text-align: center;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.social-network-size {\n  height: 30px;\n  width: 30px;\n  margin-left: 3%;\n}\n\n.center {\n  margin: 0 auto;\n  background: #CC9C61;\n  color: white;\n  width: 90%;\n}\n\n.center-text {\n  text-align: center;\n}\n\n.datsprn {\n  background-color: #1A1A1A;\n  color: #ffffff;\n  background-size: contain;\n  background-blend-mode: multiply;\n  position: relative;\n  padding: 20px 0;\n  margin-bottom: 20px;\n}\n\n.datsprn .cont_dprn .itemstdets {\n  display: flex;\n  align-items: center;\n  padding: 0 15px;\n}\n\n.datsprn .cont_dprn .itemstdets ion-icon {\n  background-color: #ffffff;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  --ion-color-base: #CC9C61 !important;\n  padding: 5px;\n  margin-right: 5px;\n}\n\n.labelstdtls {\n  display: flex;\n  align-items: flex-end;\n  margin: 0 20px;\n  border-bottom: 1px solid #e1e1e1;\n  padding-bottom: 5px;\n}\n\n.labelstdtls .icon {\n  background-color: #ffffff;\n  width: 30px;\n  height: 30px;\n  padding: 5px;\n  color: #CC9C61;\n  font-size: 20px;\n  border-radius: 50%;\n  box-shadow: 0 5px 2px #ffd0a2;\n}\n\n.labelstdtls .icon ion-icon {\n  --ion-color-base: #ffffff !important;\n}\n\n.labelstdtls .text {\n  font-size: 16px;\n  font-weight: 600;\n  padding: 0 6px;\n  color: #CC9C61;\n}\n\n.contedoinfo {\n  margin: 0px 20px;\n  padding-bottom: 15px;\n}\n\n.contedoinfo .redscont {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 15px;\n}\n\n.contedoinfo .redc {\n  color: #1A1A1A;\n  display: flex;\n  height: 40px;\n  width: 40px;\n  background-color: #ffffff;\n  margin: 0 5px;\n  text-align: center;\n  line-height: 30px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  box-shadow: 0 5px 2px #ffd0a2;\n}\n\n.contedoinfo .redc ion-icon {\n  font-size: 25px;\n}\n\n/*\n.btn-comments{\n  background-color: #f01454;\n  height: 50px;\n  width: 50px;\n  border-radius: 10%;\n  float: right;\n  margin-top: 5%;\n  margin-right: 10%;\n}*/\n\n/* Transparent standard */\n\nion-toolbar {\n  --background: #1A1A1A;\n  --ion-color-base: transparent !important;\n}\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  background: #1A1A1A;\n}\n\n/* Remove bottom border on md */\n\n.header-md::after {\n  background-image: none;\n}\n\n/* Remove bottom border on ios */\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n\n.logo-header {\n  height: 80%;\n  width: 80%;\n  margin-left: 5%;\n}\n\nion-back-button {\n  color: white;\n}\n\nion-title {\n  color: white;\n}\n\n.padding-lateral {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSx5Q0FBQTtBQUFKOztBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNOOztBQUFNO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFUjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBQUY7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUFJO0VBQ0Usb0NBQUE7QUFFTjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUU7RUFFRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQUk7RUFDRSxlQUFBO0FBRU47O0FBRUE7Ozs7Ozs7OztFQUFBOztBQVdBLHlCQUFBOztBQUNBO0VBQ0UscUJBQUE7RUFDQSx3Q0FBQTtBQUFGOztBQUlBLHVDQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBLCtCQUFBOztBQUNBO0VBQ0Usc0JBQUE7QUFERjs7QUFJQSxnQ0FBQTs7QUFDQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFERiIsImZpbGUiOiJzdG9yZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8vZm9udC1zaXplOiAxMnB0O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zb2NpYWwtbmV0d29yay1zaXple1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMyU7XHJcbn1cclxuXHJcbi5jZW50ZXJ7IFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNDQzlDNjE7IFxyXG4gIGNvbG9yOiB3aGl0ZTsgXHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG4uY2VudGVyLXRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGF0c3BybntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAuY29udF9kcHJue1xyXG4gICAgLml0ZW1zdGRldHN7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICNDQzlDNjEgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmxhYmVsc3RkdGxze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgLmljb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogI0NDOUM2MTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDJweCAjZmZkMGEyO1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICBjb2xvcjogI0NDOUM2MTtcclxuICB9XHJcbn1cclxuLmNvbnRlZG9pbmZve1xyXG4gIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgLnJlZHNjb250e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5yZWRje1xyXG4gICAgLy9jb2xvcjogI0NDOUM2MTtcclxuICAgIGNvbG9yOiAjMUExQTFBO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAycHggI2ZmZDBhMjtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8qXHJcbi5idG4tY29tbWVudHN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMTQ1NDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufSovXHJcblxyXG4vKiBUcmFuc3BhcmVudCBzdGFuZGFyZCAqL1xyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMUExQTFBO1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6ICB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLyogU2hvdyBiYWNrZ3JvdW5kIGlmIGNsYXNzIGlzIGFjdGl2ZSAqL1xyXG4uc2hvdy1iYWNrZ3JvdW5kIHtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogIzFBMUExQVxyXG59XHJcblxyXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBtZCAqL1xyXG4uaGVhZGVyLW1kOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gaW9zICovXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcblxyXG4ubG9nby1oZWFkZXJ7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgY29sb3I6d2hpdGVcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBjb2xvcjp3aGl0ZVxyXG59XHJcblxyXG4ucGFkZGluZy1sYXRlcmFse1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_store-detail_store-detail_module_ts.js.map