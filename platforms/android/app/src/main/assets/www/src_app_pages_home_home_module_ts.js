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
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 99090);
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
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar [class.show-background]=\"showToolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <!--<ion-title>UNI</ion-title>-->\r\n    <!--<ion-buttons slot=\"end\">-->\r\n      <div>\r\n        <ion-buttons>\r\n          <ion-button class=\"center-logo-header\">\r\n            <ion-img class=\"logo-header\" style=\"margin-left: -5%;\" src=\"assets/images/logo-2.png\"></ion-img>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\">\r\n  <!--Componente de map-->\r\n  <div class=\"mapcnt\">\r\n    <app-map></app-map>\r\n  </div>\r\n  <div class=\"slidcat\">\r\n    <!--Slider de categoria-->\r\n    <div class=\"contslicat\">\r\n      <ion-grid>\r\n      <ion-row *ngIf=\"searchBar==0\">\r\n        <ion-col size=\"10\">\r\n          <ion-slides pager=\"false\" [options]=\"slideOpts\">\r\n            <ion-slide >\r\n              <div class=\"itemsl\" (click)=\"search('CERCA DE MI')\" >\r\n                <div class=\"contitemsl\">\r\n                  <div  class=\"center-card\">\r\n                    <ion-img src=\"../../../assets/images/min-white.png\"></ion-img>\r\n                  </div>                          \r\n                </div>\r\n                <label>CERCA DE MI</label>\r\n              </div>\r\n            </ion-slide>\r\n\r\n            <ion-slide *ngFor=\"let category of categories\">\r\n              <div class=\"itemsl\" (click)=\"search(category)\">\r\n                <div class=\"contitemsl\" >\r\n                  <div  class=\"center-card\">\r\n                    <ion-img src=\"../../../assets/images/min-white.png\" ></ion-img>\r\n                  </div>\r\n                </div>\r\n                {{category}}\r\n              </div>\r\n            </ion-slide>\r\n          </ion-slides>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <div class=\"div-center\">\r\n            <ion-button class=\"button-search\" (click)=\"searchView()\">\r\n              <ion-icon name=\"search\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"searchBar==1\">\r\n        <ion-col size='12'>\r\n          <app-searchbar (searchbarText)=\"getText($event)\" (searchToolbar)=\"changeSearchToolbar($event)\">\r\n          </app-searchbar>\r\n        </ion-col>\r\n      </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <!--Listado de establecmiento por categoria-->\r\n    <div class=\"liststores\">\r\n\r\n      <app-stores [logged]=\"logged\" [category]=\"searchCode\" [searchBar]=\"searchBar\" [searchbarText]=\" searchbarText\">\r\n      </app-stores>\r\n      <app-not-found *ngIf=\"searchCode==''\"></app-not-found>\r\n    </div>\r\n    \r\n    <!-- <div class=\"ion-padding\"></div> -->\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n\r\n<!--<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Turn on Ionic Device GPS\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div id=\"container\">\r\n    <ion-button color=\"danger\" (click)=\"chckAppGpsPermission()\">\r\n      Get GPS Locaction\r\n    </ion-button>\r\n\r\n    <ion-row>\r\n      <ion-col>Longitude</ion-col>\r\n      <ion-col> locCords.longitude</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>Latitude</ion-col>\r\n      <ion-col>locCords.latitude</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>Accuracy</ion-col>\r\n      <ion-col>locCords.accuracy</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>Timestamp</ion-col>\r\n      <ion-col> date:'medium'</ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>-->");

/***/ }),

/***/ 40932:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "/* Transparent standard */\nion-toolbar {\n  --background: #1A1A1A;\n  --ion-color-base: transparent !important;\n}\n/* Show background if class is active */\n.show-background {\n  border-style: none;\n  background: #1A1A1A;\n}\n/* Remove bottom border on md */\n.header-md::after {\n  background-image: none;\n}\n/* Remove bottom border on ios */\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n.logo-header {\n  height: 100%;\n  width: 100%;\n  margin-left: 5%;\n}\nion-avatar {\n  width: 100px;\n  height: 100px;\n  --border-radius: 10px;\n}\n/* image inside slide-card*/\nion-avatar ion-img {\n  width: 100% !important;\n  height: 100% !important;\n}\n/* icon inside slide-card*/\nion-avatar fa-icon {\n  font-size: 6em;\n  color: #662582;\n}\nion-menu-button {\n  color: white;\n}\nion-title {\n  color: white;\n}\nion-icon {\n  font-size: 24px;\n}\n.button-search {\n  margin-right: 2%;\n  margin-left: 2%;\n  --background: #CC9C61;\n  color: #ffffff;\n  height: 100%;\n}\n.div-center {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.shadow_test {\n  z-index: 1;\n  box-shadow: 0px -22px 6px -1px #531b6e;\n}\n.itemsl {\n  background-color: #CC9C61;\n  width: 150px;\n  border-radius: 20px;\n  text-align: center;\n  color: #ffffff;\n  padding: 5px;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 14px;\n}\n.itemsl .contitemsl {\n  text-align: center;\n}\n.itemsl .contitemsl ion-avatar {\n  margin: 0 auto;\n  text-align: center;\n}\n.slidcat {\n  height: 30vh;\n  overflow: auto;\n  bottom: 0;\n  position: fixed;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 15px 0;\n}\n.slidcat .contslicat {\n  width: 100%;\n}\n.mapcnt {\n  height: calc(70vh - 44px);\n  position: fixed;\n  top: 45px;\n  background-color: #338383ce;\n  width: 100%;\n}\n.liststores {\n  width: 100%;\n}\n.liststores ion-toolbar {\n  --background: transparent !important;\n}\n.center-logo-header {\n  margin: 0 auto;\n}\n.center-card {\n  width: 65%;\n  margin: auto;\n}\n/*estilos codigo original de activacion GPS*/\n/*#container {\n  text-align: center;\n\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n\n  color: #8c8c8c;\n\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHdDQUFBO0FBQ0Y7QUFDQSx1Q0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUEsK0JBQUE7QUFDQTtFQUNFLHNCQUFBO0FBR0Y7QUFEQSxnQ0FBQTtBQUNBO0VBQ0UsaUJBQUE7QUFJRjtBQUZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBS0Y7QUFIQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFNRjtBQUpBLDJCQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBT0Y7QUFMQSwwQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFRRjtBQU5BO0VBQ0UsWUFBQTtBQVNGO0FBUEE7RUFDRSxZQUFBO0FBVUY7QUFSQTtFQUNFLGVBQUE7QUFXRjtBQVJBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBRUQscUJBQUE7RUFDQyxjQUFBO0VBQ0EsWUFBQTtBQVVGO0FBUkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBV0Y7QUFSQTtFQUNFLFVBQUE7RUFHQSxzQ0FBQTtBQVdGO0FBUkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVdGO0FBVkU7RUFDSSxrQkFBQTtBQVlOO0FBWE07RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFhVjtBQVRBO0VBTUUsWUFBQTtFQUNBLGNBQUE7RUFLQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUFHRjtBQUZFO0VBQ0ksV0FBQTtBQUlOO0FBREE7RUFFRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBR0Y7QUFEQTtFQUNFLFdBQUE7QUFJRjtBQUhFO0VBQ0ksb0NBQUE7QUFLTjtBQURBO0VBQ0UsY0FBQTtBQUlGO0FBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdGO0FBQUEsNENBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRyYW5zcGFyZW50IHN0YW5kYXJkICovXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICMxQTFBMUE7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4vKiBTaG93IGJhY2tncm91bmQgaWYgY2xhc3MgaXMgYWN0aXZlICovXHJcbi5zaG93LWJhY2tncm91bmQge1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjMUExQTFBO1xyXG59XHJcbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIG1kICovXHJcbi5oZWFkZXItbWQ6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIGlvcyAqL1xyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcclxuICAtLWJvcmRlci13aWR0aDogMDtcclxufVxyXG4ubG9nby1oZWFkZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi8qIGltYWdlIGluc2lkZSBzbGlkZS1jYXJkKi9cclxuaW9uLWF2YXRhciBpb24taW1nIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGljb24gaW5zaWRlIHNsaWRlLWNhcmQqL1xyXG5pb24tYXZhdGFyIGZhLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNmVtO1xyXG4gIGNvbG9yOiAjNjYyNTgyO1xyXG59XHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5idXR0b24tc2VhcmNoIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuIC8vIC0tYmFja2dyb3VuZDogIzE2QzBEQjtcclxuIC0tYmFja2dyb3VuZDogI0NDOUM2MTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmRpdi1jZW50ZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaGFkb3dfdGVzdCB7XHJcbiAgei1pbmRleDogMTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtMjJweCA2cHggLTFweCByZ2JhKDgzLCAyNywgMTEwLCAxKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAtMjJweCA2cHggLTFweCByZ2JhKDgzLCAyNywgMTEwLCAxKTtcclxuICBib3gtc2hhZG93OiAwcHggLTIycHggNnB4IC0xcHggcmdiYSg4MywgMjcsIDExMCwgMSk7XHJcbn1cclxuXHJcbi5pdGVtc2x7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDOUM2MTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLmNvbnRpdGVtc2x7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbi5zbGlkY2F0e1xyXG4gIC8vIGhlaWdodDogMjV2aDtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIC5jb250c2xpY2F0e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuLm1hcGNudHtcclxuICAvLyBoZWlnaHQ6IGNhbGMoNzV2aCAtIDQ0cHgpO1xyXG4gIGhlaWdodDogY2FsYyg3MHZoIC0gNDRweCk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM4MzgzY2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxpc3RzdG9yZXN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jZW50ZXItbG9nby1oZWFkZXJ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLy9tYXJnaW4tbGVmdDogNDAlO1xyXG59XHJcblxyXG4uY2VudGVyLWNhcmR7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi8qZXN0aWxvcyBjb2RpZ28gb3JpZ2luYWwgZGUgYWN0aXZhY2lvbiBHUFMqL1xyXG5cclxuLyojY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Ki8iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map