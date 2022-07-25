"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reward-details_reward-details_module_ts"],{

/***/ 89274:
/*!***********************************************************************!*\
  !*** ./src/app/pages/reward-details/reward-details-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardDetailsPageRoutingModule": () => (/* binding */ RewardDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _reward_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-details.page */ 64887);




const routes = [
    {
        path: '',
        component: _reward_details_page__WEBPACK_IMPORTED_MODULE_0__.RewardDetailsPage
    }
];
let RewardDetailsPageRoutingModule = class RewardDetailsPageRoutingModule {
};
RewardDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RewardDetailsPageRoutingModule);



/***/ }),

/***/ 66445:
/*!***************************************************************!*\
  !*** ./src/app/pages/reward-details/reward-details.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardDetailsPageModule": () => (/* binding */ RewardDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 2478);
/* harmony import */ var _reward_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-details-routing.module */ 89274);
/* harmony import */ var _reward_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward-details.page */ 64887);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);









let RewardDetailsPageModule = class RewardDetailsPageModule {
};
RewardDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _reward_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.RewardDetailsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule
        ],
        declarations: [_reward_details_page__WEBPACK_IMPORTED_MODULE_1__.RewardDetailsPage]
    })
], RewardDetailsPageModule);



/***/ }),

/***/ 64887:
/*!*************************************************************!*\
  !*** ./src/app/pages/reward-details/reward-details.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardDetailsPage": () => (/* binding */ RewardDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reward_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./reward-details.page.html */ 10078);
/* harmony import */ var _reward_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward-details.page.scss */ 86793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_reward_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/reward.service */ 45458);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 8735);







let RewardDetailsPage = class RewardDetailsPage {
    constructor(commonService, activatedRoute, rewardService) {
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
        this.rewardService = rewardService;
        this.reward = [];
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(data => {
            //toma el id de la url actual
            let recipeId = data.get('id_reward');
            let temp = [];
            this.rewardService.getRewards()
                .subscribe(res => {
                temp = res.result;
                this.reward = temp.find(data => {
                    return data.Id_Promociones == recipeId;
                });
                //console.log('this.reward= '+JSON.stringify(this.reward));
                this.title = this.reward.Nombre_Promocion;
                //        console.log('titulo de details recompensa='+this.title)
            });
        });
    }
};
RewardDetailsPage.ctorParameters = () => [
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_reward_service__WEBPACK_IMPORTED_MODULE_2__.RewardService }
];
RewardDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-reward-details',
        template: _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reward_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reward_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RewardDetailsPage);



/***/ }),

/***/ 10078:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/reward-details/reward-details.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header2 [title]='title' [go]=\"'pages/rewards'\"></app-header2>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <div style=\"margin: 0 auto;height: 40%;width: 40%;\" >\r\n        <img [defaultImage]=\"commonService.defaultImage\" [lazyLoad]=\"reward.foto\">\r\n      </div>\r\n      <div class=\"center\">\r\n      <label >{{reward.Nombre_Promocion}}</label>\r\n    </div>\r\n    <div class=\"center\">\r\n        <label >Puntos: {{reward.cantidad_puntos}}</label> \r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div>\r\n    <ion-row style=\"margin: 2%;\" class=\"center\">\r\n      <ion-col size=\"6\">\r\n        <label >Inicio: {{reward.fecha_inicio}}</label> \r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <label >Finaliza: {{reward.fecha_final}}</label> \r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n  </div>\r\n\r\n  <div class=\"styleText\">\r\n    <h1 class=\"center\"> DESCRIPCIÓN </h1>\r\n  </div>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <p>{{reward.Descripcion}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div class=\"styleText\">\r\n    <h1 class=\"center\">  TÉRMINOS </h1>\r\n  </div>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <p>{{reward.Terminos}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n<!--ESTA OPCION AUN NO ESTA EN LA API-->\r\n  <!--\r\n  <div class=\"ion-text-center\" style=\"margin: 2%;\">\r\n    <ion-button expand=\"block\" size=\"small\">{{'SOLICITAR' | titlecase}}</ion-button>\r\n  </div>-->\r\n\r\n  \r\n</ion-content>");

/***/ }),

/***/ 86793:
/*!***************************************************************!*\
  !*** ./src/app/pages/reward-details/reward-details.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".center {\n  text-align: center;\n}\n\n.styleText {\n  margin: 0 auto;\n  background: #ef7a06;\n  color: white;\n  width: 90%;\n}\n\nh1 {\n  font-size: 12pt;\n}\n\nh2 {\n  margin: auto;\n  margin-top: 2%;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld2FyZC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLHlDQUFBO0FBQ0oiLCJmaWxlIjoicmV3YXJkLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5zdHlsZVRleHR7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNlZjdhMDY7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL2ZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reward-details_reward-details_module_ts.js.map