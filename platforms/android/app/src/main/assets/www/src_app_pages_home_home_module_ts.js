"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 89639:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 88774);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 35129:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 88774);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 89639);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 28249);










let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 88774:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 99090);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 40932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_app_services_common_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/alert.service */ 67732);
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/categories.service */ 36983);
/* harmony import */ var src_app_services_common_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common/loading.service */ 99439);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ 53755);
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/location.service */ 9753);
/* harmony import */ var src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/plugin.service */ 6762);











let HomePage = class HomePage {
    /*********************************** */
    constructor(alertService, loadingService, agmService, categoriesService, loginService, locationService, pluginService) {
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.agmService = agmService;
        this.categoriesService = categoriesService;
        this.loginService = loginService;
        this.locationService = locationService;
        this.pluginService = pluginService;
        /*********************************** */
        this.logged = false;
        this.showToolbar = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            breakpoints: {
                /*150: {
                  slidesPerView: 1
                },*/
                300: {
                    slidesPerView: 1
                },
                400: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3
                },
                750: {
                    slidesPerView: 4
                },
                1000: {
                    slidesPerView: 5
                }
            }
        };
        this.searchBar = 0;
        this.categories = [];
        this.paramMapDetails = [];
        this.userData = {
            email: '',
            token: '',
            id_store: 0,
            id_login: 0
        };
        this.data = [];
        this.items = [];
        this.arrayCategories = [];
        this.stores = [];
        this.storesFiltred = [];
        this.temp = [];
        this.mapDestroye = true;
    }
    ngOnInit() {
        //this.chckAppGpsPermission();
        this.checkLogged();
        this.getCategories();
        this.getNearToMe();
    }
    getNearToMe() {
        this.categoriesService.getNearToMe();
    }
    checkLogged() {
        this.logged = this.loginService.isLogged();
        if (this.logged == true) {
            this.loginService.getUserStored();
        }
    }
    getCategories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.loadingService.presentLoading();
                this.categoriesService.getCategories()
                    .subscribe(res => {
                    //console.log("categories = ", res)
                    this.arrayCategories = res.result;
                    for (var i = 0; i <= this.arrayCategories.length - 1; i++) {
                        if (this.arrayCategories[i].Tipo != '') {
                            this.temp[i] = this.arrayCategories[i].Tipo;
                        }
                    }
                    ;
                    //elimina los items repetidos
                    this.categories = this.temp.reduce((a, e) => {
                        if (!a.find(d => d == e)) {
                            a.push(e);
                        }
                        return a;
                    }, []);
                    // filtramos el array por su categoria
                    this.filterStores(this.categories['1']);
                });
            }
            catch (error) {
                alert("error line 139 = " + error);
                this.alertService.presentAlert("Error", "Error al cargar las categorias");
                this.loadingService.dismissLoading();
            }
        });
    }
    search(categoryId) {
        //console.log(categoryId);
        if (categoryId == 'CERCA DE MI') {
            console.log('click en cerca de mi');
            this.searchCode = 'CERCA DE MI';
            //return this.agmService.agmMarket.next(1);
            return this.searchCode;
        }
        else {
            this.agmService.agmMarket.next(0);
            this.mapDestroye = false;
            this.searchCode = categoryId;
            if (this.searchCode == '' || this.filterStores(this.searchCode) == 0) {
                return;
            }
            setTimeout(() => {
                this.mapDestroye = true;
            }, 1000);
            return this.searchCode;
        }
    }
    getParamMap(e) {
        this.paramMapDetails = e;
    }
    filterStores(category) {
        //obtiene los parametros que se necesitan para listar los componentes
        this.stores = this.arrayCategories
            .map(res => {
            return {
                lat: this.isLatitude(Number(res.Latitud)) ? Number(res.Latitud) : false,
                lng: this.isLongitude(Number(res.Logitud)) ? Number(res.Logitud) : false,
                id: res.Id,
                type: res.Tipo,
                address: res.Direccion,
                label: res.Establecimiento,
                draggable: false
            };
        }).filter(res => res.lat && res.lng);
        //lista filtrada por categoria, utilizada para los markers
        this.storesFiltred = this.arrayCategories
            .filter(data => { return data.Tipo == category; })
            .map(res => {
            return {
                lat: this.isLatitude(Number(res.Latitud)) ? Number(res.Latitud) : false,
                lng: this.isLongitude(Number(res.Logitud)) ? Number(res.Logitud) : false,
                id: res.Id,
                type: res.Tipo,
                address: res.Direccion,
                label: res.Establecimiento,
                category: res.Categoria,
                draggable: false
            };
        }).filter(res => res.lat && res.lng);
        // este es para mostrar la lista en el componente
        this.agmService.storesList.next(this.stores);
        // Este es para el mostrar los marcadores en el mapa / click
        this.agmService.agmMarket.next(this.storesFiltred);
        this.loadingService.dismissLoading();
        return this.stores.length;
    }
    isLatitude(lat) {
        return isFinite(lat) && Math.abs(lat) <= 90;
    }
    isLongitude(lng) {
        return isFinite(lng) && Math.abs(lng) <= 180;
    }
    /**
     *
     * @returns {void}
     */
    searchView() {
        this.searchBar = 1;
    }
    getText(e) {
        this.searchbarText = e;
    }
    changeSearchToolbar(e) {
        this.searchBar = e;
        this.searchbarText = '';
    }
    onScroll($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 225;
        }
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_common_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_services_common_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__.AgmService },
    { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_4__.CategoriesService },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService },
    { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_7__.LocationService },
    { type: src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_8__.PluginService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-home',
        template: _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 99090:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/home.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar [class.show-background]=\"showToolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <!--<ion-title>UNI</ion-title>-->\n    <!--<ion-buttons slot=\"end\">-->\n      <div>\n        <ion-buttons>\n          <ion-button class=\"center-logo-header\">\n            <ion-img class=\"logo-header\" style=\"margin-left: -5%;\" src=\"assets/images/logo-2.png\"></ion-img>\n          </ion-button>\n        </ion-buttons>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\">\n  <!--Componente de map-->\n  <div class=\"mapcnt\">\n    <app-map></app-map>\n  </div>\n  <div class=\"slidcat\">\n    <!--Slider de categoria-->\n    <div class=\"contslicat\">\n      <ion-grid>\n      <ion-row *ngIf=\"searchBar==0\">\n        <ion-col size=\"10\">\n          <ion-slides pager=\"false\" [options]=\"slideOpts\">\n            <ion-slide >\n              <div class=\"itemsl\" (click)=\"search('CERCA DE MI')\" >\n                <div class=\"contitemsl\">\n                  <div  class=\"center-card\">\n                    <ion-img src=\"../../../assets/images/min-white.png\"></ion-img>\n                  </div>                          \n                </div>\n                <label>CERCA DE MI</label>\n              </div>\n            </ion-slide>\n\n            <ion-slide *ngFor=\"let category of categories\">\n              <div class=\"itemsl\" (click)=\"search(category)\">\n                <div class=\"contitemsl\" >\n                  <div  class=\"center-card\">\n                    <ion-img src=\"../../../assets/images/min-white.png\" ></ion-img>\n                  </div>\n                </div>\n                {{category}}\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div class=\"div-center\">\n            <ion-button class=\"button-search\" (click)=\"searchView()\">\n              <ion-icon name=\"search\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"searchBar==1\">\n        <ion-col size='12'>\n          <app-searchbar (searchbarText)=\"getText($event)\" (searchToolbar)=\"changeSearchToolbar($event)\">\n          </app-searchbar>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n    </div>\n    <!--Listado de establecmiento por categoria-->\n    <div class=\"liststores\">\n\n      <app-stores [logged]=\"logged\" [category]=\"searchCode\" [searchBar]=\"searchBar\" [searchbarText]=\" searchbarText\">\n      </app-stores>\n      <app-not-found *ngIf=\"searchCode==''\"></app-not-found>\n    </div>\n    \n    <!-- <div class=\"ion-padding\"></div> -->\n  </div>\n\n\n</ion-content>\n\n<!--<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Turn on Ionic Device GPS\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"container\">\n    <ion-button color=\"danger\" (click)=\"chckAppGpsPermission()\">\n      Get GPS Locaction\n    </ion-button>\n\n    <ion-row>\n      <ion-col>Longitude</ion-col>\n      <ion-col> locCords.longitude</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Latitude</ion-col>\n      <ion-col>locCords.latitude</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Accuracy</ion-col>\n      <ion-col>locCords.accuracy</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Timestamp</ion-col>\n      <ion-col> date:'medium'</ion-col>\n    </ion-row>\n  </div>\n</ion-content>-->");

/***/ }),

/***/ 40932:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "/* Transparent standard */\nion-toolbar {\n  --background: #1A1A1A;\n  --ion-color-base: transparent !important;\n}\n/* Show background if class is active */\n.show-background {\n  border-style: none;\n  background: #1A1A1A;\n}\n/* Remove bottom border on md */\n.header-md::after {\n  background-image: none;\n}\n/* Remove bottom border on ios */\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n.logo-header {\n  height: 100%;\n  width: 100%;\n  margin-left: 5%;\n}\nion-avatar {\n  width: 100px;\n  height: 100px;\n  --border-radius: 10px;\n}\n/* image inside slide-card*/\nion-avatar ion-img {\n  width: 100% !important;\n  height: 100% !important;\n}\n/* icon inside slide-card*/\nion-avatar fa-icon {\n  font-size: 6em;\n  color: #662582;\n}\nion-menu-button {\n  color: white;\n}\nion-title {\n  color: white;\n}\nion-icon {\n  font-size: 24px;\n}\n.button-search {\n  margin-right: 2%;\n  margin-left: 2%;\n  --background: #CC9C61;\n  color: #ffffff;\n  height: 100%;\n}\n.div-center {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.shadow_test {\n  z-index: 1;\n  box-shadow: 0px -22px 6px -1px #531b6e;\n}\n.itemsl {\n  background-color: #CC9C61;\n  width: 150px;\n  border-radius: 20px;\n  text-align: center;\n  color: #ffffff;\n  padding: 5px;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 14px;\n}\n.itemsl .contitemsl {\n  text-align: center;\n}\n.itemsl .contitemsl ion-avatar {\n  margin: 0 auto;\n  text-align: center;\n}\n.slidcat {\n  height: 30vh;\n  overflow: auto;\n  bottom: 0;\n  position: fixed;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 15px 0;\n}\n.slidcat .contslicat {\n  width: 100%;\n}\n.mapcnt {\n  height: calc(70vh - 44px);\n  position: fixed;\n  top: 45px;\n  background-color: #338383ce;\n  width: 100%;\n}\n.liststores {\n  width: 100%;\n}\n.liststores ion-toolbar {\n  --background: transparent !important;\n}\n.center-logo-header {\n  margin: 0 auto;\n}\n.center-card {\n  width: 65%;\n  margin: auto;\n}\n/*estilos codigo original de activacion GPS*/\n/*#container {\n  text-align: center;\n\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n\n  color: #8c8c8c;\n\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHdDQUFBO0FBQ0Y7QUFDQSx1Q0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUEsK0JBQUE7QUFDQTtFQUNFLHNCQUFBO0FBR0Y7QUFEQSxnQ0FBQTtBQUNBO0VBQ0UsaUJBQUE7QUFJRjtBQUZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBS0Y7QUFIQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFNRjtBQUpBLDJCQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBT0Y7QUFMQSwwQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFRRjtBQU5BO0VBQ0UsWUFBQTtBQVNGO0FBUEE7RUFDRSxZQUFBO0FBVUY7QUFSQTtFQUNFLGVBQUE7QUFXRjtBQVJBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBRUQscUJBQUE7RUFDQyxjQUFBO0VBQ0EsWUFBQTtBQVVGO0FBUkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBV0Y7QUFSQTtFQUNFLFVBQUE7RUFHQSxzQ0FBQTtBQVdGO0FBUkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVdGO0FBVkU7RUFDSSxrQkFBQTtBQVlOO0FBWE07RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFhVjtBQVRBO0VBTUUsWUFBQTtFQUNBLGNBQUE7RUFLQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUFHRjtBQUZFO0VBQ0ksV0FBQTtBQUlOO0FBREE7RUFFRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBR0Y7QUFEQTtFQUNFLFdBQUE7QUFJRjtBQUhFO0VBQ0ksb0NBQUE7QUFLTjtBQURBO0VBQ0UsY0FBQTtBQUlGO0FBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdGO0FBQUEsNENBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRyYW5zcGFyZW50IHN0YW5kYXJkICovXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzFBMUExQTtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cbi5zaG93LWJhY2tncm91bmQge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMxQTFBMUE7XG59XG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBtZCAqL1xuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gaW9zICovXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG4ubG9nby1oZWFkZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4vKiBpbWFnZSBpbnNpZGUgc2xpZGUtY2FyZCovXG5pb24tYXZhdGFyIGlvbi1pbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi8qIGljb24gaW5zaWRlIHNsaWRlLWNhcmQqL1xuaW9uLWF2YXRhciBmYS1pY29uIHtcbiAgZm9udC1zaXplOiA2ZW07XG4gIGNvbG9yOiAjNjYyNTgyO1xufVxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5idXR0b24tc2VhcmNoIHtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuIC8vIC0tYmFja2dyb3VuZDogIzE2QzBEQjtcbiAtLWJhY2tncm91bmQ6ICNDQzlDNjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZGl2LWNlbnRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2hhZG93X3Rlc3Qge1xuICB6LWluZGV4OiAxO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtMjJweCA2cHggLTFweCByZ2JhKDgzLCAyNywgMTEwLCAxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggLTIycHggNnB4IC0xcHggcmdiYSg4MywgMjcsIDExMCwgMSk7XG4gIGJveC1zaGFkb3c6IDBweCAtMjJweCA2cHggLTFweCByZ2JhKDgzLCAyNywgMTEwLCAxKTtcbn1cblxuLml0ZW1zbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDOUM2MTtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLmNvbnRpdGVtc2x7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBpb24tYXZhdGFye1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgfVxufVxuLnNsaWRjYXR7XG4gIC8vIGhlaWdodDogMjV2aDtcbiAgLy8gZGlzcGxheTogZmxleDtcbiAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcGFkZGluZzogMTVweCAwO1xuICAuY29udHNsaWNhdHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ubWFwY250e1xuICAvLyBoZWlnaHQ6IGNhbGMoNzV2aCAtIDQ0cHgpO1xuICBoZWlnaHQ6IGNhbGMoNzB2aCAtIDQ0cHgpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzODM4M2NlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5saXN0c3RvcmVze1xuICB3aWR0aDogMTAwJTtcbiAgaW9uLXRvb2xiYXJ7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmNlbnRlci1sb2dvLWhlYWRlcntcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC8vbWFyZ2luLWxlZnQ6IDQwJTtcbn1cblxuLmNlbnRlci1jYXJke1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi8qZXN0aWxvcyBjb2RpZ28gb3JpZ2luYWwgZGUgYWN0aXZhY2lvbiBHUFMqL1xuXG4vKiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSovIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map