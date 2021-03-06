(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_project_project_module_ts"], {
    /***/
    83219: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreateProjectComponent": function CreateProjectComponent() {
          return (
            /* binding */
            _CreateProjectComponent
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
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _c0 = function _c0() {
        return ["Apps", "Project"];
      };

      var _CreateProjectComponent = /*#__PURE__*/function () {
        function _CreateProjectComponent() {
          _classCallCheck(this, _CreateProjectComponent);
        }

        _createClass(_CreateProjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _CreateProjectComponent;
      }();

      _CreateProjectComponent.??fac = function CreateProjectComponent_Factory(t) {
        return new (t || _CreateProjectComponent)();
      };

      _CreateProjectComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _CreateProjectComponent,
        selectors: [["app-create-project"]],
        decls: 92,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "form", "theme-form"], [1, "col"], [1, "form-group"], ["type", "text", "placeholder", "Project name *", 1, "form-control"], ["type", "text", "placeholder", "Name client or company name", 1, "form-control"], [1, "col-sm-4"], ["type", "text", "placeholder", "Enter project Rate", 1, "form-control"], [1, "form-control", "digits"], ["type", "text", "data-language", "en", 1, "datepicker-here", "form-control"], ["id", "exampleFormControlTextarea4", "rows", "3", 1, "form-control"], ["id", "singleFileUpload", 1, "dropzone", "digits"], [1, "dz-message", "needsclick"], [1, "icon-cloud-up"], [1, "form-group", "mb-0"], ["href", "#", 1, "btn", "btn-success", "mr-3"], ["href", "#", 1, "btn", "btn-danger"]],
        template: function CreateProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Project Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Client name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Project Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Project Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Hourly");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Fix price");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Urgent");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "Project Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "Small");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Big");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "Starting date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](63, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "Ending date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](68, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Enter some Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](74, "textarea", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Upload project file");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "form", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](82, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Drop files here or click to upload.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Create New")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Create New");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcHJvamVjdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    17733: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectListComponent": function ProjectListComponent() {
          return (
            /* binding */
            _ProjectListComponent
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _c0 = function _c0() {
        return ["Apps", "Project"];
      };

      var _c1 = function _c1() {
        return ["/project/create"];
      };

      var _ProjectListComponent = /*#__PURE__*/function () {
        function _ProjectListComponent() {
          _classCallCheck(this, _ProjectListComponent);
        }

        _createClass(_ProjectListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ProjectListComponent;
      }();

      _ProjectListComponent.??fac = function ProjectListComponent_Factory(t) {
        return new (t || _ProjectListComponent)();
      };

      _ProjectListComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _ProjectListComponent,
        selectors: [["app-project-list"]],
        decls: 918,
        vars: 6,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-md-12", "project-list"], [1, "card"], [1, "col-sm-6"], ["id", "top-tab", "role", "tablist", 1, "nav", "nav-tabs", "border-tab"], [1, "nav-item"], ["id", "top-home-tab", "data-toggle", "tab", "href", "javascript:void(0)", "role", "tab", "aria-controls", "top-home", "aria-selected", "true", 1, "nav-link", "active"], ["data-feather", "target"], ["id", "profile-top-tab", "data-toggle", "tab", "href", "javascript:void(0)", "role", "tab", "aria-controls", "top-profile", "aria-selected", "false", 1, "nav-link"], ["data-feather", "info"], ["id", "contact-top-tab", "data-toggle", "tab", "href", "javascript:void(0)", "role", "tab", "aria-controls", "top-contact", "aria-selected", "false", 1, "nav-link"], ["data-feather", "check-circle"], [1, "text-right"], [1, "form-group", "mb-0", "mr-0"], [1, "btn", "btn-primary", 3, "routerLink"], ["data-feather", "plus-square"], [1, "col-sm-12"], [1, "card-body"], ["id", "top-tabContent", 1, "tab-content"], ["id", "top-home", "role", "tabpanel", "aria-labelledby", "top-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "col-xl-4", "col-lg-6"], [1, "project-box"], [1, "badge", "badge-primary"], [1, "media"], ["src", "assets/images/user/3.jpg", "alt", "", "data-original-title", "", "title", "", 1, "img-20", "mr-1", "rounded-circle"], [1, "media-body"], [1, "row", "details"], [1, "col-6"], [1, "col-6", "text-primary"], [1, "customers"], [1, "d-inline-block"], ["src", "assets/images/user/3.jpg", "alt", "", "data-original-title", "", "title", "", 1, "img-30", "rounded-circle"], ["src", "assets/images/user/5.jpg", "alt", "", "data-original-title", "", "title", "", 1, "img-30", "rounded-circle"], ["src", "assets/images/user/1.jpg", "alt", "", "data-original-title", "", "title", "", 1, "img-30", "rounded-circle"], [1, "d-inline-block", "ml-2"], [1, "f-12"], [1, "project-status", "mt-4"], [1, "media", "mb-0"], [1, "media-body", "text-right"], [1, "progress", 2, "height", "5px"], ["role", "progressbar", "aria-valuenow", "10", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar-animated", "bg-primary", "progress-bar-striped", 2, "width", "70%"], [1, "badge", "badge-success"], [1, "col-6", "text-success"], ["role", "progressbar", "aria-valuenow", "10", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar-animated", "bg-success", 2, "width", "100%"], [1, "col-xl-4", "col-lg-6", "mt-4"], ["id", "top-profile", "role", "tabpanel", "aria-labelledby", "profile-top-tab", 1, "tab-pane", "fade"], ["role", "progressbar", "aria-valuenow", "10", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar-animated", "bg-primary", 2, "width", "100%"], ["id", "top-contact", "role", "tabpanel", "aria-labelledby", "contact-top-tab", 1, "tab-pane", "fade"], ["role", "progressbar", "aria-valuenow", "10", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar-animated", "bg-success", "progress-bar-striped", 2, "width", "70%"]],
        template: function ProjectListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Doing");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Create New Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Doing");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Endless admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Themeforest, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "12 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](64, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](66, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](68, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "+10 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "70% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](80, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Universal admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](88, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "Envato, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](109, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](113, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](115, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](117, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, "+3 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](129, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, "Poco admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](137, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](140, "Envato, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](142, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](148, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](151, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](162, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](164, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](166, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](169, "+2 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](178, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](182, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](184, "Universal admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](186, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](189, "Envato, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](191, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](195, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](197, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](200, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](202, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](205, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](207, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](211, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](213, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](215, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](218, "+3 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](222, "100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](225, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](227, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, "Doing");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](233, "Endless admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](235, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](236, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, "Themeforest, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](240, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](244, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](246, "12 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](251, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](256, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](260, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](262, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](264, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](267, "+10 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](268, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](270, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](271, "70% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](274, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](276, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](278, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](280, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](282, "Poco admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](284, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](286, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](287, "Envato, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](289, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](292, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](293, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](294, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](295, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](298, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](299, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](300, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](303, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](304, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](305, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](306, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](307, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](309, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](310, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](311, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](313, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](316, "+2 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](317, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](320, "100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](321, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](322, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](323, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](324, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](325, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](327, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](328, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](330, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](331, "Doing");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](332, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](333, "Endless admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](334, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](335, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](336, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](337, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](338, "Themeforest, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](339, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](340, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](341, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](343, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](344, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](345, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](346, "12 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](347, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](349, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](350, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](351, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](353, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](354, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](355, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](356, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](357, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](358, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](360, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](361, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](362, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](363, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](364, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](366, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](367, "+10 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](368, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](369, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](370, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](371, "70% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](372, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](373, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](374, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](375, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](376, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](377, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](378, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](379, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](380, "Doing");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](381, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](382, "Universal admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](383, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](384, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](385, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](386, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](387, "Envato, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](388, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](389, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](390, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](391, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](392, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](393, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](394, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](395, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](396, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](397, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](398, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](399, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](400, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](401, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](402, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](403, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](404, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](405, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](406, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](407, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](408, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](409, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](410, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](411, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](412, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](413, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](414, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](415, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](416, "+3 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](417, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](418, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](419, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](420, "100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](421, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](422, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](423, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](424, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](425, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](426, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](427, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](428, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](429, "Doing");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](430, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](431, "Poco admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](432, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](433, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](434, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](435, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](436, "Envato, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](437, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](438, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](439, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](440, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](441, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](442, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](443, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](444, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](445, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](446, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](447, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](448, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](449, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](450, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](451, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](452, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](453, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](454, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](455, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](456, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](457, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](458, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](459, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](460, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](461, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](462, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](463, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](464, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](465, "+2 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](466, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](467, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](468, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](469, "100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](470, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](471, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](472, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](473, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](474, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](475, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](476, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](477, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](478, "Doing");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](479, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](480, "Universal admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](481, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](482, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](483, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](484, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](485, "Envato, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](486, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](487, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](488, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](489, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](490, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](491, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](492, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](493, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](494, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](495, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](496, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](497, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](498, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](499, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](500, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](501, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](502, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](503, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](504, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](505, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](506, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](507, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](508, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](509, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](510, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](511, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](512, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](513, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](514, "+3 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](515, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](516, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](517, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](518, "100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](519, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](520, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](521, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](522, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](523, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](524, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](525, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](526, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](527, "Doing");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](528, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](529, "Endless admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](530, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](531, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](532, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](533, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](534, "Themeforest, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](535, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](536, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](537, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](538, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](539, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](540, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](541, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](542, "12 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](543, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](544, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](545, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](546, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](547, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](548, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](549, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](550, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](551, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](552, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](553, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](554, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](555, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](556, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](557, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](558, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](559, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](560, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](561, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](562, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](563, "+10 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](564, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](565, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](566, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](567, "70% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](568, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](569, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](570, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](571, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](572, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](573, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](574, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](575, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](576, "Doing");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](577, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](578, "Poco admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](579, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](580, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](581, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](582, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](583, "Envato, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](584, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](585, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](586, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](587, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](588, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](589, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](590, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](591, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](592, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](593, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](594, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](595, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](596, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](597, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](598, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](599, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](600, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](601, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](602, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](603, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](604, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](605, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](606, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](607, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](608, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](609, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](610, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](611, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](612, "+2 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](613, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](614, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](615, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](616, "100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](617, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](618, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](619, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](620, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](621, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](622, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](623, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](624, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](625, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](626, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](627, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](628, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](629, "Endless admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](630, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](631, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](632, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](633, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](634, "Themeforest, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](635, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](636, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](637, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](638, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](639, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](640, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](641, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](642, "12 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](643, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](644, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](645, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](646, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](647, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](648, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](649, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](650, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](651, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](652, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](653, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](654, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](655, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](656, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](657, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](658, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](659, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](660, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](661, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](662, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](663, "+10 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](664, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](665, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](666, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](667, "70% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](668, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](669, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](670, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](671, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](672, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](673, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](674, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](675, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](676, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](677, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](678, "Universal admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](679, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](680, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](681, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](682, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](683, "Envato, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](684, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](685, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](686, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](687, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](688, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](689, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](690, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](691, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](692, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](693, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](694, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](695, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](696, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](697, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](698, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](699, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](700, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](701, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](702, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](703, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](704, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](705, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](706, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](707, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](708, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](709, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](710, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](711, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](712, "+3 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](713, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](714, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](715, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](716, "100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](717, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](718, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](719, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](720, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](721, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](722, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](723, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](724, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](725, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](726, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](727, "Poco admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](728, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](729, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](730, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](731, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](732, "Envato, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](733, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](734, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](735, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](736, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](737, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](738, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](739, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](740, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](741, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](742, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](743, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](744, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](745, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](746, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](747, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](748, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](749, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](750, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](751, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](752, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](753, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](754, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](755, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](756, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](757, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](758, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](759, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](760, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](761, "+2 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](762, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](763, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](764, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](765, "100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](766, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](767, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](768, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](769, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](770, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](771, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](772, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](773, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](774, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](775, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](776, "Universal admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](777, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](778, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](779, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](780, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](781, "Envato, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](782, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](783, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](784, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](785, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](786, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](787, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](788, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](789, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](790, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](791, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](792, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](793, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](794, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](795, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](796, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](797, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](798, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](799, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](800, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](801, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](802, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](803, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](804, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](805, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](806, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](807, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](808, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](809, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](810, "+3 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](811, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](812, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](813, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](814, "100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](815, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](816, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](817, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](818, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](819, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](820, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](821, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](822, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](823, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](824, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](825, "Endless admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](826, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](827, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](828, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](829, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](830, "Themeforest, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](831, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](832, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](833, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](834, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](835, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](836, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](837, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](838, "12 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](839, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](840, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](841, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](842, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](843, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](844, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](845, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](846, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](847, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](848, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](849, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](850, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](851, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](852, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](853, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](854, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](855, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](856, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](857, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](858, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](859, "+10 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](860, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](861, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](862, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](863, "70% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](864, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](865, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](866, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](867, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](868, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](869, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](870, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](871, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](872, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](873, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](874, "Poco admin Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](875, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](876, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](877, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](878, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](879, "Envato, australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](880, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](881, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](882, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](883, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](884, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](885, "Issues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](886, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](887, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](888, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](889, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](890, "Resolved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](891, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](892, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](893, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](894, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](895, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](896, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](897, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](898, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](899, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](900, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](901, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](902, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](903, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](904, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](905, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](906, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](907, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](908, "+2 More");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](909, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](910, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](911, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](912, "100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](913, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](914, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](915, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](916, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](917, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Project List")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](4, _c0))("active_item", "Project List");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](5, _c1));
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    98689: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectRoutingModule": function ProjectRoutingModule() {
          return (
            /* binding */
            _ProjectRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./project-list/project-list.component */
      17733);
      /* harmony import */


      var _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./create-project/create-project.component */
      83219);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: 'list',
          component: _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_0__.ProjectListComponent
        }, {
          path: 'create',
          component: _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_1__.CreateProjectComponent
        }]
      }];

      var _ProjectRoutingModule = function _ProjectRoutingModule() {
        _classCallCheck(this, _ProjectRoutingModule);
      };

      _ProjectRoutingModule.??fac = function ProjectRoutingModule_Factory(t) {
        return new (t || _ProjectRoutingModule)();
      };

      _ProjectRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _ProjectRoutingModule
      });
      _ProjectRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_ProjectRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    47287: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectModule": function ProjectModule() {
          return (
            /* binding */
            _ProjectModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _project_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./project-routing.module */
      98689);
      /* harmony import */


      var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./project-list/project-list.component */
      17733);
      /* harmony import */


      var _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-project/create-project.component */
      83219);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ProjectModule = function _ProjectModule() {
        _classCallCheck(this, _ProjectModule);
      };

      _ProjectModule.??fac = function ProjectModule_Factory(t) {
        return new (t || _ProjectModule)();
      };

      _ProjectModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _ProjectModule
      });
      _ProjectModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _project_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProjectRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_ProjectModule, {
          declarations: [_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_2__.ProjectListComponent, _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_3__.CreateProjectComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _project_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProjectRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_project_project_module_ts-es5.js.map