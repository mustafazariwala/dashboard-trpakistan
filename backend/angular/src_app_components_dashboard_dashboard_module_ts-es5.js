(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_dashboard_dashboard_module_ts"], {
    /***/
    39004: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CounsellingComponent": function CounsellingComponent() {
          return (
            /* binding */
            _CounsellingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _c0 = ["container"];

      var _CounsellingComponent = /*#__PURE__*/function () {
        function _CounsellingComponent() {
          _classCallCheck(this, _CounsellingComponent);
        }

        _createClass(_CounsellingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.Calendly.initInlineWidget({
              url: 'https://calendly.com/trpakistan/al-tijaarat-al-raabehah-counselling',
              parentElement: this.container.nativeElement
            });
          }
        }]);

        return _CounsellingComponent;
      }();

      _CounsellingComponent.??fac = function CounsellingComponent_Factory(t) {
        return new (t || _CounsellingComponent)();
      };

      _CounsellingComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _CounsellingComponent,
        selectors: [["app-counselling"]],
        viewQuery: function CounsellingComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.container = _t.first);
          }
        },
        decls: 1,
        vars: 0,
        consts: [["data-auto-load", "false", 1, "calendly-inline-widget", 2, "min-width", "320px", "height", "580px"]],
        template: function CounsellingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 0);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vuc2VsbGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    58759: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardRoutingModule": function DashboardRoutingModule() {
          return (
            /* binding */
            _DashboardRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _counselling_counselling_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./counselling/counselling.component */
      39004);
      /* harmony import */


      var _default_default_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./default/default.component */
      48960);
      /* harmony import */


      var _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ecommerce/ecommerce.component */
      25019);
      /* harmony import */


      var _muwasaat_muwasaat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./muwasaat/muwasaat.component */
      91465);
      /* harmony import */


      var _resources_resources_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./resources/resources.component */
      32317);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: 'default',
          component: _default_default_component__WEBPACK_IMPORTED_MODULE_1__.DefaultComponent
        }, {
          path: 'ecommerce',
          component: _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_2__.EcommerceComponent
        }, {
          path: 'businessmuwasaat',
          component: _muwasaat_muwasaat_component__WEBPACK_IMPORTED_MODULE_3__.MuwasaatComponent
        }, {
          path: 'counselling',
          component: _counselling_counselling_component__WEBPACK_IMPORTED_MODULE_0__.CounsellingComponent
        }, {
          path: 'resources',
          component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_4__.ResourcesComponent
        }]
      }];

      var _DashboardRoutingModule = function _DashboardRoutingModule() {
        _classCallCheck(this, _DashboardRoutingModule);
      };

      _DashboardRoutingModule.??fac = function DashboardRoutingModule_Factory(t) {
        return new (t || _DashboardRoutingModule)();
      };

      _DashboardRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: _DashboardRoutingModule
      });
      _DashboardRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](_DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    75649: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardModule": function DashboardModule() {
          return (
            /* binding */
            _DashboardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      22723);
      /* harmony import */


      var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-count-to */
      74848);
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-chartist */
      14735);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-charts */
      86178);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      5668);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/shared.module */
      44466);
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @agm/core */
      15971);
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      58759);
      /* harmony import */


      var _default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./default/default.component */
      48960);
      /* harmony import */


      var _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ecommerce/ecommerce.component */
      25019);
      /* harmony import */


      var _muwasaat_muwasaat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./muwasaat/muwasaat.component */
      91465);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);
      /* harmony import */


      var _counselling_counselling_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./counselling/counselling.component */
      39004);
      /* harmony import */


      var _resources_resources_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./resources/resources.component */
      32317);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DashboardModule = function _DashboardModule() {
        _classCallCheck(this, _DashboardModule);
      };

      _DashboardModule.??fac = function DashboardModule_Factory(t) {
        return new (t || _DashboardModule)();
      };

      _DashboardModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({
        type: _DashboardModule
      });
      _DashboardModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, ng_chartist__WEBPACK_IMPORTED_MODULE_10__.ChartistModule, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.ChartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__.CKEditorModule, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule, _agm_core__WEBPACK_IMPORTED_MODULE_18__.AgmCoreModule.forRoot({
          apiKey: ''
        }), _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](_DashboardModule, {
          declarations: [_default_default_component__WEBPACK_IMPORTED_MODULE_3__.DefaultComponent, _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_4__.EcommerceComponent, _muwasaat_muwasaat_component__WEBPACK_IMPORTED_MODULE_5__.MuwasaatComponent, _counselling_counselling_component__WEBPACK_IMPORTED_MODULE_6__.CounsellingComponent, _resources_resources_component__WEBPACK_IMPORTED_MODULE_7__.ResourcesComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, ng_chartist__WEBPACK_IMPORTED_MODULE_10__.ChartistModule, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.ChartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__.CKEditorModule, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule, _agm_core__WEBPACK_IMPORTED_MODULE_18__.AgmCoreModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule]
        });
      })();
      /***/

    },

    /***/
    48960: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


      var _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/data/dashboard/default */
      70051);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-chartist */
      14735);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      var _c0 = function _c0() {
        return ["Dashboard"];
      };

      var _DefaultComponent = /*#__PURE__*/function () {
        function _DefaultComponent() {
          _classCallCheck(this, _DefaultComponent);

          this.today = new Date();
          this.currentHour = this.today.getHours();
          this.m = this.today.getMinutes();
          this.ampm = this.currentHour >= 12 ? 'PM' : 'AM'; // Charts

          this.currentSales = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.currentSales;
          this.smallBarCharts = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.smallBarCharts;
          this.marketValue = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.marketValue;
          this.knob = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.knob;
          this.knobRight = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.knobRight;
        }

        _createClass(_DefaultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.currentHour >= 0 && this.currentHour < 4) {
              this.greeting = 'Good Night';
            } else if (this.currentHour >= 4 && this.currentHour < 12) {
              this.greeting = 'Good Morning';
            } else if (this.currentHour >= 12 && this.currentHour < 16) {
              this.greeting = 'Good Afternoon';
            } else {
              this.greeting = 'Good Evening';
            }

            this.startTime();
            document.getElementById('knob').append(this.knob);
            document.getElementById('knob-right').append(this.knobRight);
          }
        }, {
          key: "startTime",
          value: function startTime() {
            this.currentHour = this.currentHour % 12;
            this.currentHour = this.currentHour ? this.currentHour : 12;
            this.m = this.checkTime(this.m);
            this.time = this.currentHour + ":" + this.m + ' ' + this.ampm;
          }
        }, {
          key: "checkTime",
          value: function checkTime(i) {
            if (i < 10) {
              i = "0" + i;
            }

            ; // add zero in front of numbers < 10

            return i;
          }
        }]);

        return _DefaultComponent;
      }();

      _DefaultComponent.??fac = function DefaultComponent_Factory(t) {
        return new (t || _DefaultComponent)();
      };

      _DefaultComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: _DefaultComponent,
        selectors: [["app-default"]],
        decls: 427,
        vars: 44,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row", "second-chart-list", "third-news-update"], [1, "col-xl-4", "col-lg-12", "xl-50", "morning-sec", "box-col-12"], [1, "card", "o-hidden", "profile-greeting"], [1, "card-body"], [1, "media"], [1, "badge-groups", "w-100"], [1, "badge", "f-12"], [3, "icon"], ["id", "txt", 1, "ml-1"], [1, "fa", "fa-spin", "fa-cog", "f-14"], [1, "greeting-user", "text-center"], [1, "profile-vector"], ["src", "assets/images/dashboard/welcome.png", "alt", "", 1, "img-fluid"], [1, "f-w-600"], ["id", "greeting"], [1, "right-circle", "ml-1"], [1, "fa", "fa-check-circle", "f-14", "middle"], [1, "whatsnew-btn"], [1, "btn", "btn-primary"], [1, "left-icon"], [1, "fa", "fa-bell"], [1, "col-xl-8", "xl-100", "dashboard-sec", "box-col-12"], [1, "card", "earning-card"], [1, "card-body", "p-0"], [1, "row", "m-0"], [1, "col-xl-3", "earning-content", "p-0"], [1, "row", "m-0", "chart-left"], [1, "col-xl-12", "p-0", "left_side_earning"], [1, "font-roboto"], [1, "col-xl-12", "p-0", "left-btn"], [1, "btn", "btn-gradient"], [1, "col-xl-9", "p-0"], [1, "chart-right"], [1, "row", "m-0", "p-tb"], [1, "col-xl-8", "col-md-8", "col-sm-8", "col-12", "p-0"], [1, "inner-top-left"], [1, "d-flex", "list-unstyled"], [1, "active"], [1, "col-xl-4", "col-md-4", "col-sm-4", "col-12", "p-0", "justify-content-end"], [1, "inner-top-right"], [1, "d-flex", "list-unstyled", "justify-content-end"], [1, "row"], [1, "col-xl-12"], [1, "current-sale-container"], ["id", "chart-currently"], [3, "series", "chart", "dataLabels", "stroke", "xaxis", "markers", "yaxis", "grid", "colors", "fill", "legend", "tooltip"], [1, "row", "border-top", "m-0"], [1, "col-xl-4", "pl-0", "col-md-6", "col-sm-6"], [1, "media", "p-0"], [1, "media-left"], [1, "icofont", "icofont-crown"], [1, "media-body"], [1, "col-xl-4", "col-md-6", "col-sm-6"], [1, "media-left", "bg-secondary"], [1, "icofont", "icofont-heart-alt"], [1, "col-xl-4", "col-md-12", "pr-0"], [1, "icofont", "icofont-cur-dollar"], [1, "col-xl-9", "xl-100", "chart_data_left", "box-col-12"], [1, "card"], [1, "row", "m-0", "chart-main"], [1, "col-xl-3", "col-md-6", "col-sm-6", "p-0", "box-col-6"], [1, "media", "align-items-center"], [1, "hospital-small-chart"], [1, "small-bar"], [1, "small-chart"], [3, "type", "data", "options", "events"], [1, "right-chart-content"], [1, "small-chart1"], [1, "small-chart2"], [1, "media", "border-none", "align-items-center"], [1, "small-chart3"], [1, "col-xl-3", "xl-50", "chart_data_right", "box-col-12"], [1, "media-body", "right-chart-content"], [1, "new-box"], ["id", "knob"], [1, "col-xl-3", "xl-50", "chart_data_right", "second", "d-none"], ["id", "knob-right"], [1, "col-xl-4", "xl-50", "news", "box-col-6"], [1, "card-header"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], [1, "button", "btn", "btn-primary"], [1, "news-update"], [1, "card-footer"], [1, "bottom-btn"], ["href", "#"], [1, "col-xl-4", "xl-50", "appointment-sec", "box-col-6"], [1, "col-xl-12", "appointment"], [1, "card-header", "card-no-border"], [1, "card-body", "pt-0"], [1, "appointment-table", "table-responsive"], [1, "table", "table-bordernone"], ["src", "assets/images/appointment/app-ent.jpg", "alt", "Image description", 1, "img-fluid", "img-40", "rounded-circle", "mb-3"], [1, "status-circle", "bg-primary"], [1, "img-content-box"], [1, "d-block"], [1, "m-0", "font-primary"], [1, "text-right"], [1, "fa", "fa-check-circle", "ml-2"], ["src", "assets/images/appointment/app-ent.jpg", "alt", "Image description", 1, "img-fluid", "img-40", "rounded-circle"], [1, "button", "btn", "btn-danger"], [1, "col-xl-12", "alert-sec"], [1, "card", "bg-img"], [1, "dot-right-icon"], [1, "fa", "fa-ellipsis-h"], [1, "body-bottom"], [1, "col-xl-4", "xl-50", "notification", "box-col-6"], [1, "dot-notification"], [1, "pl-1"], [1, "badge", "badge-secondary"], [1, "d-flex", "mb-3"], [1, "inner-img"], ["src", "assets/images/notification/1.jpg", "alt", "Product-1", 1, "img-fluid"], ["src", "assets/images/notification/2.jpg", "alt", "Product-2", 1, "img-fluid"], [1, "mt-3"], [1, "col-xl-4", "xl-50", "appointment", "box-col-6"], [1, "card-Body"], [1, "radar-chart"], ["id", "marketchart"], [3, "chart", "series", "stroke", "labels", "plotOptions", "colors", "markers", "tooltip", "yaxis"], [1, "col-xl-4", "xl-100", "chat-sec", "box-col-6"], [1, "card", "chat-default"], [1, "media", "media-dashboard"], [1, "mb-0"], [1, "icon-box"], [1, "card-body", "chat-box"], [1, "chat"], [1, "media", "left-side-chat"], [1, "media-body", "d-flex"], [1, "img-profile"], ["src", "assets/images/User.jpg", "alt", "Profile", 1, "img-fluid"], [1, "main-chat"], [1, "message-main"], [1, "sub-message", "message-main"], [1, "f-w-400"], [1, "media", "right-side-chat"], [1, "media-body", "text-right"], [1, "message-main", "pull-right"], [1, "mb-0", "text-left"], [1, "clearfix"], [1, "sub-message", "message-main", "mt-0"], ["id", "wave", 1, "loader-span", "mb-0", "text-left"], [1, "dot"], [1, "input-group"], ["id", "mail", "type", "text", "placeholder", "Type Your Message...", "name", "text", 1, "form-control"], [1, "send-msg"], ["data-feather", "send"], [1, "col-xl-4", "col-lg-12", "xl-50", "calendar-sec", "box-col-6"], [1, "card", "gradient-primary", "o-hidden"], [1, "default-datepicker", "custom-datepicker"], ["data-language", "en", 1, "datepicker-here"], [3, "navigate"], ["dp", ""], [1, "default-dots-stay", "overview-dots", "full-width-dots"], [1, "dots-group"], [1, "dots", "dots1"], [1, "dots", "dots2", "dot-small"], [1, "dots", "dots3", "dot-small"], [1, "dots", "dots4", "dot-medium"], [1, "dots", "dots5", "dot-small"], [1, "dots", "dots6", "dot-small"], [1, "dots", "dots7", "dot-small-semi"], [1, "dots", "dots8", "dot-small-semi"], [1, "dots", "dots9", "dot-small"]],
        template: function DefaultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "app-feather-icons", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](13, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](21, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, " Today's earrning is $405 & your sales increase rate is 3.7 over the last 24 hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, "Whats New !");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](29, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](38, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](40, "Overview of last month");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](43, "$4055.56 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](45, "This Month Earning");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](48, "$1004.11");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](50, "This Month Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](52, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](53, "90%");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](55, "This Month Sale");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](58, "Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "ul", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](66, "Daily");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](68, "Weekly");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](70, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](72, "Yearly");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](74, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](75, "ul", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](77, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](79, "Store");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](80, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](81, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](82, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](83, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](84, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](85, "apx-chart", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](87, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](88, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](89, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](90, "i", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](91, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](92, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](93, "Referral Earning");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](94, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](95, "$5,000.20");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](96, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](97, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](98, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](99, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](100, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](101, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](102, "Cash Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](104, "$2,657.21");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](105, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](106, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](107, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](108, "i", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](109, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](110, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](111, "Sales forcasting");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](113, "$9,478.50 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](114, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](115, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](116, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](117, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](118, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](119, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](120, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](121, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](122, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](123, "x-chartist", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](124, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](125, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](126, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](127, "1001");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](128, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](129, "purchase ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](130, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](131, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](132, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](133, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](134, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](135, "x-chartist", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](136, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](137, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](138, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](139, "1005");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](140, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](141, "Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](142, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](143, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](144, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](145, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](146, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](147, "x-chartist", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](148, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](149, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](150, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](151, "100");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](152, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](153, "Sales return");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](154, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](155, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](156, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](157, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](158, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](159, "x-chartist", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](160, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](161, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](162, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](163, "101");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](164, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](165, "Purchase ret");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](166, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](167, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](168, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](169, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](170, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](171, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](172, "$95,900");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](173, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](174, "Hot");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](175, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](176, "Purchase Order Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](177, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](178, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](179, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](180, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](181, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](182, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](183, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](184, "$95,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](185, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](186, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](187, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](188, "Product Order Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](189, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](190, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](191, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](192, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](193, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](194, "h5", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](195, "News & Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](196, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](197, "select", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](198, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](199, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](200, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](201, "Tomorrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](202, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](203, "Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](204, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](205, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](206, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](207, "36% off For pixel lights Couslations Types.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](208, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](209, "Lorem Ipsum is simply dummy...");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](210, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](211, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](212, "We are produce new product this");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](213, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](214, " Lorem Ipsum is simply text of the printing... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](215, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](216, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](217, "50% off For COVID Couslations Types.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](218, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](219, "Lorem Ipsum is simply dummy...");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](220, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](221, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](222, "a", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](223, "More...");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](224, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](225, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](226, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](227, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](228, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](229, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](230, "h5", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](231, "appointment");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](232, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](233, "select", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](234, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](235, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](236, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](237, "Tomorrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](238, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](239, "Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](240, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](241, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](242, "table", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](243, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](244, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](245, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](246, "img", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](247, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](248, "td", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](249, "span", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](250, "Venter Loren");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](251, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](252, "Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](253, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](254, "p", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](255, "28 Sept");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](256, "td", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](257, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](258, "Done ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](259, "i", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](260, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](261, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](262, "img", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](263, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](264, "td", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](265, "span", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](266, "John Loren");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](267, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](268, "11:00");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](269, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](270, "p", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](271, "22 Sept");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](272, "td", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](273, "div", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](274, "Pending ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](275, "i", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](276, "div", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](277, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](278, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](279, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](280, "h5", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](281, "Alert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](282, "div", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](283, "i", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](284, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](285, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](286, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](287, " 10% off For drama lights Couslations...");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](288, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](289, "Lorem Ipsum is simply dummy...It is a long established fact that a reader will be distracted by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](290, "div", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](291, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](292, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](293, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](294, "h5", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](295, "notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](296, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](297, "select", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](298, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](299, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](300, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](301, "Tomorrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](302, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](303, "Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](304, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](305, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](306, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](307, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](308, "20-04-2020 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](309, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](310, "10:10");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](311, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](312, "Updated Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](313, "span", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](314, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](315, "Quisque a consequat ante sit amet magna...");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](316, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](317, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](318, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](319, "20-04-2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](320, "span", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](321, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](322, "span", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](323, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](324, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](325, " Tello just like your product ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](326, "span", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](327, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](328, "Quisque a consequat ante sit amet magna... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](329, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](330, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](331, "div", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](332, "div", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](333, "img", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](334, "div", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](335, "img", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](336, "span", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](337, "Quisque a consequat ante sit amet magna...");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](338, "div", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](339, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](340, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](341, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](342, "h5", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](343, "Market Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](344, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](345, "select", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](346, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](347, "Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](348, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](349, "Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](350, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](351, "Day");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](352, "div", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](353, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](354, "div", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](355, "apx-chart", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](356, "div", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](357, "div", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](358, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](359, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](360, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](361, "h5", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](362, "Chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](363, "div", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](364, "i", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](365, "div", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](366, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](367, "div", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](368, "div", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](369, "div", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](370, "img", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](371, "div", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](372, "div", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](373, "span", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](374, "Hi deo, Please send me link.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](375, "div", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](376, "span", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](377, "Right Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](378, "p", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](379, "7:28 PM");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](380, "div", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](381, "p", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](382, "7:28 PM");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](383, "div", 139);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](384, "div", 140);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](385, "span", 141);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](386, "How can do for you");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](387, "div", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](388, "div", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](389, "div", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](390, "div", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](391, "img", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](392, "div", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](393, "div", 143);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](394, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](395, "It's urgently");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](396, "p", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](397, "7:28 PM");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](398, "div", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](399, "div", 139);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](400, "div", 140);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](401, "span", 144);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](402, "span", 145);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](403, "span", 145);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](404, "span", 145);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](405, "div", 146);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](406, "input", 147);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](407, "div", 148);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](408, "i", 149);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](409, "div", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](410, "div", 151);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](411, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](412, "div", 152);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](413, "div", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](414, "ngb-datepicker", 154, 155);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("navigate", function DefaultComponent_Template_ngb_datepicker_navigate_414_listener($event) {
              return ctx.date = $event.next;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](416, "span", 156);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](417, "span", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](418, "span", 158);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](419, "span", 159);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](420, "span", 160);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](421, "span", 161);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](422, "span", 162);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](423, "span", 163);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](424, "span", 164);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](425, "span", 165);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](426, "span", 166);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("title", "Default")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](43, _c0))("active_item", "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("icon", "clock");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.time);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.greeting);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("series", ctx.currentSales.series)("chart", ctx.currentSales.chart)("dataLabels", ctx.currentSales.dataLabels)("stroke", ctx.currentSales.stroke)("xaxis", ctx.currentSales.xaxis)("markers", ctx.currentSales.markers)("yaxis", ctx.currentSales.yaxis)("grid", ctx.currentSales.grid)("colors", ctx.currentSales.colors)("fill", ctx.currentSales.fill)("legend", ctx.currentSales.legend)("tooltip", ctx.currentSales.tooltip);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("type", ctx.smallBarCharts.type)("data", ctx.smallBarCharts.data)("options", ctx.smallBarCharts.options)("events", ctx.smallBarCharts.events);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("type", ctx.smallBarCharts.type)("data", ctx.smallBarCharts.data)("options", ctx.smallBarCharts.options)("events", ctx.smallBarCharts.events);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("type", ctx.smallBarCharts.type)("data", ctx.smallBarCharts.data)("options", ctx.smallBarCharts.options)("events", ctx.smallBarCharts.events);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("type", ctx.smallBarCharts.type)("data", ctx.smallBarCharts.data)("options", ctx.smallBarCharts.options)("events", ctx.smallBarCharts.events);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](196);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("chart", ctx.marketValue.chart)("series", ctx.marketValue.series)("stroke", ctx.marketValue.stroke)("labels", ctx.marketValue.labels)("plotOptions", ctx.marketValue.plotOptions)("colors", ctx.marketValue.colors)("markers", ctx.marketValue.markers)("tooltip", ctx.marketValue.tooltip)("yaxis", ctx.marketValue.yaxis);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent, ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__.ChartComponent, ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgSelectMultipleOption"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDatepicker],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    25019: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EcommerceComponent": function EcommerceComponent() {
          return (
            /* binding */
            _EcommerceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/data/dashboard/ecommerce */
      84306);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @agm/core */
      15971);

      var _c0 = function _c0() {
        return ["Dashboard"];
      };

      var _EcommerceComponent = /*#__PURE__*/function () {
        function _EcommerceComponent() {
          _classCallCheck(this, _EcommerceComponent);

          this.todayTotalSale = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.todayTotalSale;
          this.totalVisit = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.totalVisit;
          this.profit = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.profit;
          this.riskFactor = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.riskFactor;
          this.lat_m1 = 20.593683;
          this.lng_m1 = 78.962883;
          this.zoom_m1 = 4;
        }

        _createClass(_EcommerceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _EcommerceComponent;
      }();

      _EcommerceComponent.??fac = function EcommerceComponent_Factory(t) {
        return new (t || _EcommerceComponent)();
      };

      _EcommerceComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _EcommerceComponent,
        selectors: [["app-ecommerce"]],
        decls: 541,
        vars: 53,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row", "size-column"], [1, "col-xl-7", "box-col-12", "xl-100"], [1, "row", "dash-chart"], [1, "col-xl-6", "box-col-6", "col-md-6"], [1, "card", "o-hidden"], [1, "card-header", "card-no-border"], [1, "card-header-right"], [1, "list-unstyled", "card-option"], [1, "fa", "fa-spin", "fa-cog"], [1, "media"], [1, "media-body"], [1, "f-w-500", "font-roboto"], [1, "f-w-700", "font-primary", "ml-2"], [1, "f-w-500", "mb-0", "f-26"], [1, "counter"], [1, "card-body", "p-0"], [1, "profit-card"], ["id", "spaline-chart"], [3, "series", "chart", "dataLabels", "stroke", "xaxis", "yaxis", "tooltip", "legend", "grid", "fill", "colors"], [1, "f-w-500", "mb-0", "f-26", "counter"], [1, "card-body", "pt-0"], [1, "monthly-visit"], ["id", "column-chart"], [3, "series", "chart", "plotOptions", "dataLabels", "xaxis", "yaxis", "grid", "colors"], [1, "col-xl-6", "box-col-6", "col-lg-12", "col-md-6"], [1, "card-body"], [1, "ecommerce-widgets", "media"], [1, "badge", "pill-badge-primary", "ml-3"], [1, "ecommerce-box", "light-bg-primary"], ["aria-hidden", "true", 1, "fa", "fa-heart"], [1, "progress-box"], [1, "progress", "sm-progress-bar", "progress-animate", "app-right", "d-flex", "justify-content-end"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-gradient-primary", 2, "width", "35%"], [1, "font-primary"], [1, "animate-circle"], [1, "col-xl-5", "box-col-12", "xl-50"], [1, "card", "o-hidden", "dash-chart"], [1, "font-primary", "f-w-700", "ml-2"], [1, "negative-container"], ["id", "negative-chart"], [3, "series", "chart", "colors", "plotOptions", "dataLabels", "stroke", "legend", "grid", "yaxis", "tooltip", "xaxis", "fill"], [1, "col-xl-4", "xl-50", "box-col-12"], [1, "card"], [1, "our-product"], [1, "table-responsive"], [1, "table", "table-bordernone"], [1, "f-w-500"], ["src", "assets/images/dashboard-2/product-1.png", "alt", "", 1, "img-fluid", "m-r-15", "rounded-circle"], [1, "font-roboto"], ["src", "assets/images/dashboard-2/product-3.png", "alt", "", 1, "img-fluid", "m-r-15", "rounded-circle"], ["src", "assets/images/dashboard-2/product-4.png", "alt", "", 1, "img-fluid", "m-r-15", "rounded-circle"], ["src", "assets/images/dashboard-2/product-5.png", "alt", "", 1, "img-fluid", "m-r-15", "rounded-circle"], ["src", "assets/images/dashboard-2/product-6.png", "alt", "", 1, "img-fluid", "m-r-15", "rounded-circle"], [1, "dash-map"], ["id", "map"], [3, "latitude", "longitude", "zoom", "scrollwheel", "disableDoubleClickZoom", "mapDraggable", "zoomControl", "mapTypeControl"], [3, "disableAutoPan"], [1, "card-body", "new-update", "pt-0"], [1, "activity-timeline"], [1, "activity-line"], [1, "activity-dot-secondary"], [1, "activity-dot-primary"], [1, "fa", "fa-circle", "circle-dot-secondary", "pull-right"], [1, "fa", "fa-circle", "circle-dot-primary", "pull-right"], [1, "col-xl-3", "risk-col", "xl-100", "box-col-12"], [1, "card", "total-users"], [1, "apex-chart-container", "goal-status", "text-center", "row"], [1, "rate-card", "col-xl-12"], [1, "goal-chart"], ["id", "riskfactorchart"], [3, "series", "chart", "plotOptions", "fill", "stroke", "labels", "colors"], [1, "goal-end-point"], [1, "mt-0", "pt-0"], [1, "f-w-400"], [1, "mb-2", "f-w-400"], [1, "mb-0"], [1, "col-xl-12"], [1, "goal-detail"], [1, "progress", "sm-progress-bar", "progress-animate"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-gradient-primary", 2, "width", "60%"], [1, "goal-detail", "mb-0"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-gradient-primary", 2, "width", "50%"], [1, "btn-download", "btn", "btn-gradient", "f-w-500"], [1, "col-xl-9", "xl-100", "box-col-12"], [1, "row"], [1, "card", "offer-box"], [1, "offer-slider"], ["id", "carouselExampleCaptions", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "selling-slide", "row"], [1, "col-xl-4", "col-md-6"], [1, "d-flex"], [1, "left-content"], [1, "f-w-600"], [1, "badge", "badge-white", "badge-pill"], [1, "badge", "badge-dotted", "badge-pill", "ml-2"], [1, "col-xl-4", "col-md-12"], [1, "center-img"], ["src", "assets/images/dashboard-2/offer-shoes-3.png", "alt", "...", 1, "img-fluid"], [1, "right-content"], [1, "carousel-item"], ["href", "javascript:void(0);", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "javascript:void(0);", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "best-seller-table", "responsive-tbl"], [1, "item"], [1, "table-responsive", "product-list"], [1, "f-22"], [1, "text-right"], [1, "d-inline-block", "align-middle"], ["src", "assets/images/avtar/7.jpg", "alt", "", 1, "img-40", "m-r-15", "rounded-circle", "align-top"], [1, "status-circle", "bg-primary"], [1, "d-inline-block"], [1, "flag-icon", "flag-icon-gb"], [1, "label"], [1, "fa", "fa-check-circle"], ["src", "assets/images/avtar/4.jpg", "alt", "", 1, "img-40", "m-r-15", "rounded-circle", "align-top"], [1, "flag-icon", "flag-icon-us"], ["src", "assets/images/avtar/16.jpg", "alt", "", 1, "img-40", "m-r-15", "rounded-circle", "align-top"], [1, "flag-icon", "flag-icon-za"], ["src", "assets/images/avtar/11.jpg", "alt", "", 1, "img-40", "m-r-15", "rounded-circle", "align-top"], [1, "flag-icon", "flag-icon-at"], ["src", "assets/images/avtar/3.jpg", "alt", "", 1, "img-40", "m-r-15", "rounded-circle", "align-top"], [1, "flag-icon", "flag-icon-br"]],
        template: function EcommerceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Today Total sale");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "89.21%");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "3000.56");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](28, "apx-chart", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "Today Total visits");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "35.00%");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "h4", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](44, "9,050");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](48, "apx-chart", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](55, "Our Sale Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](59, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](61, "7454.25");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](63, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](70, "Today Stock value");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](72, "Hot");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](74, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](75, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](77, "9000.04");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](79, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](80, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](81, "88%");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](82, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](84, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](85, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](87, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](89, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](90, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](91, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](92, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](93, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](94, "Total Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](95, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](96, "99.00%");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](97, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](98, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](99, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](100, "3000.56");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](101, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](102, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](103, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](104, "apx-chart", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](105, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](106, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](107, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](108, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](109, "New Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](110, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](111, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](112, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](113, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](114, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](115, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](116, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](117, "table", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](118, "tbody", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](119, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](120, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](121, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](122, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](123, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](124, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](125, "Hike Shoes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](126, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](127, "100 item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](128, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](129, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](130, "coupon code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](131, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](132, "PIX001");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](134, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](135, "-51%");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](136, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](137, "$99.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](138, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](139, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](140, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](141, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](142, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](143, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](144, "Tree Pot");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](145, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](146, "105 item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](147, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](148, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](149, "coupon code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](150, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](151, "PIX002");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](152, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](153, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](154, "-78%");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](155, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](156, "$66.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](157, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](159, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](160, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](161, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](162, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](163, "Bag");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](164, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](165, "604 item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](166, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](167, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](168, "coupon code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](169, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](170, "PIX003");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](171, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](172, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](173, "-04%");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](174, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](175, "$116.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](176, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](178, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](179, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](180, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](181, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](182, "Wtach");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](183, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](184, "541 item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](185, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](186, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](187, "coupon code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](188, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](189, "PIX004");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](191, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](192, "-60%");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](193, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](194, "$99.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](195, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](197, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](198, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](199, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](200, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](201, "T-shirt");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](202, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](203, "999 item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](204, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](205, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](206, "coupon code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](207, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](208, "PIX005");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](209, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](210, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](211, "-50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](212, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](213, "$58.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](214, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](215, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](216, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](217, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](218, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](219, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](220, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](221, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](222, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](223, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](224, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](225, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](226, "agm-map", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](227, "agm-marker");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](228, "agm-info-window", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](229, " Hi, this is the content of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](230, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](231, "info window");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](232, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](233, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](234, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](235, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](236, "News & Updates");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](237, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](238, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](239, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](240, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](241, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](242, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](243, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](244, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](245, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](246, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](247, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](248, "Update Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](249, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](250, "Quisque a consequat ante Sit amet magna at volutapt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](251, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](252, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](253, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](254, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](255, "James liked Nike Shoes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](256, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](257, "Aenean sit amet magna vel magna fringilla ferme.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](258, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](259, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](260, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](261, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](262, "john just buy your product");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](263, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](264, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](265, "Vestibulum nec mi suscipit, dapibus purus.....");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](266, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](267, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](268, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](269, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](270, "Jihan Doe just save your product");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](271, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](272, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](273, "Curabitur egestas consequat lorem.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](274, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](275, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](276, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](277, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](278, "Risk Factor");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](279, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](280, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](281, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](282, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](283, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](284, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](285, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](286, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](287, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](288, "apx-chart", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](289, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](290, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](291, "li", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](292, "h6", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](293, "As From");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](294, "h6", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](295, "24 March 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](296, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](297, "h6", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](298, "Total Goal");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](299, "h5", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](300, "$94,000.20");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](301, "ul", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](302, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](303, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](304, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](305, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](306, "Goal Archive : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](307, "$91,000.000");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](308, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](309, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](310, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](311, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](312, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](313, "Duration: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](314, "9 Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](315, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](316, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](317, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](318, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](319, "Download details");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](320, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](321, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](322, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](323, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](324, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](325, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](326, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](327, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](328, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](329, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](330, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](331, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](332, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](333, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](334, "Much More Selling product");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](335, "h4", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](336, "Best Selling Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](337, "span", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](338, "78% offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](339, "span", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](340, "Coupon Code : 12345");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](341, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](342, "div", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](343, "img", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](344, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](345, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](346, "div", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](347, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](348, "Money back Guarrantee");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](349, "h4", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](350, "Nike Air Shoes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](351, "span", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](352, "$100.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](353, "div", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](354, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](355, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](356, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](357, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](358, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](359, "Money back Guarrantee");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](360, "h4", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](361, "Women Kurti");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](362, "span", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](363, "$100.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](364, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](365, "div", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](366, "img", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](367, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](368, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](369, "div", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](370, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](371, "Money back Guarrantee");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](372, "h4", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](373, "Nike Air Shoes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](374, "span", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](375, "$120.55");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](376, "div", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](377, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](378, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](379, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](380, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](381, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](382, "Maximum Selling product");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](383, "h4", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](384, "Best Selling Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](385, "span", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](386, "50% offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](387, "span", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](388, "Coupon Code : 21546");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](389, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](390, "div", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](391, "img", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](392, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](393, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](394, "div", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](395, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](396, "Money back Guarrantee");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](397, "h4", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](398, "Nike Air Shoes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](399, "span", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](400, "$120.55");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](401, "a", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](402, "span", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](403, "span", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](404, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](405, "a", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](406, "span", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](407, "span", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](408, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](409, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](410, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](411, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](412, "div", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](413, "div", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](414, "div", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](415, "table", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](416, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](417, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](418, "th", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](419, " Best Seller");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](420, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](421, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](422, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](423, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](424, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](425, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](426, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](427, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](428, "th", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](429, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](430, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](431, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](432, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](433, "div", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](434, "img", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](435, "div", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](436, "div", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](437, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](438, "John keter");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](439, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](440, "2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](441, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](442, "06 August");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](443, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](444, "CAP");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](445, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](446, "i", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](447, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](448, "span", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](449, "$5,08,652");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](450, "td", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](451, "i", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](452, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](453, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](454, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](455, "div", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](456, "img", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](457, "div", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](458, "div", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](459, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](460, "Herry Venter");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](461, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](462, "2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](463, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](464, "21 March");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](465, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](466, "Branded Shoes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](467, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](468, "i", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](469, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](470, "span", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](471, "$59,105");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](472, "td", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](473, "i", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](474, "Pending ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](475, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](476, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](477, "div", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](478, "img", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](479, "div", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](480, "div", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](481, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](482, "loain deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](483, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](484, "2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](485, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](486, "09 March");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](487, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](488, "Headphone");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](489, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](490, "i", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](491, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](492, "span", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](493, "$10,155");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](494, "td", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](495, "i", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](496, "Success ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](497, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](498, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](499, "div", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](500, "img", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](501, "div", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](502, "div", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](503, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](504, "Horen Hors");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](505, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](506, "2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](507, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](508, "14 February");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](509, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](510, "Cell Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](511, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](512, "i", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](513, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](514, "span", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](515, "$90,568");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](516, "td", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](517, "i", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](518, "In process ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](519, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](520, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](521, "div", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](522, "img", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](523, "div", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](524, "div", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](525, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](526, "fenter Jessy");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](527, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](528, "2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](529, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](530, "12 January");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](531, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](532, "Earings");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](533, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](534, "i", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](535, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](536, "span", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](537, "$10,652");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](538, "td", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](539, "i", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](540, "Pending ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "Ecommerce")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](52, _c0))("active_item", "Ecommerce");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("series", ctx.todayTotalSale.series)("chart", ctx.todayTotalSale.chart)("dataLabels", ctx.todayTotalSale.dataLabels)("stroke", ctx.todayTotalSale.stroke)("xaxis", ctx.todayTotalSale.xaxis)("yaxis", ctx.todayTotalSale.yaxis)("tooltip", ctx.todayTotalSale.tooltip)("legend", ctx.todayTotalSale.legend)("grid", ctx.todayTotalSale.grid)("fill", ctx.todayTotalSale.fill)("colors", ctx.todayTotalSale.colors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("series", ctx.totalVisit.series)("chart", ctx.totalVisit.chart)("plotOptions", ctx.totalVisit.plotOptions)("dataLabels", ctx.totalVisit.dataLabels)("xaxis", ctx.totalVisit.xaxis)("yaxis", ctx.totalVisit.yaxis)("grid", ctx.totalVisit.grid)("colors", ctx.totalVisit.colors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("series", ctx.profit.series)("chart", ctx.profit.chart)("colors", ctx.profit.colors)("plotOptions", ctx.profit.plotOptions)("dataLabels", ctx.profit.dataLabels)("stroke", ctx.profit.stroke)("legend", ctx.profit.legend)("grid", ctx.profit.grid)("yaxis", ctx.profit.yaxis)("tooltip", ctx.profit.tooltip)("xaxis", ctx.profit.xaxis)("fill", ctx.profit.fill);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](122);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????styleProp"]("height", 300, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("latitude", ctx.lat_m1)("longitude", ctx.lng_m1)("zoom", ctx.zoom_m1)("scrollwheel", false)("disableDoubleClickZoom", true)("mapDraggable", false)("zoomControl", false)("mapTypeControl", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disableAutoPan", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("series", ctx.riskFactor.series)("chart", ctx.riskFactor.chart)("plotOptions", ctx.riskFactor.plotOptions)("fill", ctx.riskFactor.fill)("stroke", ctx.riskFactor.stroke)("labels", ctx.riskFactor.labels)("colors", ctx.riskFactor.colors);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _agm_core__WEBPACK_IMPORTED_MODULE_4__.AgmMap, _agm_core__WEBPACK_IMPORTED_MODULE_4__.AgmMarker, _agm_core__WEBPACK_IMPORTED_MODULE_4__.AgmInfoWindow],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlY29tbWVyY2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    91465: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MuwasaatComponent": function MuwasaatComponent() {
          return (
            /* binding */
            _MuwasaatComponent
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


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      49344);
      /* harmony import */


      var src_app_shared_services_business_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/business.service */
      21091);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function MuwasaatComponent_div_61_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "ITS:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Mobile No:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Grade");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", item_r3.prefix, " ", item_r3.counsellorName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", item_r3.its, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", item_r3.mobileNo, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", item_r3.grade, "");
        }
      }

      function MuwasaatComponent_div_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "SN:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "TRREF: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "ITS: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Mobile No: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Mauze:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "hr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "h6", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Counseller Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](44, MuwasaatComponent_div_61_div_44_Template, 21, 5, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "hr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "h6", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Case Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Case Year: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "Case Type: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "Enayat Approval: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "Case Status:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Business Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "Key Note:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78);

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
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.searchData == null ? null : ctx_r0.searchData.muminDetails.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.searchData == null ? null : ctx_r0.searchData.sn, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.searchData == null ? null : ctx_r0.searchData.trRef, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.searchData == null ? null : ctx_r0.searchData.muminDetails.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.searchData == null ? null : ctx_r0.searchData.muminDetails.its, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.searchData == null ? null : ctx_r0.searchData.muminDetails.mobileNo, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.searchData == null ? null : ctx_r0.searchData.caseDetails.caseStatus, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r0.searchData == null ? null : ctx_r0.searchData.counsellor);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.searchData == null ? null : ctx_r0.searchData.caseDetails.caseYear, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.searchData == null ? null : ctx_r0.searchData.caseDetails.caseType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.searchData == null ? null : ctx_r0.searchData.caseDetails.enayatApproval, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.searchData == null ? null : ctx_r0.searchData.caseDetails.caseStatus, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.searchData == null ? null : ctx_r0.searchData.caseDetails.businessName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.searchData == null ? null : ctx_r0.searchData.caseDetails.keyNote, "");
        }
      }

      function MuwasaatComponent_div_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Prefix");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Mulla");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Shaikh");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Counsellor Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "ITS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Mobile No");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Grade");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "select", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "B");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "D");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "F");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r5 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroupName", i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Counsellor ", i_r5 + 1, "");
        }
      }

      var _MuwasaatComponent = /*#__PURE__*/function () {
        function _MuwasaatComponent(fb, toaster, businessService) {
          _classCallCheck(this, _MuwasaatComponent);

          this.fb = fb;
          this.toaster = toaster;
          this.businessService = businessService;
          this.data = null;
          this.mohallah = [{
            label: "Ezzy Mohallah"
          }, {
            label: "Ibrahim Mohallah"
          }, {
            label: "Essa Mohallah"
          }, {
            label: "Taheri Mohallah"
          }, {
            label: "Mohammadi Mohallah"
          }, {
            label: "Saifee Mohallah"
          }, {
            label: "Rawalpindi"
          }, {
            label: "HyderabadSindh"
          }, {
            label: "Lahore"
          }, {
            label: "Hyderabad Badri"
          }, {
            label: "Jamali Mohallah"
          }, {
            label: "AMB"
          }, {
            label: "Qutbi Mohallah"
          }, {
            label: "Multan"
          }, {
            label: "Hyderabad"
          }, {
            label: "Al Mohallah Mohammadiyah"
          }, {
            label: "Burhani Bagh"
          }, {
            label: "Adam Mohallah"
          }, {
            label: "Saleh Mohallah"
          }, {
            label: "Fakhri Mohallah"
          }, {
            label: "Burhani Mohallah"
          }, {
            label: "Yusufi Mohallah"
          }];
          this.searchData = null;
        }

        _createClass(_MuwasaatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.businessService.findRecord().subscribe(function (response) {
              _this.data = response;
            });
            this.muwasaatInsertForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
              sn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
              trRef: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
              counsellor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([]),
              muminDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
                prefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
                its: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
                mauze: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
                mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
              }),
              caseDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
                caseYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
                caseType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
                enayatApproval: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(false),
                caseStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
                businessName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
                keyNote: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
              })
            });
            this.muwasaatSearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
              trRef: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
              its: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
              mauze: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
              caseYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
              caseType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
              enayatApproval: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null)
            });
            this.addCounseller();
          }
        }, {
          key: "onAddRecord",
          value: function onAddRecord() {
            var _this2 = this;

            this.businessService.addRecord(this.muwasaatInsertForm.value).subscribe(function (response) {
              _this2.toaster.success("Data has been saved");

              _this2.muwasaatInsertForm.reset(); // this.addCounseller()

            }, function (err) {
              _this2.toaster.error("There has been an error");
            });
          }
        }, {
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return index;
          }
        }, {
          key: "addCounseller",
          value: function addCounseller() {
            var rubric = this.muwasaatInsertForm.controls.counsellor;
            rubric.push(this.fb.group({
              prefix: '',
              counsellorName: '',
              its: '',
              mobileNo: '',
              grade: ''
            }));
          }
        }, {
          key: "minusCounseller",
          value: function minusCounseller() {
            var rubric = this.muwasaatInsertForm.controls.counsellor;
            rubric.removeAt(rubric.length - 1);
          }
        }, {
          key: "onSearch",
          value: function onSearch() {
            var _this3 = this;

            var filtered = Object.entries(this.muwasaatSearchForm.value).reduce(function (a, _ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  k = _ref2[0],
                  v = _ref2[1];

              return v ? (a[k] = v, a) : a;
            }, {});
            console.log(filtered);
            this.businessService.Onsearch(filtered).subscribe(function (response) {
              _this3.searchData = response;
            });
          }
        }]);

        return _MuwasaatComponent;
      }();

      _MuwasaatComponent.??fac = function MuwasaatComponent_Factory(t) {
        return new (t || _MuwasaatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_services_business_service__WEBPACK_IMPORTED_MODULE_0__.BusinessService));
      };

      _MuwasaatComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _MuwasaatComponent,
        selectors: [["app-muwasaat"]],
        decls: 161,
        vars: 9,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-12"], ["id", "result-card", 1, "card", "my-3"], [1, "card-body"], [1, "theme-form", "mega-form", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-md-6"], [1, "form-group"], [1, "col-form-label"], ["formControlName", "trRef", "bindLabel", "trRef", "bindValue", "trRef", "placeholder", "TR REF", 3, "items"], ["formControlName", "name", "bindLabel", "muminDetails.name", "bindValue", "muminDetails.name", "placeholder", "Mumin Name", 3, "items"], [1, "col-md-3"], ["formControlName", "its", "bindLabel", "muminDetails.its", "bindValue", "muminDetails.its", "placeholder", "Mumin ITS", 3, "items"], ["formControlName", "mauze", "placeholder", "Mumin ITS", 3, "items"], ["formControlName", "caseYear", 1, "form-control"], ["formControlName", "caseType", 1, "form-control"], ["formControlName", "enayatApproval", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "container-fluid", "id", "result-card", 4, "ngIf"], [1, "col-sm-12", "col-xl-6"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], ["formControlName", "sn", "type", "number", "placeholder", "S No", 1, "form-control"], ["formControlName", "trRef", "type", "text", "placeholder", "TR Ref", 1, "form-control"], [1, "mt-4", "mb-4"], ["formArrayName", "counsellor", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "btn", "btn-light", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["formGroupName", "muminDetails"], ["formControlName", "prefix", 1, "form-control"], ["formControlName", "name", "type", "text", "placeholder", "Name", 1, "form-control"], ["formControlName", "its", "type", "number", "placeholder", "ITS", 1, "form-control"], ["formControlName", "mauze", "type", "text", "placeholder", "mauze", 1, "form-control"], ["formControlName", "mobileNo", "type", "text", "placeholder", "Mobile No", 1, "form-control"], ["formGroupName", "caseDetails"], ["formControlName", "caseYear", "type", "text", "placeholder", "Case Year", 1, "form-control"], ["value", "true"], ["value", "false"], ["formControlName", "caseStatus", "type", "text", "placeholder", "Case Status", 1, "form-control"], ["formControlName", "businessName", "type", "text", "placeholder", "Business Name", 1, "form-control"], ["formControlName", "keyNote", "placeholder", "Key Note", "rows", "5", 1, "form-control"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-primary", "mr-1"], [1, "btn", "btn-secondary"], ["id", "result-card", 1, "container-fluid"], [1, "card", "card-absolute"], [1, "card-header", "bg-primary"], [1, "text-white"], [1, "mb-3"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-md-9"], ["formArrayName", "counsellor"], [3, "formGroupName"], ["formControlName", "counsellorName", "type", "text", "placeholder", "Counsellor Name", 1, "form-control"], ["formControlName", "grade", 1, "form-control"]],
        template: function MuwasaatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function MuwasaatComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onSearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, " TR REF ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "ng-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, " Mumin Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "ng-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, " Mumin ITS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "ng-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, " Mumin Mauze ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "ng-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, " Case Year ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "1439-40");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "1440-41");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "1441-42");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, " Case Type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Couselling");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Enayat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, " Enayat Approval ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](54, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "Approved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Rejected");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](61, MuwasaatComponent_div_61_Template, 79, 14, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "Entry Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function MuwasaatComponent_Template_form_ngSubmit_72_listener() {
              return ctx.onAddRecord();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, "Basic Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "S No");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](78, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "TR Ref");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](82, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](83, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "Counsellor Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](86, MuwasaatComponent_div_86_Template, 39, 2, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MuwasaatComponent_Template_button_click_87_listener() {
              return ctx.addCounseller();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Add More Counsellor");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MuwasaatComponent_Template_button_click_89_listener() {
              return ctx.minusCounseller();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "Remove Counsellor");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](91, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "Mumin Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "Prefix");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "select", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](99, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, "Mulla");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "Shaikh");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](106, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](107, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "ITS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](111, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, "Mauze");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](115, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](119, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](120, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, "Case Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "Case Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](127, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "Case Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "Counselling");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, "Enayat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, "Enayat Approval");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "option", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, "Approved");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "option", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "Rejected");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, "Case Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](147, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](150, "Business Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](151, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](154, "Key Note");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](155, "textarea", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](160, "Cancel");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.muwasaatSearchForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", ctx.mohallah);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.searchData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.muwasaatInsertForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.muwasaatInsertForm.controls.counsellor == null ? null : ctx.muwasaatInsertForm.controls.counsellor.value)("ngForTrackBy", ctx.trackByFn);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName],
        styles: ["#result-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11d2FzYWF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6Im11d2FzYWF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Jlc3VsdC1jYXJkIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    32317: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResourcesComponent": function ResourcesComponent() {
          return (
            /* binding */
            _ResourcesComponent
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

      var _c0 = ["addbookmark"];
      var _c1 = ["editbookmark"];
      var _c2 = ["createTag"];

      var _c3 = function _c3() {
        return ["Dashboard"];
      };

      var _ResourcesComponent = /*#__PURE__*/function () {
        function _ResourcesComponent() {
          _classCallCheck(this, _ResourcesComponent);

          this.listBookmark = false;
        }

        _createClass(_ResourcesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeLayoutBookmark",
          value: function changeLayoutBookmark() {
            this.listBookmark = !this.listBookmark;
          }
        }]);

        return _ResourcesComponent;
      }();

      _ResourcesComponent.??fac = function ResourcesComponent_Factory(t) {
        return new (t || _ResourcesComponent)();
      };

      _ResourcesComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _ResourcesComponent,
        selectors: [["app-resources"]],
        viewQuery: function ResourcesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c2, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.AddBookmark = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.EditBookmark = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.CreateTag = _t.first);
          }
        },
        decls: 117,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "col-xl-12", "col-md-12", "box-col-12"], ["id", "template", 1, "card"], [1, "card-body"], [1, "card-header"], [1, "row"], [1, "col-md-3"], [1, "card"], ["src", "/assets/images/resources/template_deed.jpg", "alt", ""], [1, "text-center", "mt-3"], ["src", "/assets/images/resources/template_business.png", "alt", ""], ["src", "/assets/images/resources/template_excel.png", "alt", ""], ["src", "/assets/images/resources/template_household.jpg", "alt", ""], [1, "container-fluid"], [1, "col-xl-6", "box-col-12", "xl-100"], [1, "blog-box", "blog-list", "row"], [1, "col-sm-5"], ["src", "assets/images/blog/blog_small.jpeg", "alt", "", 1, "img-fluid", "sm-100-w"], [1, "col-sm-7"], [1, "blog-details"], [1, "blog-date", "digits"], [1, "blog-bottom-content"], [1, "blog-social"], [1, "digits"], [1, "mt-0"], ["id", "blog", 1, "card"], ["src", "assets/images/blog/blog_customer.png", "alt", "", 1, "img-fluid", "sm-100-w"], ["src", "assets/images/blog/blog_ecommerce.jpeg", "alt", "", 1, "img-fluid", "sm-100-w"]],
        template: function ResourcesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Templates");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Partnership Deed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Business Plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Excel Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Household Budget");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "June 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Free invoicing software for freelancers and small businesses");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "ul", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "by: Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "10 Hits");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](55, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, " The basic objective of a business is to reduce operational expenditure. Along with that increasing profit margin is an important criterion. No business in such tumultuous times wants to increase its overhead expenditure. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](62, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "June 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "3 helpful tips for increasing customer acquisition");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "ul", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "by: Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, "02 Hits");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](75, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, " The last year and the year previous to that has been menacing for humanity. Covid 19 has raged all across and has had a tremendous impact on human life-altering the work environment and bringing about drastic changes in remote work operations. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](82, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Sep 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "What Are The Different Types of e-Commerce Business Models?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "ul", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "by: Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "7 Hits");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](95, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, " The 21st century is a time of great changes to the way the world economy works and runs. The internet has penetrated the farthest corners of the world. Soon, we will enter the era where everything would run on the internet. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](101, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, "July 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "What Are The Different Types of e-Commerce Business Models?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "ul", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, "by: Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, "17 Hits");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](114, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, " When someone says \u201Cbrand\u201D, the first thing that might come into your mind are names, who have a giant corporate value in the market. But larger companies such as McDonald\u2019s or Apple can spend millions of dollars for building a strong brand. ");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Resources")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c3))("active_item", "Resources");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
        styles: ["#template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#blog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSiIsImZpbGUiOiJyZXNvdXJjZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGVtcGxhdGUgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI2Jsb2cgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    70051: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "currentSales": function currentSales() {
          return (
            /* binding */
            _currentSales
          );
        },

        /* harmony export */
        "smallBarCharts": function smallBarCharts() {
          return (
            /* binding */
            _smallBarCharts
          );
        },

        /* harmony export */
        "marketValue": function marketValue() {
          return (
            /* binding */
            _marketValue
          );
        },

        /* harmony export */
        "knob": function knob() {
          return (
            /* binding */
            _knob
          );
        },

        /* harmony export */
        "knobRight": function knobRight() {
          return (
            /* binding */
            _knobRight
          );
        }
        /* harmony export */

      });

      var Knob = __webpack_require__(
      /*! knob */
      17787); // browserify require


      var primary = localStorage.getItem('primary_color') || '#7366ff';
      var secondary = localStorage.getItem('secondary_color') || '#f73164';
      var _currentSales = {
        series: [{
          name: 'series1',
          data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55, 0]
        }, {
          name: 'series2',
          data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45, 0]
        }],
        chart: {
          height: 240,
          type: 'area',
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'category',
          low: 0,
          offsetX: 0,
          offsetY: 0,
          show: false,
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
          labels: {
            low: 0,
            offsetX: 0,
            show: false
          },
          axisBorder: {
            low: 0,
            offsetX: 0,
            show: false
          }
        },
        markers: {
          strokeWidth: 3,
          colors: "#ffffff",
          strokeColors: [primary, secondary],
          hover: {
            size: 6
          }
        },
        yaxis: {
          low: 0,
          offsetX: 0,
          offsetY: 0,
          show: false,
          labels: {
            low: 0,
            offsetX: 0,
            show: false
          },
          axisBorder: {
            low: 0,
            offsetX: 0,
            show: false
          }
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
            bottom: -15,
            top: -40
          }
        },
        colors: [primary, secondary],
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.5,
            stops: [0, 80, 100]
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          x: {
            format: 'MM'
          }
        }
      };
      var _smallBarCharts = {
        type: 'Bar',
        data: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
          series: [[400, 900, 800, 1000, 700, 1200, 300], [1000, 500, 600, 400, 700, 200, 1100]]
        },
        options: {
          stackBars: true,
          axisY: {
            low: 0,
            showGrid: false,
            showLabel: false,
            offset: 0,
            scaleMinSpace: 40
          },
          axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
          }
        },
        events: {
          draw: function draw(data) {
            if (data.type === 'bar') {
              data.element.attr({
                style: 'stroke-width: 3px'
              });
            }
          }
        }
      };
      var _marketValue = {
        chart: {
          height: 380,
          type: 'radar',
          toolbar: {
            show: false
          }
        },
        series: [{
          name: 'Market value',
          data: [20, 100, 40, 30, 50, 80, 33]
        }],
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              fill: {
                colors: ['#fcf8ff', '#f7eeff']
              }
            }
          }
        },
        colors: [primary],
        markers: {
          size: 6,
          colors: ['#fff'],
          strokeColor: primary,
          strokeWidth: 3
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return val;
            }
          }
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function formatter(val, i) {
              if (i % 2 === 0) {
                return val;
              } else {
                return '';
              }
            }
          }
        }
      };

      var _knob = Knob({
        width: 65,
        height: 65,
        max: 100,
        lineCap: 'round',
        fgColor: primary,
        bgColor: '#eef5fb',
        className: 'knob-content-center',
        activeClass: 'knob-block text-center',
        value: '60',
        readOnly: true
      });

      var _knobRight = Knob({
        width: 65,
        height: 65,
        max: 100,
        lineCap: 'round',
        fgColor: primary,
        bgColor: '#eef5fb',
        className: 'knob-content-center',
        activeClass: 'knob-block text-center',
        value: '60',
        readOnly: true
      });
      /***/

    },

    /***/
    84306: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "todayTotalSale": function todayTotalSale() {
          return (
            /* binding */
            _todayTotalSale
          );
        },

        /* harmony export */
        "totalVisit": function totalVisit() {
          return (
            /* binding */
            _totalVisit
          );
        },

        /* harmony export */
        "profit": function profit() {
          return (
            /* binding */
            _profit
          );
        },

        /* harmony export */
        "riskFactor": function riskFactor() {
          return (
            /* binding */
            _riskFactor
          );
        }
        /* harmony export */

      });

      var primary = localStorage.getItem('primary_color') || '#7366ff';
      var secondary = localStorage.getItem('secondary_color') || '#f73164';
      var _todayTotalSale = {
        series: [{
          name: 'series1',
          data: [280, 170, 440, 170, 270, 130]
        }, {
          name: 'series2',
          data: [150, 500, 300, 250, 420, 350]
        }, {
          name: 'series3',
          data: [450, 150, 320, 500, 280, 100]
        }],
        chart: {
          height: 150,
          type: 'area',
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 0
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z"]
        },
        yaxis: {
          show: false
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        },
        legend: {
          show: false
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: -40
          }
        },
        fill: {
          type: 'gradient',
          opacity: [1, 0.4, 0.25],
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 1,
            gradientToColors: ['#a26cf8', '#a927f9', '#7366ff'],
            opacityFrom: [1, 0.4, 0.25],
            opacityTo: [1, 0.4, 0.25],
            stops: [30, 100],
            colorStops: []
          },
          colors: [primary, primary, primary]
        },
        colors: [primary, secondary, secondary]
      };
      var _totalVisit = {
        series: [{
          name: 'Inflation',
          data: [2.3, 5.1, 3.0, 9.1, 2.0, 4.6, 2.2, 9.3, 5.4, 4.8, 3.5, 5.2]
        }],
        chart: {
          height: 105,
          type: 'bar',
          stacked: true,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top' // top, center, bottom

            },
            columnWidth: '20%',
            startingShape: 'rounded',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false,
          formatter: function formatter(val) {
            return val + "%";
          },
          offsetY: -10,
          style: {
            fontSize: '12px',
            colors: [primary]
          }
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          position: 'bottom',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#7366ff',
                colorTo: '#c481ec',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true
          },
          labels: {
            show: false
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function formatter(val) {
              return val + "%";
            }
          }
        },
        grid: {
          show: false,
          padding: {
            top: -35,
            right: -45,
            bottom: -20,
            left: -10
          }
        },
        colors: [primary]
      };
      var _profit = {
        series: [{
          name: 'Daily',
          data: [0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1.10, 1.15, 1.20, 1.25, 1.30, 1.35, 1.40, 1.45, 1.50, 1.55, 1.50, 1.45, 1.40, 1.35, 1.30, 1.25, 1.20, 1.15, 1.10, 1.05, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65, 0.60, 0.55, 0.50, 0.45, 0.40, 0.35]
        }, {
          name: 'Weekly',
          data: [-0.40, -0.50, -0.60, -0.70, -0.80, -0.90, -1.10, -1.15, -1.20, -1.25, -1.30, -1.35, -1.40, -1.45, -1.50, -1.55, -1.50, -1.45, -1.40, -1.35, -1.30, -1.25, -1.20, -1.15, -1.10, -1.05, -0.90, -0.85, -0.80, -0.75, -0.70, -0.65, -0.60, -0.55, -0.50, -0.45, -0.40, -0.35]
        }, {
          name: 'Monthly',
          data: [-1.35, -1.45, -1.55, -1.65, -1.75, -1.85, -1.95, -2.15, -2.25, -2.35, -2.45, -2.55, -2.65, -2.75, -2.85, -2.95, -3.00, -3.10, -3.20, -3.25, -3.10, -3.00, -2.95, -2.85, -2.75, -2.65, -2.55, -2.45, -2.35, -2.25, -2.15, -1.95, -1.85, -1.75, -1.65, -1.55, -1.45, -1.35]
        }, {
          name: 'Yearly',
          data: [1.35, 1.45, 1.55, 1.65, 1.75, 1.85, 1.95, 2.15, 2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95, 3.00, 3.10, 3.20, 3.25, 3.10, 3.00, 2.95, 2.85, 2.75, 2.65, 2.55, 2.45, 2.35, 2.25, 2.15, 1.95, 1.85, 1.75, 1.65, 1.55, 1.45, 1.35]
        }],
        chart: {
          type: 'bar',
          height: 320,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        colors: [primary, primary, primary, primary],
        plotOptions: {
          bar: {
            vertical: true,
            columnWidth: '40%',
            barHeight: '80%',
            startingShape: 'butt',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 0,
          lineCap: 'butt'
        },
        legend: {
          show: false
        },
        grid: {
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          min: -5,
          max: 5,
          show: false,
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          x: {
            formatter: function formatter(val) {
              return val;
            }
          },
          y: {
            formatter: function formatter(val) {
              return Math.abs(val) + "%";
            }
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
            show: true
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        fill: {
          // type: 'solid',
          opacity: [0.8, 0.8, 0.2, 0.2],
          colors: [function (_ref3) {
            var value = _ref3.value,
                seriesIndex = _ref3.seriesIndex,
                w = _ref3.w;

            if (value < 0.75) {
              return "#a26cf8";
            } else {
              return primary;
            }
          }]
        }
      };
      var _riskFactor = {
        series: [70],
        chart: {
          height: 320,
          type: 'radialBar',
          offsetY: -10
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            inverseOrder: true,
            hollow: {
              margin: 5,
              size: '60%',
              image: 'assets/images/dashboard-2/radial-image.png',
              imageWidth: 140,
              imageHeight: 140,
              imageClipped: false
            },
            track: {
              opacity: 0.4,
              colors: primary
            },
            dataLabels: {
              enabled: false,
              enabledOnSeries: undefined,
              formatter: function formatter(val, opts) {
                return val + "%";
              },
              textAnchor: 'middle',
              distributed: false,
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fill: ['#2b2b2b']
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
            gradientToColors: ['#a927f9'],
            type: 'horizontal'
          }
        },
        stroke: {
          dashArray: 15,
          strokecolor: ['#ffffff']
        },
        labels: ['Selling rate'],
        colors: [primary]
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_dashboard_dashboard_module_ts-es5.js.map