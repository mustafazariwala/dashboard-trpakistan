(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_pages_coming-soon_coming-soon_module_ts"], {
    /***/
    98182: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComingSoonRoutingModule": function ComingSoonRoutingModule() {
          return (
            /* binding */
            _ComingSoonRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _simple_simple_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./simple/simple.component */
      73335);
      /* harmony import */


      var _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./page-with-image/page-with-image.component */
      75152);
      /* harmony import */


      var _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-with-video/page-with-video.component */
      16030);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: 'simple',
          component: _simple_simple_component__WEBPACK_IMPORTED_MODULE_0__.SimpleComponent
        }, {
          path: 'simple-with-bg-img',
          component: _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_1__.PageWithImageComponent
        }, {
          path: 'simple-with-bg-vid',
          component: _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_2__.PageWithVideoComponent
        }]
      }];

      var _ComingSoonRoutingModule = function _ComingSoonRoutingModule() {
        _classCallCheck(this, _ComingSoonRoutingModule);
      };

      _ComingSoonRoutingModule.??fac = function ComingSoonRoutingModule_Factory(t) {
        return new (t || _ComingSoonRoutingModule)();
      };

      _ComingSoonRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _ComingSoonRoutingModule
      });
      _ComingSoonRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_ComingSoonRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    15145: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComingSoonModule": function ComingSoonModule() {
          return (
            /* binding */
            _ComingSoonModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./coming-soon-routing.module */
      98182);
      /* harmony import */


      var _simple_simple_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./simple/simple.component */
      73335);
      /* harmony import */


      var _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-with-image/page-with-image.component */
      75152);
      /* harmony import */


      var _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./page-with-video/page-with-video.component */
      16030);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ComingSoonModule = function _ComingSoonModule() {
        _classCallCheck(this, _ComingSoonModule);
      };

      _ComingSoonModule.??fac = function ComingSoonModule_Factory(t) {
        return new (t || _ComingSoonModule)();
      };

      _ComingSoonModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _ComingSoonModule
      });
      _ComingSoonModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComingSoonRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_ComingSoonModule, {
          declarations: [_simple_simple_component__WEBPACK_IMPORTED_MODULE_1__.SimpleComponent, _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_2__.PageWithImageComponent, _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_3__.PageWithVideoComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComingSoonRoutingModule]
        });
      })();
      /***/

    },

    /***/
    75152: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageWithImageComponent": function PageWithImageComponent() {
          return (
            /* binding */
            _PageWithImageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PageWithImageComponent = /*#__PURE__*/function () {
        function _PageWithImageComponent() {
          _classCallCheck(this, _PageWithImageComponent);

          this.setTime();
        }

        _createClass(_PageWithImageComponent, [{
          key: "setTime",
          value: function setTime() {
            setInterval(function () {
              var countDown = new Date('Sep 30, 2019 00:00:00').getTime();
              var now = new Date().getTime();
              var distance = countDown - now;
              this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
              this.document.getElementById('hours').innerHTML = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
              this.document.getElementById('minutes').innerHTML = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
              this.document.getElementById('seconds').innerHTML = Math.floor(distance % (1000 * 60) / 1000);
            }, this.seconds);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PageWithImageComponent;
      }();

      _PageWithImageComponent.??fac = function PageWithImageComponent_Factory(t) {
        return new (t || _PageWithImageComponent)();
      };

      _PageWithImageComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _PageWithImageComponent,
        selectors: [["app-page-with-image"]],
        decls: 24,
        vars: 0,
        consts: [[1, "container-fluid", "p-0", "m-0"], [1, "comingsoon", "comingsoon-bgimg"], [1, "comingsoon-inner", "text-center"], ["src", "assets/images/other-images/coming-soon-Logo.png", "alt", "", 1, "img-100"], ["id", "clockdiv", 1, "countdown"], ["id", "days", 1, "time", "digits"], [1, "title"], ["id", "hours", 1, "time", "digits"], ["id", "minutes", 1, "time", "digits"], ["id", "seconds", 1, "time", "digits"]],
        template: function PageWithImageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "WE ARE COMING SOON");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Seconds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXdpdGgtaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    16030: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageWithVideoComponent": function PageWithVideoComponent() {
          return (
            /* binding */
            _PageWithVideoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PageWithVideoComponent = /*#__PURE__*/function () {
        function _PageWithVideoComponent() {
          _classCallCheck(this, _PageWithVideoComponent);

          this.setTime();
        }

        _createClass(_PageWithVideoComponent, [{
          key: "setTime",
          value: function setTime() {
            setInterval(function () {
              var countDown = new Date('Sep 30, 2019 00:00:00').getTime();
              var now = new Date().getTime();
              var distance = countDown - now;
              this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
              this.document.getElementById('hours').innerHTML = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
              this.document.getElementById('minutes').innerHTML = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
              this.document.getElementById('seconds').innerHTML = Math.floor(distance % (1000 * 60) / 1000);
            }, this.seconds);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PageWithVideoComponent;
      }();

      _PageWithVideoComponent.??fac = function PageWithVideoComponent_Factory(t) {
        return new (t || _PageWithVideoComponent)();
      };

      _PageWithVideoComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _PageWithVideoComponent,
        selectors: [["app-page-with-video"]],
        decls: 26,
        vars: 0,
        consts: [[1, "container-fluid", "p-0"], [1, "comingsoon", "auth-bg-video"], ["id", "bgvid", "poster", "assets/images/other-images/coming-soon-bg.jpg", "playsinline", "", "autoplay", "", "muted", "", "loop", "", 1, "bgvideo-comingsoon"], ["src", "assets/video/auth-bg.mp4", "type", "video/mp4"], [1, "comingsoon-inner", "text-center"], ["src", "assets/images/other-images/coming-soon-Logo.png", "alt", "", 1, "img-100"], ["id", "clockdiv", 1, "countdown"], ["id", "days", 1, "time", "digits"], [1, "title"], ["id", "hours", 1, "time", "digits"], ["id", "minutes", 1, "time", "digits"], ["id", "seconds", 1, "time", "digits"]],
        template: function PageWithVideoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "video", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "source", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "WE ARE COMING SOON");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Seconds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXdpdGgtdmlkZW8uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    73335: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SimpleComponent": function SimpleComponent() {
          return (
            /* binding */
            _SimpleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SimpleComponent = /*#__PURE__*/function () {
        function _SimpleComponent() {
          _classCallCheck(this, _SimpleComponent);

          this.setTime();
        }

        _createClass(_SimpleComponent, [{
          key: "setTime",
          value: function setTime() {
            setInterval(function () {
              var countDown = new Date('Sep 30, 2019 00:00:00').getTime();
              var now = new Date().getTime();
              var distance = countDown - now;
              this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
              this.document.getElementById('hours').innerHTML = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
              this.document.getElementById('minutes').innerHTML = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
              this.document.getElementById('seconds').innerHTML = Math.floor(distance % (1000 * 60) / 1000);
            }, this.seconds);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SimpleComponent;
      }();

      _SimpleComponent.??fac = function SimpleComponent_Factory(t) {
        return new (t || _SimpleComponent)();
      };

      _SimpleComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _SimpleComponent,
        selectors: [["app-simple"]],
        decls: 24,
        vars: 0,
        consts: [[1, "container-fluid", "p-0"], [1, "comingsoon"], [1, "comingsoon-inner", "text-center"], ["src", "assets/images/other-images/coming-soon-Logo.png", "alt", "", 1, "img-100"], ["id", "clockdiv", 1, "countdown"], ["id", "days", 1, "time", "digits"], [1, "title"], ["id", "hours", 1, "time", "digits"], ["id", "minutes", 1, "time", "digits"], ["id", "seconds", 1, "time", "digits"]],
        template: function SimpleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "WE ARE COMING SOON");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Seconds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_coming-soon_coming-soon_module_ts-es5.js.map