"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_inbox-detail_inbox-detail_module_ts"],{

/***/ 7914:
/*!*******************************************************************!*\
  !*** ./src/app/pages/inbox-detail/inbox-detail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxDetailPageRoutingModule": () => (/* binding */ InboxDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _inbox_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox-detail.page */ 38957);




const routes = [
    {
        path: '',
        component: _inbox_detail_page__WEBPACK_IMPORTED_MODULE_0__.InboxDetailPage
    }
];
let InboxDetailPageRoutingModule = class InboxDetailPageRoutingModule {
};
InboxDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InboxDetailPageRoutingModule);



/***/ }),

/***/ 14565:
/*!***********************************************************!*\
  !*** ./src/app/pages/inbox-detail/inbox-detail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxDetailPageModule": () => (/* binding */ InboxDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _inbox_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox-detail-routing.module */ 7914);
/* harmony import */ var _inbox_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox-detail.page */ 38957);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 2478);









let InboxDetailPageModule = class InboxDetailPageModule {
};
InboxDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _inbox_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.InboxDetailPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule
        ],
        declarations: [_inbox_detail_page__WEBPACK_IMPORTED_MODULE_1__.InboxDetailPage]
    })
], InboxDetailPageModule);



/***/ }),

/***/ 38957:
/*!*********************************************************!*\
  !*** ./src/app/pages/inbox-detail/inbox-detail.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxDetailPage": () => (/* binding */ InboxDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inbox_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./inbox-detail.page.html */ 7579);
/* harmony import */ var _inbox_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox-detail.page.scss */ 60313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notifications.service */ 8422);






let InboxDetailPage = class InboxDetailPage {
    constructor(activatedRoute, router, notiService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.notiService = notiService;
        this.inbox = [];
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(data => {
            let recipeId = data.get('id_inbox');
            let temp = [];
            this.notiService.getNotifications()
                .subscribe(res => {
                temp = res;
                this.inbox = temp.find(res => {
                    return res.id == recipeId;
                });
                console.log('this.inbox' + JSON.stringify(this.inbox));
                this.title = this.inbox.title;
            });
        });
    }
    deleteInbox(id) {
        if (confirm('¿Desea eliminar este mensaje?')) {
            this.notiService.deleteNotification(id);
            this.router.navigate(['pages/inbox']);
        }
    }
};
InboxDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService }
];
InboxDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-inbox-detail',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inbox_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inbox_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InboxDetailPage);



/***/ }),

/***/ 7579:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/inbox-detail/inbox-detail.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<app-header2 [title]='title' [go]=\"'pages/inbox'\"></app-header2>-->\r\n<ion-header>\r\n  <ion-toolbar [class.show-background]=\"showToolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"pages/inbox\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{inbox.title}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"deleteInbox(inbox.id)\">\r\n        <!--<ion-img class=\"logo-header\" src=\"assets/images/logo-puntosya.png\"></ion-img>-->\r\n        <ion-icon name=\"trash\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card style=\"height: 30%; margin-top: 5%;\">\r\n    <ion-card-content>\r\n      <div class=\"center\" style=\"margin-top: 5%;\">\r\n\r\n        <ion-label>{{inbox.title}}</ion-label>\r\n      </div>\r\n      <div style=\"margin-top:10%\" class=\"center\">\r\n        <ion-label>{{inbox.body}}</ion-label>\r\n      </div>\r\n    </ion-card-content>\r\n\r\n\r\n\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ 60313:
/*!***********************************************************!*\
  !*** ./src/app/pages/inbox-detail/inbox-detail.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".center {\n  text-align: center;\n}\n\n/* Transparent standard */\n\nion-toolbar {\n  --background: #662583;\n  --ion-color-base: transparent !important;\n}\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  background: #662583;\n}\n\n/* Remove bottom border on md */\n\n.header-md::after {\n  background-image: none;\n}\n\n/* Remove bottom border on ios */\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n\n.logo-header {\n  height: 150%;\n  width: 150%;\n  margin-left: 5%;\n}\n\nion-back-button {\n  color: white;\n}\n\nion-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluYm94LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBLHlCQUFBOztBQUNBO0VBQ0kscUJBQUE7RUFDQSx3Q0FBQTtBQUNKOztBQUdBLHVDQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBLCtCQUFBOztBQUNBO0VBQ0ksc0JBQUE7QUFBSjs7QUFHQSxnQ0FBQTs7QUFDQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSiIsImZpbGUiOiJpbmJveC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi8qIFRyYW5zcGFyZW50IHN0YW5kYXJkICovXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzY2MjU4MztcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLyogU2hvdyBiYWNrZ3JvdW5kIGlmIGNsYXNzIGlzIGFjdGl2ZSAqL1xyXG4uc2hvdy1iYWNrZ3JvdW5kIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICM2NjI1ODNcclxufVxyXG5cclxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gbWQgKi9cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gaW9zICovXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5sb2dvLWhlYWRlcntcclxuICAgIGhlaWdodDogMTUwJTtcclxuICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgY29sb3I6d2hpdGVcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuXHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inbox-detail_inbox-detail_module_ts.js.map