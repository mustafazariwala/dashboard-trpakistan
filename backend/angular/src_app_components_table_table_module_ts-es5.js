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

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_table_table_module_ts"], {
    /***/
    60102: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasicComponent": function BasicComponent() {
          return (
            /* binding */
            _BasicComponent
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
        return ["Tables", "Bootstrap Tables"];
      };

      var _BasicComponent = /*#__PURE__*/function () {
        function _BasicComponent() {
          _classCallCheck(this, _BasicComponent);
        }

        _createClass(_BasicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BasicComponent;
      }();

      _BasicComponent.??fac = function BasicComponent_Factory(t) {
        return new (t || _BasicComponent)();
      };

      _BasicComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _BasicComponent,
        selectors: [["app-basic"]],
        decls: 1226,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "table-responsive"], [1, "table"], ["scope", "col"], ["scope", "row"], [1, "table", "table-inverse"], [1, "table", "table-striped", "bg-primary"], [1, "tbl-strip-thad-bdr"], [1, "table", "table-hover"], [1, "table-primary"], [1, "table-secondary"], [1, "table-success"], [1, "table-info"], [1, "table-warning"], [1, "table-danger"], [1, "table-light"], [1, "table-active"], [1, "table", "table-borderedfor"], [1, "bg-primary"], [1, "bg-secondary"], [1, "bg-success"], [1, "bg-info"], [1, "bg-warning"], [1, "bg-danger"], [1, "bg-light"], [1, "card-block", "row"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "thead-dark"], [1, "thead-light"], [1, "table", "table-striped"], [1, "table", "table-inverse", "table-striped"], [1, "table", "table-responsive-sm"]],
        template: function BasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Basic Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Use a class");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " to any table.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Alexander");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Orton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "@mdorton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "John Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "@johndeo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Randy Orton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "UK");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Randy Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "Ottandy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "@mdothe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "user");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "AUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Ram Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "IND");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99, "Inverse Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, "Use a class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "table-inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, " inside table element.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "Alexander");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, "Orton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "@mdorton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, "John Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, "Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "@johndeo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](145, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](150, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "Randy Orton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](154, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](160, "UK");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](163, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](165, "Randy Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](167, "Ottandy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](169, "@mdothe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, "user");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "AUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](178, "Ram Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](180, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](182, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](184, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](186, "IND");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](191, "Inverse Table with Primary background");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, "Use a class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](195, ".bg-info, .bg-success, .bg-warning and .bg-danger classes.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](196, " with light text on dark backgrounds inside table element.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](197, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](198, "To set the light background color use .bg-[color] class where [color] is the value of your selected color from stack color palette. So for teal color background class will be .bg-teal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "thead", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](204, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](206, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](212, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](214, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](218, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, "Alexander");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](222, "Orton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](224, "@mdorton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](226, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](228, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](233, "John Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](235, "Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](236, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](237, "@johndeo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](239, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](241, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](244, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](246, "Randy Orton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](248, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](250, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "UK");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](257, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](259, "Randy Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](261, "Ottandy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](263, "@mdothe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](264, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](265, "user");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](267, "AUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](268, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](270, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](272, "Ram Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](274, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](276, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](278, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](280, "IND");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](282, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](284, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](285, "Hoverable rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](286, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](287, "Use a class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](289, "table-hover");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](290, " to enable a hover state on table rows within a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](292, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](293, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](294, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](295, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](299, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](301, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](303, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](304, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](305, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](306, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](307, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](309, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](310, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](313, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](315, "Alexander");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](316, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](317, "Orton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](319, "@mdorton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](320, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](321, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](322, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](323, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](324, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](325, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](326, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](327, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](328, "John Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](330, "Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](331, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](332, "@johndeo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](333, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](334, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](336, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](337, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](338, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](339, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](340, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](341, "Randy Orton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](343, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](345, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](347, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](349, "UK");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](350, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](351, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](352, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](353, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](354, "Randy Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](355, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](356, "Ottandy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](357, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](358, "@mdothe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](360, "user");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](361, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](362, "AUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](363, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](364, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](365, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](366, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](367, "Ram Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](368, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](369, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](370, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](371, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](372, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](373, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](374, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](375, "IND");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](376, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](377, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](378, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](379, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](380, "Contextual classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](381, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](382, "Use contextual classes to color table rows or individual cells. you may use Classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](383, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](384, "table-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](385, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](386, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](387, "table-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](388, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](389, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](390, "table-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](391, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](392, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](393, "table-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](394, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](395, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](396, "table-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](397, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](398, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](399, "table-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](400, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](401, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](402, "table-light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](403, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](404, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](405, "table-active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](406, " in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](407, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](408, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](409, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](410, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](411, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](412, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](413, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](414, "Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](415, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](416, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](417, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](418, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](419, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](420, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](421, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](422, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](423, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](424, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](425, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](426, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](427, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](428, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](429, "Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](430, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](431, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](432, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](433, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](434, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](435, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](436, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](437, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](438, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](439, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](440, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](441, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](442, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](443, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](444, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](445, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](446, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](447, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](448, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](449, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](450, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](451, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](452, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](453, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](454, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](455, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](456, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](457, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](458, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](459, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](460, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](461, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](462, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](463, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](464, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](465, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](466, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](467, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](468, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](469, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](470, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](471, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](472, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](473, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](474, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](475, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](476, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](477, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](478, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](479, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](480, "Text or background utilities");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](481, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](482, "Regular table background variants are not available with the inverse table, however, you may use Classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](483, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](484, "bg-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](485, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](486, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](487, "bg-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](488, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](489, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](490, "bg-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](491, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](492, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](493, "bg-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](494, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](495, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](496, "bg-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](497, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](498, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](499, "bg-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](500, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](501, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](502, "bg-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](503, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](504, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](505, "bg-light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](506, " in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](507, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](508, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](509, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](510, "table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](511, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](512, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](513, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](514, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](515, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](516, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](517, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](518, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](519, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](520, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](521, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](522, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](523, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](524, "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](525, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](526, "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](527, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](528, "td", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](529, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](530, "td", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](531, "secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](532, "td", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](533, "secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](534, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](535, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](536, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](537, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](538, "success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](539, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](540, "success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](541, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](542, "td", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](543, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](544, "td", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](545, "info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](546, "td", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](547, "info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](548, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](549, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](550, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](551, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](552, "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](553, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](554, "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](555, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](556, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](557, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](558, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](559, "danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](560, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](561, "danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](562, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](563, "td", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](564, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](565, "td", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](566, "light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](567, "td", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](568, "light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](569, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](570, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](571, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](572, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](573, "Table head options");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](574, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](575, "Similar to tables and dark tables, use the modifier classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](576, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](577, ".thead-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](578, " to make ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](579, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](580, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](581, " appear light or dark gray.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](582, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](583, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](584, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](585, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](586, "thead", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](587, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](588, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](589, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](590, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](591, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](592, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](593, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](594, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](595, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](596, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](597, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](598, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](599, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](600, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](601, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](602, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](603, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](604, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](605, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](606, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](607, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](608, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](609, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](610, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](611, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](612, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](613, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](614, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](615, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](616, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](617, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](618, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](619, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](620, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](621, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](622, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](623, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](624, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](625, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](626, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](627, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](628, "Table head options");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](629, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](630, "Similar to tables and dark tables, use the modifier classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](631, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](632, ".bg-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](633, "and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](634, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](635, ".thead-light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](636, " to make ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](637, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](638, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](639, " appear light or dark gray.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](640, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](641, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](642, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](643, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](644, "thead", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](645, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](646, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](647, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](648, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](649, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](650, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](651, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](652, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](653, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](654, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](655, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](656, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](657, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](658, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](659, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](660, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](661, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](662, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](663, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](664, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](665, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](666, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](667, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](668, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](669, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](670, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](671, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](672, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](673, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](674, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](675, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](676, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](677, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](678, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](679, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](680, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](681, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](682, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](683, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](684, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](685, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](686, "Striped Row ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](687, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](688, "Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](689, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](690, ".table-striped");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](691, " to add zebra-striping to any table row within the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](692, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](693, ". This styling doesn't work in IE8 and below as :nth-child CSS selector isn't supported.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](694, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](695, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](696, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](697, "table", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](698, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](699, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](700, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](701, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](702, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](703, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](704, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](705, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](706, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](707, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](708, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](709, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](710, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](711, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](712, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](713, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](714, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](715, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](716, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](717, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](718, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](719, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](720, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](721, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](722, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](723, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](724, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](725, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](726, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](727, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](728, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](729, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](730, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](731, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](732, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](733, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](734, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](735, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](736, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](737, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](738, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](739, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](740, "Striped Row with Inverse Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](741, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](742, "Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](743, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](744, ".table-striped");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](745, " to add zebra-striping to any table row within the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](746, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](747, ". This styling doesn't work in IE8 and below as :nth-child CSS selector isn't supported.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](748, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](749, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](750, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](751, "table", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](752, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](753, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](754, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](755, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](756, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](757, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](758, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](759, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](760, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](761, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](762, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](763, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](764, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](765, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](766, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](767, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](768, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](769, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](770, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](771, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](772, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](773, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](774, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](775, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](776, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](777, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](778, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](779, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](780, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](781, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](782, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](783, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](784, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](785, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](786, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](787, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](788, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](789, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](790, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](791, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](792, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](793, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](794, "Caption");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](795, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](796, "A ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](797, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](798, "<caption>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](799, " functions like a heading for a table. It helps users with screen readers to find a table and understand what it\u2019s about and decide if they want to read it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](800, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](801, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](802, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](803, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](804, "caption");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](805, "List of users");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](806, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](807, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](808, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](809, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](810, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](811, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](812, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](813, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](814, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](815, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](816, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](817, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](818, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](819, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](820, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](821, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](822, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](823, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](824, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](825, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](826, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](827, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](828, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](829, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](830, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](831, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](832, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](833, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](834, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](835, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](836, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](837, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](838, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](839, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](840, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](841, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](842, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](843, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](844, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](845, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](846, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](847, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](848, "Responsive Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](849, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](850, "A ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](851, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](852, "<caption>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](853, " functions like a heading for a table. It helps users with screen readers to find a table and understand what it\u2019s about and decide if they want to read it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](854, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](855, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](856, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](857, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](858, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](859, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](860, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](861, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](862, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](863, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](864, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](865, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](866, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](867, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](868, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](869, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](870, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](871, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](872, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](873, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](874, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](875, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](876, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](877, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](878, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](879, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](880, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](881, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](882, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](883, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](884, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](885, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](886, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](887, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](888, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](889, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](890, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](891, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](892, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](893, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](894, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](895, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](896, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](897, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](898, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](899, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](900, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](901, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](902, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](903, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](904, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](905, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](906, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](907, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](908, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](909, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](910, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](911, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](912, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](913, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](914, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](915, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](916, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](917, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](918, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](919, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](920, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](921, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](922, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](923, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](924, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](925, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](926, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](927, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](928, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](929, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](930, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](931, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](932, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](933, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](934, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](935, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](936, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](937, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](938, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](939, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](940, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](941, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](942, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](943, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](944, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](945, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](946, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](947, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](948, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](949, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](950, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](951, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](952, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](953, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](954, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](955, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](956, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](957, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](958, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](959, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](960, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](961, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](962, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](963, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](964, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](965, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](966, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](967, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](968, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](969, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](970, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](971, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](972, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](973, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](974, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](975, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](976, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](977, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](978, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](979, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](980, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](981, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](982, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](983, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](984, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](985, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](986, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](987, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](988, "Breckpoint Specific");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](989, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](990, "Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](991, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](992, ".table-responsive{-sm|-md|-lg|-xl}");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](993, " functions like a heading for a table. It helps users with screen readers to find a table and understand what it\u2019s about and decide if they want to read it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](994, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](995, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](996, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](997, "table", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](998, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](999, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1000, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1001, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1002, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1003, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1004, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1005, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1006, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1007, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1008, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1009, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1010, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1011, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1012, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1013, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1014, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1015, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1016, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1017, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1018, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1019, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1020, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1021, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1022, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1023, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1024, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1025, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1026, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1027, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1028, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1029, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1030, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1031, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1032, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1033, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1034, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1035, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1036, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1037, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1038, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1039, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1040, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1041, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1042, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1043, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1044, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1045, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1046, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1047, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1048, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1049, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1050, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1051, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1052, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1053, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1054, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1055, "table", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1056, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1057, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1058, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1059, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1060, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1061, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1062, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1063, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1064, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1065, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1066, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1067, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1068, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1069, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1070, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1071, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1072, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1073, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1074, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1075, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1076, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1077, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1078, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1079, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1080, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1081, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1082, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1083, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1084, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1085, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1086, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1087, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1088, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1089, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1090, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1091, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1092, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1093, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1094, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1095, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1096, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1097, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1098, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1099, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1100, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1101, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1102, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1103, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1104, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1105, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1106, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1107, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1108, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1109, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1110, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1111, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1112, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1113, "table", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1114, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1115, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1116, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1117, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1118, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1119, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1120, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1121, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1122, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1123, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1124, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1125, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1126, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1127, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1128, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1129, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1130, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1131, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1132, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1133, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1134, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1135, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1136, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1137, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1138, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1139, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1140, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1141, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1142, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1143, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1144, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1145, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1146, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1147, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1148, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1149, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1150, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1152, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1153, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1154, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1155, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1156, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1157, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1159, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1161, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1162, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1163, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1164, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1165, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1166, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1167, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1168, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1169, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1170, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1171, "table", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1172, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1173, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1174, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1175, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1176, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1177, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1178, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1179, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1180, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1181, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1182, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1183, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1184, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1185, "Table heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1186, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1187, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1188, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1189, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1191, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1193, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1195, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1197, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1198, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1199, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1200, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1201, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1202, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1203, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1204, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1205, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1206, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1208, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1209, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1210, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1211, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1212, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1213, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1214, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1215, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1217, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1218, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1219, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1220, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1221, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1222, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1223, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1224, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1225, "Table cell");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Basic")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Basic");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    24352: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BorderComponent": function BorderComponent() {
          return (
            /* binding */
            _BorderComponent
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
        return ["Tables", "Bootstrap Tables"];
      };

      var _BorderComponent = /*#__PURE__*/function () {
        function _BorderComponent() {
          _classCallCheck(this, _BorderComponent);
        }

        _createClass(_BorderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BorderComponent;
      }();

      _BorderComponent.??fac = function BorderComponent_Factory(t) {
        return new (t || _BorderComponent)();
      };

      _BorderComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _BorderComponent,
        selectors: [["app-border"]],
        decls: 716,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "table-responsive"], [1, "table", "table-border-horizontal"], ["scope", "col"], ["scope", "row"], [1, "table", "table-border-vertical"], [1, "table", "table-bordered"], [1, "table", "table-bordernone"], ["scope", "row", 1, "bd-t-none"], [1, "table"], [1, "border-solid"], [1, "Double"], [1, "Dotted"], [1, "Dashed"], [1, "border-bottom-primary"], [1, "border-bottom-secondary"], [1, "border-bottom-success"], [1, "border-bottom-info"], [1, "border-bottom-warning"], [1, "border-bottom-danger"]],
        template: function BorderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Horizontal Borders");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Example of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " table borders. This is a default table border style attached to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, " .table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, " class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, " .table-border-horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "class added to the table with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "class.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Alexander");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Orton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "@mdorton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "John Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "@johndeo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "Randy Orton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "UK");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "Randy Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Ottandy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "@mdothe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "user");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "AUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "Ram Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "IND");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "Vertical Borders");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Example of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "Vertical ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, " table borders. This is a default table border style attached to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, " .table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, " class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, " .table-border-vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "class added to the table with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, "class.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](142, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "Alexander");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, "Orton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](148, "@mdorton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](150, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "John Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, "@johndeo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](163, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](165, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](170, "Randy Orton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](178, "UK");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](183, "Randy Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](185, "Ottandy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](187, "@mdothe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](189, "user");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](191, "AUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](194, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](196, "Ram Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](198, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](200, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](202, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](204, "IND");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](209, "Both Bordeds");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](211, "Example of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](213, "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](214, " table borders. This is a default table border style attached to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](216, " .table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](217, " class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](219, " .table-bordered");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, "class added to the table with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](222, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](223, "class.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](229, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](233, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](235, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](236, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](239, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](241, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](243, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](245, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](248, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](250, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "@TwBootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](257, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](259, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](261, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](263, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](264, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](268, "Borderless Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](270, "Example of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](272, "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](273, " table borders. This is a default table border style attached to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](274, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](275, " .table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](276, " class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](278, " .table-bordernone");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](279, "class added to the table with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](280, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](281, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](282, "class.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](284, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](286, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](288, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](289, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](290, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](292, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](294, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](295, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](298, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](299, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](300, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](302, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](304, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](306, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](307, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](309, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](310, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](311, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](313, "@TwBootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](316, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](317, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](318, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](320, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](321, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](322, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](323, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](324, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](325, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](327, "Default Table Border");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](328, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](329, "Example of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](330, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](331, "Default Table Border");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](332, ".This is a default table border style attached to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](333, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](334, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](335, " class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](336, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](337, " .table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](338, "class added to the table with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](339, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](340, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](341, "class.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](343, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](345, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](347, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](349, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](350, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](351, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](353, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](354, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](355, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](357, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](358, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](359, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](360, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](361, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](362, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](363, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](364, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](366, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](367, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](368, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](369, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](370, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](371, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](372, "@TwBootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](373, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](374, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](375, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](376, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](377, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](378, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](379, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](380, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](381, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](382, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](383, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](384, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](385, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](386, "Solid Border");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](387, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](388, "Example of a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](389, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](390, "solid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](391, " border inside table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](392, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](393, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](394, ". This border inherits all styling options from the default border style, the only difference is it has ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](395, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](396, "2px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](397, " width. Sometimes it could be useful for visual separation and addition highlight. To use this border add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](398, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](399, ".border-solid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](400, " to the table head row. This border style works only with row borders.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](401, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](402, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](403, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](404, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](405, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](406, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](407, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](408, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](409, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](410, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](411, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](412, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](413, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](414, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](415, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](416, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](417, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](418, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](419, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](420, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](421, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](422, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](423, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](424, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](425, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](426, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](427, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](428, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](429, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](430, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](431, "@TwBootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](432, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](433, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](434, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](435, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](436, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](437, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](438, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](439, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](440, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](441, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](442, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](443, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](444, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](445, "Double Border");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](446, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](447, "Example of a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](448, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](449, "double");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](450, " border inside table head. This border has ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](451, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](452, "3px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](453, " width, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](454, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](455, "double");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](456, " style and inherits all styling options from the default border style. Visually it displays table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](457, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](458, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](459, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](460, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](461, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](462, " as 2 separated table areas. To use this border add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](463, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](464, ".border-double");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](465, " to the table head row.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](466, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](467, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](468, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](469, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](470, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](471, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](472, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](473, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](474, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](475, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](476, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](477, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](478, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](479, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](480, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](481, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](482, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](483, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](484, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](485, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](486, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](487, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](488, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](489, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](490, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](491, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](492, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](493, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](494, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](495, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](496, "@TwBootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](497, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](498, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](499, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](500, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](501, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](502, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](503, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](504, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](505, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](506, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](507, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](508, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](509, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](510, "Dotted Border");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](511, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](512, "Example of a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](513, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](514, "dotted");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](515, " border inside table head. This border has ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](516, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](517, "3px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](518, " width, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](519, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](520, "dotted");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](521, " style and inherits all styling options from the default border style. Visually it displays table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](522, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](523, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](524, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](525, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](526, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](527, " as 2 separated table areas. To use this border add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](528, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](529, ".border-dotted");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](530, " to the table head row.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](531, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](532, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](533, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](534, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](535, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](536, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](537, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](538, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](539, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](540, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](541, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](542, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](543, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](544, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](545, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](546, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](547, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](548, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](549, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](550, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](551, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](552, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](553, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](554, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](555, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](556, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](557, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](558, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](559, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](560, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](561, "@TwBootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](562, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](563, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](564, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](565, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](566, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](567, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](568, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](569, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](570, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](571, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](572, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](573, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](574, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](575, "Dashed Border");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](576, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](577, "Example of a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](578, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](579, "dashed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](580, " border inside table head. This border has ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](581, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](582, "3px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](583, " width, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](584, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](585, "dashed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](586, " style and inherits all styling options from the default border style. Visually it displays table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](587, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](588, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](589, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](590, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](591, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](592, " as 2 separated table areas. To use this border add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](593, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](594, ".border-dashed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](595, " to the table head row.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](596, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](597, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](598, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](599, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](600, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](601, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](602, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](603, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](604, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](605, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](606, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](607, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](608, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](609, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](610, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](611, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](612, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](613, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](614, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](615, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](616, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](617, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](618, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](619, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](620, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](621, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](622, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](623, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](624, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](625, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](626, "@TwBootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](627, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](628, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](629, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](630, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](631, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](632, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](633, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](634, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](635, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](636, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](637, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](638, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](639, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](640, "Border Bottom Color ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](641, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](642, "EExample of a table head border with");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](643, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](644, "custom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](645, " color. According to the custom color system options, you can set any of predefined colors by adding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](646, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](647, ".border-bottom-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](648, " class to the table head row. This technique works with all border styles demonstrated above.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](649, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](650, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](651, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](652, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](653, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](654, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](655, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](656, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](657, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](658, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](659, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](660, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](661, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](662, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](663, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](664, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](665, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](666, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](667, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](668, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](669, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](670, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](671, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](672, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](673, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](674, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](675, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](676, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](677, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](678, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](679, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](680, "tr", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](681, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](682, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](683, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](684, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](685, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](686, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](687, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](688, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](689, "tr", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](690, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](691, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](692, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](693, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](694, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](695, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](696, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](697, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](698, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](699, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](700, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](701, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](702, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](703, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](704, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](705, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](706, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](707, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](708, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](709, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](710, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](711, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](712, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](713, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](714, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](715, "@fat");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Border")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Border");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    87436: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SizingComponent": function SizingComponent() {
          return (
            /* binding */
            _SizingComponent
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
        return ["Tables", "Bootstrap Tables"];
      };

      var _SizingComponent = /*#__PURE__*/function () {
        function _SizingComponent() {
          _classCallCheck(this, _SizingComponent);
        }

        _createClass(_SizingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SizingComponent;
      }();

      _SizingComponent.??fac = function SizingComponent_Factory(t) {
        return new (t || _SizingComponent)();
      };

      _SizingComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _SizingComponent,
        selectors: [["app-sizing"]],
        decls: 275,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "table-responsive"], [1, "table", "table-xl"], ["scope", "row"], [1, "table", "table-lg"], ["scope", "col"], ["colspan", "2"], [1, "table", "table-de"], [1, "table", "table-sm"], [1, "table", "table-xs"]],
        template: function SizingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Extra Large Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Example of Extra large table, Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, ".table-xl");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " class to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, " to create a table with extra large spacing. Extra larger table all rows have ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "1.25rem");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, " height.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, "Large Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Example of large table, Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, ".table-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "class to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "to create a table with large spacing. larger table all rows have ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "0.9rem");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, " height.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "Default Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "Example of large table, Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, ".table-de");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, "class to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "to create a table with large spacing. larger table all rows have ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, "0.75rem");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, " height.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](140, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](148, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](150, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](162, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](164, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](166, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, "Small table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "Example of small table, Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, ".table-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, " class to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](178, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, " to create a table with small spacing. Small table all rows have ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, "0.3rem");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](182, " height");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](188, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](192, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](194, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](198, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](200, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](202, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](204, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](207, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](209, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](211, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](213, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](216, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](218, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](225, "Extra Small table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](227, "Example of small table, Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](229, ".table-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](230, " class to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](232, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](233, " to create a table with extra small spacing. Small table all rows have ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](235, "1.5rem");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, " height");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](242, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](244, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](246, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](248, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](256, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](261, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](263, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](264, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](265, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](267, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](268, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](270, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](272, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](274, "@twitter");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Sizing")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Sizing");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXppbmcuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    70271: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StylingComponent": function StylingComponent() {
          return (
            /* binding */
            _StylingComponent
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
        return ["Tables", "Bootstrap Tables"];
      };

      var _StylingComponent = /*#__PURE__*/function () {
        function _StylingComponent() {
          _classCallCheck(this, _StylingComponent);
        }

        _createClass(_StylingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _StylingComponent;
      }();

      _StylingComponent.??fac = function StylingComponent_Factory(t) {
        return new (t || _StylingComponent)();
      };

      _StylingComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _StylingComponent,
        selectors: [["app-styling"]],
        decls: 450,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-block", "row"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "table-responsive"], [1, "table", "table-styling"], ["scope", "col"], ["scope", "row"], [1, "table"], [1, "table-primary"], [1, "bg-primary"], [1, "table-success"], [1, "table-responsive", "table-border-radius"], [1, "table", "table-styling", "table-primary"], [1, "table", "table-styling", "table-hover", "table-striped", "table-primary"]],
        template: function StylingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Defult Styling");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "use class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "table table-styling");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " inside table element");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, "Table head options");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "Use class");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, ".table-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, " inside thead tr element.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "thead", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](106, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, "Table head options With Primary Background");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, "Use background classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, ".bg-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "table-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, "table-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "table-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, "table-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, " ,");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "table-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](131, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "table-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, " to make custom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, " background. You can also use Stack Admin color palette classes for background.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "thead", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](145, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](149, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](151, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](164, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](166, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](170, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](177, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "thead", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](187, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](189, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](191, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](197, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](199, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](201, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](203, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](206, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](212, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](215, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](217, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](219, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](221, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](226, "Table Footer Styling");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](228, "Use class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](230, "table-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](233, "table-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "table-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](237, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](239, "table-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](240, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](242, "table-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](243, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](245, "table-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](246, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](248, "table-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](251, "table-light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "table-active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](255, "and also use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](257, "bg-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, " inside tfoot element.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](264, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](266, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](268, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](270, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](272, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](274, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](276, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](278, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](280, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](282, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](284, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](285, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](286, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](287, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](289, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](291, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](292, "tfoot", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](294, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](295, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](297, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](299, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](301, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](304, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](306, "Custom Table Color");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](307, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](308, "Use class");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](309, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](310, "table-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](311, " inside table element.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](313, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "table", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](316, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](317, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](319, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](320, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](321, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](322, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](323, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](324, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](325, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](327, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](328, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](329, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](330, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](331, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](332, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](333, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](334, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](335, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](336, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](337, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](338, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](339, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](340, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](341, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](342, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](343, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](344, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](345, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](347, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](349, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](350, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](351, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](353, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](354, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](355, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](357, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](358, "Custom Table Color with Hover and Stripped");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](360, "Use class");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](361, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](362, "table-hover, table-striped table-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](363, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](364, "table-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](365, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](366, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](367, "table-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](368, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](369, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](370, "table-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](371, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](372, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](373, "table-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](374, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](375, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](376, "table-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](377, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](378, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](379, "table-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](380, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](381, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](382, "table-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](383, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](384, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](385, "table-light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](386, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](387, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](388, "table-active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](389, " inside table element.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](390, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](391, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](392, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](393, "table", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](394, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](395, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](396, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](397, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](398, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](399, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](400, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](401, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](402, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](403, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](404, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](405, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](406, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](407, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](408, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](409, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](410, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](411, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](412, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](413, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](414, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](415, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](416, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](417, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](418, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](419, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](420, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](421, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](422, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](423, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](424, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](425, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](426, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](427, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](428, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](429, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](430, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](431, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](432, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](433, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](434, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](435, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](436, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](437, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](438, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](439, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](440, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](441, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](442, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](443, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](444, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](445, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](446, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](447, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](448, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](449, "@twitter");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Styling")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Styling");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    82871: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TableComponentsComponent": function TableComponentsComponent() {
          return (
            /* binding */
            _TableComponentsComponent
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);

      var _c0 = function _c0() {
        return ["Tables", "Bootstrap Tables"];
      };

      var _TableComponentsComponent = /*#__PURE__*/function () {
        function _TableComponentsComponent() {
          _classCallCheck(this, _TableComponentsComponent);

          this.numbers = [1, 2, 3, 4, 5];
        }

        _createClass(_TableComponentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TableComponentsComponent;
      }();

      _TableComponentsComponent.??fac = function TableComponentsComponent_Factory(t) {
        return new (t || _TableComponentsComponent)();
      };

      _TableComponentsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _TableComponentsComponent,
        selectors: [["app-table-components"]],
        decls: 761,
        vars: 8,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-block", "row"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "w-50"], [1, "btn", "btn-primary"], [1, "btn", "btn-pill", "btn-primary"], ["ngbDropdown", "", 1, "d-inline-block"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-header"], ["ngbDropdownItem", "", "href", "javascript:void(0)", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "btn-group"], [1, "btn", "btn-secondary"], [1, "fa", "fa-info-circle"], [1, "fa", "fa-camera"], [1, "fa", "fa-spin", "fa-spinner", "mr-2"], [1, "alert", "alert-primary"], ["href", "javascript:void(0)", 1, "alert-link"], ["role", "alert", 1, "alert", "alert-secondary", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-primary", "inverse", "alert-dismissible", "fade", "show"], [1, "icofont", "icofont-heart-alt"], [1, "table", "table-bordered", "checkbox-td-width"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "75%"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-primary", 2, "width", "75%"], [1, "progress", "lg-progress-bar"], ["id", "checkbox1", "type", "checkbox", 1, "mr-1"], ["for", "checkbox1"], [1, "checkbox", "m-squar"], ["id", "checkbox3", "type", "checkbox", 1, "ml-1"], ["for", "checkbox3"], [1, "checkbox", "checkbox-dark"], ["id", "checkbox-state-dark", "type", "checkbox", 1, "ml-1"], ["for", "checkbox-state-dark"], [1, "checkbox", "checkbox-solid-primary"], ["id", "solid6", "type", "checkbox", "checked", "", 1, "ml-1"], ["for", "solid6"], ["id", "solid2", "type", "checkbox", "disabled", "", 1, "ml-1"], ["for", "solid2"], [1, "form-group", "m-b-0", "m-checkbox-inline", "ml-1"], [1, "checkbox", "checkbox-primary"], ["id", "inline-1", "type", "checkbox"], ["for", "inline-1"], [1, "checkbox", "checkbox-secondary"], ["id", "inline-2", "type", "checkbox"], ["for", "inline-2"], [1, "checkbox", "checkbox-success"], ["id", "inline-3", "type", "checkbox"], ["for", "inline-3"], [1, "table", "table-bordered", "radio-first-col-width"], ["id", "radio", "type", "radio", 1, "mr-1"], ["for", "radio"], [1, "radio", "radio-primary"], ["id", "radio1", "type", "radio", "name", "radio1", "value", "option1", 1, "ml-2"], ["for", "radio1", 1, "mb-0"], ["id", "radio44", "type", "radio", "name", "radio1", "value", "option1", "checked", "", 1, "ml-2"], ["for", "radio44", 1, "mb-0"], ["id", "radio33", "type", "radio", "name", "radio1", "value", "option1", "disabled", "", 1, "ml-2"], ["for", "radio33", 1, "mb-0"], [1, "form-group", "m-b-0", "m-checkbox-inline", "ml-2"], ["id", "radioinline1", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radioinline1", 1, "mb-0"], [1, "radio", "radio-secondary"], ["id", "radioinline2", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radioinline2", 1, "mb-0"], [1, "radio", "radio-success"], ["id", "radioinline3", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radioinline3", 1, "mb-0"], ["id", "exampleFormControlSelect45", 1, "form-control"], ["id", "exampleFormControlSelect4", "disabled", "", 1, "form-control"], ["id", "exampleFormControlSelect1", 1, "form-control", "form-control-lg", "mb-10"], ["id", "exampleFormControlSelect3", 1, "form-control", "form-control-sm", "mt-5", "mb-10"], ["placeholder", "Select people", 3, "items", "multiple", "closeOnSelect", "dropdownPosition"], ["id", "exampleFormControlInput1", "type", "email", "placeholder", "Input text", 1, "form-control", "input-primary"], ["id", "exampleFormControlInput2", "type", "email", "placeholder", "Input text", 1, "form-control"], [1, "pills-component"], [1, "badge", "badge-primary"], [1, "w-50", "m-5"], [1, "badge", "badge-primary", "label-square"], [1, "fa", "fa-paperclip", "fa-lg"], [1, "f-14"], ["type", "button", "data-original-title", "btn btn-link btn-lg", "title", "Hover", 1, "btn", "btn-primary"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "", "role", "button", "data-original-title", "Hooray!", 1, "btn", "btn-primary"], ["type", "button", "data-original-title", "btn btn-outline-danger-2x", "title", "", 1, "btn", "btn-outline-primary"], [1, "switch"], ["type", "checkbox", "checked", ""], [1, "switch-state"], ["type", "checkbox", "disabled", ""], [1, "media-body", "icon-state"], [1, "switch-state", "bg-primary"], [1, "media-body", "icon-state", "switch-outline"]],
        template: function TableComponentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "UI Components");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Default Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Bootstrap includes six predefined button styles, each serving its own semantic purpose.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Round Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Default Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, ".btn-pill");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, " class to button for Round Buttons.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Button dropdowns");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Dropdown header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, ".dropdown-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, " class to button for Dropdown-toggle.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "Basic Button group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "btn-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, " class to button for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "Buttons with Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](85, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, " Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "Bootstrap includes six predefined button styles, each serving its own semantic purpose.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Icon Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](95, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "Simple Icon Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, "Loading Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](104, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, "Expand UP");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "Expand Animation Buttons");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, "Alerts");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, "Basic Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, "Success!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, " Indicates a successful or positive action.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "Alerts are available for any length of text, as well as an optional dismiss button. Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, " alert alert-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, " alert alert-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](140, " alert alert-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, " alert alert-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, " classes for alert with all theme colors.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "Alerts with Links");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "Success!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, " You should ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, "read this message");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](160, "Alerts are available for any length of text, as well as an optional dismiss button. Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](162, " alert alert-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](163, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](165, " alert alert-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](166, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168, " alert alert-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](169, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, " alert alert-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, " classes for alert with all theme colors.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, "Dismissible Alerts");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](180, "Holy !");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, " You can check in on some of those fields below.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](184, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](187, "Add a dismiss button and the");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](189, " alert alert-dismissable");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "class, which adds extra padding to the right of the alert and positions the");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](192, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, "a link On the dismiss button, add the data-dismiss=\"alert\" attribute, which triggers the JavaScript functionality. Be sure to use the");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](195, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](196, "element with it for proper behavior across all devices. To animate alerts when dismissing them, be sure to add the .fade and .in classes.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](199, "Alerts with icons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](202, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](204, "Good Morning! Start your day with some alerts.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](207, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, "Add a dismiss button and the");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](212, " alert alert-dismissable");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](213, "class, which adds extra padding to the right of the alert and positions the");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](215, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](216, "a link On the dismiss button, add the data-dismiss=\"alert\" attribute, which triggers the JavaScript functionality. Be sure to use the");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](218, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](219, "element with it for proper behavior across all devices. To animate alerts when dismissing them, be sure to add the .fade and .in classes.");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](224, "Progressbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "table", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](233, "Default Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](236, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](239, "Uses a progress bar with class");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](241, "progress-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](242, " and background color");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](244, "bg-primary, bg-secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](245, "also change");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](248, "Striped Progress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](251, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "Uses a gradient to create a striped effect class.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](256, "progress-bar-striped");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](259, "Progress Sizes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](262, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](264, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](265, "Different sized progress. For Default progress, class need");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](267, "lg-progress-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](268, "on div.");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](270, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](273, "Checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](274, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](276, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](278, "table", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](280, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](282, "Basic Checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](284, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](286, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](289, "Basic Checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](292, "Default Checkbox Squar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](294, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](295, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](297, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](299, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](300, "Wrap with use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](302, ".m-squar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](303, " checkbox.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](304, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](306, "Basic Skin Check");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](307, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](309, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](310, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](311, "Brand state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](313, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](314, "Wrap with use");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](316, "checkbox-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](317, "for this style of checkbox.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](320, "Flat Skin Check");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](321, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](322, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](323, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](324, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](325, "checked");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](327, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](328, "Wrap with use");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](330, "checkbox-solid-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](331, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](332, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](333, "primary, secondary, success, info, warning, danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](334, "for this style of checkbox.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](336, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](337, "Disable Check");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](338, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](339, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](340, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](341, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](342, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](343, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](345, "Wrap with use");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](347, "disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](348, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](349, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](350, "primary, secondary, success, info, warning, danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](351, "for this style of checkbox disable.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](353, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](354, "Inline Checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](355, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](357, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](358, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "label", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](360, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](361, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](362, "input", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](363, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](364, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](366, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](367, "label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](368, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](369, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](370, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](371, "Wrap with use");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](372, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](373, "disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](374, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](375, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](376, "primary, secondary, success, info, warning, danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](377, "for this style of checkbox disable.");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](378, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](379, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](380, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](381, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](382, "Radio Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](383, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](384, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](385, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](386, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](387, "table", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](388, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](389, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](390, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](391, "Basic Radio Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](392, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](393, "input", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](394, "label", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](395, "Default radio");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](396, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](397, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](398, "Basic Radio Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](399, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](400, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](401, "Default Radio");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](402, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](403, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](404, "input", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](405, "label", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](406, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](407, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](408, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](409, "Wrap with use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](410, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](411, ".radio-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](412, " and color ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](413, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](414, ".radio-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](415, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](416, "primary , secondary , success , info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](417, " on Radio.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](418, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](419, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](420, "Checked Radio");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](421, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](422, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](423, "input", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](424, "label", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](425, "Checked");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](426, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](427, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](428, "Wrap with use");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](429, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](430, "checkbox-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](431, "for this style of checkbox.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](432, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](433, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](434, "Flat Skin Check");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](435, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](436, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](437, "input", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](438, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](439, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](440, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](441, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](442, "Wrap with use");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](443, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](444, "checkbox-solid-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](445, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](446, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](447, "primary, secondary, success, info, warning, danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](448, "for this style of checkbox.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](449, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](450, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](451, "Inline Checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](452, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](453, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](454, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](455, "input", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](456, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](457, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](458, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](459, "input", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](460, "label", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](461, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](462, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](463, "input", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](464, "label", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](465, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](466, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](467, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](468, "Wrap with use");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](469, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](470, "disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](471, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](472, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](473, "primary, secondary, success, info, warning, danger, light, dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](474, "for this style of checkbox disable.");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](475, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](476, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](477, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](478, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](479, "Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](480, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](481, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](482, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](483, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](484, "table", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](485, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](486, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](487, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](488, "Single Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](489, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](490, "select", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](491, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](492, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](493, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](494, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](495, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](496, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](497, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](498, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](499, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](500, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](501, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](502, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](503, "Use for basic select control.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](504, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](505, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](506, "Disabled Select Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](507, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](508, "select", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](509, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](510, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](511, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](512, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](513, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](514, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](515, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](516, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](517, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](518, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](519, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](520, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](521, "Use for disabled select control add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](522, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](523, "disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](524, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](525, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](526, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](527, "Large Select Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](528, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](529, "select", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](530, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](531, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](532, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](533, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](534, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](535, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](536, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](537, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](538, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](539, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](540, "select", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](541, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](542, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](543, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](544, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](545, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](546, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](547, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](548, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](549, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](550, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](551, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](552, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](553, "Use for large and small select control add class");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](554, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](555, "form-control-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](556, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](557, "lg, sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](558, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](559, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](560, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](561, "Example multiple select");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](562, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](563, "ng-select", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](564, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](565, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](566, "Use for multi select control add code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](567, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](568, "multiple");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](569, "on select.");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](570, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](571, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](572, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](573, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](574, "Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](575, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](576, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](577, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](578, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](579, "table", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](580, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](581, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](582, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](583, "Default Input text");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](584, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](585, "input", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](586, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](587, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](588, "Use for basic select control.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](589, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](590, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](591, "Input Hover Color ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](592, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](593, "input", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](594, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](595, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](596, "Use for basic input color add class");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](597, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](598, "input-air-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](599, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](600, "primary, secondary, success, info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](601, ".on input");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](602, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](603, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](604, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](605, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](606, "Badges");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](607, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](608, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](609, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](610, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](611, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](612, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](613, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](614, "td", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](615, "Basic Pills");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](616, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](617, "span", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](618, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](619, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](620, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](621, "Use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](622, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](623, ".badge");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](624, " class, followed by. with badge color use class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](625, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](626, ".badge-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](627, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](628, "primary , secondary , success , info, warning, danger, light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](629, " class within element to create default pill.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](630, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](631, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](632, "Label With Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](633, "td", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](634, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](635, "i", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](636, "span", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](637, "Primary Label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](638, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](639, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](640, "Use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](641, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](642, "label-square");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](643, " class with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](644, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](645, "div");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](646, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](647, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](648, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](649, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](650, "Tooltip Triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](651, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](652, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](653, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](654, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](655, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](656, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](657, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](658, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](659, "Hover");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](660, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](661, "button", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](662, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](663, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](664, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](665, "Use data-toggle=\"tooltip\" for hover trigger. This is a default trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](666, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](667, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](668, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](669, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](670, "a", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](671, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](672, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](673, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](674, "Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](675, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](676, "a href=\"javascript:void(0)\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](677, " for link trigger. This is a link trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](678, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](679, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](680, "outline button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](681, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](682, "button", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](683, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](684, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](685, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](686, "Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](687, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](688, "btn btn-outline-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](689, " for outline trigger. and button bold Border use class");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](690, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](691, "btn btn-outline-dark-2x");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](692, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](693, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](694, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](695, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](696, "SWITCH");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](697, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](698, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](699, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](700, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](701, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](702, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](703, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](704, "td", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](705, "Default Switch");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](706, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](707, "label", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](708, "input", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](709, "span", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](710, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](711, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](712, "Use class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](713, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](714, "switch");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](715, " for label.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](716, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](717, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](718, "Disable Switch");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](719, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](720, "label", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](721, "input", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](722, "span", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](723, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](724, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](725, "this Disable Switch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](726, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](727, "disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](728, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](729, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](730, "Switch Color");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](731, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](732, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](733, "label", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](734, "input", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](735, "span", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](736, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](737, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](738, "Use class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](739, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](740, "bg-*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](741, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](742, "Primary , Secondary , Success , Info , Warning , Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](743, "in span with icon show switch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](744, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](745, "icon-state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](746, "on div.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](747, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](748, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](749, "Switch Outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](750, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](751, "div", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](752, "label", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](753, "input", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](754, "span", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](755, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](756, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](757, "Use class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](758, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](759, "switch-outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](760, "on div.");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Table Components")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](7, _c0))("active_item", "Table Components");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](563);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", ctx.numbers)("multiple", true)("closeOnSelect", true)("dropdownPosition", "top");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownItem, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgSelectMultipleOption"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__.NgSelectComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    46415: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasicDataTableComponent": function BasicDataTableComponent() {
          return (
            /* binding */
            _BasicDataTableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_tables_company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/data/tables/company */
      44259);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);

      var _c0 = function _c0() {
        return ["Tables", "Data Tables"];
      };

      var _BasicDataTableComponent = /*#__PURE__*/function () {
        function _BasicDataTableComponent() {
          _classCallCheck(this, _BasicDataTableComponent);

          this.company = [];
          this.loadingIndicator = true;
          this.reorderable = true;
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }, {
            name: 'Company'
          }];
          this.company = _shared_data_tables_company__WEBPACK_IMPORTED_MODULE_0__.companyDB.data;
        }

        _createClass(_BasicDataTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BasicDataTableComponent;
      }();

      _BasicDataTableComponent.??fac = function BasicDataTableComponent_Factory(t) {
        return new (t || _BasicDataTableComponent)();
      };

      _BasicDataTableComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _BasicDataTableComponent,
        selectors: [["app-basic-data-table"]],
        decls: 10,
        vars: 14,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "custom-datatable", "noscroll"], [1, "bootstrap", 3, "rows", "loadingIndicator", "columns", "columnMode", "headerHeight", "summaryRow", "summaryPosition", "footerHeight", "rowHeight", "reorderable"]],
        template: function BasicDataTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Basic Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "ngx-datatable", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "Basic")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](13, _c0))("active_item", "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("rows", ctx.company)("loadingIndicator", ctx.loadingIndicator)("columns", ctx.columns)("columnMode", "force")("headerHeight", 40)("summaryRow", true)("summaryPosition", "bottom")("footerHeight", 40)("rowHeight", "auto")("reorderable", ctx.reorderable);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy1kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    42000: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ColumnFilterComponent": function ColumnFilterComponent() {
          return (
            /* binding */
            _ColumnFilterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);

      var _c0 = function _c0() {
        return ["Tables", "Data Tables"];
      };

      var _ColumnFilterComponent = /*#__PURE__*/function () {
        function _ColumnFilterComponent() {
          var _this = this;

          _classCallCheck(this, _ColumnFilterComponent);

          this.rows = [];
          this.temp = [];
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Company'
          }, {
            name: 'Gender'
          }];
          this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__.ColumnMode;
          this.fetch(function (data) {
            // cache our list
            _this.temp = _toConsumableArray(data); // push our inital complete list

            _this.rows = data;
          });
        }

        _createClass(_ColumnFilterComponent, [{
          key: "fetch",
          value: function fetch(cb) {
            var req = new XMLHttpRequest();
            req.open('GET', "assets/data/company/company.json");

            req.onload = function () {
              cb(JSON.parse(req.response));
            };

            req.send();
          }
        }, {
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data

            var temp = this.temp.filter(function (d) {
              return d.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // update the rows

            this.rows = temp; // Whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ColumnFilterComponent;
      }();

      _ColumnFilterComponent.??fac = function ColumnFilterComponent_Factory(t) {
        return new (t || _ColumnFilterComponent)();
      };

      _ColumnFilterComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _ColumnFilterComponent,
        selectors: [["app-column-filter"]],
        viewQuery: function ColumnFilterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 12,
        vars: 10,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "custom-datatable"], ["type", "text", "placeholder", "Type to filter the name column...", 1, "filter-ngx", "form-control", 3, "keyup"], ["rowHeight", "auto", 1, "bootstrap", 3, "columns", "columnMode", "headerHeight", "footerHeight", "limit", "rows"], ["table", ""]],
        template: function ColumnFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Filter Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("keyup", function ColumnFilterComponent_Template_input_keyup_9_listener($event) {
              return ctx.updateFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "Column")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](9, _c0))("active_item", "Column");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("rows", ctx.rows);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__.DatatableComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2x1bW4tZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    14443: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FullscreenComponent": function FullscreenComponent() {
          return (
            /* binding */
            _FullscreenComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_tables_employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/data/tables/employee */
      6084);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);

      var _c0 = function _c0() {
        return ["Tables", "Data Tables"];
      };

      var _FullscreenComponent = /*#__PURE__*/function () {
        function _FullscreenComponent() {
          _classCallCheck(this, _FullscreenComponent);

          this.employee = [];
          this.employee = _shared_data_tables_employee__WEBPACK_IMPORTED_MODULE_0__.employeeDB.emp;
        }

        _createClass(_FullscreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FullscreenComponent;
      }();

      _FullscreenComponent.??fac = function FullscreenComponent_Factory(t) {
        return new (t || _FullscreenComponent)();
      };

      _FullscreenComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _FullscreenComponent,
        selectors: [["app-fullscreen"]],
        decls: 16,
        vars: 15,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "custom-datatable"], [1, "bootstrap", "fullscreen", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["name", "Id", 3, "width"], ["name", "Name", 3, "width"], ["name", "Gender"], ["name", "Age"], ["name", "City", "prop", "address.city", 3, "width"], ["name", "State", "prop", "address.state", 3, "width"]],
        template: function FullscreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Fullscreen Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "ngx-datatable", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "ngx-datatable-column", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "ngx-datatable-column", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "ngx-datatable-column", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "Fullscreen")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](14, _c0))("active_item", "Fullscreen");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", false)("scrollbarH", false)("rows", ctx.employee);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("width", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("width", 300);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("width", 300);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("width", 300);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsc2NyZWVuLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    69378: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InlineEditComponent": function InlineEditComponent() {
          return (
            /* binding */
            _InlineEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _shared_data_tables_company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/data/tables/company */
      44259);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      function InlineEditComponent_ng_template_12_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("dblclick", function InlineEditComponent_ng_template_12_span_0_Template_span_dblclick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r10);

            var rowIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().rowIndex;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r9.editing[rowIndex_r4 + "-name"] = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var value_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", value_r5, " ");
        }
      }

      function InlineEditComponent_ng_template_12_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("blur", function InlineEditComponent_ng_template_12_input_1_Template_input_blur_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r15);

            var rowIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().rowIndex;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r13.updateValue($event, "name", rowIndex_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var value_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", value_r5);
        }
      }

      function InlineEditComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](0, InlineEditComponent_ng_template_12_span_0_Template, 2, 1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, InlineEditComponent_ng_template_12_input_1_Template, 1, 1, "input", 14);
        }

        if (rf & 2) {
          var rowIndex_r4 = ctx.rowIndex;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r1.editing[rowIndex_r4 + "-name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.editing[rowIndex_r4 + "-name"]);
        }
      }

      function InlineEditComponent_ng_template_14_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("dblclick", function InlineEditComponent_ng_template_14_span_0_Template_span_dblclick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r23);

            var rowIndex_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().rowIndex;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r22.editing[rowIndex_r17 + "-gender"] = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var value_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", value_r19, " ");
        }
      }

      function InlineEditComponent_ng_template_14_select_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("blur", function InlineEditComponent_ng_template_14_select_1_Template_select_blur_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r27);

            var rowIndex_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().rowIndex;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r26.editing[rowIndex_r17 + "-gender"] = false;
          })("change", function InlineEditComponent_ng_template_14_select_1_Template_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r27);

            var rowIndex_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().rowIndex;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r29.updateValue($event, "gender", rowIndex_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var value_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", value_r19);
        }
      }

      function InlineEditComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](0, InlineEditComponent_ng_template_14_span_0_Template, 2, 1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, InlineEditComponent_ng_template_14_select_1_Template, 5, 1, "select", 17);
        }

        if (rf & 2) {
          var rowIndex_r17 = ctx.rowIndex;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r2.editing[rowIndex_r17 + "-gender"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r2.editing[rowIndex_r17 + "-gender"]);
        }
      }

      function InlineEditComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](0);
        }

        if (rf & 2) {
          var value_r32 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", value_r32, " ");
        }
      }

      var _c0 = function _c0() {
        return ["Tables", "Data Tables"];
      };

      var _InlineEditComponent = /*#__PURE__*/function () {
        function _InlineEditComponent() {
          _classCallCheck(this, _InlineEditComponent);

          this.editing = {};
          this.rows = [];
          this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.ColumnMode;
          this.rows = _shared_data_tables_company__WEBPACK_IMPORTED_MODULE_0__.companyDB.data;
        }

        _createClass(_InlineEditComponent, [{
          key: "updateValue",
          value: function updateValue(event, cell, rowIndex) {
            this.editing[rowIndex + '-' + cell] = false;
            this.rows[rowIndex][cell] = event.target.value;
            this.rows = _toConsumableArray(this.rows);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _InlineEditComponent;
      }();

      _InlineEditComponent.??fac = function InlineEditComponent_Factory(t) {
        return new (t || _InlineEditComponent)();
      };

      _InlineEditComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _InlineEditComponent,
        selectors: [["app-inline-edit"]],
        decls: 17,
        vars: 7,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "custom-datatable"], ["headerHeight", "50", "footerHeight", "50", "rowHeight", "auto", 1, "bootstrap", 3, "limit", "columnMode", "rows"], ["mydatatable", ""], ["name", "Name"], ["ngx-datatable-cell-template", ""], ["name", "Gender"], ["name", "Age"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], ["autofocus", "", "type", "text", 3, "value", "blur"], [3, "value", "blur", "change", 4, "ngIf"], [3, "value", "blur", "change"], ["value", "male"], ["value", "female"]],
        template: function InlineEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Inline Editable Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "ngx-datatable", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "ngx-datatable-column", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, InlineEditComponent_ng_template_12_Template, 2, 2, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, InlineEditComponent_ng_template_14_Template, 2, 2, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, InlineEditComponent_ng_template_16_Template, 1, 1, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "Inline Edit")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](6, _c0))("active_item", "Inline Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("limit", 5)("columnMode", ctx.ColumnMode.force)("rows", ctx.rows);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??NgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmxpbmUtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    13460: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PagingComponent": function PagingComponent() {
          return (
            /* binding */
            _PagingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_tables_company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/data/tables/company */
      44259);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);

      var _c0 = function _c0() {
        return ["Tables", "Data Tables"];
      };

      var _c1 = function _c1() {
        return {
          name: "Name"
        };
      };

      var _c2 = function _c2() {
        return {
          name: "Gender"
        };
      };

      var _c3 = function _c3() {
        return {
          name: "Company"
        };
      };

      var _c4 = function _c4(a0, a1, a2) {
        return [a0, a1, a2];
      };

      var _PagingComponent = /*#__PURE__*/function () {
        function _PagingComponent() {
          _classCallCheck(this, _PagingComponent);

          this.company = [];
          this.company = _shared_data_tables_company__WEBPACK_IMPORTED_MODULE_0__.companyDB.data;
        }

        _createClass(_PagingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PagingComponent;
      }();

      _PagingComponent.??fac = function PagingComponent_Factory(t) {
        return new (t || _PagingComponent)();
      };

      _PagingComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _PagingComponent,
        selectors: [["app-paging"]],
        decls: 10,
        vars: 18,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "custom-datatable"], [1, "bootstrap", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"]],
        template: function PagingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Paging Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "ngx-datatable", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "Paging")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](10, _c0))("active_item", "Paging");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("rows", ctx.company)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction3"](14, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](11, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](12, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](13, _c3)))("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmcuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    89466: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SelectionComponent": function SelectionComponent() {
          return (
            /* binding */
            _SelectionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_tables_company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/data/tables/company */
      44259);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);

      var _c0 = function _c0() {
        return ["Tables", "Data Tables"];
      };

      var _SelectionComponent = /*#__PURE__*/function () {
        function _SelectionComponent() {
          _classCallCheck(this, _SelectionComponent);

          this.company = [];
          this.selected = [];
          this.company = _shared_data_tables_company__WEBPACK_IMPORTED_MODULE_0__.companyDB.data;
        }

        _createClass(_SelectionComponent, [{
          key: "onSelect",
          value: function onSelect(_ref) {
            var _this$selected;

            var selected = _ref.selected;
            this.selected.splice(0, this.selected.length);

            (_this$selected = this.selected).push.apply(_this$selected, _toConsumableArray(selected));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SelectionComponent;
      }();

      _SelectionComponent.??fac = function SelectionComponent_Factory(t) {
        return new (t || _SelectionComponent)();
      };

      _SelectionComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _SelectionComponent,
        selectors: [["app-selection"]],
        decls: 14,
        vars: 20,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "custom-datatable"], [1, "bootstrap", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "selected", "selectionType", "selectAllRowsOnPage", "select"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable", "headerCheckboxable", "checkboxable"], ["name", "Name"], ["name", "Gender"], ["name", "Company"]],
        template: function SelectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Selection Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "ngx-datatable", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("select", function SelectionComponent_Template_ngx_datatable_select_9_listener($event) {
              return ctx.onSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "ngx-datatable-column", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "ngx-datatable-column", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "ngx-datatable-column", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "Selection")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](19, _c0))("active_item", "Selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("rows", ctx.company)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 5)("selected", ctx.selected)("selectionType", "checkbox")("selectAllRowsOnPage", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("width", 30)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false)("headerCheckboxable", true)("checkboxable", true);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    98106: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SortComponent": function SortComponent() {
          return (
            /* binding */
            _SortComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _shared_data_tables_company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/data/tables/company */
      44259);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);

      var _c0 = function _c0() {
        return ["Tables", "Data Tables"];
      };

      var _SortComponent = /*#__PURE__*/function () {
        function _SortComponent() {
          _classCallCheck(this, _SortComponent);

          this.rows = [];
          this.columns = [{
            name: 'Company'
          }, {
            name: 'Name'
          }, {
            name: 'Gender'
          }];
          this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__.ColumnMode;
          this.SortType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__.SortType;
          this.rows = _shared_data_tables_company__WEBPACK_IMPORTED_MODULE_0__.companyDB.data;
        }

        _createClass(_SortComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SortComponent;
      }();

      _SortComponent.??fac = function SortComponent_Factory(t) {
        return new (t || _SortComponent)();
      };

      _SortComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: _SortComponent,
        selectors: [["app-sort"]],
        decls: 10,
        vars: 12,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "custom-datatable"], [1, "bootstrap", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"]],
        template: function SortComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Sort Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "ngx-datatable", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("title", "Sort")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](11, _c0))("active_item", "Sort");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("rows", ctx.rows)("columns", ctx.columns)("sortType", ctx.SortType.multi)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("limit", 10);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__.DatatableComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    71535: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TableRoutingModule": function TableRoutingModule() {
          return (
            /* binding */
            _TableRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _bootstrap_tables_basic_basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bootstrap-tables/basic/basic.component */
      60102);
      /* harmony import */


      var _bootstrap_tables_sizing_sizing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bootstrap-tables/sizing/sizing.component */
      87436);
      /* harmony import */


      var _bootstrap_tables_border_border_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bootstrap-tables/border/border.component */
      24352);
      /* harmony import */


      var _bootstrap_tables_styling_styling_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bootstrap-tables/styling/styling.component */
      70271);
      /* harmony import */


      var _bootstrap_tables_table_components_table_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bootstrap-tables/table-components/table-components.component */
      82871);
      /* harmony import */


      var _data_tables_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./data-tables/fullscreen/fullscreen.component */
      14443);
      /* harmony import */


      var _data_tables_paging_paging_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./data-tables/paging/paging.component */
      13460);
      /* harmony import */


      var _data_tables_selection_selection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./data-tables/selection/selection.component */
      89466);
      /* harmony import */


      var _data_tables_column_filter_column_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./data-tables/column-filter/column-filter.component */
      42000);
      /* harmony import */


      var _data_tables_basic_data_table_basic_data_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./data-tables/basic-data-table/basic-data-table.component */
      46415);
      /* harmony import */


      var _data_tables_sort_sort_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./data-tables/sort/sort.component */
      98106);
      /* harmony import */


      var _data_tables_inline_edit_inline_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./data-tables/inline-edit/inline-edit.component */
      69378);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: "bootstrap-tables",
          children: [{
            path: 'basic',
            component: _bootstrap_tables_basic_basic_component__WEBPACK_IMPORTED_MODULE_0__.BasicComponent
          }, {
            path: 'sizing',
            component: _bootstrap_tables_sizing_sizing_component__WEBPACK_IMPORTED_MODULE_1__.SizingComponent
          }, {
            path: 'border',
            component: _bootstrap_tables_border_border_component__WEBPACK_IMPORTED_MODULE_2__.BorderComponent
          }, {
            path: 'styling',
            component: _bootstrap_tables_styling_styling_component__WEBPACK_IMPORTED_MODULE_3__.StylingComponent
          }, {
            path: 'table-components',
            component: _bootstrap_tables_table_components_table_components_component__WEBPACK_IMPORTED_MODULE_4__.TableComponentsComponent
          }]
        }, {
          path: "datatables",
          children: [{
            path: 'basic',
            component: _data_tables_basic_data_table_basic_data_table_component__WEBPACK_IMPORTED_MODULE_9__.BasicDataTableComponent
          }, {
            path: 'fullscreen',
            component: _data_tables_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__.FullscreenComponent
          }, {
            path: 'paging',
            component: _data_tables_paging_paging_component__WEBPACK_IMPORTED_MODULE_6__.PagingComponent
          }, {
            path: 'selection',
            component: _data_tables_selection_selection_component__WEBPACK_IMPORTED_MODULE_7__.SelectionComponent
          }, {
            path: 'column-filter',
            component: _data_tables_column_filter_column_filter_component__WEBPACK_IMPORTED_MODULE_8__.ColumnFilterComponent
          }, {
            path: 'sort',
            component: _data_tables_sort_sort_component__WEBPACK_IMPORTED_MODULE_10__.SortComponent
          }, {
            path: 'inline-edit',
            component: _data_tables_inline_edit_inline_edit_component__WEBPACK_IMPORTED_MODULE_11__.InlineEditComponent
          }]
        }]
      }];

      var _TableRoutingModule = function _TableRoutingModule() {
        _classCallCheck(this, _TableRoutingModule);
      };

      _TableRoutingModule.??fac = function TableRoutingModule_Factory(t) {
        return new (t || _TableRoutingModule)();
      };

      _TableRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineNgModule"]({
        type: _TableRoutingModule
      });
      _TableRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["????setNgModuleScope"](_TableRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    61020: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TableModule": function TableModule() {
          return (
            /* binding */
            _TableModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/shared.module */
      44466);
      /* harmony import */


      var _bootstrap_tables_basic_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bootstrap-tables/basic/basic.component */
      60102);
      /* harmony import */


      var _bootstrap_tables_border_border_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bootstrap-tables/border/border.component */
      24352);
      /* harmony import */


      var _bootstrap_tables_sizing_sizing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bootstrap-tables/sizing/sizing.component */
      87436);
      /* harmony import */


      var _bootstrap_tables_styling_styling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bootstrap-tables/styling/styling.component */
      70271);
      /* harmony import */


      var _bootstrap_tables_table_components_table_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bootstrap-tables/table-components/table-components.component */
      82871);
      /* harmony import */


      var _table_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./table-routing.module */
      71535);
      /* harmony import */


      var _data_tables_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./data-tables/fullscreen/fullscreen.component */
      14443);
      /* harmony import */


      var _data_tables_paging_paging_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./data-tables/paging/paging.component */
      13460);
      /* harmony import */


      var _data_tables_selection_selection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./data-tables/selection/selection.component */
      89466);
      /* harmony import */


      var _data_tables_column_filter_column_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./data-tables/column-filter/column-filter.component */
      42000);
      /* harmony import */


      var _data_tables_basic_data_table_basic_data_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./data-tables/basic-data-table/basic-data-table.component */
      46415);
      /* harmony import */


      var _data_tables_sort_sort_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./data-tables/sort/sort.component */
      98106);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _data_tables_inline_edit_inline_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./data-tables/inline-edit/inline-edit.component */
      69378);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TableModule = function _TableModule() {
        _classCallCheck(this, _TableModule);
      };

      _TableModule.??fac = function TableModule_Factory(t) {
        return new (t || _TableModule)();
      };

      _TableModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineNgModule"]({
        type: _TableModule
      });
      _TableModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _table_routing_module__WEBPACK_IMPORTED_MODULE_6__.TableRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.NgxDatatableModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["????setNgModuleScope"](_TableModule, {
          declarations: [_bootstrap_tables_basic_basic_component__WEBPACK_IMPORTED_MODULE_1__.BasicComponent, _bootstrap_tables_sizing_sizing_component__WEBPACK_IMPORTED_MODULE_3__.SizingComponent, _bootstrap_tables_border_border_component__WEBPACK_IMPORTED_MODULE_2__.BorderComponent, _bootstrap_tables_styling_styling_component__WEBPACK_IMPORTED_MODULE_4__.StylingComponent, _bootstrap_tables_table_components_table_components_component__WEBPACK_IMPORTED_MODULE_5__.TableComponentsComponent, _data_tables_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_7__.FullscreenComponent, _data_tables_paging_paging_component__WEBPACK_IMPORTED_MODULE_8__.PagingComponent, _data_tables_selection_selection_component__WEBPACK_IMPORTED_MODULE_9__.SelectionComponent, _data_tables_column_filter_column_filter_component__WEBPACK_IMPORTED_MODULE_10__.ColumnFilterComponent, _data_tables_basic_data_table_basic_data_table_component__WEBPACK_IMPORTED_MODULE_11__.BasicDataTableComponent, _data_tables_sort_sort_component__WEBPACK_IMPORTED_MODULE_12__.SortComponent, _data_tables_inline_edit_inline_edit_component__WEBPACK_IMPORTED_MODULE_13__.InlineEditComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _table_routing_module__WEBPACK_IMPORTED_MODULE_6__.TableRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.NgxDatatableModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
        });
      })();
      /***/

    },

    /***/
    44259: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "companyDB": function companyDB() {
          return (
            /* binding */
            _companyDB
          );
        }
        /* harmony export */

      });

      var _companyDB = function _companyDB() {
        _classCallCheck(this, _companyDB);
      };

      _companyDB.data = [{
        "name": "Ethel Price",
        "gender": "female",
        "company": "Johnson, Johnson and Partners, LLC CMP DDC",
        "age": 22
      }, {
        "name": "Claudine Neal",
        "gender": "female",
        "company": "Sealoud",
        "age": 55
      }, {
        "name": "Beryl Rice",
        "gender": "female",
        "company": "Velity",
        "age": 67
      }, {
        "name": "Wilder Gonzales",
        "gender": "male",
        "company": "Geekko"
      }, {
        "name": "Georgina Schultz",
        "gender": "female",
        "company": "Suretech"
      }, {
        "name": "Carroll Buchanan",
        "gender": "male",
        "company": "Ecosys"
      }, {
        "name": "Valarie Atkinson",
        "gender": "female",
        "company": "Hopeli"
      }, {
        "name": "Schroeder Mathews",
        "gender": "male",
        "company": "Polarium"
      }, {
        "name": "Lynda Mendoza",
        "gender": "female",
        "company": "Dogspa"
      }, {
        "name": "Sarah Massey",
        "gender": "female",
        "company": "Bisba"
      }, {
        "name": "Robles Boyle",
        "gender": "male",
        "company": "Comtract"
      }, {
        "name": "Evans Hickman",
        "gender": "male",
        "company": "Parleynet"
      }, {
        "name": "Dawson Barber",
        "gender": "male",
        "company": "Dymi"
      }, {
        "name": "Bruce Strong",
        "gender": "male",
        "company": "Xyqag"
      }, {
        "name": "Nellie Whitfield",
        "gender": "female",
        "company": "Exospace"
      }, {
        "name": "Jackson Macias",
        "gender": "male",
        "company": "Aquamate"
      }, {
        "name": "Pena Pena",
        "gender": "male",
        "company": "Quarx"
      }, {
        "name": "Lelia Gates",
        "gender": "female",
        "company": "Proxsoft"
      }, {
        "name": "Letitia Vasquez",
        "gender": "female",
        "company": "Slumberia"
      }, {
        "name": "Trevino Moreno",
        "gender": "male",
        "company": "Conjurica"
      }, {
        "name": "Barr Page",
        "gender": "male",
        "company": "Apex"
      }, {
        "name": "Kirkland Merrill",
        "gender": "male",
        "company": "Utara"
      }, {
        "name": "Blanche Conley",
        "gender": "female",
        "company": "Imkan"
      }];
      /***/
    },

    /***/
    6084: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "employeeDB": function employeeDB() {
          return (
            /* binding */
            _employeeDB
          );
        }
        /* harmony export */

      });

      var _employeeDB = function _employeeDB() {
        _classCallCheck(this, _employeeDB);
      };

      _employeeDB.emp = [{
        "id": 0,
        "name": "Ramsey Cummings",
        "gender": "male",
        "age": 52,
        "address": {
          "state": "South Carolina",
          "city": "Glendale"
        }
      }, {
        "id": 1,
        "name": "Stefanie Huff",
        "gender": "female",
        "age": 70,
        "address": {
          "state": "Arizona",
          "city": "Beaverdale"
        }
      }, {
        "id": 2,
        "name": "Mabel David",
        "gender": "female",
        "age": 52,
        "address": {
          "state": "New Mexico",
          "city": "Grazierville"
        }
      }, {
        "id": 3,
        "name": "Frank Bradford",
        "gender": "male",
        "age": 61,
        "address": {
          "state": "Wisconsin",
          "city": "Saranap"
        }
      }, {
        "id": 4,
        "name": "Forbes Levine",
        "gender": "male",
        "age": 34,
        "address": {
          "state": "Vermont",
          "city": "Norris"
        }
      }, {
        "id": 5,
        "name": "Santiago Mcclain",
        "gender": "male",
        "age": 38,
        "address": {
          "state": "Montana",
          "city": "Bordelonville"
        }
      }, {
        "id": 6,
        "name": "Merritt Booker",
        "gender": "male",
        "age": 33,
        "address": {
          "state": "New Jersey",
          "city": "Aguila"
        }
      }, {
        "id": 7,
        "name": "Oconnor Wade",
        "gender": "male",
        "age": 18,
        "address": {
          "state": "Virginia",
          "city": "Kenmar"
        }
      }, {
        "id": 8,
        "name": "Leigh Beasley",
        "gender": "female",
        "age": 53,
        "address": {
          "state": "Texas",
          "city": "Alfarata"
        }
      }, {
        "id": 9,
        "name": "Johns Wood",
        "gender": "male",
        "age": 52,
        "address": {
          "state": "Maine",
          "city": "Witmer"
        }
      }, {
        "id": 10,
        "name": "Thompson Hays",
        "gender": "male",
        "age": 38,
        "address": {
          "state": "Nevada",
          "city": "Kipp"
        }
      }, {
        "id": 11,
        "name": "Hallie Mack",
        "gender": "female",
        "age": 19,
        "address": {
          "state": "Minnesota",
          "city": "Darrtown"
        }
      }, {
        "id": 12,
        "name": "Houston Santos",
        "gender": "male",
        "age": 24,
        "address": {
          "state": "Georgia",
          "city": "Crucible"
        }
      }, {
        "id": 13,
        "name": "Brandy Savage",
        "gender": "female",
        "age": 65,
        "address": {
          "state": "Idaho",
          "city": "Nord"
        }
      }, {
        "id": 14,
        "name": "Finch Barnett",
        "gender": "male",
        "age": 22,
        "address": {
          "state": "Ohio",
          "city": "Osmond"
        }
      }, {
        "id": 15,
        "name": "Nicole Crosby",
        "gender": "female",
        "age": 77,
        "address": {
          "state": "Kentucky",
          "city": "Fairfield"
        }
      }, {
        "id": 16,
        "name": "Carrie Mcconnell",
        "gender": "female",
        "age": 26,
        "address": {
          "state": "South Dakota",
          "city": "Waikele"
        }
      }, {
        "id": 17,
        "name": "Ann James",
        "gender": "female",
        "age": 37,
        "address": {
          "state": "North Dakota",
          "city": "Siglerville"
        }
      }, {
        "id": 18,
        "name": "Becky Sanford",
        "gender": "female",
        "age": 48,
        "address": {
          "state": "Massachusetts",
          "city": "Celeryville"
        }
      }, {
        "id": 19,
        "name": "Kathryn Rios",
        "gender": "female",
        "age": 39,
        "address": {
          "state": "Delaware",
          "city": "Kylertown"
        }
      }, {
        "id": 20,
        "name": "Dotson Vaughn",
        "gender": "male",
        "age": 68,
        "address": {
          "state": "Arkansas",
          "city": "Monument"
        }
      }, {
        "id": 21,
        "name": "Wright Kline",
        "gender": "male",
        "age": 41,
        "address": {
          "state": "Missouri",
          "city": "Bynum"
        }
      }, {
        "id": 22,
        "name": "Lula Morgan",
        "gender": "female",
        "age": 52,
        "address": {
          "state": "Oregon",
          "city": "Mapletown"
        }
      }, {
        "id": 23,
        "name": "Kay Mendez",
        "gender": "female",
        "age": 50,
        "address": {
          "state": "Michigan",
          "city": "Twilight"
        }
      }, {
        "id": 24,
        "name": "Mona Maddox",
        "gender": "female",
        "age": 35,
        "address": {
          "state": "Wyoming",
          "city": "Wilmington"
        }
      }, {
        "id": 25,
        "name": "Fulton Velez",
        "gender": "male",
        "age": 66,
        "address": {
          "state": "Colorado",
          "city": "Loretto"
        }
      }, {
        "id": 26,
        "name": "Ericka Craft",
        "gender": "female",
        "age": 80,
        "address": {
          "state": "Nebraska",
          "city": "Beaulieu"
        }
      }, {
        "id": 27,
        "name": "Richmond Rodriguez",
        "gender": "male",
        "age": 62,
        "address": {
          "state": "Rhode Island",
          "city": "Vallonia"
        }
      }, {
        "id": 28,
        "name": "Olsen Farmer",
        "gender": "male",
        "age": 45,
        "address": {
          "state": "Connecticut",
          "city": "Romeville"
        }
      }, {
        "id": 29,
        "name": "Sophie Austin",
        "gender": "female",
        "age": 59,
        "address": {
          "state": "New Hampshire",
          "city": "Gorst"
        }
      }, {
        "id": 30,
        "name": "Alta Olsen",
        "gender": "female",
        "age": 58,
        "address": {
          "state": "Florida",
          "city": "Drytown"
        }
      }, {
        "id": 31,
        "name": "Katherine Chavez",
        "gender": "female",
        "age": 20,
        "address": {
          "state": "Mississippi",
          "city": "Trucksville"
        }
      }, {
        "id": 32,
        "name": "Yvette Myers",
        "gender": "female",
        "age": 69,
        "address": {
          "state": "Washington",
          "city": "Bangor"
        }
      }, {
        "id": 33,
        "name": "Nguyen Dean",
        "gender": "male",
        "age": 58,
        "address": {
          "state": "Alaska",
          "city": "Caroline"
        }
      }, {
        "id": 34,
        "name": "Lauri Irwin",
        "gender": "female",
        "age": 23,
        "address": {
          "state": "Hawaii",
          "city": "Takilma"
        }
      }, {
        "id": 35,
        "name": "David Mclean",
        "gender": "male",
        "age": 49,
        "address": {
          "state": "Louisiana",
          "city": "Harviell"
        }
      }, {
        "id": 36,
        "name": "Tisha Cotton",
        "gender": "female",
        "age": 78,
        "address": {
          "state": "Illinois",
          "city": "Camas"
        }
      }, {
        "id": 37,
        "name": "Eliza Conrad",
        "gender": "female",
        "age": 82,
        "address": {
          "state": "Utah",
          "city": "Gwynn"
        }
      }, {
        "id": 38,
        "name": "Bolton Cooley",
        "gender": "male",
        "age": 44,
        "address": {
          "state": "Oklahoma",
          "city": "Glidden"
        }
      }, {
        "id": 39,
        "name": "Crosby Osborn",
        "gender": "male",
        "age": 44,
        "address": {
          "state": "Alabama",
          "city": "Buxton"
        }
      }, {
        "id": 40,
        "name": "Reese Tran",
        "gender": "male",
        "age": 53,
        "address": {
          "state": "Maryland",
          "city": "Kempton"
        }
      }, {
        "id": 41,
        "name": "Evangeline Larson",
        "gender": "female",
        "age": 49,
        "address": {
          "state": "Pennsylvania",
          "city": "Mayfair"
        }
      }, {
        "id": 42,
        "name": "Jimenez Frazier",
        "gender": "male",
        "age": 23,
        "address": {
          "state": "California",
          "city": "Ronco"
        }
      }, {
        "id": 43,
        "name": "Conner Tate",
        "gender": "male",
        "age": 39,
        "address": {
          "state": "West Virginia",
          "city": "Eastvale"
        }
      }, {
        "id": 44,
        "name": "Avery Rosales",
        "gender": "male",
        "age": 71,
        "address": {
          "state": "Tennessee",
          "city": "Cascades"
        }
      }, {
        "id": 45,
        "name": "Burris Marquez",
        "gender": "male",
        "age": 32,
        "address": {
          "state": "North Carolina",
          "city": "Chamizal"
        }
      }, {
        "id": 46,
        "name": "Hoover Cardenas",
        "gender": "male",
        "age": 65,
        "address": {
          "state": "Kansas",
          "city": "Joes"
        }
      }, {
        "id": 47,
        "name": "Moran Gomez",
        "gender": "male",
        "age": 40,
        "address": {
          "state": "New York",
          "city": "Knowlton"
        }
      }, {
        "id": 48,
        "name": "Boyd Juarez",
        "gender": "male",
        "age": 33,
        "address": {
          "state": "Iowa",
          "city": "Hemlock"
        }
      }, {
        "id": 49,
        "name": "John Mooney",
        "gender": "female",
        "age": 73,
        "address": {
          "state": "Rhode Island",
          "city": "Gardners"
        }
      }, {
        "id": 50,
        "name": "Avery Crawford",
        "gender": "male",
        "age": 39,
        "address": {
          "state": "Hawaii",
          "city": "Woodruff"
        }
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_table_table_module_ts-es5.js.map