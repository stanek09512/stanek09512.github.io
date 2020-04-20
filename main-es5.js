function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/main-menu/main-menu.component */
    "./src/app/home/main-menu/main-menu.component.ts");
    /* harmony import */


    var _home_board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/board/board.component */
    "./src/app/home/board/board.component.ts");
    /* harmony import */


    var _home_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/settings/settings.component */
    "./src/app/home/settings/settings.component.ts"); //angular
    //components


    var routes = [{
      path: '',
      component: _home_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_2__["MainMenuComponent"]
    }, {
      path: 'board',
      component: _home_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]
    }, {
      path: 'settings',
      component: _home_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'wisielec';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container", "main-txt"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]],
      styles: [".main-txt[_ngcontent-%COMP%] {\n  color: #f3f3f3;\n  font-family: \"IM Fell DW Pica SC\", serif;\n  margin-bottom: 50px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #f3f3f3;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.color-red[_ngcontent-%COMP%] {\n  color: #cf0000;\n}\n\n.color-green[_ngcontent-%COMP%] {\n  color: #18cf00;\n}\n\n.color-yellow[_ngcontent-%COMP%] {\n  color: #e7e701e1;\n}\n\n.color-orange[_ngcontent-%COMP%] {\n  color: #f8a813e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXaXNpZWxlY1xcd2lzaWVsZWNSZXBvXFx3aXNpZWxlY1xcc3JjXFxhcHAvLi5cXHN0eWxlc1xcX3N0eWxlcy5zY3NzIiwiRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC8uLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0Esd0NDMkJNO0VEMUJOLG1CQUFBO0FFREo7O0FGSUE7RUFDSSxjQ1JHO0FDT1A7O0FGSUE7RUFDSSxjQ1ZJO0VEV0oscUJBQUE7RUFDQSxlQUFBO0FFREo7O0FGS0E7RUFDSSxjQ2RFO0FDWU47O0FGS0E7RUFDSSxjQ3BCSTtBQ2tCUjs7QUZLQTtFQUNJLGdCQ25CSztBQ2lCVDs7QUZLQTtFQUNJLGdCQ3RCSztBQ29CVCIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5tYWluLXR4dHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJGYtZmFtaWx5OyAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6ICRncmF5O1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy9jb2xvcnNcclxuLmNvbG9yLXJlZHtcclxuICAgIGNvbG9yOiAkcmVkO1xyXG59XHJcblxyXG4uY29sb3ItZ3JlZW57XHJcbiAgICBjb2xvcjogJGdyZWVuO1xyXG59XHJcblxyXG4uY29sb3IteWVsbG93e1xyXG4gICAgY29sb3I6ICR5ZWxsb3c7XHJcbn1cclxuXHJcbi5jb2xvci1vcmFuZ2V7XHJcbiAgICBjb2xvcjogJG9yYW5nZTtcclxufSIsIi8vY29sb3JzXHJcbiRncmF5OiAjYTNhM2EzO1xyXG4kZ3JheS1kYXJrOiAjNWU1ZTVlO1xyXG4kd2hpdGU6ICNmM2YzZjM7XHJcbiRncmVlbjogIzE4Y2YwMDtcclxuJGdyZWVuLWRhcms6ICMwZDZlMDA7XHJcbiRyZWQ6ICNjZjAwMDA7XHJcbiRyZWQtZGFyazogIzZlMDAwMDtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4keWVsbG93OiAjZTdlNzAxZTE7XHJcbiRvcmFuZ2U6ICNmOGE4MTNlMDtcclxuXHJcblxyXG4vL2ZvbnRzXHJcblxyXG4vL2ZvbnQtc2l6ZVxyXG4kZi1zaXplLXNtOiAxMHB4O1xyXG4kZi1zaXplLW1kOiAxNHB4O1xyXG4kZi1zaXplLW1iOiAyMHB4O1xyXG4kZi1zaXplLWJnOiAyMnB4O1xyXG4kZi1zaXplLWxnOiAyOHB4O1xyXG4kZi1zaXplLXhsOiAzMnB4O1xyXG4kZi1zaXplLXh4bDogNTBweDtcclxuXHJcbi8vZm9udC13ZWlnaHRcclxuJGYtd2VpZ2h0LTQwMDogNDAwO1xyXG4kZi13ZWlnaHQtNjAwOiA2MDA7XHJcbiRmLXdlaWdodC03MDA6IDcwMDtcclxuJGYtd2VpZ2h0LTgwMDogODAwO1xyXG5cclxuLy9mb250LWZhbWlseVxyXG4kZi1mYW1pbHk6J0lNIEZlbGwgRFcgUGljYSBTQycsIHNlcmlmO1xyXG5cclxuLy9zY3JlZW4gd2lkdGhcclxuJG1pbjogMHB4O1xyXG4kc206IDU0MHB4O1xyXG4kbWQ6IDcyMHB4O1xyXG4kbGc6IDk2MHB4O1xyXG4keGw6IDExNDBweDsiLCIubWFpbi10eHQge1xuICBjb2xvcjogI2YzZjNmMztcbiAgZm9udC1mYW1pbHk6IFwiSU0gRmVsbCBEVyBQaWNhIFNDXCIsIHNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5hIHtcbiAgY29sb3I6ICNhM2EzYTM7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogI2YzZjNmMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogI2NmMDAwMDtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6ICMxOGNmMDA7XG59XG5cbi5jb2xvci15ZWxsb3cge1xuICBjb2xvcjogI2U3ZTcwMWUxO1xufVxuXG4uY29sb3Itb3JhbmdlIHtcbiAgY29sb3I6ICNmOGE4MTNlMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _home_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/main-menu/main-menu.component */
    "./src/app/home/main-menu/main-menu.component.ts");
    /* harmony import */


    var _home_board_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/board/board.component */
    "./src/app/home/board/board.component.ts");
    /* harmony import */


    var _home_board_key_key_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/board/key/key.component */
    "./src/app/home/board/key/key.component.ts");
    /* harmony import */


    var _home_board_picture_picture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/board/picture/picture.component */
    "./src/app/home/board/picture/picture.component.ts");
    /* harmony import */


    var _home_board_dialog_result_dialog_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/board/dialog-result/dialog-result.component */
    "./src/app/home/board/dialog-result/dialog-result.component.ts");
    /* harmony import */


    var _home_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/settings/settings.component */
    "./src/app/home/settings/settings.component.ts");
    /* harmony import */


    var _home_board_password_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/board/password/password.component */
    "./src/app/home/board/password/password.component.ts");
    /* harmony import */


    var _home_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/nav-menu/nav-menu.component */
    "./src/app/home/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _home_board_score_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/board/score/score.component */
    "./src/app/home/board/score/score.component.ts");
    /* harmony import */


    var _home_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./home/loading/loading.component */
    "./src/app/home/loading/loading.component.ts");
    /* harmony import */


    var _home_board_name_dialog_name_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./home/board/name-dialog/name-dialog.component */
    "./src/app/home/board/name-dialog/name-dialog.component.ts");
    /* harmony import */


    var _home_board_timer_timer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./home/board/timer/timer.component */
    "./src/app/home/board/timer/timer.component.ts");
    /* harmony import */


    var _home_board_password_dialog_password_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./home/board/password-dialog/password-dialog.component */
    "./src/app/home/board/password-dialog/password-dialog.component.ts");
    /* harmony import */


    var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./home/footer/footer.component */
    "./src/app/home/footer/footer.component.ts");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! primeng/radiobutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-radiobutton.js");
    /* harmony import */


    var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! primeng/togglebutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-togglebutton.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts"); //angular
    //components
    //primeng
    //other


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_20__["DialogModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_21__["CheckboxModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__["ToggleButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _home_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenuComponent"], _home_board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"], _home_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_13__["NavMenuComponent"], _home_board_key_key_component__WEBPACK_IMPORTED_MODULE_8__["KeyComponent"], _home_board_password_password_component__WEBPACK_IMPORTED_MODULE_12__["PasswordComponent"], _home_board_picture_picture_component__WEBPACK_IMPORTED_MODULE_9__["PictureComponent"], _home_board_dialog_result_dialog_result_component__WEBPACK_IMPORTED_MODULE_10__["DialogResultComponent"], _home_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _home_board_score_score_component__WEBPACK_IMPORTED_MODULE_14__["ScoreComponent"], _home_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], _home_board_name_dialog_name_dialog_component__WEBPACK_IMPORTED_MODULE_16__["NameDialogComponent"], _home_board_timer_timer_component__WEBPACK_IMPORTED_MODULE_17__["TimerComponent"], _home_board_password_dialog_password_dialog_component__WEBPACK_IMPORTED_MODULE_18__["PasswordDialogComponent"], _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_20__["DialogModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_21__["CheckboxModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__["ToggleButtonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _home_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenuComponent"], _home_board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"], _home_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_13__["NavMenuComponent"], _home_board_key_key_component__WEBPACK_IMPORTED_MODULE_8__["KeyComponent"], _home_board_password_password_component__WEBPACK_IMPORTED_MODULE_12__["PasswordComponent"], _home_board_picture_picture_component__WEBPACK_IMPORTED_MODULE_9__["PictureComponent"], _home_board_dialog_result_dialog_result_component__WEBPACK_IMPORTED_MODULE_10__["DialogResultComponent"], _home_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _home_board_score_score_component__WEBPACK_IMPORTED_MODULE_14__["ScoreComponent"], _home_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], _home_board_name_dialog_name_dialog_component__WEBPACK_IMPORTED_MODULE_16__["NameDialogComponent"], _home_board_timer_timer_component__WEBPACK_IMPORTED_MODULE_17__["TimerComponent"], _home_board_password_dialog_password_dialog_component__WEBPACK_IMPORTED_MODULE_18__["PasswordDialogComponent"], _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_20__["DialogModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_21__["CheckboxModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__["ToggleButtonModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/board/board.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/board/board.component.ts ***!
    \***********************************************/

  /*! exports provided: BoardComponent */

  /***/
  function srcAppHomeBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
      return BoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_models_char_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/models/char.model */
    "./src/app/shared/models/char.model.ts");
    /* harmony import */


    var src_app_shared_models_player_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/models/player.model */
    "./src/app/shared/models/player.model.ts");
    /* harmony import */


    var src_app_shared_helpers_ParseToStringArr_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/helpers/ParseToStringArr-helper */
    "./src/app/shared/helpers/ParseToStringArr-helper.ts");
    /* harmony import */


    var src_app_shared_helpers_RandomIntInclusive_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/helpers/RandomIntInclusive-helper */
    "./src/app/shared/helpers/RandomIntInclusive-helper.ts");
    /* harmony import */


    var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/config.service */
    "./src/app/shared/services/config.service.ts");
    /* harmony import */


    var src_app_shared_services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/db.service */
    "./src/app/shared/services/db.service.ts");
    /* harmony import */


    var _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../loading/loading.component */
    "./src/app/home/loading/loading.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _picture_picture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./picture/picture.component */
    "./src/app/home/board/picture/picture.component.ts");
    /* harmony import */


    var _dialog_result_dialog_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dialog-result/dialog-result.component */
    "./src/app/home/board/dialog-result/dialog-result.component.ts");
    /* harmony import */


    var _name_dialog_name_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./name-dialog/name-dialog.component */
    "./src/app/home/board/name-dialog/name-dialog.component.ts");
    /* harmony import */


    var _password_dialog_password_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./password-dialog/password-dialog.component */
    "./src/app/home/board/password-dialog/password-dialog.component.ts");
    /* harmony import */


    var _score_score_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./score/score.component */
    "./src/app/home/board/score/score.component.ts");
    /* harmony import */


    var _timer_timer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./timer/timer.component */
    "./src/app/home/board/timer/timer.component.ts");
    /* harmony import */


    var _password_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./password/password.component */
    "./src/app/home/board/password/password.component.ts");
    /* harmony import */


    var _key_key_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./key/key.component */
    "./src/app/home/board/key/key.component.ts"); //angular
    //models
    //other


    function BoardComponent_div_2_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-timer", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stopTime", function BoardComponent_div_2_div_7_Template_app_timer_stopTime_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.stopTime($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stopTimer", ctx_r4.stopTimer)("startTimer", ctx_r4.startTime);
      }
    }

    function BoardComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-score", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("winner", function BoardComponent_div_2_Template_app_score_winner_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.setWinnerPlayer($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BoardComponent_div_2_div_7_Template, 2, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player1", ctx_r1.player1)("player2", ctx_r1.player2)("roundCount", ctx_r1.config.roundCount)("roundScore", ctx_r1.roundScore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gra: ", ctx_r1.playerPlaying, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.config.useTime);
      }
    }

    function BoardComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-password", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var char_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("char", char_r9);
      }
    }

    function BoardComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-key", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_10_Template_app_key_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var char_r11 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.selectChar(char_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var char_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("char", char_r11);
      }
    }

    var BoardComponent = /*#__PURE__*/function () {
      function BoardComponent(configService, dbService) {
        _classCallCheck(this, BoardComponent);

        this.configService = configService;
        this.dbService = dbService;
        this.isLoading = true;
        this.badTry = 0; //ilość złych prób wyboru znaku

        this.roundResult = null; //Czy graz grający przegrał czy wygrał runde

        this.gameResult = null; //który gracz wygrał całą rozgrywkę

        this.roundNr = 1;
        this.passwordArr = [];
        this.hidePasswordArr = [];
        this.startTime = null;
        this.stopTimer = false;
        this.player1 = new src_app_shared_models_player_model__WEBPACK_IMPORTED_MODULE_2__["PlayerModel"](1, "Player 1", true);
        this.player2 = new src_app_shared_models_player_model__WEBPACK_IMPORTED_MODULE_2__["PlayerModel"](2, "Player 2", false);
        this.player = null;
        this.keyboard = [];
      }

      _createClass(BoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.$res = this.configService._configData.subscribe(function (x) {
            _this.config = x;
          });
          this.initAlphabetObjArr();

          if (this.config.multiPlrGame) {
            this.player = this.player1;
          } else {
            this.generatePasswordForSinglePlayerGame();
          }

          setTimeout(function () {
            _this.isLoading = false;
          }, 500);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.$res) {
            this.$res.unsubscribe();
          }
        } //#region Init board

      }, {
        key: "generatePasswordForSinglePlayerGame",
        value: function generatePasswordForSinglePlayerGame() {
          if (this.config.onlyWord) {
            this.password = this.dbService.passwords[src_app_shared_helpers_RandomIntInclusive_helper__WEBPACK_IMPORTED_MODULE_4__["RandomIntInclusiveHelper"].getRandomIntInclusive(0, this.dbService.passwords.length - 1)];
          } else {
            this.password = this.dbService.sentences[src_app_shared_helpers_RandomIntInclusive_helper__WEBPACK_IMPORTED_MODULE_4__["RandomIntInclusiveHelper"].getRandomIntInclusive(0, this.dbService.sentences.length - 1)];
          }

          this.passwordArr = src_app_shared_helpers_ParseToStringArr_helper__WEBPACK_IMPORTED_MODULE_3__["ParseToStringArrHelper"].parseToStringArr(this.password);
          this.initHidePasswdArr();
        }
      }, {
        key: "initAlphabetObjArr",
        value: function initAlphabetObjArr() {
          this.keyboard = [];
          var alphabet = this.dbService.alphabet;

          for (var i = 0; i < alphabet.length; i++) {
            this.keyboard.push(new src_app_shared_models_char_model__WEBPACK_IMPORTED_MODULE_1__["CharModel"](i, alphabet[i], false, false));
          }
        }
      }, {
        key: "initHidePasswdArr",
        value: function initHidePasswdArr() {
          var _this2 = this;

          this.hidePasswordArr = [];
          this.passwordArr.forEach(function (x) {
            if (x === ' ') {
              _this2.hidePasswordArr.push('.'); //this.charOfHitCount++;

            } else {
              _this2.hidePasswordArr.push('-');
            }
          });
        } //#endregion

      }, {
        key: "passwordLength",
        value: function passwordLength(password) {
          var res = 0;

          for (var i = 0; i < password.length; i++) {
            if (password[i] !== ' ') {
              res++;
            }
          }

          return res;
        } //#region Keyboard

      }, {
        key: "selectChar",
        value: function selectChar(_char) {
          if (_char.selected) {
            //czy znak był już wybrany
            return false;
          }

          this.roundResult = null;
          var isInPasswd = false;

          for (var i = 0; i < this.passwordArr.length; i++) {
            //sprawdza czy znak jest w haśle i nadpisuje go na swoim miejscu w ukrytym haśle
            if (this.passwordArr[i] === _char["char"]) {
              this.hidePasswordArr[i] = _char["char"];
              isInPasswd = true;
            }
          }

          this.keyboard.find(function (x) {
            return x["char"] === _char["char"];
          }).selected = true;
          this.keyboard.find(function (x) {
            return x["char"] === _char["char"];
          }).isInPasswd = isInPasswd;

          if (isInPasswd) {
            if (this.nrOfStrikeCharInPassword === this.passwordLength(this.passwordArr)) {
              if (this.config.multiPlrGame) {
                if (this.roundNr < this.config.roundCount) {
                  this.roundResult = true;
                  this.setResultRoundMultiPlayerGame();
                } else {
                  if (this.player1.isPlaying) {
                    this.roundScore = 1;
                  }

                  if (this.player2.isPlaying) {
                    this.roundScore = 2;
                  }
                }

                this.stopTime(false);
              } else {
                this.roundResult = true;
                this.stopTime(false);
              }
            }
          } else {
            this.badTry++;

            if (this.badTry === 9) {
              if (!this.config.multiPlrGame) {
                this.roundResult = false;
              } else {
                if (this.roundNr < this.config.roundCount) {
                  this.roundResult = false;
                  this.setResultRoundMultiPlayerGame();
                } else {
                  if (this.player1.isPlaying) {
                    this.roundScore = 1;
                  }

                  if (this.player2.isPlaying) {
                    this.roundScore = 2;
                  }
                }

                this.stopTime(false);
              }
            }
          }
        } //#endregion

      }, {
        key: "setPassword",
        value: function setPassword(password) {
          this.password = password;
          this.passwordArr = src_app_shared_helpers_ParseToStringArr_helper__WEBPACK_IMPORTED_MODULE_3__["ParseToStringArrHelper"].parseToStringArr(this.password);
          this.initHidePasswdArr();
          this.playerChoosingPassword = null;
          this.startTimer();
        }
      }, {
        key: "setResultRoundMultiPlayerGame",
        value: function setResultRoundMultiPlayerGame() {
          if (this.player1.isPlaying) {
            this.roundScore = this.roundResult ? 1 : 2;
          }

          if (this.player2.isPlaying) {
            this.roundScore = this.roundResult ? 2 : 1;
          }
        } //#region plr-name dialog

      }, {
        key: "next",
        value: function next(player) {
          if (player.id === 1) {
            this.player1.name = player.name;
            this.player = this.player2;
          }

          if (player.id === 2) {
            this.player2.name = player.name;
            this.player = null;
            this.playerChoosingPassword = this.player1; //wyswietl wybieranie hasla
          }
        } //#endregion

      }, {
        key: "nextRound",
        value: function nextRound() {
          this.clearBoard();

          if (this.isMultiPlayerGame) {
            if (this.roundNr < this.config.roundCount) {
              this.choosePasswordForOpponent();
            }

            this.roundScore = null;
            this.changePlayerPlaying();
          } else {
            this.generatePasswordForSinglePlayerGame();
          }

          this.roundNr++;
        }
      }, {
        key: "choosePasswordForOpponent",
        value: function choosePasswordForOpponent() {
          if (this.player1.isPlaying) {
            this.playerChoosingPassword = this.player2; //wybiera haslo dla rpzeciwnika
          } else {
            this.playerChoosingPassword = this.player1; //wybiera haslo dla rpzeciwnika
          }
        }
      }, {
        key: "clearBoard",
        value: function clearBoard() {
          this.roundResult = null;
          this.badTry = 0;
          this.roundScore = null;
          this.initAlphabetObjArr();
          this.initHidePasswdArr();
        }
      }, {
        key: "changePlayerPlaying",
        value: function changePlayerPlaying() {
          this.player1.isPlaying = !this.player1.isPlaying;
          this.player2.isPlaying = !this.player2.isPlaying;
        }
      }, {
        key: "setWinnerPlayer",
        value: function setWinnerPlayer(player) {
          var _this3 = this;

          setTimeout(function () {
            _this3.gameResult = player;
          }, 1);
        } //#region Timer

      }, {
        key: "stopTime",
        value: function stopTime(endTime) {
          this.startTime = null;
          this.stopTimer = true;

          if (endTime) {
            if (this.roundNr < this.config.roundCount) {
              this.roundResult = false;
            }

            this.setResultRoundMultiPlayerGame();
          }
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          this.stopTimer = false;
          this.startTime = this.config.sec;
        } //#endregion

      }, {
        key: "playerPlaying",
        get: function get() {
          return this.player1.isPlaying ? this.player1.name : this.player2.name;
        }
      }, {
        key: "isMultiPlayerGame",
        get: function get() {
          return this.config.multiPlrGame;
        }
      }, {
        key: "nrOfStrikeCharInPassword",
        get: function get() {
          var res = this.hidePasswordArr.length;
          this.hidePasswordArr.forEach(function (x) {
            return x === "." || x === "-" ? res-- : res;
          });
          return res;
        }
      }]);

      return BoardComponent;
    }();

    BoardComponent.ɵfac = function BoardComponent_Factory(t) {
      return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]));
    };

    BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoardComponent,
      selectors: [["app-board"]],
      decls: 14,
      vars: 12,
      consts: [[3, "isLoading"], ["id", "board"], [4, "ngIf"], [1, "row"], [1, "col-12", "col-lg-6"], [3, "badTry"], ["id", "password-div", 1, "row", "justify-content-center"], ["class", "col-char", 4, "ngFor", "ngForOf"], ["id", "key", 1, "row", "justify-content-center"], ["class", "col-2 col-lg-1", 4, "ngFor", "ngForOf"], [3, "password", "isMultiPlayerGame", "gameResult", "roundResult", "nextRound"], [3, "player", "playerChange", "next"], [3, "onlyWord", "player", "setPassword"], [2, "width", "100%", 3, "player1", "player2", "roundCount", "roundScore", "winner"], [1, "col-9"], [1, "player-name-header"], ["class", "col-3", 4, "ngIf"], [1, "col-3"], [3, "stopTimer", "startTimer", "stopTime"], [1, "col-char"], [3, "char"], [1, "col-2", "col-lg-1"], [3, "char", "click"]],
      template: function BoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BoardComponent_div_2_Template, 8, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-picture", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BoardComponent_div_8_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BoardComponent_div_10_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-dialog-result", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nextRound", function BoardComponent_Template_app_dialog_result_nextRound_11_listener() {
            return ctx.nextRound();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-name-dialog", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("playerChange", function BoardComponent_Template_app_name_dialog_playerChange_12_listener($event) {
            return ctx.player = $event;
          })("next", function BoardComponent_Template_app_name_dialog_next_12_listener($event) {
            return ctx.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-password-dialog", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setPassword", function BoardComponent_Template_app_password_dialog_setPassword_13_listener($event) {
            return ctx.setPassword($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMultiPlayerGame);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("badTry", ctx.badTry);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hidePasswordArr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keyboard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("password", ctx.password)("isMultiPlayerGame", ctx.isMultiPlayerGame)("gameResult", ctx.gameResult)("roundResult", ctx.roundResult);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx.player);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("onlyWord", ctx.config.onlyWord)("player", ctx.playerChoosingPassword);
        }
      },
      directives: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _picture_picture_component__WEBPACK_IMPORTED_MODULE_9__["PictureComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _dialog_result_dialog_result_component__WEBPACK_IMPORTED_MODULE_10__["DialogResultComponent"], _name_dialog_name_dialog_component__WEBPACK_IMPORTED_MODULE_11__["NameDialogComponent"], _password_dialog_password_dialog_component__WEBPACK_IMPORTED_MODULE_12__["PasswordDialogComponent"], _score_score_component__WEBPACK_IMPORTED_MODULE_13__["ScoreComponent"], _timer_timer_component__WEBPACK_IMPORTED_MODULE_14__["TimerComponent"], _password_password_component__WEBPACK_IMPORTED_MODULE_15__["PasswordComponent"], _key_key_component__WEBPACK_IMPORTED_MODULE_16__["KeyComponent"]],
      styles: ["#key[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-left: 15%;\n}\n\n.player-name-header[_ngcontent-%COMP%] {\n  margin-top: 1%;\n}\n\n#password-div[_ngcontent-%COMP%] {\n  margin-top: 25%;\n}\n\n.col-char[_ngcontent-%COMP%] {\n  width: 4%;\n  margin: 10px;\n}\n\n@media screen and (min-width: 0px) and (max-width: 720px) {\n  #key[_ngcontent-%COMP%] {\n    margin-left: 10%;\n  }\n\n  #password-div[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 5%;\n  }\n\n  .col-char[_ngcontent-%COMP%] {\n    width: 5%;\n    margin: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYm9hcmQvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC9ob21lXFxib2FyZFxcYm9hcmQuY29tcG9uZW50LnNjc3MiLCJob21lL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxTQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSxnQkFBQTtFQ0ROOztFREdFO0lBQ0ksYUFBQTtJQUNBLGlCQUFBO0VDQU47O0VER0U7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoiaG9tZS9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ja2V5e1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbn1cclxuXHJcbi5wbGF5ZXItbmFtZS1oZWFkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuI3Bhc3N3b3JkLWRpdntcclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxufVxyXG5cclxuLmNvbC1jaGFye1xyXG4gICAgd2lkdGg6IDQlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1kKSB7XHJcbiAgICAja2V5e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcclxuICAgIH1cclxuICAgICNwYXNzd29yZC1kaXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLWNoYXJ7XHJcbiAgICAgICAgd2lkdGg6IDUlO1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgfVxyXG59IiwiI2tleSB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG59XG5cbi5wbGF5ZXItbmFtZS1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cblxuI3Bhc3N3b3JkLWRpdiB7XG4gIG1hcmdpbi10b3A6IDI1JTtcbn1cblxuLmNvbC1jaGFyIHtcbiAgd2lkdGg6IDQlO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICNrZXkge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIH1cblxuICAjcGFzc3dvcmQtZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICB9XG5cbiAgLmNvbC1jaGFyIHtcbiAgICB3aWR0aDogNSU7XG4gICAgbWFyZ2luOiAycHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-board',
          templateUrl: './board.component.html',
          styleUrls: ['./board.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }, {
          type: src_app_shared_services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/board/dialog-result/dialog-result.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/home/board/dialog-result/dialog-result.component.ts ***!
    \*********************************************************************/

  /*! exports provided: DialogResultComponent */

  /***/
  function srcAppHomeBoardDialogResultDialogResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogResultComponent", function () {
      return DialogResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //angular
    //other


    function DialogResultComponent_div_0_div_6_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The winner is - ", ctx_r20._gameResult.name, "");
      }
    }

    function DialogResultComponent_div_0_div_6_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21._gameResult.name);
      }
    }

    function DialogResultComponent_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogResultComponent_div_0_div_6_p_1_Template, 2, 1, "p", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogResultComponent_div_0_div_6_p_2_Template, 2, 1, "p", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Congratulations :)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16._gameResult.id !== 0 - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16._gameResult.id === 0 - 1);
      }
    }

    function DialogResultComponent_div_0_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Yes! You guessed the password! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r22.faLaughBeam);
      }
    }

    function DialogResultComponent_div_0_div_7_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ups.. You lost.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The password was:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r24.faSadTear);
      }
    }

    function DialogResultComponent_div_0_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogResultComponent_div_0_div_7_div_1_Template, 3, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogResultComponent_div_0_div_7_ng_template_2_Template, 5, 1, "ng-template", 12, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17._roundResult)("ngIfElse", _r23);
      }
    }

    function DialogResultComponent_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.password);
      }
    }

    function DialogResultComponent_div_0_div_10_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It's time for the opponent!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DialogResultComponent_div_0_div_10_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Next round!");
      }
    }

    function DialogResultComponent_div_0_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogResultComponent_div_0_div_10_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.onNextRound();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogResultComponent_div_0_div_10_span_3_Template, 2, 0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DialogResultComponent_div_0_div_10_ng_template_4_Template, 1, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.isMultiPlayerGame)("ngIfElse", _r26);
      }
    }

    var _c0 = function _c0() {
      return [""];
    };

    function DialogResultComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DialogResultComponent_div_0_div_6_Template, 5, 2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DialogResultComponent_div_0_div_7_Template, 4, 2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DialogResultComponent_div_0_div_8_Template, 3, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DialogResultComponent_div_0_div_10_Template, 6, 2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back to menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r15.faWindowClose)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r15._gameResult);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r15._gameResult);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r15._gameResult && !ctx_r15._roundResult);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r15._gameResult);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
      }
    }

    var DialogResultComponent = /*#__PURE__*/function () {
      function DialogResultComponent() {
        _classCallCheck(this, DialogResultComponent);

        //#region icons
        this.faWindowClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faWindowClose"];
        this.faSadTear = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSadTear"];
        this.faLaughBeam = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaughBeam"]; //#endregion

        this.display = false;
        this.nextRound = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(DialogResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNextRound",
        value: function onNextRound() {
          this.display = false;
          this.nextRound.emit(null);
        }
      }, {
        key: "roundResult",
        set: function set(val) {
          if (val === true || val === false) {
            this._roundResult = val;
            this.display = true;
          }
        }
      }, {
        key: "gameResult",
        set: function set(val) {
          if (!!val) {
            this._gameResult = val;
            this.display = true;
          }
        }
      }]);

      return DialogResultComponent;
    }();

    DialogResultComponent.ɵfac = function DialogResultComponent_Factory(t) {
      return new (t || DialogResultComponent)();
    };

    DialogResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogResultComponent,
      selectors: [["app-dialog-result"]],
      inputs: {
        password: "password",
        isMultiPlayerGame: "isMultiPlayerGame",
        roundResult: "roundResult",
        gameResult: "gameResult"
      },
      outputs: {
        nextRound: "nextRound"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "dialog"], [1, "dialog-main"], [1, "dialog-header", "text-right"], [1, "fa-lg", "suc-icon", "close-icon", 3, "icon", "routerLink"], ["id", "body"], ["id", "text", "class", "text-center", 4, "ngIf"], ["id", "password-div", "class", "text-center", 4, "ngIf"], [1, "text-center"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "routerLink"], ["id", "text", 1, "text-center"], ["class", "text-center", 4, "ngIf", "ngIfElse"], ["class", "text-center"], ["badResult", ""], ["id", "happy-icon", 1, "fa-5x", "suc-icon", 3, "icon"], ["id", "sad-icon", 1, "fa-5x", "suc-icon", 3, "icon"], ["id", "password-div", 1, "text-center"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [4, "ngIf", "ngIfElse"], ["singlePlayerBtn", ""]],
      template: function DialogResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogResultComponent_div_0_Template, 14, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".dialog[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n  position: absolute;\n  min-width: 400px;\n  width: 100%;\n  height: 100%;\n  padding-left: 30%;\n  padding-right: 30%;\n  padding-top: 10%;\n  font-size: 22px;\n  z-index: 10;\n}\n\n.dialog-main[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #a3a3a3;\n  background-color: #000000;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #a3a3a3;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.close-icon[_ngcontent-%COMP%]:hover {\n  color: #a3a3a3;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n  width: 30%;\n  margin: 10px;\n  font-size: 14px;\n}\n\ninput[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n  width: 70%;\n  background-color: #000000;\n  font-size: 22px;\n  margin: auto;\n  border: 1px solid #a3a3a3;\n}\n\n#error-alert[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n@media (max-width: 720px) {\n  .dialog[_ngcontent-%COMP%] {\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 25%;\n    min-width: 350px;\n    font-size: 14px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  input[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n\n#text[_ngcontent-%COMP%] {\n  padding: 10%;\n}\n\n#sad-icon[_ngcontent-%COMP%], #happy-icon[_ngcontent-%COMP%] {\n  color: #e7e701e1;\n  float: left;\n  padding-left: 15%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 5px;\n  font-size: 22px;\n}\n\n#password-div[_ngcontent-%COMP%] {\n  clear: both;\n  width: 100%;\n}\n\n@media (max-width: 720px) {\n  button[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  input[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYm9hcmQvZGlhbG9nLXJlc3VsdC9EOlxcV2lzaWVsZWNcXHdpc2llbGVjUmVwb1xcd2lzaWVsZWNcXHNyY1xcYXBwLy4uXFxzdHlsZXNcXF9kaWFsb2cuc2NzcyIsImhvbWUvYm9hcmQvZGlhbG9nLXJlc3VsdC9EOlxcV2lzaWVsZWNcXHdpc2llbGVjUmVwb1xcd2lzaWVsZWNcXHNyY1xcYXBwLy4uXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsImhvbWUvYm9hcmQvZGlhbG9nLXJlc3VsdC9kaWFsb2ctcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwiaG9tZS9ib2FyZC9kaWFsb2ctcmVzdWx0L0Q6XFxXaXNpZWxlY1xcd2lzaWVsZWNSZXBvXFx3aXNpZWxlY1xcc3JjXFxhcHAvaG9tZVxcYm9hcmRcXGRpYWxvZy1yZXN1bHRcXGRpYWxvZy1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVDT1E7RUROUixXQUFBO0FFREo7O0FGS0E7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJDYkk7QUNVUjs7QUZNQTtFQUNJLGdDQUFBO0FFSEo7O0FGTUE7RUFDSSxZQUFBO0FFSEo7O0FGTUE7RUFDSSxjQ2hDRztBQzZCUDs7QUZNQTtFQUNJLGNDcENHO0VEcUNILFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUN2QlE7QUNvQlo7O0FGTUE7RUFDSSxjQzNDRztFRDRDSCxVQUFBO0VBQ0EseUJDdENJO0VEdUNKLGVDNUJRO0VENkJSLFlBQUE7RUFDQSx5QkFBQTtBRUhKOztBRk1BO0VBQ0ksWUFBQTtBRUhKOztBRk1BO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVDN0NJO0VDMENWOztFRktFO0lBQ0ksZUNqREk7RUMrQ1Y7O0VGSUU7SUFDSSxlQ3BESTtFQ21EVjtBQUNGOztBQ2pFQTtFQUNJLFlBQUE7QURtRUo7O0FDaEVBO0VBQ0ksZ0JGQ0s7RUVBTCxXQUFBO0VBQ0EsaUJBQUE7QURtRUo7O0FDaEVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlRkdRO0FDZ0VaOztBQ2pFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FEb0VKOztBQ2pFQTtFQUNJO0lBQ0ksZUZUSTtFQzZFVjs7RUNsRUU7SUFDSSxlRlpJO0VDaUZWO0FBQ0YiLCJmaWxlIjoiaG9tZS9ib2FyZC9kaWFsb2ctcmVzdWx0L2RpYWxvZy1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5kaWFsb2d7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgZm9udC1zaXplOiAkZi1zaXplLWJnO1xyXG4gICAgei1pbmRleDogMTA7XHJcblxyXG59XHJcblxyXG4uZGlhbG9nLW1haW5cclxueyAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG59XHJcblxyXG4uZGlhbG9nLWhlYWRlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheTtcclxufVxyXG5cclxuLmNsb3NlLWljb257XHJcbiAgICBwYWRkaW5nOjVweDtcclxufVxyXG5cclxuLmNsb3NlLWljb246aG92ZXJ7XHJcbiAgICBjb2xvcjokZ3JheTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgY29sb3I6ICRncmF5O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogMTBweDsgIFxyXG4gICAgZm9udC1zaXplOiAkZi1zaXplLW1kO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGNvbG9yOiAkZ3JheTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICBmb250LXNpemU6ICRmLXNpemUtYmc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheTtcclxufVxyXG5cclxuI2Vycm9yLWFsZXJ0e1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJG1kKSB7XHJcbiAgICAuZGlhbG9neyAgIFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjUlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplLW1kO1xyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZS1zbTtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZS1zbTtcclxuICAgIH1cclxufSIsIi8vY29sb3JzXHJcbiRncmF5OiAjYTNhM2EzO1xyXG4kZ3JheS1kYXJrOiAjNWU1ZTVlO1xyXG4kd2hpdGU6ICNmM2YzZjM7XHJcbiRncmVlbjogIzE4Y2YwMDtcclxuJGdyZWVuLWRhcms6ICMwZDZlMDA7XHJcbiRyZWQ6ICNjZjAwMDA7XHJcbiRyZWQtZGFyazogIzZlMDAwMDtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4keWVsbG93OiAjZTdlNzAxZTE7XHJcbiRvcmFuZ2U6ICNmOGE4MTNlMDtcclxuXHJcblxyXG4vL2ZvbnRzXHJcblxyXG4vL2ZvbnQtc2l6ZVxyXG4kZi1zaXplLXNtOiAxMHB4O1xyXG4kZi1zaXplLW1kOiAxNHB4O1xyXG4kZi1zaXplLW1iOiAyMHB4O1xyXG4kZi1zaXplLWJnOiAyMnB4O1xyXG4kZi1zaXplLWxnOiAyOHB4O1xyXG4kZi1zaXplLXhsOiAzMnB4O1xyXG4kZi1zaXplLXh4bDogNTBweDtcclxuXHJcbi8vZm9udC13ZWlnaHRcclxuJGYtd2VpZ2h0LTQwMDogNDAwO1xyXG4kZi13ZWlnaHQtNjAwOiA2MDA7XHJcbiRmLXdlaWdodC03MDA6IDcwMDtcclxuJGYtd2VpZ2h0LTgwMDogODAwO1xyXG5cclxuLy9mb250LWZhbWlseVxyXG4kZi1mYW1pbHk6J0lNIEZlbGwgRFcgUGljYSBTQycsIHNlcmlmO1xyXG5cclxuLy9zY3JlZW4gd2lkdGhcclxuJG1pbjogMHB4O1xyXG4kc206IDU0MHB4O1xyXG4kbWQ6IDcyMHB4O1xyXG4kbGc6IDk2MHB4O1xyXG4keGw6IDExNDBweDsiLCIuZGlhbG9nIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xuICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5kaWFsb2ctbWFpbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpYWxvZy1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2EzYTNhMztcbn1cblxuLmNsb3NlLWljb24ge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jbG9zZS1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNhM2EzYTM7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiAjYTNhM2EzO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW5wdXQge1xuICBjb2xvcjogI2EzYTNhMztcbiAgd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XG59XG5cbiNlcnJvci1hbGVydCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5kaWFsb2cge1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBwYWRkaW5nLXRvcDogMjUlO1xuICAgIG1pbi13aWR0aDogMzUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG4jdGV4dCB7XG4gIHBhZGRpbmc6IDEwJTtcbn1cblxuI3NhZC1pY29uLCAjaGFwcHktaWNvbiB7XG4gIGNvbG9yOiAjZTdlNzAxZTE7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE1JTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuI3Bhc3N3b3JkLWRpdiB7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9kaWFsb2cnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbiN0ZXh0e1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG59XHJcblxyXG4jc2FkLWljb24sICNoYXBweS1pY29ue1xyXG4gICAgY29sb3I6ICR5ZWxsb3c7ICBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDVweDsgIFxyXG4gICAgZm9udC1zaXplOiAkZi1zaXplLWJnO1xyXG59XHJcbiNwYXNzd29yZC1kaXZ7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJG1kKSB7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplLXNtO1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplLXNtO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-result',
          templateUrl: './dialog-result.component.html',
          styleUrls: ['./dialog-result.component.scss']
        }]
      }], function () {
        return [];
      }, {
        password: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isMultiPlayerGame: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roundResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gameResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextRound: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/board/key/key.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/board/key/key.component.ts ***!
    \*************************************************/

  /*! exports provided: KeyComponent */

  /***/
  function srcAppHomeBoardKeyKeyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyComponent", function () {
      return KeyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); //angular


    var KeyComponent = /*#__PURE__*/function () {
      function KeyComponent() {
        _classCallCheck(this, KeyComponent);
      }

      _createClass(KeyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "char",
        set: function set(val) {
          this._char = val;
        }
      }]);

      return KeyComponent;
    }();

    KeyComponent.ɵfac = function KeyComponent_Factory(t) {
      return new (t || KeyComponent)();
    };

    KeyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KeyComponent,
      selectors: [["app-key"]],
      inputs: {
        "char": "char"
      },
      decls: 2,
      vars: 7,
      consts: [[1, "text-center", "char"]],
      template: function KeyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("not-select", !ctx._char.selected)("strike", ctx._char.selected && ctx._char.isInPasswd)("missed", ctx._char.selected && !ctx._char.isInPasswd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._char["char"], "\n");
        }
      },
      styles: [".char[_ngcontent-%COMP%] {\n  font-size: 32px;\n  border: 3px solid #a3a3a3;\n  border-radius: 10px;\n  height: 50px;\n  width: 50px;\n  color: #a3a3a3;\n  margin: 5px;\n  box-shadow: 0px 10px 13px -7px #5e5e5e, 4px 3px 3px 1px #5e5e5e;\n}\n\n.char[_ngcontent-%COMP%]:active {\n  transition: 0.5s;\n  box-shadow: 0px 10px 13px -7px #5e5e5e, 4px 3px 0px -5px #5e5e5e;\n}\n\n.not-select[_ngcontent-%COMP%]:hover {\n  border-color: #f3f3f3;\n  color: #f3f3f3;\n  cursor: pointer;\n}\n\n.strike[_ngcontent-%COMP%] {\n  border-color: #18cf00;\n  background-color: #0d6e00;\n  color: #18cf00;\n  cursor: default;\n  transition: 0.3s;\n  box-shadow: 0px 10px 13px -7px #5e5e5e, 2px 1px 0px -5px #5e5e5e;\n}\n\n.missed[_ngcontent-%COMP%] {\n  border-color: #cf0000;\n  background-color: #6e0000;\n  color: #cf0000;\n  cursor: default;\n  transition: 0.3s;\n  box-shadow: 0px 10px 13px -7px #5e5e5e, 2px 1px 0px -5px #5e5e5e;\n}\n\n@media screen and (min-width: 0px) and (max-width: 720px) {\n  .char[_ngcontent-%COMP%] {\n    font-size: 20px;\n    border-width: 2px;\n    height: 30px;\n    width: 30px;\n    margin: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYm9hcmQva2V5L0Q6XFxXaXNpZWxlY1xcd2lzaWVsZWNSZXBvXFx3aXNpZWxlY1xcc3JjXFxhcHAvaG9tZVxcYm9hcmRcXGtleVxca2V5LmNvbXBvbmVudC5zY3NzIiwiaG9tZS9ib2FyZC9rZXkvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC8uLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJob21lL2JvYXJkL2tleS9rZXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQ2tCUTtFRGpCUix5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQ1BHO0VEUUgsV0FBQTtFQUNBLCtEQUFBO0FFREo7O0FGR0E7RUFDSSxnQkFBQTtFQUNBLGdFQUFBO0FFQUo7O0FGRUE7RUFDSSxxQkNkSTtFRGVKLGNDZkk7RURnQkosZUFBQTtBRUNKOztBRkVBO0VBQ0kscUJDbkJJO0VEb0JKLHlCQ25CUztFRG9CVCxjQ3JCSTtFRHNCSixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRUFBQTtBRUNKOztBRkVBO0VBQ0kscUJDMUJFO0VEMkJGLHlCQzFCTztFRDJCUCxjQzVCRTtFRDZCRixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRUFBQTtBRUNKOztBRkVBO0VBQ0k7SUFDSSxlQ3hCSTtJRHlCSixpQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFRUNOO0FBQ0YiLCJmaWxlIjoiaG9tZS9ib2FyZC9rZXkva2V5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5jaGFye1xyXG4gICAgZm9udC1zaXplOiAkZi1zaXplLXhsO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgJGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBjb2xvcjogJGdyYXk7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTdweCAkZ3JheS1kYXJrLCA0cHggM3B4IDNweCAxcHggJGdyYXktZGFyaztcclxufVxyXG4uY2hhcjphY3RpdmV7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtN3B4ICRncmF5LWRhcmssIDRweCAzcHggMHB4IC01cHggJGdyYXktZGFyaztcclxufVxyXG4ubm90LXNlbGVjdDpob3ZlcntcclxuICAgIGJvcmRlci1jb2xvcjogJHdoaXRlO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN0cmlrZXtcclxuICAgIGJvcmRlci1jb2xvcjogJGdyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWRhcms7XHJcbiAgICBjb2xvcjogJGdyZWVuO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTdweCAkZ3JheS1kYXJrLCAycHggMXB4IDBweCAtNXB4ICRncmF5LWRhcms7XHJcbn1cclxuXHJcbi5taXNzZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICRyZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWRhcms7XHJcbiAgICBjb2xvcjogJHJlZDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC03cHggJGdyYXktZGFyaywgMnB4IDFweCAwcHggLTVweCAkZ3JheS1kYXJrO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1kKSB7XHJcbiAgICAuY2hhcntcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemUtbWI7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vY29sb3JzXHJcbiRncmF5OiAjYTNhM2EzO1xyXG4kZ3JheS1kYXJrOiAjNWU1ZTVlO1xyXG4kd2hpdGU6ICNmM2YzZjM7XHJcbiRncmVlbjogIzE4Y2YwMDtcclxuJGdyZWVuLWRhcms6ICMwZDZlMDA7XHJcbiRyZWQ6ICNjZjAwMDA7XHJcbiRyZWQtZGFyazogIzZlMDAwMDtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4keWVsbG93OiAjZTdlNzAxZTE7XHJcbiRvcmFuZ2U6ICNmOGE4MTNlMDtcclxuXHJcblxyXG4vL2ZvbnRzXHJcblxyXG4vL2ZvbnQtc2l6ZVxyXG4kZi1zaXplLXNtOiAxMHB4O1xyXG4kZi1zaXplLW1kOiAxNHB4O1xyXG4kZi1zaXplLW1iOiAyMHB4O1xyXG4kZi1zaXplLWJnOiAyMnB4O1xyXG4kZi1zaXplLWxnOiAyOHB4O1xyXG4kZi1zaXplLXhsOiAzMnB4O1xyXG4kZi1zaXplLXh4bDogNTBweDtcclxuXHJcbi8vZm9udC13ZWlnaHRcclxuJGYtd2VpZ2h0LTQwMDogNDAwO1xyXG4kZi13ZWlnaHQtNjAwOiA2MDA7XHJcbiRmLXdlaWdodC03MDA6IDcwMDtcclxuJGYtd2VpZ2h0LTgwMDogODAwO1xyXG5cclxuLy9mb250LWZhbWlseVxyXG4kZi1mYW1pbHk6J0lNIEZlbGwgRFcgUGljYSBTQycsIHNlcmlmO1xyXG5cclxuLy9zY3JlZW4gd2lkdGhcclxuJG1pbjogMHB4O1xyXG4kc206IDU0MHB4O1xyXG4kbWQ6IDcyMHB4O1xyXG4kbGc6IDk2MHB4O1xyXG4keGw6IDExNDBweDsiLCIuY2hhciB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2EzYTNhMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgY29sb3I6ICNhM2EzYTM7XG4gIG1hcmdpbjogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC03cHggIzVlNWU1ZSwgNHB4IDNweCAzcHggMXB4ICM1ZTVlNWU7XG59XG5cbi5jaGFyOmFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTdweCAjNWU1ZTVlLCA0cHggM3B4IDBweCAtNXB4ICM1ZTVlNWU7XG59XG5cbi5ub3Qtc2VsZWN0OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjNmM2YzO1xuICBjb2xvcjogI2YzZjNmMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3RyaWtlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMThjZjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZTAwO1xuICBjb2xvcjogIzE4Y2YwMDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC03cHggIzVlNWU1ZSwgMnB4IDFweCAwcHggLTVweCAjNWU1ZTVlO1xufVxuXG4ubWlzc2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2YwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmUwMDAwO1xuICBjb2xvcjogI2NmMDAwMDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC03cHggIzVlNWU1ZSwgMnB4IDFweCAwcHggLTVweCAjNWU1ZTVlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuY2hhciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW46IDNweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-key',
          templateUrl: './key.component.html',
          styleUrls: ['./key.component.scss']
        }]
      }], function () {
        return [];
      }, {
        "char": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/board/name-dialog/name-dialog.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/home/board/name-dialog/name-dialog.component.ts ***!
    \*****************************************************************/

  /*! exports provided: NameDialogComponent */

  /***/
  function srcAppHomeBoardNameDialogNameDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NameDialogComponent", function () {
      return NameDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); //angular
    //other


    function NameDialogComponent_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Incorrect data. :( ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NameDialogComponent_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter the first player's name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NameDialogComponent_div_0_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Enter the second player's name: ");
      }
    }

    var _c0 = function _c0() {
      return [""];
    };

    function NameDialogComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NameDialogComponent_div_0_div_6_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NameDialogComponent_div_0_div_8_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NameDialogComponent_div_0_ng_template_9_Template, 1, 0, "ng-template", 9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NameDialogComponent_div_0_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53._player.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NameDialogComponent_div_0_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.onNext();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r48.faWindowClose)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48._player.id === 1)("ngIfElse", _r51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r48._player.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r48.error);
      }
    }

    var NameDialogComponent = /*#__PURE__*/function () {
      function NameDialogComponent() {
        _classCallCheck(this, NameDialogComponent);

        //#region icons
        this.faWindowClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faWindowClose"]; //#endregion

        this.display = false;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NameDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNext",
        value: function onNext() {
          this.display = false;
          this.next.emit(this._player);
        }
      }, {
        key: "player",
        set: function set(val) {
          if (!!val) {
            this._player = val;
            this.display = true;
          }
        }
      }, {
        key: "error",
        get: function get() {
          return this._player.name.length < 2;
        }
      }]);

      return NameDialogComponent;
    }();

    NameDialogComponent.ɵfac = function NameDialogComponent_Factory(t) {
      return new (t || NameDialogComponent)();
    };

    NameDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NameDialogComponent,
      selectors: [["app-name-dialog"]],
      inputs: {
        player: "player"
      },
      outputs: {
        next: "next"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "dialog"], [1, "dialog-main"], [1, "dialog-header", "text-right"], [1, "fa-lg", "suc-icon", "close-icon", 3, "icon", "routerLink"], ["id", "body"], ["id", "error-alert", "class", "alert alert-secondary", "role", "alert", 4, "ngIf"], ["id", "text", 1, "text-center"], ["class", "text-center", 4, "ngIf", "ngIfElse"], ["class", "text-center"], ["plr2", ""], ["id", "plr1Name", "minlength", "2", "maxlength", "10", "placeholder", "Player name...", 1, "form-control", "text-center", 3, "ngModel", "ngModelChange"], [1, "text-right"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], ["id", "error-alert", "role", "alert", 1, "alert", "alert-secondary"], [1, "text-center"]],
      template: function NameDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NameDialogComponent_div_0_Template, 17, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: [".dialog[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n  position: absolute;\n  min-width: 400px;\n  width: 100%;\n  height: 100%;\n  padding-left: 30%;\n  padding-right: 30%;\n  padding-top: 10%;\n  font-size: 22px;\n  z-index: 10;\n}\n\n.dialog-main[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #a3a3a3;\n  background-color: #000000;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #a3a3a3;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.close-icon[_ngcontent-%COMP%]:hover {\n  color: #a3a3a3;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n  width: 30%;\n  margin: 10px;\n  font-size: 14px;\n}\n\ninput[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n  width: 70%;\n  background-color: #000000;\n  font-size: 22px;\n  margin: auto;\n  border: 1px solid #a3a3a3;\n}\n\n#error-alert[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n@media (max-width: 720px) {\n  .dialog[_ngcontent-%COMP%] {\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 25%;\n    min-width: 350px;\n    font-size: 14px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  input[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n\n#text[_ngcontent-%COMP%] {\n  padding: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYm9hcmQvbmFtZS1kaWFsb2cvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC8uLlxcc3R5bGVzXFxfZGlhbG9nLnNjc3MiLCJob21lL2JvYXJkL25hbWUtZGlhbG9nL0Q6XFxXaXNpZWxlY1xcd2lzaWVsZWNSZXBvXFx3aXNpZWxlY1xcc3JjXFxhcHAvLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwiaG9tZS9ib2FyZC9uYW1lLWRpYWxvZy9uYW1lLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsImhvbWUvYm9hcmQvbmFtZS1kaWFsb2cvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC9ob21lXFxib2FyZFxcbmFtZS1kaWFsb2dcXG5hbWUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksT0FBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQ09RO0VETlIsV0FBQTtBRURKOztBRktBO0VBRUksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQ2JJO0FDVVI7O0FGTUE7RUFDSSxnQ0FBQTtBRUhKOztBRk1BO0VBQ0ksWUFBQTtBRUhKOztBRk1BO0VBQ0ksY0NoQ0c7QUM2QlA7O0FGTUE7RUFDSSxjQ3BDRztFRHFDSCxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVDdkJRO0FDb0JaOztBRk1BO0VBQ0ksY0MzQ0c7RUQ0Q0gsVUFBQTtFQUNBLHlCQ3RDSTtFRHVDSixlQzVCUTtFRDZCUixZQUFBO0VBQ0EseUJBQUE7QUVISjs7QUZNQTtFQUNJLFlBQUE7QUVISjs7QUZNQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQzdDSTtFQzBDVjs7RUZLRTtJQUNJLGVDakRJO0VDK0NWOztFRklFO0lBQ0ksZUNwREk7RUNtRFY7QUFDRjs7QUNsRUE7RUFDSSxZQUFBO0FEb0VKIiwiZmlsZSI6ImhvbWUvYm9hcmQvbmFtZS1kaWFsb2cvbmFtZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5kaWFsb2d7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgZm9udC1zaXplOiAkZi1zaXplLWJnO1xyXG4gICAgei1pbmRleDogMTA7XHJcblxyXG59XHJcblxyXG4uZGlhbG9nLW1haW5cclxueyAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG59XHJcblxyXG4uZGlhbG9nLWhlYWRlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheTtcclxufVxyXG5cclxuLmNsb3NlLWljb257XHJcbiAgICBwYWRkaW5nOjVweDtcclxufVxyXG5cclxuLmNsb3NlLWljb246aG92ZXJ7XHJcbiAgICBjb2xvcjokZ3JheTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgY29sb3I6ICRncmF5O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogMTBweDsgIFxyXG4gICAgZm9udC1zaXplOiAkZi1zaXplLW1kO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGNvbG9yOiAkZ3JheTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICBmb250LXNpemU6ICRmLXNpemUtYmc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheTtcclxufVxyXG5cclxuI2Vycm9yLWFsZXJ0e1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJG1kKSB7XHJcbiAgICAuZGlhbG9neyAgIFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjUlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplLW1kO1xyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZS1zbTtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZS1zbTtcclxuICAgIH1cclxufSIsIi8vY29sb3JzXHJcbiRncmF5OiAjYTNhM2EzO1xyXG4kZ3JheS1kYXJrOiAjNWU1ZTVlO1xyXG4kd2hpdGU6ICNmM2YzZjM7XHJcbiRncmVlbjogIzE4Y2YwMDtcclxuJGdyZWVuLWRhcms6ICMwZDZlMDA7XHJcbiRyZWQ6ICNjZjAwMDA7XHJcbiRyZWQtZGFyazogIzZlMDAwMDtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4keWVsbG93OiAjZTdlNzAxZTE7XHJcbiRvcmFuZ2U6ICNmOGE4MTNlMDtcclxuXHJcblxyXG4vL2ZvbnRzXHJcblxyXG4vL2ZvbnQtc2l6ZVxyXG4kZi1zaXplLXNtOiAxMHB4O1xyXG4kZi1zaXplLW1kOiAxNHB4O1xyXG4kZi1zaXplLW1iOiAyMHB4O1xyXG4kZi1zaXplLWJnOiAyMnB4O1xyXG4kZi1zaXplLWxnOiAyOHB4O1xyXG4kZi1zaXplLXhsOiAzMnB4O1xyXG4kZi1zaXplLXh4bDogNTBweDtcclxuXHJcbi8vZm9udC13ZWlnaHRcclxuJGYtd2VpZ2h0LTQwMDogNDAwO1xyXG4kZi13ZWlnaHQtNjAwOiA2MDA7XHJcbiRmLXdlaWdodC03MDA6IDcwMDtcclxuJGYtd2VpZ2h0LTgwMDogODAwO1xyXG5cclxuLy9mb250LWZhbWlseVxyXG4kZi1mYW1pbHk6J0lNIEZlbGwgRFcgUGljYSBTQycsIHNlcmlmO1xyXG5cclxuLy9zY3JlZW4gd2lkdGhcclxuJG1pbjogMHB4O1xyXG4kc206IDU0MHB4O1xyXG4kbWQ6IDcyMHB4O1xyXG4kbGc6IDk2MHB4O1xyXG4keGw6IDExNDBweDsiLCIuZGlhbG9nIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xuICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5kaWFsb2ctbWFpbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpYWxvZy1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2EzYTNhMztcbn1cblxuLmNsb3NlLWljb24ge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jbG9zZS1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNhM2EzYTM7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiAjYTNhM2EzO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW5wdXQge1xuICBjb2xvcjogI2EzYTNhMztcbiAgd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XG59XG5cbiNlcnJvci1hbGVydCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5kaWFsb2cge1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBwYWRkaW5nLXRvcDogMjUlO1xuICAgIG1pbi13aWR0aDogMzUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG4jdGV4dCB7XG4gIHBhZGRpbmc6IDEwJTtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvZGlhbG9nJztcclxuXHJcbiN0ZXh0e1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NameDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-name-dialog',
          templateUrl: './name-dialog.component.html',
          styleUrls: ['./name-dialog.component.scss']
        }]
      }], function () {
        return [];
      }, {
        player: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        next: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/board/password-dialog/password-dialog.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/home/board/password-dialog/password-dialog.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PasswordDialogComponent */

  /***/
  function srcAppHomeBoardPasswordDialogPasswordDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordDialogComponent", function () {
      return PasswordDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); //angular
    //other


    function PasswordDialogComponent_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r58.error, " ");
      }
    }

    function PasswordDialogComponent_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter the password for the first player: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PasswordDialogComponent_div_0_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Enter the password for the second player: ");
      }
    }

    var _c0 = function _c0() {
      return [""];
    };

    function PasswordDialogComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PasswordDialogComponent_div_0_div_6_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PasswordDialogComponent_div_0_div_8_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PasswordDialogComponent_div_0_ng_template_9_Template, 1, 0, "ng-template", 9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PasswordDialogComponent_div_0_Template_input_keyup_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r63.errorAlert = "";
        })("ngModelChange", function PasswordDialogComponent_div_0_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r65.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordDialogComponent_div_0_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r57.faWindowClose)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r57.error && _r62.dirty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57._player.id === 1)("ngIfElse", _r60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !!ctx_r57.error);
      }
    }

    var PasswordDialogComponent = /*#__PURE__*/function () {
      function PasswordDialogComponent() {
        _classCallCheck(this, PasswordDialogComponent);

        //#region icons
        this.faWindowClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faWindowClose"]; //#endregion

        this.errorAlert = "";
        this.display = false;
        this.setPassword = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PasswordDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "next",
        value: function next() {
          if (this.checkPassword()) {
            this.setPassword.emit(this.password);
            this.display = false;
          } else {
            this.errorAlert = "Wrong password, You can't use whitespace.";
          }
        }
      }, {
        key: "checkPassword",
        value: function checkPassword() {
          if (this.onlyWord) {
            for (var i = 0; i < this.password.length; i++) {
              if (this.password.charAt(i) === " ") return false;
            }

            return true;
          } else {
            return true;
          }
        }
      }, {
        key: "player",
        set: function set(val) {
          if (!!val) {
            this._player = val;
            this.password = "";
            this.display = true;
          }
        }
      }, {
        key: "error",
        get: function get() {
          if (this.password.length < 1) {
            this.errorAlert = "Easy password. Try a bit harder. :)";
          }

          return this.errorAlert;
        }
      }]);

      return PasswordDialogComponent;
    }();

    PasswordDialogComponent.ɵfac = function PasswordDialogComponent_Factory(t) {
      return new (t || PasswordDialogComponent)();
    };

    PasswordDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PasswordDialogComponent,
      selectors: [["app-password-dialog"]],
      inputs: {
        onlyWord: "onlyWord",
        player: "player"
      },
      outputs: {
        setPassword: "setPassword"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "dialog"], [1, "dialog-main"], [1, "dialog-header", "text-right"], [1, "fa-lg", "suc-icon", "close-icon", 3, "icon", "routerLink"], ["id", "body"], ["id", "error-alert", "class", "alert alert-secondary", "role", "alert", 4, "ngIf"], ["id", "text", 1, "text-center"], ["class", "text-center", 4, "ngIf", "ngIfElse"], ["class", "text-center"], ["plr2", ""], ["type", "password", "maxlength", "27", "id", "passwordInp", "placeholder", "Password...", 1, "form-control", "text-center", 3, "ngModel", "keyup", "ngModelChange"], ["passwordInp", "ngModel"], [1, "text-right"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], ["id", "error-alert", "role", "alert", 1, "alert", "alert-secondary"], [1, "text-center"]],
      template: function PasswordDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PasswordDialogComponent_div_0_Template, 18, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: [".dialog[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n  position: absolute;\n  min-width: 400px;\n  width: 100%;\n  height: 100%;\n  padding-left: 30%;\n  padding-right: 30%;\n  padding-top: 10%;\n  font-size: 22px;\n  z-index: 10;\n}\n\n.dialog-main[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #a3a3a3;\n  background-color: #000000;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #a3a3a3;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.close-icon[_ngcontent-%COMP%]:hover {\n  color: #a3a3a3;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n  width: 30%;\n  margin: 10px;\n  font-size: 14px;\n}\n\ninput[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n  width: 70%;\n  background-color: #000000;\n  font-size: 22px;\n  margin: auto;\n  border: 1px solid #a3a3a3;\n}\n\n#error-alert[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n@media (max-width: 720px) {\n  .dialog[_ngcontent-%COMP%] {\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 25%;\n    min-width: 350px;\n    font-size: 14px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  input[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n\n#text[_ngcontent-%COMP%] {\n  padding: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYm9hcmQvcGFzc3dvcmQtZGlhbG9nL0Q6XFxXaXNpZWxlY1xcd2lzaWVsZWNSZXBvXFx3aXNpZWxlY1xcc3JjXFxhcHAvLi5cXHN0eWxlc1xcX2RpYWxvZy5zY3NzIiwiaG9tZS9ib2FyZC9wYXNzd29yZC1kaWFsb2cvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC8uLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJob21lL2JvYXJkL3Bhc3N3b3JkLWRpYWxvZy9wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJob21lL2JvYXJkL3Bhc3N3b3JkLWRpYWxvZy9EOlxcV2lzaWVsZWNcXHdpc2llbGVjUmVwb1xcd2lzaWVsZWNcXHNyY1xcYXBwL2hvbWVcXGJvYXJkXFxwYXNzd29yZC1kaWFsb2dcXHBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLE9BQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUNPUTtFRE5SLFdBQUE7QUVESjs7QUZLQTtFQUVJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkNiSTtBQ1VSOztBRk1BO0VBQ0ksZ0NBQUE7QUVISjs7QUZNQTtFQUNJLFlBQUE7QUVISjs7QUZNQTtFQUNJLGNDaENHO0FDNkJQOztBRk1BO0VBQ0ksY0NwQ0c7RURxQ0gsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQ3ZCUTtBQ29CWjs7QUZNQTtFQUNJLGNDM0NHO0VENENILFVBQUE7RUFDQSx5QkN0Q0k7RUR1Q0osZUM1QlE7RUQ2QlIsWUFBQTtFQUNBLHlCQUFBO0FFSEo7O0FGTUE7RUFDSSxZQUFBO0FFSEo7O0FGTUE7RUFDSTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUM3Q0k7RUMwQ1Y7O0VGS0U7SUFDSSxlQ2pESTtFQytDVjs7RUZJRTtJQUNJLGVDcERJO0VDbURWO0FBQ0Y7O0FDbEVBO0VBQ0ksWUFBQTtBRG9FSiIsImZpbGUiOiJob21lL2JvYXJkL3Bhc3N3b3JkLWRpYWxvZy9wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5kaWFsb2d7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgZm9udC1zaXplOiAkZi1zaXplLWJnO1xyXG4gICAgei1pbmRleDogMTA7XHJcblxyXG59XHJcblxyXG4uZGlhbG9nLW1haW5cclxueyAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG59XHJcblxyXG4uZGlhbG9nLWhlYWRlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheTtcclxufVxyXG5cclxuLmNsb3NlLWljb257XHJcbiAgICBwYWRkaW5nOjVweDtcclxufVxyXG5cclxuLmNsb3NlLWljb246aG92ZXJ7XHJcbiAgICBjb2xvcjokZ3JheTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgY29sb3I6ICRncmF5O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogMTBweDsgIFxyXG4gICAgZm9udC1zaXplOiAkZi1zaXplLW1kO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGNvbG9yOiAkZ3JheTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICBmb250LXNpemU6ICRmLXNpemUtYmc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheTtcclxufVxyXG5cclxuI2Vycm9yLWFsZXJ0e1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJG1kKSB7XHJcbiAgICAuZGlhbG9neyAgIFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjUlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplLW1kO1xyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZS1zbTtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZS1zbTtcclxuICAgIH1cclxufSIsIi8vY29sb3JzXHJcbiRncmF5OiAjYTNhM2EzO1xyXG4kZ3JheS1kYXJrOiAjNWU1ZTVlO1xyXG4kd2hpdGU6ICNmM2YzZjM7XHJcbiRncmVlbjogIzE4Y2YwMDtcclxuJGdyZWVuLWRhcms6ICMwZDZlMDA7XHJcbiRyZWQ6ICNjZjAwMDA7XHJcbiRyZWQtZGFyazogIzZlMDAwMDtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4keWVsbG93OiAjZTdlNzAxZTE7XHJcbiRvcmFuZ2U6ICNmOGE4MTNlMDtcclxuXHJcblxyXG4vL2ZvbnRzXHJcblxyXG4vL2ZvbnQtc2l6ZVxyXG4kZi1zaXplLXNtOiAxMHB4O1xyXG4kZi1zaXplLW1kOiAxNHB4O1xyXG4kZi1zaXplLW1iOiAyMHB4O1xyXG4kZi1zaXplLWJnOiAyMnB4O1xyXG4kZi1zaXplLWxnOiAyOHB4O1xyXG4kZi1zaXplLXhsOiAzMnB4O1xyXG4kZi1zaXplLXh4bDogNTBweDtcclxuXHJcbi8vZm9udC13ZWlnaHRcclxuJGYtd2VpZ2h0LTQwMDogNDAwO1xyXG4kZi13ZWlnaHQtNjAwOiA2MDA7XHJcbiRmLXdlaWdodC03MDA6IDcwMDtcclxuJGYtd2VpZ2h0LTgwMDogODAwO1xyXG5cclxuLy9mb250LWZhbWlseVxyXG4kZi1mYW1pbHk6J0lNIEZlbGwgRFcgUGljYSBTQycsIHNlcmlmO1xyXG5cclxuLy9zY3JlZW4gd2lkdGhcclxuJG1pbjogMHB4O1xyXG4kc206IDU0MHB4O1xyXG4kbWQ6IDcyMHB4O1xyXG4kbGc6IDk2MHB4O1xyXG4keGw6IDExNDBweDsiLCIuZGlhbG9nIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xuICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5kaWFsb2ctbWFpbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpYWxvZy1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2EzYTNhMztcbn1cblxuLmNsb3NlLWljb24ge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jbG9zZS1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNhM2EzYTM7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiAjYTNhM2EzO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW5wdXQge1xuICBjb2xvcjogI2EzYTNhMztcbiAgd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XG59XG5cbiNlcnJvci1hbGVydCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5kaWFsb2cge1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBwYWRkaW5nLXRvcDogMjUlO1xuICAgIG1pbi13aWR0aDogMzUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG4jdGV4dCB7XG4gIHBhZGRpbmc6IDEwJTtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvZGlhbG9nJztcclxuXHJcbiN0ZXh0e1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-password-dialog',
          templateUrl: './password-dialog.component.html',
          styleUrls: ['./password-dialog.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onlyWord: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        player: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        setPassword: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/board/password/password.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/home/board/password/password.component.ts ***!
    \***********************************************************/

  /*! exports provided: PasswordComponent */

  /***/
  function srcAppHomeBoardPasswordPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordComponent", function () {
      return PasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); //angular


    var PasswordComponent = /*#__PURE__*/function () {
      function PasswordComponent() {
        _classCallCheck(this, PasswordComponent);
      }

      _createClass(PasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "char",
        set: function set(val) {
          this._char = val;
        }
      }]);

      return PasswordComponent;
    }();

    PasswordComponent.ɵfac = function PasswordComponent_Factory(t) {
      return new (t || PasswordComponent)();
    };

    PasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PasswordComponent,
      selectors: [["app-password"]],
      inputs: {
        "char": "char"
      },
      decls: 2,
      vars: 5,
      consts: [["id", "char", 1, "text-center", "char"]],
      template: function PasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("char-hide", ctx._char === "-")("char-space", ctx._char === ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._char, "\n");
        }
      },
      styles: [".char[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #f3f3f3;\n  font-size: 22px;\n}\n\n.char-hide[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.char-space[_ngcontent-%COMP%] {\n  border-bottom: none;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYm9hcmQvcGFzc3dvcmQvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC9ob21lXFxib2FyZFxccGFzc3dvcmRcXHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwiaG9tZS9ib2FyZC9wYXNzd29yZC9EOlxcV2lzaWVsZWNcXHdpc2llbGVjUmVwb1xcd2lzaWVsZWNcXHNyY1xcYXBwLy4uXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsImhvbWUvYm9hcmQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQ0FBQTtFQUNBLGVDZVE7QUNoQlo7O0FGSUE7RUFDSSxjQUFBO0FFREo7O0FGSUE7RUFDSSxtQkFBQTtFQUNBLGNDTEk7QUNJUiIsImZpbGUiOiJob21lL2JvYXJkL3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5jaGFye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogJGYtc2l6ZS1iZztcclxufVxyXG5cclxuLmNoYXItaGlkZXtcclxuICAgIGNvbG9yOiAkYmxhY2s7XHJcbn1cclxuXHJcbi5jaGFyLXNwYWNle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGNvbG9yOiAkYmxhY2s7XHJcbn0iLCIvL2NvbG9yc1xyXG4kZ3JheTogI2EzYTNhMztcclxuJGdyYXktZGFyazogIzVlNWU1ZTtcclxuJHdoaXRlOiAjZjNmM2YzO1xyXG4kZ3JlZW46ICMxOGNmMDA7XHJcbiRncmVlbi1kYXJrOiAjMGQ2ZTAwO1xyXG4kcmVkOiAjY2YwMDAwO1xyXG4kcmVkLWRhcms6ICM2ZTAwMDA7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJHllbGxvdzogI2U3ZTcwMWUxO1xyXG4kb3JhbmdlOiAjZjhhODEzZTA7XHJcblxyXG5cclxuLy9mb250c1xyXG5cclxuLy9mb250LXNpemVcclxuJGYtc2l6ZS1zbTogMTBweDtcclxuJGYtc2l6ZS1tZDogMTRweDtcclxuJGYtc2l6ZS1tYjogMjBweDtcclxuJGYtc2l6ZS1iZzogMjJweDtcclxuJGYtc2l6ZS1sZzogMjhweDtcclxuJGYtc2l6ZS14bDogMzJweDtcclxuJGYtc2l6ZS14eGw6IDUwcHg7XHJcblxyXG4vL2ZvbnQtd2VpZ2h0XHJcbiRmLXdlaWdodC00MDA6IDQwMDtcclxuJGYtd2VpZ2h0LTYwMDogNjAwO1xyXG4kZi13ZWlnaHQtNzAwOiA3MDA7XHJcbiRmLXdlaWdodC04MDA6IDgwMDtcclxuXHJcbi8vZm9udC1mYW1pbHlcclxuJGYtZmFtaWx5OidJTSBGZWxsIERXIFBpY2EgU0MnLCBzZXJpZjtcclxuXHJcbi8vc2NyZWVuIHdpZHRoXHJcbiRtaW46IDBweDtcclxuJHNtOiA1NDBweDtcclxuJG1kOiA3MjBweDtcclxuJGxnOiA5NjBweDtcclxuJHhsOiAxMTQwcHg7IiwiLmNoYXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2YzZjNmMztcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uY2hhci1oaWRlIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jaGFyLXNwYWNlIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-password',
          templateUrl: './password.component.html',
          styleUrls: ['./password.component.scss']
        }]
      }], function () {
        return [];
      }, {
        "char": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/board/picture/picture.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/home/board/picture/picture.component.ts ***!
    \*********************************************************/

  /*! exports provided: PictureComponent */

  /***/
  function srcAppHomeBoardPicturePictureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PictureComponent", function () {
      return PictureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); //angular


    var PictureComponent = /*#__PURE__*/function () {
      function PictureComponent() {
        _classCallCheck(this, PictureComponent);

        this.src = "";
      }

      _createClass(PictureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "badTry",
        set: function set(val) {
          this.src = "../../../assets/img/w".concat(val, ".png");
        }
      }]);

      return PictureComponent;
    }();

    PictureComponent.ɵfac = function PictureComponent_Factory(t) {
      return new (t || PictureComponent)();
    };

    PictureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PictureComponent,
      selectors: [["app-picture"]],
      inputs: {
        badTry: "badTry"
      },
      decls: 2,
      vars: 1,
      consts: [[3, "src"]],
      template: function PictureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["@media screen and (min-width: 0px) and (max-width: 720px) {\n  img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYm9hcmQvcGljdHVyZS9EOlxcV2lzaWVsZWNcXHdpc2llbGVjUmVwb1xcd2lzaWVsZWNcXHNyY1xcYXBwL2hvbWVcXGJvYXJkXFxwaWN0dXJlXFxwaWN0dXJlLmNvbXBvbmVudC5zY3NzIiwiaG9tZS9ib2FyZC9waWN0dXJlL3BpY3R1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSTtJQUNJLFVBQUE7RUNETjtBQUNGIiwiZmlsZSI6ImhvbWUvYm9hcmQvcGljdHVyZS9waWN0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1kKSB7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICBpbWcge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-picture',
          templateUrl: './picture.component.html',
          styleUrls: ['./picture.component.scss']
        }]
      }], function () {
        return [];
      }, {
        badTry: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/board/score/score.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/board/score/score.component.ts ***!
    \*****************************************************/

  /*! exports provided: ScoreComponent */

  /***/
  function srcAppHomeBoardScoreScoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScoreComponent", function () {
      return ScoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_models_player_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/models/player.model */
    "./src/app/shared/models/player.model.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //angular
    //models
    //other


    function ScoreComponent_td_6_fa_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 2);
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r42.faCheckCircle);
      }
    }

    function ScoreComponent_td_6_fa_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 9);
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r43.faTimesCircle);
      }
    }

    function ScoreComponent_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScoreComponent_td_6_fa_icon_1_Template, 1, 1, "fa-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScoreComponent_td_6_fa_icon_2_Template, 1, 1, "fa-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var r_r41 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", r_r41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", r_r41 === false);
      }
    }

    function ScoreComponent_td_11_fa_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 2);
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r45.faCheckCircle);
      }
    }

    function ScoreComponent_td_11_fa_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 9);
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r46.faTimesCircle);
      }
    }

    function ScoreComponent_td_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScoreComponent_td_11_fa_icon_1_Template, 1, 1, "fa-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScoreComponent_td_11_fa_icon_2_Template, 1, 1, "fa-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var r_r44 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", r_r44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", r_r44 === false);
      }
    }

    var ScoreComponent = /*#__PURE__*/function () {
      function ScoreComponent() {
        _classCallCheck(this, ScoreComponent);

        //#region icons
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheckCircle"];
        this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimesCircle"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"]; //#endregion

        this.roundNr = 0;
        this.winner = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ScoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.player1Score = new Array(this.roundCount).fill(null);
          this.player2Score = new Array(this.roundCount).fill(null);
        }
      }, {
        key: "roundScore",
        set: function set(roundWinner) {
          if (roundWinner === 1 || roundWinner === 2) {
            roundWinner === 1 ? this.player1Score[this.roundNr] = true : this.player1Score[this.roundNr] = false;
            roundWinner === 2 ? this.player2Score[this.roundNr] = true : this.player2Score[this.roundNr] = false;
            this.roundNr++;

            if (this.roundNr === this.roundCount) {
              var player1WinRounds = 0;
              var player2WinRounds = 0;
              this.player1Score.forEach(function (x) {
                return x === true ? player1WinRounds++ : player1WinRounds;
              });
              this.player2Score.forEach(function (x) {
                return x === true ? player2WinRounds++ : player2WinRounds;
              });

              if (player1WinRounds > player2WinRounds) {
                this.winner.emit(this.player1);
              }

              if (player2WinRounds > player1WinRounds) {
                this.winner.emit(this.player2);
              }

              if (player1WinRounds === player2WinRounds) {
                var drawPlayer = new src_app_shared_models_player_model__WEBPACK_IMPORTED_MODULE_1__["PlayerModel"](-1, 'Draw');
                this.winner.emit(drawPlayer);
              }
            }
          }
        }
      }]);

      return ScoreComponent;
    }();

    ScoreComponent.ɵfac = function ScoreComponent_Factory(t) {
      return new (t || ScoreComponent)();
    };

    ScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScoreComponent,
      selectors: [["app-score"]],
      inputs: {
        roundCount: "roundCount",
        player1: "player1",
        player2: "player2",
        roundScore: "roundScore"
      },
      outputs: {
        winner: "winner"
      },
      decls: 12,
      vars: 6,
      consts: [[2, "width", "100%"], [1, "player1-title"], [1, "fa-lg", "success-icon", 3, "icon"], ["class", "player1-td text-center", 4, "ngFor", "ngForOf"], [1, "player2-title"], ["class", "player2-td text-center", 4, "ngFor", "ngForOf"], [1, "player1-td", "text-center"], ["class", "fa-lg success-icon", 3, "icon", 4, "ngIf"], ["class", "fa-lg wrong-icon", 3, "icon", 4, "ngIf"], [1, "fa-lg", "wrong-icon", 3, "icon"], [1, "player2-td", "text-center"]],
      template: function ScoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ScoreComponent_td_6_Template, 3, 2, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScoreComponent_td_11_Template, 3, 2, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.player1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.player1Score);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.player2.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.player2Score);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["td[_ngcontent-%COMP%] {\n  border: 2px solid #f3f3f3;\n}\n\n.player1-td[_ngcontent-%COMP%], .player2-td[_ngcontent-%COMP%] {\n  width: 5%;\n}\n\n.player1-title[_ngcontent-%COMP%], .player1-td[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\n.player2-title[_ngcontent-%COMP%], .player2-td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.player1-title[_ngcontent-%COMP%], .player2-title[_ngcontent-%COMP%] {\n  width: 10%;\n  min-width: 80px;\n}\n\n.success-icon[_ngcontent-%COMP%] {\n  color: #0d6e00;\n}\n\n.wrong-icon[_ngcontent-%COMP%] {\n  color: #6e0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYm9hcmQvc2NvcmUvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC9ob21lXFxib2FyZFxcc2NvcmVcXHNjb3JlLmNvbXBvbmVudC5zY3NzIiwiaG9tZS9ib2FyZC9zY29yZS9zY29yZS5jb21wb25lbnQuc2NzcyIsImhvbWUvYm9hcmQvc2NvcmUvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC8uLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFBQTtBQ0RKOztBREdBO0VBQ0ksU0FBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksY0VsQlM7QURrQmI7O0FER0E7RUFDSSxjRXBCTztBRG9CWCIsImZpbGUiOiJob21lL2JvYXJkL3Njb3JlL3Njb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG50ZHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxufVxyXG4ucGxheWVyMS10ZCwgLnBsYXllcjItdGR7XHJcbiAgICB3aWR0aDogNSU7XHJcbn1cclxuXHJcbi5wbGF5ZXIxLXRpdGxlLCAucGxheWVyMS10ZHtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbi5wbGF5ZXIyLXRpdGxlLCAucGxheWVyMi10ZHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5wbGF5ZXIxLXRpdGxlLCAucGxheWVyMi10aXRsZXtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5zdWNjZXNzLWljb257XHJcbiAgICBjb2xvcjogJGdyZWVuLWRhcms7XHJcbn1cclxuXHJcbi53cm9uZy1pY29ue1xyXG4gICAgY29sb3I6ICRyZWQtZGFyaztcclxufVxyXG5cclxuIiwidGQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjNmM2YzO1xufVxuXG4ucGxheWVyMS10ZCwgLnBsYXllcjItdGQge1xuICB3aWR0aDogNSU7XG59XG5cbi5wbGF5ZXIxLXRpdGxlLCAucGxheWVyMS10ZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5wbGF5ZXIyLXRpdGxlLCAucGxheWVyMi10ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5wbGF5ZXIxLXRpdGxlLCAucGxheWVyMi10aXRsZSB7XG4gIHdpZHRoOiAxMCU7XG4gIG1pbi13aWR0aDogODBweDtcbn1cblxuLnN1Y2Nlc3MtaWNvbiB7XG4gIGNvbG9yOiAjMGQ2ZTAwO1xufVxuXG4ud3JvbmctaWNvbiB7XG4gIGNvbG9yOiAjNmUwMDAwO1xufSIsIi8vY29sb3JzXHJcbiRncmF5OiAjYTNhM2EzO1xyXG4kZ3JheS1kYXJrOiAjNWU1ZTVlO1xyXG4kd2hpdGU6ICNmM2YzZjM7XHJcbiRncmVlbjogIzE4Y2YwMDtcclxuJGdyZWVuLWRhcms6ICMwZDZlMDA7XHJcbiRyZWQ6ICNjZjAwMDA7XHJcbiRyZWQtZGFyazogIzZlMDAwMDtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4keWVsbG93OiAjZTdlNzAxZTE7XHJcbiRvcmFuZ2U6ICNmOGE4MTNlMDtcclxuXHJcblxyXG4vL2ZvbnRzXHJcblxyXG4vL2ZvbnQtc2l6ZVxyXG4kZi1zaXplLXNtOiAxMHB4O1xyXG4kZi1zaXplLW1kOiAxNHB4O1xyXG4kZi1zaXplLW1iOiAyMHB4O1xyXG4kZi1zaXplLWJnOiAyMnB4O1xyXG4kZi1zaXplLWxnOiAyOHB4O1xyXG4kZi1zaXplLXhsOiAzMnB4O1xyXG4kZi1zaXplLXh4bDogNTBweDtcclxuXHJcbi8vZm9udC13ZWlnaHRcclxuJGYtd2VpZ2h0LTQwMDogNDAwO1xyXG4kZi13ZWlnaHQtNjAwOiA2MDA7XHJcbiRmLXdlaWdodC03MDA6IDcwMDtcclxuJGYtd2VpZ2h0LTgwMDogODAwO1xyXG5cclxuLy9mb250LWZhbWlseVxyXG4kZi1mYW1pbHk6J0lNIEZlbGwgRFcgUGljYSBTQycsIHNlcmlmO1xyXG5cclxuLy9zY3JlZW4gd2lkdGhcclxuJG1pbjogMHB4O1xyXG4kc206IDU0MHB4O1xyXG4kbWQ6IDcyMHB4O1xyXG4kbGc6IDk2MHB4O1xyXG4keGw6IDExNDBweDsiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-score',
          templateUrl: './score.component.html',
          styleUrls: ['./score.component.scss']
        }]
      }], function () {
        return [];
      }, {
        roundCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        player1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        player2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roundScore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        winner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/board/timer/timer.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/board/timer/timer.component.ts ***!
    \*****************************************************/

  /*! exports provided: TimerComponent */

  /***/
  function srcAppHomeBoardTimerTimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerComponent", function () {
      return TimerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //amgular


    function TimerComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TimerComponent = /*#__PURE__*/function () {
      function TimerComponent() {
        _classCallCheck(this, TimerComponent);

        this.sec = 0;
        this.stopTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(TimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "countTime",
        value: function countTime(sec) {
          this.sec--;

          if (this.sec === 0) {
            clearInterval(this.interval);
            this.onStopTime();
          }
        }
      }, {
        key: "onStopTime",
        value: function onStopTime() {
          this.stopTime.emit(true);
        }
      }, {
        key: "stopTimer",
        set: function set(val) {
          if (val) {
            clearInterval(this.interval);
          }
        }
      }, {
        key: "startTimer",
        set: function set(sec) {
          var _this4 = this;

          if (sec > 10) {
            this.sec = sec;
            this.interval = setInterval(function () {
              _this4.countTime(_this4.sec);
            }, 1000);
          }
        }
      }, {
        key: "timerColorClass",
        get: function get() {
          if (this.sec < 10 && this.sec > 3) {
            return 'color-orange';
          }

          if (this.sec <= 3 && this.sec > 0) {
            return 'color-red';
          }

          return '';
        }
      }]);

      return TimerComponent;
    }();

    TimerComponent.ɵfac = function TimerComponent_Factory(t) {
      return new (t || TimerComponent)();
    };

    TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimerComponent,
      selectors: [["app-timer"]],
      inputs: {
        stopTimer: "stopTimer",
        startTimer: "startTimer"
      },
      outputs: {
        stopTime: "stopTime"
      },
      decls: 5,
      vars: 3,
      consts: [["id", "timer-div"], ["src", "../../../assets/img/timer.png"], [3, "ngClass"], [4, "ngIf"]],
      template: function TimerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimerComponent_span_3_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.timerColorClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sec < 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sec);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".main-txt[_ngcontent-%COMP%] {\n  color: #f3f3f3;\n  font-family: \"IM Fell DW Pica SC\", serif;\n  margin-bottom: 50px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #f3f3f3;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.color-red[_ngcontent-%COMP%] {\n  color: #cf0000;\n}\n\n.color-green[_ngcontent-%COMP%] {\n  color: #18cf00;\n}\n\n.color-yellow[_ngcontent-%COMP%] {\n  color: #e7e701e1;\n}\n\n.color-orange[_ngcontent-%COMP%] {\n  color: #f8a813e0;\n}\n\n#timer-div[_ngcontent-%COMP%] {\n  width: 120px;\n  position: absolute;\n  right: 20%;\n  z-index: 1;\n  top: 50px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n\np[_ngcontent-%COMP%] {\n  color: #f3f3f3;\n  font-size: 32px;\n  position: absolute;\n  left: 25%;\n  bottom: 2%;\n}\n\n@media screen and (min-width: 0px) and (max-width: 720px) {\n  img[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYm9hcmQvdGltZXIvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC8uLlxcc3R5bGVzXFxfc3R5bGVzLnNjc3MiLCJob21lL2JvYXJkL3RpbWVyL0Q6XFxXaXNpZWxlY1xcd2lzaWVsZWNSZXBvXFx3aXNpZWxlY1xcc3JjXFxhcHAvLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwiaG9tZS9ib2FyZC90aW1lci90aW1lci5jb21wb25lbnQuc2NzcyIsImhvbWUvYm9hcmQvdGltZXIvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC9ob21lXFxib2FyZFxcdGltZXJcXHRpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLHdDQzJCTTtFRDFCTixtQkFBQTtBRURKOztBRklBO0VBQ0ksY0NSRztBQ09QOztBRklBO0VBQ0ksY0NWSTtFRFdKLHFCQUFBO0VBQ0EsZUFBQTtBRURKOztBRktBO0VBQ0ksY0NkRTtBQ1lOOztBRktBO0VBQ0ksY0NwQkk7QUNrQlI7O0FGS0E7RUFDSSxnQkNuQks7QUNpQlQ7O0FGS0E7RUFDSSxnQkN0Qks7QUNvQlQ7O0FDNUJBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FEK0JKOztBQzVCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FEK0JKOztBQzVCQTtFQUNJLGNGYkk7RUVjSixlRklRO0VFSFIsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRCtCSjs7QUM1QkE7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VEK0JOOztFQzdCRTtJQUNJLGVGVkk7RUMwQ1Y7QUFDRiIsImZpbGUiOiJob21lL2JvYXJkL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4ubWFpbi10eHR7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTsgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiAkZ3JheTtcclxufVxyXG5cclxuYTpob3ZlcntcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vY29sb3JzXHJcbi5jb2xvci1yZWR7XHJcbiAgICBjb2xvcjogJHJlZDtcclxufVxyXG5cclxuLmNvbG9yLWdyZWVue1xyXG4gICAgY29sb3I6ICRncmVlbjtcclxufVxyXG5cclxuLmNvbG9yLXllbGxvd3tcclxuICAgIGNvbG9yOiAkeWVsbG93O1xyXG59XHJcblxyXG4uY29sb3Itb3Jhbmdle1xyXG4gICAgY29sb3I6ICRvcmFuZ2U7XHJcbn0iLCIvL2NvbG9yc1xyXG4kZ3JheTogI2EzYTNhMztcclxuJGdyYXktZGFyazogIzVlNWU1ZTtcclxuJHdoaXRlOiAjZjNmM2YzO1xyXG4kZ3JlZW46ICMxOGNmMDA7XHJcbiRncmVlbi1kYXJrOiAjMGQ2ZTAwO1xyXG4kcmVkOiAjY2YwMDAwO1xyXG4kcmVkLWRhcms6ICM2ZTAwMDA7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJHllbGxvdzogI2U3ZTcwMWUxO1xyXG4kb3JhbmdlOiAjZjhhODEzZTA7XHJcblxyXG5cclxuLy9mb250c1xyXG5cclxuLy9mb250LXNpemVcclxuJGYtc2l6ZS1zbTogMTBweDtcclxuJGYtc2l6ZS1tZDogMTRweDtcclxuJGYtc2l6ZS1tYjogMjBweDtcclxuJGYtc2l6ZS1iZzogMjJweDtcclxuJGYtc2l6ZS1sZzogMjhweDtcclxuJGYtc2l6ZS14bDogMzJweDtcclxuJGYtc2l6ZS14eGw6IDUwcHg7XHJcblxyXG4vL2ZvbnQtd2VpZ2h0XHJcbiRmLXdlaWdodC00MDA6IDQwMDtcclxuJGYtd2VpZ2h0LTYwMDogNjAwO1xyXG4kZi13ZWlnaHQtNzAwOiA3MDA7XHJcbiRmLXdlaWdodC04MDA6IDgwMDtcclxuXHJcbi8vZm9udC1mYW1pbHlcclxuJGYtZmFtaWx5OidJTSBGZWxsIERXIFBpY2EgU0MnLCBzZXJpZjtcclxuXHJcbi8vc2NyZWVuIHdpZHRoXHJcbiRtaW46IDBweDtcclxuJHNtOiA1NDBweDtcclxuJG1kOiA3MjBweDtcclxuJGxnOiA5NjBweDtcclxuJHhsOiAxMTQwcHg7IiwiLm1haW4tdHh0IHtcbiAgY29sb3I6ICNmM2YzZjM7XG4gIGZvbnQtZmFtaWx5OiBcIklNIEZlbGwgRFcgUGljYSBTQ1wiLCBzZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjYTNhM2EzO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmM2YzZjM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6ICNjZjAwMDA7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiAjMThjZjAwO1xufVxuXG4uY29sb3IteWVsbG93IHtcbiAgY29sb3I6ICNlN2U3MDFlMTtcbn1cblxuLmNvbG9yLW9yYW5nZSB7XG4gIGNvbG9yOiAjZjhhODEzZTA7XG59XG5cbiN0aW1lci1kaXYge1xuICB3aWR0aDogMTIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwJTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiA1MHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbnAge1xuICBjb2xvcjogI2YzZjNmMztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI1JTtcbiAgYm90dG9tOiAyJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4jdGltZXItZGl2e1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDUwcHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbnB7ICAgXHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAkZi1zaXplLXhsO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgYm90dG9tOiAyJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtZCkge1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIHB7ICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplLWJnO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timer',
          templateUrl: './timer.component.html',
          styleUrls: ['./timer.component.scss']
        }]
      }], function () {
        return [];
      }, {
        stopTimer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        startTimer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stopTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/footer/footer.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/footer/footer.component.ts ***!
    \*************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppHomeFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js"); //angular
    //other


    function FooterComponent_p_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact information: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_p_5_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.goToUrl();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.toggleIcon();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r68.faAngleDoubleUp);
      }
    }

    function FooterComponent_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.toggleIcon();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r69.faAngleDoubleDown);
      }
    }

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        //#region icons
        this.faAngleDoubleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleDoubleUp"];
        this.faAngleDoubleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleDoubleDown"]; //#endregion

        this.upIcon = true;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToUrl",
        value: function goToUrl() {
          location.assign("https://pl.linkedin.com/in/rados%C5%82aw-stankiewicz-049a6b183");
        }
      }, {
        key: "toggleIcon",
        value: function toggleIcon() {
          this.upIcon = !this.upIcon;
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 9,
      vars: 7,
      consts: [[1, "text-center", "col-12"], [1, "row"], [1, "offset-1", "col-10"], [4, "ngIf"], [1, "col-1", "text-right"], ["class", "btn btn-outline-secondary btn-sm", 3, "click", 4, "ngIf"], [3, "click"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], ["id", "close-icon", 1, "fa-lg", "suc-icon", 3, "icon"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA9 All rights reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FooterComponent_p_5_Template, 4, 0, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FooterComponent_button_7_Template, 2, 1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FooterComponent_button_8_Template, 2, 1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("desc-full", ctx.upIcon)("desc-part", !ctx.upIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.upIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.upIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.upIcon);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]],
      styles: ["footer[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  opacity: 0.7;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #5e5e5e;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\nbutton[_ngcontent-%COMP%] {\n  float: right;\n  right: 0;\n  margin: 2px;\n}\n\n.desc-full[_ngcontent-%COMP%] {\n  height: 100px;\n  transition: 1s;\n  overflow-y: hidden;\n}\n\n.desc-part[_ngcontent-%COMP%] {\n  height: 40px;\n  transition: 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvZm9vdGVyL0Q6XFxXaXNpZWxlY1xcd2lzaWVsZWNSZXBvXFx3aXNpZWxlY1xcc3JjXFxhcHAvaG9tZVxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJob21lL2Zvb3Rlci9EOlxcV2lzaWVsZWNcXHdpc2llbGVjUmVwb1xcd2lzaWVsZWNcXHNyY1xcYXBwLy4uXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsImhvbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkNUUTtBQ1FaOztBRklBO0VBQ0ksZUFBQTtBRURKOztBRklBO0VBQ0ksY0NYSTtBQ1VSOztBRklBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FFREo7O0FGSUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FFREo7O0FGS0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBRUZKIiwiZmlsZSI6ImhvbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5mb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG59XHJcblxyXG5he1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gICAgY29sb3I6ICRibGFjaztcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmRlc2MtZnVsbHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcbi5kZXNjLXBhcnR7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufSIsIi8vY29sb3JzXHJcbiRncmF5OiAjYTNhM2EzO1xyXG4kZ3JheS1kYXJrOiAjNWU1ZTVlO1xyXG4kd2hpdGU6ICNmM2YzZjM7XHJcbiRncmVlbjogIzE4Y2YwMDtcclxuJGdyZWVuLWRhcms6ICMwZDZlMDA7XHJcbiRyZWQ6ICNjZjAwMDA7XHJcbiRyZWQtZGFyazogIzZlMDAwMDtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4keWVsbG93OiAjZTdlNzAxZTE7XHJcbiRvcmFuZ2U6ICNmOGE4MTNlMDtcclxuXHJcblxyXG4vL2ZvbnRzXHJcblxyXG4vL2ZvbnQtc2l6ZVxyXG4kZi1zaXplLXNtOiAxMHB4O1xyXG4kZi1zaXplLW1kOiAxNHB4O1xyXG4kZi1zaXplLW1iOiAyMHB4O1xyXG4kZi1zaXplLWJnOiAyMnB4O1xyXG4kZi1zaXplLWxnOiAyOHB4O1xyXG4kZi1zaXplLXhsOiAzMnB4O1xyXG4kZi1zaXplLXh4bDogNTBweDtcclxuXHJcbi8vZm9udC13ZWlnaHRcclxuJGYtd2VpZ2h0LTQwMDogNDAwO1xyXG4kZi13ZWlnaHQtNjAwOiA2MDA7XHJcbiRmLXdlaWdodC03MDA6IDcwMDtcclxuJGYtd2VpZ2h0LTgwMDogODAwO1xyXG5cclxuLy9mb250LWZhbWlseVxyXG4kZi1mYW1pbHk6J0lNIEZlbGwgRFcgUGljYSBTQycsIHNlcmlmO1xyXG5cclxuLy9zY3JlZW4gd2lkdGhcclxuJG1pbjogMHB4O1xyXG4kc206IDU0MHB4O1xyXG4kbWQ6IDcyMHB4O1xyXG4kbGc6IDk2MHB4O1xyXG4keGw6IDExNDBweDsiLCJmb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNWU1ZTtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDJweDtcbn1cblxuLmRlc2MtZnVsbCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5kZXNjLXBhcnQge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRyYW5zaXRpb246IDFzO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/home/footer/footer.component.ts");
    /* harmony import */


    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nav-menu/nav-menu.component */
    "./src/app/home/nav-menu/nav-menu.component.ts"); //angular


    function HomeComponent_app_nav_menu_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-menu", 1);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isNotMenu",
        get: function get() {
          return this.router.url !== '/';
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 3,
      vars: 1,
      consts: [["class", "nav", 4, "ngIf"], [1, "nav"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_app_nav_menu_0_Template, 1, 0, "app-nav-menu", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNotMenu);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__["NavMenuComponent"]],
      styles: [".nav[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC9ob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwiaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7O1xyXG59IiwiLm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/loading/loading.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/home/loading/loading.component.ts ***!
    \***************************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppHomeLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoadingComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoadingComponent = /*#__PURE__*/function () {
      function LoadingComponent() {
        _classCallCheck(this, LoadingComponent);

        this._isLoading = true;
      }

      _createClass(LoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isLoading",
        set: function set(val) {
          this._isLoading = val;
        }
      }]);

      return LoadingComponent;
    }();

    LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
      return new (t || LoadingComponent)();
    };

    LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingComponent,
      selectors: [["app-loading"]],
      inputs: {
        isLoading: "isLoading"
      },
      decls: 1,
      vars: 1,
      consts: [["class", " spinner-div text-center", 4, "ngIf"], [1, "spinner-div", "text-center"], ["id", "spinner", "role", "status", 1, "spinner-grow", "text-light"], [1, "sr-only"]],
      template: function LoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoadingComponent_div_0_Template, 4, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".spinner-div[_ngcontent-%COMP%] {\n  background-color: #000000;\n  opacity: 0.6;\n  width: 90%;\n  height: 80%;\n  z-index: 99999;\n  position: absolute;\n}\n\n#spinner[_ngcontent-%COMP%] {\n  margin-top: 20%;\n  width: 20%;\n  height: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbG9hZGluZy9EOlxcV2lzaWVsZWNcXHdpc2llbGVjUmVwb1xcd2lzaWVsZWNcXHNyY1xcYXBwL2hvbWVcXGxvYWRpbmdcXGxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJob21lL2xvYWRpbmcvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC8uLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJob21lL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQ0tJO0VESkosWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FFREo7O0FGSUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUVESiIsImZpbGUiOiJob21lL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLnNwaW5uZXItZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbiNzcGlubmVye1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMjUlO1xyXG59IiwiLy9jb2xvcnNcclxuJGdyYXk6ICNhM2EzYTM7XHJcbiRncmF5LWRhcms6ICM1ZTVlNWU7XHJcbiR3aGl0ZTogI2YzZjNmMztcclxuJGdyZWVuOiAjMThjZjAwO1xyXG4kZ3JlZW4tZGFyazogIzBkNmUwMDtcclxuJHJlZDogI2NmMDAwMDtcclxuJHJlZC1kYXJrOiAjNmUwMDAwO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiR5ZWxsb3c6ICNlN2U3MDFlMTtcclxuJG9yYW5nZTogI2Y4YTgxM2UwO1xyXG5cclxuXHJcbi8vZm9udHNcclxuXHJcbi8vZm9udC1zaXplXHJcbiRmLXNpemUtc206IDEwcHg7XHJcbiRmLXNpemUtbWQ6IDE0cHg7XHJcbiRmLXNpemUtbWI6IDIwcHg7XHJcbiRmLXNpemUtYmc6IDIycHg7XHJcbiRmLXNpemUtbGc6IDI4cHg7XHJcbiRmLXNpemUteGw6IDMycHg7XHJcbiRmLXNpemUteHhsOiA1MHB4O1xyXG5cclxuLy9mb250LXdlaWdodFxyXG4kZi13ZWlnaHQtNDAwOiA0MDA7XHJcbiRmLXdlaWdodC02MDA6IDYwMDtcclxuJGYtd2VpZ2h0LTcwMDogNzAwO1xyXG4kZi13ZWlnaHQtODAwOiA4MDA7XHJcblxyXG4vL2ZvbnQtZmFtaWx5XHJcbiRmLWZhbWlseTonSU0gRmVsbCBEVyBQaWNhIFNDJywgc2VyaWY7XHJcblxyXG4vL3NjcmVlbiB3aWR0aFxyXG4kbWluOiAwcHg7XHJcbiRzbTogNTQwcHg7XHJcbiRtZDogNzIwcHg7XHJcbiRsZzogOTYwcHg7XHJcbiR4bDogMTE0MHB4OyIsIi5zcGlubmVyLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuNjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNzcGlubmVyIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDI1JTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loading',
          templateUrl: './loading.component.html',
          styleUrls: ['./loading.component.scss']
        }]
      }], function () {
        return [];
      }, {
        isLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/main-menu/main-menu.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/main-menu/main-menu.component.ts ***!
    \*******************************************************/

  /*! exports provided: MainMenuComponent */

  /***/
  function srcAppHomeMainMenuMainMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function () {
      return MainMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/config.service */
    "./src/app/shared/services/config.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //angular


    var _c0 = function _c0() {
      return ["/board"];
    };

    var _c1 = function _c1() {
      return ["/settings"];
    };

    var MainMenuComponent = /*#__PURE__*/function () {
      function MainMenuComponent(config) {
        _classCallCheck(this, MainMenuComponent);

        this.config = config;
      }

      _createClass(MainMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setSinglePlayerGame",
        value: function setSinglePlayerGame() {
          this.config.typeOfGame = false;
        }
      }, {
        key: "setMultiPlayerGame",
        value: function setMultiPlayerGame() {
          this.config.typeOfGame = true;
        }
      }]);

      return MainMenuComponent;
    }();

    MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) {
      return new (t || MainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]));
    };

    MainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainMenuComponent,
      selectors: [["app-main-menu"]],
      decls: 11,
      vars: 6,
      consts: [["id", "main-menu", 1, "text-center"], [1, "menu-pos-row"], [3, "routerLink", "click"], [1, "menu-pos-row", "bg"], [3, "routerLink"], ["src", "../../../assets/img/w9.png"]],
      template: function MainMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_a_click_2_listener() {
            return ctx.setSinglePlayerGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_a_click_5_listener() {
            return ctx.setMultiPlayerGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Multiplayer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".main-txt[_ngcontent-%COMP%] {\n  color: #f3f3f3;\n  font-family: \"IM Fell DW Pica SC\", serif;\n  margin-bottom: 50px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #f3f3f3;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.color-red[_ngcontent-%COMP%] {\n  color: #cf0000;\n}\n\n.color-green[_ngcontent-%COMP%] {\n  color: #18cf00;\n}\n\n.color-yellow[_ngcontent-%COMP%] {\n  color: #e7e701e1;\n}\n\n.color-orange[_ngcontent-%COMP%] {\n  color: #f8a813e0;\n}\n\n#main-menu[_ngcontent-%COMP%] {\n  padding-top: 20%;\n  z-index: 1;\n  position: relative;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 700;\n  display: inline;\n  transition: 0.8s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  font-size: 55px;\n  transition: 0.8s;\n}\n\n.menu-pos-row[_ngcontent-%COMP%] {\n  height: 75px;\n}\n\nimg[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 0;\n  position: absolute;\n  z-index: -1;\n  opacity: 0.4;\n}\n\n@media screen and (min-width: 0px) and (max-width: 720px) {\n  img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbWFpbi1tZW51L0Q6XFxXaXNpZWxlY1xcd2lzaWVsZWNSZXBvXFx3aXNpZWxlY1xcc3JjXFxhcHAvLi5cXHN0eWxlc1xcX3N0eWxlcy5zY3NzIiwiaG9tZS9tYWluLW1lbnUvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC8uLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJob21lL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnNjc3MiLCJob21lL21haW4tbWVudS9EOlxcV2lzaWVsZWNcXHdpc2llbGVjUmVwb1xcd2lzaWVsZWNcXHNyY1xcYXBwL2hvbWVcXG1haW4tbWVudVxcbWFpbi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLHdDQzJCTTtFRDFCTixtQkFBQTtBRURKOztBRklBO0VBQ0ksY0NSRztBQ09QOztBRklBO0VBQ0ksY0NWSTtFRFdKLHFCQUFBO0VBQ0EsZUFBQTtBRURKOztBRktBO0VBQ0ksY0NkRTtBQ1lOOztBRktBO0VBQ0ksY0NwQkk7QUNrQlI7O0FGS0E7RUFDSSxnQkNuQks7QUNpQlQ7O0FGS0E7RUFDSSxnQkN0Qks7QUNvQlQ7O0FDNUJBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUQrQko7O0FDN0JBO0VBQ0ksZUZjUztFRWJULGdCRmtCVztFRWpCWCxlQUFBO0VBQ0EsZ0JBQUE7QURnQ0o7O0FDOUJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FEaUNKOztBQzlCQTtFQUNJLFlBQUE7QURpQ0o7O0FDL0JBO0VBQ0ksUUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEa0NKOztBQy9CQTtFQUNJO0lBQ0ksYUFBQTtFRGtDTjtBQUNGIiwiZmlsZSI6ImhvbWUvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLm1haW4tdHh0e1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7ICBcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogJGdyYXk7XHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vL2NvbG9yc1xyXG4uY29sb3ItcmVke1xyXG4gICAgY29sb3I6ICRyZWQ7XHJcbn1cclxuXHJcbi5jb2xvci1ncmVlbntcclxuICAgIGNvbG9yOiAkZ3JlZW47XHJcbn1cclxuXHJcbi5jb2xvci15ZWxsb3d7XHJcbiAgICBjb2xvcjogJHllbGxvdztcclxufVxyXG5cclxuLmNvbG9yLW9yYW5nZXtcclxuICAgIGNvbG9yOiAkb3JhbmdlO1xyXG59IiwiLy9jb2xvcnNcclxuJGdyYXk6ICNhM2EzYTM7XHJcbiRncmF5LWRhcms6ICM1ZTVlNWU7XHJcbiR3aGl0ZTogI2YzZjNmMztcclxuJGdyZWVuOiAjMThjZjAwO1xyXG4kZ3JlZW4tZGFyazogIzBkNmUwMDtcclxuJHJlZDogI2NmMDAwMDtcclxuJHJlZC1kYXJrOiAjNmUwMDAwO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiR5ZWxsb3c6ICNlN2U3MDFlMTtcclxuJG9yYW5nZTogI2Y4YTgxM2UwO1xyXG5cclxuXHJcbi8vZm9udHNcclxuXHJcbi8vZm9udC1zaXplXHJcbiRmLXNpemUtc206IDEwcHg7XHJcbiRmLXNpemUtbWQ6IDE0cHg7XHJcbiRmLXNpemUtbWI6IDIwcHg7XHJcbiRmLXNpemUtYmc6IDIycHg7XHJcbiRmLXNpemUtbGc6IDI4cHg7XHJcbiRmLXNpemUteGw6IDMycHg7XHJcbiRmLXNpemUteHhsOiA1MHB4O1xyXG5cclxuLy9mb250LXdlaWdodFxyXG4kZi13ZWlnaHQtNDAwOiA0MDA7XHJcbiRmLXdlaWdodC02MDA6IDYwMDtcclxuJGYtd2VpZ2h0LTcwMDogNzAwO1xyXG4kZi13ZWlnaHQtODAwOiA4MDA7XHJcblxyXG4vL2ZvbnQtZmFtaWx5XHJcbiRmLWZhbWlseTonSU0gRmVsbCBEVyBQaWNhIFNDJywgc2VyaWY7XHJcblxyXG4vL3NjcmVlbiB3aWR0aFxyXG4kbWluOiAwcHg7XHJcbiRzbTogNTQwcHg7XHJcbiRtZDogNzIwcHg7XHJcbiRsZzogOTYwcHg7XHJcbiR4bDogMTE0MHB4OyIsIi5tYWluLXR4dCB7XG4gIGNvbG9yOiAjZjNmM2YzO1xuICBmb250LWZhbWlseTogXCJJTSBGZWxsIERXIFBpY2EgU0NcIiwgc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmEge1xuICBjb2xvcjogI2EzYTNhMztcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZjNmM2YzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiAjY2YwMDAwO1xufVxuXG4uY29sb3ItZ3JlZW4ge1xuICBjb2xvcjogIzE4Y2YwMDtcbn1cblxuLmNvbG9yLXllbGxvdyB7XG4gIGNvbG9yOiAjZTdlNzAxZTE7XG59XG5cbi5jb2xvci1vcmFuZ2Uge1xuICBjb2xvcjogI2Y4YTgxM2UwO1xufVxuXG4jbWFpbi1tZW51IHtcbiAgcGFkZGluZy10b3A6IDIwJTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRyYW5zaXRpb246IDAuOHM7XG59XG5cbmE6aG92ZXIge1xuICBmb250LXNpemU6IDU1cHg7XG4gIHRyYW5zaXRpb246IDAuOHM7XG59XG5cbi5tZW51LXBvcy1yb3cge1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbmltZyB7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIGltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9zdHlsZXMnO1xyXG5cclxuI21haW4tbWVudXtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmF7XHJcbiAgICBmb250LXNpemU6ICRmLXNpemUteHhsO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmLXdlaWdodC03MDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjhzO1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICBmb250LXNpemU6ICRmLXNpemUteHhsICogMS4xO1xyXG4gICAgdHJhbnNpdGlvbjogMC44cztcclxufVxyXG5cclxuLm1lbnUtcG9zLXJvd3tcclxuICAgIGhlaWdodDogNzVweDtcclxufVxyXG5pbWd7XHJcbiAgICB0b3A6MTAlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWQpIHtcclxuICAgIGltZ3tcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-menu',
          templateUrl: './main-menu.component.html',
          styleUrls: ['./main-menu.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/nav-menu/nav-menu.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/nav-menu/nav-menu.component.ts ***!
    \*****************************************************/

  /*! exports provided: NavMenuComponent */

  /***/
  function srcAppHomeNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //angular
    //other


    var _c0 = function _c0() {
      return [""];
    };

    var NavMenuComponent = /*#__PURE__*/function () {
      //#endregion
      function NavMenuComponent() {
        _classCallCheck(this, NavMenuComponent);

        //#region icons
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
        this.faPause = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPause"];
        this.faBackspace = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBackspace"];
      }

      _createClass(NavMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavMenuComponent;
    }();

    NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) {
      return new (t || NavMenuComponent)();
    };

    NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavMenuComponent,
      selectors: [["app-nav-menu"]],
      decls: 10,
      vars: 4,
      consts: [[1, "dropdown", "show"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-dark", "dropdown-toggle"], [1, "fa-lg", 3, "icon"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], [1, "row"], [1, "col-3"], [3, "icon"], [1, "col-9"]],
      template: function NavMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Back to menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBars);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBackspace);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".main-txt[_ngcontent-%COMP%] {\n  color: #f3f3f3;\n  font-family: \"IM Fell DW Pica SC\", serif;\n  margin-bottom: 50px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #f3f3f3;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.color-red[_ngcontent-%COMP%] {\n  color: #cf0000;\n}\n\n.color-green[_ngcontent-%COMP%] {\n  color: #18cf00;\n}\n\n.color-yellow[_ngcontent-%COMP%] {\n  color: #e7e701e1;\n}\n\n.color-orange[_ngcontent-%COMP%] {\n  color: #f8a813e0;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  background-color: #5e5e5e;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-left: 5%;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #a3a3a3;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbmF2LW1lbnUvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC8uLlxcc3R5bGVzXFxfc3R5bGVzLnNjc3MiLCJob21lL25hdi1tZW51L0Q6XFxXaXNpZWxlY1xcd2lzaWVsZWNSZXBvXFx3aXNpZWxlY1xcc3JjXFxhcHAvLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwiaG9tZS9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuc2NzcyIsImhvbWUvbmF2LW1lbnUvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC9ob21lXFxuYXYtbWVudVxcbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0Esd0NDMkJNO0VEMUJOLG1CQUFBO0FFREo7O0FGSUE7RUFDSSxjQ1JHO0FDT1A7O0FGSUE7RUFDSSxjQ1ZJO0VEV0oscUJBQUE7RUFDQSxlQUFBO0FFREo7O0FGS0E7RUFDSSxjQ2RFO0FDWU47O0FGS0E7RUFDSSxjQ3BCSTtBQ2tCUjs7QUZLQTtFQUNJLGdCQ25CSztBQ2lCVDs7QUZLQTtFQUNJLGdCQ3RCSztBQ29CVDs7QUM1QkE7RUFDSSx5QkZEUTtBQ2dDWjs7QUM3QkE7RUFDSSxnQkFBQTtBRGdDSjs7QUM3QkE7RUFDSSx5QkZURztBQ3lDUDs7QUM3QkE7RUFDSSxZQUFBO0FEZ0NKIiwiZmlsZSI6ImhvbWUvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5tYWluLXR4dHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJGYtZmFtaWx5OyAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6ICRncmF5O1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy9jb2xvcnNcclxuLmNvbG9yLXJlZHtcclxuICAgIGNvbG9yOiAkcmVkO1xyXG59XHJcblxyXG4uY29sb3ItZ3JlZW57XHJcbiAgICBjb2xvcjogJGdyZWVuO1xyXG59XHJcblxyXG4uY29sb3IteWVsbG93e1xyXG4gICAgY29sb3I6ICR5ZWxsb3c7XHJcbn1cclxuXHJcbi5jb2xvci1vcmFuZ2V7XHJcbiAgICBjb2xvcjogJG9yYW5nZTtcclxufSIsIi8vY29sb3JzXHJcbiRncmF5OiAjYTNhM2EzO1xyXG4kZ3JheS1kYXJrOiAjNWU1ZTVlO1xyXG4kd2hpdGU6ICNmM2YzZjM7XHJcbiRncmVlbjogIzE4Y2YwMDtcclxuJGdyZWVuLWRhcms6ICMwZDZlMDA7XHJcbiRyZWQ6ICNjZjAwMDA7XHJcbiRyZWQtZGFyazogIzZlMDAwMDtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4keWVsbG93OiAjZTdlNzAxZTE7XHJcbiRvcmFuZ2U6ICNmOGE4MTNlMDtcclxuXHJcblxyXG4vL2ZvbnRzXHJcblxyXG4vL2ZvbnQtc2l6ZVxyXG4kZi1zaXplLXNtOiAxMHB4O1xyXG4kZi1zaXplLW1kOiAxNHB4O1xyXG4kZi1zaXplLW1iOiAyMHB4O1xyXG4kZi1zaXplLWJnOiAyMnB4O1xyXG4kZi1zaXplLWxnOiAyOHB4O1xyXG4kZi1zaXplLXhsOiAzMnB4O1xyXG4kZi1zaXplLXh4bDogNTBweDtcclxuXHJcbi8vZm9udC13ZWlnaHRcclxuJGYtd2VpZ2h0LTQwMDogNDAwO1xyXG4kZi13ZWlnaHQtNjAwOiA2MDA7XHJcbiRmLXdlaWdodC03MDA6IDcwMDtcclxuJGYtd2VpZ2h0LTgwMDogODAwO1xyXG5cclxuLy9mb250LWZhbWlseVxyXG4kZi1mYW1pbHk6J0lNIEZlbGwgRFcgUGljYSBTQycsIHNlcmlmO1xyXG5cclxuLy9zY3JlZW4gd2lkdGhcclxuJG1pbjogMHB4O1xyXG4kc206IDU0MHB4O1xyXG4kbWQ6IDcyMHB4O1xyXG4kbGc6IDk2MHB4O1xyXG4keGw6IDExNDBweDsiLCIubWFpbi10eHQge1xuICBjb2xvcjogI2YzZjNmMztcbiAgZm9udC1mYW1pbHk6IFwiSU0gRmVsbCBEVyBQaWNhIFNDXCIsIHNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5hIHtcbiAgY29sb3I6ICNhM2EzYTM7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogI2YzZjNmMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogI2NmMDAwMDtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6ICMxOGNmMDA7XG59XG5cbi5jb2xvci15ZWxsb3cge1xuICBjb2xvcjogI2U3ZTcwMWUxO1xufVxuXG4uY29sb3Itb3JhbmdlIHtcbiAgY29sb3I6ICNmOGE4MTNlMDtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU1ZTVlO1xufVxuXG4uZHJvcGRvd24tbWVudSBhIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2EzYTM7XG59XG5cbi5kcm9wZG93biB7XG4gIHotaW5kZXg6IDEwMDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvc3R5bGVzJztcclxuXHJcbi5kcm9wZG93bi1tZW51e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktZGFyaztcclxufVxyXG4uZHJvcGRvd24tbWVudSBhe1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5O1xyXG59XHJcblxyXG4uZHJvcGRvd257XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-menu',
          templateUrl: './nav-menu.component.html',
          styleUrls: ['./nav-menu.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/settings/settings.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/settings/settings.component.ts ***!
    \*****************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppHomeSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_models_services_config_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/models/services/config/config.model */
    "./src/app/shared/models/services/config/config.model.ts");
    /* harmony import */


    var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/config.service */
    "./src/app/shared/services/config.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/togglebutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-togglebutton.js");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/radiobutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-radiobutton.js"); //angular
    //models


    function SettingsComponent_form_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("wrong", ctx_r31.timeVal.invalid);
      }
    }

    function SettingsComponent_form_1_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please correct the data. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_form_1_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Data has been saved! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    function SettingsComponent_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_form_1_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Multiplayer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Do you want play with time?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-toggleButton", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_form_1_Template_p_toggleButton_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.toggleFormTimeVal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SettingsComponent_form_1_div_11_Template, 2, 2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Number of Rounds:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Singleplayer & Multiplayer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Choose type of riddle:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p-radioButton", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_form_1_Template_p_radioButton_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.selectedValue = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p-radioButton", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_form_1_Template_p_radioButton_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.selectedValue = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SettingsComponent_form_1_div_27_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SettingsComponent_form_1_div_28_Template, 2, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r30.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.isDisable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("wrong", ctx_r30.rounds.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r30.selectedValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r30.selectedValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.succesAlert);
      }
    }

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(configService, fb) {
        _classCallCheck(this, SettingsComponent);

        this.configService = configService;
        this.fb = fb;
        this.selectedValue = "word";
        this.isDisable = true;
        this.succesAlert = false;
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.$res = this.configService._configData.subscribe(function (x) {
            _this5.config = x;
          });
          this.selectedValue = this.config.onlyWord ? "word" : "sentence";
          this.createForm();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.$res) {
            this.$res.unsubscribe();
          }
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.form = this.fb.group({
            timeCb: [this.config.useTime, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            timeVal: [this.config.sec, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10)]],
            rounds: [this.config.roundCount, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(2)]]
          });
        }
      }, {
        key: "toggleFormTimeVal",
        value: function toggleFormTimeVal() {
          this.isDisable = !this.isDisable;

          if (Boolean(this.form.value.timeCb)) {
            this.form.controls.timeVal.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          } else {
            this.form.controls.timeVal.clearValidators();
          }

          this.form.controls.timeVal.updateValueAndValidity();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;

          if (this.form.valid) {
            var conf = new src_app_shared_models_services_config_config_model__WEBPACK_IMPORTED_MODULE_2__["ConfigModel"](Boolean(this.form.value.timeCb), Number(this.form.controls.timeVal.value), this.selectedValue === "word" ? true : false, Number(this.form.controls.rounds.value));
            this.succesAlert = true;
            setTimeout(function () {
              _this6.succesAlert = false;
            }, 1000);
            this.configService.config = conf;
          }
        }
      }, {
        key: "error",
        get: function get() {
          return !this.form.valid;
        }
      }, {
        key: "timeVal",
        get: function get() {
          return this.form.get('timeVal');
        }
      }, {
        key: "rounds",
        get: function get() {
          return this.form.get('rounds');
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 2,
      vars: 1,
      consts: [["id", "settings"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "text-center"], [1, "option-area"], [1, "title-div"], [1, "form-group", "text-center"], ["binary", "true", "formControlName", "timeCb", "onLabel", "With_Time(sec)", "offLabel", "Without_Time", "onIcon", "pi pi-check", "offIcon", "pi pi-times", 3, "click"], ["class", "input-group text-center", 4, "ngIf"], ["type", "number", "min", "2", "max", "10", "formControlName", "rounds", "id", "round", "placeholder", "Rounds...", 1, "form-control", "text-center"], ["name", "password-type", "label", "Word", "value", "word", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "password-type", "label", "Sentence", "value", "sentence", 2, "margin-left", "10px", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "text-center", 2, "margin-top", "20px"], ["type", "submit", 1, "btn", "btn-outline-success"], ["class", "alert alert-secondary", "role", "alert", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "input-group", "text-center"], ["type", "number", "min", "10", "max", "60", "formControlName", "timeVal", "id", "time", "placeholder", "Seconds...", 1, "form-control", "text-center"], ["role", "alert", 1, "alert", "alert-secondary"], ["role", "alert", 1, "alert", "alert-success"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_form_1_Template, 29, 12, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.form);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_5__["ToggleButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__["RadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["input[_ngcontent-%COMP%] {\n  max-width: 100px;\n  font-size: 20px;\n  margin: auto;\n  background-color: #000000;\n  border: 1px solid #5e5e5e;\n  color: #f3f3f3;\n}\n\n#timeCb[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.wrong[_ngcontent-%COMP%] {\n  border: 2px solid #6e0000;\n}\n\n.alert[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  margin-top: 2%;\n}\n\n.option-area[_ngcontent-%COMP%] {\n  border: 1px solid #5e5e5e;\n  border-radius: 15px;\n  width: 60%;\n  margin-left: 20%;\n  margin-top: 20px;\n}\n\n.title-div[_ngcontent-%COMP%] {\n  margin-top: -15px;\n  margin-left: 5%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n@media screen and (min-width: 0px) and (max-width: 540px) {\n  .option-area[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-left: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2V0dGluZ3MvRDpcXFdpc2llbGVjXFx3aXNpZWxlY1JlcG9cXHdpc2llbGVjXFxzcmNcXGFwcC9ob21lXFxzZXR0aW5nc1xcc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJob21lL3NldHRpbmdzL0Q6XFxXaXNpZWxlY1xcd2lzaWVsZWNSZXBvXFx3aXNpZWxlY1xcc3JjXFxhcHAvLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwiaG9tZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUNjUTtFRGJSLFlBQUE7RUFDQSx5QkNFSTtFRERKLHlCQUFBO0VBQ0EsY0NMSTtBQ0lSOztBRklBO0VBQ0ksWUFBQTtBRURKOztBRklBO0VBQ0kseUJBQUE7QUVESjs7QUZJQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRURKOztBRklBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FFREo7O0FGSUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUVESjs7QUZJQTtFQUNJLFlBQUE7QUVESjs7QUZJQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGdCQUFBO0VFRE47QUFDRiIsImZpbGUiOiJob21lL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG5pbnB1dHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6ICRmLXNpemUtbWI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheS1kYXJrO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxufVxyXG5cclxuI3RpbWVDYntcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLndyb25ne1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJHJlZC1kYXJrO1xyXG59XHJcblxyXG4uYWxlcnR7ICAgXHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5vcHRpb24tYXJlYXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5LWRhcms7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUtZGl2e1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRzbSkge1xyXG4gICAgLm9wdGlvbi1hcmVhe1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIH1cclxufSIsIi8vY29sb3JzXHJcbiRncmF5OiAjYTNhM2EzO1xyXG4kZ3JheS1kYXJrOiAjNWU1ZTVlO1xyXG4kd2hpdGU6ICNmM2YzZjM7XHJcbiRncmVlbjogIzE4Y2YwMDtcclxuJGdyZWVuLWRhcms6ICMwZDZlMDA7XHJcbiRyZWQ6ICNjZjAwMDA7XHJcbiRyZWQtZGFyazogIzZlMDAwMDtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4keWVsbG93OiAjZTdlNzAxZTE7XHJcbiRvcmFuZ2U6ICNmOGE4MTNlMDtcclxuXHJcblxyXG4vL2ZvbnRzXHJcblxyXG4vL2ZvbnQtc2l6ZVxyXG4kZi1zaXplLXNtOiAxMHB4O1xyXG4kZi1zaXplLW1kOiAxNHB4O1xyXG4kZi1zaXplLW1iOiAyMHB4O1xyXG4kZi1zaXplLWJnOiAyMnB4O1xyXG4kZi1zaXplLWxnOiAyOHB4O1xyXG4kZi1zaXplLXhsOiAzMnB4O1xyXG4kZi1zaXplLXh4bDogNTBweDtcclxuXHJcbi8vZm9udC13ZWlnaHRcclxuJGYtd2VpZ2h0LTQwMDogNDAwO1xyXG4kZi13ZWlnaHQtNjAwOiA2MDA7XHJcbiRmLXdlaWdodC03MDA6IDcwMDtcclxuJGYtd2VpZ2h0LTgwMDogODAwO1xyXG5cclxuLy9mb250LWZhbWlseVxyXG4kZi1mYW1pbHk6J0lNIEZlbGwgRFcgUGljYSBTQycsIHNlcmlmO1xyXG5cclxuLy9zY3JlZW4gd2lkdGhcclxuJG1pbjogMHB4O1xyXG4kc206IDU0MHB4O1xyXG4kbWQ6IDcyMHB4O1xyXG4kbGc6IDk2MHB4O1xyXG4keGw6IDExNDBweDsiLCJpbnB1dCB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNWU1ZTVlO1xuICBjb2xvcjogI2YzZjNmMztcbn1cblxuI3RpbWVDYiB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLndyb25nIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzZlMDAwMDtcbn1cblxuLmFsZXJ0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLm9wdGlvbi1hcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVlNWU1ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRpdGxlLWRpdiB7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgLm9wdGlvbi1hcmVhIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/helpers/ParseToStringArr-helper.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/helpers/ParseToStringArr-helper.ts ***!
    \***********************************************************/

  /*! exports provided: ParseToStringArrHelper */

  /***/
  function srcAppSharedHelpersParseToStringArrHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParseToStringArrHelper", function () {
      return ParseToStringArrHelper;
    });

    var ParseToStringArrHelper = /*#__PURE__*/function () {
      function ParseToStringArrHelper() {
        _classCallCheck(this, ParseToStringArrHelper);
      }

      _createClass(ParseToStringArrHelper, null, [{
        key: "parseToStringArr",
        value: function parseToStringArr(value) {
          value = value.toUpperCase();
          var resultArr = [];

          for (var i = 0; i < value.length; i++) {
            resultArr.push(value.charAt(i));
          }

          return resultArr;
        }
      }]);

      return ParseToStringArrHelper;
    }();
    /***/

  },

  /***/
  "./src/app/shared/helpers/RandomIntInclusive-helper.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/helpers/RandomIntInclusive-helper.ts ***!
    \*************************************************************/

  /*! exports provided: RandomIntInclusiveHelper */

  /***/
  function srcAppSharedHelpersRandomIntInclusiveHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RandomIntInclusiveHelper", function () {
      return RandomIntInclusiveHelper;
    });

    var RandomIntInclusiveHelper = /*#__PURE__*/function () {
      function RandomIntInclusiveHelper() {
        _classCallCheck(this, RandomIntInclusiveHelper);
      }

      _createClass(RandomIntInclusiveHelper, null, [{
        key: "getRandomIntInclusive",
        value: function getRandomIntInclusive(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
      }]);

      return RandomIntInclusiveHelper;
    }();
    /***/

  },

  /***/
  "./src/app/shared/models/char.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/models/char.model.ts ***!
    \*********************************************/

  /*! exports provided: CharModel */

  /***/
  function srcAppSharedModelsCharModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharModel", function () {
      return CharModel;
    });

    var CharModel = function CharModel(id, _char2, selected, isInPasswd) {
      _classCallCheck(this, CharModel);

      this.id = id;
      this["char"] = _char2;
      this.selected = selected;
      this.isInPasswd = isInPasswd;
    };
    /***/

  },

  /***/
  "./src/app/shared/models/player.model.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/models/player.model.ts ***!
    \***********************************************/

  /*! exports provided: PlayerModel */

  /***/
  function srcAppSharedModelsPlayerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerModel", function () {
      return PlayerModel;
    });

    var PlayerModel = function PlayerModel(id, name) {
      var isPlaying = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _classCallCheck(this, PlayerModel);

      this.id = id;
      this.name = name;
      this.isPlaying = isPlaying;
    };
    /***/

  },

  /***/
  "./src/app/shared/models/services/config/config.model.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/models/services/config/config.model.ts ***!
    \***************************************************************/

  /*! exports provided: ConfigModel */

  /***/
  function srcAppSharedModelsServicesConfigConfigModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigModel", function () {
      return ConfigModel;
    });

    var ConfigModel = function ConfigModel() {
      var useTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var sec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
      var onlyWord = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var roundCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
      var multiPlrGame = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

      _classCallCheck(this, ConfigModel);

      this.useTime = useTime;
      this.sec = sec;
      this.onlyWord = onlyWord;
      this.roundCount = roundCount;
      this.multiPlrGame = multiPlrGame;
    };
    /***/

  },

  /***/
  "./src/app/shared/services/config.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/config.service.ts ***!
    \***************************************************/

  /*! exports provided: ConfigService */

  /***/
  function srcAppSharedServicesConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_services_config_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/services/config/config.model */
    "./src/app/shared/models/services/config/config.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); //angular
    //models


    var ConfigService = /*#__PURE__*/function () {
      function ConfigService() {
        _classCallCheck(this, ConfigService);

        this._configData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.clear();
        this.dataStore.configData = new _models_services_config_config_model__WEBPACK_IMPORTED_MODULE_1__["ConfigModel"](true, 11, true, 10, true);
        this.refreshConfig(this.dataStore.configData);
      }

      _createClass(ConfigService, [{
        key: "clear",
        value: function clear() {
          this.dataStore = {
            configData: null
          };
        }
      }, {
        key: "refreshConfig",
        value: function refreshConfig(config) {
          this._configData.next(config);
        }
      }, {
        key: "config",
        set: function set(conf) {
          this.dataStore.configData = conf;
          this.refreshConfig(this.dataStore.configData);
        }
      }, {
        key: "typeOfGame",
        set: function set(multiPlrGame) {
          this.dataStore.configData.multiPlrGame = multiPlrGame;
          this.refreshConfig(this.dataStore.configData);
        }
      }, {
        key: "configData",
        get: function get() {
          return this._configData.asObservable();
        }
      }]);

      return ConfigService;
    }();

    ConfigService.ɵfac = function ConfigService_Factory(t) {
      return new (t || ConfigService)();
    };

    ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfigService,
      factory: ConfigService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/db.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/services/db.service.ts ***!
    \***********************************************/

  /*! exports provided: DbService */

  /***/
  function srcAppSharedServicesDbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DbService", function () {
      return DbService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); //angular


    var DbService = function DbService() {
      _classCallCheck(this, DbService);

      this.alphabet = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'];
      this.passwords = ['CUCUMBER', 'CAR', 'HOUSE', 'TREE', 'WINDOW', 'DESC', 'WARDROBE', 'CHAIR', 'BALL', 'GRASS', 'VELVETY', 'GRAY', 'ELECTRODE', 'LEBANON', 'STAR', 'TRACTOR', 'CAPTAIN', 'BOOMERANG', 'MICROPHONE', 'DEALER', 'SHOPKEEPER', 'BRICK', 'AIRBRICK', 'POND'];
      this.sentences = ['OBJECT ORIENTATION', 'STATE OF SOBRIETY', 'HARD LEARNING', 'TIME FOR HEALTH', 'SCORE A GOAL', 'GREAT GAME', 'BUILD A HOUSE', 'GO BACK TO THE FAMILY', 'ELECTION SPOT', 'TEST TIME'];
    };

    DbService.ɵfac = function DbService_Factory(t) {
      return new (t || DbService)();
    };

    DbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DbService,
      factory: DbService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Wisielec\wisielecRepo\wisielec\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map