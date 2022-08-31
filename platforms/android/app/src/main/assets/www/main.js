(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 53965:
/*!*****************************************************************!*\
  !*** ./src/app/_alert/alert-confirm/alert-confirm.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertConfirmComponent": () => (/* binding */ AlertConfirmComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_alert_confirm_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./alert-confirm.component.html */ 50696);
/* harmony import */ var _alert_confirm_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-confirm.component.scss */ 14679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);





let AlertConfirmComponent = class AlertConfirmComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
        console.log("data", this.data);
    }
    dismiss(resp = false) {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({ resp });
    }
};
AlertConfirmComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
AlertConfirmComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
AlertConfirmComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alert-confirm',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_alert_confirm_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_alert_confirm_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlertConfirmComponent);



/***/ }),

/***/ 93511:
/*!*************************************************!*\
  !*** ./src/app/_alert/alert/alert.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_alert_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./alert.component.html */ 97527);
/* harmony import */ var _alert_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component.scss */ 7279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);





let AlertComponent = class AlertComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
        console.log("data", this.data);
    }
    dismiss(resp) {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'resp': resp,
        });
    }
};
AlertComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
AlertComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
AlertComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alert',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_alert_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_alert_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlertComponent);



/***/ }),

/***/ 92892:
/*!*************************************************!*\
  !*** ./src/app/_animations/custom.animation.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIonPageElement": () => (/* binding */ getIonPageElement),
/* harmony export */   "customAnimation": () => (/* binding */ customAnimation),
/* harmony export */   "modalEnterAnimation": () => (/* binding */ modalEnterAnimation),
/* harmony export */   "modalLeaveAnimation": () => (/* binding */ modalLeaveAnimation)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 78099);
// https://www.thinktecture.com/en/ionic/router-page-transition/
// https://github.com/mhartington/v5-animations
// https://ionicframework.com/docs/utilities/animations

const animationCtrl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.AnimationController();
// https://github.com/mhartington/v5-animations/blob/master/src/app/animations/index.ts
const getIonPageElement = (element) => {
    if (element.classList.contains("ion-page")) {
        return element;
    }
    const ionPage = element.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};
const customAnimation = (_, opts) => {
    // create root transition
    const rootTransition = animationCtrl
        .create()
        .duration(400)
        .easing("cubic-bezier(0.7,0,0.3,1)");
    const enterTransition = animationCtrl.create().addElement(opts.enteringEl);
    const exitTransition = animationCtrl.create().addElement(opts.leavingEl);
    enterTransition.fromTo("opacity", "0", "1");
    exitTransition.fromTo("opacity", "1", "0");
    // console.warn("opts", opts)
    // console.warn("enterTransition", enterTransition)
    // console.warn("opts.direction", exitTransition)
    // console.warn("enterTransition", enterTransition)
    if (opts.direction === "forward") {
        enterTransition.fromTo("transform", "translateX(-1.5%)", "translateX(0%)");
        exitTransition.fromTo("transform", "translateX(0%)", "translateX(1.5%)");
    }
    else {
        enterTransition.fromTo("transform", "translateX(1.5%)", "translateX(0%)");
        exitTransition.fromTo("transform", "translateX(0%)", "translateX(-1.5%)");
    }
    rootTransition.addAnimation([enterTransition, exitTransition]);
    return rootTransition;
};
const modalEnterAnimation = (baseEl) => {
    const backdropAnimation = animationCtrl
        .create()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', '0.01', '0.9')
        .duration(200);
    const wrapperAnimation = animationCtrl
        .create()
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .delay(200)
        .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' }
    ])
        .duration(250);
    return animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
const modalLeaveAnimation = (baseEl) => {
    return modalEnterAnimation(baseEl).direction('reverse');
};


/***/ }),

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 35129)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 35129)).then((m) => m.HomePageModule)
    },
    {
        path: 'pages',
        children: [
            {
                path: 'login',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 82371)).then(m => m.LoginPageModule)
            },
            {
                path: 'account',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 8715)).then(m => m.AccountPageModule)
            },
            {
                path: 'inbox',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_inbox_inbox_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/inbox/inbox.module */ 23217)).then(m => m.InboxPageModule)
            },
            {
                path: 'inbox/inbox-details/:id_inbox',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_inbox-detail_inbox-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/inbox-detail/inbox-detail.module */ 14565)).then(m => m.InboxDetailPageModule)
            },
            {
                path: 'store-detail/:id_store',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_store-detail_store-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/store-detail/store-detail.module */ 1764)).then(m => m.StoreDetailPageModule)
            },
            {
                path: 'products/:id_store',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_products_products_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/products/products.module */ 47827)).then(m => m.ProductsPageModule)
            },
            {
                path: 'products/product-details/:id_product',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product-details_product-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product-details/product-details.module */ 42813)).then(m => m.ProductDetailsPageModule)
            },
            {
                path: 'coupons',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_coupons_coupons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/coupons/coupons.module */ 72094)).then(m => m.CouponsPageModule)
            },
            {
                path: 'coupons/coupon-details/:id_coupon',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_coupon-details_coupon-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/coupon-details/coupon-details.module */ 63884)).then(m => m.CouponDetailsPageModule)
            },
            {
                path: 'rewards',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_rewards_rewards_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rewards/rewards.module */ 4737)).then(m => m.RewardsPageModule)
            },
            {
                path: 'rewards/reward-details/:id_reward',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_reward-details_reward-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reward-details/reward-details.module */ 66445)).then(m => m.RewardDetailsPageModule)
            },
            {
                path: 'gps-store/:id_store',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_gps-store_gps-store_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/gps-store/gps-store.module */ 8630)).then(m => m.GpsStorePageModule)
            },
            {
                path: 'comments/:id_store',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_comments_comments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/comments/comments.module */ 29210)).then(m => m.CommentsPageModule)
            },
            {
                path: 'shopping',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_shopping_shopping_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shopping/shopping.module */ 34324)).then(m => m.ShoppingPageModule)
            },
            {
                path: 'referrals',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_referrals_referrals_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/referrals/referrals.module */ 5312)).then(m => m.ReferralsPageModule)
            },
            {
                path: 'transfers',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_transfers_transfers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transfers/transfers.module */ 11520)).then(m => m.TransfersPageModule)
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 56204);
/* harmony import */ var _awesome_cordova_plugins_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/location-accuracy/ngx */ 17798);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 35732);
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ 90493);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 71614);
/* harmony import */ var _services_agm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/agm.service */ 93774);
/* harmony import */ var src_app_services_user_device_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user-device.service */ 59866);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/notifications.service */ 8422);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/login.service */ 53755);
/* harmony import */ var _services_plugin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/plugin.service */ 6762);

















let AppComponent = class AppComponent {
    constructor(fcm, platform, device, router, userDevice, notiService, alertController, loginService, agm, androidPermissions, geolocation, locationAccuracy, pluginService) {
        this.fcm = fcm;
        this.platform = platform;
        this.device = device;
        this.router = router;
        this.userDevice = userDevice;
        this.notiService = notiService;
        this.alertController = alertController;
        this.loginService = loginService;
        this.agm = agm;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.pluginService = pluginService;
        this.user = {
            // id:'',
            id_login: 7510,
            uuid: '',
            token: ''
        };
        //Coordenadas para mi ubicacion actual 
        this.myLocation = {
            position: {
                lat: 0,
                lng: 0,
            },
            title: 'Tu'
            /*lat: 8.35399066632706,
            lng: -62.68010258674622*/
        };
        this.checkLogin();
    }
    ngOnInit() {
    }
    checkLogin() {
        //al abrir la app lo primero que valida es si existe una sesion abierta
        //para llenar el behavior en loginService que muesta los datos de usuarios en el sidemenu
        if (this.loginService.isLogged() == true) {
            this.loginService.userData.next(JSON.parse(localStorage.getItem('userLogin')));
        }
        else {
            //console.log('sesion no iniciada')
        }
    }
    checkPlatform() {
        this.platform.ready().then(() => {
            if (this.platform.is("cordova")) {
                //uuid es un codigo identificador unico para cada tlf
                this.user.uuid = this.device.uuid;
                this.userDevice.getDevices().subscribe(data => {
                    this.devices = data;
                });
                this.firebaseNotifications();
            }
            else {
                alert('No es Cordova');
                return;
            }
        });
    }
    firebaseNotifications() {
        this.fcm.subscribeToTopic('puntosya');
        //obtener token de firebase para recibir notificaciones personalizadas
        this.fcm.getToken().then(token => {
            this.user.token = token;
            this.userDevice.deviceRegister(this.user);
            //se ejecuta cada vez que se abre la app, y detecta si se abrio desde una notificacion
            this.fcm.getInitialPushPayload().then(data => {
                if (data != null) {
                    this.presentAlert(JSON.stringify(data.title));
                    this.notiService.addNotification(data, this.user.id_login);
                }
            });
        }).catch(err => {
            // alert('error=' + err);
        });
        this.fcm.onNotification().subscribe(data => {
            if (data) {
                this.presentAlert(JSON.stringify(data.title));
                this.notiService.addNotification(data, this.user.id_login);
            }
        });
    }
    presentAlert(title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: title,
                buttons: [
                    {
                        text: 'ABRIR',
                        role: 'abrir',
                        cssClass: 'secondary',
                        handler: () => {
                            this.router.navigate(['pages/inbox']);
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancelar',
                        cssClass: 'secondary',
                        handler: () => {
                            return;
                        }
                    }
                ]
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_5__.FCM },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_6__.Device },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: src_app_services_user_device_service__WEBPACK_IMPORTED_MODULE_8__.UserDeviceService },
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_10__.LoginService },
    { type: _services_agm_service__WEBPACK_IMPORTED_MODULE_7__.AgmService },
    { type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation },
    { type: _awesome_cordova_plugins_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__.LocationAccuracy },
    { type: _services_plugin_service__WEBPACK_IMPORTED_MODULE_11__.PluginService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-root',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ionic-selectable */ 73143);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _awesome_cordova_plugins_clipboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/clipboard/ngx */ 71659);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var _animations_custom_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_animations/custom.animation */ 92892);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ion2-calendar */ 29260);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_translation_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/translation-service.service */ 4617);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 56204);
/* harmony import */ var _awesome_cordova_plugins_app_rate_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/app-rate/ngx */ 17337);
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/base64/ngx */ 37002);
/* harmony import */ var _awesome_cordova_plugins_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/background-geolocation/ngx */ 70189);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 53831);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 30692);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 71614);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 51020);
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ 90493);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 57154);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 35732);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80838);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ionic/storage-angular */ 2688);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng-lazyload-image */ 2478);
/* harmony import */ var _awesome_cordova_plugins_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @awesome-cordova-plugins/location-accuracy/ngx */ 17798);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 8418);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 77947);
/* harmony import */ var _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @awesome-cordova-plugins/media/ngx */ 26794);
/* harmony import */ var _awesome_cordova_plugins_media_capture_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @awesome-cordova-plugins/media-capture/ngx */ 57013);
/* harmony import */ var _awesome_cordova_plugins_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @awesome-cordova-plugins/photo-viewer/ngx */ 13596);
/* harmony import */ var _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @awesome-cordova-plugins/streaming-media/ngx */ 89196);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 28249);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 54815);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 73999);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 39241);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/fire/compat */ 20762);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire/compat/auth */ 29774);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/shared.module */ 51382);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 91173);












//import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';



























//  Google Maps

// Font Awesome




//Firestore







let AppModule = class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_28__.fas, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_29__.fab, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_30__.far);
    }
};
AppModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_31__.FaIconLibrary }
];
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_32__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_33__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_34__.AngularFireAuthModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_35__.AngularFirestoreModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_36__.AngularFireStorageModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__.BrowserModule,
            ion2_calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_38__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_39__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_40__.IonicModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_41__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_41__.ReactiveFormsModule,
            //MatIconModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_42__.NgxPaginationModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_27__.PipesModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_43__.IonicSelectableModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_44__.IonicStorageModule.forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__.SharedModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_40__.IonicModule.forRoot({ navAnimation: _animations_custom_animation__WEBPACK_IMPORTED_MODULE_3__.customAnimation }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__.TranslateLoader,
                    useClass: _services_translation_service_service__WEBPACK_IMPORTED_MODULE_5__.TranslationService,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_39__.HttpClient]
                }
            }),
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_46__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_25__.environment.firebaseConfig, 'Mind Club'),
            _agm_core__WEBPACK_IMPORTED_MODULE_47__.AgmCoreModule.forRoot({
                apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_25__.environment.API_KEY_GOOGLE_MAPS
            }),
        ],
        providers: [
            _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__.AndroidPermissions,
            _awesome_cordova_plugins_app_rate_ngx__WEBPACK_IMPORTED_MODULE_7__.AppRate,
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__.Base64,
            _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_11__.Camera,
            _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__.CallNumber,
            _awesome_cordova_plugins_clipboard_ngx__WEBPACK_IMPORTED_MODULE_2__.Clipboard,
            _angular_common__WEBPACK_IMPORTED_MODULE_38__.DatePipe,
            _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_12__.Device,
            _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__.Diagnostic,
            cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_14__.FCM,
            _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_15__.File,
            _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_16__.Geolocation,
            _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__.InAppBrowser,
            _awesome_cordova_plugins_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_18__.LocationAccuracy,
            _awesome_cordova_plugins_media_capture_ngx__WEBPACK_IMPORTED_MODULE_22__.MediaCapture,
            _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_21__.Media,
            _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_19__.NativeGeocoder,
            _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_20__.NativeStorage,
            _awesome_cordova_plugins_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_23__.PhotoViewer,
            _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_24__.StreamingMedia,
            _awesome_cordova_plugins_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__.BackgroundGeolocation,
            { provide: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_48__.LAZYLOAD_IMAGE_HOOKS, useClass: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_48__.ScrollHooks },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_49__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_40__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 33864:
/*!*************************************************************************!*\
  !*** ./src/app/components/comments-videos/comments-videos.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsVideosComponent": () => (/* binding */ CommentsVideosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comments_videos_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./comments-videos.component.html */ 58455);
/* harmony import */ var _comments_videos_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments-videos.component.scss */ 64568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ 36983);
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/comment.service */ 86448);
/* harmony import */ var src_app_components_modal_calificate_modal_calificate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/modal-calificate/modal-calificate.component */ 17491);











let CommentsVideosComponent = class CommentsVideosComponent {
    constructor(agmService, activatedRoute, router, categoriesServices, commentsService, navCtrl, alertCtrl, modalCtrl, plt) {
        this.agmService = agmService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.categoriesServices = categoriesServices;
        this.commentsService = commentsService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.plt = plt;
        this.store = [];
        this.detail = [];
        this.calification = 1;
        this.commentShow = 1;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('userLogin'));
        this.categoriesServices.getCategories()
            .subscribe(data => {
            this.store = data.result;
            this.detail = this.store.find(res => { return res.Id == this.recipeId; });
            this.commentsService.getComments().subscribe(res => {
                this.allComments = res;
                this.storeComments = this.allComments.filter(res => {
                    return res.id_store === Number(this.recipeId);
                });
            });
        });
        // });
    }
    ionViewWillEnter() {
        //console.log('this.newComment =' + this.newComment)
        if (this.newComment != undefined) {
            //location.reload()
            this.newComment = '';
        }
    }
    ngOnDestroy() {
        /*console.log('on');
        this.newComment;*/
    }
    onSubmitData(id) {
        let someDetails = {
            comment: this.newComment,
            id: id
        };
        //console.log('this new ommen = ' + this.newComment)
        //envio de comentario y id de la tienda a agm para obtener en el modal al modal
        this.agmService.modalCalification.next(someDetails);
        this.openModal();
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_modal_calificate_modal_calificate_component__WEBPACK_IMPORTED_MODULE_5__.ModalCalificateComponent,
                cssClass: 'my-custom-class'
            });
            return modal.present();
        });
    }
};
CommentsVideosComponent.ctorParameters = () => [
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__.AgmService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__.CategoriesService },
    { type: src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__.CommentsServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform }
];
CommentsVideosComponent.propDecorators = {
    recipeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
CommentsVideosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-comments-videos',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comments_videos_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_comments_videos_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommentsVideosComponent);



/***/ }),

/***/ 57693:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-lazyload-image */ 2478);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/map.component */ 93993);
/* harmony import */ var src_app_components_stores_stores_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/stores/stores.component */ 20505);
/* harmony import */ var src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/header/header.component */ 37899);
/* harmony import */ var src_app_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/not-found/not-found.component */ 78556);
/* harmony import */ var src_app_components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/searchbar/searchbar.component */ 44155);
/* harmony import */ var src_app_components_tab_products_tab_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/tab-products/tab-products.component */ 31209);
/* harmony import */ var src_app_components_store_videos_store_videos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/store-videos/store-videos.component */ 72185);
/* harmony import */ var src_app_components_modal_calificate_modal_calificate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/modal-calificate/modal-calificate.component */ 17491);
/* harmony import */ var src_app_components_gps_map_gps_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/gps-map/gps-map.component */ 30227);
/* harmony import */ var src_app_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/spinner/spinner.component */ 6645);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 91173);
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-info/user-info.component */ 43406);
/* harmony import */ var _webview_tab_webview_tab_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./webview-tab/webview-tab.component */ 86834);
/* harmony import */ var _comments_videos_comments_videos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comments-videos/comments-videos.component */ 33864);
/* harmony import */ var _popover_calendar_popover_calendar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./popover-calendar/popover-calendar.component */ 99395);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ion2-calendar */ 29260);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _new_referral_new_referral_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./new-referral/new-referral.component */ 94060);






//import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';


















//import { MatIconModule } from '@angular/material/icon';
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
        declarations: [
            _map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent,
            src_app_components_stores_stores_component__WEBPACK_IMPORTED_MODULE_1__.StoresComponent,
            src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
            src_app_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent,
            src_app_components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_4__.SearchbarComponent,
            src_app_components_tab_products_tab_products_component__WEBPACK_IMPORTED_MODULE_5__.TabProductsComponent,
            src_app_components_gps_map_gps_map_component__WEBPACK_IMPORTED_MODULE_8__.GpsMapComponent,
            src_app_components_store_videos_store_videos_component__WEBPACK_IMPORTED_MODULE_6__.StoreVideosComponent,
            src_app_components_modal_calificate_modal_calificate_component__WEBPACK_IMPORTED_MODULE_7__.ModalCalificateComponent,
            src_app_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__.SpinnerComponent,
            _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__.UserInfoComponent,
            _webview_tab_webview_tab_component__WEBPACK_IMPORTED_MODULE_12__.WebviewTabComponent,
            _comments_videos_comments_videos_component__WEBPACK_IMPORTED_MODULE_13__.CommentsVideosComponent,
            _popover_calendar_popover_calendar_component__WEBPACK_IMPORTED_MODULE_14__.PopoverCalendarComponent,
            _new_referral_new_referral_component__WEBPACK_IMPORTED_MODULE_16__.NewReferralComponent
        ],
        exports: [
            _map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent,
            src_app_components_stores_stores_component__WEBPACK_IMPORTED_MODULE_1__.StoresComponent,
            src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
            src_app_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent,
            src_app_components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_4__.SearchbarComponent,
            src_app_components_tab_products_tab_products_component__WEBPACK_IMPORTED_MODULE_5__.TabProductsComponent,
            src_app_components_gps_map_gps_map_component__WEBPACK_IMPORTED_MODULE_8__.GpsMapComponent,
            src_app_components_store_videos_store_videos_component__WEBPACK_IMPORTED_MODULE_6__.StoreVideosComponent,
            src_app_components_modal_calificate_modal_calificate_component__WEBPACK_IMPORTED_MODULE_7__.ModalCalificateComponent,
            src_app_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__.SpinnerComponent,
            _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__.UserInfoComponent,
            _webview_tab_webview_tab_component__WEBPACK_IMPORTED_MODULE_12__.WebviewTabComponent,
            _comments_videos_comments_videos_component__WEBPACK_IMPORTED_MODULE_13__.CommentsVideosComponent,
            _popover_calendar_popover_calendar_component__WEBPACK_IMPORTED_MODULE_14__.PopoverCalendarComponent,
            _new_referral_new_referral_component__WEBPACK_IMPORTED_MODULE_16__.NewReferralComponent
        ],
        entryComponents: [_map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_22__.AgmCoreModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__.PipesModule,
            ion2_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_23__.LazyLoadImageModule,
            /*MatIconModule,
            CallNumber*/
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 30227:
/*!*********************************************************!*\
  !*** ./src/app/components/gps-map/gps-map.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GpsMapComponent": () => (/* binding */ GpsMapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gps_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gps-map.component.html */ 46677);
/* harmony import */ var _gps_map_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gps-map.component.scss */ 52972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/location.service */ 9753);
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ 36983);







let GpsMapComponent = class GpsMapComponent {
    //renderMarkers;
    constructor(locationService, categoriesServices, activatedRoute, router) {
        this.locationService = locationService;
        this.categoriesServices = categoriesServices;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.map = null;
        this.store = [];
        this.detail = [];
        //retorno de la ruta optima
        this.directionsService = new google.maps.DirectionsService();
        //renderiza ruta en el mapa
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        //Coordenadas para mi ubicacion actual 
        this.origin = {
            position: {
                lat: 8.35399066632706,
                lng: -62.68010258674622,
            },
            title: 'origin'
            /*lat: 8.35399066632706,
            lng: -62.68010258674622*/
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            alert('gps component');
            yield this.locationService.chckAppGpsPermission();
            this.activatedRoute.paramMap.subscribe(data => {
                this.recipeId = data.get('id_store');
                alert('recipe id gps map component = ' + this.recipeId);
            });
            /*this.locationService._location.subscribe((res: any) => {
              if (!res) { alert ('ubicacion desactivada'); return }
              //alert('ubicacion')
                this.origin.position.lat = res.latitude
                this.origin.position.lng = res.longitude
            });*/
            this.loadMap();
        });
    }
    loadMap() {
        this.locationService.gpsActivated.subscribe((res) => {
            if (!res) {
                return;
            }
            this.origin.position.lat = res.locCords.latitude;
            this.origin.position.lng = res.locCords.latitude;
            alert('this.origin = ' + this.origin.position);
            // create a new map by passing HTMLElement - acceder al elemento con id map
            const mapEle = document.getElementById('map');
            //indicadores
            const indicatorsEle = document.getElementById('indicators');
            // create map
            this.map = new google.maps.Map(mapEle, {
                center: new google.maps.LatLng(this.origin.position.lat, this.origin.position.lng),
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
        alert('this.origin.position.lng = ' + this.origin.position.lng);
        this.activatedRoute.paramMap.subscribe(data => {
            let recipeId = data.get('id_store');
            this.categoriesServices.getCategories()
                .subscribe(data => {
                this.store = data.result;
                this.detail = this.store.find(res => { return res.Id == recipeId; });
                alert('this.detail = ' + JSON.stringify(this.detail));
                this.directionsService.route({
                    origin: new google.maps.LatLng(this.origin.position.lat, this.origin.position.lng),
                    destination: new google.maps.LatLng(8.34467058872437, 62.69622802734376),
                    //tipo de viaje
                    travelMode: google.maps.TravelMode.DRIVING,
                }, (response, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        this.directionsDisplay.setDirections(response);
                    }
                    else {
                        //alert('Could not display directions due to: ' + status);
                    }
                });
            });
        });
    }
};
GpsMapComponent.ctorParameters = () => [
    { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService },
    { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__.CategoriesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
GpsMapComponent.propDecorators = {
    latOrigin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    lngOrigin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
GpsMapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-gps-map',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gps_map_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gps_map_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GpsMapComponent);



/***/ }),

/***/ 37899:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 20669);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 70228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    go: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-header2',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 93993:
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./map.component.html */ 58531);
/* harmony import */ var _map_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component.scss */ 80670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ 36983);







let MapComponent = class MapComponent {
    constructor(router, agmService, categoriesService) {
        this.router = router;
        this.agmService = agmService;
        this.categoriesService = categoriesService;
        // google maps zoom level
        this.zoom = 16;
        this.icon_map = '/assets/images/marker-puntosya.png';
        // initial center position for the map
        this.lat = 0;
        this.lng = 0;
        //Coordenadas para mi ubicacion actual
        this.mylat = 0;
        this.mylng = 0;
        this.located = false;
        this.markers = [];
        this.markers_nearme = [];
        this.marker_image_base = '/assets/markers-v3/';
        this.marker_image = '';
        this.marker_nearme_image = '';
        this.mapStyles = [
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ];
    }
    ngOnInit() {
        this.checkNearme();
    }
    //check opcion cerca de mi
    checkNearme() {
        this.agmService.agmMarket.subscribe(data => {
            if (data == 1) {
                this.nearme = 1;
                this.categoriesService.getNearToMe().subscribe(stores => {
                    //console.log('stores result =',JSON.stringify(stores.result));
                    if (stores) {
                        if (stores.result[0].Mensaje) {
                            this.markers_nearme = [];
                        }
                        else {
                            this.markers_nearme = stores.result;
                            this.listMarkers(true);
                        }
                    }
                });
            }
            else {
                this.nearme = 0;
                this.listMarkers(false);
            }
        });
    }
    listMarkers(param) {
        console.log('hola33');
        this.agmService.agmMarket.subscribe(listMarkers => {
            if (!listMarkers) {
                return;
            }
            ;
            //console.log('this.markers_nearme=',this.markers_nearme[0])
            if (param == false) {
                this.lat = listMarkers[0].lat;
                this.lng = listMarkers[0].lng;
                this.markers = listMarkers;
                switch (this.markers[0].category) {
                    case 'Oro':
                        this.marker_image = this.marker_image_base + 'Pin-Oro-1.png';
                        break;
                    case 'Plata':
                        this.marker_image = this.marker_image_base + 'Pin-Plata-1.png';
                        break;
                    case 'Bronce':
                        this.marker_image = this.marker_image_base + 'Pin-Bronce-1.png';
                        break;
                    case undefined:
                        console.log('la categorias e sundefined');
                        this.marker_image = this.marker_image_base + 'Pin-Bronce-1.png';
                        break;
                    default:
                        this.marker_image = this.marker_image_base + 'Pin-Plata-1.png';
                        break;
                }
                this.iconMarker = {
                    url: this.marker_image,
                    scaledSize: {
                        height: 40,
                        width: 35
                    }
                };
            }
            else {
                this.lat = Number(this.markers_nearme[0].Latitud_A);
                this.lng = Number(this.markers_nearme[0].Longitud_A);
                this.marker_nearme_image = this.marker_image_base + 'Pin-Plata-1.png';
                this.iconMarker = {
                    url: this.marker_nearme_image,
                    scaledSize: {
                        height: 40,
                        width: 35
                    }
                };
            }
        });
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
    goToStore(m) {
        if (m.id) {
            this.router.navigate(['/pages/store-detail/' + m.id]);
        }
        if (m.Id) {
            this.router.navigate(['/pages/store-detail/' + m.Id]);
        }
        if (m.Tienda) {
            this.router.navigate(['/pages/store-detail/' + m.Tienda]);
        }
    }
    mapClicked($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true,
            address: ""
        });
    }
    markerDragEnd(m, $event) {
    }
};
MapComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__.AgmService },
    { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__.CategoriesService }
];
MapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-map',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_map_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_map_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapComponent);



/***/ }),

/***/ 17491:
/*!***************************************************************************!*\
  !*** ./src/app/components/modal-calificate/modal-calificate.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCalificateComponent": () => (/* binding */ ModalCalificateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_calificate_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./modal-calificate.component.html */ 31319);
/* harmony import */ var _modal_calificate_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-calificate.component.scss */ 34945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/comment.service */ 86448);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);








let ModalCalificateComponent = class ModalCalificateComponent {
    constructor(modalCtrl, agmService, commentsService, activatedRoute, router, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.agmService = agmService;
        this.commentsService = commentsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    calificated() {
        console.log('Dentro de calificated');
        this.agmService.modalCalification.subscribe(res => {
            console.log('res dentro de modal = ' + JSON.stringify(res));
            this.commentsService.addComment(res.comment, res.id, this.calification + 1);
            this.closeModal();
            setTimeout(() => {
                this.router.navigate(['/pages/store-detail/' + res.id]);
            }, 1000);
            //this.router.navigate(['/pages/store-detail/' + res.id]);
        });
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
};
ModalCalificateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__.AgmService },
    { type: src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_3__.CommentsServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
ModalCalificateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-modal-calificate',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_calificate_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_modal_calificate_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalCalificateComponent);



/***/ }),

/***/ 94060:
/*!*******************************************************************!*\
  !*** ./src/app/components/new-referral/new-referral.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewReferralComponent": () => (/* binding */ NewReferralComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_referral_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./new-referral.component.html */ 51756);
/* harmony import */ var _new_referral_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-referral.component.scss */ 76604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _awesome_cordova_plugins_clipboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/clipboard/ngx */ 71659);






let NewReferralComponent = class NewReferralComponent {
    constructor(popoverCtrl, clipboard) {
        this.popoverCtrl = popoverCtrl;
        this.clipboard = clipboard;
        this.urlReferral = '';
    }
    ngOnInit() {
        this.referralLink();
    }
    referralLink() {
        if (localStorage.getItem('userLogin') != null) {
            this.user = JSON.parse(localStorage.getItem('userLogin'));
            this.urlReferral = 'https://neuron-red-post-api.azurewebsites.net/#/nuevoReferido/' + this.user.id_login + '/' + this.user.fullName;
        }
        else {
            this.urlReferral = 'Error al crear url de referido';
        }
    }
    getDates() {
        this.copyString();
        this.popoverCtrl.dismiss();
    }
    // Copy
    copyString() {
        this.clipboard.copy(this.urlReferral);
    }
};
NewReferralComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController },
    { type: _awesome_cordova_plugins_clipboard_ngx__WEBPACK_IMPORTED_MODULE_2__.Clipboard }
];
NewReferralComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-new-referral',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_referral_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_new_referral_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewReferralComponent);



/***/ }),

/***/ 78556:
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./not-found.component.html */ 58317);
/* harmony import */ var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component.scss */ 95095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() { }
};
NotFoundComponent.ctorParameters = () => [];
NotFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-not-found',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotFoundComponent);



/***/ }),

/***/ 99395:
/*!***************************************************************************!*\
  !*** ./src/app/components/popover-calendar/popover-calendar.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverCalendarComponent": () => (/* binding */ PopoverCalendarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_popover_calendar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./popover-calendar.component.html */ 3782);
/* harmony import */ var _popover_calendar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-calendar.component.scss */ 34459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var src_app_services_calendar_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/calendar-popup.service */ 44093);







let PopoverCalendarComponent = class PopoverCalendarComponent {
    constructor(popoverCtrl, datePipe, calendarServices) {
        this.popoverCtrl = popoverCtrl;
        this.datePipe = datePipe;
        this.calendarServices = calendarServices;
        this.items = Array(40);
        this.optionsMulti = {
            pickMode: 'multi',
        };
    }
    ngOnInit() {
    }
    getDates() {
        this.calendarServices.dateNunmber.subscribe(data => {
            if (data == 1) {
                this.calendarServices.dateInit.next(this.datePipe.transform(this.dateMulti, "dd-MM-yyy").split('T')[0]);
            }
            if (data == 2) {
                //console.log('dateMulti = '+this.dateMulti);
                this.calendarServices.dateFinish.next(this.datePipe.transform(this.dateMulti, "dd-MM-yyy").split('T')[0]);
            }
        });
        this.popoverCtrl.dismiss();
    }
};
PopoverCalendarComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe },
    { type: src_app_services_calendar_popup_service__WEBPACK_IMPORTED_MODULE_2__.CalendarPopupService }
];
PopoverCalendarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-popover-calendar',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_popover_calendar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_popover_calendar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PopoverCalendarComponent);



/***/ }),

/***/ 44155:
/*!*************************************************************!*\
  !*** ./src/app/components/searchbar/searchbar.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchbarComponent": () => (/* binding */ SearchbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_searchbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./searchbar.component.html */ 94811);
/* harmony import */ var _searchbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchbar.component.scss */ 87399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ 36983);





let SearchbarComponent = class SearchbarComponent {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
        this.text = '';
        this.categories = [];
        this.temp = [];
        this.stores = [];
        //searchButton:number;
        this.searchbarText = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.searchToolbar = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.categoriesService.getCategories()
            .subscribe(res => {
            this.stores = res.result;
            //console.log('this.array1 = '+JSON.stringify(this.array));
            for (var i = 0; i <= this.stores.length - 1; i++) {
                this.temp[i] = this.stores[i].Tipo;
            }
            ;
            this.categories = this.temp.reduce((a, e) => {
                if (!a.find(d => d == e)) {
                    a.push(e);
                }
                return a;
            }, []);
        });
    }
    getSearchCode() {
        //console.log('Michelle Dellosa = '+e)
        this.searchToolbar.emit(0);
    }
    search(event) {
        this.text = event.detail.value;
        this.searchbarText.emit(this.text);
    }
};
SearchbarComponent.ctorParameters = () => [
    { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__.CategoriesService }
];
SearchbarComponent.propDecorators = {
    searchbarText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    searchToolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
SearchbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-searchbar',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_searchbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_searchbar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchbarComponent);



/***/ }),

/***/ 6645:
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./spinner.component.html */ 84972);
/* harmony import */ var _spinner_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.component.scss */ 51230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let SpinnerComponent = class SpinnerComponent {
    constructor() {
        this.show = true;
        setTimeout(() => {
            this.show = false;
        }, 5000);
    }
    ngOnInit() { }
};
SpinnerComponent.ctorParameters = () => [];
SpinnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-spinner',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_spinner_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpinnerComponent);



/***/ }),

/***/ 72185:
/*!*******************************************************************!*\
  !*** ./src/app/components/store-videos/store-videos.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreVideosComponent": () => (/* binding */ StoreVideosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_store_videos_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./store-videos.component.html */ 8996);
/* harmony import */ var _store_videos_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-videos.component.scss */ 89120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var _awesome_cordova_plugins_media_capture_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/media-capture/ngx */ 57013);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 57154);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 98904);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var src_app_services_common_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common/alert.service */ 67732);
/* harmony import */ var src_app_services_common_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common/loading.service */ 99439);
/* harmony import */ var _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/streaming-media/ngx */ 89196);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 56204);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/login.service */ 53755);
















let StoreVideosComponent = class StoreVideosComponent {
    constructor(modalController, androidPermissions, streamingMedia, loadingService, alertService, afs, _storage, agmService, mediaCapture, actionSheetController, loginService, plt, file) {
        this.modalController = modalController;
        this.androidPermissions = androidPermissions;
        this.streamingMedia = streamingMedia;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.afs = afs;
        this._storage = _storage;
        this.agmService = agmService;
        this.mediaCapture = mediaCapture;
        this.actionSheetController = actionSheetController;
        this.loginService = loginService;
        this.plt = plt;
        this.file = file;
        /**
         * subimos el video a firebase storage
         */
        this.uploadProgress = 0;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            //console.log("recipeId", this.recipeId)
            this.itemsCollection = this.afs
                .collection('comments-videos', ref => ref
                .where('id_store', '==', this.recipeId)
                .orderBy('created_at', 'desc'));
            this.items = this.itemsCollection.valueChanges({ idField: '_id' });
        });
    }
    recordWithCamare() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loginService.isLogged() == true) {
                // solicitar permisos de camara
                yield this.getDownloadPath();
                yield this.loadingService.presentLoading();
                this.mediaCapture
                    .captureVideo({
                    limit: 1,
                    duration: 10,
                    quality: 0,
                }).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                    console.log("captureVideo", res);
                    var filePath = res[0].fullPath;
                    var name = res[0].name;
                    // convert video to base64
                    let base64 = yield this.convertVideoToBase64(filePath);
                    //  upload to firebase
                    let videoUrl = yield this.uploadVideo(base64, '"video/mp4"', name);
                    console.log("videoUrl", videoUrl);
                    // save to firebase
                    yield this.addVideo(name, videoUrl);
                    this.loadingService.dismissLoading();
                    this.alertService.presentAlert('Video added successfully');
                })).catch(err => {
                    this.alertService.presentAlert('Error al subir video');
                    this.loadingService.dismissLoading();
                });
            }
            else {
                alert('Po favor inicie sesion primero.');
            }
        });
    }
    /*
   * Reads the fileURI, uses FileReader() to encode it to base64, and then we have to fix it.
   */
    convertVideoToBase64(fullPath) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log('insided convertVideoToBase64');
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                let myPath = fullPath;
                // Make sure we copy from the right location
                if (fullPath.indexOf("file://") < 0) {
                    myPath = "file://" + fullPath;
                }
                const name = myPath.substr(myPath.lastIndexOf("/") + 1);
                const copyFrom = myPath.substr(0, myPath.lastIndexOf("/") + 1);
                // Si hay problemas con el resultado (readAsDataURL) 
                // verificar los permisos de la aplicación y agregar esta linea en en manifest.xml android
                // https://github.com/apache/cordova-plugin-file/issues/348#issuecomment-737774972
                yield this.file
                    .readAsDataURL(copyFrom, name)
                    .then((dataText) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Dentro del then');
                    resolve(dataText);
                }))
                    .catch((err) => {
                    console.log("readAsDataURL", err);
                    reject(err);
                });
            }));
        });
    }
    getDownloadPath() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.plt.is('ios')) {
                return this.file.cacheDirectory;
            }
            yield this.androidPermissions
                .checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
                .then(result => {
                console.log("READ_EXTERNAL_STORAGE", result.hasPermission);
                if (!result.hasPermission) {
                    return this.androidPermissions
                        .requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE);
                }
            });
            // To be able to save files on Android, we first need to ask the user for permission. 
            // We do not let the download proceed until they grant access
            yield this.androidPermissions
                .checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
                .then(result => {
                console.log("WRITE_EXTERNAL_STORAGE", result.hasPermission);
                if (!result.hasPermission) {
                    return this.androidPermissions
                        .requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
                }
            });
            return this.file.documentsDirectory;
        });
    }
    /**
     *  add video to firebase
     * @param name
     * @param url
     */
    addVideo(name, videoUrl) {
        console.log('insided add video');
        console.log('this.id_user = ', this.id_user);
        console.log('this.email_user= ', this.email_user);
        console.log('this.recipeId= ', this.recipeId);
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // Persist a document id
            const id = this.afs.createId();
            this.itemsCollection.doc(id)
                .set({
                id,
                platform: this.plt.is('ios') ? 'ios' : 'android',
                like: 0,
                id_user: this.id_user,
                username: this.email_user,
                id_store: this.recipeId,
                name,
                type: "video",
                videoUrl,
                created_at: Date.now(),
            })
                .catch(err => reject(err));
            resolve('ok');
        }));
    }
    watchVideo(item) {
        let { videoUrl } = item;
        if (!videoUrl) {
            return;
        }
        console.log("item", videoUrl);
        this.streamingMedia.playVideo(videoUrl);
    }
    uploadVideo(captureVideoUrl, contentType, newName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log('inside uploadVideo');
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const filePath = `multimedia/${this.recipeId}/${Date.now()}-${newName}`;
                    console.log("filePath", filePath);
                    const fileRef = this._storage.ref(filePath);
                    const task = fileRef.putString(captureVideoUrl, "data_url", {
                        contentType,
                    });
                    task.percentageChanges().subscribe((res) => {
                        this.uploadProgress = this.setPercentBar(res);
                    });
                    task
                        .snapshotChanges()
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)(() => {
                        fileRef.getDownloadURL().subscribe((url) => {
                            this.uploadProgress = 0;
                            resolve(url);
                        });
                    }))
                        .subscribe();
                }
                catch (err) {
                    console.log("uploadVideo err =", err);
                    reject(err);
                }
            }));
        });
    }
    /**
     * porcentaje de la barra de progreso
     */
    setPercentBar(i) {
        let apc = i / 100;
        console.warn("setPercentBar", apc);
        return apc;
    }
};
StoreVideosComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__.AndroidPermissions },
    { type: _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__.StreamingMedia },
    { type: src_app_services_common_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService },
    { type: src_app_services_common_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestore },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_14__.AngularFireStorage },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_2__.AgmService },
    { type: _awesome_cordova_plugins_media_capture_ngx__WEBPACK_IMPORTED_MODULE_3__.MediaCapture },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File }
];
StoreVideosComponent.propDecorators = {
    recipeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    id_user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    email_user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }]
};
StoreVideosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-store-videos',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_store_videos_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_store_videos_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StoreVideosComponent);



/***/ }),

/***/ 20505:
/*!*******************************************************!*\
  !*** ./src/app/components/stores/stores.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoresComponent": () => (/* binding */ StoresComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_stores_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./stores.component.html */ 60950);
/* harmony import */ var _stores_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores.component.scss */ 69153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ 36983);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 8735);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ 53755);









let StoresComponent = class StoresComponent {
    constructor(commonService, agmService, activatedRoute, router, categoriesService, loginService) {
        this.commonService = commonService;
        this.agmService = agmService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.categoriesService = categoriesService;
        this.loginService = loginService;
        this.searchBarText = '';
        this.storeDetail = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.stores = [];
        this.temp = [];
        this.categories = [];
        this.storesCategories = [];
        this.nearToMe = [];
    }
    ngOnInit() {
        this.storeList();
        this.storesNearToMe();
    }
    storeList() {
        this.agmService.storesList.subscribe(res => {
            if (!res) {
                return;
            }
            this.stores = res;
        });
    }
    storesNearToMe() {
        this.categoriesService.getNearToMe().subscribe(storesNear => {
            //console.log('stores result =',JSON.stringify(stores.result));
            if (storesNear) {
                if (storesNear.result[0].Mensaje) {
                    this.nearToMe = [];
                }
                else {
                    this.nearToMe = storesNear.result;
                    //this.listMarkers(true);
                }
            }
        });
    }
    goMap(store, param) {
        //si param es igual a 1, vienen establecimientos cercanos..
        //si param es igual a 0 vienen las demas categorias
        console.log('store = ' + JSON.stringify(store));
        if (param == 1) {
            this.agmService.agmMarket.next([{
                    lat: Number(store.Latitud_A),
                    lng: Number(store.Longitud_A),
                    label: store.Establecimiento,
                    draggable: false,
                    id: store.Tienda,
                    type: 'CERCA DE MI',
                }]);
        }
        else {
            if (param == 0) {
                this.agmService.agmMarket.next([{
                        lat: Number(store.lat),
                        lng: Number(store.lng),
                        label: store.label,
                        draggable: false,
                        id: store.id,
                        type: store.type,
                    }]);
            }
        }
    }
    //funtion store Details
    goDetails(id) {
        this.router.navigate(['/pages/store-detail/' + id]);
    }
    filterStores(category) {
        console.log('Dentro de filter stores');
        if (category == 'CERCA DE MI') {
            console.log('filterstores = ', this.stores);
            this.storesCategories = this.stores;
            /******************************************************* */
            /*
            this.categoriesService.getNearToMe().subscribe(storesNearToMe => {
              console.log('stores result =',JSON.stringify(storesNearToMe.result));
              if(storesNearToMe){
                if(storesNearToMe.result[0].Mensaje){
                  this.storesCategories = [];
                }else{
                  this.storesCategories = storesNearToMe.result;
            
                }
              }
            });*/
            /*************************************************** */
        }
        else {
            console.log('hola samsung');
            this.storesCategories = this.stores.filter(data => { return data.Tipo == category; });
        }
    }
    goToStore(m) {
        //this.router.navigate(['/pages/store-detail/' + m.id])
        this.router.navigate(['/pages/store-detail/' + m.id]);
    }
};
StoresComponent.ctorParameters = () => [
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_3__.AgmService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__.CategoriesService },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService }
];
StoresComponent.propDecorators = {
    category: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    arrayCategories: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    searchBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    searchbarText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    logged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    storeDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }]
};
StoresComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-stores',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_stores_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_stores_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StoresComponent);



/***/ }),

/***/ 31209:
/*!*******************************************************************!*\
  !*** ./src/app/components/tab-products/tab-products.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabProductsComponent": () => (/* binding */ TabProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab_products_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab-products.component.html */ 84943);
/* harmony import */ var _tab_products_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-products.component.scss */ 286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 53831);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories.service */ 36983);
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/location.service */ 9753);










let TabProductsComponent = class TabProductsComponent {
    constructor(locationService, categoriesServices, callNumber, activatedRoute, router, agmService, iab) {
        this.locationService = locationService;
        this.categoriesServices = categoriesServices;
        this.callNumber = callNumber;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.agmService = agmService;
        this.iab = iab;
        this.store = [];
        this.detail = [];
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(data => {
            let recipeId = data.get('id_store');
            //alert('recipeId = '+recipeId)
            this.categoriesServices.getCategories()
                .subscribe(data => {
                this.store = data.result;
                this.detail = this.store.find(res => { return res.Id == recipeId; });
            });
        });
    }
    whatsapp(phone) {
        //alert('phone = '+phone);
        let url = 'https://api.whatsapp.com/send?phone=' + phone;
        window.open(url, '_system');
    }
    call(phone) {
        /* window.open( `tel:12345` , '_system');
         this.iab.create(`tel:12345`,'_system');*/
        let phone_number;
        if (phone == undefined) {
            alert('Por favor, espere a que se cargue la informacion del establecimiento');
        }
        else {
            if (phone == '') {
                alert('Numero de Telefono no Disponible');
            }
            else {
                //alert('dentro del ultimo else');
                phone_number = phone;
                this.callNumber.callNumber(phone_number, true)
                    .then(res => { })
                    .catch(err => { alert('No podemos realizar la llamada en este momento'); });
            }
        }
    }
    goToProducts(id) {
        this.router.navigate(['/pages/products/' + id]);
    }
    goToGPS(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.locationService.chckAppGpsPermission();
            this.router.navigate(['pages/gps-store/' + id]);
        });
    }
};
TabProductsComponent.ctorParameters = () => [
    { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_6__.LocationService },
    { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__.CategoriesService },
    { type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__.CallNumber },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_4__.AgmService },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser }
];
TabProductsComponent.propDecorators = {
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
TabProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tab-products',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab_products_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab_products_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabProductsComponent);



/***/ }),

/***/ 43406:
/*!*************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfoComponent": () => (/* binding */ UserInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_info_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-info.component.html */ 39509);
/* harmony import */ var _user_info_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-info.component.scss */ 57076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ 53755);
/* harmony import */ var src_app_services_points_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/points-control.service */ 70315);






let UserInfoComponent = class UserInfoComponent {
    constructor(loginService, pointsService) {
        this.loginService = loginService;
        this.pointsService = pointsService;
        this.referralsQtty = 0;
    }
    ngOnInit() {
        this.loginService.userData.subscribe(data => {
            //console.log('data = '+JSON.stringify(data));
            if (data) {
                this.user = data.fullName;
                this.userData = 1;
            }
            else {
                this.user = '';
                this.userData = 0;
            }
            ;
        });
    }
};
UserInfoComponent.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: src_app_services_points_control_service__WEBPACK_IMPORTED_MODULE_3__.PointsControlService }
];
UserInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-info',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_info_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_info_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserInfoComponent);



/***/ }),

/***/ 86834:
/*!*****************************************************************!*\
  !*** ./src/app/components/webview-tab/webview-tab.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebviewTabComponent": () => (/* binding */ WebviewTabComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_webview_tab_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./webview-tab.component.html */ 95675);
/* harmony import */ var _webview_tab_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webview-tab.component.scss */ 69405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);





let WebviewTabComponent = class WebviewTabComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        //console.log('item = '+this.param)
    }
    getBack() {
        console.log('this.param = ', this.param);
        if (this.param == 'home') {
            this.router.navigate(['/home']);
        }
        else {
            this.router.navigate(['/pages/store-detail/' + this.param]);
        }
    }
};
WebviewTabComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
WebviewTabComponent.propDecorators = {
    param: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
WebviewTabComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-webview-tab',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_webview_tab_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_webview_tab_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WebviewTabComponent);



/***/ }),

/***/ 1243:
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let FilterPipe = class FilterPipe {
    transform(array, textSearch, column) {
        if (textSearch === '' || textSearch == undefined) {
            return array;
        }
        textSearch = textSearch.toLowerCase();
        return array.filter(item => {
            console.log('item=' + JSON.stringify(item));
            return item[column].toLowerCase().includes(textSearch);
        });
    }
};
FilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ 91173:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.pipe */ 1243);
/* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safe-url.pipe */ 13821);
/* harmony import */ var _slugify_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slugify.pipe */ 85036);
/* harmony import */ var _strip_html_tags_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strip-html-tags.pipe */ 58407);







let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _safe_url_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeUrlPipe,
            _slugify_pipe__WEBPACK_IMPORTED_MODULE_2__.SlugifyPipe,
            _strip_html_tags_pipe__WEBPACK_IMPORTED_MODULE_3__.StripHtmlTagsPipe,
            _filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe
        ],
        exports: [
            _safe_url_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeUrlPipe,
            _slugify_pipe__WEBPACK_IMPORTED_MODULE_2__.SlugifyPipe,
            _strip_html_tags_pipe__WEBPACK_IMPORTED_MODULE_3__.StripHtmlTagsPipe,
            _filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule
        ]
    })
], PipesModule);



/***/ }),

/***/ 13821:
/*!****************************************!*\
  !*** ./src/app/pipes/safe-url.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeUrlPipe": () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 86219);



let SafeUrlPipe = class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
};
SafeUrlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer }
];
SafeUrlPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'safeUrl'
    })
], SafeUrlPipe);



/***/ }),

/***/ 85036:
/*!***************************************!*\
  !*** ./src/app/pipes/slugify.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlugifyPipe": () => (/* binding */ SlugifyPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let SlugifyPipe = class SlugifyPipe {
    transform(input) {
        const trChars = {
            'çÇ': 'c',
            'ğĞ': 'g',
            'şŞ': 's',
            'üÜ': 'u',
            'ıİ': 'i',
            'öÖ': 'o'
        };
        for (const key of Object.keys(trChars)) {
            input = input.replace(new RegExp('[' + key + ']', 'g'), trChars[key]);
        }
        return input
            .toString()
            .toLowerCase()
            .replace(/,/g, '-')
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    }
};
SlugifyPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'slugify'
    })
], SlugifyPipe);



/***/ }),

/***/ 58407:
/*!***********************************************!*\
  !*** ./src/app/pipes/strip-html-tags.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StripHtmlTagsPipe": () => (/* binding */ StripHtmlTagsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let StripHtmlTagsPipe = class StripHtmlTagsPipe {
    constructor() {
        this.tagBody = "(?:[^\"'>]|\"[^\"]*\"|'[^']*')*";
        this.tagOrComment = new RegExp("<(?:" +
            // Comment body.
            "!--(?:(?:-*[^->])*--+|-?)" +
            // Special "raw text" elements whose content should be elided.
            "|script\\b" +
            this.tagBody +
            ">[\\s\\S]*?</script\\s*" +
            "|style\\b" +
            this.tagBody +
            ">[\\s\\S]*?</style\\s*" +
            // Regular name
            "|/?[a-z]" +
            this.tagBody +
            ")>", "gi");
    }
    transform(value) {
        let oldHtml;
        do {
            oldHtml = value;
            value = value.replace(this.tagOrComment, "");
        } while (value !== oldHtml);
        return value.replace(/</g, "&lt;");
    }
};
StripHtmlTagsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: "stripHtmlTags"
    })
], StripHtmlTagsPipe);



/***/ }),

/***/ 93774:
/*!*****************************************!*\
  !*** ./src/app/services/agm.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgmService": () => (/* binding */ AgmService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.service */ 9753);






let AgmService = class AgmService {
    constructor(http, locationService) {
        this.http = http;
        this.locationService = locationService;
        this.agmMarket = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.storesList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        //public couponsList = new BehaviorSubject(null);
        this.storeDetail = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.modalCalification = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.nearToMe = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.myLocation = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
    }
    getMarkers() {
        if (localStorage.getItem('userLogin') != null) {
            console.log('points services =' + JSON.parse(localStorage.getItem('userLogin')));
            this.userData = JSON.parse(localStorage.getItem('userLogin'));
            this.locationService._location.subscribe(data => {
                console.log('getMarkers = ' + JSON.stringify(data));
            });
            /*
            let headers = {
              'Authorization': this.userData.token
            }
        
            let body = {
              "cualsp":11,
              "Dato0":this.userData.id_login,
              "Dato02":1
            }
            
            //return this.http.post<any>(this.apiUrl + 'establecimientos', body, { 'headers':headers })
            return this.http.post<any>(this.apiUrl + '/RedApi/reportes/ls', body, { 'headers':headers })*/
        }
        else {
            return;
        }
    }
};
AgmService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService }
];
AgmService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], AgmService);



/***/ }),

/***/ 44093:
/*!****************************************************!*\
  !*** ./src/app/services/calendar-popup.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPopupService": () => (/* binding */ CalendarPopupService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41119);



let CalendarPopupService = class CalendarPopupService {
    constructor() {
        this.dateNunmber = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.eventDates = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.dateInit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.dateFinish = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    }
};
CalendarPopupService.ctorParameters = () => [];
CalendarPopupService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CalendarPopupService);



/***/ }),

/***/ 36983:
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesService": () => (/* binding */ CategoriesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);





let CategoriesService = class CategoriesService {
    constructor(http, agmService) {
        this.http = http;
        this.agmService = agmService;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API;
        this.array = [];
        this.temp = [];
        this.categories = [];
        //obtener parametros de usuario luego de loguearse
        this.userData = [];
    }
    ngOnInit() {
    }
    getCategories() {
        //obtener datos del usuario luego de loguearse
        this.agmService.user.subscribe(res => {
            this.userData = res;
        });
        let headers = {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMDEyMzQwMjIwIiwiaWF0IjoxNjU4OTI3MDk5fQ.sMAeTi21RqfHKJEfVVq6Mb2qMeZXXt3K6-j1jJ-cNYA' //this.userData.token
        };
        let body = {
            'cualSP': 4
        };
        //return this.http.post<any>(this.apiUrl + 'establecimientos', body, { 'headers':headers })
        return this.http.post(this.apiUrl + '/establecimientos', body, { 'headers': headers });
    }
    getNearToMe() {
        let latitude;
        let longitude;
        this.agmService.myLocation.subscribe(response => {
            latitude = response.position.lat;
            longitude = response.position.lng;
        });
        let headers = {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMDEyMzQwMjIwIiwiaWF0IjoxNjU4OTI3MDk5fQ.sMAeTi21RqfHKJEfVVq6Mb2qMeZXXt3K6-j1jJ-cNYA' //this.userData.token
        };
        let body = {
            'cualsp': '20',
            'Dato0': "6.2227153",
            'Dato01': "-75.5816264",
            'Dato02': '30'
        };
        return this.http.post(this.apiUrl + '/RedApi/reportes/ls', body, { 'headers': headers });
    }
    getNameStoreById(id) {
        let dataStore;
        this.getCategories().subscribe(allStores => {
            this.stores = allStores.result;
            this.stores.filter(resp => { return resp; }).map(store => {
                dataStore = store;
                if (dataStore.Id == id) {
                    return dataStore.Establecimiento;
                }
            });
        });
    }
};
CategoriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_0__.AgmService }
];
CategoriesService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CategoriesService);



/***/ }),

/***/ 86448:
/*!*********************************************!*\
  !*** ./src/app/services/comment.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsServiceService": () => (/* binding */ CommentsServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 53755);
/* harmony import */ var _agm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agm.service */ 93774);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88377);







let CommentsServiceService = class CommentsServiceService {
    constructor(db, loginService, agmService, activatedRoute, router) {
        this.db = db;
        this.loginService = loginService;
        this.agmService = agmService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dataComment = {
            id_login: 0,
            id_store: 0,
            email: '',
            comment: '',
            date: '',
            calification: 0
        };
        this.commentCollection = db.collection('comments', ref => ref.orderBy('date', 'desc'));
    }
    ngOnInit() {
    }
    getComments() {
        console.log('dentro de getcomments');
        this.comments = this.commentCollection.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            return res.map(data => {
                let comments = data.payload.doc.data();
                comments.id = data.payload.doc.id;
                return comments;
            });
        }));
        return this.comments;
    }
    addComment(comment, id, calification) {
        console.log('comment de services= ' + comment, ' id = ' + id + ' calificacion =' + calification);
        if (this.loginService.isLogged() == true) {
            this.loginService.getUserStored();
            this.agmService.user.subscribe(res => {
                this.dataComment.id_login = res.id_login;
                this.dataComment.email = res.email;
                this.dataComment.comment = comment;
                this.dataComment.date = new Date().toISOString();
                this.dataComment.id_store = id;
                this.dataComment.calification = calification;
                this.commentCollection.add(this.dataComment);
            });
        }
        else {
            alert('Po favor inicie sesion primero.');
        }
    }
};
CommentsServiceService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService },
    { type: _agm_service__WEBPACK_IMPORTED_MODULE_1__.AgmService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CommentsServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], CommentsServiceService);



/***/ }),

/***/ 67732:
/*!**************************************************!*\
  !*** ./src/app/services/common/alert.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _alert_alert_confirm_alert_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_alert/alert-confirm/alert-confirm.component */ 53965);
/* harmony import */ var _alert_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_alert/alert/alert.component */ 93511);
/* harmony import */ var _animations_custom_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_animations/custom.animation */ 92892);






let AlertService = class AlertService {
    constructor(alertController, modalController) {
        this.alertController = alertController;
        this.modalController = modalController;
    }
    presentAlert(header = null, text = null, message = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _alert_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent,
                backdropDismiss: true,
                cssClass: 'my-class-alert-modal',
                enterAnimation: _animations_custom_animation__WEBPACK_IMPORTED_MODULE_2__.modalEnterAnimation,
                leaveAnimation: _animations_custom_animation__WEBPACK_IMPORTED_MODULE_2__.modalLeaveAnimation,
                componentProps: {
                    'data': { header, message, text: text }
                }
            });
            return yield modal.present();
        });
    }
    presentAlertConfirm(message = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                const modal = yield this.modalController.create({
                    component: _alert_alert_confirm_alert_confirm_component__WEBPACK_IMPORTED_MODULE_0__.AlertConfirmComponent,
                    backdropDismiss: true,
                    cssClass: 'my-class-alert-modal',
                    enterAnimation: _animations_custom_animation__WEBPACK_IMPORTED_MODULE_2__.modalEnterAnimation,
                    leaveAnimation: _animations_custom_animation__WEBPACK_IMPORTED_MODULE_2__.modalLeaveAnimation,
                    componentProps: {
                        'data': { title: 'MIND', question: message }
                    }
                });
                /**
                 * TODO: definir accion al hacer click en backdrop
                 * esto genera error, se solventa momentaneamente
                 */
                modal.onDidDismiss()
                    .then((dataReturned) => {
                    const { resp = false } = (dataReturned.data) ? dataReturned.data : {};
                    resolve(resp);
                    return;
                });
                return yield modal.present();
            }));
        });
    }
    getTranslation(text) { return text; }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 8735:
/*!***************************************************!*\
  !*** ./src/app/services/common/common.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 28267);





let CommonService = class CommonService {
    constructor(_location, router, platform) {
        this._location = _location;
        this.router = router;
        this.platform = platform;
        this.defaultImage = '/assets/images/loading.gif';
        this.defaultImage2 = '/assets/images/mind-logo-1.png';
        this.logo = "https://via.placeholder.com/50";
        this.logo_2 = "";
    }
    backClicked() {
        this._location.back();
    }
    goToRouter(route) {
        this.router.navigate([route]);
    }
    goToRouterParam(url, data) {
        this.router.navigate([url], { state: { data: data } });
    }
    isCordova(plat) {
        return this.platform.is("cordova");
    }
    // check-empty-object
    isEmptyObject(obj) {
        return (obj && (Object.keys(obj).length === 0));
    }
    escapeHtml(unsafe) {
        if (unsafe) {
            return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }
    }
    transformarString(string) {
        if (!string) {
            return null;
        }
        const number = string.toString();
        return number.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "").toLowerCase();
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform }
];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ 99439:
/*!****************************************************!*\
  !*** ./src/app/services/common/loading.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 78099);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    presentLoading(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loader) {
                this.loader.dismiss();
            }
            this.loader = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            this.loader.present();
            this.loader.onDidDismiss(() => {
                this.loader = null;
            });
        });
    }
    dismissLoading() {
        if (this.loader) {
            this.loader.dismiss();
        }
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 56073:
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/es-CO */ 4666);
/* harmony import */ var _angular_common_locales_en_US_POSIX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/en-US-POSIX */ 21694);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88377);









(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_0__["default"], "es");
(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_en_US_POSIX__WEBPACK_IMPORTED_MODULE_1__["default"], "en");
let LanguageService = class LanguageService {
    constructor(translate, http) {
        this.translate = translate;
        this.http = http;
    }
    switchLanguage(language) {
        console.log("language", language);
        if (language === "es") {
            this.translate.use("es");
            (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_0__["default"], "es");
            localStorage.setItem("translate", language);
        }
        else {
            this.translate.use("en");
            (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_en_US_POSIX__WEBPACK_IMPORTED_MODULE_1__["default"], "en");
            localStorage.setItem("translate", language);
        }
    }
    getTranslation(lang) {
        let result;
        this.translate.get(lang).subscribe((data) => {
            result = data;
        });
        return result;
    }
    setDefaultLang() {
        this.translate.setDefaultLang("en");
    }
    getJsonLanguage(lang) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.functions}/v2/languages/language?lang=${lang}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
            return response;
        }));
    }
    navigatorLanguage() {
        return window.navigator.language;
    }
    getTranslate(value) {
        return new Promise((resolve) => {
            this.translate.get([value]).subscribe((translations) => {
                console.log("translations", translations);
                resolve(translations);
            });
        });
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
LanguageService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: "root",
    })
], LanguageService);



/***/ }),

/***/ 9753:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 56204);
/* harmony import */ var _awesome_cordova_plugins_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/location-accuracy/ngx */ 17798);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 35732);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 8418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);









let LocationService = class LocationService {
    /*
      geoLatitude: number;
      geoLongitude: number;
      geoAccuracy: number;
      geoAddress: string;
    
      watchLocationUpdates: any;
      loading: any;
      isWatching: boolean;
    
      // Geocoder configuration
      geoencoderOptions: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };*/
    constructor(platform, nativeGeocoder, androidPermissions, geolocation, locationAccuracy, router) {
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.router = router;
        /*options: GeolocationOptions;
        currentPos: Geoposition;*/
        this.geohash = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({});
        this._location = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({});
        this.gpsActivated = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.locCords = {
            latitude: "",
            longitude: "",
            accuracy: "",
            timestamp: ""
        };
        this.times = Date.now();
        this.timetest = Date.now();
    }
    ngOnInit() {
        //    this.getGeolocation();
    }
    /* getCurrentPosition() {
       if ('geolocation' in navigator) {
         navigator.geolocation.getCurrentPosition((position) => {
           //this.latitude = position.coords.latitude;
           //this.longitude = position.coords.longitude;
   
           alert('position.coords.latitude = '+ position.coords.latitude)
           //this.zoom = 12;
           const { latitude, longitude } = position.coords;
           //const range = this.getGeohashRange(latitude, longitude, 5);
           
         });
       }
     }*/
    /*Activacion de GPS*/
    chckAppGpsPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
            .then(result => {
            //result = false : gps desactivado
            //result = true : gps activado
            //result = true : gps desactivado pero ha sido activado antes dentro de la app
            if (result.hasPermission) {
                this.requestToSwitchOnGPS();
            }
            else {
                this.askGPSPermission(); //cuando el gps esta apagado
            }
        }).catch(err => {
            console.log('Ha ocurrido un error : ' + err);
        });
    }
    askGPSPermission() {
        this.locationAccuracy.canRequest().then((canRequest) => {
            if (canRequest) { }
            else {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then((response) => {
                    //alert('request inside askGPSPermission() response = '+JSON.stringify(response)) //true si se ;e da aceptar al alert
                    // response.hasPermission=false  si le doy a no gracias
                    this.requestToSwitchOnGPS();
                })
                    .catch(error => { console.log('Ha ocurrido un error : ' + error); });
            }
        });
    }
    requestToSwitchOnGPS() {
        //alert('1');
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
            .then((response) => {
            //response.code == 1 : GPS Activado
            //response.code == 4 : GPS Desactivado
            switch (response.code) {
                case 1: {
                    this.getLocationAccCords();
                    break;
                }
                case 4: {
                    this.gpsActivated.next(null);
                    break;
                }
                default: {
                    try {
                        this.getLocationAccCords();
                        break;
                    }
                    catch (_a) {
                        err => {
                            console.log(err);
                            this.gpsActivated.next(null);
                        };
                    }
                }
            }
        })
            .catch(error => console.log('Ha ocurrido un error : ' + error));
    }
    getLocationAccCords() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //alert('getlocation');
            yield this.geolocation.getCurrentPosition()
                .then((response) => {
                this.locCords.latitude = response.coords.latitude;
                this.locCords.longitude = response.coords.longitude;
                this.locCords.accuracy = response.coords.accuracy;
                this.locCords.timestamp = response.timestamp;
                this.gpsActivated.next(this.locCords);
                // alert(JSON.stringify(this.locCords));
            }).catch((err) => {
                console.log('Ha ocurrido un error : ' + err);
            });
        });
    }
};
LocationService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder },
    { type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_0__.AndroidPermissions },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _awesome_cordova_plugins_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_1__.LocationAccuracy },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
LocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], LocationService);



/***/ }),

/***/ 53755:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _agm_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agm.service */ 93774);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);







let LoginService = class LoginService {
    constructor(http, agmService, router) {
        this.http = http;
        this.agmService = agmService;
        this.router = router;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.logged = false;
        //apiUrl = 'http://190.146.25.34:3000/';
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API;
        this.user = '';
        this.password = '';
        this.headers = {
            //'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MTY1OTMyOCIsImlhdCI6MTYzNjM4MjAzMH0.G2F6GezeBATL88fYqb54TbXjzUsoSTQSpWFAsXcaUuw'
            'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMDEyMzQwMjIwIiwiaWF0IjoxNjQ3MzgwNjU4fQ.eLfxOXbfjuz5ZBdsFb51jv5M7cYAPSbD0u39THnfAwc'
        };
    }
    validateUser(correo, password) {
        let body = {
            'correo': correo,
            'password': password
        };
        //return this.http.post<any>(this.apiUrl + '/login', body)
        return this.http.post(this.apiUrl + '/loginUsr', body);
    }
    //verifica si el usuario esta logueado, return true o false
    isLogged() {
        if ((localStorage.getItem('userLogin') == null)) {
            this.logged = false;
        }
        else {
            if ((localStorage.getItem('userLogin') != null)) {
                this.logged = true;
            }
        }
        return this.logged;
    }
    openLogin() {
        //console.log('dentro dee open login')
        if (this.isLogged() == true) {
            if (this.router['routerState'].snapshot.url = '/home') {
                return '/home';
            }
        }
        else {
            //console.log('Usuario no ha iniciado sesion');
            if (this.isLogged() == false) {
                if (this.router['routerState'].snapshot.url = '/home') {
                    return '/pages/login';
                }
            }
        }
    }
    //obtener datos de usuario
    getUserStored() {
        if (this.isLogged() == true) {
            //console.log('usuario = ' + localStorage.getItem('userLogin'));
            this.agmService.user.next(JSON.parse(localStorage.getItem('userLogin')));
        }
        else {
            //console.log('Usuario no ha iniciado sesion');
        }
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _agm_service__WEBPACK_IMPORTED_MODULE_0__.AgmService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 8422:
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 88377);




let NotificationsService = class NotificationsService {
    constructor(db) {
        this.db = db;
        this.notiArray = {
            id_login: 0,
            title: '',
            body: '',
            wasTapped: '',
            date: ''
        };
        //obtener coleccion de notificaciones
        this.notiCollection = db.collection('notifications', ref => ref.orderBy('date', 'desc'));
    }
    getNotifications() {
        this.notifications = this.notiCollection.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
            return res.map(data => {
                let notifications = data.payload.doc.data();
                notifications.id = data.payload.doc.id;
                return notifications;
            });
        }));
        return this.notifications;
    }
    // se recibe parametro de tipo any, porque la estructura de la notificacion puede cambiar mas adelante
    addNotification(notification, id) {
        this.notiArray.id_login = id;
        this.notiArray.title = notification.title;
        this.notiArray.body = notification.body;
        this.notiArray.wasTapped = notification.wasTapped;
        this.notiArray.date = new Date().toISOString();
        this.notiCollection.add(this.notiArray);
    }
    deleteNotification(id) {
        this.notiDoc = this.db.doc('notifications/' + id);
        this.notiDoc.delete();
    }
};
NotificationsService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore }
];
NotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NotificationsService);



/***/ }),

/***/ 6762:
/*!********************************************!*\
  !*** ./src/app/services/plugin.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginService": () => (/* binding */ PluginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 51020);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 56204);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 35732);
/* harmony import */ var _awesome_cordova_plugins_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/location-accuracy/ngx */ 17798);






let PluginService = class PluginService {
    constructor(diagnostic, androidPermissions, geolocation, locationAccuracy) {
        this.diagnostic = diagnostic;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.locationCoords = {
            latitude: "",
            longitude: "",
            accuracy: "",
            timestamp: ""
        };
    }
    //To check whether Location Service is enabled or Not
    locationStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            alert('inside locationStatus');
            return this.diagnostic.isGpsLocationEnabled();
        });
    }
    checkLocationEnabled() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.diagnostic.isLocationEnabled().then((isEnabled) => {
                    console.log(isEnabled);
                    if (isEnabled === false) {
                        //this.showToast('Please turn on Location Service');
                        alert('Please turn on Location Service');
                        resolve(false);
                    }
                    else if (isEnabled === true) {
                        this.checkGPSPermission().then((response) => {
                            console.log(response, 'checkGPSPermission-checkLocationEnabled');
                            this.apiResponse = response;
                            if (this.apiResponse === false) {
                                reject(false);
                            }
                            else {
                                resolve(this.apiResponse);
                            }
                        })
                            .catch((e) => {
                            console.log(e, 'checkGPSPermission-checkLocationEnabled');
                            reject(false);
                        });
                    }
                })
                    .catch((e) => {
                    //this.showToast('Please turn on Location');
                    alert('Please turn on Location');
                    reject(false);
                });
            });
        });
    }
    //Check if application having GPS access permission
    checkGPSPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            alert('checkGPSPermission');
            return new Promise((resolve, reject) => {
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(result => {
                    alert('result.hasPermission =' + result.hasPermission);
                    if (result.hasPermission) {
                        alert('hasPermission-YES');
                        //If having permission show 'Turn On GPS' dialogue
                        this.askToTurnOnGPS().then((response) => {
                            alert(response + 'askToTurnOnGPS-checkGPSPermission');
                            if (this.apiResponse === false) {
                                reject(this.apiResponse);
                            }
                            else {
                                resolve(this.apiResponse);
                            }
                        });
                    }
                    else {
                        console.log('hasPermission-NO');
                        //If not having permission ask for permission
                        this.requestGPSPermission().then((response) => {
                            alert(response + 'requestGPSPermission-checkGPSPermission');
                            this.apiResponse = response;
                            if (this.apiResponse === false) {
                                reject(this.apiResponse);
                            }
                            else {
                                resolve(this.apiResponse);
                            }
                        });
                    }
                }, err => {
                    alert(err);
                    reject(false);
                });
            });
        });
    }
    requestGPSPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.locationAccuracy.canRequest().then((canRequest) => {
                    if (canRequest) {
                        console.log("4");
                    }
                    else {
                        //Show 'GPS Permission Request' dialogue
                        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(() => {
                            // call method to turn on GPS
                            this.askToTurnOnGPS().then((response) => {
                                console.log(response, 'askToTurnOnGPS-requestGPSPermission');
                                this.apiResponse = response;
                                if (this.apiResponse === false) {
                                    reject(this.apiResponse);
                                }
                                else {
                                    resolve(this.apiResponse);
                                }
                            });
                        }, error => {
                            //Show alert if user click on 'No Thanks'
                            alert('requestPermission Error requesting location permissions ' + error);
                            reject(false);
                        });
                    }
                });
            });
        });
    }
    askToTurnOnGPS() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then((resp) => {
                    console.log(resp, 'location accuracy');
                    // When GPS Turned ON call method to get Accurate location coordinates
                    if (resp['code'] === 0) {
                        resolve(this.apiResponse);
                        this.getLocationCoordinates().then((cords) => {
                            console.log(cords, 'coords');
                            this.apiResponse = cords;
                            if (this.apiResponse === false) {
                                reject(false);
                            }
                            else {
                                resolve(this.apiResponse);
                            }
                        });
                    }
                    error => {
                        alert('Error requesting location permissions');
                        reject(false);
                    };
                });
            });
        });
    }
    getLocationCoordinates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.geolocation.getCurrentPosition().then((resp) => {
                    this.locationCoords.latitude = resp.coords.latitude;
                    this.locationCoords.longitude = resp.coords.longitude;
                    this.locationCoords.accuracy = resp.coords.accuracy;
                    this.locationCoords.timestamp = resp.timestamp;
                    console.log(resp, 'get locc');
                    resolve(this.locationCoords);
                }).catch((error) => {
                    alert('Error getting location');
                    reject(false);
                });
            });
        });
    }
};
PluginService.ctorParameters = () => [
    { type: _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_0__.Diagnostic },
    { type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_1__.AndroidPermissions },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _awesome_cordova_plugins_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__.LocationAccuracy }
];
PluginService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PluginService);



/***/ }),

/***/ 70315:
/*!****************************************************!*\
  !*** ./src/app/services/points-control.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsControlService": () => (/* binding */ PointsControlService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let PointsControlService = class PointsControlService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
    }
    ngOnInit() { }
    getPoints() {
        if (localStorage.getItem('userLogin') != null) {
            //console.log( 'points services ='+JSON.parse(localStorage.getItem('userLogin')) );
            this.user = JSON.parse(localStorage.getItem('userLogin'));
            let headers = {
                'Authorization': this.user.token
            };
            let body = {
                "cualsp": 11,
                "Dato0": this.user.id_login,
                "Dato02": 1
            };
            //return this.http.post<any>(this.apiUrl + 'establecimientos', body, { 'headers':headers })
            return this.http.post(this.apiUrl + '/RedApi/reportes/ls', body, { 'headers': headers });
        }
        else {
            return;
        }
    }
};
PointsControlService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PointsControlService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PointsControlService);



/***/ }),

/***/ 59459:
/*!***********************************************!*\
  !*** ./src/app/services/referrals.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralsService": () => (/* binding */ ReferralsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let ReferralsService = class ReferralsService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
    }
    getReferrals() {
        if (localStorage.getItem('userLogin') != null) {
            this.user = JSON.parse(localStorage.getItem('userLogin'));
            let headers = {
                'Authorization': this.user.token
            };
            let body = {
                "cualSP": "8",
                "Dato0": "1",
                "Dato01": "0",
                "Dato02": JSON.stringify(this.user.id_login)
            };
            return this.http.post(this.apiUrl + '/clientesManejo', body, { 'headers': headers });
        }
        else {
            return;
        }
    }
};
ReferralsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ReferralsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ReferralsService);



/***/ }),

/***/ 4617:
/*!*********************************************************!*\
  !*** ./src/app/services/translation-service.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationService": () => (/* binding */ TranslationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);





const URL_ROOT = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions;
let TranslationService = class TranslationService {
    constructor(http) {
        this.http = http;
    }
    getTranslation(lang) {
        console.log('URL_ROOT', `${URL_ROOT}`);
        console.log('languages', `${URL_ROOT}/languages/get?lang=${lang}`);
        return this.http.get(`${URL_ROOT}/languages/get?lang=${lang}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response;
        }));
    }
};
TranslationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
TranslationService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], TranslationService);



/***/ }),

/***/ 59866:
/*!*************************************************!*\
  !*** ./src/app/services/user-device.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDeviceService": () => (/* binding */ UserDeviceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 17897);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 88377);





let UserDeviceService = class UserDeviceService {
    constructor(db, storage) {
        this.db = db;
        this.storage = storage;
        //obtener coleccion de dispositivos
        this.userCollection = db.collection('devices');
    }
    getDevices() {
        //obtener dispositivos registrados en firestore
        this.users = this.userCollection.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
            return res.map(data => {
                // console.log('data = '+JSON.stringify(data));
                const devices = data.payload.doc.data(); //userDevice;
                devices.id = data.payload.doc.id;
                return devices;
            });
        }));
        return this.users;
    }
    deviceRegister(user) {
        if ((localStorage.getItem('user') == null)) {
            //almacenar parametros en local storage
            localStorage.setItem('user', JSON.stringify(user));
            //almacenar parametos en firestore
            this.userCollection.add(user);
        }
        else {
            if ((localStorage.getItem('user') != null)) {
                //cuando se reciban los parametros de login, se deben comparar con estos
                //para saber si hay que actualizar o no
                //convierte el string en objeto - array
                this.dataDevice = JSON.parse(localStorage.getItem('user'));
            }
        }
    }
};
UserDeviceService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
UserDeviceService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], UserDeviceService);



/***/ }),

/***/ 65097:
/*!***********************************************!*\
  !*** ./src/app/shared/grid/grid.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridComponent": () => (/* binding */ GridComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_grid_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./grid.component.html */ 76487);
/* harmony import */ var _grid_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.component.scss */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);





let GridComponent = class GridComponent {
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngAfterViewInit() {
    }
};
GridComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 }
];
GridComponent.propDecorators = {
    expandWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ["expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef, static: true },] }]
};
GridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-grid',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_grid_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_grid_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GridComponent);



/***/ }),

/***/ 68638:
/*!*************************************************************!*\
  !*** ./src/app/shared/header-back/header-back.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderBackComponent": () => (/* binding */ HeaderBackComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_back_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header-back.component.html */ 37118);
/* harmony import */ var _header_back_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-back.component.scss */ 41551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let HeaderBackComponent = class HeaderBackComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderBackComponent.ctorParameters = () => [];
HeaderBackComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
HeaderBackComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-header-back',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_back_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_back_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderBackComponent);



/***/ }),

/***/ 32877:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 15351);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 87561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);





let HeaderComponent = class HeaderComponent {
    constructor(menu) {
        this.menu = menu;
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    openEnd() {
        this.menu.open('end');
    }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 51382:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-lazyload-image */ 2478);
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid/grid.component */ 65097);
/* harmony import */ var _sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-menu/sidebar-menu.component */ 63788);
/* harmony import */ var _header_back_header_back_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-back/header-back.component */ 68638);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 32877);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ 57693);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 91173);













//import { MatIconModule } from '@angular/material/icon';
let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent,
            _sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_1__.SidebarMenuComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
            _header_back_header_back_component__WEBPACK_IMPORTED_MODULE_2__.HeaderBackComponent
        ],
        entryComponents: [
            _grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent,
            _sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_1__.SidebarMenuComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
            _header_back_header_back_component__WEBPACK_IMPORTED_MODULE_2__.HeaderBackComponent
        ],
        exports: [
            _grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent,
            _sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_1__.SidebarMenuComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
            _header_back_header_back_component__WEBPACK_IMPORTED_MODULE_2__.HeaderBackComponent
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__.LazyLoadImageModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__.PipesModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule /*,
            MatIconModule*/
        ]
    })
], SharedModule);



/***/ }),

/***/ 63788:
/*!***************************************************************!*\
  !*** ./src/app/shared/sidebar-menu/sidebar-menu.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarMenuComponent": () => (/* binding */ SidebarMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sidebar_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sidebar-menu.component.html */ 42045);
/* harmony import */ var _sidebar_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-menu.component.scss */ 84450);
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common/common.service */ 8735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language.service */ 56073);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ 53755);
/* harmony import */ var src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/agm.service */ 93774);
/* harmony import */ var src_app_services_points_control_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/points-control.service */ 70315);
/* harmony import */ var src_app_services_referrals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/referrals.service */ 59459);













//import { MatIconModule } from '@angular/material/icon';
let SidebarMenuComponent = class SidebarMenuComponent {
    constructor(menuController, router, languageService, actionSheetController, alertController, commonService, loginService, agmService, pointsService, referralService) {
        this.menuController = menuController;
        this.router = router;
        this.languageService = languageService;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.loginService = loginService;
        this.agmService = agmService;
        this.pointsService = pointsService;
        this.referralService = referralService;
        //event
        //sin el parametro click, el alert de openLogin se abre automaticamente  
        this.click = 0;
        this.referralsQtty = 0;
        this.menuSidebar = [
            {
                name: 'Mi Cuenta',
                img: 'home',
                router: this.loginService.openLogin(),
                type: 'navigate',
                public: true,
                isNew: false,
                description: '',
            },
            {
                name: 'Home',
                img: 'notifications',
                router: '/home',
                type: 'navigate',
                public: true,
                isNew: false,
                description: '',
            },
            {
                name: 'Referidos',
                img: 'notifications',
                router: '/pages/referrals',
                type: 'navigate',
                public: true,
                isNew: false,
                description: '',
            },
            {
                name: 'Mis Compras',
                img: 'notifications',
                router: '/pages/shopping',
                type: 'navigate',
                public: true,
                isNew: false,
                description: '',
            },
            {
                name: 'Inbox',
                img: 'notifications',
                router: '/pages/inbox',
                type: 'navigate',
                public: true,
                isNew: false,
                description: '',
            },
            {
                name: 'Recompensas',
                img: 'notifications',
                router: '/pages/rewards',
                type: 'navigate',
                public: true,
                isNew: false,
                description: '',
            },
            {
                name: 'Cupones',
                img: 'notifications',
                router: '/pages/coupons',
                type: 'navigate',
                public: true,
                isNew: false,
                description: '',
            },
            {
                name: 'Mi Establecimiento',
                img: 'notifications',
                router: '/pages/account',
                type: 'navigate',
                public: true,
                isNew: false,
                description: '',
            },
            {
                name: 'Mis Transferencias',
                img: 'notifications',
                router: '/pages/transfers',
                type: 'navigate',
                public: true,
                isNew: false,
                description: '',
            },
            {
                name: 'Logout',
                img: 'exit',
                // router: 'notificaciones',
                type: 'method',
                action: () => {
                    if ((this.loginService.isLogged() == false)) {
                        alert('Usted no posee una sesiòn activa');
                    }
                    else {
                        if ((this.loginService.isLogged() == true)) {
                            this.presentAlert();
                        }
                    }
                },
                public: true,
                isNew: false,
                description: '',
            }
        ];
    }
    ngOnInit() {
        this.getUser();
        //console.log('sidemenu 1 : ');
        /* this.referralService.getReferrals().subscribe(data=>{
           if(data.result.Mensaje){
             this.referralsQtty=0;
           }else{
             try{
               this.temp=data.result;
               this.referralsQtty = this.temp.length;
             }catch{
               this.referralsQtty=0;
     
             }
           }
         });*/
    }
    getReferrals() {
        this.referralService.getReferrals().subscribe(data => {
            if (data.result) {
                this.referralsQtty = data.result.length;
            }
            else {
                console.log('Error al obtener listado de referidos');
            }
        });
    }
    getUser() {
        this.loginService.userData.subscribe(data => {
            if (data) {
                this.user = data.email;
                this.pointsService.getPoints().subscribe(data => {
                    this.outstanding_points = Number(data.result[0].Cli_Puntos_Pendientes) + Number(data.result[0].Patro_Puntos_Pendientes) + Number(data.result[0].Dis_Puntos_Pendientes);
                    this.available_points = Number(data.result[0].Cli_Puntos_Sin_Cobrar) + Number(data.result[0].Patro_Puntos_Sin_Cobrar) + Number(data.result[0].Dis_Puntos_Sin_Cobrar);
                });
                this.getReferrals();
            }
            else {
                this.user = '';
            }
        });
    }
    loginAccess() {
        if (this.loginService.isLogged() == true) {
            console.log('Logged true');
            alert('Usted ya posee una sesion abierta, por favor cierre sesion.');
            this.router.navigate['/home'];
        }
        if (this.loginService.isLogged() == false) {
            console.log('Logged false');
            console.log('login button......');
            this.router.navigate['/pages/login'];
        }
    }
    _method(item) {
        //accion a tomar cuando el usuario esta lsogueado y quiera acceder a login
        if ((item.name == 'Mi Cuenta') && (this.loginService.isLogged() == true)) {
            alert('Usted ya posee una sesion abierta, por favor cierre sesion.');
            const { router, type, action } = item;
            console.log({ router, type, action });
            return this.router.navigate(['/home']);
            this.menuController.close();
        }
        const { router, type, action } = item;
        switch (type) {
            case 'navigate':
                this.router.navigate([router]);
                break;
            case 'method':
                if (action) {
                    action();
                }
                break;
            default:
                console.log('default type');
                break;
        }
        this.menuController.close();
    }
    /**
   * Seleccionar idioma
   */
    presentActionChooselanguage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: `${this.languageService.getTranslation('Choose language')} ?`,
                cssClass: 'seleclanguaje',
                buttons: [
                    {
                        text: 'English',
                        handler: () => {
                            this.languageService.switchLanguage('en');
                        },
                    },
                    {
                        text: 'Español',
                        handler: () => {
                            this.languageService.switchLanguage('es');
                        },
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // subHeader: 'Acc',
                message: '¿Desea Cerrar Sesion?',
                buttons: [
                    {
                        text: 'SI',
                        role: 'si',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('cierre Sesion');
                            //localStorage.clear()
                            localStorage.removeItem('userLogin');
                            localStorage.clear();
                            this.loginService.userData.next(null);
                        }
                    },
                    {
                        text: 'NO',
                        role: 'no',
                        cssClass: 'secondary',
                        handler: () => {
                            this.router.navigate(['/home']);
                        }
                    }
                ]
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
        });
    }
};
SidebarMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService },
    { type: src_app_services_agm_service__WEBPACK_IMPORTED_MODULE_5__.AgmService },
    { type: src_app_services_points_control_service__WEBPACK_IMPORTED_MODULE_6__.PointsControlService },
    { type: src_app_services_referrals_service__WEBPACK_IMPORTED_MODULE_7__.ReferralsService }
];
SidebarMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-sidebar-menu',
        template: _C_Users_Genox_Documents_WebSites_Mind_App_2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sidebar_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sidebar_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SidebarMenuComponent);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    account: "https://unipedidos.azurewebsites.net/",
    //API_KEY_GOOGLE_MAPS: "AIzaSyBXacUor2PuGqwh7gJeiH7JzI0DXPD0HII",
    API_KEY_GOOGLE_MAPS: "AIzaSyDU_9fU6OTjJbPqSRxWxZzo6uh3hgz461o",
    API: "https://neuron-red-post-api.azurewebsites.net",
    production: true,
    functions: "",
    productDetails: "https://unipedidos.azurewebsites.net/shoppingorders/",
    token_test: "'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMDEyMzQwMjIwIiwiaWF0IjoxNjU4OTI3MDk5fQ.sMAeTi21RqfHKJEfVVq6Mb2qMeZXXt3K6-j1jJ-cNYA'",
    firebaseConfig: {
        apiKey: "AIzaSyA6YohTe0ajX9q_oaQvfeqv1HihD3m0lGQ",
        authDomain: "mind-club-5f67e.firebaseapp.com",
        projectId: "mind-club-5f67e",
        storageBucket: "mind-club-5f67e.appspot.com",
        messagingSenderId: "378025529244",
        appId: "1:378025529244:web:983c7f092dff9963390259",
        measurementId: "G-20ENT0ZV7N"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 50696:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_alert/alert-confirm/alert-confirm.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"msj_alert\">\r\n  <div class=\"heade tf2 tc_b\">\r\n    {{data?.title }}\r\n  </div>\r\n  <div class=\"msjal tf2 tc_b\">\r\n    {{data?.question }}\r\n  </div>\r\n  <div class=\"bunt_acc\">\r\n    <div class=\"flex center jsb column_xs\">\r\n      <div class=\"btn1 tf2\" (click)=\"dismiss(true)\">\r\n        {{'Si quiero' }}\r\n      </div>\r\n      <div class=\"btn1 btn2 tc_b tf2\" (click)=\"dismiss(false)\">\r\n        {{'No' }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 97527:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_alert/alert/alert.component.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"msj_alert\">\r\n  <div *ngIf=\"data?.header\" class=\"heade tf2 tc_b\">\r\n    {{data?.header }}\r\n  </div>\r\n  <div *ngIf=\"data?.text\" class=\"heade tf2 tc_b\">\r\n    {{data?.text }}\r\n  </div>\r\n  <div *ngIf=\"data?.message\" class=\"msjal tf2 tc_b\">\r\n    {{data?.message }}\r\n  </div>\r\n  <div class=\"bunt_acc\">\r\n    <div class=\"flex center column_xs\">\r\n      <div class=\"btn1 tf2\" (click)=\"dismiss(true)\">\r\n        {{'OK' }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-split-pane when=\"true\" contentId=\"main-content\">\r\n    <ion-menu side=\"start\" menuId=\"first\" contentId=\"main-content\" class=\"my-custom-menu\">\r\n      <ion-content style=\"height: 80%;\">\r\n        <app-sidebar-menu></app-sidebar-menu>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>");

/***/ }),

/***/ 58455:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/comments-videos/comments-videos.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"padding-lateral\" style=\"margin-top: 5%;\">\r\n  <div class=\"row\" style=\"display: flex;height: 5vh;margin-bottom: 5%;margin-top: 5%;\">\r\n    <div class=\"col-6\" (click)=\"commentShow=1\" [ngClass]=\"{active: commentShow == 1, inactive: commentShow != 1}\">\r\n      <b>COMENTARIOS</b>\r\n    </div>\r\n    <div class=\"col-6\" (click)=\"commentShow=0\" [ngClass]=\"{active: commentShow == 0, inactive: commentShow != 0}\">\r\n      <b>GALERIA</b>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"margin-top: 5%;\" *ngIf=\"commentShow==1\">\r\n    <div style=\" height: 60vh;overflow: auto;\">\r\n      <div style=\" margin-top: 5%;margin-left:5%; margin-right: 5%;border-bottom: 1px solid #FCE19F;\"\r\n        *ngFor=\"let comment of storeComments\">\r\n        <div>\r\n          <div>\r\n            <ion-label style=\"font-size: 2vh;color:#CC9C61\"> {{comment.email}}</ion-label>\r\n          </div>\r\n          <div>\r\n            <label *ngFor=\"let i of [].constructor(comment.calification)\">\r\n              <ion-icon name=\"star\" style=\"color:#CC9C61\"></ion-icon>\r\n            </label>\r\n          </div>\r\n\r\n          <p style=\"font-size: 2vh;\">\r\n            {{comment.comment}}\r\n          </p>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div style=\"margin-top: -10%;height: 100%;\">\r\n      <ion-item>\r\n        <ion-textarea type=\"text\" rows=\"5\" [(ngModel)]=\"newComment\" style=\"font-size:2vh\"\r\n          placeholder=\"Agrega un comenario...\"></ion-textarea>\r\n      </ion-item>\r\n\r\n      <div style=\"margin-top: 3%;text-align: center;\">\r\n        <label (click)=\"onSubmitData(detail.Id)\" style=\"color: #CC9C61;font-size: 2vh;\">\r\n          <b>AGREGAR COMENTARIO</b>\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"commentShow== 0\">\r\n  \r\n    <app-store-videos *ngIf=\"recipeId\" [recipeId]=\"recipeId\" [id_user]=\"user.id_login\" [email_user]=\"user.email\"></app-store-videos>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ 46677:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/gps-map/gps-map.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div id=\"map\"></div>\r\n  <div\r\n    id=\"indicators\"\r\n  ></div>  \r\n</ion-content>");

/***/ }),

/***/ 20669:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/header/header.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar [class.show-background]=\"showToolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref={{go}}></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <!--<ion-img class=\"logo-header\" src=\"assets/images/logo-puntosya.png\"></ion-img>-->\r\n        <ion-img class=\"logo-header\" src=\"assets/images/logo-2.png\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>");

/***/ }),

/***/ 58531:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/map/map.component.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\r\n      // esto es para agregar nombre al marcador\r\n      [label]=\"{\r\n        text: m.label, fontWeight:'bold', fontSize: '20px', fontFamily: '', color: '#EE7909' \r\n      }\"\r\n    -->\r\n    <ng-container *ngIf=\"markers && nearme==0 ;else other_content\">\r\n\r\n      <agm-map [styles]=\"mapStyles\" [backgroundColor]=\"'#CC9C61'\" [disableDefaultUI]=\"true\" [latitude]=\"lat\" [longitude]=\"lng\"\r\n        [minZoom]=\"zoom -3\" [maxZoom]=\"zoom + 3\" [zoom]=\"zoom\"  [streetViewControl]=\"false\"  (mapClick)=\"mapClicked($event)\">\r\n    \r\n        <agm-marker \r\n          class=\"test-map\" \r\n          style=\"height: 10px;\"\r\n          (markerClick)=\"clickedMarker(m.label, i)\"\r\n          [latitude]=\"m.lat\" \r\n          [longitude]=\"m.lng\" \r\n          [title]=\" m.label\" \r\n          [markerDraggable]=\"m.draggable\" \r\n          [iconUrl]=\"iconMarker\"\r\n          (dragEnd)=\"markerDragEnd(m, $event)\"\r\n          *ngFor=\"let m of markers; let i = index\" >\r\n          \r\n          <agm-info-window>\r\n            <div class=\"cntinfmp\">\r\n              <div class=\"header_cntmp\">\r\n                <ion-card-subtitle>{{'Mind'}}</ion-card-subtitle>\r\n                <ion-card-title>{{m.label | titlecase}}</ion-card-title>\r\n              </div>\r\n              <div class=\"content_cntmp\">\r\n                {{m.address}}\r\n              </div>\r\n              <div  class=\"footer_cntmap\" style=\"padding: 5%;\">\r\n                <ion-button class=\"modal-btn\" (click)=\"goToStore(m)\" color=\"secondary\" \r\n                 expand=\"block\" size=\"small\" style=\"height: 90%;\"> \r\n                <label style=\"color: white;\"> {{'Ver' | titlecase}}</label>\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n          </agm-info-window>\r\n    \r\n        </agm-marker>\r\n    \r\n        <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" [radius]=\"5000\" [fillColor]=\"'red'\" [circleDraggable]=\"true\"\r\n          [editable]=\"true\">\r\n        </agm-circle>-\r\n      </agm-map>\r\n      \r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"markers_nearme && nearme==1 ;else other_content\">\r\n\r\n      <agm-map [styles]=\"mapStyles\" [backgroundColor]=\"'#CC9C61'\" [disableDefaultUI]=\"true\" [latitude]=\"lat\" [longitude]=\"lng\"\r\n        [minZoom]=\"zoom -3\" [maxZoom]=\"zoom + 3\" [zoom]=\"zoom\"  [streetViewControl]=\"false\"  (mapClick)=\"mapClicked($event)\">\r\n\r\n        <agm-marker \r\n          class=\"test-map\" \r\n          style=\"height: 10px;\"\r\n          (markerClick)=\"clickedMarker(n.label, i)\"\r\n          [latitude]=\"n.Latitud_A\" \r\n          [longitude]=\"n.Longitud_A\" \r\n          [title]=\" n.Establecimiento\" \r\n          [markerDraggable]=false \r\n          [iconUrl]=\"iconMarker\"\r\n          (dragEnd)=\"markerDragEnd(n, $event)\"\r\n          *ngFor=\"let n of markers_nearme; let i = index\" >\r\n          \r\n          <agm-info-window>\r\n            <div class=\"cntinfmp\">\r\n              <div class=\"header_cntmp\">\r\n                <ion-card-subtitle>{{'Mind'}}</ion-card-subtitle>\r\n                <ion-card-title>{{n.Establecimiento | titlecase}}</ion-card-title>\r\n              </div>\r\n              <div class=\"content_cntmp\">\r\n                {{n.Direccion}}\r\n              </div>\r\n              <div  class=\"footer_cntmap\" style=\"padding: 5%;\">\r\n                <ion-button class=\"modal-btn\" (click)=\"goToStore(n)\" color=\"secondary\" \r\n                 expand=\"block\" size=\"small\" style=\"height: 90%;\"> \r\n                <label style=\"color: white;\"> {{'Ver' | titlecase}}</label>\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n          </agm-info-window>\r\n    \r\n        </agm-marker>\r\n    \r\n        <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" [radius]=\"5000\" [fillColor]=\"'red'\" [circleDraggable]=\"true\"\r\n          [editable]=\"true\">\r\n        </agm-circle>-\r\n      </agm-map>\r\n      \r\n    </ng-container>\r\n    <ng-template #other_content>\r\n    </ng-template>");

/***/ }),

/***/ 31319:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/modal-calificate/modal-calificate.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header2 [title]=\"'CALIFICANOS'\"></app-header2>\r\n<!--<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)=\"closeModal()\" name=\"close-circle\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-title>CALIFICANOS</ion-title>\r\n  \r\n</ion-header>-->\r\n\r\n<ion-content style=\"height: 100%;\">\r\n  <div style=\"text-align: center;margin-top: 20%;\">\r\n    <h1 style=\"margin-bottom: 10%;\">Del 1 al 5, ¿como nos calificarias?</h1>\r\n    <label *ngFor=\"let item of [].constructor(5); let i=index\"  >\r\n      \r\n      <ion-icon name=\"star-outline\" style=\"font-size: 5vh;color: #1A1A1A;\" (click)=\"calification=i\"></ion-icon>\r\n    </label>\r\n    <div class=\"ion-text-center\" style=\"margin: 2%;\">\r\n      <ion-button  size=\"small\" style=\"margin-top: 10%;width: 30%;\" (click)=\"calificated()\">{{'CALIFICAR' | titlecase}}</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 51756:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/new-referral/new-referral.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\r\n    <div style=\"background-color: #CC9C61; font-weight: bold; color: white; text-align: center;padding-top: 3%;padding-bottom:3% ;\">\r\n    Generar Referido\r\n  </div>\r\n  <div class=\"ion-padding\">\r\n    <label >{{urlReferral}}</label>\r\n  </div>\r\n\r\n  <div class=\"align-center\">\r\n    <ion-button   (click)=\"getDates()\" style=\"height: 30px; font-size: 12px;\" color=\"secondary\">\r\n        <label class=\"button-style\">COPIAR</label>\r\n    </ion-button>\r\n  </div> \r\n</div>\r\n");

/***/ }),

/***/ 58317:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/not-found/not-found.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<div>\r\n    <!--<ion-img src=\"../../../assets/images/logo-puntosya.png\"></ion-img>-->\r\n    <ion-img src=\"../../../assets/images/uni_logo.png\"></ion-img>\r\n    <p>No podemos encontrar lugares cerca de ti</p>\r\n</div>");

/***/ }),

/***/ 3782:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/popover-calendar/popover-calendar.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\r\n  <ion-calendar \r\n  [(ngModel)]=\"dateMulti\"\r\n    [type]=\"type\"\r\n    [format]=\"'yyyy-MM-dd'\"\r\n \r\n    [min]=\"01/01/1990\"\r\n    >\r\n\r\n  </ion-calendar>\r\n\r\n  <div class=\"align-center\">\r\n    <ion-button (click)=\"getDates()\">\r\n        Añadir Fecha\r\n    </ion-button>\r\n  </div> \r\n</div>");

/***/ }),

/***/ 94811:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/searchbar/searchbar.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar mode=\"md\">\r\n    <ion-searchbar animated (ionChange)=\"search($event)\"></ion-searchbar>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"getSearchCode()\">\r\n            <ion-icon name=\"code-working\"></ion-icon>\r\n        </ion-button>\r\n    </ion-buttons>\r\n\r\n</ion-toolbar>\r\n<!--\r\n<ion-content>\r\n    <ion-list>\r\n        <ion-item *ngFor=\"let store of stores | filter:text:'Establecimiento'\">\r\n            {{store.Establecimiento}}\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>-->");

/***/ }),

/***/ 84972:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/spinner/spinner.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"text-align: center;margin-top: 55%;\">\r\n  <ion-spinner *ngIf=\"show\" name=\"lines\"></ion-spinner>\r\n</div>\r\n");

/***/ }),

/***/ 8996:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/store-videos/store-videos.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-button full expand=\"block\" (click)=\"recordWithCamare()\">\r\n  Subir Video\r\n</ion-button>\r\n\r\n<br>\r\n\r\n<ion-list>\r\n  <ion-item button *ngFor=\"let item of items | async\" (click)=\"watchVideo(item)\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\r\n    </ion-avatar>\r\n    <ion-label class=\"ion-text-wrap\">\r\n      <h1>{{item.username}}</h1>\r\n      <p>{{item.created_at | date}}</p>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ 60950:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/stores/stores.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list>\r\n<div *ngIf=\"category=='CERCA DE MI'  && nearToMe.length!=0\" > \r\n\r\n  <ng-container *ngFor=\"let store of nearToMe | filter:searchbarText:'label'\">\r\n\r\n    <ion-item class=\"estab_list_item\" \r\n      (click)=\" goMap(store,1)\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [defaultImage]=\"commonService.defaultImage2\" [lazyLoad]=\"store.img\">\r\n      </ion-avatar>\r\n      <ion-label class=\"ion-text-wrap\">\r\n        <h3 style=\"color: black;\">\r\n          {{store.Establecimiento |titlecase}}\r\n        </h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ng-container>\r\n</div>\r\n  \r\n\r\n\r\n  <ng-container *ngFor=\"let store of stores | filter:searchbarText:'label'\">\r\n    <!--searchBarText : valida que el search no este vacio, y searchBar =1 significa que el search esta activado-->\r\n\r\n    <ion-item class=\"estab_list_item\" *ngIf=\"store.type == category || searchBarText!='' && searchBar==1\"\r\n      (click)=\" goMap(store,0)\">\r\n      <!--\r\n        <ion-item class=\"estab_list_item\" *ngIf=\"store.type == category | | searchBarText!='' && searchBar==1\"\r\n      (click)=\"goToStore(store)\">-->\r\n      \r\n      <ion-avatar slot=\"start\">\r\n        <img [defaultImage]=\"commonService.defaultImage2\" [lazyLoad]=\"store.img\">\r\n      </ion-avatar>\r\n      <ion-label class=\"ion-text-wrap\">\r\n        <h3 style=\"color: black;\">\r\n          {{store.label |titlecase}}\r\n        </h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ng-container>\r\n</ion-list>");

/***/ }),

/***/ 84943:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/tab-products/tab-products.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tab-bar slot=\"bottom\" class=\"tabs-color\">\r\n  <ion-tab-button class=\"tabs-color\" (click)=\"call(detail.Telefono)\">\r\n      <ion-icon name=\"call\"></ion-icon>\r\n      <ion-label>Llamar</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button class=\"tabs-color\">\r\n    <!--<a href=\"https://wa.me/{{detail.Whatsapp}}\" class=\"tabs-color\" style=\"text-decoration: none;\">-->\r\n    <div (click)=\"whatsapp(detail.Whatsapp)\">\r\n      <!--<div>-->\r\n      <div>\r\n        <ion-icon name=\"logo-whatsapp\" style=\"width: 23px; height: 23px;\"></ion-icon>\r\n      </div>\r\n      <div>\r\n        <ion-label>Whatsapp</ion-label>\r\n      </div>\r\n    </div>\r\n\r\n    <!--</a>-->\r\n\r\n  </ion-tab-button>\r\n  <!--\r\n  <ion-tab-button class=\"tabs-color\">\r\n    <a href=\"mailto:{{detail.Correo}}\" class=\"tabs-color\" style=\"text-decoration: none;\">\r\n      <div>\r\n        <ion-icon name=\"mail\" style=\"width: 23px; height: 23px;\"></ion-icon>\r\n      </div>\r\n      <div>\r\n        <ion-label>Email</ion-label>\r\n      </div>\r\n    </a>\r\n  </ion-tab-button>\r\n-->\r\n\r\n  <ion-tab-button class=\"tabs-color\" style=\"text-decoration: none;\" (click)=\"goToProducts(detail.Id)\">\r\n    <ion-icon name=\"search\"></ion-icon>\r\n    <ion-label>Productos</ion-label>\r\n  </ion-tab-button>\r\n\r\n\r\n  <ion-tab-button class=\"tabs-color\" style=\"text-decoration: none;\" (click)=\"goToGPS(detail.Id)\">\r\n    <ion-icon name=\"locate\"></ion-icon>\r\n    <ion-label>Ubicacion</ion-label>\r\n  </ion-tab-button>\r\n\r\n</ion-tab-bar>");

/***/ }),

/***/ 39509:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user-info/user-info.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"background-color: #1A1A1A;\">\r\n  <ion-label class=\"ion-text-wrap\" style=\"background-color: #1A1A1A;\">\r\n    <div style=\"text-align: center; background-color: #1A1A1A; margin-top: 5%;\">\r\n\r\n      <img src=\"assets/images/logo_circle.png\" style=\"width:100px;height: 100px;\" alt=\"\">\r\n    </div>\r\n    <div class=\"center-text ion-padding\" style=\"color: white;\">\r\n      <h2 class=\"user_name\">{{ user}} </h2>\r\n\r\n     \r\n    </div>\r\n  </ion-label>\r\n</div>");

/***/ }),

/***/ 95675:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/webview-tab/webview-tab.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tab-bar slot=\"bottom\" class=\"tabs-color\" >\r\n  <ion-tab-button class=\"tabs-color\" (click)=\"getBack()\" style=\"display: flex;\">\r\n    <ion-label>REGRESAR</ion-label>\r\n  </ion-tab-button>\r\n</ion-tab-bar>\r\n");

/***/ }),

/***/ 76487:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/grid/grid.component.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div #expandWrapper>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col class=\"ion-align-self-center\" size-md=\"10\" size-lg=\"7\" size-xs=\"12\">\r\n        <ng-content></ng-content>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>");

/***/ }),

/***/ 37118:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/header-back/header-back.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/board/wallet\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title | translate| titlecase}r </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n");

/***/ }),

/***/ 15351:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/header/header.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"header\">\r\n      <div class=\"headerfix flex aic\">\r\n        <div class=\"menu\">\r\n          <div (click)=\"openFirst()\" class=\"icon flex center\">\r\n            <i class=\"fas fa-bars\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"title\">\r\n          {{title|titlecase}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>");

/***/ }),

/***/ 42045:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/sidebar-menu/sidebar-menu.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"background-color: #1A1A1A; height: 100%;\">\r\n  <ion-list lines=\"none\" style=\"background-color: #1A1A1A;\">\r\n      <app-user-info ></app-user-info>\r\n      <div *ngIf=\"this.user != ''\" class=\"ion-padding \" style=\"color: white;\">\r\n\r\n        <div class=\"ion-padding\" >\r\n          <div style=\"text-align: center;display: flex;\">\r\n            <div style=\"width: 33%;\">\r\n              <div style=\"display: flex;\">\r\n                <!--<mat-icon style=\"width: 20px;\">people</mat-icon>-->\r\n                <ion-icon name=\"person\" style=\"font-size: 24px;\"></ion-icon>\r\n                <ion-label style=\"margin: 0 auto;\">{{this.referralsQtty}}</ion-label>\r\n              </div>\r\n              <div style=\"text-align: center;\">\r\n                <ion-label style=\"font-size: 11px;\">Referidos</ion-label>\r\n              </div>\r\n              \r\n            </div>\r\n      \r\n            <div style=\"width: 33%;\">\r\n              <div style=\"display: flex; \">\r\n                <img src=\"assets/images/logo-axon-15.png\" style=\"width: 22px;\" alt=\"\">\r\n                <ion-label style=\"margin: 0 auto; color: white;\">{{ outstanding_points | number:'1.0-2' }}</ion-label>\r\n              </div>\r\n              <div>\r\n                <ion-label style=\"font-size: 11px;\">Pendientes</ion-label>\r\n              </div>\r\n            </div>\r\n      \r\n            <div style=\"width: 33%;\">\r\n              <div style=\"display: flex; \">\r\n      \r\n                <img src=\"assets/images/logo-axon-15.png\" style=\"width: 22px;\" alt=\"\">\r\n                <ion-label style=\"margin: 0 auto;\">{{available_points | number:'1.0-2'}}</ion-label>\r\n              </div>\r\n              <div>\r\n                <ion-label style=\"font-size: 11px;\">Disponibles</ion-label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n\r\n      \r\n\r\n    <ng-container *ngFor=\"let item of menuSidebar\" style=\"background-color: #1A1A1A;\">\r\n      <ion-item *ngIf=\"item.public && ((this.user != '')&&((item.name!='Mi Cuenta')))\" button (click)=\"_method(item)\"\r\n        style=\"background-color: #1A1A1A !important;\" class=\"item-background-color\">\r\n        <ion-label class=\"\" style=\"background-color: #1A1A1A;\">\r\n          <h4 >{{item.name | translate| titlecase}} </h4>\r\n        </ion-label>\r\n        <ion-badge slot=\"end\" *ngIf=\"item.isNew\" color=\"danger\">{{'NEW' | uppercase}}</ion-badge>\r\n      </ion-item>\r\n\r\n      <ion-item\r\n        *ngIf=\"item.public && ((this.user == '')&&((item.name!='Inbox')&&(item.name!='Recompensas')&&(item.name!='Cupones')&&(item.name!='Logout')&&(item.name!='Referidos')&&(item.name!='Mis Compras')&&(item.name!='Mis Transferencias')))\"\r\n        button (click)=\"_method(item)\"  class=\"item-background-color\">\r\n        <ion-label class=\"ion-text-wrap\">\r\n          <h4>{{item.name | translate| titlecase}}</h4>\r\n        </ion-label>\r\n        <ion-badge slot=\"end\" *ngIf=\"item.isNew\" color=\"danger\">{{'NEW' | uppercase}}</ion-badge>\r\n      </ion-item>\r\n\r\n    </ng-container>\r\n\r\n  </ion-list>\r\n\r\n  \r\n \r\n</div>");

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 32139,
	"./af.js": 32139,
	"./ar": 22600,
	"./ar-dz": 81001,
	"./ar-dz.js": 81001,
	"./ar-kw": 99842,
	"./ar-kw.js": 99842,
	"./ar-ly": 9826,
	"./ar-ly.js": 9826,
	"./ar-ma": 15452,
	"./ar-ma.js": 15452,
	"./ar-sa": 11802,
	"./ar-sa.js": 11802,
	"./ar-tn": 4094,
	"./ar-tn.js": 4094,
	"./ar.js": 22600,
	"./az": 96375,
	"./az.js": 96375,
	"./be": 2086,
	"./be.js": 2086,
	"./bg": 85236,
	"./bg.js": 85236,
	"./bm": 81704,
	"./bm.js": 81704,
	"./bn": 94506,
	"./bn-bd": 34466,
	"./bn-bd.js": 34466,
	"./bn.js": 94506,
	"./bo": 47891,
	"./bo.js": 47891,
	"./br": 93348,
	"./br.js": 93348,
	"./bs": 84848,
	"./bs.js": 84848,
	"./ca": 35928,
	"./ca.js": 35928,
	"./cs": 31839,
	"./cs.js": 31839,
	"./cv": 59151,
	"./cv.js": 59151,
	"./cy": 35761,
	"./cy.js": 35761,
	"./da": 56686,
	"./da.js": 56686,
	"./de": 85177,
	"./de-at": 2311,
	"./de-at.js": 2311,
	"./de-ch": 54407,
	"./de-ch.js": 54407,
	"./de.js": 85177,
	"./dv": 79729,
	"./dv.js": 79729,
	"./el": 60430,
	"./el.js": 60430,
	"./en-au": 28430,
	"./en-au.js": 28430,
	"./en-ca": 61139,
	"./en-ca.js": 61139,
	"./en-gb": 56747,
	"./en-gb.js": 56747,
	"./en-ie": 79466,
	"./en-ie.js": 79466,
	"./en-il": 52121,
	"./en-il.js": 52121,
	"./en-in": 41167,
	"./en-in.js": 41167,
	"./en-nz": 62030,
	"./en-nz.js": 62030,
	"./en-sg": 43646,
	"./en-sg.js": 43646,
	"./eo": 73126,
	"./eo.js": 73126,
	"./es": 38819,
	"./es-do": 69293,
	"./es-do.js": 69293,
	"./es-mx": 65304,
	"./es-mx.js": 65304,
	"./es-us": 66068,
	"./es-us.js": 66068,
	"./es.js": 38819,
	"./et": 23291,
	"./et.js": 23291,
	"./eu": 1400,
	"./eu.js": 1400,
	"./fa": 70043,
	"./fa.js": 70043,
	"./fi": 16138,
	"./fi.js": 16138,
	"./fil": 11466,
	"./fil.js": 11466,
	"./fo": 76803,
	"./fo.js": 76803,
	"./fr": 65523,
	"./fr-ca": 697,
	"./fr-ca.js": 697,
	"./fr-ch": 69001,
	"./fr-ch.js": 69001,
	"./fr.js": 65523,
	"./fy": 21116,
	"./fy.js": 21116,
	"./ga": 66151,
	"./ga.js": 66151,
	"./gd": 93094,
	"./gd.js": 93094,
	"./gl": 11279,
	"./gl.js": 11279,
	"./gom-deva": 64458,
	"./gom-deva.js": 64458,
	"./gom-latn": 66320,
	"./gom-latn.js": 66320,
	"./gu": 78658,
	"./gu.js": 78658,
	"./he": 52153,
	"./he.js": 52153,
	"./hi": 98732,
	"./hi.js": 98732,
	"./hr": 84960,
	"./hr.js": 84960,
	"./hu": 76339,
	"./hu.js": 76339,
	"./hy-am": 11862,
	"./hy-am.js": 11862,
	"./id": 71068,
	"./id.js": 71068,
	"./is": 61260,
	"./is.js": 61260,
	"./it": 1007,
	"./it-ch": 78063,
	"./it-ch.js": 78063,
	"./it.js": 1007,
	"./ja": 6854,
	"./ja.js": 6854,
	"./jv": 92390,
	"./jv.js": 92390,
	"./ka": 35958,
	"./ka.js": 35958,
	"./kk": 67216,
	"./kk.js": 67216,
	"./km": 61061,
	"./km.js": 61061,
	"./kn": 24060,
	"./kn.js": 24060,
	"./ko": 55216,
	"./ko.js": 55216,
	"./ku": 50894,
	"./ku.js": 50894,
	"./ky": 609,
	"./ky.js": 609,
	"./lb": 3591,
	"./lb.js": 3591,
	"./lo": 38381,
	"./lo.js": 38381,
	"./lt": 56118,
	"./lt.js": 56118,
	"./lv": 67889,
	"./lv.js": 67889,
	"./me": 94274,
	"./me.js": 94274,
	"./mi": 39226,
	"./mi.js": 39226,
	"./mk": 528,
	"./mk.js": 528,
	"./ml": 27938,
	"./ml.js": 27938,
	"./mn": 35456,
	"./mn.js": 35456,
	"./mr": 94393,
	"./mr.js": 94393,
	"./ms": 93647,
	"./ms-my": 33049,
	"./ms-my.js": 33049,
	"./ms.js": 93647,
	"./mt": 26097,
	"./mt.js": 26097,
	"./my": 66277,
	"./my.js": 66277,
	"./nb": 67245,
	"./nb.js": 67245,
	"./ne": 3988,
	"./ne.js": 3988,
	"./nl": 42557,
	"./nl-be": 20478,
	"./nl-be.js": 20478,
	"./nl.js": 42557,
	"./nn": 9046,
	"./nn.js": 9046,
	"./oc-lnc": 83131,
	"./oc-lnc.js": 83131,
	"./pa-in": 51731,
	"./pa-in.js": 51731,
	"./pl": 8409,
	"./pl.js": 8409,
	"./pt": 41178,
	"./pt-br": 56558,
	"./pt-br.js": 56558,
	"./pt.js": 41178,
	"./ro": 84138,
	"./ro.js": 84138,
	"./ru": 73380,
	"./ru.js": 73380,
	"./sd": 42889,
	"./sd.js": 42889,
	"./se": 22774,
	"./se.js": 22774,
	"./si": 53776,
	"./si.js": 53776,
	"./sk": 9597,
	"./sk.js": 9597,
	"./sl": 93871,
	"./sl.js": 93871,
	"./sq": 44228,
	"./sq.js": 44228,
	"./sr": 40774,
	"./sr-cyrl": 61928,
	"./sr-cyrl.js": 61928,
	"./sr.js": 40774,
	"./ss": 83176,
	"./ss.js": 83176,
	"./sv": 52422,
	"./sv.js": 52422,
	"./sw": 71621,
	"./sw.js": 71621,
	"./ta": 5731,
	"./ta.js": 5731,
	"./te": 18025,
	"./te.js": 18025,
	"./tet": 53934,
	"./tet.js": 53934,
	"./tg": 99958,
	"./tg.js": 99958,
	"./th": 84251,
	"./th.js": 84251,
	"./tk": 65494,
	"./tk.js": 65494,
	"./tl-ph": 38568,
	"./tl-ph.js": 38568,
	"./tlh": 73158,
	"./tlh.js": 73158,
	"./tr": 49574,
	"./tr.js": 49574,
	"./tzl": 64311,
	"./tzl.js": 64311,
	"./tzm": 99990,
	"./tzm-latn": 42380,
	"./tzm-latn.js": 42380,
	"./tzm.js": 99990,
	"./ug-cn": 52356,
	"./ug-cn.js": 52356,
	"./uk": 54934,
	"./uk.js": 54934,
	"./ur": 84515,
	"./ur.js": 84515,
	"./uz": 40058,
	"./uz-latn": 41875,
	"./uz-latn.js": 41875,
	"./uz.js": 40058,
	"./vi": 13325,
	"./vi.js": 13325,
	"./x-pseudo": 39208,
	"./x-pseudo.js": 39208,
	"./yo": 18742,
	"./yo.js": 18742,
	"./zh-cn": 42378,
	"./zh-cn.js": 42378,
	"./zh-hk": 21074,
	"./zh-hk.js": 21074,
	"./zh-mo": 74671,
	"./zh-mo.js": 74671,
	"./zh-tw": 20259,
	"./zh-tw.js": 20259
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 14679:
/*!*******************************************************************!*\
  !*** ./src/app/_alert/alert-confirm/alert-confirm.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".msj_alert {\n  width: 400px;\n  background-color: #323232;\n  border-radius: 20px;\n  padding: 30px;\n}\n\n@media (min-width: 320px) and (max-width: 768px) {\n  .msj_alert {\n    width: 98%;\n  }\n}\n\n.msj_alert .heade {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.msj_alert .msjal {\n  margin-bottom: 20px;\n}\n\n.msj_alert .bunt_acc .btn1 {\n  background-image: linear-gradient(270deg, #f3d38a 0, #edc57b 16.67%, #e4b469 33.33%, #d8a055 50%, #cc8c42 66.67%, #c37b33 83.33%, #bd6d28 100%);\n  padding: 10px;\n  width: 150px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n@media (min-width: 320px) and (max-width: 768px) {\n  .msj_alert .bunt_acc .btn1 {\n    width: 100px;\n    margin-bottom: 10px;\n    padding: 5px;\n  }\n}\n\n.msj_alert .bunt_acc .btn2 {\n  border: 1px solid #e4bd46;\n  background-image: none;\n  color: #e4bd46;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LWNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJO0lBQ0ksVUFBQTtFQUVOO0FBQ0Y7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksK0lBQUE7RUFVQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFRQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtFQUxOO0FBQ0Y7O0FBT0E7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUxKIiwiZmlsZSI6ImFsZXJ0LWNvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXNqX2FsZXJ0IHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm1zal9hbGVydCB7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgIH1cclxufVxyXG4ubXNqX2FsZXJ0IC5oZWFkZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tc2pfYWxlcnQgLm1zamFsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tc2pfYWxlcnQgLmJ1bnRfYWNjIC5idG4xIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgI2YzZDM4YSAwLFxyXG4gICAgICAgICNlZGM1N2IgMTYuNjclLFxyXG4gICAgICAgICNlNGI0NjkgMzMuMzMlLFxyXG4gICAgICAgICNkOGEwNTUgNTAlLFxyXG4gICAgICAgICNjYzhjNDIgNjYuNjclLFxyXG4gICAgICAgICNjMzdiMzMgODMuMzMlLFxyXG4gICAgICAgICNiZDZkMjggMTAwJVxyXG4gICAgKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5tc2pfYWxlcnQgLmJ1bnRfYWNjIC5idG4xIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLm1zal9hbGVydCAuYnVudF9hY2MgLmJ0bjIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U0YmQ0NjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBjb2xvcjogI2U0YmQ0NjtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 7279:
/*!***************************************************!*\
  !*** ./src/app/_alert/alert/alert.component.scss ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".msj_alert {\n  width: 400px;\n  background-color: #323232;\n  border-radius: 20px;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n@media (min-width: 320px) and (max-width: 768px) {\n  .msj_alert {\n    width: 98%;\n  }\n}\n\n.msj_alert .heade {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.msj_alert .msjal {\n  margin-bottom: 20px;\n}\n\n.msj_alert .bunt_acc .btn1 {\n  background-image: linear-gradient(270deg, #f3d38a 0, #edc57b 16.67%, #e4b469 33.33%, #d8a055 50%, #cc8c42 66.67%, #c37b33 83.33%, #bd6d28 100%);\n  padding: 10px;\n  width: 150px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n@media (min-width: 320px) and (max-width: 768px) {\n  .msj_alert .bunt_acc .btn1 {\n    width: 100px;\n    margin-bottom: 10px;\n    padding: auto;\n  }\n}\n\n.msj_alert .bunt_acc .btn2 {\n  border: 1px solid #e4bd46;\n  background-image: none;\n  color: #e4bd46;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJO0lBQ0ksVUFBQTtFQUVOO0FBQ0Y7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksK0lBQUE7RUFVQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFRQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtFQUxOO0FBQ0Y7O0FBT0E7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUxKIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1zal9hbGVydCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm1zal9hbGVydCB7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgIH1cclxufVxyXG4ubXNqX2FsZXJ0IC5oZWFkZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tc2pfYWxlcnQgLm1zamFsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tc2pfYWxlcnQgLmJ1bnRfYWNjIC5idG4xIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgI2YzZDM4YSAwLFxyXG4gICAgICAgICNlZGM1N2IgMTYuNjclLFxyXG4gICAgICAgICNlNGI0NjkgMzMuMzMlLFxyXG4gICAgICAgICNkOGEwNTUgNTAlLFxyXG4gICAgICAgICNjYzhjNDIgNjYuNjclLFxyXG4gICAgICAgICNjMzdiMzMgODMuMzMlLFxyXG4gICAgICAgICNiZDZkMjggMTAwJVxyXG4gICAgKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5tc2pfYWxlcnQgLmJ1bnRfYWNjIC5idG4xIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbi5tc2pfYWxlcnQgLmJ1bnRfYWNjIC5idG4yIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGJkNDY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgY29sb3I6ICNlNGJkNDY7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 64568:
/*!***************************************************************************!*\
  !*** ./src/app/components/comments-videos/comments-videos.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".active {\n  color: #CC9C61;\n  width: 100%;\n  text-align: center;\n  height: 100%;\n  padding-top: 1.2vh;\n  border-bottom: 1px solid #CC9C61;\n}\n\n.inactive {\n  color: #FCE19F;\n  width: 100%;\n  text-align: center;\n  height: 100%;\n  padding-top: 1.2vh;\n  border-bottom: 1px solid transparent;\n}\n\n.active-text {\n  color: #1A1A1A;\n}\n\n.inactive-text {\n  color: #f7cad6;\n}\n\n.padding-lateral {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLXZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGNBQUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQ0FBQTtBQUpKOztBQU9BO0VBR0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLG9DQUFBO0FBUEo7O0FBVUE7RUFDSSxjQUFBO0FBUEo7O0FBVUE7RUFDSSxjQUFBO0FBUEo7O0FBVUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBUEoiLCJmaWxlIjoiY29tbWVudHMtdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmMDE0NTQ7XHJcbiAgICAvL2NvbG9yOiAjZjAxNDU0O1xyXG4gICAgY29sb3I6ICNDQzlDNjE7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEuMnZoO1xyXG4gICAgLy9jb2xvcjogd2hpdGU7XHJcbiAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjAxNDU0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQzlDNjE7XHJcbn1cclxuXHJcbi5pbmFjdGl2ZSB7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmN2NhZDY7XHJcbiAgICAvL2NvbG9yOiAjZjdjYWQ2O1xyXG4gICAgY29sb3I6ICNGQ0UxOUYgO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMS4ydmg7XHJcbiAgICAvL2NvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmFjdGl2ZS10ZXh0e1xyXG4gICAgY29sb3I6ICMxQTFBMUE7XHJcbn1cclxuXHJcbi5pbmFjdGl2ZS10ZXh0e1xyXG4gICAgY29sb3I6ICNmN2NhZDY7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWxhdGVyYWx7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICB9XHJcbiJdfQ== */";

/***/ }),

/***/ 52972:
/*!***********************************************************!*\
  !*** ./src/app/components/gps-map/gps-map.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content #map {\n  width: 100%;\n  height: 60%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  display: block;\n}\nion-content #map.show-map {\n  opacity: 1;\n}\n#indicators {\n  padding: 16px;\n  height: 40%;\n  width: 100%;\n  overflow-y: auto;\n  display: block;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdwcy1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUFBTjtBQUNNO0VBQ0UsVUFBQTtBQUNSO0FBSUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoiZ3BzLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW9uLWNvbnRlbnQge1xyXG4gICAgI21hcCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgJi5zaG93LW1hcHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjaW5kaWNhdG9ycyB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9Il19 */";

/***/ }),

/***/ 70228:
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/* Transparent standard */\nion-toolbar {\n  --background: #1A1A1A;\n  --ion-color-base: transparent !important;\n}\n/* Show background if class is active */\n.show-background {\n  border-style: none;\n}\n/* Remove bottom border on md */\n.header-md::after {\n  background-image: none;\n}\n/* Remove bottom border on ios */\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n.logo-header {\n  height: 80%;\n  width: 80%;\n}\nion-back-button {\n  color: white;\n}\nion-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBQTtBQUNBO0VBRUkscUJBQUE7RUFDQSx3Q0FBQTtBQUFKO0FBSUEsdUNBQUE7QUFDQTtFQUNJLGtCQUFBO0FBREo7QUFJQSwrQkFBQTtBQUNBO0VBQ0ksc0JBQUE7QUFESjtBQUlBLGdDQUFBO0FBQ0E7RUFDSSxpQkFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQURKO0FBS0E7RUFDSSxZQUFBO0FBRko7QUFLQTtFQUNJLFlBQUE7QUFGSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUcmFuc3BhcmVudCBzdGFuZGFyZCAqL1xyXG5pb24tdG9vbGJhciB7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogIzY2MjU4MztcclxuICAgIC0tYmFja2dyb3VuZDogIzFBMUExQTtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLyogU2hvdyBiYWNrZ3JvdW5kIGlmIGNsYXNzIGlzIGFjdGl2ZSAqL1xyXG4uc2hvdy1iYWNrZ3JvdW5kIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gbWQgKi9cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gaW9zICovXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5sb2dvLWhlYWRlcntcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgLy8gbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgY29sb3I6d2hpdGVcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuIl19 */";

/***/ }),

/***/ 80670:
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.scss ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "agm-map {\n  height: 100%;\n  width: 100%;\n}\n\n.test-map {\n  height: 500px;\n  width: 100%;\n}\n\n.cntinfmp {\n  width: 180px;\n  height: 120px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 5px 5px 5px 10px;\n}\n\n.cntinfmp .header_cntmp {\n  text-align: center;\n}\n\n.cntinfmp .header_cntmp ion-card-title {\n  color: #CC9C61;\n  border-bottom: 1px solid #FCE19F;\n  font-size: 12px;\n}\n\n.cntinfmp .content_cntmp {\n  padding: 10px 0;\n  font-size: 12px;\n}\n\n.cntinfmp .footer_cntmap {\n  border: 0;\n}\n\n.modal-btn {\n  --color: var(--ion-color-light) !important;\n}\n\n.bg-button {\n  background-color: #CC9C61 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUVBLHlCQUFBO0FBREo7O0FBRUk7RUFDSSxrQkFBQTtBQUFSOztBQUNRO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUNaOztBQUVJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFBUjs7QUFFSTtFQUNJLFNBQUE7QUFBUjs7QUFJQTtFQUNJLDBDQUFBO0FBREo7O0FBSUU7RUFDRSxvQ0FBQTtBQURKIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXN0LW1hcCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNudGluZm1we1xyXG4gICAgLy93aWR0aDogMjQwcHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAvLyBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xyXG4gICAgLmhlYWRlcl9jbnRtcHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgICAgICAgICBjb2xvcjogI0NDOUM2MTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGQ0UxOUY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9jbnRtcHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9jbnRtYXB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubW9kYWwtYnRue1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJnLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQzlDNjEgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */";

/***/ }),

/***/ 34945:
/*!*****************************************************************************!*\
  !*** ./src/app/components/modal-calificate/modal-calificate.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".my-custom-class {\n  background-color: red;\n}\n\nion-icon:hover {\n  color: orange !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWNhbGlmaWNhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSiIsImZpbGUiOiJtb2RhbC1jYWxpZmljYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWN1c3RvbS1jbGFzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuaW9uLWljb246aG92ZXJ7XHJcbiAgICBjb2xvcjpvcmFuZ2UgIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ }),

/***/ 76604:
/*!*********************************************************************!*\
  !*** ./src/app/components/new-referral/new-referral.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".align-center {\n  text-align: center;\n}\n\n.button-style {\n  color: white;\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1yZWZlcnJhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJuZXctcmVmZXJyYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxpZ24tY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5idXR0b24tc3R5bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufSJdfQ== */";

/***/ }),

/***/ 95095:
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-img {\n  width: 40%;\n  height: 40%;\n  display: block;\n  margin: auto;\n  margin-top: 0;\n}\n\np {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWd7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICBtYXJnaW46IGF1dG87IFxyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxucHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 34459:
/*!*****************************************************************************!*\
  !*** ./src/app/components/popover-calendar/popover-calendar.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".align-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXItY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InBvcG92ZXItY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxpZ24tY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn0iXX0= */";

/***/ }),

/***/ 87399:
/*!***************************************************************!*\
  !*** ./src/app/components/searchbar/searchbar.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-toolbar {\n  --background: transparent !important;\n}\nion-toolbar ion-searchbar {\n  --border-radius: 10px;\n}\nion-button {\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 5px;\n  height: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0o7QUFBSTtFQUNJLHFCQUFBO0FBRVI7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6InNlYXJjaGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgaW9uLXNlYXJjaGJhcntcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7ICAgXHJcbiAgICB9XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG59Il19 */";

/***/ }),

/***/ 51230:
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-spinner {\n  transform: scale(2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6InNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc3Bpbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG59Il19 */";

/***/ }),

/***/ 89120:
/*!*********************************************************************!*\
  !*** ./src/app/components/store-videos/store-videos.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS12aWRlb3MuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 69153:
/*!*********************************************************!*\
  !*** ./src/app/components/stores/stores.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".estab_list_item {\n  width: 92%;\n  border-radius: 10px;\n  --background: rgba(255,255,255);\n  margin: 5px auto;\n}\n\n.list-ios,\nion-list {\n  --background: transparent !important;\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLFVBQUE7RUFDSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTs7RUFFSSxvQ0FBQTtFQUNBLGtDQUFBO0FBRUoiLCJmaWxlIjoic3RvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVzdGFiX2xpc3RfaXRlbXtcclxud2lkdGg6IDkyJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUpO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG4ubGlzdC1pb3MsXHJcbmlvbi1saXN0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 286:
/*!*********************************************************************!*\
  !*** ./src/app/components/tab-products/tab-products.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".tabs-color {\n  background-color: #1A1A1A;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InRhYi1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzLWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */";

/***/ }),

/***/ 57076:
/*!***************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".user_name {\n  margin-top: 10%;\n  font-weight: 600;\n  color: white;\n}\n\n.center-text {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUoiLCJmaWxlIjoidXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJfbmFtZXtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvL2NvbG9yOiAjQ0M5QzYxO1xyXG59XHJcblxyXG4uY2VudGVyLXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 69405:
/*!*******************************************************************!*\
  !*** ./src/app/components/webview-tab/webview-tab.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".tabs-color {\n  background-color: #1A1A1A;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnZpZXctdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoid2Vidmlldy10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicy1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */";

/***/ }),

/***/ 16304:
/*!*************************************************!*\
  !*** ./src/app/shared/grid/grid.component.scss ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 41551:
/*!***************************************************************!*\
  !*** ./src/app/shared/header-back/header-back.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-toolbar {\n  --background: transparent !important;\n  position: absolute;\n  top: 5px;\n  height: 40px;\n  --color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1iYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJoZWFkZXItYmFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7IFxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 87561:
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-header {\n  --background-color: transparent !important;\n  --ion-color-base: transparent !important;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: black;\n  position: absolute;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLDBDQUFBO0VBQ0Esd0NBQUE7QUFKSjs7QUFPQTtFQUNJLGdEQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQUpKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10b29sYmFyIGlvbi1oZWFkZXIge1xyXG4vLyAgICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gICAgIC8vIC0taW9uLXRvb2xiYXItdGV4dC1jb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 84450:
/*!*****************************************************************!*\
  !*** ./src/app/shared/sidebar-menu/sidebar-menu.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-label h4 {\n  color: white;\n  font-weight: 700;\n  margin-left: 10%;\n}\n\n.vers {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.referrals-columns {\n  display: flex;\n  color: #f01454;\n  margin-top: 5%;\n  font-weight: 600;\n  font-size: 80%;\n  padding-left: 10%;\n}\n\n.text-points {\n  text-align: left;\n  margin-top: 10%;\n  font-size: 12px;\n}\n\n.text-points-referrals {\n  font-size: 80%;\n  font-weight: 600;\n}\n\n.red-color {\n  color: red;\n}\n\n.green-color {\n  color: green;\n}\n\n.uni-color {\n  color: #CC9C61;\n}\n\n.footer-sidemenu {\n  padding-left: 5%;\n  display: flex;\n}\n\n.item-background-color {\n  --ion-item-background:#1A1A1A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUVJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRlI7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUZKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxVQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0FBSEo7O0FBTUE7RUFFSSxnQkFBQTtFQUNBLGFBQUE7QUFKSjs7QUFPQTtFQUNJLDZCQUFBO0FBSkoiLCJmaWxlIjoic2lkZWJhci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1sYWJlbHtcclxuICAgIGg0e1xyXG4gICAgICAgIC8vY29sb3I6ICNDQzlDNjE7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIH1cclxufVxyXG4udmVyc3tcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnJlZmVycmFscy1jb2x1bW5ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbG9yOiAjZjAxNDU0O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLnRleHQtcG9pbnRze1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcbi50ZXh0LXBvaW50cy1yZWZlcnJhbHN7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxufVxyXG5cclxuLnJlZC1jb2xvcntcclxuICAgIGNvbG9yOiByZWRcclxufVxyXG5cclxuLmdyZWVuLWNvbG9ye1xyXG4gICAgY29sb3I6IGdyZWVuXHJcbn1cclxuXHJcbi51bmktY29sb3J7XHJcbiAgICBjb2xvcjojQ0M5QzYxXHJcbn1cclxuXHJcbi5mb290ZXItc2lkZW1lbnV7XHJcbiAgICAvL21hcmdpbi10b3A6IDEwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaXRlbS1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiMxQTFBMUE7XHJcbn1cclxuIl19 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map