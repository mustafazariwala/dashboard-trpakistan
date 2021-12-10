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

      _ButtonGroupComponent.ɵfac = function ButtonGroupComponent_Factory(t) {
        return new (t || _ButtonGroupComponent)();
      };

      _ButtonGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ButtonGroupComponent,
        selectors: [["app-button-group"]],
        decls: 1011,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-body", "btn-group-showcase"], [1, "col-xl-4", "col-md-6", "col-sm-12", "xl-50"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-light"], [1, "col-xl-4", "col-md-6", "col-sm-12", "button-group-mb-sm", "xl-50"], ["type", "button", 1, "btn", "btn-dark"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-pill"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-square"], [1, "col-xl-6", "col-sm-12"], ["type", "button", 1, "btn", "btn-primary", "btn-lg"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg"], ["type", "button", 1, "btn", "btn-success", "btn-lg"], ["type", "button", 1, "btn", "btn-info", "btn-lg"], ["type", "button", 1, "btn", "btn-warning", "btn-lg"], ["type", "button", 1, "btn", "btn-danger", "btn-lg"], ["type", "button", 1, "btn", "btn-light", "btn-lg"], [1, "col-xl-6", "col-sm-12", "button-group-mb-sm"], ["type", "button", 1, "btn", "btn-dark", "btn-lg"], ["type", "button", 1, "btn", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-outline-success"], ["type", "button", 1, "btn", "btn-outline-info"], ["type", "button", 1, "btn", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-outline-light", "txt-dark"], ["type", "button", 1, "btn", "btn-outline-dark"], [1, "btn-radio"], ["data-toggle", "buttons", 1, "btn-group"], [1, "btn", "btn-primary"], [1, "radio", "radio-primary"], ["id", "radio7", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio7"], [1, "btn", "btn-primary", "active"], ["id", "radio8", "type", "radio", "name", "radio1", "value", "option1", "checked", ""], ["for", "radio8"], [1, "btn", "btn-secondary"], [1, "radio", "radio-secondary"], ["id", "radio11", "type", "radio", "name", "radio2", "value", "option1"], ["for", "radio11"], [1, "btn", "btn-secondary", "active"], ["id", "radio12", "type", "radio", "name", "radio2", "value", "option1", "checked", ""], ["for", "radio12"], [1, "btn", "btn-success"], [1, "radio", "radio-success"], ["id", "radio13", "type", "radio", "name", "radio3", "value", "option1"], ["for", "radio13"], [1, "btn", "btn-success", "active"], ["id", "radio14", "type", "radio", "name", "radio3", "value", "option1", "checked", ""], ["for", "radio14"], [1, "btn", "btn-info"], [1, "radio", "radio-info"], ["id", "radio15", "type", "radio", "name", "radio4", "value", "option1"], ["for", "radio15"], [1, "btn", "btn-info", "active"], ["id", "radio16", "type", "radio", "name", "radio4", "value", "option1", "checked", ""], ["for", "radio16"], [1, "btn", "btn-warning"], [1, "radio", "radio-warning"], ["id", "radio17", "type", "radio", "name", "radio5", "value", "option1"], ["for", "radio17"], [1, "btn", "btn-warning", "active"], ["id", "radio18", "type", "radio", "name", "radio5", "value", "option1", "checked", ""], ["for", "radio18"], [1, "btn", "btn-danger"], [1, "radio", "radio-danger"], ["id", "radio20", "type", "radio", "name", "radio6", "value", "option1"], ["for", "radio20"], [1, "btn", "btn-danger", "active"], ["id", "radio22", "type", "radio", "name", "radio6", "value", "option1", "checked", ""], ["for", "radio22"], [1, "btn", "btn-light", "txt-dark"], [1, "radio", "radio-light"], ["id", "radio23", "type", "radio", "name", "radio7", "value", "option1"], ["for", "radio23"], [1, "btn", "btn-light", "active", "txt-dark"], ["id", "radio24", "type", "radio", "name", "radio7", "value", "option1", "checked", ""], ["for", "radio24"], ["data-toggle", "buttons", 1, "btn-group", "btn-option"], [1, "checkbox", "checkbox-primary"], ["id", "checkbox-primary-1", "type", "checkbox"], ["for", "checkbox-primary-1"], ["id", "checkbox-primary-2", "type", "checkbox"], ["for", "checkbox-primary-2"], [1, "checkbox", "checkbox-secondary"], ["id", "checkbox-primary-3", "type", "checkbox"], ["for", "checkbox-primary-3"], ["id", "checkbox-primary-4", "type", "checkbox"], ["for", "checkbox-primary-4"], [1, "checkbox", "checkbox-success"], ["id", "checkbox-primary-5", "type", "checkbox"], ["for", "checkbox-primary-5"], ["id", "checkbox-primary-6", "type", "checkbox"], ["for", "checkbox-primary-6"], [1, "checkbox", "checkbox-info"], ["id", "checkbox-primary-7", "type", "checkbox"], ["for", "checkbox-primary-7"], ["id", "checkbox-primary-8", "type", "checkbox"], ["for", "checkbox-primary-8"], [1, "checkbox", "checkbox-warning"], ["id", "checkbox-warning-9", "type", "checkbox"], ["for", "checkbox-warning-9"], ["id", "checkbox-warning-10", "type", "checkbox"], ["for", "checkbox-warning-10"], [1, "checkbox", "checkbox-danger"], ["id", "checkbox-danger-11", "type", "checkbox"], ["for", "checkbox-danger-11"], ["id", "checkbox-danger-12", "type", "checkbox"], ["for", "checkbox-danger-12"], [1, "checkbox", "checkbox-light"], ["id", "checkbox-light-13", "type", "checkbox"], ["for", "checkbox-light-13"], ["id", "checkbox-light-14", "type", "checkbox"], ["for", "checkbox-light-14"], [1, "col-xl-6"], [1, "card", "height-equal"], [1, "card-body", "btn-group-wrapper"], [1, "m-b-30"], ["role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], [1, "fa", "fa-bold"], [1, "fa", "fa", "fa-italic"], ["ngbDropdown", "", "role", "group", 1, "btn-group"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-light", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], [1, "btn-group"], [1, "fa", "fa-file-image-o"], [1, "fa", "fa-paperclip"], [1, "btn", "btn-primary", "btn-lg"], [1, "btn", "btn-secondary", "btn-lg"], [1, "btn", "btn-success", "btn-lg"], [1, "btn", "btn-info", "btn-lg"], ["role", "group", "aria-label", "Vertical button group", 1, "btn-group-vertical"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-success", "dropdown-toggle"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-danger", "dropdown-toggle"]],
        template: function ButtonGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Basic button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Edges button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Flat button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "large Button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "large Edges Button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](329, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](357, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Outline Custom button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](418, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](426, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](432, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](438, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](441, "Outline custom button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](451, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](455, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](457, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](469, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](473, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](478, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](479, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](481, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](483, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](487, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](489, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](491, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](492, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](495, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](496, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](497, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](499, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](500, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](502, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](503, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](504, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](505, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](509, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](512, "Outline button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](514, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](515, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](517, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](520, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](522, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](524, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](526, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](527, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](528, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](529, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](530, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](534, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](536, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](537, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](538, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](540, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](542, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](543, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](544, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](545, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](546, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](548, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](550, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](551, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](552, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](554, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](556, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](558, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](559, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](560, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](561, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](562, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](563, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](565, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](566, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](567, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](568, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](569, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](570, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](572, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](573, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](574, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](575, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](576, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](578, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](579, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](580, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](581, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](583, "Outline Edges button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](584, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](585, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](586, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](588, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](589, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](590, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](591, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](592, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](593, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](594, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](595, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](596, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](597, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](598, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](599, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](600, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](601, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](602, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](603, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](604, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](605, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](606, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](607, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](608, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](609, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](610, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](611, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](612, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](613, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](614, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](615, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](616, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](617, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](618, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](619, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](620, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](621, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](622, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](623, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](624, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](625, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](626, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](627, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](628, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](629, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](630, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](631, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](632, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](633, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](634, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](635, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](636, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](637, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](638, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](639, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](640, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](641, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](642, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](643, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](644, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](645, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](646, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](647, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](648, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](649, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](650, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](651, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](652, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](653, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](654, "Outline flat button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](655, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](656, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](657, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](658, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](659, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](660, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](661, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](662, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](663, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](664, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](665, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](666, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](667, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](668, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](669, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](670, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](671, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](672, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](673, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](674, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](675, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](676, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](677, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](678, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](679, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](680, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](681, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](682, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](683, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](684, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](685, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](686, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](687, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](688, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](689, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](690, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](691, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](692, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](693, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](694, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](695, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](696, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](697, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](698, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](699, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](700, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](701, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](702, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](703, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](704, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](705, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](706, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](707, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](708, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](709, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](710, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](711, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](712, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](713, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](714, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](715, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](716, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](717, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](718, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](719, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](720, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](721, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](722, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](723, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](724, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](725, "Radio button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](726, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](727, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](728, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](729, ".active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](730, " for active state and");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](731, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](732, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](733, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](734, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](735, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](736, " attribute");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](737, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](738, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](739, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](740, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](741, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](742, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](743, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](744, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](745, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](746, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](747, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](748, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](749, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](750, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](751, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](752, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](753, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](754, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](755, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](756, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](757, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](758, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](759, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](760, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](761, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](762, "input", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](763, "label", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](764, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](765, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](766, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](767, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](768, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](769, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](770, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](771, "label", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](772, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](773, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](774, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](775, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](776, "label", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](777, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](778, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](779, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](780, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](781, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](782, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](783, "input", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](784, "label", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](785, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](786, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](787, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](788, "input", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](789, "label", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](790, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](791, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](792, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](793, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](794, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](795, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](796, "input", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](797, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](798, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](799, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](800, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](801, "input", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](802, "label", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](803, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](804, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](805, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](806, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](807, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](808, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](809, "input", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](810, "label", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](811, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](812, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](813, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](814, "input", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](815, "label", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](816, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](817, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](818, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](819, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](820, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](821, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](822, "input", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](823, "label", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](824, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](825, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](826, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](827, "input", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](828, "label", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](829, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](830, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](831, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](832, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](833, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](834, "Check Box button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](835, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](836, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](837, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](838, ".active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](839, " for active state and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](840, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](841, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](842, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](843, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](844, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](845, " attribute");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](846, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](847, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](848, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](849, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](850, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](851, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](852, "input", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](853, "label", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](854, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](855, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](856, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](857, "input", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](858, "label", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](859, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](860, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](861, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](862, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](863, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](864, "input", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](865, "label", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](866, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](867, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](868, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](869, "input", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](870, "label", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](871, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](872, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](873, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](874, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](875, "div", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](876, "input", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](877, "label", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](878, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](879, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](880, "div", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](881, "input", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](882, "label", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](883, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](884, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](885, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](886, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](887, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](888, "input", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](889, "label", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](890, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](891, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](892, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](893, "input", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](894, "label", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](895, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](896, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](897, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](898, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](899, "div", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](900, "input", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](901, "label", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](902, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](903, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](904, "div", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](905, "input", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](906, "label", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](907, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](908, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](909, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](910, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](911, "div", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](912, "input", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](913, "label", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](914, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](915, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](916, "div", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](917, "input", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](918, "label", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](919, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](920, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](921, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](922, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](923, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](924, "input", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](925, "label", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](926, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](927, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](928, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](929, "input", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](930, "label", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](931, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](932, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](933, "div", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](934, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](935, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](936, "Nesting");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](937, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](938, "Make nesting buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](939, "div", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](940, "div", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](941, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](942, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](943, "i", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](944, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](945, "i", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](946, "div", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](947, "button", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](948, "Dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](949, "div", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](950, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](951, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](952, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](953, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](954, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](955, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](956, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](957, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](958, "div", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](959, "div", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](960, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](961, "i", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](962, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](963, "i", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](964, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](965, "i", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](966, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](967, "i", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](968, "div", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](969, "div", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](970, "button", 139);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](971, "i", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](972, "button", 140);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](973, "i", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](974, "button", 141);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](975, "i", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](976, "button", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](977, "i", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](978, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](979, "div", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](980, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](981, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](982, "Vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](983, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](984, "Make vertical buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](985, "div", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](986, "div", 143);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](987, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](988, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](989, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](990, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](991, "div", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](992, "button", 144);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](993, "Dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](994, "div", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](995, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](996, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](997, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](998, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](999, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1000, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1001, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1002, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1003, "div", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1004, "button", 145);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1005, "Dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1006, "div", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1007, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1008, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1009, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1010, "Dropdown link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Button Group")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "Button Group");
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

      _ButtonsRoutingModule.ɵfac = function ButtonsRoutingModule_Factory(t) {
        return new (t || _ButtonsRoutingModule)();
      };

      _ButtonsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _ButtonsRoutingModule
      });
      _ButtonsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_ButtonsRoutingModule, {
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

      _ButtonsModule.ɵfac = function ButtonsModule_Factory(t) {
        return new (t || _ButtonsModule)();
      };

      _ButtonsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _ButtonsModule
      });
      _ButtonsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _buttons_routing_module__WEBPACK_IMPORTED_MODULE_1__.ButtonsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_ButtonsModule, {
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

      _DefaultComponent.ɵfac = function DefaultComponent_Factory(t) {
        return new (t || _DefaultComponent)();
      };

      _DefaultComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DefaultComponent,
        selectors: [["app-default"]],
        decls: 351,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["id", "default", 1, "card"], [1, "card-header"], [1, "card-body", "btn-showcase"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary", 1, "btn", "btn-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary", 1, "btn", "btn-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success", 1, "btn", "btn-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning", 1, "btn", "btn-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger", 1, "btn", "btn-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light", 1, "btn", "btn-light"], ["id", "large-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary", 1, "btn", "btn-primary", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary", 1, "btn", "btn-secondary", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success", 1, "btn", "btn-success", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-info", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning", 1, "btn", "btn-warning", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger", 1, "btn", "btn-danger", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light", 1, "btn", "btn-light", "btn-lg"], ["id", "small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary", 1, "btn", "btn-primary", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary", 1, "btn", "btn-secondary", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success", 1, "btn", "btn-success", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-info", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning", 1, "btn", "btn-warning", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger", 1, "btn", "btn-danger", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light", 1, "btn", "btn-light", "btn-sm"], ["id", "ex-small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary", 1, "btn", "btn-primary", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary", 1, "btn", "btn-secondary", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success", 1, "btn", "btn-success", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-info", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning", 1, "btn", "btn-warning", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger", 1, "btn", "btn-danger", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light", 1, "btn", "btn-light", "btn-xs"], ["id", "active-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary", 1, "btn", "btn-primary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary", 1, "btn", "btn-secondary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success", 1, "btn", "btn-success", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-info", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning", 1, "btn", "btn-warning", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger", 1, "btn", "btn-danger", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light", 1, "btn", "btn-light", "active", "txt-dark"], ["id", "disabled-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary disabled", 1, "btn", "btn-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary disabled", 1, "btn", "btn-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success disabled", 1, "btn", "btn-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info disabled", 1, "btn", "btn-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning disabled", 1, "btn", "btn-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger disabled", 1, "btn", "btn-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light disabled", 1, "btn", "btn-light", "disabled"], ["id", "custom-state-button", 1, "card"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "btn btn-primary", "placement", "top", "ngbTooltip", "btn btn-primary", "role", "button", 1, "btn", "btn-primary"], ["type", "button", "value", "Input", "data-toggle", "tooltip", "title", "btn btn-secondary", "placement", "top", "ngbTooltip", "btn btn-secondary", 1, "btn", "btn-secondary"], ["type", "submit", "value", "Submit", "data-toggle", "tooltip", "title", "btn btn-success", "placement", "top", "ngbTooltip", "btn btn-success", 1, "btn", "btn-success"], ["type", "submit", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-info"], ["id", "outline-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary", "role", "button", 1, "btn", "btn-outline-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary", 1, "btn", "btn-outline-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success", 1, "btn", "btn-outline-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info", 1, "btn", "btn-outline-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning", 1, "btn", "btn-outline-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger", 1, "btn", "btn-outline-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light", 1, "btn", "btn-outline-light", "txt-dark"], ["id", "outline-bold-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary-2x", 1, "btn", "btn-outline-primary-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary-2x", 1, "btn", "btn-outline-secondary-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success-2x", 1, "btn", "btn-outline-success-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info-2x", 1, "btn", "btn-outline-info-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning-2x", 1, "btn", "btn-outline-warning-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger-2x", 1, "btn", "btn-outline-danger-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light-2x", 1, "btn", "btn-outline-light-2x", "txt-dark"], ["id", "outline-large-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-lg", 1, "btn", "btn-outline-primary", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-lg", 1, "btn", "btn-outline-secondary", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-lg", 1, "btn", "btn-outline-success", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-lg", 1, "btn", "btn-outline-info", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-lg", 1, "btn", "btn-outline-warning", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-lg", 1, "btn", "btn-outline-danger", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-lg", 1, "btn", "btn-outline-light", "btn-lg", "txt-dark"], ["id", "outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-sm", 1, "btn", "btn-outline-primary", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-sm", 1, "btn", "btn-outline-secondary", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-sm", 1, "btn", "btn-outline-success", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-sm", 1, "btn", "btn-outline-info", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-sm", 1, "btn", "btn-outline-warning", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-sm", 1, "btn", "btn-outline-danger", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-sm", 1, "btn", "btn-outline-light", "btn-sm", "txt-dark"], ["id", "ex-outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-xs", 1, "btn", "btn-outline-primary", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-xs", 1, "btn", "btn-outline-secondary", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-xs", 1, "btn", "btn-outline-success", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-xs", 1, "btn", "btn-outline-info", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-xs", 1, "btn", "btn-outline-warning", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-xs", 1, "btn", "btn-outline-danger", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-xs", 1, "btn", "btn-outline-light", "btn-xs", "txt-dark"], [1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary disabled", 1, "btn", "btn-outline-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary disabled", 1, "btn", "btn-outline-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success disabled", 1, "btn", "btn-outline-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info disabled", 1, "btn", "btn-outline-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning disabled", 1, "btn", "btn-outline-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger disabled", 1, "btn", "btn-outline-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light disabled", 1, "btn", "btn-outline-light", "disabled"], ["id", "gradiant", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary-gradien", 1, "btn", "btn-primary-gradien"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary-gradien", 1, "btn", "btn-secondary-gradien"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success-gradien", 1, "btn", "btn-success-gradien"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info-gradien", 1, "btn", "btn-info-gradien"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning-gradien", 1, "btn", "btn-warning-gradien"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger-gradien", 1, "btn", "btn-danger-gradien"]],
        template: function DefaultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Default buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Bootstrap state buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " class for large size buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " class for small size buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Extra Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " class for extra small size buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Active Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, ".active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, " class for active state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Disabled buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Custom state buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, ".btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, " class used with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "<button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "<a>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "<input>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, " elements.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " class for border button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "button", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "bold Border outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, ".btn-outline-*-2x");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, " class for bold outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "button", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "button", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "button", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "button", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "outline Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, " class for outline and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, " class for large button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "button", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "button", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "button", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "button", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "outline small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, " class for outline and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, " class for small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "button", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "button", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "button", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "button", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "button", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "button", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "button", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Outline extra small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, " class for outline and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, " class for extra small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "button", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "button", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "button", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "button", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "button", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "button", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "button", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "Disabled outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, " attribute for disabled state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "button", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "button", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "button", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "button", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "button", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "button", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Gradien buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, ".btn-*-gradien");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, " class for gradien button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "button", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "button", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "button", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "button", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](346, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "button", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "button", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Default")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "Default");
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

      _EdgeComponent.ɵfac = function EdgeComponent_Factory(t) {
        return new (t || _EdgeComponent)();
      };

      _EdgeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _EdgeComponent,
        selectors: [["app-edge"]],
        decls: 381,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["id", "default", 1, "card"], [1, "card-header"], [1, "card-body", "btn-showcase"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-primary", 1, "btn", "btn-pill", "btn-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-secondary", 1, "btn", "btn-pill", "btn-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-success", 1, "btn", "btn-pill", "btn-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-info", 1, "btn", "btn-pill", "btn-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-warning", 1, "btn", "btn-pill", "btn-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-danger", 1, "btn", "btn-pill", "btn-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-light", 1, "btn", "btn-pill", "btn-light"], ["id", "large-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-pill", 1, "btn", "btn-primary", "btn-lg", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-pill", 1, "btn", "btn-secondary", "btn-lg", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-pill", 1, "btn", "btn-success", "btn-lg", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-pill", 1, "btn", "btn-info", "btn-lg", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-pill", 1, "btn", "btn-warning", "btn-lg", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-pill", 1, "btn", "btn-danger", "btn-lg", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-pill", 1, "btn", "btn-light", "btn-lg", "btn-pill"], ["id", "small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-pill", 1, "btn", "btn-primary", "btn-sm", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-pill", 1, "btn", "btn-secondary", "btn-sm", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-pill", 1, "btn", "btn-success", "btn-sm", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-pill", 1, "btn", "btn-info", "btn-sm", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-pill", 1, "btn", "btn-warning", "btn-sm", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-pill", 1, "btn", "btn-danger", "btn-sm", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-pill", 1, "btn", "btn-light", "btn-sm", "btn-pill"], ["id", "ex-small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-pill", 1, "btn", "btn-primary", "btn-xs", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-pill", 1, "btn", "btn-secondary", "btn-xs", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-pill", 1, "btn", "btn-success", "btn-xs", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-pill", 1, "btn", "btn-info", "btn-xs", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-pill", 1, "btn", "btn-warning", "btn-xs", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-pill", 1, "btn", "btn-danger", "btn-xs", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-pill", 1, "btn", "btn-light", "btn-xs", "btn-pill"], ["id", "active-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-primary", 1, "btn", "btn-pill", "btn-primary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-secondary", 1, "btn", "btn-pill", "btn-secondary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-success", 1, "btn", "btn-pill", "btn-success", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-info", 1, "btn", "btn-pill", "btn-info", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-warning", 1, "btn", "btn-pill", "btn-warning", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-danger", 1, "btn", "btn-pill", "btn-danger", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-light", 1, "btn", "btn-pill", "btn-light", "active", "txt-dark"], ["id", "disabled-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-primary disabled", 1, "btn", "btn-pill", "btn-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-secondary disabled", 1, "btn", "btn-pill", "btn-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-success disabled", 1, "btn", "btn-pill", "btn-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-info disabled", 1, "btn", "btn-pill", "btn-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-warning disabled", 1, "btn", "btn-pill", "btn-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-danger disabled", 1, "btn", "btn-pill", "btn-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-light disabled", 1, "btn", "btn-pill", "btn-light", "disabled"], ["id", "custom-state-button", 1, "card"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "btn btn-primary", "placement", "top", "ngbTooltip", "btn btn-pill btn-primary", "role", "button", 1, "btn", "btn-pill", "btn-primary"], ["type", "button", "value", "Input", "data-toggle", "tooltip", "title", "btn btn-pill btn-secondary", "placement", "top", "ngbTooltip", "btn btn-pill btn-secondary", 1, "btn", "btn-pill", "btn-secondary"], ["type", "submit", "value", "Submit", "data-toggle", "tooltip", "title", "btn btn-pill btn-success", "placement", "top", "ngbTooltip", "btn btn-pill btn-success", 1, "btn", "btn-pill", "btn-success"], ["type", "submit", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-pill", "btn-info"], ["id", "outline-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-primary", "role", "button", 1, "btn", "btn-pill", "btn-outline-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-secondary", 1, "btn", "btn-pill", "btn-outline-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-success", 1, "btn", "btn-pill", "btn-outline-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-info", 1, "btn", "btn-pill", "btn-outline-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-warning", 1, "btn", "btn-pill", "btn-outline-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-danger", 1, "btn", "btn-pill", "btn-outline-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-light", 1, "btn", "btn-pill", "btn-outline-light", "txt-dark"], ["id", "outline-bold-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-primary-2x", 1, "btn", "btn-pill", "btn-outline-primary-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-secondary-2x", 1, "btn", "btn-pill", "btn-outline-secondary-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-success-2x", 1, "btn", "btn-pill", "btn-outline-success-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-info-2x", 1, "btn", "btn-pill", "btn-outline-info-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-warning-2x", 1, "btn", "btn-pill", "btn-outline-warning-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-danger-2x", 1, "btn", "btn-pill", "btn-outline-danger-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-light-2x", 1, "btn", "btn-pill", "btn-outline-light-2x", "txt-dark"], ["id", "outline-large-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-pill btn-lg", 1, "btn", "btn-outline-primary", "btn-pill", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-pill btn-lg", 1, "btn", "btn-outline-secondary", "btn-pill", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-pill btn-lg", 1, "btn", "btn-outline-success", "btn-pill", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-pill btn-lg", 1, "btn", "btn-outline-info", "btn-pill", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-pill btn-lg", 1, "btn", "btn-outline-warning", "btn-pill", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-pill btn-lg", 1, "btn", "btn-outline-danger", "btn-pill", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-pill btn-lg", 1, "btn", "btn-outline-light", "btn-pill", "btn-lg", "txt-dark"], ["id", "outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-pill btn-sm", 1, "btn", "btn-outline-primary", "btn-pill", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-pill btn-sm", 1, "btn", "btn-outline-secondary", "btn-pill", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-pill btn-sm", 1, "btn", "btn-outline-success", "btn-pill", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-pill btn-sm", 1, "btn", "btn-outline-info", "btn-pill", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-pill btn-sm", 1, "btn", "btn-outline-warning", "btn-pill", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-pill btn-sm", 1, "btn", "btn-outline-danger", "btn-pill", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-pill btn-sm", 1, "btn", "btn-outline-light", "btn-pill", "btn-sm", "txt-dark"], ["id", "ex-outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-pill btn-xs", 1, "btn", "btn-outline-primary", "btn-pill", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-pill btn-xs", 1, "btn", "btn-outline-secondary", "btn-pill", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-pill btn-xs", 1, "btn", "btn-outline-success", "btn-pill", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-pill btn-xs", 1, "btn", "btn-outline-info", "btn-pill", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-pill btn-xs", 1, "btn", "btn-outline-warning", "btn-pill", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-pill btn-xs", 1, "btn", "btn-outline-danger", "btn-pill", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-pill btn-xs", 1, "btn", "btn-outline-light", "btn-pill", "btn-xs", "txt-dark"], [1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-primary disabled", 1, "btn", "btn-pill", "btn-outline-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-secondary disabled", 1, "btn", "btn-pill", "btn-outline-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-success disabled", 1, "btn", "btn-pill", "btn-outline-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-info disabled", 1, "btn", "btn-pill", "btn-outline-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-warning disabled", 1, "btn", "btn-pill", "btn-outline-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-danger disabled", 1, "btn", "btn-pill", "btn-outline-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-light disabled", 1, "btn", "btn-pill", "btn-outline-light", "disabled"], ["id", "gradiant", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary-gradien btn-pill", 1, "btn", "btn-primary-gradien", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary-gradien btn-pill", 1, "btn", "btn-secondary-gradien", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success-gradien btn-pill", 1, "btn", "btn-success-gradien", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info-gradien btn-pill", 1, "btn", "btn-info-gradien", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning-gradien btn-pill", 1, "btn", "btn-warning-gradien", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger-gradien btn-pill", 1, "btn", "btn-danger-gradien", "btn-pill"]],
        template: function EdgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Default buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " class for flat button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " class for large button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " class for small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Extra Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, " class for extra small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Active Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, ".active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, " for active state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Disabled buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Custom state buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, ".btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " class used with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "<button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "<a>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "<input>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, " elements.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, " class for button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "button", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "bold Border outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, ".btn-outline-*-2x");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, " class for button with bold outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "button", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "button", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "button", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "button", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "outline Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, " class for large button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "button", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "button", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "button", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "button", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "outline small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, " class for small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "button", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "button", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "button", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "button", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "button", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "button", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "button", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, "Outline extra small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, " class for extra small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "button", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "button", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "button", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "button", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "button", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "button", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "button", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Disabled outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "button", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "button", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "button", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "button", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "button", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "button", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](359, "Gradien buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, ".btn-*-gradien");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, " class for gradien button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "button", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "button", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "button", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "button", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "button", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "button", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Edge")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "Edge");
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

      _FlatComponent.ɵfac = function FlatComponent_Factory(t) {
        return new (t || _FlatComponent)();
      };

      _FlatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FlatComponent,
        selectors: [["app-flat"]],
        decls: 381,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["id", "default", 1, "card"], [1, "card-header"], [1, "card-body", "btn-showcase"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-primary", 1, "btn", "btn-square", "btn-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-secondary", 1, "btn", "btn-square", "btn-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-success", 1, "btn", "btn-square", "btn-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-info", 1, "btn", "btn-square", "btn-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-warning", 1, "btn", "btn-square", "btn-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-danger", 1, "btn", "btn-square", "btn-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-light", 1, "btn", "btn-square", "btn-light"], ["id", "large-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-square", 1, "btn", "btn-primary", "btn-lg", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-square", 1, "btn", "btn-secondary", "btn-lg", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-square", 1, "btn", "btn-success", "btn-lg", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-square", 1, "btn", "btn-info", "btn-lg", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-square", 1, "btn", "btn-warning", "btn-lg", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-square", 1, "btn", "btn-danger", "btn-lg", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-square", 1, "btn", "btn-light", "btn-lg", "btn-square"], ["id", "small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-square", 1, "btn", "btn-primary", "btn-sm", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-square", 1, "btn", "btn-secondary", "btn-sm", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-square", 1, "btn", "btn-success", "btn-sm", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-square", 1, "btn", "btn-info", "btn-sm", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-square", 1, "btn", "btn-warning", "btn-sm", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-square", 1, "btn", "btn-danger", "btn-sm", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-square", 1, "btn", "btn-light", "btn-sm", "btn-square"], ["id", "ex-small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-square", 1, "btn", "btn-primary", "btn-xs", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-square", 1, "btn", "btn-secondary", "btn-xs", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-square", 1, "btn", "btn-success", "btn-xs", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-square", 1, "btn", "btn-info", "btn-xs", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-square", 1, "btn", "btn-warning", "btn-xs", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-square", 1, "btn", "btn-danger", "btn-xs", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-square", 1, "btn", "btn-light", "btn-xs", "btn-square"], ["id", "active-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-primary", 1, "btn", "btn-square", "btn-primary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-secondary", 1, "btn", "btn-square", "btn-secondary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-success", 1, "btn", "btn-square", "btn-success", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-info", 1, "btn", "btn-square", "btn-info", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-warning", 1, "btn", "btn-square", "btn-warning", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-danger", 1, "btn", "btn-square", "btn-danger", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-light", 1, "btn", "btn-square", "btn-light", "active", "txt-dark"], ["id", "disabled-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-primary disabled", 1, "btn", "btn-square", "btn-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-secondary disabled", 1, "btn", "btn-square", "btn-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-success disabled", 1, "btn", "btn-square", "btn-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-info disabled", 1, "btn", "btn-square", "btn-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-warning disabled", 1, "btn", "btn-square", "btn-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-danger disabled", 1, "btn", "btn-square", "btn-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-light disabled", 1, "btn", "btn-square", "btn-light", "disabled"], ["id", "custom-state-button", 1, "card"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "btn btn-primary", "placement", "top", "ngbTooltip", "btn btn-square btn-primary", "role", "button", 1, "btn", "btn-square", "btn-primary"], ["type", "button", "value", "Input", "data-toggle", "tooltip", "title", "btn btn-square btn-secondary", "placement", "top", "ngbTooltip", "btn btn-square btn-secondary", 1, "btn", "btn-square", "btn-secondary"], ["type", "submit", "value", "Submit", "data-toggle", "tooltip", "title", "btn btn-square btn-success", "placement", "top", "ngbTooltip", "btn btn-square btn-success", 1, "btn", "btn-square", "btn-success"], ["type", "submit", "placement", "top", "ngbTooltip", "btn btn-info", 1, "btn", "btn-square", "btn-info"], ["id", "outline-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-primary", "role", "button", 1, "btn", "btn-square", "btn-outline-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-secondary", 1, "btn", "btn-square", "btn-outline-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-success", 1, "btn", "btn-square", "btn-outline-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-info", 1, "btn", "btn-square", "btn-outline-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-warning", 1, "btn", "btn-square", "btn-outline-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-danger", 1, "btn", "btn-square", "btn-outline-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-light", 1, "btn", "btn-square", "btn-outline-light", "txt-dark"], ["id", "outline-bold-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-primary-2x", 1, "btn", "btn-square", "btn-outline-primary-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-secondary-2x", 1, "btn", "btn-square", "btn-outline-secondary-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-success-2x", 1, "btn", "btn-square", "btn-outline-success-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-info-2x", 1, "btn", "btn-square", "btn-outline-info-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-warning-2x", 1, "btn", "btn-square", "btn-outline-warning-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-danger-2x", 1, "btn", "btn-square", "btn-outline-danger-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-light-2x", 1, "btn", "btn-square", "btn-outline-light-2x", "txt-dark"], ["id", "outline-large-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-square btn-lg", 1, "btn", "btn-outline-primary", "btn-square", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-square btn-lg", 1, "btn", "btn-outline-secondary", "btn-square", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-square btn-lg", 1, "btn", "btn-outline-success", "btn-square", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-square btn-lg", 1, "btn", "btn-outline-info", "btn-square", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-square btn-lg", 1, "btn", "btn-outline-warning", "btn-square", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-square btn-lg", 1, "btn", "btn-outline-danger", "btn-square", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-square btn-lg", 1, "btn", "btn-outline-light", "btn-square", "btn-lg", "txt-dark"], ["id", "outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-square btn-sm", 1, "btn", "btn-outline-primary", "btn-square", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-square btn-sm", 1, "btn", "btn-outline-secondary", "btn-square", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-square btn-sm", 1, "btn", "btn-outline-success", "btn-square", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-square btn-sm", 1, "btn", "btn-outline-info", "btn-square", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-square btn-sm", 1, "btn", "btn-outline-warning", "btn-square", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-square btn-sm", 1, "btn", "btn-outline-danger", "btn-square", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-square btn-sm", 1, "btn", "btn-outline-light", "btn-square", "btn-sm", "txt-dark"], ["id", "ex-outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-square btn-xs", 1, "btn", "btn-outline-primary", "btn-square", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-square btn-xs", 1, "btn", "btn-outline-secondary", "btn-square", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-square btn-xs", 1, "btn", "btn-outline-success", "btn-square", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-square btn-xs", 1, "btn", "btn-outline-info", "btn-square", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-square btn-xs", 1, "btn", "btn-outline-warning", "btn-square", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-square btn-xs", 1, "btn", "btn-outline-danger", "btn-square", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-square btn-xs", 1, "btn", "btn-outline-light", "btn-square", "btn-xs", "txt-dark"], [1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-primary disabled", 1, "btn", "btn-square", "btn-outline-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-secondary disabled", 1, "btn", "btn-square", "btn-outline-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-success disabled", 1, "btn", "btn-square", "btn-outline-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-info disabled", 1, "btn", "btn-square", "btn-outline-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-warning disabled", 1, "btn", "btn-square", "btn-outline-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-danger disabled", 1, "btn", "btn-square", "btn-outline-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-square btn-outline-light disabled", 1, "btn", "btn-square", "btn-outline-light", "disabled"], ["id", "gradiant", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary-gradien btn-square", 1, "btn", "btn-primary-gradien", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary-gradien btn-square", 1, "btn", "btn-secondary-gradien", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success-gradien btn-square", 1, "btn", "btn-success-gradien", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info-gradien btn-square", 1, "btn", "btn-info-gradien", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning-gradien btn-square", 1, "btn", "btn-warning-gradien", "btn-square"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger-gradien btn-square", 1, "btn", "btn-danger-gradien", "btn-square"]],
        template: function FlatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Default buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " class for flat button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " class for large button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " class for small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Extra Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, " class for extra small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Active Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, ".active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, " for active state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Disabled buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Custom state buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, ".btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " class used with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "<button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "<a>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "<input>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, " elements.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, " class for button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "button", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "bold Border outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, ".btn-outline-*-2x");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, " class for button with bold outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "button", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "button", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "button", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "button", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "outline Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, " class for large button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "button", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "button", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "button", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "button", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "outline small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, " class for small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "button", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "button", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "button", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "button", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "button", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "button", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "button", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, "Outline extra small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, " class for extra small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "button", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "button", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "button", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "button", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "button", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "button", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "button", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Disabled outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "button", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "button", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "button", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "button", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "button", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "button", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](359, "Gradien buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, ".btn-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, ".btn-*-gradien");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, " class for gradien button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "button", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "button", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "button", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "button", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "button", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "button", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Flat")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "Flat");
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

      _RaisedComponent.ɵfac = function RaisedComponent_Factory(t) {
        return new (t || _RaisedComponent)();
      };

      _RaisedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _RaisedComponent,
        selectors: [["app-raised"]],
        decls: 407,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["id", "default", 1, "card"], [1, "card-header"], [1, "card-body", "btn-showcase"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-primary btn-primary", 1, "btn", "btn-pill", "btn-air-primary", "btn-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-secondary btn-air-secondary", 1, "btn", "btn-pill", "btn-secondary", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-success btn-air-success", 1, "btn", "btn-pill", "btn-success", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-info  btn-air-info", 1, "btn", "btn-pill", "btn-info", "btn-air-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-warning btn-air-warning ", 1, "btn", "btn-pill", "btn-warning", "btn-air-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-danger btn-air-danger", 1, "btn", "btn-pill", "btn-danger", "btn-air-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-light btn-air-light", 1, "btn", "btn-pill", "btn-light", "btn-air-light"], ["id", "large-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-air-primary btn-pill", 1, "btn", "btn-primary", "btn-lg", "btn-pill", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-pill btn-air-secondary", 1, "btn", "btn-secondary", "btn-lg", "btn-pill", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-pill btn-air-success", 1, "btn", "btn-success", "btn-lg", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-pill  btn-air-warning", 1, "btn", "btn-info", "btn-lg", "btn-pill", "btn-air-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-pill  btn-air-info", 1, "btn", "btn-warning", "btn-lg", "btn-pill", "btn-air-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-pill  btn-air-danger", 1, "btn", "btn-danger", "btn-lg", "btn-pill", "btn-air-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-pill  btn-air-light", 1, "btn", "btn-light", "btn-lg", "btn-pill", "btn-air-light"], ["id", "small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-air-primary btn-pill", 1, "btn", "btn-primary", "btn-sm", "btn-pill", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-pill btn-air-secondary", 1, "btn", "btn-secondary", "btn-sm", "btn-pill", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-pill btn-air-success", 1, "btn", "btn-success", "btn-sm", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-pill btn-air-success", 1, "btn", "btn-info", "btn-sm", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-pill btn-air-success", 1, "btn", "btn-warning", "btn-sm", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-pill btn-air-success", 1, "btn", "btn-danger", "btn-sm", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-pill btn-air-success", 1, "btn", "btn-light", "btn-sm", "btn-pill", "btn-air-success"], ["id", "ex-small-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary btn-air-primary btn-pill", 1, "btn", "btn-primary", "btn-xs", "btn-pill", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary btn-pill btn-air-secondary", 1, "btn", "btn-secondary", "btn-xs", "btn-pill", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success btn-pill btn-air-success", 1, "btn", "btn-success", "btn-xs", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info btn-pill btn-air-info", 1, "btn", "btn-info", "btn-xs", "btn-pill", "btn-air-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning btn-pill btn-air-warning", 1, "btn", "btn-warning", "btn-xs", "btn-pill", "btn-air-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger btn-pill btn-air-danger", 1, "btn", "btn-danger", "btn-xs", "btn-pill", "btn-air-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-light btn-pill btn-air-light", 1, "btn", "btn-light", "btn-xs", "btn-pill", "btn-air-light"], ["id", "active-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-primary btn-primary", 1, "btn", "btn-pill", "btn-air-primary", "btn-primary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-secondary btn-secondary", 1, "btn", "btn-pill", "btn-air-secondary", "btn-secondary", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-success", 1, "btn", "btn-pill", "btn-air-success", "btn-success", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-info btn-info", 1, "btn", "btn-pill", "btn-air-info", "btn-info", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-warning btn-warning", 1, "btn", "btn-pill", "btn-air-warning", "btn-warning", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-danger btn-danger", 1, "btn", "btn-pill", "btn-air-danger", "btn-danger", "active"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-light btn-light", 1, "btn", "btn-pill", "btn-air-light", "btn-light", "active", "txt-dark"], ["id", "disabled-btn", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-primary btn-air-primary disabled", 1, "btn", "btn-pill", "btn-primary", "btn-air-primary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-secondary btn-secondary disabled", 1, "btn", "btn-pill", "btn-air-secondary", "btn-secondary", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-success disabled", 1, "btn", "btn-pill", "btn-air-success", "btn-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-info btn-info disabled", 1, "btn", "btn-pill", "btn-air-info", "btn-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-warning btn-warning disabled", 1, "btn", "btn-pill", "btn-air-warning", "btn-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-danger btn-danger disabled", 1, "btn", "btn-pill", "btn-air-danger", "btn-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-light btn-light disabled", 1, "btn", "btn-pill", "btn-air-light", "btn-light", "disabled", "txt-dark"], ["id", "custom-state-button", 1, "card"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "btn btn-primary", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-air-primary btn-primary", "role", "button", 1, "btn", "btn-pill", "btn-primary", "btn-air-primary"], ["type", "button", "value", "Input", "data-toggle", "tooltip", "title", "btn btn-pill btn-air-success btn-secondary", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-secondary", 1, "btn", "btn-pill", "btn-air-secondary", "btn-secondary"], ["type", "submit", "value", "Submit", "data-toggle", "tooltip", "title", "btn btn-pill btn-air-success btn-success", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-success", 1, "btn", "btn-pill", "btn-air-success", "btn-success"], ["type", "submit", "placement", "top", "ngbTooltip", "btn btn-info  btn-air-info btn-pill", 1, "btn", "btn-pill", "btn-info", "btn-air-info"], ["id", "outline-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-primary btn-air-primary", "role", "button", 1, "btn", "btn-pill", "btn-outline-primary", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-secondary btn-outline-secondary", 1, "btn", "btn-pill", "btn-air-secondary", "btn-outline-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-outline-success", 1, "btn", "btn-pill", "btn-air-success", "btn-outline-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-info btn-outline-info", 1, "btn", "btn-pill", "btn-air-info", "btn-outline-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-warning btn-outline-warning", 1, "btn", "btn-pill", "btn-air-warning", "btn-outline-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-danger btn-outline-danger", 1, "btn", "btn-pill", "btn-air-danger", "btn-outline-danger"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-light btn-outline-light", 1, "btn", "btn-pill", "btn-air-light", "btn-outline-light", "txt-dark"], ["id", "outline-bold-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-primary-2x btn-air-primary", 1, "btn", "btn-pill", "btn-outline-primary-2x", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-secondary btn-outline-secondary-2x btn-air-secondary", 1, "btn", "btn-pill", "btn-air-secondary", "btn-outline-secondary-2x", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-outline-success-2x", 1, "btn", "btn-pill", "btn-air-success", "btn-outline-success-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-info btn-outline-info-2x", 1, "btn", "btn-pill", "btn-air-info", "btn-outline-info-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-warning btn-outline-warning-2x", 1, "btn", "btn-pill", "btn-air-warning", "btn-outline-warning-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-danger btn-outline-danger-2x", 1, "btn", "btn-pill", "btn-air-danger", "btn-outline-danger-2x"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-light btn-outline-light-2x", 1, "btn", "btn-pill", "btn-air-light", "btn-outline-light-2x", "txt-dark"], ["id", "outline-large-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-pill btn-lg btn-air-primary", 1, "btn", "btn-outline-primary", "btn-pill", "btn-lg", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-pill btn-air-secondary btn-lg btn-air-secondary", 1, "btn", "btn-outline-secondary", "btn-lg", "btn-air-secondary", "btn-pill"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-pill btn-air-success btn-lg", 1, "btn", "btn-outline-success", "btn-pill", "btn-air-success", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-pill btn-air-info btn-lg", 1, "btn", "btn-outline-info", "btn-pill", "btn-air-info", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-pill btn-air-warning btn-lg", 1, "btn", "btn-outline-warning", "btn-pill", "btn-air-warning", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-pill btn-air-danger btn-lg", 1, "btn", "btn-outline-danger", "btn-pill", "btn-air-danger", "btn-lg"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-pill btn-air-light btn-lg", 1, "btn", "btn-outline-light", "btn-pill", "btn-air-light", "btn-lg", "txt-dark"], ["id", "outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-pill btn-sm btn-air-primary", 1, "btn", "btn-outline-primary", "btn-pill", "btn-sm", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-pill btn-sm btn-air-secondary", 1, "btn", "btn-outline-secondary", "btn-pill", "btn-air-secondary", "btn-sm", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-pill btn-air-success btn-sm", 1, "btn", "btn-outline-success", "btn-pill", "btn-air-success", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-pill btn-air-info btn-sm", 1, "btn", "btn-outline-info", "btn-pill", "btn-air-info", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-pill btn-air-warning btn-sm", 1, "btn", "btn-outline-warning", "btn-pill", "btn-air-warning", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-pill btn-air-danger btn-sm", 1, "btn", "btn-outline-danger", "btn-pill", "btn-air-danger", "btn-sm"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-pill btn-air-light btn-sm", 1, "btn", "btn-outline-light", "btn-pill", "btn-air-light", "btn-sm", "txt-dark"], ["id", "ex-outline-small-button", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-primary btn-pill btn-air-success btn-xs btn-air-primary", 1, "btn", "btn-outline-primary", "btn-pill", "btn-xs", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-secondary btn-pill btn-air-success btn-xs btn-air-secondary", 1, "btn", "btn-outline-secondary", "btn-pill", "btn-xs", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-success btn-pill btn-air-success btn-xs", 1, "btn", "btn-outline-success", "btn-pill", "btn-air-success", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-info btn-pill btn-air-success btn-xs", 1, "btn", "btn-outline-info", "btn-pill", "btn-air-info", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-warning btn-pill btn-air-success btn-xs", 1, "btn", "btn-outline-warning", "btn-pill", "btn-air-warning", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-danger btn-pill btn-air-success btn-xs", 1, "btn", "btn-outline-danger", "btn-pill", "btn-air-danger", "btn-xs"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-outline-light btn-pill btn-air-success btn-xs", 1, "btn", "btn-outline-light", "btn-pill", "btn-air-light", "btn-xs", "txt-dark"], [1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-outline-primary disabled btn-air-primary", 1, "btn", "btn-pill", "btn-outline-primary", "disabled", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill  btn-outline-secondary disabled btn-air-secondary", 1, "btn", "btn-pill", "btn-outline-secondary", "disabled", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-success btn-outline-success disabled", 1, "btn", "btn-pill", "btn-air-success", "btn-outline-success", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-info btn-outline-info disabled", 1, "btn", "btn-pill", "btn-air-info", "btn-outline-info", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-warning btn-outline-warning disabled", 1, "btn", "btn-pill", "btn-air-warning", "btn-outline-warning", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-danger btn-outline-danger disabled", 1, "btn", "btn-pill", "btn-air-danger", "btn-outline-danger", "disabled"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-pill btn-air-light btn-outline-light disabled", 1, "btn", "btn-pill", "btn-air-light", "btn-outline-light", "disabled", "txt-dark"], ["id", "gradiant", 1, "card"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-primary-gradien btn-pill btn-air-success", 1, "btn", "btn-primary-gradien", "btn-pill", "btn-air-primary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-secondary-gradien btn-pill btn-air-secondary", 1, "btn", "btn-secondary-gradien", "btn-pill", "btn-air-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-success-gradien btn-pill btn-air-success", 1, "btn", "btn-success-gradien", "btn-pill", "btn-air-success"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-info-gradien btn-pill btn-air-info", 1, "btn", "btn-info-gradien", "btn-pill", "btn-air-info"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-warning-gradien btn-pill btn-air-warning", 1, "btn", "btn-warning-gradien", "btn-pill", "btn-air-warning"], ["type", "button", "placement", "top", "ngbTooltip", "btn btn-danger-gradien btn-pill btn-air-danger", 1, "btn", "btn-danger-gradien", "btn-pill", "btn-air-danger"]],
        template: function RaisedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Default buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " class for flat button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " class for large button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " class for small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Extra Small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " class for extra small button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Active Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, ".active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " for active state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Disabled buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Custom state buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, ".btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, " class used with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "<button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "<a>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "<input>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, " elements.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, " class for button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "button", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "bold Border outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, ".btn-outline-*-2x");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, " class for button with bold outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "button", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "button", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "button", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "button", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "outline Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, ".btn-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, " class for large button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "button", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "button", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "button", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "button", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "outline small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, ".btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, " class for small button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "button", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "button", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "button", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "button", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "button", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "button", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "button", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Outline extra small buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, ".btn-outline-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, ".btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, " class for extra small button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "button", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "button", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "button", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "button", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "button", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "button", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "button", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "Light Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "Disabled outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](357, ".disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, " class or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "disabled=\"disabled\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, " attribute for disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "button", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "button", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "button", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "button", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "button", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "button", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Gradien buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, ".btn-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, ".btn-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, ".btn-*-gradien");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](393, " class for gradien button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "button", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, "Primary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "button", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, "Secondary Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "button", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "Success Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "button", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "Info Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "button", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "Warning Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "button", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, "Danger Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Raised")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "Raised");
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