"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_transfers_transfers_module_ts"],{

/***/ 45832:
/*!*************************************************************!*\
  !*** ./src/app/pages/transfers/transfers-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersPageRoutingModule": () => (/* binding */ TransfersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _transfers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfers.page */ 89064);




const routes = [
    {
        path: '',
        component: _transfers_page__WEBPACK_IMPORTED_MODULE_0__.TransfersPage
    }
];
let TransfersPageRoutingModule = class TransfersPageRoutingModule {
};
TransfersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransfersPageRoutingModule);



/***/ }),

/***/ 11520:
/*!*****************************************************!*\
  !*** ./src/app/pages/transfers/transfers.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersPageModule": () => (/* binding */ TransfersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _transfers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfers-routing.module */ 45832);
/* harmony import */ var _transfers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfers.page */ 89064);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-lazyload-image */ 2478);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 57693);










let TransfersPageModule = class TransfersPageModule {
};
TransfersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _transfers_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransfersPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__.LazyLoadImageModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_transfers_page__WEBPACK_IMPORTED_MODULE_1__.TransfersPage]
    })
], TransfersPageModule);



/***/ }),

/***/ 89064:
/*!***************************************************!*\
  !*** ./src/app/pages/transfers/transfers.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersPage": () => (/* binding */ TransfersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_transfers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./transfers.page.html */ 83779);
/* harmony import */ var _transfers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfers.page.scss */ 61262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let TransfersPage = class TransfersPage {
    constructor() { }
    ngOnInit() {
    }
};
TransfersPage.ctorParameters = () => [];
TransfersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-transfers',
        template: _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_transfers_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_transfers_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransfersPage);



/***/ }),

/***/ 83779:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/transfers/transfers.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header2 [title]=\"'Transferencias'\" [go]=\"'home'\"></app-header2>\n\n<ion-content>\n\n    <ion-card>\n      <ion-card-content>\n        <div style=\"text-align: center\" >\n          <label> Proximamente</label>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>");

/***/ }),

/***/ 61262:
/*!*****************************************************!*\
  !*** ./src/app/pages/transfers/transfers.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2ZlcnMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_transfers_transfers_module_ts.js.map