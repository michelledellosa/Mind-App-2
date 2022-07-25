"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 16215:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 59004);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 82371:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 16215);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 59004);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 59004:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 57230);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 80863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 17897);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ 53755);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 99900);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);











let LoginPage = class LoginPage {
    constructor(http, loginService, storageService, storage, agmService, router, alertController) {
        this.http = http;
        this.loginService = loginService;
        this.storageService = storageService;
        this.storage = storage;
        this.agmService = agmService;
        this.router = router;
        this.alertController = alertController;
        this.usuario = {
            email: '',
            password: ''
        };
        this.userData = {
            email: '',
            fullName: '',
            token: '',
            id_store: 0,
            id_login: 0,
            name_store: ''
        };
    }
    ionViewWillEnter() {
    }
    ngOnInit() { }
    onSubmitData() {
        if (this.validarCampos()) {
            //   console.log(JSON.stringify(this.formulario))
            this.loginService.validateUser(this.usuario.email, this.usuario.password)
                .subscribe(data => {
                let temp1 = [];
                let array = [];
                temp1 = data;
                //console.log('temp1 = '+JSON.stringify(temp1))
                if (temp1.result == 1) {
                    this.userData.email = temp1.datos[0].Correo;
                    this.userData.token = 'Bearer ' + temp1.token;
                    this.userData.id_store = temp1.datos[0].Tienda;
                    this.userData.name_store = temp1.datos[0].Establecimiento;
                    this.userData.id_login = temp1.datos[0].Id_Persona_Login;
                    this.userData.fullName = temp1.datos[0].NombresyApellidos;
                    this.agmService.user.next(this.userData);
                    localStorage.setItem('userLogin', JSON.stringify(this.userData));
                    this.loginService.userData.next(this.userData);
                    this.presentAlert(this.userData.fullName);
                    this.router.navigate(['/home']);
                }
                if (temp1.result == 2) {
                    alert('Usuario no registrado');
                    //this.router.navigate(['/pages/login'])
                }
            });
            /*this.agmService.user.subscribe(userData=>{
               //console.log('userData = '+JSON.stringify(userData))
             })*/
        }
    }
    validarCampos() {
        let valido = false;
        if (this.usuario.email.length != 0) {
            if (this.usuario.password.length != 0) {
                valido = true;
            }
            else {
                alert('Error de Credenciales');
            }
        }
        else {
            alert('Error de Credenciales');
        }
        return valido;
    }
    presentAlert(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // subHeader: 'Acc',
                message: 'Bienvenido ' + email,
                buttons: [
                    {
                        text: 'ACEPTAR',
                        role: 'si',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_3__.AgmService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-login',
        template: _C_Users_user_Documents_Work_Ionic_Angular_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 99900:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 17897);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 77947);




let StorageService = class StorageService {
    constructor(storage, nativeStorage) {
        this.storage = storage;
        this.nativeStorage = nativeStorage;
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const storage = yield this.storage.create();
            this.storage = storage;
            this.getValue();
        });
    }
    setValue(usuario, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.set('credenciales', { usuario: usuario, password: password });
        });
    }
    getValue() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.get('credenciales').then((val) => {
                console.log('Credenciales= ' + JSON.stringify(val));
            });
        });
    }
    ValidarUsuario() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.storage.get("credenciales");
        });
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_0__.NativeStorage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 57230:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"centrado titleHeader\">Iniciar Sesión</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>-->\r\n\r\n<app-header2 [title]=\"'Iniciar Sesión'\" [go]=\"'home'\"></app-header2>\r\n<br>\r\n<ion-content>\r\n<ion-card-header  color=\"#f36b22\" text-rigth>\r\n  <ion-label color=\"medium\">  Si tienes una cuenta con nosotros, inicia sesión. </ion-label> \r\n \r\n</ion-card-header>\r\n\r\n<form #formulario=\"ngForm\"  (ngSubmit)=\"onSubmitData()\">\r\n\r\n  <ion-list no-Line>\r\n      <ion-item> \r\n          <ion-input  type=\"email\" \r\n                      name=\"email\" \r\n                      [(ngModel)]=\"usuario.email\"  \r\n                      placeholder=\"Usuario o Correo Electronico \" \r\n                      required>\r\n                  \r\n          </ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-input  type=\"password\"  \r\n                      name=\"password\" \r\n                      [(ngModel)]=\"usuario.password\"  \r\n                      placeholder=\"Contraseña\">\r\n              \r\n          </ion-input>\r\n      </ion-item>\r\n  </ion-list>\r\n  <br>\r\n  <br>\r\n  <ion-grid>\r\n      <ion-row>\r\n          <ion-button     expand=\"full\" \r\n                          class=\"boton_tamanio centrado\" \r\n                          round  style=\"--background:#CC9C61;\"\r\n\r\n                          routerLink=\"/home\"\r\n                          >\r\n      \r\n      REGRESAR\r\n  </ion-button>\r\n  <ion-button     expand=\"full\" \r\n                  type=\"submit\"\r\n                  \r\n                  [disabled]=\"formulario.invalid\"\r\n                  class=\"boton_tamanio centrado\" \r\n                  round style=\"--background:#CC9C61;\" \r\n                  \r\n                  >\r\n              \r\n                     \r\n      INICIAR SESIÓN\r\n  </ion-button>\r\n\r\n      </ion-row>\r\n  </ion-grid>\r\n      \r\n  \r\n\r\n</form>\r\n\r\n<br>\r\n<br>\r\n\r\n             \r\n  \r\n                \r\n  <!--<ion-button class=\"boton_tamanio margin-left: 100%\" ion-button round color=\"primary\" routerLink=\"/home\" >Regresar</ion-button>-->\r\n\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ 80863:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".desplazada {\n  position: relative;\n  top: 2em;\n}\n\n.botonera {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.ion-color-gris {\n  --ion-color-base: var(--ion-color-gris);\n  --ion-color-base-rgb: var(--ion-color-gris-rgb);\n  --ion-color-contrast: var(--ion-color-gris-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-gris-contrast-rgb);\n  --ion-color-shade: var(--ion-color-gris-shade);\n  --ion-color-tint: var(--ion-color-gris-tint);\n}\n\n.centrado {\n  display: block;\n  margin: auto;\n}\n\n.boton_tamanio {\n  font-size: 10px;\n  top: 0.2em;\n  width: 25%;\n  height: 30px;\n  margin-bottom: 5px;\n  background-color: \"tdc\";\n  border-radius: 50%;\n}\n\n.titleHeader {\n  color: #fff;\n}\n\n.posicion {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdFO0VBQ0UsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLG9EQUFBO0VBQ0EsNERBQUE7RUFDQSw4Q0FBQTtFQUNBLDRDQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUlFO0VBQ0UsV0FBQTtBQURKOztBQU1FO0VBQ0UscUJBQUE7QUFISiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzcGxhemFkYXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMmVtO1xyXG4gIH1cclxuICBcclxuICAuYm90b25lcmEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5pb24tY29sb3ItZ3JpcyB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZ3Jpcyk7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWdyaXMtcmdiKTtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZ3Jpcy1jb250cmFzdCk7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1ncmlzLWNvbnRyYXN0LXJnYik7XHJcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWdyaXMtc2hhZGUpO1xyXG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWdyaXMtdGludCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50cmFkb3tcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmJvdG9uX3RhbWFuaW97XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0b3A6IDAuMmVtO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICd0ZGMnO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZUhlYWRlcntcclxuICAgIGNvbG9yOiNmZmZcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLnBvc2ljaW9ue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map