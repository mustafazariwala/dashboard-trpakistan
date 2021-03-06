(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_file-manager_file-manager_module_ts"], {
    /***/
    70188: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FileManagerRoutingModule": function FileManagerRoutingModule() {
          return (
            /* binding */
            _FileManagerRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _file_manager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./file-manager.component */
      15888);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _file_manager_component__WEBPACK_IMPORTED_MODULE_0__.FileManagerComponent
        }]
      }];

      var _FileManagerRoutingModule = function _FileManagerRoutingModule() {
        _classCallCheck(this, _FileManagerRoutingModule);
      };

      _FileManagerRoutingModule.??fac = function FileManagerRoutingModule_Factory(t) {
        return new (t || _FileManagerRoutingModule)();
      };

      _FileManagerRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _FileManagerRoutingModule
      });
      _FileManagerRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_FileManagerRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    15888: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FileManagerComponent": function FileManagerComponent() {
          return (
            /* binding */
            _FileManagerComponent
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _c0 = function _c0() {
        return ["Apps"];
      };

      var _FileManagerComponent = /*#__PURE__*/function () {
        function _FileManagerComponent() {
          _classCallCheck(this, _FileManagerComponent);
        }

        _createClass(_FileManagerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FileManagerComponent;
      }();

      _FileManagerComponent.??fac = function FileManagerComponent_Factory(t) {
        return new (t || _FileManagerComponent)();
      };

      _FileManagerComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _FileManagerComponent,
        selectors: [["app-file-manager"]],
        decls: 264,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-3", "box-col-6", "pr-0"], [1, "file-sidebar"], [1, "card"], [1, "card-body"], [1, "btn", "btn-primary"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-home"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "btn", "btn-light"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-folder"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-clock"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-star"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-alert-circle"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12", "y2", "16"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-trash-2"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "btn", "btn-outline-primary"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-database"], ["cx", "12", "cy", "5", "rx", "9", "ry", "3"], ["d", "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"], ["d", "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"], [1, "m-t-15"], [1, "progress", "sm-progress-bar", "mb-1"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "25%"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-grid"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], [1, "pricing-plan"], [1, "btn", "btn-outline-primary", "btn-xs"], ["src", "assets/images/dashboard/folder.png", "alt", "", "data-original-title", "", "title", "", 1, "bg-img"], ["src", "assets/images/dashboard/folder1.png", "alt", "", "data-original-title", "", "title", "", 1, "bg-img"], [1, "col-xl-9", "col-md-12", "box-col-12"], [1, "file-content"], [1, "card-header"], [1, "media"], ["action", "#", "method", "get", 1, "form-inline"], [1, "form-group", "mb-0"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search...", "data-original-title", "", "title", "", 1, "form-control-plaintext"], [1, "media-body", "text-right"], ["action", "#", "method", "POST", "enctype", "multipart/form-data", "name", "myForm", 1, "d-inline-flex"], ["onclick", "getFile()", 1, "btn", "btn-primary", "mr-1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-plus-square"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "12", "y1", "8", "x2", "12", "y2", "16"], ["x1", "8", "y1", "12", "x2", "16", "y2", "12"], [2, "height", "0px", "width", "0px", "overflow", "hidden"], ["id", "upfile", "type", "file", "value", "upload", "onchange", "sub(this)", "data-original-title", "", "title", ""], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-upload"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], [1, "card-body", "file-manager"], [1, "mb-3"], [1, "files"], [1, "file-box"], [1, "file-top"], [1, "fa", "fa-file-image-o", "txt-primary"], [1, "fa", "fa-ellipsis-v", "f-14", "ellips"], [1, "file-bottom"], [1, "mb-1"], [1, "fa", "fa-file-archive-o", "txt-secondary"], [1, "fa", "fa-file-excel-o", "txt-success"], [1, "fa", "fa-file-text-o", "txt-info"], [1, "mt-4"], [1, "folder"], [1, "folder-box"], [1, "fa", "fa-file-archive-o", "f-36", "txt-warning"], [1, "media-body", "ml-3"], [1, "mb-0"], [1, "fa", "fa-folder", "f-36", "txt-warning"], [1, "fa", "fa-file-text-o", "txt-primary"]],
        template: function FileManagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "svg", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "path", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "polyline", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "path", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "All ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "svg", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "circle", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "polyline", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Recent ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "svg", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "polygon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Starred ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "svg", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "circle", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "line", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "line", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Recovery ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "svg", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](40, "polyline", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "path", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "line", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "line", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Deleted ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "svg", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](50, "ellipse", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](51, "path", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](52, "path", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Storage ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](56, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "25 GB of 100 GB used");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](59, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "svg", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](64, "rect", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](65, "rect", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](66, "rect", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](67, "rect", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "Pricing plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Trial Version ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, "FREE");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, " 100 GB Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "Selected");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](79, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, "Premium");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "$5/month");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](87, " 200 GB Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](90, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "form", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](98, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](99, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "form", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "svg", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](104, "rect", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](105, "line", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](106, "line", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "Add New");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](109, "input", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "svg", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](112, "path", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](113, "polyline", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](114, "line", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "Upload ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "h4", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "All Files");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, "Recently opened files");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "ul", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](124, "i", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](125, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, "Logo.psd ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "p", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "2.0 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "last open : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, "1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](137, "i", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](138, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, "Project.zip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "p", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "1.90 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, "last open : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](150, "i", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](151, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](154, "Backend.xls");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "p", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, "2.00 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "last open : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](160, "1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](163, "i", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](164, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](167, "requirements.txt ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "p", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](169, "0.90 KB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "last open : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "h6", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, "Folders");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "ul", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "li", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](179, "i", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "h6", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](182, "Endless admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](184, "204 files, 50mb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "li", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](187, "i", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "h6", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "Endless admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](192, "101 files, 10mb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "li", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](195, "i", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "h6", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](198, "Endless admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](200, "25 files, 2mb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "li", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](203, "i", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "h6", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](206, "Endless admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, "108 files, 5mb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "h6", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, "Files");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "ul", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](214, "i", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](215, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](218, "Project.zip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "p", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, "1.90 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](223, "last open : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](224, "1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](227, "i", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](228, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, "Backend.xls");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "p", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](233, "2.00 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "last open : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](237, "1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](240, "i", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](241, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](244, "requirements.txt ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "p", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](246, "0.90 KB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, "last open : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](250, "1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](253, "i", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](254, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](257, "Logo.psd ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "p", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](259, "2.0 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](262, "last open : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](263, "1 hour ago");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "File Manager")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "File Manager");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLW1hbmFnZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    21221: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FileManagerModule": function FileManagerModule() {
          return (
            /* binding */
            _FileManagerModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _file_manager_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./file-manager-routing.module */
      70188);
      /* harmony import */


      var _file_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./file-manager.component */
      15888);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FileManagerModule = function _FileManagerModule() {
        _classCallCheck(this, _FileManagerModule);
      };

      _FileManagerModule.??fac = function FileManagerModule_Factory(t) {
        return new (t || _FileManagerModule)();
      };

      _FileManagerModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _FileManagerModule
      });
      _FileManagerModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _file_manager_routing_module__WEBPACK_IMPORTED_MODULE_1__.FileManagerRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_FileManagerModule, {
          declarations: [_file_manager_component__WEBPACK_IMPORTED_MODULE_2__.FileManagerComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _file_manager_routing_module__WEBPACK_IMPORTED_MODULE_1__.FileManagerRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_file-manager_file-manager_module_ts-es5.js.map