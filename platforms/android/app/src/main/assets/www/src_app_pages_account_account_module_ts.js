"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account_account_module_ts"],{

/***/ 22491:
/*!************************************************!*\
  !*** ./src/app/directive/directives.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _iframe_tracker_directive_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iframe-tracker-directive.directive */ 78046);




let DirectivesModule = class DirectivesModule {
};
DirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _iframe_tracker_directive_directive__WEBPACK_IMPORTED_MODULE_0__.IframeTrackerDirectiveDirective
        ],
        exports: [_iframe_tracker_directive_directive__WEBPACK_IMPORTED_MODULE_0__.IframeTrackerDirectiveDirective],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]
    })
], DirectivesModule);



/***/ }),

/***/ 78046:
/*!*****************************************************************!*\
  !*** ./src/app/directive/iframe-tracker-directive.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IframeTrackerDirectiveDirective": () => (/* binding */ IframeTrackerDirectiveDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


let IframeTrackerDirectiveDirective = class IframeTrackerDirectiveDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.iframeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.renderer.listen(window, 'blur', () => this.onWindowBlur());
    }
    onIframeMouseOver() {
        this.log('Iframe mouse over');
        this.iframeMouseOver = true;
        this.resetFocusOnWindow();
    }
    onIframeMouseOut() {
        this.log('Iframe mouse out');
        this.iframeMouseOver = false;
        this.resetFocusOnWindow();
    }
    onWindowBlur() {
        if (this.iframeMouseOver) {
            this.log('WOW! Iframe click!!!');
            this.resetFocusOnWindow();
            this.iframeClick.emit(this.el);
        }
    }
    resetFocusOnWindow() {
        setTimeout(() => {
            this.log('reset focus to window');
            window.focus();
        }, 100);
    }
    log(message) {
        if (this.debug) {
            console.log(message);
        }
    }
};
IframeTrackerDirectiveDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
IframeTrackerDirectiveDirective.propDecorators = {
    debug: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    iframeClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onIframeMouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseover',] }],
    onIframeMouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseout',] }]
};
IframeTrackerDirectiveDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appIframeTrackerDirective]'
    })
], IframeTrackerDirectiveDirective);



/***/ }),

/***/ 89452:
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 6624);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 8715:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 89452);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 6624);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 91173);
/* harmony import */ var src_app_directive_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/directive/directives.module */ 22491);











let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__.PipesModule,
            src_app_directive_directives_module__WEBPACK_IMPORTED_MODULE_5__.DirectivesModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage]
    })
], AccountPageModule);



/***/ }),

/***/ 6624:
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_account_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./account.page.html */ 56254);
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss */ 70330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 8735);
/* harmony import */ var src_app_services_common_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/loading.service */ 99439);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 18260);







let AccountPage = class AccountPage {
    constructor(commonService, loadingService) {
        this.commonService = commonService;
        this.loadingService = loadingService;
        this.showToolbar = false;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.account;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // await this.loadingService.presentLoading()
            }), 300);
        });
    }
    closeModal() {
        console.log("closeModal");
        this.commonService.goToRouter("/home");
    }
    dismissLoading() {
        //console.log("dismissLoading")
        // this.loadingService.dismissLoading()
    }
};
AccountPage.ctorParameters = () => [
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: src_app_services_common_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService }
];
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-account',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_account_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountPage);



/***/ }),

/***/ 56254:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/account.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n  <div class=\"container\">\r\n    <iframe allowfullscreen (load)=\"dismissLoading()\" style=\"width: 100%;\" height=\"100%\"\r\n      [src]=\"url | safeUrl:'resourceUrl'\" frameborder=\"0\"></iframe>\r\n    <!--<ion-button size=\"small\" (click)=\"closeModal()\"> Atras <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-button>-->\r\n     <app-spinner ></app-spinner>\r\n  </div>\r\n</ion-content>\r\n<app-webview-tab [param]=\"'home'\"></app-webview-tab>");

/***/ }),

/***/ 70330:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.container iframe {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.container ion-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\niframe {\n  display: block;\n  /* iframes are inline by default */\n  background: var(--ion-color-primary);\n  border: none;\n  /* Reset default border */\n  height: 100vh;\n  /* Viewport-relative units */\n  width: 100vw;\n}\n\nion-content {\n  --background: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQWdCLGtDQUFBO0VBQ2hCLG9DQUFBO0VBQ0EsWUFBQTtFQUFjLHlCQUFBO0VBQ2QsYUFBQTtFQUFlLDRCQUFBO0VBQ2YsWUFBQTtBQUlKOztBQURBO0VBQ0ksc0NBQUE7QUFJSiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgLyogaWZyYW1lcyBhcmUgaW5saW5lIGJ5IGRlZmF1bHQgKi9cclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlcjogbm9uZTsgLyogUmVzZXQgZGVmYXVsdCBib3JkZXIgKi9cclxuICAgIGhlaWdodDogMTAwdmg7IC8qIFZpZXdwb3J0LXJlbGF0aXZlIHVuaXRzICovXHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_account_module_ts.js.map