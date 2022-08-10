"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_comments_comments_module_ts"],{

/***/ 58551:
/*!***********************************************************!*\
  !*** ./src/app/pages/comments/comments-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsPageRoutingModule": () => (/* binding */ CommentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.page */ 62556);




const routes = [
    {
        path: '',
        component: _comments_page__WEBPACK_IMPORTED_MODULE_0__.CommentsPage
    }
];
let CommentsPageRoutingModule = class CommentsPageRoutingModule {
};
CommentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommentsPageRoutingModule);



/***/ }),

/***/ 29210:
/*!***************************************************!*\
  !*** ./src/app/pages/comments/comments.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsPageModule": () => (/* binding */ CommentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _comments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-routing.module */ 58551);
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.page */ 62556);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 2478);









let CommentsPageModule = class CommentsPageModule {
};
CommentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _comments_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommentsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule
        ],
        declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_1__.CommentsPage]
    })
], CommentsPageModule);



/***/ }),

/***/ 62556:
/*!*************************************************!*\
  !*** ./src/app/pages/comments/comments.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsPage": () => (/* binding */ CommentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comments_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./comments.page.html */ 79034);
/* harmony import */ var _comments_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.page.scss */ 19438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);





let CommentsPage = class CommentsPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(data => {
            this.recipeId = data.get('id_store');
            console.log('this.recipeId form comments page = ' + this.recipeId);
        });
    }
    ngOnDestroy() { }
};
CommentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
CommentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-comments',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comments_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_comments_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommentsPage);



/***/ }),

/***/ 79034:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/comments/comments.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<app-header2 [title]=\"detail.Establecimiento\" [go]=\"'/'\"></app-header2>-->\r\n\r\n<app-comments-videos [recipeId]=\"recipeId\"></app-comments-videos>");

/***/ }),

/***/ 19438:
/*!***************************************************!*\
  !*** ./src/app/pages/comments/comments.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50cy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_comments_comments_module_ts.js.map