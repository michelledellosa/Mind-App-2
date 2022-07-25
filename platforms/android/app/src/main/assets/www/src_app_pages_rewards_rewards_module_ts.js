"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rewards_rewards_module_ts"],{

/***/ 44422:
/*!*********************************************************!*\
  !*** ./src/app/pages/rewards/rewards-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardsPageRoutingModule": () => (/* binding */ RewardsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _rewards_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rewards.page */ 59099);




const routes = [
    {
        path: '',
        component: _rewards_page__WEBPACK_IMPORTED_MODULE_0__.RewardsPage
    }
];
let RewardsPageRoutingModule = class RewardsPageRoutingModule {
};
RewardsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RewardsPageRoutingModule);



/***/ }),

/***/ 4737:
/*!*************************************************!*\
  !*** ./src/app/pages/rewards/rewards.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardsPageModule": () => (/* binding */ RewardsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 2478);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _rewards_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rewards-routing.module */ 44422);
/* harmony import */ var _rewards_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rewards.page */ 59099);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);









let RewardsPageModule = class RewardsPageModule {
};
RewardsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _rewards_routing_module__WEBPACK_IMPORTED_MODULE_0__.RewardsPageRoutingModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule,
        ],
        declarations: [_rewards_page__WEBPACK_IMPORTED_MODULE_1__.RewardsPage]
    })
], RewardsPageModule);



/***/ }),

/***/ 59099:
/*!***********************************************!*\
  !*** ./src/app/pages/rewards/rewards.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardsPage": () => (/* binding */ RewardsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rewards_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./rewards.page.html */ 98610);
/* harmony import */ var _rewards_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rewards.page.scss */ 4179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_app_services_reward_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/reward.service */ 45458);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 8735);
/* harmony import */ var src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/coupons.service */ 35395);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ 53755);










let RewardsPage = class RewardsPage {
    constructor(commonService, agmService, rewardService, couponServices, activatedRoute, router, loginServices) {
        this.commonService = commonService;
        this.agmService = agmService;
        this.rewardService = rewardService;
        this.couponServices = couponServices;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loginServices = loginServices;
        this.rewards = [];
        this._loginServices = this.loginServices.isLogged();
    }
    ngOnInit() {
        if (this.loginServices.isLogged() == true) {
            this.rewardService.getRewards()
                .subscribe(res => {
                // si existe el parametro Id_Asignado en la posicion 0,
                //no existe listado de recompensas para este usuario
                if (res.result[0].Id_Asignado == 'La Promocion con ID  NO existe en la base de datos o esta Des Habilitada') {
                    return this.rewards = res.result[0];
                }
                else {
                    return this.rewards = res.result;
                }
            });
        }
        else {
            return;
        }
    }
    rewardDetails(id) {
        this.router.navigate(['/pages/rewards/reward-details/' + id]);
    }
};
RewardsPage.ctorParameters = () => [
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__.AgmService },
    { type: src_app_services_reward_service__WEBPACK_IMPORTED_MODULE_3__.RewardService },
    { type: src_app_services_coupons_service__WEBPACK_IMPORTED_MODULE_5__.CouponsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService }
];
RewardsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-rewards',
        template: _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rewards_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rewards_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RewardsPage);



/***/ }),

/***/ 98610:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/rewards/rewards.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header2 [title]=\"'Recompensas'\" [go]=\"'home'\"></app-header2>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"_loginServices==true && !rewards.Id_Asignado; else rewardsExist\">\r\n    <ion-card *ngFor=\"let reward of rewards\" (click)='rewardDetails(reward.Id_Promociones)'>\r\n      <ion-card-content>\r\n        <div style=\"margin: 0 auto;height: 40%;width: 40%;\">\r\n          <img [defaultImage]=\"commonService.defaultImage\" [lazyLoad]=\"reward.foto\">\r\n        </div>\r\n        <label>{{reward.Nombre_Promocion}}</label>\r\n        <div>\r\n          <label>Puntos: {{reward.cantidad_puntos}}</label>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <ng-template #rewardsExist>\r\n    <ion-card>\r\n      <ion-card-content>\r\n        <div *ngIf=\"_loginServices==true && rewards.Id_Asignado;\" style=\"text-align: center;\">\r\n          <label>Usted no posee recompensas disponibles</label>\r\n        </div>\r\n        <div *ngIf=\"_loginServices==false\" style=\"text-align: center;\">\r\n          <label> Inicie sesión para acceder a sus recompensas disponibles</label>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ng-template>\r\n</ion-content>");

/***/ }),

/***/ 4179:
/*!*************************************************!*\
  !*** ./src/app/pages/rewards/rewards.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXdhcmRzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rewards_rewards_module_ts.js.map