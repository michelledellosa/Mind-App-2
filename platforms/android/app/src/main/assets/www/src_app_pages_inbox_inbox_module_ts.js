"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_inbox_inbox_module_ts"],{

/***/ 93805:
/*!*****************************************************!*\
  !*** ./src/app/pages/inbox/inbox-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxPageRoutingModule": () => (/* binding */ InboxPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.page */ 98715);




const routes = [
    {
        path: '',
        component: _inbox_page__WEBPACK_IMPORTED_MODULE_0__.InboxPage
    }
];
let InboxPageRoutingModule = class InboxPageRoutingModule {
};
InboxPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InboxPageRoutingModule);



/***/ }),

/***/ 23217:
/*!*********************************************!*\
  !*** ./src/app/pages/inbox/inbox.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxPageModule": () => (/* binding */ InboxPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-lazyload-image */ 2478);
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox-routing.module */ 93805);
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.page */ 98715);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);










let InboxPageModule = class InboxPageModule {
};
InboxPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__.InboxPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__.LazyLoadImageModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ],
        declarations: [_inbox_page__WEBPACK_IMPORTED_MODULE_1__.InboxPage]
    })
], InboxPageModule);



/***/ }),

/***/ 98715:
/*!*******************************************!*\
  !*** ./src/app/pages/inbox/inbox.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxPage": () => (/* binding */ InboxPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inbox_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./inbox.page.html */ 8200);
/* harmony import */ var _inbox_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.page.scss */ 883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notifications.service */ 8422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ 53755);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);








let InboxPage = class InboxPage {
    constructor(notiService, router, loginServices, agmService) {
        this.notiService = notiService;
        this.router = router;
        this.loginServices = loginServices;
        this.agmService = agmService;
        //este valor (id )debe ser cambiado, por un input que reciba el id_login del usuario
        this.id = 0;
        this.test = 0;
        this._loginServices = this.loginServices.isLogged();
    }
    ngOnInit() {
        let temp = []; //parametro temporal, para almacenar data del usuario
        if (this.loginServices.isLogged() == true) {
            this.loginServices.getUserStored();
            this.agmService.user.subscribe(res => {
                console.log('res de inbox = ' + JSON.stringify(res));
                temp = res;
                this.id = temp.id_login;
            });
            this.notiService.getNotifications()
                .subscribe(data => {
                this.allNotifications = data;
                this.userNotification = this.allNotifications.filter(res => {
                    return res.id_login === this.id;
                });
            });
        }
        else {
            return;
        }
    }
    goDetails(id) {
        console.log('id = ' + id);
        this.router.navigate(['/pages/inbox/inbox-details/' + id]);
    }
};
InboxPage.ctorParameters = () => [
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_4__.AgmService }
];
InboxPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-inbox',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inbox_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inbox_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InboxPage);



/***/ }),

/***/ 8200:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/inbox/inbox.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header2 [title]=\"'Inbox'\" [go]=\"'home'\"></app-header2>\r\n<ion-content>\r\n    <ion-list *ngFor=\"let notification of userNotification\">\r\n\r\n        <ion-item *ngIf=\"_loginServices==true && userNotification.length>0; else inboxExist\"\r\n            (click)=\"goDetails(notification.id)\">\r\n            <ion-label> {{notification.title}}</ion-label>\r\n        </ion-item>\r\n        <ng-template #inboxExist>\r\n            <div *ngIf=\"_loginServices==true && userNotification==undefined;\">\r\n                <ion-label> No tiene mensajes en su bandeja de entrada</ion-label>\r\n            </div>\r\n            <div *ngIf=\"_loginServices==false\">\r\n                <ion-label>Inicie sesión para acceder a sus mensajes disponibles </ion-label>\r\n            </div>\r\n        </ng-template>\r\n    </ion-list>\r\n</ion-content>");

/***/ }),

/***/ 883:
/*!*********************************************!*\
  !*** ./src/app/pages/inbox/inbox.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-list {\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluYm94LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJpbmJveC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inbox_inbox_module_ts.js.map