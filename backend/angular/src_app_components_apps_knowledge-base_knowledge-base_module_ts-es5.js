(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_knowledge-base_knowledge-base_module_ts"], {
    /***/
    23915: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KnowledgeBaseRoutingModule": function KnowledgeBaseRoutingModule() {
          return (
            /* binding */
            _KnowledgeBaseRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _knowledge_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./knowledge-base.component */
      62372);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _knowledge_base_component__WEBPACK_IMPORTED_MODULE_0__.KnowledgeBaseComponent
        }]
      }];

      var _KnowledgeBaseRoutingModule = function _KnowledgeBaseRoutingModule() {
        _classCallCheck(this, _KnowledgeBaseRoutingModule);
      };

      _KnowledgeBaseRoutingModule.??fac = function KnowledgeBaseRoutingModule_Factory(t) {
        return new (t || _KnowledgeBaseRoutingModule)();
      };

      _KnowledgeBaseRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _KnowledgeBaseRoutingModule
      });
      _KnowledgeBaseRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_KnowledgeBaseRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    62372: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KnowledgeBaseComponent": function KnowledgeBaseComponent() {
          return (
            /* binding */
            _KnowledgeBaseComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_knowledge_base_knowledge_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/data/knowledge-base/knowledge-base */
      61179);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _c0 = function _c0() {
        return ["Apps"];
      };

      var _c1 = function _c1() {
        return {
          "background-image": "url(assets/images/knowledgebase/bg_1.jpg)",
          "background-size": "cover",
          "background-position": "center center",
          "display": "block"
        };
      };

      var _KnowledgeBaseComponent = /*#__PURE__*/function () {
        function _KnowledgeBaseComponent(_sanitizer) {
          _classCallCheck(this, _KnowledgeBaseComponent);

          this._sanitizer = _sanitizer;
          this.Kb = _shared_data_knowledge_base_knowledge_base__WEBPACK_IMPORTED_MODULE_0__.KB_DB.Kb_Category;
        }

        _createClass(_KnowledgeBaseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _KnowledgeBaseComponent;
      }();

      _KnowledgeBaseComponent.??fac = function KnowledgeBaseComponent_Factory(t) {
        return new (t || _KnowledgeBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
      };

      _KnowledgeBaseComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _KnowledgeBaseComponent,
        selectors: [["app-knowledge-base"]],
        decls: 615,
        vars: 6,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "knowledgebase-bg", 3, "ngStyle"], ["src", "assets/images/knowledgebase/bg_1.jpg", "alt", "looginpage", 1, "bg-img-cover", "bg-center", "d-none"], [1, "knowledgebase-search"], ["action", "#", "method", "get", 1, "form-inline"], [1, "form-group", "w-100"], ["data-feather", "search"], ["type", "text", "placeholder", "Type question here", "title", "", 1, "form-control-plaintext", "w-100"], [1, "col-xl-4", "xl-50", "col-sm-6"], [1, "card", "bg-primary"], [1, "card-body"], [1, "media", "faq-widgets"], [1, "media-body"], ["data-feather", "book-open"], ["data-feather", "aperture"], [1, "col-xl-4", "xl-100"], ["data-feather", "file-text"], [1, "col-sm-12"], [1, "header-faq"], [1, "mb-0"], [1, "card"], [1, "card-header"], [1, "row", "browse"], [1, "col-xl-4", "xl-50", "col-md-6"], [1, "browse-articles"], ["data-feather", "archive"], ["href", "#"], [1, "badge", "badge-primary", "pull-right"], ["data-feather", "arrow-right"], [1, "browse-articles", "browse-bottom"], [1, "col-lg-12"], [1, "col-xl-3", "xl-50", "col-md-6"], [1, "card", "features-faq", "product-box"], [1, "faq-image", "product-img"], ["src", "assets/images/faq/1.jpg", "alt", "", 1, "img-fluid"], [1, "product-hover"], [1, "icon-link"], [1, "icon-import"], [1, "card-footer"], [1, "pull-right"], [1, "fa", "fa-star", "font-primary"], ["src", "assets/images/faq/2.jpg", "alt", "", 1, "img-fluid"], [1, "fa", "fa-star-o", "font-primary"], ["src", "assets/images/faq/3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/faq/4.jpg", "alt", "", 1, "img-fluid"], [1, "fa", "fa-star-half-o", "font-primary"], [1, "col-xl-4", "col-md-6"], [1, "media"], ["data-feather", "codepen", 1, "m-r-30"], [1, "f-w-600"], ["data-feather", "file-text", 1, "m-r-30"], [1, "col-xl-4"], [1, "col-xl-12", "col-md-6"], ["data-feather", "youtube", 1, "m-r-30"], [1, "col-xl-12"]],
        template: function KnowledgeBaseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "How Can I help you?");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Articles");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](30, "Knowledgebase");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](33, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](43, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "h5", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47, "Browse articles by category");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](53, "Browse Articles");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](60, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](61, "Quick Questions are answered");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](66, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](68, "Lorem Ipsum is simply dummy text of the printing");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](72, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](74, "Lorem Ipsum has been the industry's standard dummy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](76, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](79, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](80, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](81, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](82, "When an unknown printer took a galley ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](84, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](85, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](86, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](87, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](88, "But also the leap into electronic typesetting, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](90, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](91, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](92, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](93, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](94, "See More (40)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](95, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](97, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](98, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](99, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](100, " Integrating WordPress with Your Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](101, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](102, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](103, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](104, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](105, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](106, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](107, "It was popularised in the 1960s with the release");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](108, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](109, "Review");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](110, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](111, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](112, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](113, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](114, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](115, "Etraset sheets containing Lorem Ipsum passages");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](116, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](117, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](118, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](119, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](120, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](121, "Desktop publishing software like Aldus PageMaker ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](122, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](123, "Articles");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](124, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](125, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](126, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](127, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](128, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](129, "Making this the first true generator on the Internet.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](130, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](131, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](132, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](133, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](134, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](135, "See More (90)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](136, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](137, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](138, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](139, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](140, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](141, "WordPress Site Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](142, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](143, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](144, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](145, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](146, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](147, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](148, "The point of using Lorem Ipsum is that it has a more-or-less ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](149, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](150, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](151, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](152, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](153, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](154, "Normal distribution of letters, as opposed to using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](155, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](156, "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](157, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](158, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](159, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](160, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](161, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](162, "Lorem Ipsum, you need to be sure there isn't anything ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](163, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](164, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](165, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](166, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](167, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](168, "Repetition, injected humour, or non words etc");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](169, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](170, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](171, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](172, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](173, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](174, "See More (50)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](175, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](176, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](177, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](178, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](179, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](180, " Meta Tags in WordPress");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](181, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](182, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](183, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](184, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](185, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](186, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](187, "Nemo enim ipsam voluptatem quia voluptas sit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](188, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](189, "Popular");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](190, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](191, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](192, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](193, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](194, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](195, "Ipsum quia dolor sit amet, consectetur");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](196, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](197, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](198, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](199, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](200, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](201, "Sed quia non numquam eius modi tempora incidunt");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](202, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](203, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](204, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](205, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](206, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](207, "Lorem eum fugiat quo voluptas nulla pariatu");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](208, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](209, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](210, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](211, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](212, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](213, "See More (90)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](214, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](215, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](216, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](217, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](218, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](219, "WordPress in Your Language");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](220, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](221, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](222, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](223, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](224, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](225, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](226, "Desktop publishing software like Aldus PageMaker");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](227, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](228, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](229, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](230, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](231, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](232, "Etraset sheets containing Lorem Ipsum passages");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](233, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](234, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](235, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](236, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](237, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](238, "It was popularised in the 1960s with the release");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](239, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](240, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](241, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](242, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](243, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](244, "Making this the first true generator on the Internet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](245, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](246, "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](247, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](248, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](249, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](250, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](251, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](252, "See More (50)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](253, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](254, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](255, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](256, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](257, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](258, "Know Your Sources");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](259, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](260, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](261, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](262, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](263, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](264, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](265, "The point of using Lorem Ipsum ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](266, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](267, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](268, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](269, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](270, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](271, "It has a more-or-less normal distribution of letters");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](272, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](273, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](274, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](275, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](276, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](277, "Et harum quidem rerum facilis est et expedita");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](278, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](279, "Article");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](280, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](281, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](282, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](283, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](284, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](285, "Nam libero tempore, cum soluta nobis est eligendi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](286, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](287, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](288, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](289, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](290, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](291, "See More (26)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](292, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](293, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](294, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](295, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](296, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](297, "Validating a Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](298, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](299, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](300, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](301, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](302, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](303, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](304, "When our power of choice is untrammelled ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](305, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](306, "Review");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](307, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](308, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](309, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](310, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](311, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](312, "It will frequently occur that pleasures ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](313, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](314, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](315, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](316, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](317, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](318, "who fail in their duty through weakness ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](319, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](320, "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](321, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](322, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](323, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](324, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](325, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](326, " At vero eos et accusamus et iusto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](327, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](328, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](329, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](330, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](331, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](332, "See More (10)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](333, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](334, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](335, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](336, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](337, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](338, "Quick Questions are answered");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](339, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](340, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](341, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](342, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](343, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](344, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](345, "Quis autem vel eum iure reprehenderit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](346, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](347, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](348, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](349, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](350, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](351, "Ducimus blanditiis praesentium voluptatum");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](352, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](353, "Popular");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](354, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](355, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](356, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](357, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](358, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](359, "Omnis voluptas assumenda est");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](360, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](361, "Review");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](362, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](363, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](364, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](365, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](366, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](367, "Produces no resultant pleasure");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](368, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](369, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](370, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](371, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](372, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](373, "See More (21)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](374, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](375, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](376, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](377, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](378, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](379, "Integrating WordPress with Your Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](380, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](381, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](382, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](383, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](384, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](385, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](386, "Lorem Ipsum passage, and going through");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](387, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](388, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](389, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](390, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](391, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](392, "The first line of Lorem Ipsum, Lorem ipsum ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](393, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](394, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](395, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](396, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](397, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](398, "Thus comes from a line in section");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](399, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](400, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](401, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](402, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](403, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](404, "First true generator on the Internet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](405, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](406, "On hold");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](407, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](408, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](409, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](410, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](411, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](412, "See More (34)");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](413, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](414, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](415, "h5", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](416, "Featured Tutorials");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](417, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](418, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](419, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](420, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](421, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](422, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](423, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](424, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](425, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](426, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](427, "i", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](428, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](429, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](430, " Web Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](431, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](432, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](433, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](434, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](435, "Dec 15, 2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](436, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](437, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](438, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](439, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](440, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](441, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](442, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](443, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](444, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](445, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](446, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](447, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](448, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](449, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](450, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](451, "i", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](452, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](453, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](454, "Web Development");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](455, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](456, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](457, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](458, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](459, "Dec 15, 2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](460, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](461, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](462, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](463, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](464, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](465, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](466, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](467, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](468, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](469, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](470, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](471, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](472, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](473, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](474, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](475, "i", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](476, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](477, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](478, "UI Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](479, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](480, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](481, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](482, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](483, "Dec 15, 2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](484, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](485, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](486, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](487, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](488, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](489, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](490, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](491, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](492, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](493, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](494, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](495, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](496, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](497, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](498, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](499, "i", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](500, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](501, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](502, " UX Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](503, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](504, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](505, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](506, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](507, "Dec 15, 2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](508, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](509, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](510, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](511, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](512, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](513, "i", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](514, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](515, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](516, "h5", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](517, "Latest articles and videos");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](518, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](519, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](520, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](521, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](522, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](523, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](524, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](525, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](526, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](527, "h6", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](528, "Using Video");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](529, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](530, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](531, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](532, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](533, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](534, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](535, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](536, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](537, "h6", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](538, "Vel illum qu");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](539, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](540, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](541, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](542, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](543, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](544, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](545, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](546, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](547, "h6", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](548, " Cum sociis natoqu");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](549, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](550, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](551, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](552, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](553, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](554, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](555, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](556, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](557, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](558, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](559, "h6", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](560, " Donec pede justo");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](561, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](562, " Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](563, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](564, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](565, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](566, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](567, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](568, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](569, "h6", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](570, " Nam quam nunc");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](571, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](572, " Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](573, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](574, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](575, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](576, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](577, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](578, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](579, "h6", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](580, "Using Video ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](581, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](582, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](583, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](584, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](585, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](586, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](587, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](588, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](589, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](590, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](591, "h6", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](592, " Vel illum qu");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](593, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](594, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](595, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](596, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](597, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](598, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](599, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](600, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](601, "h6", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](602, " Cum sociis natoqu");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](603, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](604, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](605, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](606, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](607, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](608, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](609, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](610, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](611, "h6", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](612, "Donec pede justo");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](613, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](614, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "Knowledgebase")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](4, _c0))("active_item", "Knowledgebase");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](5, _c1));
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrbm93bGVkZ2UtYmFzZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    67505: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KnowledgeBaseModule": function KnowledgeBaseModule() {
          return (
            /* binding */
            _KnowledgeBaseModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-search-filter */
      44981);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./knowledge-base-routing.module */
      23915);
      /* harmony import */


      var _knowledge_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./knowledge-base.component */
      62372);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _KnowledgeBaseModule = function _KnowledgeBaseModule() {
        _classCallCheck(this, _KnowledgeBaseModule);
      };

      _KnowledgeBaseModule.??fac = function KnowledgeBaseModule_Factory(t) {
        return new (t || _KnowledgeBaseModule)();
      };

      _KnowledgeBaseModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _KnowledgeBaseModule
      });
      _KnowledgeBaseModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_2__.KnowledgeBaseRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_KnowledgeBaseModule, {
          declarations: [_knowledge_base_component__WEBPACK_IMPORTED_MODULE_3__.KnowledgeBaseComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_2__.KnowledgeBaseRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule]
        });
      })();
      /***/

    },

    /***/
    61179: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KB_DB": function KB_DB() {
          return (
            /* binding */
            _KB_DB
          );
        }
        /* harmony export */

      });

      var _KB_DB = function _KB_DB(_sanitizer) {
        _classCallCheck(this, _KB_DB);

        this._sanitizer = _sanitizer;
      };

      _KB_DB.Kb_Category = [{
        title: 'Quick Questions are answered',
        desc: "\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Lorem Ipsum is simply dummy text of the printing</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Lorem Ipsum has been the industry's standard dummy </span><span class=\"badge badge-primary pull-right\">New</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>When an unknown printer took a galley </span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>But also the leap into electronic typesetting, </span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"arrow-right\"></i></span><span>See More (40)</span></a></li>"
      }, {
        title: 'Integrating WordPress with Your Website',
        desc: "\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>It was popularised in the 1960s with the release</span><span class=\"badge badge-primary pull-right\">Review</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Etraset sheets containing Lorem Ipsum passages</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Desktop publishing software like Aldus PageMaker </span><span class=\"badge badge-primary pull-right\">Articles</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Making this the first true generator on the Internet.</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"arrow-right\"></i></span><span>See More (90)</span></a></li>"
      }, {
        title: 'WordPress Site Maintenance',
        desc: "\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>The point of using Lorem Ipsum is that it has a more-or-less </span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Normal distribution of letters, as opposed to using </span><span class=\"badge badge-primary pull-right\">Closed</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Lorem Ipsum, you need to be sure there isn't anything  </span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Repetition, injected humour, or non-characteristic words etc</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"arrow-right\"></i></span><span>See More (50)</span></a></li>"
      }, {
        title: ' Meta Tags in WordPress',
        desc: "\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Nemo enim ipsam voluptatem quia voluptas sit  </span><span class=\"badge badge-primary pull-right\">Popular</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Ipsum quia dolor sit amet, consectetur</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Sed quia non numquam eius modi tempora incidunt</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Lorem eum fugiat quo voluptas nulla pariatu</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"arrow-right\"></i></span><span>See More (90)</span></a></li>"
      }, {
        title: 'WordPress in Your Language',
        desc: "\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Desktop publishing software like Aldus PageMaker</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Etraset sheets containing Lorem Ipsum passages</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>It was popularised in the 1960s with the release</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Making this the first true generator on the Internet</span><span class=\"badge badge-primary pull-right\">Closed</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"arrow-right\"></i></span><span>See More (50)</span></a></li>"
      }, {
        title: 'Know Your Sources',
        desc: "\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>The point of using Lorem Ipsum </span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>It has a more-or-less normal distribution of letters</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Et harum quidem rerum facilis est et expedita</span><span class=\"badge badge-primary pull-right\">Article</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Nam libero tempore, cum soluta nobis est eligendi </span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"arrow-right\"></i></span><span>See More (26)</span></a></li>"
      }, {
        title: 'Validating a Website',
        desc: "\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>When our power of choice is untrammelled </span><span class=\"badge badge-primary pull-right\">Review</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>It will frequently occur that pleasures  </span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>who fail in their duty through weakness </span><span class=\"badge badge-primary pull-right\">Closed</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span> At vero eos et accusamus et iusto </span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"arrow-right\"></i></span><span>See More (10)</span></a></li>"
      }, {
        title: 'Quick Questions are answered',
        desc: "\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Quis autem vel eum iure reprehenderit  </span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Ducimus  blanditiis praesentium voluptatum</span><span class=\"badge badge-primary pull-right\">Popular</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Omnis voluptas assumenda est</span><span class=\"badge badge-primary pull-right\">Review</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Produces no resultant pleasure</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"arrow-right\"></i></span><span>See More (21)</span></a></li>"
      }, {
        title: 'Integrating WordPress with Your Website',
        desc: "\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Lorem Ipsum passage, and going through</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>The first line of Lorem Ipsum,  Lorem ipsum </span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>Thus comes from a line in section</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"file-text\"></i></span><span>First true generator on the Internet</span><span class=\"badge badge-primary pull-right\">On hold</span></a></li>\n                <li><a  href=\"javascript:void(0)\"><span><i data-feather=\"arrow-right\"></i></span><span>See More (34)</span></a></li>"
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_knowledge-base_knowledge-base_module_ts-es5.js.map