"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_gps-store_gps-store_module_ts"],{

/***/ 19672:
/*!*************************************************************!*\
  !*** ./src/app/pages/gps-store/gps-store-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GpsStorePageRoutingModule": () => (/* binding */ GpsStorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _gps_store_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gps-store.page */ 18977);




const routes = [
    {
        path: '',
        component: _gps_store_page__WEBPACK_IMPORTED_MODULE_0__.GpsStorePage
    }
];
let GpsStorePageRoutingModule = class GpsStorePageRoutingModule {
};
GpsStorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GpsStorePageRoutingModule);



/***/ }),

/***/ 8630:
/*!*****************************************************!*\
  !*** ./src/app/pages/gps-store/gps-store.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GpsStorePageModule": () => (/* binding */ GpsStorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _gps_store_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gps-store-routing.module */ 19672);
/* harmony import */ var _gps_store_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gps-store.page */ 18977);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 28249);










let GpsStorePageModule = class GpsStorePageModule {
};
GpsStorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _gps_store_routing_module__WEBPACK_IMPORTED_MODULE_0__.GpsStorePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule
        ],
        declarations: [_gps_store_page__WEBPACK_IMPORTED_MODULE_1__.GpsStorePage]
    })
], GpsStorePageModule);



/***/ }),

/***/ 18977:
/*!***************************************************!*\
  !*** ./src/app/pages/gps-store/gps-store.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GpsStorePage": () => (/* binding */ GpsStorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gps_store_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gps-store.page.html */ 74705);
/* harmony import */ var _gps_store_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gps-store.page.scss */ 86829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ 36983);
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/location.service */ 9753);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);








let GpsStorePage = class GpsStorePage {
    constructor(categoriesServices, activatedRoute, router, agmService, locationService) {
        this.categoriesServices = categoriesServices;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.agmService = agmService;
        this.locationService = locationService;
        this.map = null;
        //retorno de la ruta optima
        this.directionsService = new google.maps.DirectionsService();
        //renderiza ruta en el mapa
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.store = [];
        this.detail = [];
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
            console.log('recipe id gps map component = ' + this.recipeId);
            this.loadMap();
        });
    }
    loadMap() {
        this.locationService.gpsActivated.subscribe((res) => {
            console.log('accors = ' + JSON.stringify(res));
            if (res == null) {
                console.log('Por favor active su gps');
                this.router.navigate(['pages/store-detail/' + this.recipeId]);
            }
            this.origin.position.lat = res.latitude;
            this.origin.position.lng = res.longitude;
            console.log('this.origin.position.lat)', this.origin.position.lat);
            // create a new map by passing HTMLElement - acceder al elemento con id map
            const mapEle = document.getElementById('map');
            //indicadores
            const indicatorsEle = document.getElementById('indicators');
            // create map
            this.map = new google.maps.Map(mapEle, {
                center: new google.maps.LatLng(8.353993, -62.6802515),
                zoom: 13
            });
            // servicio de display, con referencia al mapa para mostrar los marcadores
            this.directionsDisplay.setMap(this.map);
            //panel para mostrar indicaciones
            this.directionsDisplay.setPanel(indicatorsEle);
            //renderiza map con todos sus elementos
            google.maps.event.addListenerOnce(this.map, 'idle', () => {
                mapEle.classList.add('show-map');
                //this.renderMarkers();
                this.calculateRoute();
            });
        });
    }
    addMarker(marker) {
        return new google.maps.Marker({
            position: marker.position,
            map: this.map,
            title: marker.title
        });
    }
    calculateRoute() {
        console.log('this.origin.position.lng = calculateRoute()' + this.origin.position.lng);
        this.activatedRoute.paramMap.subscribe(data => {
            let recipeId = data.get('id_store');
            this.categoriesServices.getCategories()
                .subscribe(data => {
                this.store = data.result;
                this.detail = this.store.find(res => { return res.Id == recipeId; });
                console.log(this.detail);
                this.directionsService.route({
                    origin: new google.maps.LatLng(this.origin.position.lat, this.origin.position.lng),
                    destination: new google.maps.LatLng(this.detail.Latitud, this.detail.Logitud),
                    //Datos para pruebas en el navegador
                    /*origin: new google.maps.LatLng(8.353993, -62.6802515),
                    destination: new google.maps.LatLng(6.2227041, -75.5816355),*/
                    //tipo de viaje
                    travelMode: google.maps.TravelMode.DRIVING,
                }, (response, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        this.directionsDisplay.setDirections(response);
                    }
                    else {
                        alert('Erro al Calcular las rutas');
                        //alert('Could not display directions due to: ' + status);
                    }
                });
            });
        });
    }
};
GpsStorePage.ctorParameters = () => [
    { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__.CategoriesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__.AgmService },
    { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__.LocationService }
];
GpsStorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-gps-store',
        template: _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gps_store_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gps_store_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GpsStorePage);



/***/ }),

/***/ 74705:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/gps-store/gps-store.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header2 [title]=\"detail.Establecimiento\"></app-header2>\r\n\r\n<ion-content>\r\n  <ion-content>\r\n    <div id=\"map\"></div>\r\n    <div\r\n      id=\"indicators\"\r\n    ></div>  \r\n  </ion-content>\r\n  <!--<app-gps-map \r\n    [latOrigin]=\"origin.position.lat\"\r\n    [lngOrigin]=\"origin.position.lng\"\r\n  >\r\n  </app-gps-map>  -->\r\n</ion-content>\r\n ");

/***/ }),

/***/ 86829:
/*!*****************************************************!*\
  !*** ./src/app/pages/gps-store/gps-store.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-content #map {\n  width: 100%;\n  height: 60%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  display: block;\n}\nion-content #map.show-map {\n  opacity: 1;\n}\n#indicators {\n  padding: 16px;\n  height: 40%;\n  width: 100%;\n  overflow-y: auto;\n  display: block;\n  color: white;\n  background-color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdwcy1zdG9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUFBTjtBQUNNO0VBQ0UsVUFBQTtBQUNSO0FBSUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFESiIsImZpbGUiOiJncHMtc3RvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgI21hcCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgJi5zaG93LW1hcHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjaW5kaWNhdG9ycyB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgfVxyXG5cclxuICBcclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gps-store_gps-store_module_ts.js.map