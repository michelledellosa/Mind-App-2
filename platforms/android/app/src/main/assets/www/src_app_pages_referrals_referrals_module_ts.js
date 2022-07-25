"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_referrals_referrals_module_ts"],{

/***/ 81956:
/*!*************************************************************!*\
  !*** ./src/app/pages/referrals/referrals-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralsPageRoutingModule": () => (/* binding */ ReferralsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _referrals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referrals.page */ 50754);




const routes = [
    {
        path: '',
        component: _referrals_page__WEBPACK_IMPORTED_MODULE_0__.ReferralsPage
    }
];
let ReferralsPageRoutingModule = class ReferralsPageRoutingModule {
};
ReferralsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReferralsPageRoutingModule);



/***/ }),

/***/ 5312:
/*!*****************************************************!*\
  !*** ./src/app/pages/referrals/referrals.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralsPageModule": () => (/* binding */ ReferralsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _referrals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referrals-routing.module */ 81956);
/* harmony import */ var _referrals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./referrals.page */ 50754);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 19746);









let ReferralsPageModule = class ReferralsPageModule {
};
ReferralsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule,
            _referrals_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReferralsPageRoutingModule
        ],
        declarations: [_referrals_page__WEBPACK_IMPORTED_MODULE_1__.ReferralsPage]
    })
], ReferralsPageModule);



/***/ }),

/***/ 50754:
/*!***************************************************!*\
  !*** ./src/app/pages/referrals/referrals.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralsPage": () => (/* binding */ ReferralsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_referrals_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./referrals.page.html */ 1435);
/* harmony import */ var _referrals_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./referrals.page.scss */ 42622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_referrals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/referrals.service */ 59459);
/* harmony import */ var src_app_components_new_referral_new_referral_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/new-referral/new-referral.component */ 94060);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 18260);









let ReferralsPage = class ReferralsPage {
    constructor(datePipe, popoverController, referralService) {
        this.datePipe = datePipe;
        this.popoverController = popoverController;
        this.referralService = referralService;
        this.referrals = [];
        this.itemsPage = 5;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.API;
    }
    ngOnInit() {
        this.getReferrals();
    }
    getReferrals() {
        this.referralService.getReferrals().subscribe(data => {
            if (data.result) {
                this.referrals = data.result;
            }
            else {
                console.log('Error al obtener listado de referidos');
                return;
            }
        });
    }
    showPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('dentro del popover');
            const popover = yield this.popoverController.create({
                component: src_app_components_new_referral_new_referral_component__WEBPACK_IMPORTED_MODULE_3__.NewReferralComponent,
                event: ev,
                mode: 'ios',
                backdropDismiss: true
            });
            yield popover.present();
        });
    }
};
ReferralsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController },
    { type: src_app_services_referrals_service__WEBPACK_IMPORTED_MODULE_2__.ReferralsService }
];
ReferralsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-referrals',
        template: _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_referrals_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_referrals_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReferralsPage);



/***/ }),

/***/ 1435:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/referrals/referrals.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header2 [title]=\"'Referidos'\" [go]=\"'home'\"></app-header2>\n\n<ion-content class=\"ion-padding container-shopping\">\n\n  <div style=\"text-align: right;\">\n    <ion-button class=\"button-total\" style=\"width: 30%; \" color=\"secondary\" (click)=\"showPopover($event)\">\n      <label class=\"text-button\">Nuevo Referido</label>\n    </ion-button>\n  </div>\n\n  <div style=\"display: flex; margin-top: 5%;\">\n    <div class=\"center-vh button-style\" style=\"width: 30%; font-size: 12px;height: 40px;\">\n      <label>Mostrar</label>\n    </div>\n    <div style=\"width: 20%; font-size: 12px;  height: 40px;margin-top: -2%;\">\n      <ion-item>\n        <ion-select style=\"width: 100%;\" [(ngModel)]=\"itemsPage\" placeholder=\"5\">\n          <ion-select-option value=\"5\" [selected]=\"5\">5</ion-select-option>\n          <ion-select-option value=\"10\">10</ion-select-option>\n          <ion-select-option value=\"15\">15</ion-select-option>\n          <ion-select-option value=\"20\">20</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class=\"center-vh button-style\" style=\"width: 50%; font-size: 12px; height: 40px;\">\n      <label>Registros por página</label>\n    </div>\n  </div>\n\n  <div style=\"width: 100%;margin-top: 10%;\">\n\n\n    <div class=\"table-responsive\" style=\"padding: 15% 2%;\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\" class=\"space-th-td\">Identificación</th>\n            <th scope=\"col\" class=\"space-th-td\">Referido</th>\n            <th scope=\"col\" class=\"space-th-td\">Teléfono</th>\n            <th scope=\"col\" class=\"space-th-td\">Usuario</th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container *ngIf=\"referrals.length!=0 && referrals.length!=undefined \">\n            <tr *ngFor=\"let referral of referrals | paginate: { itemsPerPage:itemsPage, currentPage:page } \">\n\n              <td class=\"space-th-td\"> {{referral.Identificacion}} </td>\n              <td class=\"space-th-td\"> {{referral.NombresyApellidos}} </td>\n              <td class=\"space-th-td\"> {{referral.Telefono}} </td>\n              <td class=\"space-th-td\"> {{referral.NickName}} </td>\n\n            </tr>\n            <ng-container *ngIf=\"referrals.length == 0\">\n              No ha realizado ninguna compra\n            </ng-container>\n          </ng-container>\n\n        </tbody>\n      </table>\n      <div style=\"text-align: center;margin-top: 10%;overflow-x: auto;\">\n        <pagination-controls (pageChange)=\"page = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\">\n        </pagination-controls>\n      </div>\n\n    </div>\n\n\n  </div>\n</ion-content>");

/***/ }),

/***/ 42622:
/*!*****************************************************!*\
  !*** ./src/app/pages/referrals/referrals.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".container-shopping {\n  background-color: white;\n}\n\n.title-shopping {\n  background-color: #CC9C61;\n  color: white;\n  font-weight: bold;\n  padding-top: 3%;\n  padding-bottom: 3%;\n  padding-left: 5%;\n  border-radius: 5px;\n}\n\n.text-button {\n  font-weight: bold;\n  color: white;\n  font-size: 12px;\n}\n\n@media (max-width: 380px) {\n  .button-search {\n    margin-top: 5%;\n    width: 30%;\n    height: 30px;\n    min-width: 60px !important;\n  }\n}\n\n.center-vh {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-style {\n  background-color: #CC9C61;\n  border-radius: 5px;\n  color: white;\n  font-weight: bold;\n}\n\n.tr-thead {\n  padding: 1%;\n  font-size: 12px;\n  color: #CC9C61;\n  font-weight: bold;\n}\n\n.button-total {\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVycmFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBSUE7RUFFSTtJQUNJLGNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0VBRk47QUFDRjs7QUFLQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksZ0JBQUE7QUFISiIsImZpbGUiOiJyZWZlcnJhbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1zaG9wcGluZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0bGUtc2hvcHBpbmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0M5QzYxOyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50ZXh0LWJ1dHRvbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gXHJcbiAgICAuYnV0dG9uLXNlYXJjaHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDYwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmNlbnRlci12aHtcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uLXN0eWxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQzlDNjE7IFxyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRyLXRoZWFke1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgY29sb3I6ICNDQzlDNjE7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5idXR0b24tdG90YWx7XHJcbiAgICBtaW4td2lkdGg6MTAwcHg7XHJcbiAgICBcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_referrals_referrals_module_ts.js.map