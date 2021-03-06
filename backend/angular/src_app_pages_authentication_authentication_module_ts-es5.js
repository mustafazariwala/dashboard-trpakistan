(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_pages_authentication_authentication_module_ts"], {
    /***/
    44301: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationRoutingModule": function AuthenticationRoutingModule() {
          return (
            /* binding */
            _AuthenticationRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _login_simple_simple_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login/simple/simple.component */
      94573);
      /* harmony import */


      var _login_image_one_image_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/image-one/image-one.component */
      49278);
      /* harmony import */


      var _login_image_two_image_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/image-two/image-two.component */
      59313);
      /* harmony import */


      var _login_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/validation/validation.component */
      41344);
      /* harmony import */


      var _login_tool_tip_tool_tip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/tool-tip/tool-tip.component */
      43221);
      /* harmony import */


      var _login_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/sweetalert/sweetalert.component */
      4724);
      /* harmony import */


      var _register_simple_simple_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register/simple/simple.component */
      81936);
      /* harmony import */


      var _register_image_one_image_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./register/image-one/image-one.component */
      2412);
      /* harmony import */


      var _register_image_two_image_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./register/image-two/image-two.component */
      79918);
      /* harmony import */


      var _unlock_user_unlock_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./unlock-user/unlock-user.component */
      23629);
      /* harmony import */


      var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./forget-password/forget-password.component */
      55430);
      /* harmony import */


      var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./reset-password/reset-password.component */
      13587);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'login',
        children: [{
          path: 'simple',
          component: _login_simple_simple_component__WEBPACK_IMPORTED_MODULE_0__.LoginSimpleComponent
        }, {
          path: 'image-one',
          component: _login_image_one_image_one_component__WEBPACK_IMPORTED_MODULE_1__.LoginImageOneComponent
        }, {
          path: 'image-two',
          component: _login_image_two_image_two_component__WEBPACK_IMPORTED_MODULE_2__.LoginImageTwoComponent
        }, {
          path: 'validation',
          component: _login_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__.ValidationComponent
        }, {
          path: 'tooltip',
          component: _login_tool_tip_tool_tip_component__WEBPACK_IMPORTED_MODULE_4__.ToolTipComponent
        }, {
          path: 'sweetalert',
          component: _login_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_5__.SweetalertComponent
        }]
      }, {
        path: 'register',
        children: [{
          path: 'simple',
          component: _register_simple_simple_component__WEBPACK_IMPORTED_MODULE_6__.RegisterSimpleComponent
        }, {
          path: 'image-one',
          component: _register_image_one_image_one_component__WEBPACK_IMPORTED_MODULE_7__.RegisterImageOneComponent
        }, {
          path: 'image-two',
          component: _register_image_two_image_two_component__WEBPACK_IMPORTED_MODULE_8__.RegisterImageTwoComponent
        }]
      }, {
        path: 'unlock-user',
        component: _unlock_user_unlock_user_component__WEBPACK_IMPORTED_MODULE_9__.UnlockUserComponent
      }, {
        path: 'forgot-password',
        component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_10__.ForgetPasswordComponent
      }, {
        path: 'reset-password',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__.ResetPasswordComponent
      }];

      var _AuthenticationRoutingModule = function _AuthenticationRoutingModule() {
        _classCallCheck(this, _AuthenticationRoutingModule);
      };

      _AuthenticationRoutingModule.??fac = function AuthenticationRoutingModule_Factory(t) {
        return new (t || _AuthenticationRoutingModule)();
      };

      _AuthenticationRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineNgModule"]({
        type: _AuthenticationRoutingModule
      });
      _AuthenticationRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["????setNgModuleScope"](_AuthenticationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    66513: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationModule": function AuthenticationModule() {
          return (
            /* binding */
            _AuthenticationModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/shared.module */
      44466);
      /* harmony import */


      var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authentication-routing.module */
      44301);
      /* harmony import */


      var _login_simple_simple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/simple/simple.component */
      94573);
      /* harmony import */


      var _login_image_one_image_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/image-one/image-one.component */
      49278);
      /* harmony import */


      var _login_image_two_image_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/image-two/image-two.component */
      59313);
      /* harmony import */


      var _login_validation_validation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/validation/validation.component */
      41344);
      /* harmony import */


      var _login_tool_tip_tool_tip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login/tool-tip/tool-tip.component */
      43221);
      /* harmony import */


      var _login_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/sweetalert/sweetalert.component */
      4724);
      /* harmony import */


      var _register_simple_simple_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./register/simple/simple.component */
      81936);
      /* harmony import */


      var _register_image_one_image_one_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./register/image-one/image-one.component */
      2412);
      /* harmony import */


      var _register_image_two_image_two_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./register/image-two/image-two.component */
      79918);
      /* harmony import */


      var _unlock_user_unlock_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./unlock-user/unlock-user.component */
      23629);
      /* harmony import */


      var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./forget-password/forget-password.component */
      55430);
      /* harmony import */


      var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./reset-password/reset-password.component */
      13587);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AuthenticationModule = function _AuthenticationModule() {
        _classCallCheck(this, _AuthenticationModule);
      };

      _AuthenticationModule.??fac = function AuthenticationModule_Factory(t) {
        return new (t || _AuthenticationModule)();
      };

      _AuthenticationModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineNgModule"]({
        type: _AuthenticationModule
      });
      _AuthenticationModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthenticationRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["????setNgModuleScope"](_AuthenticationModule, {
          declarations: [_login_simple_simple_component__WEBPACK_IMPORTED_MODULE_2__.LoginSimpleComponent, _login_image_one_image_one_component__WEBPACK_IMPORTED_MODULE_3__.LoginImageOneComponent, _login_image_two_image_two_component__WEBPACK_IMPORTED_MODULE_4__.LoginImageTwoComponent, _login_validation_validation_component__WEBPACK_IMPORTED_MODULE_5__.ValidationComponent, _login_tool_tip_tool_tip_component__WEBPACK_IMPORTED_MODULE_6__.ToolTipComponent, _login_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_7__.SweetalertComponent, _register_simple_simple_component__WEBPACK_IMPORTED_MODULE_8__.RegisterSimpleComponent, _register_image_one_image_one_component__WEBPACK_IMPORTED_MODULE_9__.RegisterImageOneComponent, _register_image_two_image_two_component__WEBPACK_IMPORTED_MODULE_10__.RegisterImageTwoComponent, _unlock_user_unlock_user_component__WEBPACK_IMPORTED_MODULE_11__.UnlockUserComponent, _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_12__.ForgetPasswordComponent, _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__.ResetPasswordComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthenticationRoutingModule]
        });
      })();
      /***/

    },

    /***/
    55430: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgetPasswordComponent": function ForgetPasswordComponent() {
          return (
            /* binding */
            _ForgetPasswordComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ForgetPasswordComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ForgetPasswordComponent_div_46_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ForgetPasswordComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ForgetPasswordComponent_div_47_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _ForgetPasswordComponent = /*#__PURE__*/function () {
        function _ForgetPasswordComponent() {
          _classCallCheck(this, _ForgetPasswordComponent);

          this.show = false;
        }

        _createClass(_ForgetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
        }]);

        return _ForgetPasswordComponent;
      }();

      _ForgetPasswordComponent.??fac = function ForgetPasswordComponent_Factory(t) {
        return new (t || _ForgetPasswordComponent)();
      };

      _ForgetPasswordComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ForgetPasswordComponent,
        selectors: [["app-forget-password"]],
        decls: 63,
        vars: 4,
        consts: [[1, "page-wrapper"], [1, "container-fluid", "p-0"], [1, "row"], [1, "col-12"], [1, "login-card"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo/login.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], [1, "theme-form"], [1, "form-group"], [1, "col-form-label"], [1, "col-md-3"], ["type", "text", "value", "+ 91", 1, "form-control", "mb-1"], [1, "col-md-9"], ["type", "tel", "value", "000-000-0000", 1, "form-control", "mb-1"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "m-t-10"], [1, "text-center", "mt-4", "mb-4"], [1, "reset-password-link"], ["routerLink", "/", 1, "btn-link", "text-danger"], [1, "col-form-label", "pt-0"], [1, "col"], ["type", "text", "value", "00", "maxlength", "2", 1, "form-control", "text-center", "opt-text"], [1, "mt-4"], ["name", "login[password]", "required", "", "placeholder", "*********", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], ["type", "password", "name", "login[password]", "required", "", "placeholder", "*********", 1, "form-control"], [1, "form-group", "mb-0"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1", 1, "text-muted"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-4", "mb-0"], [1, "ml-2", 3, "routerLink"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function ForgetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Reset Your Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Enter Your Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Send");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "If don't receive OTP?\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Resend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Enter OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Create Your Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "New Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, ForgetPasswordComponent_div_46_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, ForgetPasswordComponent_div_47_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Retype Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Remember password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Already have an password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.show ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/authentication/login/simple");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    49278: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginImageOneComponent": function LoginImageOneComponent() {
          return (
            /* binding */
            _LoginImageOneComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/feather-icons/feather-icons.component */
      61676);

      function LoginImageOneComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginImageOneComponent_div_25_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r2.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function LoginImageOneComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginImageOneComponent_div_26_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r4.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          "background-image": "url(assets/images/login/2.jpg)",
          "background-size": "cover",
          "background-position": "center center",
          "display": "block"
        };
      };

      var _LoginImageOneComponent = /*#__PURE__*/function () {
        function _LoginImageOneComponent() {
          _classCallCheck(this, _LoginImageOneComponent);

          this.show = false;
        }

        _createClass(_LoginImageOneComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
        }]);

        return _LoginImageOneComponent;
      }();

      _LoginImageOneComponent.??fac = function LoginImageOneComponent_Factory(t) {
        return new (t || _LoginImageOneComponent)();
      };

      _LoginImageOneComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _LoginImageOneComponent,
        selectors: [["app-login-image-one"]],
        decls: 53,
        vars: 10,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-7", 3, "ngStyle"], ["src", "assets/images/login/2.jpg", "alt", "looginpage", 1, "bg-img-cover", "bg-center", "d-none"], [1, "col-xl-5", "p-0"], [1, "login-card"], ["href", "#", 1, "logo", "text-left"], ["src", "assets/images/logo/login.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], [1, "theme-form"], [1, "form-group"], [1, "col-form-label"], ["type", "email", "required", "", "placeholder", "app@yourmail.com", 1, "form-control"], ["name", "login[password]", "required", "", "placeholder", "*********", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], [1, "form-group", "mb-0"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1", 1, "text-muted"], [1, "link", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "text-muted", "mt-4", "or"], [1, "social", "mt-4"], [1, "btn-showcase"], ["href", "https://www.linkedin.com/login", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-linkedin", 3, "icon"], ["href", "https://twitter.com/login?lang=en", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-twitter", 3, "icon"], ["href", "https://www.facebook.com/", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-fb", 3, "icon"], [1, "mt-4", "mb-0"], [1, "ml-2", 3, "routerLink"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function LoginImageOneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Sign in to account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Enter your email & password to login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](25, LoginImageOneComponent_div_25_Template, 2, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, LoginImageOneComponent_div_26_Template, 2, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Remember password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "h6", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Or Sign in with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "app-feather-icons", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, " LinkedIn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "app-feather-icons", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "twitter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "app-feather-icons", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "facebook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Don't have account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](9, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", ctx.show ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/forgot-password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "linkedin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/register/simple");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1vbmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    59313: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginImageTwoComponent": function LoginImageTwoComponent() {
          return (
            /* binding */
            _LoginImageTwoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/feather-icons/feather-icons.component */
      61676);

      function LoginImageTwoComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginImageTwoComponent_div_25_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r2.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function LoginImageTwoComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginImageTwoComponent_div_26_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r4.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          "background-image": "url(assets/images/login/3.jpg)",
          "background-size": "cover",
          "background-position": "center center",
          "display": "block"
        };
      };

      var _LoginImageTwoComponent = /*#__PURE__*/function () {
        function _LoginImageTwoComponent() {
          _classCallCheck(this, _LoginImageTwoComponent);

          this.show = false;
        }

        _createClass(_LoginImageTwoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
        }]);

        return _LoginImageTwoComponent;
      }();

      _LoginImageTwoComponent.??fac = function LoginImageTwoComponent_Factory(t) {
        return new (t || _LoginImageTwoComponent)();
      };

      _LoginImageTwoComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _LoginImageTwoComponent,
        selectors: [["app-login-image-two"]],
        decls: 53,
        vars: 10,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-5", 3, "ngStyle"], ["src", "assets/images/login/3.jpg", "alt", "looginpage", 1, "bg-img-cover", "bg-center", "d-none"], [1, "col-xl-7", "p-0"], [1, "login-card"], ["href", "#", 1, "logo", "text-left"], ["src", "assets/images/logo/login.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], [1, "theme-form"], [1, "form-group"], [1, "col-form-label"], ["type", "email", "required", "", "placeholder", "app@yourmail.com", 1, "form-control"], ["name", "login[password]", "required", "", "placeholder", "*********", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], [1, "form-group", "mb-0"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1", 1, "text-muted"], [1, "link", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "text-muted", "mt-4", "or"], [1, "social", "mt-4"], [1, "btn-showcase"], ["href", "https://www.linkedin.com/login", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-linkedin", 3, "icon"], ["href", "https://twitter.com/login?lang=en", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-twitter", 3, "icon"], ["href", "https://www.facebook.com/", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-fb", 3, "icon"], [1, "mt-4", "mb-0"], [1, "ml-2", 3, "routerLink"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function LoginImageTwoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Sign in to account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Enter your email & password to login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](25, LoginImageTwoComponent_div_25_Template, 2, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, LoginImageTwoComponent_div_26_Template, 2, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Remember password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "h6", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Or Sign in with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "app-feather-icons", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, " LinkedIn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "app-feather-icons", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "twitter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "app-feather-icons", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "facebook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Don't have account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](9, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", ctx.show ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/forgot-password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "linkedin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/register/simple");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS10d28uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    94573: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginSimpleComponent": function LoginSimpleComponent() {
          return (
            /* binding */
            _LoginSimpleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/feather-icons/feather-icons.component */
      61676);

      function LoginSimpleComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginSimpleComponent_div_23_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r2.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function LoginSimpleComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginSimpleComponent_div_24_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r4.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var _LoginSimpleComponent = /*#__PURE__*/function () {
        function _LoginSimpleComponent() {
          _classCallCheck(this, _LoginSimpleComponent);

          this.show = false;
        }

        _createClass(_LoginSimpleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
        }]);

        return _LoginSimpleComponent;
      }();

      _LoginSimpleComponent.??fac = function LoginSimpleComponent_Factory(t) {
        return new (t || _LoginSimpleComponent)();
      };

      _LoginSimpleComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _LoginSimpleComponent,
        selectors: [["app-login-simple"]],
        decls: 51,
        vars: 8,
        consts: [[1, "container-fluid", "p-0"], [1, "row"], [1, "col-12"], [1, "login-card"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo/login.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], [1, "theme-form"], [1, "form-group"], [1, "col-form-label"], ["type", "email", "required", "", "placeholder", "app@yourmail.com", 1, "form-control"], ["name", "login[password]", "required", "", "placeholder", "*********", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], [1, "form-group", "mb-0"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1", 1, "text-muted"], [1, "link", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "text-muted", "mt-4", "or"], [1, "social", "mt-4"], [1, "btn-showcase"], ["href", "https://www.linkedin.com/login", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-linkedin", 3, "icon"], ["href", "https://twitter.com/login?lang=en", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-twitter", 3, "icon"], ["href", "https://www.facebook.com/", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-fb", 3, "icon"], [1, "mt-4", "mb-0"], [1, "ml-2", 3, "routerLink"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function LoginSimpleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Sign in to account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Enter your email & password to login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, LoginSimpleComponent_div_23_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, LoginSimpleComponent_div_24_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Remember password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "h6", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Or Sign in with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "app-feather-icons", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, " LinkedIn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "app-feather-icons", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "twitter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "app-feather-icons", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "facebook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Don't have account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", ctx.show ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/forgot-password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "linkedin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/register/simple");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    4724: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SweetalertComponent": function SweetalertComponent() {
          return (
            /* binding */
            _SweetalertComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/feather-icons/feather-icons.component */
      61676);

      function SweetalertComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function SweetalertComponent_div_23_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r2.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function SweetalertComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function SweetalertComponent_div_24_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r4.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var Swal = __webpack_require__(
      /*! sweetalert2 */
      88259);

      var _SweetalertComponent = /*#__PURE__*/function () {
        function _SweetalertComponent(fb) {
          _classCallCheck(this, _SweetalertComponent);

          this.fb = fb;
          this.show = false;
          this.loginForm = fb.group({
            email: [''],
            password: ['']
          });
        }

        _createClass(_SweetalertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
        }, {
          key: "signIn",
          value: function signIn() {
            if (!this.loginForm.value.email || !this.loginForm.value.password) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email and password is required.'
              });
            } else {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Logged In successfully.'
              });
            }
          }
        }]);

        return _SweetalertComponent;
      }();

      _SweetalertComponent.??fac = function SweetalertComponent_Factory(t) {
        return new (t || _SweetalertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
      };

      _SweetalertComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _SweetalertComponent,
        selectors: [["app-login-sweetalert"]],
        decls: 51,
        vars: 9,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "p-0"], [1, "login-card"], ["href", "#", 1, "logo", "text-left"], ["src", "assets/images/logo/login.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], [1, "theme-form", 3, "formGroup"], [1, "form-group"], [1, "col-form-label"], ["type", "email", "required", "", "placeholder", "app@yourmail.com", "formControlName", "email", 1, "form-control"], ["name", "login[password]", "required", "", "placeholder", "*********", "formControlName", "password", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], [1, "form-group", "mb-0"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1", 1, "text-muted"], [1, "link", 3, "routerLink"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "text-muted", "mt-4", "or"], [1, "social", "mt-4"], [1, "btn-showcase"], ["href", "https://www.linkedin.com/login", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-linkedin", 3, "icon"], ["href", "https://twitter.com/login?lang=en", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-twitter", 3, "icon"], ["href", "https://www.facebook.com/", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-fb", 3, "icon"], [1, "mt-4", "mb-0"], [1, "ml-2", 3, "routerLink"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function SweetalertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Sign in to account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Enter your email & password to login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, SweetalertComponent_div_23_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, SweetalertComponent_div_24_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Remember password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function SweetalertComponent_Template_button_click_32_listener() {
              return ctx.signIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "h6", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Or Sign in with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "app-feather-icons", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, " LinkedIn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "app-feather-icons", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "twitter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "app-feather-icons", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "facebook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Don't have account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", ctx.show ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/forgot-password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "linkedin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/register/simple");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2VldGFsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    43221: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToolTipComponent": function ToolTipComponent() {
          return (
            /* binding */
            _ToolTipComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/feather-icons/feather-icons.component */
      61676);

      function ToolTipComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Email is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function ToolTipComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Invalid Email Address.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function ToolTipComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Password is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function ToolTipComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ToolTipComponent_div_28_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r5.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function ToolTipComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ToolTipComponent_div_29_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r7.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          "background-image": "url(assets/images/login/3.jpg)",
          "background-size": "cover",
          "background-position": "center center",
          "display": "block"
        };
      };

      var _ToolTipComponent = /*#__PURE__*/function () {
        function _ToolTipComponent(fb) {
          _classCallCheck(this, _ToolTipComponent);

          this.fb = fb;
          this.show = false;
          this.loginForm = fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
          });
        }

        _createClass(_ToolTipComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
        }]);

        return _ToolTipComponent;
      }();

      _ToolTipComponent.??fac = function ToolTipComponent_Factory(t) {
        return new (t || _ToolTipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
      };

      _ToolTipComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _ToolTipComponent,
        selectors: [["app-login-tool-tip"]],
        decls: 56,
        vars: 17,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-5", 3, "ngStyle"], ["src", "assets/images/login/3.jpg", "alt", "looginpage", 1, "bg-img-cover", "bg-center", "d-none"], [1, "col-xl-7", "p-0"], [1, "login-card"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo/login.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], ["novalidate", "", 1, "theme-form", "needs-validation", 3, "formGroup"], [1, "form-group"], [1, "col-form-label"], ["type", "email", "required", "", "placeholder", "app@yourmail.com", "formControlName", "email", 1, "form-control"], ["class", "invalid-tooltip", 4, "ngIf"], ["name", "login[password]", "required", "", "placeholder", "*********", "formControlName", "password", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], [1, "form-group", "mb-0"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1", 1, "text-muted"], [1, "link", 3, "routerLink"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "text-muted", "mt-4", "or"], [1, "social", "mt-4"], [1, "btn-showcase"], ["href", "https://www.linkedin.com/login", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-linkedin", 3, "icon"], ["href", "https://twitter.com/login?lang=en", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-twitter", 3, "icon"], ["href", "https://www.facebook.com/", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-fb", 3, "icon"], [1, "mt-4", "mb-0"], [1, "ml-2", 3, "routerLink"], [1, "invalid-tooltip"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function ToolTipComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Sign in to account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Enter your email & password to login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, ToolTipComponent_div_21_Template, 2, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, ToolTipComponent_div_22_Template, 2, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, ToolTipComponent_div_27_Template, 2, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](28, ToolTipComponent_div_28_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](29, ToolTipComponent_div_29_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Remember password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Or Sign in with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "app-feather-icons", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, " LinkedIn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "app-feather-icons", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "twitter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](50, "app-feather-icons", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "facebook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Don't have account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](16, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("was-validated", !ctx.loginForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loginForm.controls.email.touched && (ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loginForm.controls.email.touched && (ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors.email));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", ctx.show ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loginForm.controls.password.touched && (ctx.loginForm.controls.password.errors == null ? null : ctx.loginForm.controls.password.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/forgot-password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx.loginForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "linkedin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/register/simple");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sLXRpcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    41344: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValidationComponent": function ValidationComponent() {
          return (
            /* binding */
            _ValidationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/feather-icons/feather-icons.component */
      61676);

      function ValidationComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Email is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function ValidationComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Invalid Email Address.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function ValidationComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Password is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function ValidationComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ValidationComponent_div_28_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r5.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function ValidationComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ValidationComponent_div_29_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r7.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          "background-image": "url(assets/images/login/1.jpg)",
          "background-size": "cover",
          "background-position": "center center",
          "display": "block"
        };
      };

      var _ValidationComponent = /*#__PURE__*/function () {
        function _ValidationComponent(fb) {
          _classCallCheck(this, _ValidationComponent);

          this.fb = fb;
          this.show = false;
          this.loginForm = fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
          });
        }

        _createClass(_ValidationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
        }]);

        return _ValidationComponent;
      }();

      _ValidationComponent.??fac = function ValidationComponent_Factory(t) {
        return new (t || _ValidationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
      };

      _ValidationComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _ValidationComponent,
        selectors: [["app-login-validation"]],
        decls: 56,
        vars: 17,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-7", "order-1", 3, "ngStyle"], ["src", "assets/images/login/1.jpg", "alt", "looginpage", 1, "bg-img-cover", "bg-center", "d-none"], [1, "col-xl-5", "p-0"], [1, "login-card"], ["routerLink", "/", 1, "logo", "text-left"], ["src", "assets/images/logo/login.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], ["novalidate", "", 1, "theme-form", "needs-validation", 3, "formGroup"], [1, "form-group"], [1, "col-form-label"], ["type", "email", "required", "", "placeholder", "app@yourmail.com", "formControlName", "email", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["name", "login[password]", "required", "", "placeholder", "*********", "formControlName", "password", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], [1, "form-group", "mb-0"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1", 1, "text-muted"], [1, "link", 3, "routerLink"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "text-muted", "mt-4", "or"], [1, "social", "mt-4"], [1, "btn-showcase"], ["href", "https://www.linkedin.com/login", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-linkedin", 3, "icon"], ["href", "https://twitter.com/login?lang=en", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-twitter", 3, "icon"], ["href", "https://www.facebook.com/", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-fb", 3, "icon"], [1, "mt-4", "mb-0"], [1, "ml-2", 3, "routerLink"], [1, "invalid-feedback"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function ValidationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Sign in to account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Enter your email & password to login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, ValidationComponent_div_21_Template, 2, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, ValidationComponent_div_22_Template, 2, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, ValidationComponent_div_27_Template, 2, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](28, ValidationComponent_div_28_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](29, ValidationComponent_div_29_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Remember password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Or Sign in with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "app-feather-icons", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, " LinkedIn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "app-feather-icons", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "twitter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](50, "app-feather-icons", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "facebook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Don't have account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](16, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("was-validated", !ctx.loginForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loginForm.controls.email.touched && (ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loginForm.controls.email.touched && (ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors.email));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", ctx.show ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loginForm.controls.password.touched && (ctx.loginForm.controls.password.errors == null ? null : ctx.loginForm.controls.password.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/forgot-password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx.loginForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "linkedin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/register/simple");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxpZGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    2412: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterImageOneComponent": function RegisterImageOneComponent() {
          return (
            /* binding */
            _RegisterImageOneComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/feather-icons/feather-icons.component */
      61676);

      function RegisterImageOneComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RegisterImageOneComponent_div_33_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r2.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function RegisterImageOneComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RegisterImageOneComponent_div_34_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r4.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          "background-image": "url(assets/images/login/3.jpg)",
          "background-size": "cover",
          "background-position": "center center",
          "display": "block"
        };
      };

      var _RegisterImageOneComponent = /*#__PURE__*/function () {
        function _RegisterImageOneComponent() {
          _classCallCheck(this, _RegisterImageOneComponent);

          this.show = false;
        }

        _createClass(_RegisterImageOneComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
        }]);

        return _RegisterImageOneComponent;
      }();

      _RegisterImageOneComponent.??fac = function RegisterImageOneComponent_Factory(t) {
        return new (t || _RegisterImageOneComponent)();
      };

      _RegisterImageOneComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _RegisterImageOneComponent,
        selectors: [["app-register-image-one"]],
        decls: 61,
        vars: 9,
        consts: [[1, "container-fluid", "p-0"], [1, "row"], [1, "col-xl-5", 3, "ngStyle"], ["src", "assets/images/login/3.jpg", "alt", "looginpage", 1, "bg-img-cover", "bg-center", "d-none"], [1, "col-xl-7", "p-0"], [1, "login-card"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo/login.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], [1, "theme-form"], [1, "form-group"], [1, "col-form-label", "pt-0"], [1, "form-row"], [1, "col-6"], ["type", "text", "required", "", "placeholder", "First name", 1, "form-control"], ["type", "text", "required", "", "placeholder", "Last name", 1, "form-control"], [1, "col-form-label"], ["type", "email", "required", "", "placeholder", "app@yourmail.com", 1, "form-control"], ["name", "login[password]", "required", "", "placeholder", "*********", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], [1, "form-group", "mb-0"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1", 1, "text-muted"], ["routerLink", "/", 1, "ml-2"], ["type", "button", 1, "btn", "btn-primary", "btn-block"], [1, "text-muted", "mt-4", "or"], [1, "social", "mt-4"], [1, "btn-showcase"], ["href", "https://www.linkedin.com/login", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-linkedin", 3, "icon"], ["href", "https://twitter.com/login?lang=en", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-twitter", 3, "icon"], ["href", "https://www.facebook.com/", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-fb", 3, "icon"], [1, "mt-4", "mb-0"], [1, "ml-2", 3, "routerLink"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function RegisterImageOneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Create your account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Enter your personal details to create account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Your Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, RegisterImageOneComponent_div_33_Template, 2, 0, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](34, RegisterImageOneComponent_div_34_Template, 2, 0, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Agree with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "h6", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Or signup with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](49, "app-feather-icons", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, " LinkedIn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](52, "app-feather-icons", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "twitter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](55, "app-feather-icons", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "facebook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Already have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", ctx.show ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "linkedin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/login/simple");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1vbmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    79918: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterImageTwoComponent": function RegisterImageTwoComponent() {
          return (
            /* binding */
            _RegisterImageTwoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/feather-icons/feather-icons.component */
      61676);

      function RegisterImageTwoComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RegisterImageTwoComponent_div_33_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r2.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function RegisterImageTwoComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RegisterImageTwoComponent_div_34_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r4.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          "background-image": "url(assets/images/login/1.jpg)",
          "background-size": "cover",
          "background-position": "center center",
          "display": "block"
        };
      };

      var _RegisterImageTwoComponent = /*#__PURE__*/function () {
        function _RegisterImageTwoComponent() {
          _classCallCheck(this, _RegisterImageTwoComponent);

          this.show = false;
        }

        _createClass(_RegisterImageTwoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
        }]);

        return _RegisterImageTwoComponent;
      }();

      _RegisterImageTwoComponent.??fac = function RegisterImageTwoComponent_Factory(t) {
        return new (t || _RegisterImageTwoComponent)();
      };

      _RegisterImageTwoComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _RegisterImageTwoComponent,
        selectors: [["app-register-image-two"]],
        decls: 61,
        vars: 9,
        consts: [[1, "container-fluid", "p-0"], [1, "row"], [1, "col-xl-7", 3, "ngStyle"], ["src", "assets/images/login/1.jpg", "alt", "looginpage", 1, "bg-img-cover", "bg-center", "d-none"], [1, "col-xl-5", "p-0"], [1, "login-card"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo/login.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], [1, "theme-form"], [1, "form-group"], [1, "col-form-label", "pt-0"], [1, "form-row"], [1, "col-6"], ["type", "text", "required", "", "placeholder", "First name", 1, "form-control"], ["type", "text", "required", "", "placeholder", "Last name", 1, "form-control"], [1, "col-form-label"], ["type", "email", "required", "", "placeholder", "app@yourmail.com", 1, "form-control"], ["name", "login[password]", "required", "", "placeholder", "*********", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], [1, "form-group", "mb-0"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1", 1, "text-muted"], ["routerLink", "/", 1, "ml-2"], ["type", "button", 1, "btn", "btn-primary", "btn-block"], [1, "text-muted", "mt-4", "or"], [1, "social", "mt-4"], [1, "btn-showcase"], ["href", "https://www.linkedin.com/login", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-linkedin", 3, "icon"], ["href", "https://twitter.com/login?lang=en", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-twitter", 3, "icon"], ["href", "https://www.facebook.com/", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-fb", 3, "icon"], [1, "mt-4", "mb-0"], [1, "ml-2", 3, "routerLink"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function RegisterImageTwoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Create your account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Enter your personal details to create account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Your Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, RegisterImageTwoComponent_div_33_Template, 2, 0, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](34, RegisterImageTwoComponent_div_34_Template, 2, 0, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Agree with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "h6", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Or signup with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](49, "app-feather-icons", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, " LinkedIn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](52, "app-feather-icons", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "twitter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](55, "app-feather-icons", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "facebook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Already have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", ctx.show ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "linkedin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/login/simple");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS10d28uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    81936: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterSimpleComponent": function RegisterSimpleComponent() {
          return (
            /* binding */
            _RegisterSimpleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/feather-icons/feather-icons.component */
      61676);

      function RegisterSimpleComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RegisterSimpleComponent_div_31_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r2.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function RegisterSimpleComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RegisterSimpleComponent_div_32_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r4.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var _RegisterSimpleComponent = /*#__PURE__*/function () {
        function _RegisterSimpleComponent() {
          _classCallCheck(this, _RegisterSimpleComponent);

          this.show = false;
        }

        _createClass(_RegisterSimpleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
        }]);

        return _RegisterSimpleComponent;
      }();

      _RegisterSimpleComponent.??fac = function RegisterSimpleComponent_Factory(t) {
        return new (t || _RegisterSimpleComponent)();
      };

      _RegisterSimpleComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _RegisterSimpleComponent,
        selectors: [["app-register-simple"]],
        decls: 59,
        vars: 7,
        consts: [[1, "container-fluid", "p-0"], [1, "row"], [1, "col-12"], [1, "login-card"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo/login.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], [1, "theme-form"], [1, "form-group"], [1, "col-form-label", "pt-0"], [1, "form-row"], [1, "col-6"], ["type", "text", "required", "", "placeholder", "First name", 1, "form-control"], ["type", "text", "required", "", "placeholder", "Last name", 1, "form-control"], [1, "col-form-label"], ["type", "email", "required", "", "placeholder", "app@yourmail.com", 1, "form-control"], ["name", "login[password]", "required", "", "placeholder", "*********", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], [1, "form-group", "mb-0"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1", 1, "text-muted"], ["routerLink", "/", 1, "ml-2"], ["type", "button", 1, "btn", "btn-primary", "btn-block"], [1, "text-muted", "mt-4", "or"], [1, "social", "mt-4"], [1, "btn-showcase"], ["href", "https://www.linkedin.com/login", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-linkedin", 3, "icon"], ["href", "https://twitter.com/login?lang=en", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-twitter", 3, "icon"], ["href", "https://www.facebook.com/", "target", "_blank", 1, "btn", "btn-light"], [1, "txt-fb", 3, "icon"], [1, "mt-4", "mb-0"], [1, "ml-2", 3, "routerLink"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function RegisterSimpleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Create your account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Enter your personal details to create account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Your Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](31, RegisterSimpleComponent_div_31_Template, 2, 0, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, RegisterSimpleComponent_div_32_Template, 2, 0, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Agree with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "h6", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Or signup with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "app-feather-icons", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, " LinkedIn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](50, "app-feather-icons", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "twitter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](53, "app-feather-icons", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "facebook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "p", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "Already have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", ctx.show ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "linkedin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/authentication/login/simple");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    13587: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordComponent": function ResetPasswordComponent() {
          return (
            /* binding */
            _ResetPasswordComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ResetPasswordComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ResetPasswordComponent_div_18_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ResetPasswordComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ResetPasswordComponent_div_19_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _ResetPasswordComponent = /*#__PURE__*/function () {
        function _ResetPasswordComponent() {
          _classCallCheck(this, _ResetPasswordComponent);

          this.show = false;
        }

        _createClass(_ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
        }]);

        return _ResetPasswordComponent;
      }();

      _ResetPasswordComponent.??fac = function ResetPasswordComponent_Factory(t) {
        return new (t || _ResetPasswordComponent)();
      };

      _ResetPasswordComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ResetPasswordComponent,
        selectors: [["app-reset-password"]],
        decls: 35,
        vars: 4,
        consts: [[1, "page-wrapper"], [1, "container-fluid", "p-0"], [1, "row"], [1, "col-12"], [1, "login-card"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo/login.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], [1, "theme-form"], [1, "form-group"], [1, "col-form-label"], ["name", "login[password]", "required", "", "placeholder", "*********", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], ["type", "password", "name", "login[password]", "required", "", "placeholder", "*********", 1, "form-control"], [1, "form-group", "mb-0"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1", 1, "text-muted"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-4", "mb-0"], [1, "ml-2", 3, "routerLink"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Create Your Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "New Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ResetPasswordComponent_div_18_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ResetPasswordComponent_div_19_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Retype Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Remember password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Don't have account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.show ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/authentication/register/simple");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    23629: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UnlockUserComponent": function UnlockUserComponent() {
          return (
            /* binding */
            _UnlockUserComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function UnlockUserComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UnlockUserComponent_div_19_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UnlockUserComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UnlockUserComponent_div_20_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _UnlockUserComponent = /*#__PURE__*/function () {
        function _UnlockUserComponent() {
          _classCallCheck(this, _UnlockUserComponent);

          this.show = false;
        }

        _createClass(_UnlockUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
        }]);

        return _UnlockUserComponent;
      }();

      _UnlockUserComponent.??fac = function UnlockUserComponent_Factory(t) {
        return new (t || _UnlockUserComponent)();
      };

      _UnlockUserComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _UnlockUserComponent,
        selectors: [["app-unlock-user"]],
        decls: 32,
        vars: 4,
        consts: [[1, "page-wrapper"], [1, "container-fluid", "p-0"], [1, "authentication-main", "mt-0"], [1, "row"], [1, "col-12"], [1, "login-card"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo/login.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo_dark.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], [1, "theme-form"], [1, "form-group"], [1, "col-form-label"], ["name", "login[password]", "required", "", "placeholder", "*********", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], [1, "form-group", "mb-0"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1", 1, "text-muted"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-4", "mb-0"], [1, "ml-2", 3, "routerLink"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function UnlockUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Unlock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Enter your Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, UnlockUserComponent_div_19_Template, 2, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, UnlockUserComponent_div_20_Template, 2, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Remember password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Unlock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Already Have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.show ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/authentication/login/simple");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmxvY2stdXNlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_authentication_authentication_module_ts-es5.js.map