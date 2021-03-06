(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_contacts_contacts_module_ts"], {
    /***/
    75314: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsRoutingModule": function ContactsRoutingModule() {
          return (
            /* binding */
            _ContactsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _contacts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contacts.component */
      62650);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _contacts_component__WEBPACK_IMPORTED_MODULE_0__.ContactsComponent
        }]
      }];

      var _ContactsRoutingModule = function _ContactsRoutingModule() {
        _classCallCheck(this, _ContactsRoutingModule);
      };

      _ContactsRoutingModule.??fac = function ContactsRoutingModule_Factory(t) {
        return new (t || _ContactsRoutingModule)();
      };

      _ContactsRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _ContactsRoutingModule
      });
      _ContactsRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_ContactsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    62650: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsComponent": function ContactsComponent() {
          return (
            /* binding */
            _ContactsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _modal_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modal/add-contact/add-contact.component */
      80480);
      /* harmony import */


      var _modal_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal/add-category/add-category.component */
      44282);
      /* harmony import */


      var _modal_print_contact_print_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal/print-contact/print-contact.component */
      74326);

      var _c0 = ["addContact"];
      var _c1 = ["addCategory"];
      var _c2 = ["print"];

      var _c3 = function _c3() {
        return ["Apps"];
      };

      var _c4 = function _c4(a0) {
        return {
          "display": a0
        };
      };

      var _ContactsComponent = /*#__PURE__*/function () {
        function _ContactsComponent() {
          _classCallCheck(this, _ContactsComponent);

          this.history = false;
          this.editContact = false;
        }

        _createClass(_ContactsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showHistory",
          value: function showHistory() {
            this.history = !this.history;
          }
        }]);

        return _ContactsComponent;
      }();

      _ContactsComponent.??fac = function ContactsComponent_Factory(t) {
        return new (t || _ContactsComponent)();
      };

      _ContactsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({
        type: _ContactsComponent,
        selectors: [["app-contacts"]],
        viewQuery: function ContactsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_c1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_c2, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.AddContact = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.AddCategory = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.Print = _t.first);
          }
        },
        decls: 610,
        vars: 12,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "email-wrap", "bookmark-wrap"], [1, "row"], [1, "col-xl-3", "box-col-6"], [1, "email-left-aside"], [1, "card"], [1, "card-body"], [1, "email-app-sidebar", "left-bookmark"], [1, "media"], [1, "media-size-email"], ["src", "assets/images/user/user.png", "alt", "", 1, "mr-3", "rounded-circle"], [1, "media-body"], [1, "f-w-600"], ["role", "tablist", 1, "nav", "main-menu", "contact-options"], [1, "nav-item"], ["type", "button", 1, "badge-light-primary", "btn-block", "btn-mail", 3, "click"], ["data-feather", "users", 1, "mr-2"], [1, "main-title"], ["id", "pills-personal-tab", "data-toggle", "pill", "href", "#pills-personal", "role", "tab", "aria-controls", "pills-personal", "aria-selected", "true"], [1, "title"], ["type", "button", 1, "btn", "btn-category", 3, "click"], ["id", "pills-organization-tab", "data-toggle", "pill", "href", "#pills-organization", "role", "tab", "aria-controls", "pills-organization", "aria-selected", "false", 1, "show"], ["href", "javascript:void(0)"], [1, "col-xl-9", "col-md-12", "box-col-12"], [1, "email-right-aside", "bookmark-tabcontent", "contacts-tabs"], [1, "card", "email-body", "radius-left"], [1, "pl-0"], [1, "tab-content"], ["id", "pills-personal", "role", "tabpanel", "aria-labelledby", "pills-personal-tab", 1, "tab-pane", "fade", "active", "show"], [1, "card", "mb-0"], [1, "card-header", "d-flex"], [1, "f-14", "pull-right", "mt-0"], [1, "card-body", "p-0"], ["id", "addcon", 1, "row", "list-persons"], [1, "col-xl-4", "xl-50", "col-md-5"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["id", "v-pills-user-tab", "data-toggle", "pill", "href", "#v-pills-user", "role", "tab", "aria-controls", "v-pills-user", "aria-selected", "true", 1, "contact-tab-0", "nav-link", "active"], ["src", "assets/images/user/2.png", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_0"], [1, "first_name_0"], [1, "last_name_0"], [1, "email_add_0"], ["id", "v-pills-profile-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "v-pills-profile", "aria-selected", "false", 1, "contact-tab-1", "nav-link"], ["src", "assets/images/user/8.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_1"], [1, "first_name_1"], [1, "last_name_1"], [1, "email_add_1"], ["id", "v-pills-messages-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "v-pills-messages", "aria-selected", "false", 1, "contact-tab-2", "nav-link"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_2"], [1, "first_name_2"], [1, "last_name_2"], [1, "email_add_2"], ["id", "v-pills-settings-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "contact-tab-3", "nav-link"], ["src", "assets/images/user/14.png", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_3"], [1, "first_name_3"], [1, "last_name_3"], [1, "email__3"], ["id", "v-pills-contact1-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "contact-tab-4", "nav-link"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_4"], [1, "first_name_4"], [1, "last_name_4"], [1, "email_add_4"], ["id", "v-pills-contact8-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "contact-tab-5", "nav-link"], ["src", "assets/images/avtar/11.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_5"], [1, "first_name_5"], [1, "last_name_5"], [1, "email_add_5"], ["id", "v-pills-contact3-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "contact-tab-6", "nav-link"], ["src", "assets/images/avtar/16.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_6"], [1, "first_name_6"], [1, "last_name_6"], [1, "email_add_6"], [1, "col-xl-8", "xl-50", "col-md-7"], ["id", "v-pills-tabContent", 1, "tab-content", 3, "ngStyle"], ["id", "v-pills-user", "role", "tabpanel", "aria-labelledby", "v-pills-user-tab", 1, "tab-pane", "contact-tab-0", "tab-content-child", "fade", "show", "active"], [1, "profile-mail"], ["src", "assets/images/user/2.png", "alt", "", 1, "img-100", "img-fluid", "m-r-20", "rounded-circle", "update_img_0"], ["type", "file", "name", "img", 1, "updateimg"], [1, "media-body", "mt-0"], ["href", "javascript:void(0)", 3, "click"], [1, "email-general"], [1, "mb-3"], [1, "font-primary", "first_name_0"], [1, "font-primary"], [1, "birth_day_0"], [1, "birth_month_0", "ml-1"], [1, "birth_year_0", "ml-1"], [1, "font-primary", "personality_0"], [1, "font-primary", "city_0"], [1, "font-primary", "mobile_num_0"], [1, "font-primary", "email_add_0"], [1, "font-primary", "url_add_0"], [1, "font-primary", "interest_0"], [1, "contact-editform", "pl-0", 3, "ngStyle"], [1, "form-row"], [1, "form-group", "mb-3", "col-md-12"], [1, "col-sm-6"], ["id", "first_name", "type", "text", "required", "", "placeholder", "First Name", "value", "first_name", 1, "form-control"], ["id", "last_name", "type", "text", "required", "", "placeholder", "Last Name", "value", "last_name", 1, "form-control"], ["id", "email_add", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], ["id", "mobile_num", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-control"], [1, "form-row", "more-data"], [1, "col-lg-6", "col-sm-6"], ["id", "url_add", "type", "text", "required", "", 1, "form-control"], [1, "col-lg-4", "col-sm-6"], [1, "js-example-basic-single"], ["value", "pw"], ["value", "cw"], ["value", "fb"], ["value", "tw"], [1, "d-block"], ["for", "edo-ani", 1, "mr-3"], ["id", "edo-ani", "type", "radio", "name", "rdo-ani", "checked", "", 1, "radio_animated"], ["for", "edo-ani1"], ["id", "edo-ani1", "type", "radio", "name", "rdo-ani", 1, "radio_animated"], [1, "col-lg-2", "col-sm-4"], ["id", "birth_day", 1, "form-control"], [1, "col-lg-3", "col-sm-4"], ["id", "birth_month", 1, "form-control"], ["id", "birth_year", "type", "text", 1, "form-control"], ["id", "personality", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], ["id", "interest", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "mb-3", "col-md-12", "mb-0"], [1, "col-12"], [1, "form-group", "mb-2"], ["type", "text", "placeholder", "Address", 1, "form-control"], ["id", "city", "type", "text", "placeholder", "City", 1, "form-control"], ["type", "text", "placeholder", "State", 1, "form-control"], [1, "form-group", "mb-0"], ["type", "text", "placeholder", "Country", 1, "form-control"], ["type", "text", "placeholder", "Pin Code", 1, "form-control"], ["href", "javascript:void(0)", 1, "pl-0", "edit-information"], ["type", "button", 1, "btn", "btn-secondary", "update-contact", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "pills-organization", "role", "tabpanel", "aria-labelledby", "pills-organization", 1, "fade", "tab-pane"], [1, "row", "list-persons"], ["id", "v-pills-tab1", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["id", "v-pills-iduser-tab", "data-toggle", "pill", "href", "#v-pills-iduser", "role", "tab", "aria-controls", "v-pills-iduser", "aria-selected", "true", 1, "nav-link", "active"], ["src", "assets/images/user/user.png", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["id", "v-pills-iduser1-tab", "data-toggle", "pill", "href", "#v-pills-iduser1", "role", "tab", "aria-controls", "v-pills-iduser1", "aria-selected", "false", 1, "nav-link"], ["src", "assets/images/user/3.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["id", "v-pills-iduser2-tab", "data-toggle", "pill", "href", "#v-pills-iduser2", "role", "tab", "aria-controls", "v-pills-iduser2", "aria-selected", "false", 1, "nav-link"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["id", "v-pills-iduser3-tab", "data-toggle", "pill", "href", "#v-pills-iduser3", "role", "tab", "aria-controls", "v-pills-iduser3", "aria-selected", "false", 1, "nav-link"], ["src", "assets/images/user/10.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["id", "v-pills-tabContent1", 1, "tab-content"], ["id", "v-pills-iduser", "role", "tabpanel", "aria-labelledby", "v-pills-iduser-tab", 1, "tab-pane", "fade", "show", "active"], ["src", "assets/images/user/user.png", "alt", "", 1, "img-100", "img-fluid", "m-r-20", "rounded-circle", "update_img_5"], [1, "font-primary", "email_add_5"], [1, "gender"], ["id", "v-pills-iduser1", "role", "tabpanel", "aria-labelledby", "v-pills-iduser1-tab", 1, "tab-pane", "fade"], ["src", "assets/images/user/3.jpg", "alt", "", 1, "img-100", "img-fluid", "m-r-20", "rounded-circle", "update_img_6"], [1, "font-primary", "email_add_6"], ["id", "v-pills-iduser2", "role", "tabpanel", "aria-labelledby", "v-pills-iduser2-tab", 1, "tab-pane", "fade"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "img-100", "img-fluid", "m-r-20", "rounded-circle", "update_img_7"], [1, "first_name_7"], [1, "last_name_7"], [1, "email_add_7"], [1, "font-primary", "email_add_7"], ["id", "v-pills-iduser3", "role", "tabpanel", "aria-labelledby", "v-pills-iduser3-tab", 1, "tab-pane", "fade"], ["src", "assets/images/user/10.jpg", "alt", "", 1, "img-100", "img-fluid", "m-r-20", "rounded-circle", "update_img_8"], [1, "first_name_8"], [1, "last_name_8"], [1, "email_add_8"], [1, "font-primary", "email_add_8"], ["id", "right-history"], [1, "modal-header", "p-l-20", "p-r-20", 3, "click"], [1, "modal-title", "w-100"], [1, "pull-right"], ["href", "javascript:void(0)", 1, "closehistory"], [1, "icofont", "icofont-close"], [1, "history-details"], [1, "text-center"], [1, "icofont", "icofont-ui-edit"], [1, "icofont", "icofont-star", "mr-3"], [1, "mt-0"], [1, "mb-0"], [1, "f-12"], ["addContact", ""], ["addCategory", ""], ["print", ""]],
        template: function ContactsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](11, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "h6", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "MARK JENCO");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, "Markjecno@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_button_click_19_listener() {
              return ctx.AddContact.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](20, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21, " New Contacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](24, " Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](28, " Personal");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_button_click_30_listener() {
              return ctx.AddCategory.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](32, " + Add Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](36, " Organization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](38, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](39, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](40, "Follow up");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](42, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](43, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](44, "Favorites");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](45, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](46, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](47, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](48, "Ideas");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](50, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](51, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](52, "Important");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](54, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](55, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](56, "Business");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](58, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](59, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](60, "Holidays");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](61, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](62, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](63, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](64, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](65, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](66, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](67, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](68, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](69, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](70, "Personal");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](71, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](72, "5 Contacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](73, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](74, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](75, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](76, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](77, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](78, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](79, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](80, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](81, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](82, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](83, "Bucky ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](84, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](85, "Barnes");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](86, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](87, "barnes@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](88, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](89, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](90, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](91, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](92, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](93, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](94, "Comeren ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](95, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](96, "Diaz");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](97, "p", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](98, "comeren@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](99, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](100, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](101, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](102, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](103, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](104, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](105, "Issa ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](106, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](107, "Bell");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](108, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](109, "issabell@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](110, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](111, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](112, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](113, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](114, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](115, "span", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](116, "Andew ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](117, "span", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](118, "Jon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](119, "p", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](120, "andewjon@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](121, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](122, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](123, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](124, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](125, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](126, "span", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](127, "Jason ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](128, "span", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](129, "Borne");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](130, "p", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](131, "jasonb@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](132, "a", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](133, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](134, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](135, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](136, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](137, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](138, "Monty ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](139, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](140, "Carlo");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](141, "p", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](142, "monty@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](143, "a", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](144, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](145, "img", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](146, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](147, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](148, "span", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](149, "Brock ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](150, "span", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](151, "Lee");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](152, "p", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](153, "lee@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](154, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](155, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](156, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](157, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](158, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](159, "img", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](160, "input", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](161, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](162, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](163, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](164, "Bucky ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](165, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](166, "Barnes");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](167, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](168, "barnes@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](169, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](170, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](171, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_a_click_171_listener() {
              return ctx.editContact = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](172, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](173, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](174, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](175, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](176, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](177, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_a_click_177_listener() {
              return ctx.showHistory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](178, "History");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](179, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](180, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_a_click_180_listener() {
              return ctx.Print.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](181, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](182, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](183, "h6", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](184, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](185, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](186, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](187, "Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](188, "span", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](189, "Bucky");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](190, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](191, "Gender ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](192, "span", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](193, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](194, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](195, "Birthday");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](196, "span", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](197, "span", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](198, "18");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](199, "span", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](200, "May");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](201, "span", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](202, "1994");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](203, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](204, "Personality");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](205, "span", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](206, "Cool");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](207, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](208, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](209, "span", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](210, "moline acres");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](211, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](212, "Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](213, "span", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](214, "+0 1800 76855");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](215, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](216, "Email Address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](217, "span", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](218, "barnes@gmail.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](219, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](220, "Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](221, "span", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](222, "www.test.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](223, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](224, "Interest");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](225, "span", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](226, "photography");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](227, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](228, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](229, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](230, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](231, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](232, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](233, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](234, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](235, "input", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](236, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](237, "input", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](238, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](239, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](240, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](241, "input", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](242, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](243, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](244, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](245, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](246, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](247, "input", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](248, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](249, "select", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](250, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](251, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](252, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](253, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](254, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](255, "Others");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](256, "div", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](257, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](258, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](259, "URLS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](260, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](261, "div", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](262, "input", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](263, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](264, "select", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](265, "option", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](266, "Personal web address");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](267, "option", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](268, "Company web address");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](269, "option", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](270, "Fabebook URL");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](271, "option", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](272, "Twitter URL");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](273, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](274, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](275, "Personal");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](276, "div", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](277, "label", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](278, "input", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](279, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](280, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](281, "label", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](282, "input", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](283, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](284, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](285, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](286, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](287, "div", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](288, "select", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](289, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](290, "Day");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](291, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](292, "01");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](293, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](294, "02");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](295, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](296, "03");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](297, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](298, "04");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](299, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](300, "05");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](301, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](302, "06");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](303, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](304, "07");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](305, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](306, "08");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](307, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](308, "09");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](309, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](310, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](311, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](312, "11");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](313, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](314, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](315, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](316, "13");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](317, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](318, "14");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](319, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](320, "15");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](321, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](322, "16");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](323, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](324, "17");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](325, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](326, "18");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](327, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](328, "19");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](329, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](330, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](331, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](332, "21");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](333, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](334, "22");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](335, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](336, "23");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](337, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](338, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](339, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](340, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](341, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](342, "26");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](343, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](344, "27");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](345, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](346, "28");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](347, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](348, "29");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](349, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](350, "30");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](351, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](352, "31");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](353, "div", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](354, "select", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](355, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](356, "Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](357, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](358, "January");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](359, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](360, "February");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](361, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](362, "March");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](363, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](364, "April");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](365, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](366, "May");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](367, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](368, "June");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](369, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](370, "July");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](371, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](372, "August");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](373, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](374, "September");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](375, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](376, "October");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](377, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](378, "November");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](379, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](380, "December");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](381, "div", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](382, "input", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](383, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](384, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](385, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](386, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](387, "Personality");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](388, "input", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](389, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](390, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](391, "Interest");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](392, "input", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](393, "div", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](394, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](395, "Home Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](396, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](397, "div", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](398, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](399, "input", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](400, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](401, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](402, "input", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](403, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](404, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](405, "input", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](406, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](407, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](408, "input", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](409, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](410, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](411, "input", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](412, "a", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](413, "Edit more information");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](414, "button", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_button_click_414_listener() {
              return ctx.editContact = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](415, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](416, "button", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_button_click_416_listener() {
              return ctx.editContact = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](417, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](418, "div", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](419, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](420, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](421, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](422, "Organization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](423, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](424, "10 Contacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](425, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](426, "div", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](427, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](428, "div", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](429, "a", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](430, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](431, "img", 139);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](432, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](433, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](434, "Mark jecno");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](435, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](436, "markjecno@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](437, "a", 140);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](438, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](439, "img", 141);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](440, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](441, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](442, "Jason Borne");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](443, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](444, "jasonb@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](445, "a", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](446, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](447, "img", 143);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](448, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](449, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](450, "Sarah Loren");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](451, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](452, "barnes@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](453, "a", 144);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](454, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](455, "img", 145);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](456, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](457, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](458, "Andew Jon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](459, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](460, "andrewj@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](461, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](462, "div", 146);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](463, "div", 147);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](464, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](465, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](466, "img", 148);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](467, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](468, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](469, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](470, "Mark ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](471, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](472, "jecno");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](473, "p", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](474, "markjecno@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](475, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](476, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](477, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_a_click_477_listener() {
              return ctx.Print.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](478, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](479, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](480, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](481, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](482, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](483, "Email Address: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](484, "span", 149);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](485, "markjecno@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](486, "div", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](487, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](488, "Personal");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](489, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](490, "Gender: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](491, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](492, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](493, "div", 151);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](494, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](495, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](496, "img", 152);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](497, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](498, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](499, "span", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](500, "Jason ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](501, "span", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](502, "Borne");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](503, "p", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](504, "jasonb@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](505, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](506, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](507, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_a_click_507_listener() {
              return ctx.Print.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](508, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](509, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](510, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](511, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](512, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](513, "Email Address: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](514, "span", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](515, "jasonb@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](516, "div", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](517, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](518, "Personal");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](519, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](520, "Gender: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](521, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](522, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](523, "div", 154);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](524, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](525, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](526, "img", 155);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](527, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](528, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](529, "span", 156);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](530, "Sarah ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](531, "span", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](532, "Loren");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](533, "p", 158);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](534, "barnes@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](535, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](536, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](537, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_a_click_537_listener() {
              return ctx.Print.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](538, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](539, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](540, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](541, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](542, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](543, "Email Address: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](544, "span", 159);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](545, "barnes@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](546, "div", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](547, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](548, "Personal");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](549, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](550, "Gender: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](551, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](552, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](553, "div", 160);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](554, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](555, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](556, "img", 161);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](557, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](558, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](559, "span", 162);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](560, "Andew ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](561, "span", 163);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](562, "Jon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](563, "p", 164);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](564, "andrewj@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](565, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](566, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](567, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_a_click_567_listener() {
              return ctx.Print.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](568, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](569, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](570, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](571, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](572, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](573, "Email Address: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](574, "span", 165);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](575, "andrewj@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](576, "div", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](577, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](578, "Personal");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](579, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](580, "Gender: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](581, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](582, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](583, "div", 166);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](584, "div", 167);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_div_click_584_listener() {
              return ctx.showHistory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](585, "h6", 168);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](586, "Contact History");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](587, "span", 169);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](588, "a", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](589, "i", 171);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](590, "div", 172);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](591, "div", 173);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](592, "i", 174);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](593, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](594, "Contact has not been modified yet.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](595, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](596, "i", 175);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](597, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](598, "h6", 176);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](599, "Contact Created");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](600, "p", 177);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](601, "Contact is created via mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](602, "span", 178);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](603, "Sep 10, 2019 4:00");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](604, "app-add-contact", null, 179);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](606, "app-add-category", null, 180);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](608, "app-print-contact", null, 181);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("title", "Contact")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](7, _c3))("active_item", "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](155);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](8, _c4, ctx.editContact ? "none" : ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](10, _c4, !ctx.editContact ? "none" : ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](356);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????classProp"]("show", ctx.history);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgSelectMultipleOption"], _modal_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_1__.AddContactComponent, _modal_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_2__.AddCategoryComponent, _modal_print_contact_print_contact_component__WEBPACK_IMPORTED_MODULE_3__.PrintContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    92695: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsModule": function ContactsModule() {
          return (
            /* binding */
            _ContactsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contacts-routing.module */
      75314);
      /* harmony import */


      var _contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contacts.component */
      62650);
      /* harmony import */


      var _modal_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal/add-contact/add-contact.component */
      80480);
      /* harmony import */


      var _modal_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modal/add-category/add-category.component */
      44282);
      /* harmony import */


      var _modal_print_contact_print_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modal/print-contact/print-contact.component */
      74326);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ContactsModule = function _ContactsModule() {
        _classCallCheck(this, _ContactsModule);
      };

      _ContactsModule.??fac = function ContactsModule_Factory(t) {
        return new (t || _ContactsModule)();
      };

      _ContactsModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({
        type: _ContactsModule
      });
      _ContactsModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ContactsRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](_ContactsModule, {
          declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_2__.ContactsComponent, _modal_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_3__.AddContactComponent, _modal_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__.AddCategoryComponent, _modal_print_contact_print_contact_component__WEBPACK_IMPORTED_MODULE_5__.PrintContactComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ContactsRoutingModule]
        });
      })();
      /***/

    },

    /***/
    44282: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddCategoryComponent": function AddCategoryComponent() {
          return (
            /* binding */
            _AddCategoryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _c0 = ["addCategory"];

      function AddCategoryComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddCategoryComponent_ng_template_0_Template_button_click_3_listener() {
            var modal_r2 = ctx.$implicit;
            return modal_r2.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _AddCategoryComponent = /*#__PURE__*/function () {
        function _AddCategoryComponent(platformId, modalService) {
          _classCallCheck(this, _AddCategoryComponent);

          this.platformId = platformId;
          this.modalService = modalService;
          this.modalOpen = false;
        }

        _createClass(_AddCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal() {
            var _this = this;

            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
              // For SSR 
              this.modalService.open(this.AddCategory, {
                size: 'lg',
                ariaLabelledBy: 'modal-bookmark',
                centered: true,
                windowClass: 'modal-bookmark'
              }).result.then(function (result) {
                _this.modalOpen = true;
                "Result ".concat(result);
              }, function (reason) {
                _this.closeResult = "Dismissed ".concat(_this.getDismissReason(reason));
              });
            }
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.modalOpen) {
              this.modalService.dismissAll();
            }
          }
        }]);

        return _AddCategoryComponent;
      }();

      _AddCategoryComponent.??fac = function AddCategoryComponent_Factory(t) {
        return new (t || _AddCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
      };

      _AddCategoryComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _AddCategoryComponent,
        selectors: [["app-add-category"]],
        viewQuery: function AddCategoryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.AddCategory = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["addCategory", ""], [1, "modal-header"], ["id", "exampleModalLabel1", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-bookmark"], [1, "form-row"], [1, "form-group", "mb-3", "col-md-12", "my-0"], ["type", "text", "required", "", "placeholder", "Enter category name", "autocomplete", "off", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary"]],
        template: function AddCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, AddCategoryComponent_ng_template_0_Template, 15, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    80480: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddContactComponent": function AddContactComponent() {
          return (
            /* binding */
            _AddContactComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _c0 = ["addContact"];

      function AddContactComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddContactComponent_ng_template_0_Template_button_click_3_listener() {
            var modal_r2 = ctx.$implicit;
            return modal_r2.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Others");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _AddContactComponent = /*#__PURE__*/function () {
        function _AddContactComponent(platformId, modalService) {
          _classCallCheck(this, _AddContactComponent);

          this.platformId = platformId;
          this.modalService = modalService;
          this.modalOpen = false;
        }

        _createClass(_AddContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal() {
            var _this2 = this;

            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
              // For SSR 
              this.modalService.open(this.AddContact, {
                size: 'lg',
                ariaLabelledBy: 'modal',
                centered: true,
                windowClass: 'modal-bookmark'
              }).result.then(function (result) {
                _this2.modalOpen = true;
                "Result ".concat(result);
              }, function (reason) {
                _this2.closeResult = "Dismissed ".concat(_this2.getDismissReason(reason));
              });
            }
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.modalOpen) {
              this.modalService.dismissAll();
            }
          }
        }]);

        return _AddContactComponent;
      }();

      _AddContactComponent.??fac = function AddContactComponent_Factory(t) {
        return new (t || _AddContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
      };

      _AddContactComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _AddContactComponent,
        selectors: [["app-add-contact"]],
        viewQuery: function AddContactComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.AddContact = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["addContact", ""], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "bookmark-form", "novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "form-row"], [1, "form-group", "mb-3", "col-md-12"], ["for", "con-name"], [1, "row"], [1, "col-sm-6"], ["id", "con-name", "type", "text", "required", "", "placeholder", "First Name", "autocomplete", "off", 1, "form-control"], ["id", "con-last", "type", "text", "required", "", "placeholder", "Last Name", "autocomplete", "off", 1, "form-control"], ["for", "con-mail"], ["id", "con-mail", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "mb-3", "col-md-12", "my-0"], ["for", "con-phone"], ["id", "con-phone", "type", "number", "required", "", "autocomplete", "off", 1, "form-control"], ["id", "con-select", 1, "form-control"], ["id", "index_var", "type", "hidden", "value", "5"], ["type", "submit", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "mr-1"]],
        template: function AddContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, AddContactComponent_ng_template_0_Template, 40, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    74326: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrintContactComponent": function PrintContactComponent() {
          return (
            /* binding */
            _PrintContactComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      var _c0 = ["print"];

      function PrintContactComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Print preview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PrintContactComponent_ng_template_0_Template_button_click_3_listener() {
            var modal_r2 = ctx.$implicit;
            return modal_r2.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Bucky ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "barnes@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Email Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "barnes@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Print");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _PrintContactComponent = /*#__PURE__*/function () {
        function _PrintContactComponent(platformId, modalService) {
          _classCallCheck(this, _PrintContactComponent);

          this.platformId = platformId;
          this.modalService = modalService;
          this.modalOpen = false;
        }

        _createClass(_PrintContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal() {
            var _this3 = this;

            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
              // For SSR 
              this.modalService.open(this.Print, {
                size: 'lg',
                ariaLabelledBy: 'modal',
                centered: true,
                windowClass: 'modal'
              }).result.then(function (result) {
                _this3.modalOpen = true;
                "Result ".concat(result);
              }, function (reason) {
                _this3.closeResult = "Dismissed ".concat(_this3.getDismissReason(reason));
              });
            }
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.modalOpen) {
              this.modalService.dismissAll();
            }
          }
        }]);

        return _PrintContactComponent;
      }();

      _PrintContactComponent.??fac = function PrintContactComponent_Factory(t) {
        return new (t || _PrintContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
      };

      _PrintContactComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _PrintContactComponent,
        selectors: [["app-print-contact"]],
        viewQuery: function PrintContactComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.Print = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["print", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "list-persons"], ["id", "DivIdToPrint", 1, "profile-mail", "pt-0"], [1, "media"], ["id", "updateimg", "src", "assets/images/user/2.png", "alt", "", 1, "img-100", "img-fluid", "m-r-20", "rounded-circle"], [1, "media-body", "mt-0"], ["id", "printname"], ["id", "printlast"], ["id", "printmail"], [1, "email-general"], ["id", "mailadd", 1, "font-primary"], ["id", "btnPrint", "type", "button", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "mr-1"]],
        template: function PrintContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, PrintContactComponent_ng_template_0_Template, 29, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmludC1jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_contacts_contacts_module_ts-es5.js.map