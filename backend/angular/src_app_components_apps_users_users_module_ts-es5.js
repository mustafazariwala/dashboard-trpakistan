(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_users_users_module_ts"], {
    /***/
    63429: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditProfileComponent": function EditProfileComponent() {
          return (
            /* binding */
            _EditProfileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/directives/only-alphabets.directive */
      33177);
      /* harmony import */


      var _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/directives/only-numbers.directive */
      5262);

      var _c0 = function _c0() {
        return ["Apps", "User"];
      };

      var _EditProfileComponent = /*#__PURE__*/function () {
        function _EditProfileComponent(fb) {
          _classCallCheck(this, _EditProfileComponent);

          this.fb = fb;
        }

        _createClass(_EditProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myProfile = this.fb.group({
              bio: [''],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
              password: [''],
              website: []
            });
            this.editProfile = this.fb.group({
              company: [''],
              userName: [''],
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email],
              firstName: [''],
              lastName: [''],
              address: [''],
              city: [''],
              zipCode: [null],
              country: [''],
              about: ['']
            });
          }
        }]);

        return _EditProfileComponent;
      }();

      _EditProfileComponent.??fac = function EditProfileComponent_Factory(t) {
        return new (t || _EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
      };

      _EditProfileComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({
        type: _EditProfileComponent,
        selectors: [["app-edit-profile"]],
        decls: 263,
        vars: 6,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "edit-profile"], [1, "row"], [1, "col-xl-4", "xl-100"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-options"], ["href", "javascript:void(0)", "data-toggle", "card-collapse", 1, "card-options-collapse"], [1, "fe", "fe-chevron-up"], ["href", "javascript:void(0)", "data-toggle", "card-remove", 1, "card-options-remove"], [1, "fe", "fe-x"], [1, "card-body"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-auto"], ["alt", "", "src", "assets/images/user/7.jpg", 1, "img-70", "rounded-circle"], [1, "col"], [1, "mb-1"], [1, "mb-4"], [1, "form-group"], [1, "form-label"], ["rows", "5", "formControlName", "bio", 1, "form-control"], ["placeholder", "your-email@domain.com", "formControlName", "email", 1, "form-control"], ["type", "password", "value", "password", "formControlName", "password", 1, "form-control"], ["placeholder", "http://Uplor.com", "formControlName", "website", 1, "form-control"], [1, "form-footer"], [1, "btn", "btn-primary", "btn-block"], [1, "col-xl-8", "xl-100"], [1, "card", 3, "formGroup"], [1, "col-md-5"], ["type", "text", "placeholder", "Company", "formControlName", "company", 1, "form-control"], [1, "col-sm-6", "col-md-3"], ["type", "text", "placeholder", "Username", "formControlName", "userName", 1, "form-control"], [1, "col-sm-6", "col-md-4"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control"], [1, "col-sm-6", "col-md-6"], ["type", "text", "placeholder", "First Name", "formControlName", "firstName", "onlyAlphabets", "", 1, "form-control"], ["type", "text", "placeholder", "Last Name", "formControlName", "lastName", "onlyAlphabets", "", 1, "form-control"], [1, "col-md-12"], ["type", "text", "placeholder", "Home Address", "formControlName", "address", 1, "form-control"], ["type", "text", "placeholder", "City", "formControlName", "city", 1, "form-control"], ["type", "text", "placeholder", "ZIP Code", "formControlName", "zipCode", "onlyNumbers", "", 1, "form-control"], ["formControlName", "country", 1, "form-control", "btn-square"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "form-group", "mb-0"], ["rows", "5", "placeholder", "Enter About your description", "formControlName", "about", 1, "form-control"], [1, "card-footer", "text-right"], ["type", "submit", 1, "btn", "btn-primary"], [1, "table-responsive"], [1, "table", "card-table", "table-vcenter", "text-nowrap"], ["href", "javascript:void(0)", 1, "text-inherit"], [1, "status-icon", "bg-success"], [1, "text-right"], ["href", "javascript:void(0)", 1, "icon"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-sm"], [1, "fa", "fa-pencil"], ["href", "javascript:void(0)", 1, "btn", "btn-transparent", "btn-sm"], [1, "fa", "fa-link"], ["href", "javascript:void(0)", 1, "btn", "btn-danger", "btn-sm"], [1, "fa", "fa-trash"], [1, "status-icon", "bg-danger"], [1, "status-icon", "bg-warning"]],
        template: function EditProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](13, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "form", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](18, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "h3", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21, "MARK JECNO");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](23, "DESIGNER");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "h6", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](26, "Bio");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "textarea", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](28, "On the other hand, we denounce with righteous indignation");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](31, "Email-Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](32, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](33, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](35, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](36, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](38, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](39, "Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](40, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](42, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](43, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](44, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](45, "form", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](46, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](47, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](48, "Edit Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](50, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](51, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](52, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](53, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](54, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](56, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](57, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](58, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](59, "Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](60, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](61, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](62, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](63, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](64, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](65, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](66, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](67, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](68, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](69, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](70, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](71, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](72, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](73, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](74, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](75, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](76, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](77, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](78, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](79, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](80, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](81, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](82, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](83, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](84, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](85, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](86, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](87, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](88, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](89, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](90, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](91, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](92, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](93, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](94, "Postal Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](95, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](96, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](97, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](98, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](99, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](100, "select", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](101, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](102, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](103, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](104, "Germany");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](105, "option", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](106, "Canada");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](107, "option", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](108, "Usa");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](109, "option", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](110, "Aus");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](111, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](112, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](113, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](114, "About Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](115, "textarea", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](116, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](117, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](118, "Update Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](119, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](120, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](121, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](122, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](123, "Add projects And Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](124, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](125, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](126, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](127, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](128, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](129, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](130, "table", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](131, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](132, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](133, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](134, "Project Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](135, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](136, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](137, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](138, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](139, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](140, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](141, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](142, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](143, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](144, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](145, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](146, "Untrammelled prevents ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](147, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](148, "28 May 2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](149, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](150, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](151, " Completed");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](152, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](153, "$56,908");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](154, "td", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](155, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](156, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](157, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](158, " Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](159, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](160, "a", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](161, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](162, " Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](163, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](164, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](165, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](166, " Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](167, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](168, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](169, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](170, "Untrammelled prevents");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](171, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](172, "12 June 2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](173, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](174, "span", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](175, " On going");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](177, "$45,087");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](178, "td", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](179, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](180, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](181, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](182, " Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](183, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](184, "a", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](185, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](186, " Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](187, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](188, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](189, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](190, " Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](191, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](193, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](194, "Untrammelled prevents");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](195, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](196, "12 July 2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](197, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](198, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](199, " Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](200, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](201, "$60,123");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](202, "td", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](203, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](204, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](205, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](206, " Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](207, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](208, "a", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](209, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](210, " Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](211, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](212, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](213, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](214, " Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](215, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](217, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](218, "Untrammelled prevents");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](219, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](220, "14 June 2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](222, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](223, " Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](224, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](225, "$70,435");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](226, "td", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](227, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](228, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](229, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](230, " Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](231, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](232, "a", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](233, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](234, " Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](235, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](236, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](237, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](238, " Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](239, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](240, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](241, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](242, "Untrammelled prevents");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](243, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](244, "25 June 2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](245, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](246, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](247, " Completed");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](248, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](249, "$15,987");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](250, "td", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](251, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](252, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](253, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](254, " Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](255, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](256, "a", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](257, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](258, " Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](259, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](260, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](261, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](262, " Delete");

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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("title", "User")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](5, _c0))("active_item", "Edit Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.myProfile);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.editProfile);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_1__.OnlyAlphabetsDirective, _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_2__.OnlyNumbersDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    15681: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileComponent": function ProfileComponent() {
          return (
            /* binding */
            _ProfileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      59715);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var angular_count_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-count-to */
      74848);

      var _c0 = function _c0() {
        return ["Apps", "User"];
      };

      var _c1 = function _c1() {
        return {
          downloadable: true
        };
      };

      var _ProfileComponent = /*#__PURE__*/function () {
        function _ProfileComponent(galleryService) {
          _classCallCheck(this, _ProfileComponent);

          this.galleryService = galleryService;
          this.images = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(0, {
            img: 'assets/images/other-images/profile-style-img.png',
            extUrl: 'http://www.google.com'
          })];
          this.images1 = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(0, {
            img: 'assets/images/blog/img.png',
            extUrl: 'http://www.google.com'
          })];
          this.buttonsConfigDefault = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.DEFAULT
          };
          this.buttonsConfigSimple = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.SIMPLE
          };
          this.buttonsConfigAdvanced = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.ADVANCED
          };
          this.buttonsConfigFull = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.FULL
          };
          this.buttonsConfigCustom = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.CUSTOM,
            buttons: [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_FULL_SCREEN, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_EXTURL, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_DOWNLOAD, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_CLOSE]
          };
          this.customPlainGalleryRowDescConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.PlainGalleryStrategy.CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(-1, true)
          };
        }

        _createClass(_ProfileComponent, [{
          key: "openImageModalRowDescription",
          value: function openImageModalRowDescription(image) {
            var index = this.getCurrentIndexCustomLayout(image, this.images);
            this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, {
              layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(index, true)
            });
          }
        }, {
          key: "getCurrentIndexCustomLayout",
          value: function getCurrentIndexCustomLayout(image, images) {
            return image ? images.indexOf(image) : -1;
          }
        }, {
          key: "onButtonAfterHook",
          value: function onButtonAfterHook(event) {
            if (!event || !event.button) {
              return;
            }
          }
        }, {
          key: "onCustomButtonBeforeHook",
          value: function onCustomButtonBeforeHook(event, galleryId) {
            var _this = this;

            if (!event || !event.button) {
              return;
            }

            if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonType.CUSTOM) {
              this.addRandomImage();
              setTimeout(function () {
                _this.galleryService.openGallery(galleryId, _this.images.length - 1);
              }, 0);
            }
          }
        }, {
          key: "onCustomButtonAfterHook",
          value: function onCustomButtonAfterHook(event, galleryId) {
            if (!event || !event.button) {
              return;
            }
          }
        }, {
          key: "addRandomImage",
          value: function addRandomImage() {
            var imageToCopy = this.images[Math.floor(Math.random() * this.images.length)];
            var newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
            this.images = [].concat(_toConsumableArray(this.images), [newImage]);
          } //FileUpload

        }, {
          key: "readUrl",
          value: function readUrl(event) {
            var _this2 = this;

            if (event.target.files.length === 0) return; //Image upload validation

            var mimeType = event.target.files[0].type;

            if (mimeType.match(/image\/*/) == null) {
              return;
            } // Image upload


            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (_event) {
              _this2.url = reader.result;
            };
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ProfileComponent;
      }();

      _ProfileComponent.??fac = function ProfileComponent_Factory(t) {
        return new (t || _ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.GalleryService));
      };

      _ProfileComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: _ProfileComponent,
        selectors: [["app-profile"]],
        decls: 219,
        vars: 55,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "user-profile"], [1, "row"], [1, "col-sm-12"], [1, "card", "hovercard", "text-center"], [1, "cardheader"], [1, "user-image"], [1, "avatar"], ["alt", "", 3, "src"], [1, "icon-wrapper"], [1, "icofont", "icofont-pencil-alt-5"], ["type", "file", 1, "upload", 3, "change"], [1, "info"], [1, "col-sm-6", "col-lg-4", "order-sm-1", "order-xl-0"], [1, "col-md-6"], [1, "ttl-info", "text-left"], [1, "fa", "fa-envelope"], [1, "fa", "fa-calendar"], [1, "col-sm-12", "col-lg-4", "order-sm-0", "order-xl-1"], [1, "user-designation"], [1, "title"], ["target", "_blank", "href", ""], [1, "desc", "mt-2"], [1, "col-sm-6", "col-lg-4", "order-sm-2", "order-xl-2"], [1, "fa", "fa-phone"], [1, "fa", "fa-location-arrow"], [1, "social-media"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript:void(0)"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-rss"], [1, "follow"], [1, "col-6", "text-md-right", "border-right"], [1, "follow-num", 3, "CountTo", "from", "duration"], [1, "col-6", "text-md-left"], [1, "follow-num", "counter", 3, "CountTo", "from", "duration"], [1, "card"], [1, "profile-img-style"], [1, "col-sm-8"], [1, "media"], ["src", "assets/images/user/7.jpg", "alt", "Generic placeholder image", 1, "img-thumbnail", "rounded-circle", "mr-3"], [1, "media-body", "align-self-center"], [1, "mt-0", "user-name"], [1, "col-sm-4", "align-self-center"], [1, "float-sm-right"], [1, "img-container"], [1, "my-gallery"], [1, "img-fluid", "rounded", 3, "id", "modalImages", "currentImageConfig", "buttonsConfig", "buttonAfterHook"], [1, "like-comment", "mt-4"], [1, "list-inline-item", "border-right", "pr-3"], [1, "m-0"], [1, "fa", "fa-heart"], [1, "ml-2", "counter", 3, "CountTo", "from", "duration"], [1, "list-inline-item", "ml-2"], [1, "fa", "fa-comment"], ["id", "aniimated-thumbnials-2", 1, "row", "mt-4", "pictures", "my-gallery"], [1, "col-sm-6"], [1, "col-lg-12", "col-xl-4"], ["id", "aniimated-thumbnials-3", 1, "my-gallery"], [1, "like-comment", "mt-4", "like-comment-sm-mb"], [1, "col-xl-6"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function ProfileComponent_Template_input_change_12_listener($event) {
              return ctx.readUrl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, "\xA0\xA0\xA0Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, "Marekjecno@yahoo.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](27, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28, "\xA0\xA0\xA0BOD");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](30, "02 January 1988");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35, "Mark jecno");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](37, "designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](43, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](44, "\xA0\xA0\xA0Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](46, "India +91 123-456-7890");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](50, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](51, "\xA0\xA0\xA0Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](52, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](53, "B69 Near Schoool Demo Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](54, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](59, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](62, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](65, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](66, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](68, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](71, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](72, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](74, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](75, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](76, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](77, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](79, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](80, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](81, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](82, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](83, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](84, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](85, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](87, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](88, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](89, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](90, "h5", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](91, "JOHAN DIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](92, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](93, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](94, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](95, "5 Hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](96, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](97, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](98, "you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](99, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](100, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](101, "ks-modal-gallery", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("buttonAfterHook", function ProfileComponent_Template_ks_modal_gallery_buttonAfterHook_101_listener($event) {
              return ctx.onButtonAfterHook($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](102, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](103, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](104, "li", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](105, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](106, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](107, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](108, "\xA0\xA0Like");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](109, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](110, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](111, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](112, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](113, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](114, "\xA0\xA0Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](115, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](116, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](117, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](118, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](119, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](120, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](121, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](122, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](123, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](124, "h5", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](125, "JOHAN DIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](126, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](127, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](128, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](129, "10 Hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](130, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](131, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](132, "you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](133, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](134, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](135, "ks-modal-gallery", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("buttonAfterHook", function ProfileComponent_Template_ks_modal_gallery_buttonAfterHook_135_listener($event) {
              return ctx.onButtonAfterHook($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](136, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](137, "ks-modal-gallery", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("buttonAfterHook", function ProfileComponent_Template_ks_modal_gallery_buttonAfterHook_137_listener($event) {
              return ctx.onButtonAfterHook($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](138, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](139, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](140, "li", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](141, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](142, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](143, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](144, "\xA0\xA0Like");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](145, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](146, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](147, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](148, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](149, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](150, "\xA0\xA0Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](151, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](152, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](153, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](154, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](155, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](156, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](157, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](158, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](159, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](160, "h5", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](161, "JOHAN DIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](162, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](163, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](164, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](165, "10 Hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](166, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](167, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](168, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source .Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](169, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](170, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](171, "li", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](172, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](173, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](174, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](175, "\xA0\xA0Like");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](176, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](177, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](178, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](179, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](180, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](181, "\xA0\xA0Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](182, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](183, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](184, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](185, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](186, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](187, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](188, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](189, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](190, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](191, "h5", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](192, "JOHAN DIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](193, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](194, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](195, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](196, "10 Hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](197, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](198, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](199, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](200, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](201, "ks-modal-gallery", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("buttonAfterHook", function ProfileComponent_Template_ks_modal_gallery_buttonAfterHook_201_listener($event) {
              return ctx.onButtonAfterHook($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](202, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](203, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](204, "li", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](205, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](206, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](207, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](208, "\xA0\xA0Like");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](209, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](210, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](211, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](212, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](213, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](214, "\xA0\xA0Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](215, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](216, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](217, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](218, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consecteturContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("title", "Profile")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](50, _c0))("active_item", "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("src", ctx.url ? ctx.url : "assets/images/user/1.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 25869)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 659887)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("id", 1)("modalImages", ctx.images)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](51, _c1))("buttonsConfig", ctx.buttonsConfigCustom);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 2659)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 569)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("id", 2)("modalImages", ctx.images)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](52, _c1))("buttonsConfig", ctx.buttonsConfigCustom);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("id", 3)("modalImages", ctx.images)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](53, _c1))("buttonsConfig", ctx.buttonsConfigCustom);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 569)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 569)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 569)("from", 0)("duration", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 569)("from", 0)("duration", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("id", 4)("modalImages", ctx.images1)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](54, _c1))("buttonsConfig", ctx.buttonsConfigCustom);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 569)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 569)("from", 0)("duration", 5);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, angular_count_to__WEBPACK_IMPORTED_MODULE_1__.CountToDirective, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["??d"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    54130: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeamDetailsComponent": function TeamDetailsComponent() {
          return (
            /* binding */
            _TeamDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);

      var _c0 = function _c0() {
        return ["Apps", "User"];
      };

      var _TeamDetailsComponent = /*#__PURE__*/function () {
        function _TeamDetailsComponent() {
          _classCallCheck(this, _TeamDetailsComponent);
        }

        _createClass(_TeamDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TeamDetailsComponent;
      }();

      _TeamDetailsComponent.??fac = function TeamDetailsComponent_Factory(t) {
        return new (t || _TeamDetailsComponent)();
      };

      _TeamDetailsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _TeamDetailsComponent,
        selectors: [["app-team-details"]],
        decls: 285,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-md-6", "col-xl-4", "box-col-6", "xl-50"], [1, "card", "custom-card"], [1, "card-header"], ["src", "assets/images/user-card/1.jpg", "alt", "", 1, "img-fluid"], [1, "card-profile"], ["src", "assets/images/avtar/3.jpg", "alt", "", 1, "rounded-circle"], [1, "card-social"], ["href", "javascript:void(0)"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-rss"], [1, "text-center", "profile-details"], [1, "card-footer", "row"], [1, "col-4", "col-sm-4"], [1, "counter"], ["src", "assets/images/user-card/2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/avtar/16.jpg", "alt", "", 1, "rounded-circle"], ["src", "assets/images/user-card/3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/avtar/11.jpg", "alt", "", 1, "rounded-circle"], ["src", "assets/images/user-card/7.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/user-card/5.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/user-card/6.jpg", "alt", "", 1, "img-fluid"]],
        template: function TeamDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Mark Jecno");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "h3", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "9564");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "49");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "K");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Total Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "96");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](53, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](55, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](59, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](62, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](65, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](68, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](71, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, "Johan Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, "Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "h3", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "2578");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "26");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "K");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Total Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "96");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](100, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](102, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](106, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](109, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](112, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](115, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](118, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, "Dev John");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "Devloper");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "h3", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, "6545");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, "91");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "K");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, "Total Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](142, "21");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](147, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](149, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](153, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](156, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](159, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](162, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](165, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168, "Johan Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](170, "Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "h3", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, "2578");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](182, "26");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](183, "K");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](186, "Total Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](189, "96");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](194, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](196, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](200, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](203, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](206, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](209, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](212, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](215, "Dev John");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](217, "Devloper");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](221, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "h3", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](223, "6545");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](226, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](229, "91");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](230, "K");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](233, "Total Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "21");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](237, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](241, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](243, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](247, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](250, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](253, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](256, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](259, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](262, "Mark Jecno");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](264, "Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](268, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "h3", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](270, "9564");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](273, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](274, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](276, "49");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](277, "K");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](278, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](280, "Total Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](282, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](283, "96");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](284, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Team Details")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Team Details");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    65060: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsersRoutingModule": function UsersRoutingModule() {
          return (
            /* binding */
            _UsersRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _team_details_team_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./team-details/team-details.component */
      54130);
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile/profile.component */
      15681);
      /* harmony import */


      var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-profile/edit-profile.component */
      63429);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: "team-details",
          component: _team_details_team_details_component__WEBPACK_IMPORTED_MODULE_0__.TeamDetailsComponent
        }, {
          path: "profile",
          component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent
        }, {
          path: "edit-profile",
          component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__.EditProfileComponent
        }]
      }];

      var _UsersRoutingModule = function _UsersRoutingModule() {
        _classCallCheck(this, _UsersRoutingModule);
      };

      _UsersRoutingModule.??fac = function UsersRoutingModule_Factory(t) {
        return new (t || _UsersRoutingModule)();
      };

      _UsersRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _UsersRoutingModule
      });
      _UsersRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_UsersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    22478: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsersModule": function UsersModule() {
          return (
            /* binding */
            _UsersModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./users-routing.module */
      65060);
      /* harmony import */


      var angular_count_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-count-to */
      74848);
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      59715);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _team_details_team_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./team-details/team-details.component */
      54130);
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile/profile.component */
      15681);
      /* harmony import */


      var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-profile/edit-profile.component */
      63429);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! hammerjs */
      11524);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! mousetrap */
      13544);
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _UsersModule = function _UsersModule() {
        _classCallCheck(this, _UsersModule);
      };

      _UsersModule.??fac = function UsersModule_Factory(t) {
        return new (t || _UsersModule)();
      };

      _UsersModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({
        type: _UsersModule
      });
      _UsersModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, angular_count_to__WEBPACK_IMPORTED_MODULE_1__.CountToModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__.GalleryModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](_UsersModule, {
          declarations: [_team_details_team_details_component__WEBPACK_IMPORTED_MODULE_3__.TeamDetailsComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent, _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__.EditProfileComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, angular_count_to__WEBPACK_IMPORTED_MODULE_1__.CountToModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__.GalleryModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_users_users_module_ts-es5.js.map