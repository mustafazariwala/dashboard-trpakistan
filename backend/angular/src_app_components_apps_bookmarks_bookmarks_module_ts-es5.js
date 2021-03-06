(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_bookmarks_bookmarks_module_ts"], {
    /***/
    20964: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookmarksRoutingModule": function BookmarksRoutingModule() {
          return (
            /* binding */
            _BookmarksRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _bookmarks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bookmarks.component */
      22070);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _bookmarks_component__WEBPACK_IMPORTED_MODULE_0__.BookmarksComponent
        }]
      }];

      var _BookmarksRoutingModule = function _BookmarksRoutingModule() {
        _classCallCheck(this, _BookmarksRoutingModule);
      };

      _BookmarksRoutingModule.??fac = function BookmarksRoutingModule_Factory(t) {
        return new (t || _BookmarksRoutingModule)();
      };

      _BookmarksRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _BookmarksRoutingModule
      });
      _BookmarksRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_BookmarksRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    22070: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookmarksComponent": function BookmarksComponent() {
          return (
            /* binding */
            _BookmarksComponent
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


      var _modal_add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modal/add-bookmark/add-bookmark.component */
      13930);
      /* harmony import */


      var _modal_edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal/edit-bookmark/edit-bookmark.component */
      66569);
      /* harmony import */


      var _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal/create-tag/create-tag.component */
      75602);

      var _c0 = ["addbookmark"];
      var _c1 = ["editbookmark"];
      var _c2 = ["createTag"];

      var _c3 = function _c3() {
        return ["Apps"];
      };

      var _BookmarksComponent = /*#__PURE__*/function () {
        function _BookmarksComponent() {
          _classCallCheck(this, _BookmarksComponent);

          this.listBookmark = false;
        }

        _createClass(_BookmarksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeLayoutBookmark",
          value: function changeLayoutBookmark() {
            this.listBookmark = !this.listBookmark;
          }
        }]);

        return _BookmarksComponent;
      }();

      _BookmarksComponent.??fac = function BookmarksComponent_Factory(t) {
        return new (t || _BookmarksComponent)();
      };

      _BookmarksComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({
        type: _BookmarksComponent,
        selectors: [["app-bookmarks"]],
        viewQuery: function BookmarksComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_c1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_c2, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.AddBookmark = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.EditBookmark = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.CreateTag = _t.first);
          }
        },
        decls: 664,
        vars: 6,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "email-wrap", "bookmark-wrap"], [1, "row"], [1, "col-xl-3", "box-col-6"], [1, "email-left-aside"], [1, "card"], [1, "card-body"], [1, "email-app-sidebar", "left-bookmark"], [1, "media"], [1, "media-size-email"], ["src", "assets/images/user/user.png", "alt", "", 1, "mr-3", "rounded-circle"], [1, "media-body"], [1, "f-w-600"], ["role", "tablist", 1, "nav", "main-menu"], [1, "nav-item"], ["type", "button", 1, "badge-light-primary", "btn-block", "btn-mail", 3, "click"], ["data-feather", "bookmark", 1, "mr-2"], [1, "main-title"], ["id", "pills-created-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-created", "aria-selected", "true"], [1, "title"], ["id", "pills-favourites-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-favourites", "aria-selected", "false", 1, "show"], ["id", "pills-shared-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-shared", "aria-selected", "false", 1, "show"], ["id", "pills-bookmark-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-bookmark", "aria-selected", "false", 1, "show"], [1, "pull-right"], ["href", "javascript:void(0)", 3, "click"], ["data-feather", "plus-circle"], ["id", "pills-notification-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-notification", "aria-selected", "false", 1, "show"], ["id", "pills-newsletter-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-newsletter", "aria-selected", "false", 1, "show"], ["id", "pills-business-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-business-tab", "aria-selected", "false", 1, "show"], ["id", "pills-holidays-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-holidays-tab", "aria-selected", "false", 1, "show"], ["id", "pills-important-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-important-tab", "aria-selected", "false", 1, "show"], ["id", "pills-orgenization-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-orgenization-tab", "aria-selected", "false", 1, "show"], [1, "col-xl-9", "col-md-12", "box-col-12"], [1, "email-right-aside", "bookmark-tabcontent"], [1, "card", "email-body", "radius-left"], [1, "pl-0"], [1, "tab-content"], ["id", "pills-created", "role", "tabpanel", "aria-labelledby", "pills-created-tab", 1, "tab-pane", "fade", "active", "show"], [1, "card", "mb-0"], [1, "card-header", "d-flex"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "grid-bookmark-view", 3, "click"], ["data-feather", "grid"], ["href", "javascript:void(0)", 1, "list-layout-view", 3, "click"], ["data-feather", "list"], [1, "card-body", "pb-0"], [1, "details-bookmark", "text-center"], ["id", "bookmarkData", 1, "row"], [1, "col-xl-3", "col-md-4", "xl-50"], [1, "card", "card-with-border", "bookmark-card", "o-hidden"], [1, "details-website"], ["src", "assets/images/lightgallry/01.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_0"], ["href", "javascript:void(0)"], [1, "fa", "fa-star"], [1, "desciption-data"], [1, "title-bookmark"], [1, "title_0"], [1, "weburl_0"], [1, "hover-block"], ["href", "javascript:void(0)", "data-toggle", "modal", 3, "click"], ["data-feather", "edit-2"], ["data-feather", "link"], ["data-feather", "share-2"], ["data-feather", "trash-2"], [1, "pull-right", "text-right"], ["data-feather", "tag"], [1, "content-general"], [1, "desc_0"], [1, "collection_0"], ["src", "assets/images/lightgallry/02.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_1"], [1, "title_1"], [1, "weburl_1"], [1, "desc_1"], [1, "collection_1"], ["src", "assets/images/lightgallry/03.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_2"], [1, "title_2"], [1, "weburl_2"], [1, "desc_2"], [1, "collection_2"], ["src", "assets/images/lightgallry/04.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_3"], [1, "title_3"], [1, "weburl_3"], [1, "desc_3"], [1, "collection_3"], ["src", "assets/images/lightgallry/05.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_4"], [1, "title_4"], [1, "weburl_4"], [1, "desc_4"], [1, "collection_4"], ["src", "assets/images/lightgallry/06.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_5"], [1, "title_5"], [1, "weburl_5"], [1, "desc_5"], [1, "collection_5"], ["id", "pills-favourites", "role", "tabpanel", "aria-labelledby", "pills-favourites-tab", 1, "fade", "tab-pane"], ["href", "javascript:void(0)", 1, "grid-bookmark-view"], ["href", "javascript:void(0)", 1, "list-layout-view"], ["id", "favouriteData", 1, "row"], [1, "no-favourite"], ["id", "pills-shared", "role", "tabpanel", "aria-labelledby", "pills-shared-tab", 1, "fade", "tab-pane"], ["id", "pills-bookmark", "role", "tabpanel", "aria-labelledby", "pills-bookmark-tab", 1, "fade", "tab-pane"], ["id", "bookmarkData1", 1, "row"], ["src", "assets/images/lightgallry/07.jpg", "alt", "", 1, "img-fluid"], ["id", "pills-notification", "role", "tabpanel", "aria-labelledby", "pills-notification-tab", 1, "fade", "tab-pane"], ["id", "pills-newsletter", "role", "tabpanel", "aria-labelledby", "pills-newsletter-tab", 1, "fade", "tab-pane"], ["id", "pills-business", "role", "tabpanel", "aria-labelledby", "pills-business-tab", 1, "fade", "tab-pane"], ["id", "pills-holidays", "role", "tabpanel", "aria-labelledby", "pills-holidays-tab", 1, "fade", "tab-pane"], ["id", "pills-important", "role", "tabpanel", "aria-labelledby", "pills-important-tab", 1, "fade", "tab-pane"], ["id", "pills-orgenization", "role", "tabpanel", "aria-labelledby", "pills-orgenization-tab", 1, "fade", "tab-pane"], ["addbookmark", ""], ["editbookmark", ""], ["createTag", ""]],
        template: function BookmarksComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_button_click_19_listener() {
              return ctx.AddBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](20, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21, " New Bookmark");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](28, " Created by me");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](32, " Favourites");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](36, " Shared with me");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](38, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](39, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](40, " My bookmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](42, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](44, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](45, " Tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](46, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](47, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_47_listener() {
              return ctx.CreateTag.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](48, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](50, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](51, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](52, " notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](54, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](55, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](56, " Newsletter");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](58, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](59, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](60, " Business");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](62, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](63, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](64, " Holidays");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](66, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](67, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](68, " Important");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](70, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](71, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](72, " Orgenization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](73, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](74, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](75, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](76, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](77, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](78, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](79, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](80, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](81, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](82, "Created by me");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](83, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](85, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_85_listener() {
              return ctx.changeLayoutBookmark();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](86, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](88, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_88_listener() {
              return ctx.changeLayoutBookmark();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](89, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](90, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](91, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](92, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](93, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](94, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](95, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](96, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](97, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](98, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](99, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](100, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](101, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](102, "h6", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](103, "Admin Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](104, "p", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](105, "http://admin.pixelstrap.com//ltr/landing-page.html");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](106, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](107, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](108, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](109, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_109_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](110, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](111, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](112, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](113, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](114, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](115, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](116, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](117, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](118, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](119, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](120, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](121, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](122, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](123, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](124, "p", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](125, " is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](126, "span", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](127, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](128, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](129, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](130, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](131, "img", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](132, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](133, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](134, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](135, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](136, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](137, "h6", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](138, "Universal Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](139, "p", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](140, "https://angular.pixelstrap.com/universal/landing");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](141, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](142, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](143, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](144, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_144_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](145, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](146, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](147, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](148, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](149, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](150, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](151, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](152, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](153, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](154, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](155, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](156, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](157, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](158, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](159, "p", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](160, "Universal is beautifully crafted, clean and modern designed admin theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](161, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](162, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](163, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](164, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](165, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](166, "img", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](167, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](168, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](169, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](170, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](171, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](172, "h6", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](173, "Angular Theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](174, "p", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](175, "https://angular.pixelstrap.com/cuba/landing");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](176, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](177, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](178, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](179, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_179_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](180, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](181, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](182, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](183, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](184, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](185, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](186, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](187, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](188, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](189, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](190, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](191, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](192, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](193, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](194, "p", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](195, "Cuba is beautifully crafted, clean and modern designed admin theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](196, "span", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](197, "Fs");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](198, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](199, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](200, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](201, "img", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](202, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](203, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](204, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](205, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](206, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](207, "h6", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](208, "Multikart Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](209, "p", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](210, "http://themes.pixelstrap.com/multikart/back-end/index.html");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](211, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](212, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](213, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](214, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_214_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](215, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](216, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](217, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](218, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](219, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](220, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](221, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](222, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](223, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](224, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](225, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](226, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](227, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](228, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](229, "p", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](230, "Multikart Admin is modern designed admin theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](231, "span", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](232, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](233, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](234, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](235, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](236, "img", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](237, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](238, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](239, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](240, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](241, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](242, "h6", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](243, "Ecommerece theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](244, "p", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](245, "http://themes.pixelstrap.com/multikart");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](246, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](247, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](248, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](249, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_249_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](250, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](251, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](252, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](253, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](254, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](255, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](256, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](257, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](258, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](259, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](260, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](261, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](262, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](263, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](264, "p", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](265, "Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](266, "span", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](267, "General ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](268, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](269, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](270, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](271, "img", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](272, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](273, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](274, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](275, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](276, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](277, "h6", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](278, "Tovo app landing page");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](279, "p", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](280, "http://vue.pixelstrap.com/tovo/home-one");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](281, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](282, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](283, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](284, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_284_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](285, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](286, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](287, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](288, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](289, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](290, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](291, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](292, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](293, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](294, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](295, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](296, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](297, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](298, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](299, "p", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](300, "Amazing Landing Page With Easy Customization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](301, "span", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](302, "Fs ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](303, "div", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](304, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](305, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](306, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](307, "Favourites");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](308, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](309, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](310, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](311, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](312, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](313, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](314, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](315, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](316, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](317, "div", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](318, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](319, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](320, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](321, "div", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](322, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](323, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](324, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](325, "Shared with me");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](326, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](327, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](328, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](329, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](330, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](331, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](332, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](333, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](334, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](335, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](336, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](337, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](338, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](339, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](340, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](341, "My bookmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](342, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](343, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](344, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](345, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](346, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](347, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](348, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](349, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](350, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](351, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](352, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](353, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](354, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](355, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](356, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](357, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](358, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](359, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](360, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](361, "h6", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](362, "Admin Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](363, "p", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](364, "http://admin.pixelstrap.com/Cuba/ltr/landing-page.html");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](365, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](366, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](367, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](368, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_368_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](369, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](370, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](371, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](372, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](373, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](374, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](375, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](376, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](377, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](378, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](379, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](380, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](381, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](382, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](383, "p", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](384, "Cuba is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](385, "span", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](386, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](387, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](388, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](389, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](390, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](391, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](392, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](393, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](394, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](395, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](396, "h6", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](397, "Universal Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](398, "p", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](399, "https://angular.pixelstrap.com/universal/landing");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](400, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](401, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](402, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](403, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_403_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](404, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](405, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](406, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](407, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](408, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](409, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](410, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](411, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](412, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](413, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](414, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](415, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](416, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](417, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](418, "p", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](419, "Universal is beautifully crafted, clean and modern designed admin theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](420, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](421, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](422, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](423, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](424, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](425, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](426, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](427, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](428, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](429, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](430, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](431, "h6", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](432, "Angular Theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](433, "p", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](434, "https://angular.pixelstrap.com/cuba/landing");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](435, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](436, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](437, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](438, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_438_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](439, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](440, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](441, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](442, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](443, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](444, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](445, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](446, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](447, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](448, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](449, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](450, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](451, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](452, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](453, "p", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](454, "Cuba is beautifully crafted, clean and modern designed admin theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](455, "span", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](456, "Fs");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](457, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](458, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](459, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](460, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](461, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](462, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](463, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](464, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](465, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](466, "h6", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](467, "Multikart Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](468, "p", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](469, "http://themes.pixelstrap.com/multikart/back-end/index.html");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](470, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](471, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](472, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](473, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_473_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](474, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](475, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](476, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](477, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](478, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](479, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](480, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](481, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](482, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](483, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](484, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](485, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](486, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](487, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](488, "p", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](489, "Multikart Admin is modern designed admin theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](490, "span", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](491, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](492, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](493, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](494, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](495, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](496, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](497, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](498, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](499, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](500, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](501, "h6", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](502, "Ecommerece theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](503, "p", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](504, "http://themes.pixelstrap.com/multikart");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](505, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](506, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](507, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](508, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_508_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](509, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](510, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](511, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](512, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](513, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](514, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](515, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](516, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](517, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](518, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](519, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](520, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](521, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](522, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](523, "p", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](524, "Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](525, "span", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](526, "General ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](527, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](528, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](529, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](530, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](531, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](532, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](533, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](534, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](535, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](536, "h6", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](537, "Tovo app landing page");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](538, "p", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](539, "http://vue.pixelstrap.com/tovo/home-one");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](540, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](541, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](542, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](543, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BookmarksComponent_Template_a_click_543_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](544, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](545, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](546, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](547, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](548, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](549, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](550, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](551, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](552, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](553, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](554, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](555, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](556, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](557, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](558, "p", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](559, "Amazing Landing Page With Easy Customization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](560, "span", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](561, "Fs ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](562, "div", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](563, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](564, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](565, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](566, "notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](567, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](568, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](569, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](570, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](571, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](572, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](573, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](574, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](575, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](576, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](577, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](578, "div", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](579, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](580, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](581, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](582, "Newsletter");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](583, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](584, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](585, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](586, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](587, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](588, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](589, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](590, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](591, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](592, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](593, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](594, "div", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](595, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](596, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](597, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](598, "Business");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](599, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](600, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](601, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](602, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](603, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](604, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](605, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](606, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](607, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](608, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](609, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](610, "div", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](611, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](612, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](613, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](614, "Holidays");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](615, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](616, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](617, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](618, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](619, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](620, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](621, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](622, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](623, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](624, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](625, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](626, "div", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](627, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](628, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](629, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](630, "Important");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](631, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](632, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](633, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](634, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](635, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](636, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](637, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](638, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](639, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](640, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](641, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](642, "div", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](643, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](644, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](645, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](646, "Orgenization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](647, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](648, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](649, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](650, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](651, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](652, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](653, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](654, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](655, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](656, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](657, "No Bookmarks Found.");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](658, "app-add-bookmark", null, 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](660, "app-edit-bookmark", null, 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](662, "app-create-tag", null, 118);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("title", "Bookmark")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](5, _c3))("active_item", "Bookmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](91);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????classProp"]("list-bookmark", ctx.listBookmark);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _modal_add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_1__.AddBookmarkComponent, _modal_edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_2__.EditBookmarkComponent, _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_3__.CreateTagComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rbWFya3MuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    53711: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookmarksModule": function BookmarksModule() {
          return (
            /* binding */
            _BookmarksModule
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


      var _bookmarks_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bookmarks-routing.module */
      20964);
      /* harmony import */


      var _bookmarks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bookmarks.component */
      22070);
      /* harmony import */


      var _modal_add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal/add-bookmark/add-bookmark.component */
      13930);
      /* harmony import */


      var _modal_edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modal/edit-bookmark/edit-bookmark.component */
      66569);
      /* harmony import */


      var _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modal/create-tag/create-tag.component */
      75602);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BookmarksModule = function _BookmarksModule() {
        _classCallCheck(this, _BookmarksModule);
      };

      _BookmarksModule.??fac = function BookmarksModule_Factory(t) {
        return new (t || _BookmarksModule)();
      };

      _BookmarksModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({
        type: _BookmarksModule
      });
      _BookmarksModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _bookmarks_routing_module__WEBPACK_IMPORTED_MODULE_1__.BookmarksRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](_BookmarksModule, {
          declarations: [_bookmarks_component__WEBPACK_IMPORTED_MODULE_2__.BookmarksComponent, _modal_add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_3__.AddBookmarkComponent, _modal_edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_4__.EditBookmarkComponent, _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_5__.CreateTagComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _bookmarks_routing_module__WEBPACK_IMPORTED_MODULE_1__.BookmarksRoutingModule]
        });
      })();
      /***/

    },

    /***/
    13930: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddBookmarkComponent": function AddBookmarkComponent() {
          return (
            /* binding */
            _AddBookmarkComponent
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

      var _c0 = ["addBookmark"];

      function AddBookmarkComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Bookmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddBookmarkComponent_ng_template_0_Template_button_click_3_listener() {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Web Url");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "My Bookmarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "fs");

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

      var _AddBookmarkComponent = /*#__PURE__*/function () {
        function _AddBookmarkComponent(platformId, modalService) {
          _classCallCheck(this, _AddBookmarkComponent);

          this.platformId = platformId;
          this.modalService = modalService;
          this.modalOpen = false;
        }

        _createClass(_AddBookmarkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal() {
            var _this = this;

            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
              // For SSR 
              this.modalService.open(this.addBookmark, {
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

        return _AddBookmarkComponent;
      }();

      _AddBookmarkComponent.??fac = function AddBookmarkComponent_Factory(t) {
        return new (t || _AddBookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
      };

      _AddBookmarkComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _AddBookmarkComponent,
        selectors: [["app-add-bookmark"]],
        viewQuery: function AddBookmarkComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.addBookmark = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["addBookmark", ""], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", "data-original-title", "", "title", "", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "bookmark-form", "novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "form-row"], [1, "form-group", "col-md-12"], ["for", "bm-weburl"], ["id", "bm-weburl", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], ["for", "bm-title"], ["id", "bm-title", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], ["id", "bm-desc", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "col-md-6", "mb-0"], ["id", "bm-group", 1, "js-example-basic-single"], ["value", "bookmark"], ["id", "bm-collection", 1, "js-example-disabled-results"], ["value", "general"], ["value", "fs"], ["id", "index_var", "type", "hidden", "value", "6"], ["id", "Bookmark", "type", "submit", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "mr-1"]],
        template: function AddBookmarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, AddBookmarkComponent_ng_template_0_Template, 40, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYm9va21hcmsuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    75602: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreateTagComponent": function CreateTagComponent() {
          return (
            /* binding */
            _CreateTagComponent
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

      var _c0 = ["createTag"];

      function CreateTagComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Create Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CreateTagComponent_ng_template_0_Template_button_click_3_listener() {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Tag Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Tag color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _CreateTagComponent = /*#__PURE__*/function () {
        function _CreateTagComponent(platformId, modalService) {
          _classCallCheck(this, _CreateTagComponent);

          this.platformId = platformId;
          this.modalService = modalService;
          this.modalOpen = false;
        }

        _createClass(_CreateTagComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal() {
            var _this2 = this;

            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
              // For SSR 
              this.modalService.open(this.CreateTag, {
                size: 'lg',
                ariaLabelledBy: 'modal-bookmark',
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

        return _CreateTagComponent;
      }();

      _CreateTagComponent.??fac = function CreateTagComponent_Factory(t) {
        return new (t || _CreateTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
      };

      _CreateTagComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _CreateTagComponent,
        selectors: [["app-create-tag"]],
        viewQuery: function CreateTagComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.CreateTag = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["createTag", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "form-row"], [1, "form-group", "col-md-12"], ["type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "col-md-12", "mb-0"], ["type", "color", "value", "#563d7c", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "mr-1"]],
        template: function CreateTagComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, CreateTagComponent_ng_template_0_Template, 21, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdGFnLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    66569: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditBookmarkComponent": function EditBookmarkComponent() {
          return (
            /* binding */
            _EditBookmarkComponent
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

      var _c0 = ["editBookmark"];

      function EditBookmarkComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Edit Bookmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditBookmarkComponent_ng_template_0_Template_button_click_3_listener() {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Web Url");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Cuba is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "My Bookmarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "fs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _EditBookmarkComponent = /*#__PURE__*/function () {
        function _EditBookmarkComponent(platformId, modalService) {
          _classCallCheck(this, _EditBookmarkComponent);

          this.platformId = platformId;
          this.modalService = modalService;
          this.modalOpen = false;
        }

        _createClass(_EditBookmarkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal() {
            var _this3 = this;

            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
              // For SSR 
              this.modalService.open(this.EditBookmark, {
                size: 'lg',
                ariaLabelledBy: 'modal-bookmark',
                centered: true,
                windowClass: 'modal-bookmark'
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

        return _EditBookmarkComponent;
      }();

      _EditBookmarkComponent.??fac = function EditBookmarkComponent_Factory(t) {
        return new (t || _EditBookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
      };

      _EditBookmarkComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _EditBookmarkComponent,
        selectors: [["app-edit-bookmark"]],
        viewQuery: function EditBookmarkComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.EditBookmark = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["editBookmark", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "form-row"], [1, "form-group", "col-md-12"], ["id", "editurl", "type", "text", "required", "", "autocomplete", "off", "value", "http://admin.pixelstrap.com/Cuba/ltr/landing-page.html", 1, "form-control"], ["id", "edittitle", "type", "text", "required", "", "autocomplete", "off", "value", "Admin Template", 1, "form-control"], ["id", "editdesc", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "col-md-6", "mb-0"], [1, "js-example-basic-single"], ["value", "AL"], [1, "js-example-disabled-results"], ["value", "general"], ["value", "fs"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary"]],
        template: function EditBookmarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, EditBookmarkComponent_ng_template_0_Template, 40, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWJvb2ttYXJrLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_bookmarks_bookmarks_module_ts-es5.js.map