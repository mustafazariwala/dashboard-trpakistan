(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_support-ticket_support-ticket_module_ts"], {
    /***/
    70522: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportTicketRoutingModule": function SupportTicketRoutingModule() {
          return (
            /* binding */
            _SupportTicketRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _support_ticket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./support-ticket.component */
      91007);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _support_ticket_component__WEBPACK_IMPORTED_MODULE_0__.SupportTicketComponent
        }]
      }];

      var _SupportTicketRoutingModule = function _SupportTicketRoutingModule() {
        _classCallCheck(this, _SupportTicketRoutingModule);
      };

      _SupportTicketRoutingModule.??fac = function SupportTicketRoutingModule_Factory(t) {
        return new (t || _SupportTicketRoutingModule)();
      };

      _SupportTicketRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _SupportTicketRoutingModule
      });
      _SupportTicketRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_SupportTicketRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    91007: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportTicketComponent": function SupportTicketComponent() {
          return (
            /* binding */
            _SupportTicketComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_tables_support_ticket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/data/tables/support-ticket */
      98061);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var angular_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-count-to */
      74848);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);

      var _c0 = function _c0() {
        return ["Apps"];
      };

      var _c1 = function _c1() {
        return {
          name: "img"
        };
      };

      var _c2 = function _c2() {
        return {
          name: "position"
        };
      };

      var _c3 = function _c3() {
        return {
          name: "salary"
        };
      };

      var _c4 = function _c4() {
        return {
          name: "office"
        };
      };

      var _c5 = function _c5() {
        return {
          name: "skill"
        };
      };

      var _c6 = function _c6() {
        return {
          name: "extn"
        };
      };

      var _c7 = function _c7() {
        return {
          name: "email"
        };
      };

      var _c8 = function _c8(a0, a1, a2, a3, a4, a5, a6) {
        return [a0, a1, a2, a3, a4, a5, a6];
      };

      var _SupportTicketComponent = /*#__PURE__*/function () {
        function _SupportTicketComponent() {
          _classCallCheck(this, _SupportTicketComponent);

          this.support = _shared_data_tables_support_ticket__WEBPACK_IMPORTED_MODULE_0__.supportDB.ticket;
          this.settings = {
            columns: {
              img: {
                title: 'Image',
                type: 'html'
              },
              position: {
                title: 'Position'
              },
              salary: {
                title: 'Salary'
              },
              office: {
                title: 'Office'
              },
              skill: {
                title: 'Skill',
                type: 'html'
              },
              extn: {
                title: 'Extn'
              },
              email: {
                title: 'Email'
              }
            }
          };
        }

        _createClass(_SupportTicketComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SupportTicketComponent;
      }();

      _SupportTicketComponent.??fac = function SupportTicketComponent_Factory(t) {
        return new (t || _SupportTicketComponent)();
      };

      _SupportTicketComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: _SupportTicketComponent,
        selectors: [["app-support-ticket"]],
        decls: 160,
        vars: 44,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-xl-4", "col-sm-6", "box-col-6"], [1, "card", "ecommerce-widget"], [1, "card-body", "support-ticket-font"], [1, "col-5"], [1, "counter", 3, "CountTo", "from", "duration"], [1, "col-7"], [1, "text-md-right"], [1, "product-stts", "txt-success", "ml-2"], [1, "icon-angle-up", "f-12", "ml-1"], [1, "product-stts", "txt-danger", "ml-2"], [1, "icon-angle-down", "f-12", "ml-1"], [1, "progress-showcase"], [1, "progress", "sm-progress-bar"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-secondary", 2, "width", "70%"], [1, "progress-showcase", "mt-4"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "70%"], [1, "table-responsive"], [1, "custom-datatable", "product-list-custom"], [1, "bootstrap", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"]],
        template: function SupportTicketComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Support Ticket List");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "List of ticket opend by customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, "Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](19, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, "8989");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](27, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](29, "Loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31, "2560");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](32, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](42, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](43, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](48, "Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](50, "8989");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](51, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](53, "Loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](55, "2560");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](56, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](59, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](65, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](66, "Running");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](67, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](72, "Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](74, "8989");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](75, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](77, "Loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](79, "2560");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](80, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](81, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](82, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](83, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](84, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](85, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](87, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](88, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](89, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](90, "Smooth");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](91, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](92, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](93, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](94, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](95, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](96, "Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](97, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](98, "8989");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](99, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](100, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](101, "Loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](102, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](103, "2560");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](104, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](105, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](106, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](107, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](108, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](109, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](110, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](111, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](112, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](113, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](114, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](115, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](116, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](117, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](118, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](119, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](120, "Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](121, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](122, "8989");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](123, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](124, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](125, "Loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](126, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](127, "2560");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](128, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](129, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](130, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](131, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](132, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](133, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](134, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](135, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](136, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](137, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](138, "Cancle");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](139, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](140, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](141, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](142, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](143, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](144, "Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](145, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](146, "8989");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](147, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](148, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](149, "Loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](150, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](151, "2560");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](152, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](153, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](154, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](155, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](156, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](157, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](158, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](159, "ngx-datatable", 29);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("title", "Support Ticket")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](28, _c0))("active_item", "Support Ticket");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 2563)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 8943)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 2500)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 2060)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 5600)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("CountTo", 2560)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("rows", ctx.support)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction7"](36, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](29, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](30, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](31, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](32, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](33, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](34, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](35, _c7)))("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, angular_count_to__WEBPACK_IMPORTED_MODULE_2__.CountToDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LXRpY2tldC5jb21wb25lbnQuc2NzcyJ9 */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    93695: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportTicketModule": function SupportTicketModule() {
          return (
            /* binding */
            _SupportTicketModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-count-to */
      74848);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./support-ticket-routing.module */
      70522);
      /* harmony import */


      var _support_ticket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./support-ticket.component */
      91007);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SupportTicketModule = function _SupportTicketModule() {
        _classCallCheck(this, _SupportTicketModule);
      };

      _SupportTicketModule.??fac = function SupportTicketModule_Factory(t) {
        return new (t || _SupportTicketModule)();
      };

      _SupportTicketModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _SupportTicketModule
      });
      _SupportTicketModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_2__.SupportTicketRoutingModule, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_SupportTicketModule, {
          declarations: [_support_ticket_component__WEBPACK_IMPORTED_MODULE_3__.SupportTicketComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_2__.SupportTicketRoutingModule, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
        });
      })();
      /***/

    },

    /***/
    98061: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "supportDB": function supportDB() {
          return (
            /* binding */
            _supportDB
          );
        }
        /* harmony export */

      });

      var _supportDB = function _supportDB() {
        _classCallCheck(this, _supportDB);
      };

      _supportDB.ticket = [{
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/1.jpg'><div class='media-body align-self-center'> <div>Tiger</div></div></div>",
        position: "System Architect",
        salary: "$320,800",
        office: "Edinburgh",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-danger w-50' style='width: 70%' role='progressbar'></div></div></div>",
        extn: 5421,
        email: "t.nixon@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/2.png'><div class='media-body align-self-center'> <div>Tiger</div></div></div>",
        position: "System Architect",
        salary: "$320,800",
        office: "Edinburgh",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-secondary w-100'  style='width: 20%' role='progressbar'></div></div></div>",
        extn: 5421,
        email: "t.nixon@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/3.jpg'><div class='media-body align-self-center'> <div>Garrett Winters</div></div></div>",
        position: "Accountant",
        salary: "$170,750",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-100'  style='width: 50%' role='progressbar'></div></div></div>",
        extn: 8422,
        email: "g.winters@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/4.jpg'><div class='media-body align-self-center'> <div>Garrett Winters</div></div></div>",
        position: "Accountant",
        salary: "$170,750",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-100'  style='width: 45%' role='progressbar'></div></div></div>",
        extn: 8422,
        email: "g.winters@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/5.jpg'><div class='media-body align-self-center'> <div>Garrett Winters</div></div></div>",
        position: "Accountant",
        salary: "$170,750",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-100'  style='width: 57%' role='progressbar'></div></div></div>",
        extn: 8422,
        email: "g.winters@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/6.jpg'><div class='media-body align-self-center'> <div>Ashton Cox</div></div></div>",
        position: "Junior Technical Author",
        salary: "$86,000",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-100'  style='width: 100%' role='progressbar'></div></div></div>",
        extn: 1562,
        email: "a.cox@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/7.jpg'><div class='media-body align-self-center'> <div>Cedric Kelly</div></div></div>",
        position: "Senior Javascript Developer",
        salary: "$433,060",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-secondary w-100'  style='width: 35%' role='progressbar'></div></div></div>",
        extn: 6224,
        email: "c.kelly@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/8.jpg'><div class='media-body align-self-center'> <div>Cedric Kelly</div></div></div>",
        position: "Senior Javascript Developer",
        salary: "$433,060",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-secondary w-100'  style='width: 76%' role='progressbar'></div></div></div>",
        extn: 6224,
        email: "c.kelly@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/9.jpg'><div class='media-body align-self-center'> <div>Airi Satou</div></div></div>",
        position: "Accountant",
        salary: "$162,700",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-100'  style='width: 20%' role='progressbar'></div></div></div>",
        extn: 5407,
        email: "a.satou@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/10.jpg'><div class='media-body align-self-center'> <div>Brielle Williamson</div></div></div>",
        position: "Integration Specialist",
        salary: "$372,000",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-info w-100' style='width: 30%' role='progressbar'></div></div></div>",
        extn: 4804,
        email: "b.williamson@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/1.jpg'><div class='media-body align-self-center'> <div>Herrod Chandler</div></div></div>",
        position: "Sales Assistant",
        salary: "$137,500",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-warning w-100' style='width: 60%' role='progressbar'></div></div></div>",
        extn: 9608,
        email: "h.chandler@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/5.jpg'><div class='media-body align-self-center'> <div>Rhona Davidson</div></div></div>",
        position: "Integration Specialist",
        salary: "$327,900",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-secondary w-100' style='width: 50%' role='progressbar'></div></div></div>",
        extn: 6200,
        email: "r.davidson@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/1.jpg'><div class='media-body align-self-center'> <div>Colleen Hurst</div></div></div>",
        position: "Javascript Developer",
        salary: "$205,500",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-100' style='width: 25%' role='progressbar'></div></div></div>",
        extn: 2360,
        email: "c.hurst@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/2.png'><div class='media-body align-self-center'> <div>Sonya Frost</div></div></div>",
        position: "Software Engineer",
        salary: "$103,600",
        office: "Edinburgh",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-primary w-100' style='width: 40%' role='progressbar'></div></div></div>",
        extn: 1667,
        email: "s.frost@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/3.jpg'><div class='media-body align-self-center'> <div>Jena Gaines</div></div></div>",
        position: "Office Manager",
        salary: "$90,560",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-warning w-60' style='width: 57%' role='progressbar'></div></div></div>",
        extn: 3814,
        email: "j.gaines@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/4.jpg'><div class='media-body align-self-center'> <div>Quinn Flynn</div></div></div>",
        position: "Support Lead",
        salary: "$342,000",
        office: "Edinburgh",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-danger w-70' style='width: 50%' role='progressbar'></div></div></div>",
        extn: 9497,
        email: "q.flynn@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/5.jpg'><div class='media-body align-self-center'> <div>Charde Marshall</div></div></div>",
        position: "Regional Director",
        salary: "$470,600",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-info w-80' style='width: 27%' role='progressbar'></div></div></div>",
        extn: 6741,
        email: "c.marshall@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/6.jpg'><div class='media-body align-self-center'> <div>Haley Kennedy</div></div></div>",
        position: "Senior Marketing Designer",
        salary: "$313,500",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-90'  style='width: 35%' role='progressbar'></div></div></div>",
        extn: 3597,
        email: "h.kennedy@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/7.jpg'><div class='media-body align-self-center'> <div>Tatyana Fitzpatrick</div></div></div>",
        position: "Regional Director",
        salary: "$385,750",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-warning w-100' style='width: 80%' role='progressbar'></div></div></div>",
        extn: 1965,
        email: "t.fitzpatrick@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/8.jpg'><div class='media-body align-self-center'> <div>Michael Silva</div></div></div>",
        position: "Marketing Designer",
        salary: "$198,500",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-primary w-90' style='width: 74%' role='progressbar'></div></div></div>",
        extn: 1581,
        email: "m.silva@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/9.jpg'><div class='media-body align-self-center'> <div>Michael Silva</div></div></div>",
        position: "Paul Byrd",
        salary: "Chief Financial Officer (CFO)",
        office: "$725,000",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-ress-bar w-100 bg-success' style='width: 30%' role='progressbar'></div></div></div>",
        extn: 3059,
        email: "p.byrd@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/10.jpg'><div class='media-body align-self-center'> <div>Gloria Little</div></div></div>",
        position: "Systems Administrator",
        salary: "$237,500",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-60' style='width: 50%' role='progressbar'></div></div></div>",
        extn: 1721,
        email: "g.little@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/2.png'><div class='media-body align-self-center'> <div>Bradley Greer</div></div></div>",
        position: "Software Engineer",
        salary: "$132,000",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-primary w-50' style='width: 30%' role='progressbar'></div></div></div>",
        extn: 2558,
        email: "b.greer@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/5.jpg'><div class='media-body align-self-center'> <div>Michael Silva</div></div></div>",
        position: "Dai Rios",
        salary: "Personnel Lead",
        office: "$217,500",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-gress-bar w-50 bg-warning w-40' style='width: 40%' role='progressbar'></div></div></div>",
        extn: 2290,
        email: "d.rios@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/1.jpg'><div class='media-body align-self-center'> <div>Jenette Caldwell</div></div></div>",
        position: "Development Lead",
        salary: "$345,000",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-primary w-30' style='width: 80%' role='progressbar'></div></div></div>",
        extn: 1937,
        email: "j.caldwell@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/2.png'><div class='media-body align-self-center'> <div>Yuri Berry</div></div></div>",
        position: "Chief Marketing Officer (CMO)",
        salary: "$675,000",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-danger w-20' style='width: 30%' role='progressbar'></div></div></div>",
        extn: 6154,
        email: "y.berry@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/3.jpg'><div class='media-body align-self-center'> <div>C</div></div></div>",
        position: "Pre-Sales Support",
        salary: "$106,450",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-10' style='width: 70%' role='progressbar'></div></div></div>",
        extn: 8330,
        email: "c.vance@datatables.net"
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_support-ticket_support-ticket_module_ts-es5.js.map