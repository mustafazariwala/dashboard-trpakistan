(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_buttons_buttons_module_ts"], {
    /***/
    94696: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonGroupComponent": function ButtonGroupComponent() {
          return (
            /* binding */
            _ButtonGroupComponent
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
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      var _c0 = function _c0() {
        return ["Buttons"];
      };

      var _ButtonGroupComponent = /*#__PURE__*/function () {
        function _ButtonGroupComponent() {
          _classCallCheck(this, _ButtonGroupComponent);
        }

        _createClass(_ButtonGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ButtonGroupComponent;
      }();

      _ButtonGroupComponent.??fac = function ButtonGroupComponent_Factory(t) {
        return new (t || _ButtonGroupComponent)();
      };

      _ButtonGroupComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _ButtonGroupComponent,
        selectors: [["app-button-group"]],
        decls: 1011,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-body", "btn-group-showcase"], [1, "col-xl-4", "col-md-6", "col-sm-12", "xl-50"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-light"], [1, "col-xl-4", "col-md-6", "col-sm-12", "button-group-mb-sm", "xl-50"], ["type", "button", 1, "btn", "btn-dark"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-pill"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-square"], [1, "col-xl-6", "col-sm-12"], ["type", "button", 1, "btn", "btn-primary", "btn-lg"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg"], ["type", "button", 1, "btn", "btn-success", "btn-lg"], ["type", "button", 1, "btn", "btn-info", "btn-lg"], ["type", "button", 1, "btn", "btn-warning", "btn-lg"], ["type", "button", 1, "btn", "btn-danger", "btn-lg"], ["type", "button", 1, "btn", "btn-light", "btn-lg"], [1, "col-xl-6", "col-sm-12", "button-group-mb-sm"], ["type", "button", 1, "btn", "btn-dark", "btn-lg"], ["type", "button", 1, "btn", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-outline-success"], ["type", "button", 1, "btn", "btn-outline-info"], ["type", "button", 1, "btn", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-outline-light", "txt-dark"], ["type", "button", 1, "btn", "btn-outline-dark"], [1, "btn-radio"], ["data-toggle", "buttons", 1, "btn-group"], [1, "btn", "btn-primary"], [1, "radio", "radio-primary"], ["id", "radio7", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio7"], [1, "btn", "btn-primary", "active"], ["id", "radio8", "type", "radio", "name", "radio1", "value", "option1", "checked", ""], ["for", "radio8"], [1, "btn", "btn-secondary"], [1, "radio", "radio-secondary"], ["id", "radio11", "type", "radio", "name", "radio2", "value", "option1"], ["for", "radio11"], [1, "btn", "btn-secondary", "active"], ["id", "radio12", "type", "radio", "name", "radio2", "value", "option1", "checked", ""], ["for", "radio12"], [1, "btn", "btn-success"], [1, "radio", "radio-success"], ["id", "radio13", "type", "radio", "name", "radio3", "value", "option1"], ["for", "radio13"], [1, "btn", "btn-success", "active"], ["id", "radio14", "type", "radio", "name", "radio3", "value", "option1", "checked", ""], ["for", "radio14"], [1, "btn", "btn-info"], [1, "radio", "radio-info"], ["id", "radio15", "type", "radio", "name", "radio4", "value", "option1"], ["for", "radio15"], [1, "btn", "btn-info", "active"], ["id", "radio16", "type", "radio", "name", "radio4", "value", "option1", "checked", ""], ["for", "radio16"], [1, "btn", "btn-warning"], [1, "radio", "radio-warning"], ["id", "radio17", "type", "radio", "name", "radio5", "value", "option1"], ["for", "radio17"], [1, "btn", "btn-warning", "active"], ["id", "radio18", "type", "radio", "name", "radio5", "value", "option1", "checked", ""], ["for", "radio18"], [1, "btn", "btn-danger"], [1, "radio", "radio-danger"], ["id", "radio20", "type", "radio", "name", "radio6", "value", "option1"], ["for", "radio20"], [1, "btn", "btn-danger", "active"], ["id", "radio22", "type", "radio", "name", "radio6", "value", "option1", "checked", ""], ["for", "radio22"], [1, "btn", "btn-light", "txt-dark"], [1, "radio", "radio-light"], ["id", "radio23", "type", "radio", "name", "radio7", "value", "option1"], ["for", "radio23"], [1, "btn", "btn-light", "active", "txt-dark"], ["id", "radio24", "type", "radio", "name", "radio7", "value", "option1", "checked", ""], ["for", "radio24"], ["data-toggle", "buttons", 1, "btn-group", "btn-option"], [1, "checkbox", "checkbox-primary"], ["id", "checkbox-primary-1", "type", "checkbox"], ["for", "checkbox-primary-1"], ["id", "checkbox-primary-2", "type", "checkbox"], ["for", "checkbox-primary-2"], [1, "checkbox", "checkbox-secondary"], ["id", "checkbox-primary-3", "type", "checkbox"], ["for", "checkbox-primary-3"], ["id", "checkbox-primary-4", "type", "checkbox"], ["for", "checkbox-primary-4"], [1, "checkbox", "checkbox-success"], ["id", "checkbox-primary-5", "type", "checkbox"], ["for", "checkbox-primary-5"], ["id", "checkbox-primary-6", "type", "checkbox"], ["for", "checkbox-primary-6"], [1, "checkbox", "checkbox-info"], ["id", "checkbox-primary-7", "type", "checkbox"], ["for", "checkbox-primary-7"], ["id", "checkbox-primary-8", "type", "checkbox"], ["for", "checkbox-primary-8"], [1, "checkbox", "checkbox-warning"], ["id", "checkbox-warning-9", "type", "checkbox"], ["for", "checkbox-warning-9"], ["id", "checkbox-warning-10", "type", "checkbox"], ["for", "checkbox-warning-10"], [1, "checkbox", "checkbox-danger"], ["id", "checkbox-danger-11", "type", "checkbox"], ["for", "checkbox-danger-11"], ["id", "checkbox-danger-12", "type", "checkbox"], ["for", "checkbox-danger-12"], [1, "checkbox", "checkbox-light"], ["id", "checkbox-light-13", "type", "checkbox"], ["for", "checkbox-light-13"], ["id", "checkbox-light-14", "type", "checkbox"], ["for", "checkbox-light-14"], [1, "col-xl-6"], [1, "card", "height-equal"], [1, "card-body", "btn-group-wrapper"], [1, "m-b-30"], ["role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], [1, "fa", "fa-bold"], [1, "fa", "fa", "fa-italic"], ["ngbDropdown", "", "role", "group", 1, "btn-group"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-light", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], [1, "btn-group"], [1, "fa", "fa-file-image-o"], [1, "fa", "fa-paperclip"], [1, "btn", "btn-primary", "btn-lg"], [1, "btn", "btn-secondary", "btn-lg"], [1, "btn", "btn-success", "btn-lg"], [1, "btn", "btn-info", "btn-lg"], ["role", "group", "aria-label", "Vertical button group", 1, "btn-group-vertical"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-success", "dropdown-toggle"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-danger", "dropdown-toggle"]],
        template: function ButtonGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Basic button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "Edges button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](140, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](142, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](149, "Flat button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](163, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](165, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](167, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](183, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](187, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](189, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](191, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](195, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](197, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](199, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](203, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](205, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](207, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](211, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](213, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](215, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](219, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](221, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](223, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](228, "large Button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](242, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](244, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](246, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](250, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](260, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](262, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](264, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](266, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](268, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](270, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](274, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](276, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](278, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](280, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](282, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](284, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](286, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](289, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](290, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](292, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](294, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](295, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](299, "large Edges Button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](304, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](305, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](306, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](307, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](309, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](310, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](313, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](315, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](316, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](317, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](320, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](321, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](322, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](323, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](324, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](325, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](327, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](328, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](329, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](330, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](331, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](332, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](333, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](334, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](336, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](337, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](338, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](339, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](340, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](341, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](343, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](345, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](347, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](349, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](350, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](351, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](353, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](354, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](355, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](357, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](358, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](360, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](361, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](362, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](363, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](364, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](365, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](366, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](367, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](368, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](369, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](370, "Outline Custom button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](371, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](372, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](373, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](374, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](375, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](376, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](377, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](378, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](379, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](380, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](381, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](382, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](383, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](384, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](385, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](386, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](387, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](388, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](389, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](390, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](391, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](392, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](393, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](394, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](395, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](396, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](397, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](398, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](399, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](400, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](401, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](402, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](403, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](404, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](405, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](406, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](407, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](408, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](409, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](410, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](411, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](412, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](413, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](414, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](415, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](416, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](417, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](418, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](419, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](420, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](421, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](422, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](423, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](424, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](425, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](426, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](427, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](428, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](429, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](430, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](431, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](432, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](433, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](434, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](435, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](436, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](437, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](438, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](439, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](440, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](441, "Outline custom button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](442, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](443, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](444, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](445, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](446, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](447, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](448, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](449, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](450, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](451, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](452, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](453, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](454, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](455, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](456, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](457, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](458, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](459, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](460, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](461, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](462, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](463, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](464, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](465, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](466, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](467, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](468, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](469, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](470, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](471, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](472, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](473, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](474, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](475, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](476, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](477, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](478, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](479, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](480, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](481, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](482, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](483, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](484, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](485, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](486, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](487, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](488, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](489, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](490, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](491, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](492, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](493, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](494, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](495, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](496, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](497, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](498, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](499, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](500, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](501, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](502, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](503, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](504, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](505, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](506, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](507, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](508, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](509, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](510, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](511, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](512, "Outline button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](513, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](514, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](515, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](516, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](517, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](518, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](519, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](520, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](521, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](522, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](523, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](524, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](525, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](526, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](527, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](528, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](529, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](530, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](531, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](532, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](533, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](534, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](535, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](536, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](537, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](538, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](539, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](540, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](541, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](542, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](543, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](544, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](545, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](546, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](547, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](548, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](549, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](550, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](551, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](552, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](553, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](554, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](555, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](556, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](557, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](558, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](559, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](560, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](561, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](562, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](563, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](564, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](565, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](566, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](567, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](568, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](569, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](570, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](571, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](572, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](573, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](574, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](575, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](576, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](577, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](578, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](579, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](580, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](581, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](582, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](583, "Outline Edges button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](584, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](585, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](586, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](587, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](588, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](589, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](590, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](591, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](592, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](593, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](594, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](595, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](596, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](597, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](598, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](599, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](600, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](601, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](602, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](603, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](604, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](605, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](606, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](607, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](608, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](609, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](610, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](611, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](612, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](613, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](614, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](615, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](616, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](617, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](618, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](619, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](620, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](621, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](622, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](623, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](624, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](625, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](626, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](627, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](628, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](629, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](630, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](631, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](632, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](633, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](634, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](635, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](636, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](637, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](638, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](639, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](640, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](641, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](642, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](643, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](644, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](645, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](646, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](647, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](648, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](649, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](650, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](651, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](652, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](653, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](654, "Outline flat button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](655, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](656, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](657, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](658, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](659, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](660, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](661, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](662, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](663, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](664, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](665, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](666, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](667, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](668, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](669, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](670, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](671, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](672, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](673, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](674, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](675, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](676, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](677, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](678, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](679, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](680, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](681, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](682, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](683, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](684, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](685, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](686, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](687, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](688, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](689, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](690, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](691, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](692, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](693, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](694, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](695, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](696, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](697, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](698, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](699, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](700, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](701, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](702, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](703, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](704, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](705, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](706, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](707, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](708, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](709, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](710, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](711, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](712, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](713, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](714, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](715, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](716, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](717, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](718, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](719, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](720, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](721, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](722, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](723, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](724, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](725, "Radio button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](726, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](727, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](728, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](729, ".active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](730, " for active state and");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](731, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](732, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](733, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](734, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](735, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](736, " attribute");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](737, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](738, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](739, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](740, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](741, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](742, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](743, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](744, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](745, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](746, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](747, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](748, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](749, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](750, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](751, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](752, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](753, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](754, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](755, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](756, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](757, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](758, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](759, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](760, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](761, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](762, "input", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](763, "label", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](764, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](765, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](766, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](767, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](768, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](769, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](770, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](771, "label", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](772, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](773, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](774, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](775, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](776, "label", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](777, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](778, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](779, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](780, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](781, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](782, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](783, "input", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](784, "label", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](785, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](786, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](787, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](788, "input", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](789, "label", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](790, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](791, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](792, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](793, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](794, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](795, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](796, "input", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](797, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](798, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](799, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](800, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](801, "input", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](802, "label", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](803, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](804, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](805, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](806, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](807, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](808, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](809, "input", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](810, "label", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](811, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](812, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](813, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](814, "input", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](815, "label", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](816, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](817, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](818, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](819, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](820, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](821, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](822, "input", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](823, "label", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](824, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](825, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](826, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](827, "input", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](828, "label", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](829, "Option 2");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](830, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](831, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](832, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](833, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](834, "Check Box button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](835, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](836, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](837, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](838, ".active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](839, " for active state and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](840, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](841, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](842, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](843, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](844, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](845, " attribute");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](846, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](847, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](848, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](849, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](850, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](851, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](852, "input", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](853, "label", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](854, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](855, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](856, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](857, "input", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](858, "label", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](859, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](860, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](861, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](862, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](863, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](864, "input", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](865, "label", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](866, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](867, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](868, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](869, "input", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](870, "label", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](871, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](872, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](873, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](874, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](875, "div", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](876, "input", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](877, "label", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](878, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](879, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](880, "div", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](881, "input", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](882, "label", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](883, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](884, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](885, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](886, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](887, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](888, "input", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](889, "label", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](890, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](891, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](892, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](893, "input", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](894, "label", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](895, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](896, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](897, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](898, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](899, "div", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](900, "input", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](901, "label", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](902, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](903, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](904, "div", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](905, "input", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](906, "label", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](907, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](908, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](909, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](910, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](911, "div", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](912, "input", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](913, "label", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](914, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](915, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](916, "div", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](917, "input", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](918, "label", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](919, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](920, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](921, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](922, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](923, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](924, "input", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](925, "label", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](926, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](927, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](928, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](929, "input", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](930, "label", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](931, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](932, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](933, "div", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](934, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](935, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](936, "Nesting");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](937, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](938, "Make nesting buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](939, "div", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](940, "div", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](941, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](942, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](943, "i", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](944, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](945, "i", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](946, "div", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](947, "button", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](948, "Dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](949, "div", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](950, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](951, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](952, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](953, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](954, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](955, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](956, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](957, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](958, "div", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](959, "div", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](960, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](961, "i", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](962, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](963, "i", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](964, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](965, "i", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](966, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](967, "i", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](968, "div", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](969, "div", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](970, "button", 139);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](971, "i", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](972, "button", 140);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](973, "i", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](974, "button", 141);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](975, "i", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](976, "button", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](977, "i", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](978, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](979, "div", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](980, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](981, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](982, "Vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](983, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](984, "Make vertical buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](985, "div", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](986, "div", 143);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](987, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](988, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](989, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](990, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](991, "div", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](992, "button", 144);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](993, "Dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](994, "div", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](995, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](996, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](997, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](998, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](999, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1000, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1001, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1002, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1003, "div", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1004, "button", 145);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1005, "Dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1006, "div", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1007, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1008, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1009, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1010, "Dropdown link");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Button Group")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Button Group");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    34367: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonsRoutingModule": function ButtonsRoutingModule() {
          return (
            /* binding */
            _ButtonsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _default_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default/default.component */
      70433);
      /* harmony import */


      var _flat_flat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./flat/flat.component */
      24328);
      /* harmony import */


      var _edge_edge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edge/edge.component */
      12080);
      /* harmony import */


      var _raised_raised_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./raised/raised.component */
      10369);
      /* harmony import */


      var _button_group_button_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./button-group/button-group.component */
      94696);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: 'default',
          component: _default_default_component__WEBPACK_IMPORTED_MODULE_0__.DefaultComponent
        }, {
          path: 'flat',
          component: _flat_flat_component__WEBPACK_IMPORTED_MODULE_1__.FlatComponent
        }, {
          path: 'edge',
          component: _edge_edge_component__WEBPACK_IMPORTED_MODULE_2__.EdgeComponent
        }, {
          path: 'raised',
          component: _raised_raised_component__WEBPACK_IMPORTED_MODULE_3__.RaisedComponent
        }, {
          path: 'group',
          component: _button_group_button_group_component__WEBPACK_IMPORTED_MODULE_4__.ButtonGroupComponent
        }]
      }];

      var _ButtonsRoutingModule = function _ButtonsRoutingModule() {
        _classCallCheck(this, _ButtonsRoutingModule);
      };

      _ButtonsRoutingModule.??fac = function ButtonsRoutingModule_Factory(t) {
        return new (t || _ButtonsRoutingModule)();
      };

      _ButtonsRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: _ButtonsRoutingModule
      });
      _ButtonsRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](_ButtonsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    90280: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonsModule": function ButtonsModule() {
          return (
            /* binding */
            _ButtonsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/shared.module */
      44466);
      /* harmony import */


      var _buttons_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buttons-routing.module */
      34367);
      /* harmony import */


      var _default_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./default/default.component */
      70433);
      /* harmony import */


      var _flat_flat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./flat/flat.component */
      24328);
      /* harmony import */


      var _edge_edge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edge/edge.component */
      12080);
      /* harmony import */


      var _raised_raised_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./raised/raised.component */
      10369);
      /* harmony import */


      var _button_group_button_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./button-group/button-group.component */
      94696);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ButtonsModule = function _ButtonsModule() {
        _classCallCheck(this, _ButtonsModule);
      };

      _ButtonsModule.??fac = function ButtonsModule_Factory(t) {
        return new (t || _ButtonsModule)();
      };

      _ButtonsModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({
        type: _ButtonsModule
      });
      _ButtonsModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _buttons_routing_module__WEBPACK_IMPORTED_MODULE_1__.ButtonsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](_ButtonsModule, {
          declarations: [_default_default_component__WEBPACK_IMPORTED_MODULE_2__.DefaultComponent, _flat_flat_component__WEBPACK_IMPORTED_MODULE_3__.FlatComponent, _edge_edge_component__WEBPACK_IMPORTED_MODULE_4__.EdgeComponent, _raised_raised_component__WEBPACK_IMPORTED_MODULE_5__.RaisedComponent, _button_group_button_group_component__WEBPACK_IMPORTED_MODULE_6__.ButtonGroupComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _buttons_routing_module__WEBPACK_IMPORTED_MODULE_1__.ButtonsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
        });
      })();
      /***/

    },

    /***/
    70433: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DefaultComponent": function DefaultComponent() {
          return (
            /* binding */
            _DefaultComponent
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
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      var _c0 = function _c0() {
        return ["Buttons"];
      };

      var _DefaultComponent = /*#__PURE__*/function () {
        function _DefaultComponent() {
          _classCallCheck(this, _DefaultComponent);
        }

        _createClass(_DefaultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _DefaultComponent;
      }();

      _DefaultComponent.??fac = function DefaultComponent_Factory(t) {
        return new (t || _DefaultComponent)();
      };

      _DefaultComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _DefaultComponent,
        selectors: [["app-default"]],
        decls: 351,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["id", "default", 1, "card"], [1, "card-header"], [1, "card-body", "btn-showcase"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary", 1, "btn", "btn-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary", 1, "btn", "btn-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success", 1, "btn", "btn-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning", 1, "btn", "btn-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger", 1, "btn", "btn-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light", 1, "btn", "btn-light"], ["id", "large-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary", 1, "btn", "btn-primary", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary", 1, "btn", "btn-secondary", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success", 1, "btn", "btn-success", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-info", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning", 1, "btn", "btn-warning", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger", 1, "btn", "btn-danger", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light", 1, "btn", "btn-light", "btn-lg"], ["id", "small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary", 1, "btn", "btn-primary", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary", 1, "btn", "btn-secondary", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success", 1, "btn", "btn-success", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-info", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning", 1, "btn", "btn-warning", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger", 1, "btn", "btn-danger", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light", 1, "btn", "btn-light", "btn-sm"], ["id", "ex-small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary", 1, "btn", "btn-primary", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary", 1, "btn", "btn-secondary", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success", 1, "btn", "btn-success", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-info", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning", 1, "btn", "btn-warning", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger", 1, "btn", "btn-danger", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light", 1, "btn", "btn-light", "btn-xs"], ["id", "active-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary", 1, "btn", "btn-primary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary", 1, "btn", "btn-secondary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success", 1, "btn", "btn-success", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-info", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning", 1, "btn", "btn-warning", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger", 1, "btn", "btn-danger", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light", 1, "btn", "btn-light", "active", "txt-dark"], ["id", "disabled-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary disabled", 1, "btn", "btn-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary disabled", 1, "btn", "btn-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success disabled", 1, "btn", "btn-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info disabled", 1, "btn", "btn-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning disabled", 1, "btn", "btn-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger disabled", 1, "btn", "btn-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light disabled", 1, "btn", "btn-light", "disabled"], ["id", "custom-state-button", 1, "card"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "btn btn-primary", "placement", "top", "ngbTooltip", "btn btn-primary", "role", "button", 1, "btn", "btn-primary"], ["type", "button", "value", "Input", "data-toggle", "tooltip", "title", "btn btn-secondary", "placement", "top", "ngbTooltip", "btn btn-secondary", 1, "btn", "btn-secondary"], ["type", "submit", "value", "Submit", "data-toggle", "tooltip", "title", "btn btn-success", "placement", "top", "ngbTooltip", "btn btn-success", 1, "btn", "btn-success"], ["type", "submit", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-info"], ["id", "outline-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary", "role", "button", 1, "btn", "btn-outline-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary", 1, "btn", "btn-outline-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success", 1, "btn", "btn-outline-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info", 1, "btn", "btn-outline-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning", 1, "btn", "btn-outline-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger", 1, "btn", "btn-outline-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light", 1, "btn", "btn-outline-light", "txt-dark"], ["id", "outline-bold-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary-2x", 1, "btn", "btn-outline-primary-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary-2x", 1, "btn", "btn-outline-secondary-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success-2x", 1, "btn", "btn-outline-success-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info-2x", 1, "btn", "btn-outline-info-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning-2x", 1, "btn", "btn-outline-warning-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger-2x", 1, "btn", "btn-outline-danger-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light-2x", 1, "btn", "btn-outline-light-2x", "txt-dark"], ["id", "outline-large-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-lg", 1, "btn", "btn-outline-primary", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-lg", 1, "btn", "btn-outline-secondary", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-lg", 1, "btn", "btn-outline-success", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-lg", 1, "btn", "btn-outline-info", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-lg", 1, "btn", "btn-outline-warning", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-lg", 1, "btn", "btn-outline-danger", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-lg", 1, "btn", "btn-outline-light", "btn-lg", "txt-dark"], ["id", "outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-sm", 1, "btn", "btn-outline-primary", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-sm", 1, "btn", "btn-outline-secondary", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-sm", 1, "btn", "btn-outline-success", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-sm", 1, "btn", "btn-outline-info", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-sm", 1, "btn", "btn-outline-warning", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-sm", 1, "btn", "btn-outline-danger", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-sm", 1, "btn", "btn-outline-light", "btn-sm", "txt-dark"], ["id", "ex-outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-xs", 1, "btn", "btn-outline-primary", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-xs", 1, "btn", "btn-outline-secondary", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-xs", 1, "btn", "btn-outline-success", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-xs", 1, "btn", "btn-outline-info", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-xs", 1, "btn", "btn-outline-warning", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-xs", 1, "btn", "btn-outline-danger", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-xs", 1, "btn", "btn-outline-light", "btn-xs", "txt-dark"], [1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary disabled", 1, "btn", "btn-outline-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary disabled", 1, "btn", "btn-outline-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success disabled", 1, "btn", "btn-outline-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info disabled", 1, "btn", "btn-outline-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning disabled", 1, "btn", "btn-outline-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger disabled", 1, "btn", "btn-outline-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light disabled", 1, "btn", "btn-outline-light", "disabled"], ["id", "gradiant", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary-gradien", 1, "btn", "btn-primary-gradien"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary-gradien", 1, "btn", "btn-secondary-gradien"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success-gradien", 1, "btn", "btn-success-gradien"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info-gradien", 1, "btn", "btn-info-gradien"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning-gradien", 1, "btn", "btn-warning-gradien"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger-gradien", 1, "btn", "btn-danger-gradien"]],
        template: function DefaultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Default buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Bootstrap state buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, " class for large size buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, " class for small size buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, "Extra Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, " class for extra small size buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "Active Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, ".active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, " class for active state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "Disabled buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](131, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](145, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](151, "Custom state buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, ".btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, " class used with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, "<button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, "<a>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](162, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](164, "<input>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](165, " elements.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](169, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](170, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, "outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](178, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](180, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, " class for border button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](184, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](186, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](188, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](192, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](194, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "button", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](196, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](200, "bold Border outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](202, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](204, ".btn-outline-*-2x");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](205, " class for bold outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "button", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](212, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "button", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](214, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "button", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](216, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "button", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](218, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](224, "outline Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](226, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](228, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](229, " class for outline and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](232, " class for large button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "button", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](235, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](236, "button", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](237, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](239, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "button", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](241, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](243, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "button", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](245, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](247, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](251, "outline small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](253, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](255, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](256, " class for outline and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](259, " class for small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "button", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](262, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "button", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](264, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "button", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](266, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "button", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](268, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "button", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](270, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "button", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](272, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "button", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](274, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](276, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](278, "Outline extra small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](280, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](282, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](283, " class for outline and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](284, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](285, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](286, " class for extra small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "button", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](289, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "button", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](291, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](292, "button", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](293, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](294, "button", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](295, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "button", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](297, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "button", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](299, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "button", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](301, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](304, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](305, "Disabled outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](306, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](307, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](309, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](310, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](312, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](313, " attribute for disabled state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "button", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](316, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](317, "button", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](318, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](320, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](321, "button", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](322, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](323, "button", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](324, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](325, "button", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](326, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](327, "button", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](328, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](330, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](331, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](332, "Gradien buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](333, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](334, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](336, ".btn-*-gradien");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](337, " class for gradien button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](338, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](339, "button", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](340, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](341, "button", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](342, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](343, "button", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](344, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](345, "button", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](346, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](347, "button", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](348, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](349, "button", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](350, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Default")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Default");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbTooltip],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    12080: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EdgeComponent": function EdgeComponent() {
          return (
            /* binding */
            _EdgeComponent
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
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      var _c0 = function _c0() {
        return ["Buttons"];
      };

      var _EdgeComponent = /*#__PURE__*/function () {
        function _EdgeComponent() {
          _classCallCheck(this, _EdgeComponent);
        }

        _createClass(_EdgeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _EdgeComponent;
      }();

      _EdgeComponent.??fac = function EdgeComponent_Factory(t) {
        return new (t || _EdgeComponent)();
      };

      _EdgeComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _EdgeComponent,
        selectors: [["app-edge"]],
        decls: 381,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["id", "default", 1, "card"], [1, "card-header"], [1, "card-body", "btn-showcase"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-primary", 1, "btn", "btn-pill", "btn-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-secondary", 1, "btn", "btn-pill", "btn-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-success", 1, "btn", "btn-pill", "btn-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-info", 1, "btn", "btn-pill", "btn-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-warning", 1, "btn", "btn-pill", "btn-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-danger", 1, "btn", "btn-pill", "btn-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-light", 1, "btn", "btn-pill", "btn-light"], ["id", "large-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-pill", 1, "btn", "btn-primary", "btn-lg", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-pill", 1, "btn", "btn-secondary", "btn-lg", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-pill", 1, "btn", "btn-success", "btn-lg", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-pill", 1, "btn", "btn-info", "btn-lg", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-pill", 1, "btn", "btn-warning", "btn-lg", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-pill", 1, "btn", "btn-danger", "btn-lg", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-pill", 1, "btn", "btn-light", "btn-lg", "btn-pill"], ["id", "small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-pill", 1, "btn", "btn-primary", "btn-sm", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-pill", 1, "btn", "btn-secondary", "btn-sm", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-pill", 1, "btn", "btn-success", "btn-sm", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-pill", 1, "btn", "btn-info", "btn-sm", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-pill", 1, "btn", "btn-warning", "btn-sm", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-pill", 1, "btn", "btn-danger", "btn-sm", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-pill", 1, "btn", "btn-light", "btn-sm", "btn-pill"], ["id", "ex-small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-pill", 1, "btn", "btn-primary", "btn-xs", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-pill", 1, "btn", "btn-secondary", "btn-xs", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-pill", 1, "btn", "btn-success", "btn-xs", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-pill", 1, "btn", "btn-info", "btn-xs", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-pill", 1, "btn", "btn-warning", "btn-xs", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-pill", 1, "btn", "btn-danger", "btn-xs", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-pill", 1, "btn", "btn-light", "btn-xs", "btn-pill"], ["id", "active-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-primary", 1, "btn", "btn-pill", "btn-primary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-secondary", 1, "btn", "btn-pill", "btn-secondary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-success", 1, "btn", "btn-pill", "btn-success", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-info", 1, "btn", "btn-pill", "btn-info", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-warning", 1, "btn", "btn-pill", "btn-warning", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-danger", 1, "btn", "btn-pill", "btn-danger", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-light", 1, "btn", "btn-pill", "btn-light", "active", "txt-dark"], ["id", "disabled-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-primary disabled", 1, "btn", "btn-pill", "btn-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-secondary disabled", 1, "btn", "btn-pill", "btn-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-success disabled", 1, "btn", "btn-pill", "btn-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-info disabled", 1, "btn", "btn-pill", "btn-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-warning disabled", 1, "btn", "btn-pill", "btn-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-danger disabled", 1, "btn", "btn-pill", "btn-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-light disabled", 1, "btn", "btn-pill", "btn-light", "disabled"], ["id", "custom-state-button", 1, "card"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "btn btn-primary", "placement", "top", "ngbTooltip", "btn btn-pill btn-primary", "role", "button", 1, "btn", "btn-pill", "btn-primary"], ["type", "button", "value", "Input", "data-toggle", "tooltip", "title", "btn btn-pill btn-secondary", "placement", "top", "ngbTooltip", "btn btn-pill btn-secondary", 1, "btn", "btn-pill", "btn-secondary"], ["type", "submit", "value", "Submit", "data-toggle", "tooltip", "title", "btn btn-pill btn-success", "placement", "top", "ngbTooltip", "btn btn-pill btn-success", 1, "btn", "btn-pill", "btn-success"], ["type", "submit", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-pill", "btn-info"], ["id", "outline-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-primary", "role", "button", 1, "btn", "btn-pill", "btn-outline-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-secondary", 1, "btn", "btn-pill", "btn-outline-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-success", 1, "btn", "btn-pill", "btn-outline-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-info", 1, "btn", "btn-pill", "btn-outline-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-warning", 1, "btn", "btn-pill", "btn-outline-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-danger", 1, "btn", "btn-pill", "btn-outline-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-light", 1, "btn", "btn-pill", "btn-outline-light", "txt-dark"], ["id", "outline-bold-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-primary-2x", 1, "btn", "btn-pill", "btn-outline-primary-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-secondary-2x", 1, "btn", "btn-pill", "btn-outline-secondary-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-success-2x", 1, "btn", "btn-pill", "btn-outline-success-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-info-2x", 1, "btn", "btn-pill", "btn-outline-info-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-warning-2x", 1, "btn", "btn-pill", "btn-outline-warning-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-danger-2x", 1, "btn", "btn-pill", "btn-outline-danger-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-light-2x", 1, "btn", "btn-pill", "btn-outline-light-2x", "txt-dark"], ["id", "outline-large-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-pill btn-lg", 1, "btn", "btn-outline-primary", "btn-pill", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-pill btn-lg", 1, "btn", "btn-outline-secondary", "btn-pill", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-pill btn-lg", 1, "btn", "btn-outline-success", "btn-pill", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-pill btn-lg", 1, "btn", "btn-outline-info", "btn-pill", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-pill btn-lg", 1, "btn", "btn-outline-warning", "btn-pill", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-pill btn-lg", 1, "btn", "btn-outline-danger", "btn-pill", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-pill btn-lg", 1, "btn", "btn-outline-light", "btn-pill", "btn-lg", "txt-dark"], ["id", "outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-pill btn-sm", 1, "btn", "btn-outline-primary", "btn-pill", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-pill btn-sm", 1, "btn", "btn-outline-secondary", "btn-pill", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-pill btn-sm", 1, "btn", "btn-outline-success", "btn-pill", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-pill btn-sm", 1, "btn", "btn-outline-info", "btn-pill", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-pill btn-sm", 1, "btn", "btn-outline-warning", "btn-pill", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-pill btn-sm", 1, "btn", "btn-outline-danger", "btn-pill", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-pill btn-sm", 1, "btn", "btn-outline-light", "btn-pill", "btn-sm", "txt-dark"], ["id", "ex-outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-pill btn-xs", 1, "btn", "btn-outline-primary", "btn-pill", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-pill btn-xs", 1, "btn", "btn-outline-secondary", "btn-pill", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-pill btn-xs", 1, "btn", "btn-outline-success", "btn-pill", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-pill btn-xs", 1, "btn", "btn-outline-info", "btn-pill", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-pill btn-xs", 1, "btn", "btn-outline-warning", "btn-pill", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-pill btn-xs", 1, "btn", "btn-outline-danger", "btn-pill", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-pill btn-xs", 1, "btn", "btn-outline-light", "btn-pill", "btn-xs", "txt-dark"], [1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-primary disabled", 1, "btn", "btn-pill", "btn-outline-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-secondary disabled", 1, "btn", "btn-pill", "btn-outline-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-success disabled", 1, "btn", "btn-pill", "btn-outline-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-info disabled", 1, "btn", "btn-pill", "btn-outline-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-warning disabled", 1, "btn", "btn-pill", "btn-outline-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-danger disabled", 1, "btn", "btn-pill", "btn-outline-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-light disabled", 1, "btn", "btn-pill", "btn-outline-light", "disabled"], ["id", "gradiant", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary-gradien btn-pill", 1, "btn", "btn-primary-gradien", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary-gradien btn-pill", 1, "btn", "btn-secondary-gradien", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success-gradien btn-pill", 1, "btn", "btn-success-gradien", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info-gradien btn-pill", 1, "btn", "btn-info-gradien", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning-gradien btn-pill", 1, "btn", "btn-warning-gradien", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger-gradien btn-pill", 1, "btn", "btn-danger-gradien", "btn-pill"]],
        template: function EdgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Default buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " class for flat button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " class for large button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, " class for small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "Extra Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](87, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, " class for extra small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](106, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "Active Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, ".active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, " for active state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "Disabled buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](140, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](149, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](151, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](163, "Custom state buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](165, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](167, ".btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168, " class used with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](170, "<button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "<a>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, "<input>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](177, " elements.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](180, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](181, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](182, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](184, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](188, "outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](192, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](195, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](196, " class for button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](199, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](201, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](203, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](205, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](207, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](209, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "button", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](211, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](215, "bold Border outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](217, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](219, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](222, ".btn-outline-*-2x");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](223, " class for button with bold outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](226, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "button", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](228, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](230, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "button", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](232, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "button", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "button", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](242, "outline Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](244, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](246, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](247, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](250, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](253, " class for large button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "button", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](256, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "button", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](260, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "button", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](262, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](264, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "button", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](266, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](268, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](270, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](272, "outline small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](274, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](276, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](277, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](278, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](279, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](280, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](282, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](283, " class for small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](284, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "button", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](286, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "button", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](288, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](289, "button", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](290, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "button", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](292, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "button", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](294, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](295, "button", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](296, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "button", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](298, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](299, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](302, "Outline extra small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](304, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](306, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](307, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](309, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](310, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](312, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](313, " class for extra small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "button", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](316, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](317, "button", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](318, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "button", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](320, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](321, "button", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](322, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](323, "button", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](324, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](325, "button", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](326, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](327, "button", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](328, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](330, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](331, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](332, "Disabled outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](333, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](334, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](336, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](337, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](338, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](339, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](340, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](341, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "button", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](343, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "button", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](345, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](347, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "button", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](349, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](350, "button", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](351, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "button", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](353, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](354, "button", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](355, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](357, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](358, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](359, "Gradien buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](360, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](361, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](362, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](363, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](364, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](366, ".btn-*-gradien");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](367, " class for gradien button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](368, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](369, "button", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](370, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](371, "button", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](372, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](373, "button", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](374, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](375, "button", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](376, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](377, "button", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](378, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](379, "button", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](380, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Edge")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Edge");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbTooltip],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    24328: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FlatComponent": function FlatComponent() {
          return (
            /* binding */
            _FlatComponent
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
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      var _c0 = function _c0() {
        return ["Buttons"];
      };

      var _FlatComponent = /*#__PURE__*/function () {
        function _FlatComponent() {
          _classCallCheck(this, _FlatComponent);
        }

        _createClass(_FlatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FlatComponent;
      }();

      _FlatComponent.??fac = function FlatComponent_Factory(t) {
        return new (t || _FlatComponent)();
      };

      _FlatComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _FlatComponent,
        selectors: [["app-flat"]],
        decls: 381,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["id", "default", 1, "card"], [1, "card-header"], [1, "card-body", "btn-showcase"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-primary", 1, "btn", "btn-square", "btn-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-secondary", 1, "btn", "btn-square", "btn-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-success", 1, "btn", "btn-square", "btn-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-info", 1, "btn", "btn-square", "btn-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-warning", 1, "btn", "btn-square", "btn-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-danger", 1, "btn", "btn-square", "btn-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-light", 1, "btn", "btn-square", "btn-light"], ["id", "large-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-square", 1, "btn", "btn-primary", "btn-lg", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-square", 1, "btn", "btn-secondary", "btn-lg", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-square", 1, "btn", "btn-success", "btn-lg", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-square", 1, "btn", "btn-info", "btn-lg", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-square", 1, "btn", "btn-warning", "btn-lg", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-square", 1, "btn", "btn-danger", "btn-lg", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-square", 1, "btn", "btn-light", "btn-lg", "btn-square"], ["id", "small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-square", 1, "btn", "btn-primary", "btn-sm", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-square", 1, "btn", "btn-secondary", "btn-sm", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-square", 1, "btn", "btn-success", "btn-sm", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-square", 1, "btn", "btn-info", "btn-sm", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-square", 1, "btn", "btn-warning", "btn-sm", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-square", 1, "btn", "btn-danger", "btn-sm", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-square", 1, "btn", "btn-light", "btn-sm", "btn-square"], ["id", "ex-small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-square", 1, "btn", "btn-primary", "btn-xs", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-square", 1, "btn", "btn-secondary", "btn-xs", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-square", 1, "btn", "btn-success", "btn-xs", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-square", 1, "btn", "btn-info", "btn-xs", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-square", 1, "btn", "btn-warning", "btn-xs", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-square", 1, "btn", "btn-danger", "btn-xs", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-square", 1, "btn", "btn-light", "btn-xs", "btn-square"], ["id", "active-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-primary", 1, "btn", "btn-square", "btn-primary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-secondary", 1, "btn", "btn-square", "btn-secondary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-success", 1, "btn", "btn-square", "btn-success", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-info", 1, "btn", "btn-square", "btn-info", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-warning", 1, "btn", "btn-square", "btn-warning", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-danger", 1, "btn", "btn-square", "btn-danger", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-light", 1, "btn", "btn-square", "btn-light", "active", "txt-dark"], ["id", "disabled-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-primary disabled", 1, "btn", "btn-square", "btn-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-secondary disabled", 1, "btn", "btn-square", "btn-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-success disabled", 1, "btn", "btn-square", "btn-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-info disabled", 1, "btn", "btn-square", "btn-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-warning disabled", 1, "btn", "btn-square", "btn-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-danger disabled", 1, "btn", "btn-square", "btn-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-light disabled", 1, "btn", "btn-square", "btn-light", "disabled"], ["id", "custom-state-button", 1, "card"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "btn btn-primary", "placement", "top", "ngbTooltip", "btn btn-square btn-primary", "role", "button", 1, "btn", "btn-square", "btn-primary"], ["type", "button", "value", "Input", "data-toggle", "tooltip", "title", "btn btn-square btn-secondary", "placement", "top", "ngbTooltip", "btn btn-square btn-secondary", 1, "btn", "btn-square", "btn-secondary"], ["type", "submit", "value", "Submit", "data-toggle", "tooltip", "title", "btn btn-square btn-success", "placement", "top", "ngbTooltip", "btn btn-square btn-success", 1, "btn", "btn-square", "btn-success"], ["type", "submit", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-square", "btn-info"], ["id", "outline-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-primary", "role", "button", 1, "btn", "btn-square", "btn-outline-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-secondary", 1, "btn", "btn-square", "btn-outline-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-success", 1, "btn", "btn-square", "btn-outline-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-info", 1, "btn", "btn-square", "btn-outline-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-warning", 1, "btn", "btn-square", "btn-outline-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-danger", 1, "btn", "btn-square", "btn-outline-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-light", 1, "btn", "btn-square", "btn-outline-light", "txt-dark"], ["id", "outline-bold-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-primary-2x", 1, "btn", "btn-square", "btn-outline-primary-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-secondary-2x", 1, "btn", "btn-square", "btn-outline-secondary-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-success-2x", 1, "btn", "btn-square", "btn-outline-success-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-info-2x", 1, "btn", "btn-square", "btn-outline-info-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-warning-2x", 1, "btn", "btn-square", "btn-outline-warning-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-danger-2x", 1, "btn", "btn-square", "btn-outline-danger-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-light-2x", 1, "btn", "btn-square", "btn-outline-light-2x", "txt-dark"], ["id", "outline-large-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-square btn-lg", 1, "btn", "btn-outline-primary", "btn-square", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-square btn-lg", 1, "btn", "btn-outline-secondary", "btn-square", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-square btn-lg", 1, "btn", "btn-outline-success", "btn-square", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-square btn-lg", 1, "btn", "btn-outline-info", "btn-square", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-square btn-lg", 1, "btn", "btn-outline-warning", "btn-square", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-square btn-lg", 1, "btn", "btn-outline-danger", "btn-square", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-square btn-lg", 1, "btn", "btn-outline-light", "btn-square", "btn-lg", "txt-dark"], ["id", "outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-square btn-sm", 1, "btn", "btn-outline-primary", "btn-square", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-square btn-sm", 1, "btn", "btn-outline-secondary", "btn-square", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-square btn-sm", 1, "btn", "btn-outline-success", "btn-square", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-square btn-sm", 1, "btn", "btn-outline-info", "btn-square", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-square btn-sm", 1, "btn", "btn-outline-warning", "btn-square", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-square btn-sm", 1, "btn", "btn-outline-danger", "btn-square", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-square btn-sm", 1, "btn", "btn-outline-light", "btn-square", "btn-sm", "txt-dark"], ["id", "ex-outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-square btn-xs", 1, "btn", "btn-outline-primary", "btn-square", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-square btn-xs", 1, "btn", "btn-outline-secondary", "btn-square", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-square btn-xs", 1, "btn", "btn-outline-success", "btn-square", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-square btn-xs", 1, "btn", "btn-outline-info", "btn-square", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-square btn-xs", 1, "btn", "btn-outline-warning", "btn-square", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-square btn-xs", 1, "btn", "btn-outline-danger", "btn-square", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-square btn-xs", 1, "btn", "btn-outline-light", "btn-square", "btn-xs", "txt-dark"], [1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-primary disabled", 1, "btn", "btn-square", "btn-outline-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-secondary disabled", 1, "btn", "btn-square", "btn-outline-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-success disabled", 1, "btn", "btn-square", "btn-outline-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-info disabled", 1, "btn", "btn-square", "btn-outline-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-warning disabled", 1, "btn", "btn-square", "btn-outline-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-danger disabled", 1, "btn", "btn-square", "btn-outline-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-light disabled", 1, "btn", "btn-square", "btn-outline-light", "disabled"], ["id", "gradiant", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary-gradien btn-square", 1, "btn", "btn-primary-gradien", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary-gradien btn-square", 1, "btn", "btn-secondary-gradien", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success-gradien btn-square", 1, "btn", "btn-success-gradien", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info-gradien btn-square", 1, "btn", "btn-info-gradien", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning-gradien btn-square", 1, "btn", "btn-warning-gradien", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger-gradien btn-square", 1, "btn", "btn-danger-gradien", "btn-square"]],
        template: function FlatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Default buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " class for flat button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " class for large button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, " class for small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "Extra Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](87, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, " class for extra small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](106, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "Active Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, ".active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, " for active state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "Disabled buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](140, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](149, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](151, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](163, "Custom state buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](165, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](167, ".btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168, " class used with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](170, "<button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "<a>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, "<input>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](177, " elements.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](180, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](181, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](182, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](184, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](188, "outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](192, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](195, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](196, " class for button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](199, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](201, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](203, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](205, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](207, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](209, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "button", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](211, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](215, "bold Border outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](217, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](219, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](222, ".btn-outline-*-2x");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](223, " class for button with bold outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](226, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "button", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](228, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](230, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "button", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](232, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "button", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "button", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](242, "outline Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](244, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](246, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](247, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](250, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](253, " class for large button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "button", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](256, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "button", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](260, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "button", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](262, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](264, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "button", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](266, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](268, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](270, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](272, "outline small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](274, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](276, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](277, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](278, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](279, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](280, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](282, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](283, " class for small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](284, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "button", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](286, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "button", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](288, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](289, "button", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](290, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "button", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](292, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "button", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](294, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](295, "button", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](296, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "button", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](298, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](299, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](302, "Outline extra small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](304, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](306, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](307, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](309, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](310, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](312, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](313, " class for extra small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "button", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](316, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](317, "button", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](318, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "button", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](320, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](321, "button", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](322, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](323, "button", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](324, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](325, "button", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](326, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](327, "button", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](328, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](330, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](331, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](332, "Disabled outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](333, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](334, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](336, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](337, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](338, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](339, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](340, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](341, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "button", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](343, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "button", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](345, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](347, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "button", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](349, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](350, "button", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](351, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "button", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](353, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](354, "button", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](355, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](357, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](358, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](359, "Gradien buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](360, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](361, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](362, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](363, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](364, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](366, ".btn-*-gradien");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](367, " class for gradien button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](368, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](369, "button", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](370, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](371, "button", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](372, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](373, "button", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](374, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](375, "button", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](376, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](377, "button", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](378, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](379, "button", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](380, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Flat")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Flat");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbTooltip],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbGF0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    10369: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RaisedComponent": function RaisedComponent() {
          return (
            /* binding */
            _RaisedComponent
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
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      var _c0 = function _c0() {
        return ["Buttons"];
      };

      var _RaisedComponent = /*#__PURE__*/function () {
        function _RaisedComponent() {
          _classCallCheck(this, _RaisedComponent);
        }

        _createClass(_RaisedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _RaisedComponent;
      }();

      _RaisedComponent.??fac = function RaisedComponent_Factory(t) {
        return new (t || _RaisedComponent)();
      };

      _RaisedComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _RaisedComponent,
        selectors: [["app-raised"]],
        decls: 407,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["id", "default", 1, "card"], [1, "card-header"], [1, "card-body", "btn-showcase"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-primary btn-primary", 1, "btn", "btn-pill", "btn-air-primary", "btn-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-secondary btn-air-secondary", 1, "btn", "btn-pill", "btn-secondary", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-success btn-air-success", 1, "btn", "btn-pill", "btn-success", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-info  btn-air-info", 1, "btn", "btn-pill", "btn-info", "btn-air-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-warning btn-air-warning ", 1, "btn", "btn-pill", "btn-warning", "btn-air-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-danger btn-air-danger", 1, "btn", "btn-pill", "btn-danger", "btn-air-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-light btn-air-light", 1, "btn", "btn-pill", "btn-light", "btn-air-light"], ["id", "large-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-air-primary btn-pill", 1, "btn", "btn-primary", "btn-lg", "btn-pill", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-pill btn-air-secondary", 1, "btn", "btn-secondary", "btn-lg", "btn-pill", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-pill btn-air-success", 1, "btn", "btn-success", "btn-lg", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-pill  btn-air-warning", 1, "btn", "btn-info", "btn-lg", "btn-pill", "btn-air-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-pill  btn-air-info", 1, "btn", "btn-warning", "btn-lg", "btn-pill", "btn-air-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-pill  btn-air-danger", 1, "btn", "btn-danger", "btn-lg", "btn-pill", "btn-air-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-pill  btn-air-light", 1, "btn", "btn-light", "btn-lg", "btn-pill", "btn-air-light"], ["id", "small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-air-primary btn-pill", 1, "btn", "btn-primary", "btn-sm", "btn-pill", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-pill btn-air-secondary", 1, "btn", "btn-secondary", "btn-sm", "btn-pill", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-pill btn-air-success", 1, "btn", "btn-success", "btn-sm", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-pill btn-air-success", 1, "btn", "btn-info", "btn-sm", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-pill btn-air-success", 1, "btn", "btn-warning", "btn-sm", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-pill btn-air-success", 1, "btn", "btn-danger", "btn-sm", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-pill btn-air-success", 1, "btn", "btn-light", "btn-sm", "btn-pill", "btn-air-success"], ["id", "ex-small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-air-primary btn-pill", 1, "btn", "btn-primary", "btn-xs", "btn-pill", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-pill btn-air-secondary", 1, "btn", "btn-secondary", "btn-xs", "btn-pill", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-pill btn-air-success", 1, "btn", "btn-success", "btn-xs", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-pill btn-air-info", 1, "btn", "btn-info", "btn-xs", "btn-pill", "btn-air-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-pill btn-air-warning", 1, "btn", "btn-warning", "btn-xs", "btn-pill", "btn-air-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-pill btn-air-danger", 1, "btn", "btn-danger", "btn-xs", "btn-pill", "btn-air-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-pill btn-air-light", 1, "btn", "btn-light", "btn-xs", "btn-pill", "btn-air-light"], ["id", "active-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-primary btn-primary", 1, "btn", "btn-pill", "btn-air-primary", "btn-primary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-secondary btn-secondary", 1, "btn", "btn-pill", "btn-air-secondary", "btn-secondary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-success", 1, "btn", "btn-pill", "btn-air-success", "btn-success", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-info btn-info", 1, "btn", "btn-pill", "btn-air-info", "btn-info", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-warning btn-warning", 1, "btn", "btn-pill", "btn-air-warning", "btn-warning", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-danger btn-danger", 1, "btn", "btn-pill", "btn-air-danger", "btn-danger", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-light btn-light", 1, "btn", "btn-pill", "btn-air-light", "btn-light", "active", "txt-dark"], ["id", "disabled-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-primary btn-air-primary disabled", 1, "btn", "btn-pill", "btn-primary", "btn-air-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-secondary btn-secondary disabled", 1, "btn", "btn-pill", "btn-air-secondary", "btn-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-success disabled", 1, "btn", "btn-pill", "btn-air-success", "btn-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-info btn-info disabled", 1, "btn", "btn-pill", "btn-air-info", "btn-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-warning btn-warning disabled", 1, "btn", "btn-pill", "btn-air-warning", "btn-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-danger btn-danger disabled", 1, "btn", "btn-pill", "btn-air-danger", "btn-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-light btn-light disabled", 1, "btn", "btn-pill", "btn-air-light", "btn-light", "disabled", "txt-dark"], ["id", "custom-state-button", 1, "card"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "btn btn-primary", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-air-primary btn-primary", "role", "button", 1, "btn", "btn-pill", "btn-primary", "btn-air-primary"], ["type", "button", "value", "Input", "data-toggle", "tooltip", "title", "btn btn-pill btn-air-success btn-secondary", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-secondary", 1, "btn", "btn-pill", "btn-air-secondary", "btn-secondary"], ["type", "submit", "value", "Submit", "data-toggle", "tooltip", "title", "btn btn-pill btn-air-success btn-success", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-success", 1, "btn", "btn-pill", "btn-air-success", "btn-success"], ["type", "submit", "placement", "top", "ngbTooltip", "btn btn-info  btn-air-info btn-pill", 1, "btn", "btn-pill", "btn-info", "btn-air-info"], ["id", "outline-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-primary btn-air-primary", "role", "button", 1, "btn", "btn-pill", "btn-outline-primary", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-secondary btn-outline-secondary", 1, "btn", "btn-pill", "btn-air-secondary", "btn-outline-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-outline-success", 1, "btn", "btn-pill", "btn-air-success", "btn-outline-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-info btn-outline-info", 1, "btn", "btn-pill", "btn-air-info", "btn-outline-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-warning btn-outline-warning", 1, "btn", "btn-pill", "btn-air-warning", "btn-outline-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-danger btn-outline-danger", 1, "btn", "btn-pill", "btn-air-danger", "btn-outline-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-light btn-outline-light", 1, "btn", "btn-pill", "btn-air-light", "btn-outline-light", "txt-dark"], ["id", "outline-bold-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-primary-2x btn-air-primary", 1, "btn", "btn-pill", "btn-outline-primary-2x", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-secondary btn-outline-secondary-2x btn-air-secondary", 1, "btn", "btn-pill", "btn-air-secondary", "btn-outline-secondary-2x", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-outline-success-2x", 1, "btn", "btn-pill", "btn-air-success", "btn-outline-success-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-info btn-outline-info-2x", 1, "btn", "btn-pill", "btn-air-info", "btn-outline-info-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-warning btn-outline-warning-2x", 1, "btn", "btn-pill", "btn-air-warning", "btn-outline-warning-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-danger btn-outline-danger-2x", 1, "btn", "btn-pill", "btn-air-danger", "btn-outline-danger-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-light btn-outline-light-2x", 1, "btn", "btn-pill", "btn-air-light", "btn-outline-light-2x", "txt-dark"], ["id", "outline-large-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-pill btn-lg btn-air-primary", 1, "btn", "btn-outline-primary", "btn-pill", "btn-lg", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-pill btn-air-secondary btn-lg btn-air-secondary", 1, "btn", "btn-outline-secondary", "btn-lg", "btn-air-secondary", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-pill btn-air-success btn-lg", 1, "btn", "btn-outline-success", "btn-pill", "btn-air-success", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-pill btn-air-info btn-lg", 1, "btn", "btn-outline-info", "btn-pill", "btn-air-info", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-pill btn-air-warning btn-lg", 1, "btn", "btn-outline-warning", "btn-pill", "btn-air-warning", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-pill btn-air-danger btn-lg", 1, "btn", "btn-outline-danger", "btn-pill", "btn-air-danger", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-pill btn-air-light btn-lg", 1, "btn", "btn-outline-light", "btn-pill", "btn-air-light", "btn-lg", "txt-dark"], ["id", "outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-pill btn-sm btn-air-primary", 1, "btn", "btn-outline-primary", "btn-pill", "btn-sm", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-pill btn-sm btn-air-secondary", 1, "btn", "btn-outline-secondary", "btn-pill", "btn-air-secondary", "btn-sm", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-pill btn-air-success btn-sm", 1, "btn", "btn-outline-success", "btn-pill", "btn-air-success", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-pill btn-air-info btn-sm", 1, "btn", "btn-outline-info", "btn-pill", "btn-air-info", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-pill btn-air-warning btn-sm", 1, "btn", "btn-outline-warning", "btn-pill", "btn-air-warning", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-pill btn-air-danger btn-sm", 1, "btn", "btn-outline-danger", "btn-pill", "btn-air-danger", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-pill btn-air-light btn-sm", 1, "btn", "btn-outline-light", "btn-pill", "btn-air-light", "btn-sm", "txt-dark"], ["id", "ex-outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-pill btn-air-success btn-xs btn-air-primary", 1, "btn", "btn-outline-primary", "btn-pill", "btn-xs", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-pill btn-air-success btn-xs btn-air-secondary", 1, "btn", "btn-outline-secondary", "btn-pill", "btn-xs", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-pill btn-air-success btn-xs", 1, "btn", "btn-outline-success", "btn-pill", "btn-air-success", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-pill btn-air-success btn-xs", 1, "btn", "btn-outline-info", "btn-pill", "btn-air-info", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-pill btn-air-success btn-xs", 1, "btn", "btn-outline-warning", "btn-pill", "btn-air-warning", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-pill btn-air-success btn-xs", 1, "btn", "btn-outline-danger", "btn-pill", "btn-air-danger", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-pill btn-air-success btn-xs", 1, "btn", "btn-outline-light", "btn-pill", "btn-air-light", "btn-xs", "txt-dark"], [1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-primary disabled btn-air-primary", 1, "btn", "btn-pill", "btn-outline-primary", "disabled", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill  btn-outline-secondary disabled btn-air-secondary", 1, "btn", "btn-pill", "btn-outline-secondary", "disabled", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-outline-success disabled", 1, "btn", "btn-pill", "btn-air-success", "btn-outline-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-info btn-outline-info disabled", 1, "btn", "btn-pill", "btn-air-info", "btn-outline-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-warning btn-outline-warning disabled", 1, "btn", "btn-pill", "btn-air-warning", "btn-outline-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-danger btn-outline-danger disabled", 1, "btn", "btn-pill", "btn-air-danger", "btn-outline-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-light btn-outline-light disabled", 1, "btn", "btn-pill", "btn-air-light", "btn-outline-light", "disabled", "txt-dark"], ["id", "gradiant", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary-gradien btn-pill btn-air-success", 1, "btn", "btn-primary-gradien", "btn-pill", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary-gradien btn-pill btn-air-secondary", 1, "btn", "btn-secondary-gradien", "btn-pill", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success-gradien btn-pill btn-air-success", 1, "btn", "btn-success-gradien", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info-gradien btn-pill btn-air-info", 1, "btn", "btn-info-gradien", "btn-pill", "btn-air-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning-gradien btn-pill btn-air-warning", 1, "btn", "btn-warning-gradien", "btn-pill", "btn-air-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger-gradien btn-pill btn-air-danger", 1, "btn", "btn-danger-gradien", "btn-pill", "btn-air-danger"]],
        template: function RaisedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Default buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " class for flat button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, " class for large button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, " class for small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](87, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "Extra Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, " class for extra small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](109, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, "Active Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, ".active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, " for active state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](131, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](145, "Disabled buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](149, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](150, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](160, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](162, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](164, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](166, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "Custom state buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, ".btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](177, " class used with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "<button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](180, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](182, "<a>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](183, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](185, "<input>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](186, " elements.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](189, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](190, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](191, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](197, "outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](199, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](201, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](202, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](204, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](205, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](207, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, " class for button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](211, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](213, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](215, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](217, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](219, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](221, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "button", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](223, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](227, "bold Border outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](229, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](232, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](235, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](236, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](237, ".btn-outline-*-2x");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, " class for button with bold outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](241, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "button", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](243, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](245, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "button", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](247, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "button", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "button", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](251, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](253, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](257, "outline Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](260, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](261, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](263, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](264, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](266, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](267, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](268, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](269, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](270, " class for large button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "button", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](273, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](274, "button", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](275, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](276, "button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](277, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](278, "button", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](279, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](280, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](281, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](282, "button", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](283, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](284, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](285, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](286, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](289, "outline small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](292, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](293, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](294, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](295, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](296, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](298, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](299, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](301, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](302, " class for small button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](304, "button", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](305, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](306, "button", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](307, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "button", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](309, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](310, "button", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](311, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "button", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](313, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "button", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](315, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](316, "button", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](317, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](320, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](321, "Outline extra small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](322, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](323, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](324, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](325, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](327, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](328, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](330, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](331, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](332, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](333, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](334, " class for extra small button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](336, "button", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](337, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](338, "button", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](339, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](340, "button", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](341, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "button", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](343, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "button", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](345, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "button", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](347, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "button", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](349, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](350, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](351, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](353, "Disabled outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](354, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](355, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](357, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](358, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](360, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](361, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](362, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](363, "button", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](364, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "button", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](366, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](367, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](368, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](369, "button", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](370, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](371, "button", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](372, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](373, "button", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](374, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](375, "button", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](376, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](377, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](378, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](379, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](380, "Gradien buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](381, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](382, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](383, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](384, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](385, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](386, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](387, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](388, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](389, ".btn-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](390, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](391, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](392, ".btn-*-gradien");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](393, " class for gradien button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](394, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](395, "button", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](396, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](397, "button", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](398, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](399, "button", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](400, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](401, "button", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](402, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](403, "button", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](404, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](405, "button", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](406, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Raised")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Raised");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbTooltip],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWlzZWQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_buttons_buttons_module_ts-es5.js.map