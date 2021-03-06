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

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_social-app_social-app_module_ts"], {
    /***/
    10234: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImageGalleryComponent": function ImageGalleryComponent() {
          return (
            /* binding */
            _ImageGalleryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      59715);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ImageGalleryComponent_figure_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "figure", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ImageGalleryComponent_figure_2_Template_img_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var img_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.openImageModalRowDescription(img_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Portfolio Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var img_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", img_r1.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      var _c0 = function _c0() {
        return {
          downloadable: true
        };
      };

      var _ImageGalleryComponent = /*#__PURE__*/function () {
        function _ImageGalleryComponent(galleryService) {
          _classCallCheck(this, _ImageGalleryComponent);

          this.galleryService = galleryService;
          this.imagesRect = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(0, {
            img: 'assets/images/lightgallry/01.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(1, {
            img: 'assets/images/lightgallry/02.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(2, {
            img: 'assets/images/lightgallry/03.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(3, {
            img: 'assets/images/lightgallry/04.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(4, {
            img: 'assets/images/lightgallry/05.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(5, {
            img: 'assets/images/lightgallry/06.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(6, {
            img: 'assets/images/lightgallry/07.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(7, {
            img: 'assets/images/lightgallry/08.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(8, {
            img: 'assets/images/lightgallry/09.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(9, {
            img: 'assets/images/lightgallry/010.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(10, {
            img: 'assets/images/lightgallry/011.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(11, {
            img: 'assets/images/lightgallry/012.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          })];
          this.buttonsConfigDefault = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.DEFAULT
          };
          this.buttonsConfigSimple = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.SIMPLE
          };
          this.buttonsConfigAdvanced = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.ADVANCED
          };
          this.buttonsConfigFull = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.FULL
          };
          this.buttonsConfigCustom = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.CUSTOM,
            buttons: [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_FULL_SCREEN, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_DELETE, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_EXTURL, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_DOWNLOAD, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_CLOSE]
          };
          this.customPlainGalleryRowDescConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.PlainGalleryStrategy.CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.AdvancedLayout(-1, true)
          };
        }

        _createClass(_ImageGalleryComponent, [{
          key: "openImageModalRowDescription",
          value: function openImageModalRowDescription(image) {
            var index = this.getCurrentIndexCustomLayout(image, this.imagesRect);
            this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, {
              layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.AdvancedLayout(index, true)
            });
          }
        }, {
          key: "getCurrentIndexCustomLayout",
          value: function getCurrentIndexCustomLayout(image, images) {
            return image ? images.indexOf(image) : -1;
          }
        }, {
          key: "onButtonBeforeHook",
          value: function onButtonBeforeHook(event) {
            if (!event || !event.button) {
              return;
            }

            if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonType.DELETE) {
              this.imagesRect = this.imagesRect.filter(function (val) {
                return event.image && val.id !== event.image.id;
              });
            }
          }
        }, {
          key: "onButtonAfterHook",
          value: function onButtonAfterHook(event) {
            if (!event || !event.button) {
              return;
            }
          }
        }, {
          key: "onCustomButtonBeforeHook",
          value: function onCustomButtonBeforeHook(event, galleryId) {
            var _this = this;

            if (!event || !event.button) {
              return;
            }

            if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonType.CUSTOM) {
              this.addRandomImage();
              setTimeout(function () {
                _this.galleryService.openGallery(galleryId, _this.imagesRect.length - 1);
              }, 0);
            }
          }
        }, {
          key: "onCustomButtonAfterHook",
          value: function onCustomButtonAfterHook(event, galleryId) {
            if (!event || !event.button) {
              return;
            }
          }
        }, {
          key: "addRandomImage",
          value: function addRandomImage() {
            var imageToCopy = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
            var newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
            this.imagesRect = [].concat(_toConsumableArray(this.imagesRect), [newImage]);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ImageGalleryComponent;
      }();

      _ImageGalleryComponent.??fac = function ImageGalleryComponent_Factory(t) {
        return new (t || _ImageGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.GalleryService));
      };

      _ImageGalleryComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ImageGalleryComponent,
        selectors: [["app-image-gallery"]],
        decls: 4,
        vars: 7,
        consts: [["id", "aniimated-thumbnials"], ["itemscope", "", 1, "my-gallery", "row", "gallery-with-description"], ["class", "col-xl-3 col-sm-6", "itemprop", "associatedMedia", 4, "ngFor", "ngForOf"], [3, "id", "modalImages", "plainGalleryConfig", "currentImageConfig", "buttonsConfig"], ["itemprop", "associatedMedia", 1, "col-xl-3", "col-sm-6"], ["href", "javascript:void(0)", "itemprop", "contentUrl"], ["itemprop", "thumbnail", "alt", "Image description", 1, "img-thumbnail", 3, "src", "click"], [1, "caption"]],
        template: function ImageGalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ImageGalleryComponent_figure_2_Template, 8, 1, "figure", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "ks-modal-gallery", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.imagesRect);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", 1)("modalImages", ctx.imagesRect)("plainGalleryConfig", ctx.customPlainGalleryRowDescConfig)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0))("buttonsConfig", ctx.buttonsConfigCustom);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["??d"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    67498: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SocialAppRoutingModule": function SocialAppRoutingModule() {
          return (
            /* binding */
            _SocialAppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _social_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./social-app.component */
      60452);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _social_app_component__WEBPACK_IMPORTED_MODULE_0__.SocialAppComponent
        }]
      }];

      var _SocialAppRoutingModule = function _SocialAppRoutingModule() {
        _classCallCheck(this, _SocialAppRoutingModule);
      };

      _SocialAppRoutingModule.??fac = function SocialAppRoutingModule_Factory(t) {
        return new (t || _SocialAppRoutingModule)();
      };

      _SocialAppRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _SocialAppRoutingModule
      });
      _SocialAppRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_SocialAppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    60452: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SocialAppComponent": function SocialAppComponent() {
          return (
            /* binding */
            _SocialAppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/components/feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-gallery/image-gallery.component */
      10234);

      function SocialAppComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](0, "Timeline");
        }
      }

      function SocialAppComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r9.isProfile = !ctx_r9.isProfile;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "h6", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "My Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "Likes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](40, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, " 884");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, "35 New Likes This Week");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](47, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](49, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](51, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](53, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](55, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](57, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](60, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r11.isMutualFriend = !ctx_r11.isMutualFriend;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](66, "Mutual Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](71, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](72, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](73, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](74, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](77, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](79, "wintersolder@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](80, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](81, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](82, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](84, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](85, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](87, "barnes@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](89, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](90, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](91, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](92, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](93, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](94, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](95, "jasonb@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](97, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](98, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](99, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](101, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](102, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](103, "comeren@gmail.comtt");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](104, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](105, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](106, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](107, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](108, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](109, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](110, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](111, "andrewj@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](112, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](113, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](114, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](115, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](116, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](117, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](118, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](119, "johnywaston@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](120, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](121, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](122, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](123, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](124, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](125, "Johny William");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](126, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](127, "johnyw@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](128, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](129, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](130, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](131, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](132, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](133, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](134, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](135, "wintersolder@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](136, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](137, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](138, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](139, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](140, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](141, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](142, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](143, "barnes@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](144, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](145, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](146, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](147, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](148, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](149, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](150, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](151, "jasonb@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](152, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](153, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](154, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](155, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](156, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](157, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](158, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](159, "comeren@gmail.comtt");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](160, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](161, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](162, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](163, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](164, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](165, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](166, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](167, "andrewj@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](168, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](169, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](170, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](171, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](172, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](173, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](174, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](175, "johnywaston@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](176, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](177, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](178, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](179, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](180, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](181, "Johny William");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](182, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](183, "johnyw@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](184, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](185, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](186, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](187, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](188, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_188_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r10);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r12.isActiveFeed = !ctx_r12.isActiveFeed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](189, "Activity Feed");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](190, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](191, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](192, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](193, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](194, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](195, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](196, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](197, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](198, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](199, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](200, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](201, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](202, "20 min Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](203, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](204, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](205, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](206, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](207, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](208, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](209, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](210, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](211, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](212, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](213, "1 hour Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](214, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](215, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](216, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](217, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](218, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](219, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](220, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](221, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](222, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](223, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](224, "1 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](225, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](226, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](227, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](228, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](229, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](230, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](231, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](232, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](233, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](234, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](235, "2 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](236, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](237, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](238, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](239, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](240, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](241, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](242, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](243, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](244, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](245, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](246, "5 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](247, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](248, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](249, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](250, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](251, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](252, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](253, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](254, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](255, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](256, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](257, "6 days Ago");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](258, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](259, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](260, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](261, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](262, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](263, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](264, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](265, "img", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](266, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](267, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](268, "ELANA");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](269, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](270, "January, 12,2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](271, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](272, "i", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](273, "img", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](274, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](275, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](276, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](277, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](278, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](279, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](280, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](281, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](282, "20 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](283, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](284, "i", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](285, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](286, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](287, "10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](288, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](289, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](290, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](291, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](292, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](293, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](294, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](295, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](296, "Jason Borne ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](297, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](298, "1 Year Ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](299, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](300, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](301, "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](302, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](303, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](304, "img", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](305, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](306, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](307, "Alexendra Dhadio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](308, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](309, "1 Month Ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](310, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](311, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](312, "yes, really very awesome car i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](313, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](314, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](315, "img", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](316, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](317, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](318, "Olivia Jon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](319, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](320, "15 Days Ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](321, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](322, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](323, "i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](324, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](325, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](326, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](327, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](328, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](329, "Issa Bell ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](330, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](331, "1 Year Ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](332, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](333, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](334, "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](335, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](336, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](337, "More Commnets");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](338, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](339, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](340, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](341, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](342, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](343, "input", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](344, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](345, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](346, "i", 14);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](347, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](348, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](349, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](350, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](351, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](352, "img", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](353, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](354, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](355, "ELANA");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](356, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](357, "January, 12,2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](358, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](359, "i", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](360, "img", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](361, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](362, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](363, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](364, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](365, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](366, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](367, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](368, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](369, "20 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](370, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](371, "i", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](372, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](373, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](374, "10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](375, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](376, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](377, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](378, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](379, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](380, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](381, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](382, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](383, "Jason Borne ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](384, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](385, "1 Year Ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](386, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](387, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](388, "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](389, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](390, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](391, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](392, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](393, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](394, "Issa Bell ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](395, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](396, "1 Year Ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](397, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](398, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](399, "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](400, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](401, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](402, "More Commnets");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](403, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](404, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](405, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](406, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](407, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](408, "input", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](409, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](410, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](411, "i", 14);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](412, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](413, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](414, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](415, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](416, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](417, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](418, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](419, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_419_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r10);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r13.isIntroProfile = !ctx_r13.isIntroProfile;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](420, "Profile Intro");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](421, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](422, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](423, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](424, "About Me :");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](425, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](426, " Hi, I\u2019m elana, I\u2019m 30 and I work as a web Designer for the \u201CDaydreams\u201D Agency in Pier 56. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](427, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](428, "Favourite TV shows :");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](429, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](430, " Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](431, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](432, "Favourite Music Bands :");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](433, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](434, " Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](435, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](436, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](437, "Social Networks");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](438, "button", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](439, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](440, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](441, "button", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](442, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](443, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](444, "button", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](445, "i", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](446, "Dribbble");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](447, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](448, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](449, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](450, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](451, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_451_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r10);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r14.isFollowers = !ctx_r14.isFollowers;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](452, "Followers");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](453, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](454, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](455, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](456, "img", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](457, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](458, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](459, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](460, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](461, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](462, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](463, "img", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](464, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](465, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](466, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](467, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](468, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](469, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](470, "img", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](471, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](472, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](473, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](474, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](475, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](476, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](477, "img", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](478, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](479, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](480, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](481, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](482, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](483, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](484, "img", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](485, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](486, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](487, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](488, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](489, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](490, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](491, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](492, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](493, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](494, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_494_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r10);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r15.isFollowings = !ctx_r15.isFollowings;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](495, "Followings");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](496, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](497, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](498, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](499, "img", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](500, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](501, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](502, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](503, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](504, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](505, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](506, "img", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](507, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](508, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](509, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](510, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](511, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](512, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](513, "img", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](514, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](515, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](516, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](517, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](518, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](519, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](520, "img", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](521, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](522, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](523, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](524, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](525, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](526, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](527, "img", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](528, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](529, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](530, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](531, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](532, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](533, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](534, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](535, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](536, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](537, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_537_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r10);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r16.isLatestPhotos = !ctx_r16.isLatestPhotos;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](538, "Latest Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](539, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](540, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](541, "ul", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](542, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](543, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](544, "img", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](545, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](546, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](547, "img", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](548, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](549, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](550, "img", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](551, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](552, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](553, "img", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](554, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](555, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](556, "img", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](557, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](558, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](559, "img", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](560, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](561, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](562, "img", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](563, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](564, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](565, "img", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](566, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](567, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](568, "img", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](569, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](570, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](571, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](572, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](573, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_573_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r10);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r17.isFriends = !ctx_r17.isFriends;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](574, "Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](575, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](576, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](577, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](578, "img", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](579, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](580, "img", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](581, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](582, "img", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](583, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](584, "img", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](585, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](586, "img", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](587, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](588, "img", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](589, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](590, "img", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](591, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](592, "img", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](593, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](594, "img", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](595, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](596, "img", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](597, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](598, "img", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](599, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](600, "img", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](601, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](602, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](603, "img", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r1.isProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r1.isProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r1.isMutualFriend);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r1.isMutualFriend);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r1.isActiveFeed);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r1.isActiveFeed);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](229);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r1.isIntroProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r1.isIntroProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r1.isFollowers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r1.isFollowers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r1.isFollowings);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r1.isFollowings);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r1.isLatestPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r1.isLatestPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r1.isFriends);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r1.isFriends);
        }
      }

      function SocialAppComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](0, "About");
        }
      }

      function SocialAppComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r18.isProfile = !ctx_r18.isProfile;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "h6", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "My Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "Likes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](40, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, " 884");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, "35 New Likes This Week");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](47, "img", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](49, "img", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](51, "img", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](53, "img", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](55, "img", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](57, "img", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](60, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r20.isMutualFriend = !ctx_r20.isMutualFriend;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](66, "Mutual Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](71, "input", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](72, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](73, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](74, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](77, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](79, "wintersolder@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](80, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](81, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](82, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](84, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](85, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](87, "barnes@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](89, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](90, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](91, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](92, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](93, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](94, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](95, "jasonb@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](97, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](98, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](99, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](101, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](102, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](103, "comeren@gmail.comtt");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](104, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](105, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](106, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](107, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](108, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](109, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](110, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](111, "andrewj@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](112, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](113, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](114, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](115, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](116, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](117, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](118, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](119, "johnywaston@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](120, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](121, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](122, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](123, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](124, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](125, "Johny William");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](126, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](127, "johnyw@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](128, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](129, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](130, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](131, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](132, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](133, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](134, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](135, "wintersolder@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](136, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](137, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](138, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](139, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](140, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](141, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](142, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](143, "barnes@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](144, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](145, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](146, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](147, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](148, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](149, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](150, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](151, "jasonb@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](152, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](153, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](154, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](155, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](156, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](157, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](158, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](159, "comeren@gmail.comtt");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](160, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](161, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](162, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](163, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](164, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](165, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](166, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](167, "andrewj@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](168, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](169, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](170, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](171, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](172, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](173, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](174, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](175, "johnywaston@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](176, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](177, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](178, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](179, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](180, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](181, "Johny William");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](182, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](183, "johnyw@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](184, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](185, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](186, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](187, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](188, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_188_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r19);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r21.isActiveFeed = !ctx_r21.isActiveFeed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](189, "Activity Feed");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](190, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](191, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](192, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](193, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](194, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](195, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](196, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](197, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](198, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](199, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](200, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](201, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](202, "20 min Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](203, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](204, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](205, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](206, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](207, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](208, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](209, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](210, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](211, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](212, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](213, "1 hour Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](214, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](215, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](216, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](217, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](218, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](219, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](220, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](221, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](222, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](223, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](224, "1 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](225, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](226, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](227, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](228, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](229, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](230, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](231, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](232, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](233, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](234, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](235, "2 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](236, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](237, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](238, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](239, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](240, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](241, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](242, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](243, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](244, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](245, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](246, "5 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](247, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](248, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](249, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](250, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](251, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](252, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](253, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](254, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](255, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](256, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](257, "6 days Ago");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](258, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](259, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](260, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](261, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](262, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](263, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](264, "Pepole You May Know");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](265, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](266, "div", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](267, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](268, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](269, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](270, "img", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](271, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](272, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](273, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](274, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](275, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](276, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](277, "img", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](278, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](279, "Anna Mull");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](280, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](281, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](282, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](283, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](284, "img", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](285, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](286, "Dion Cast");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](287, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](288, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](289, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](290, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](291, "img", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](292, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](293, "Karlene Lex");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](294, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](295, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](296, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](297, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](298, "img", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](299, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](300, "Vella Chism");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](301, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](302, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](303, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](304, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](305, "img", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](306, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](307, "Wai Schalk");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](308, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](309, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](310, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](311, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](312, "img", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](313, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](314, "Karlene Lex");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](315, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](316, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](317, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](318, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](319, "div", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](320, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](321, "Hobbies and Interests");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](322, "span", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](323, "app-feather-icons", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](324, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](325, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](326, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](327, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](328, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](329, "Hobbies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](330, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](331, "I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it\u2019s raining outside.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](332, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](333, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](334, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](335, "Favourite Music Bands / Artists:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](336, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](337, "Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](338, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](339, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](340, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](341, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](342, "Favourite TV Shows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](343, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](344, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](345, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](346, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](347, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](348, "Favourite Books:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](349, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](350, "The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](351, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](352, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](353, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](354, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](355, "Favourite Movies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](356, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](357, "Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad Ferrum Man. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](358, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](359, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](360, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](361, "Favourite Writers:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](362, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](363, "Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandr Platt, Marcus Roth.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](364, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](365, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](366, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](367, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](368, "Favourite Games:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](369, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](370, "The First of Us, Assassin\u2019s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](371, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](372, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](373, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](374, "Other Interests:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](375, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](376, "Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](377, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](378, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](379, "div", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](380, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](381, "Education and Employement");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](382, "span", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](383, "app-feather-icons", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](384, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](385, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](386, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](387, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](388, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](389, "The New College of Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](390, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](391, "2001 - 2006");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](392, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](393, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](394, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](395, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](396, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](397, "Digital Design Intern");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](398, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](399, "2006-2008");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](400, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](401, "Digital Design Intern for the \u201CMultimedz\u201D agency. Was in charge of the communication with the clients.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](402, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](403, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](404, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](405, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](406, "Rembrandt Institute");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](407, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](408, "2008");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](409, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](410, "Five months Digital Illustration course. Professor: Leonardo Stagg. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](411, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](412, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](413, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](414, "UI/UX Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](415, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](416, "2001 - 2006");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](417, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](418, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](419, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](420, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](421, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](422, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](423, "The Digital College");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](424, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](425, "2010");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](426, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](427, "6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](428, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](429, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](430, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](431, "The New College of Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](432, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](433, "2008 - 2013");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](434, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](435, "UI/UX Designer for the \u201CDaydreams\u201D agency.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](436, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](437, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](438, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](439, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](440, "Viewed Your Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](441, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](442, "div", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](443, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](444, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](445, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](446, "img", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](447, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](448, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](449, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](450, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](451, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](452, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](453, "img", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](454, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](455, "Anna Mull");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](456, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](457, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](458, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](459, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](460, "img", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](461, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](462, "Dion Cast");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](463, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](464, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](465, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](466, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](467, "img", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](468, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](469, "Karlene Lex");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](470, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](471, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](472, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](473, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](474, "img", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](475, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](476, "Vella Chism");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](477, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](478, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](479, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](480, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](481, "img", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](482, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](483, "Wai Schalk");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](484, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](485, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](486, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](487, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](488, "img", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](489, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](490, "Karlene Lex");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](491, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](492, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](493, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](494, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](495, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](496, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](497, "Activity Log");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](498, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](499, "div", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](500, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](501, "h6", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](502, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](503, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](504, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](505, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](506, "Comeren Diaz likes your photos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](507, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](508, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](509, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](510, "Karlene Lex and Comeren Diaz now friends.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](511, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](512, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](513, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](514, "Sarah Loren wrote on your timeline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](515, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](516, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](517, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](518, "Johny Waston likes your post's. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](519, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](520, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](521, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](522, "Andew Jon became friends with Comeren Diaz.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](523, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](524, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](525, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](526, "Johny Waston became friends with Bucky Barnes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](527, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](528, "h6", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](529, "25 December");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](530, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](531, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](532, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](533, "Comeren Diaz likes your photos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](534, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](535, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](536, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](537, "Johny Waston likes your post's. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](538, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](539, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](540, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](541, "Karlene Lex and Comeren Diaz now friends.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](542, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](543, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](544, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](545, "Johny Waston became friends with Bucky Barnes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](546, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](547, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](548, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](549, "Sarah Loren wrote on your timeline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](550, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](551, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](552, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](553, "Comeren Diaz wrote on your timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](554, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](555, "h6", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](556, "8 september");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](557, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](558, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](559, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](560, "Comeren Diaz likes your photos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](561, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](562, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](563, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](564, "Johny Waston likes your post's. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](565, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](566, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](567, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](568, "Karlene Lex and Comeren Diaz now friends.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](569, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](570, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](571, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](572, "Johny Waston became friends with Bucky Barnes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](573, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](574, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](575, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](576, "Sarah Loren wrote on your timeline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](577, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](578, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](579, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](580, "Andew Jon became friends with Comeren Diaz.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](581, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](582, "h6", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](583, "6 June");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](584, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](585, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](586, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](587, "Comeren Diaz likes your photos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](588, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](589, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](590, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](591, "Karlene Lex and Comeren Diaz now friends.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](592, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](593, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](594, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](595, "Sarah Loren wrote on your timeline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](596, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](597, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](598, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](599, "Johny Waston likes your post's. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](600, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](601, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](602, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](603, "Andew Jon became friends with Comeren Diaz.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](604, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](605, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](606, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](607, "Johny Waston became friends with Bucky Barnes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](608, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](609, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](610, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](611, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](612, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](613, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](614, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](615, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_615_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r19);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r22.isIntroProfile = !ctx_r22.isIntroProfile;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](616, "Profile Intro");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](617, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](618, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](619, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](620, "About Me :");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](621, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](622, " Hi, I\u2019m elana, I\u2019m 30 and I work as a web Designer for the \u201CDaydreams\u201D Agency in Pier 56. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](623, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](624, "Favourite TV shows :");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](625, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](626, " Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](627, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](628, "Favourite Music Bands :");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](629, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](630, " Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](631, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](632, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](633, "Social Networks");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](634, "button", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](635, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](636, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](637, "button", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](638, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](639, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](640, "button", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](641, "i", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](642, "Dribbble");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](643, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](644, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](645, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](646, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](647, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_647_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r19);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r23.isFollowers = !ctx_r23.isFollowers;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](648, "Followers");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](649, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](650, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](651, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](652, "img", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](653, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](654, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](655, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](656, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](657, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](658, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](659, "img", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](660, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](661, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](662, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](663, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](664, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](665, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](666, "img", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](667, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](668, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](669, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](670, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](671, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](672, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](673, "img", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](674, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](675, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](676, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](677, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](678, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](679, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](680, "img", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](681, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](682, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](683, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](684, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](685, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](686, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](687, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](688, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](689, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](690, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_690_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r19);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r24.isFollowings = !ctx_r24.isFollowings;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](691, "Followings");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](692, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](693, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](694, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](695, "img", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](696, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](697, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](698, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](699, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](700, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](701, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](702, "img", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](703, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](704, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](705, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](706, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](707, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](708, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](709, "img", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](710, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](711, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](712, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](713, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](714, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](715, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](716, "img", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](717, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](718, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](719, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](720, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](721, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](722, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](723, "img", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](724, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](725, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](726, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](727, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](728, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](729, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](730, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](731, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](732, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](733, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_733_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r19);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r25.isLatestPhotos = !ctx_r25.isLatestPhotos;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](734, "Latest Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](735, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](736, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](737, "ul", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](738, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](739, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](740, "img", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](741, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](742, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](743, "img", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](744, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](745, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](746, "img", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](747, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](748, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](749, "img", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](750, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](751, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](752, "img", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](753, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](754, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](755, "img", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](756, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](757, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](758, "img", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](759, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](760, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](761, "img", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](762, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](763, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](764, "img", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](765, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](766, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](767, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](768, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](769, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_769_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r19);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r26.isFriends = !ctx_r26.isFriends;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](770, "Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](771, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](772, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](773, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](774, "img", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](775, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](776, "img", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](777, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](778, "img", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](779, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](780, "img", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](781, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](782, "img", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](783, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](784, "img", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](785, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](786, "img", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](787, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](788, "img", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](789, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](790, "img", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](791, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](792, "img", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](793, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](794, "img", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](795, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](796, "img", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](797, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](798, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](799, "img", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r3.isProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r3.isProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r3.isMutualFriend);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r3.isMutualFriend);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r3.isActiveFeed);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r3.isActiveFeed);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](133);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "more-vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "more-vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](122);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "message-square");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "message-square");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "message-square");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "message-square");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "message-square");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r3.isIntroProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r3.isIntroProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r3.isFollowers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r3.isFollowers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r3.isFollowings);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r3.isFollowings);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r3.isLatestPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r3.isLatestPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("aria-expanded", !ctx_r3.isFriends);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbCollapse", ctx_r3.isFriends);
        }
      }

      function SocialAppComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "ElANA");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "general manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function SocialAppComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](0, "Friends");
        }
      }

      function SocialAppComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "img", 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "img", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "ul", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "i", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "i", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "i", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "i", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "Mark Jecno");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, "Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "h3", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "9564");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "49");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](44, "Total Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47, "96");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](52, "img", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](54, "img", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "ul", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](58, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](61, "i", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](64, "i", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](67, "i", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](70, "i", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](72, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](73, "Johan Deo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](74, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](75, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](79, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](80, "h3", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](81, "2578");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](82, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](84, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](85, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](87, "26");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](88, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](89, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](90, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](91, "Total Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](92, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](93, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](94, "96");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](95, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](97, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](98, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](99, "img", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](101, "img", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](102, "ul", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](104, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](105, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](107, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](108, "i", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](109, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](110, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](111, "i", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](112, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](113, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](114, "i", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](115, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](116, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](117, "i", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](118, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](119, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](120, "Dev John");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](121, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](122, "Devloper");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](123, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](124, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](125, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](126, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](127, "h3", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](128, "6545");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](129, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](130, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](131, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](132, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](133, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](134, "91");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](135, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](136, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](137, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](138, "Total Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](139, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](140, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](141, "21");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](142, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](143, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](144, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](145, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](146, "img", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](147, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](148, "img", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](149, "ul", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](150, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](151, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](152, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](153, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](154, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](155, "i", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](156, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](157, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](158, "i", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](159, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](160, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](161, "i", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](162, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](163, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](164, "i", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](165, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](166, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](167, "Johan Deo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](168, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](169, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](170, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](171, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](172, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](173, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](174, "h3", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](175, "2578");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](176, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](177, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](178, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](179, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](180, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](181, "26");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](182, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](183, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](184, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](185, "Total Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](186, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](187, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](188, "96");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](189, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](190, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](191, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](192, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](193, "img", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](194, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](195, "img", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](196, "ul", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](197, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](198, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](199, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](200, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](201, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](202, "i", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](203, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](204, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](205, "i", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](206, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](207, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](208, "i", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](209, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](210, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](211, "i", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](212, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](213, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](214, "Dev John");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](215, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](216, "Devloper");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](217, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](218, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](219, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](220, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](221, "h3", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](222, "6545");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](223, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](224, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](225, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](226, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](227, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](228, "91");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](229, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](230, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](231, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](232, "Total Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](233, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](234, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](235, "21");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](236, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](237, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](238, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](239, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](240, "img", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](241, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](242, "img", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](243, "ul", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](244, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](245, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](246, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](247, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](248, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](249, "i", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](250, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](251, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](252, "i", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](253, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](254, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](255, "i", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](256, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](257, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](258, "i", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](259, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](260, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](261, "Mark Jecno");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](262, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](263, "Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](264, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](265, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](266, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](267, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](268, "h3", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](269, "9564");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](270, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](271, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](272, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](273, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](274, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](275, "49");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](276, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](277, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](278, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](279, "Total Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](280, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](281, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](282, "96");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](283, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function SocialAppComponent_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](0, "Photos");
        }
      }

      function SocialAppComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 204);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "app-image-gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      var _SocialAppComponent = /*#__PURE__*/function () {
        function _SocialAppComponent() {
          _classCallCheck(this, _SocialAppComponent);

          this.isProfile = false;
          this.isMutualFriend = false;
          this.isActiveFeed = false;
          this.isIntroProfile = false;
          this.isFollowers = false;
          this.isFollowings = false;
          this.isLatestPhotos = false;
          this.isFriends = false;
        } //Fileupload


        _createClass(_SocialAppComponent, [{
          key: "readUrl",
          value: function readUrl(event) {
            var _this2 = this;

            if (event.target.files.length === 0) return; //Image upload validation

            var mimeType = event.target.files[0].type;

            if (mimeType.match(/image\/*/) == null) {
              return;
            } // Image upload


            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (_event) {
              _this2.url = reader.result;
            };
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SocialAppComponent;
      }();

      _SocialAppComponent.??fac = function SocialAppComponent_Factory(t) {
        return new (t || _SocialAppComponent)();
      };

      _SocialAppComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _SocialAppComponent,
        selectors: [["app-social-app"]],
        decls: 39,
        vars: 2,
        consts: [[1, "container-fluid"], [1, "user-profile", "social-app-profile"], [1, "row"], [1, "col-sm-12", "social-app-tab"], [1, "card", "hovercard", "mb-0"], [1, "cardheader", "socialheader"], [1, "user-image"], [1, "avatar"], ["alt", "", 3, "src"], [1, "icon-wrapper"], [1, "icofont", "icofont-pencil-alt-5"], ["type", "file", 1, "upload", 3, "change"], [1, "share-icons"], ["href", "javascript:void(0)", 1, "social-icon", "bg-primary"], [1, "fa", "fa-smile-o"], ["href", "javascript:void(0)", 1, "social-icon", "bg-secondary"], [1, "fa", "fa-wechat"], ["href", "javascript:void(0)", 1, "social-icon", "bg-warning"], [1, "fa", "fa-share-alt"], [1, "info", "market-tabs", "p-0"], ["id", "top-tab", "role", "tablist", 1, "nav", "nav-tabs", "border-tab", "tabs-scoial"], ["ngbTabTitle", "", "class", "nav-item"], ["ngbTabContent", "", "class", "tab-content"], [3, "disabled"], ["ngbTabTitle", ""], ["id", "timeline", "role", "tabpanel", "aria-labelledby", "timeline", 1, "tab-pane", "fade", "show"], [1, "col-xl-3", "xl-40", "col-lg-12", "col-md-5", "box-col-4a"], ["id", "accordionoc", 1, "default-according", "style-1", "faq-accordion", "job-accordion"], [1, "col-xl-12"], [1, "card"], [1, "card-header"], [1, "mb-0"], ["aria-controls", "collapse", 1, "btn", "btn-link", "pl-0", 3, "click"], ["id", "collapse", 1, "collapse", 3, "ngbCollapse"], [1, "card-body", "socialprofile"], [1, "media"], ["src", " assets/images/user/1.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "media-body"], [1, "font-primary", "f-w-500"], [1, "d-block"], [1, "fa", "fa-comments-o"], [1, "px-2"], [1, "badge", "badge-pill", "badge-light"], [1, "fa", "fa-bell-o"], [1, "social-btngroup", "d-flex"], ["type", "button", 1, "btn", "btn-primary", "text-center"], ["type", "button", 1, "btn", "btn-light", "text-center"], [1, "likes-profile", "text-center"], [1, "fa", "fa-heart", "font-danger"], [1, "text-center"], [1, "customers", "text-center", "social-group"], [1, "d-inline-block"], ["src", " assets/images/user/3.jpg", "alt", "", "data-container", "body", "placement", "top", "ngbTooltip", "Johny Waston", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/5.jpg", "alt", "", "data-container", "body", "placement", "top", "ngbTooltip", "Andew Jon", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/1.jpg", "alt", "", "data-container", "body", "placement", "top", "ngbTooltip", "Comeren Diaz", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/2.png", "alt", "", "data-container", "body", "placement", "top", "ngbTooltip", "Bucky Barnes", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/8.jpg", "alt", "", "data-container", "body", "placement", "top", "ngbTooltip", "Jason Borne", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/11.png", "alt", "", "data-container", "body", "placement", "top", "ngbTooltip", "Comeren Diaz", 1, "img-40", "rounded-circle"], ["alt", "", "src", " assets/images/social-app/timeline-3.png", 1, "img-fluid"], ["aria-controls", "collapse1", 1, "btn", "btn-link", "pl-0", 3, "click"], ["id", "collapse1", 1, "collapse", 3, "ngbCollapse"], [1, "card-body", "social-status"], [1, "form-group", "m-0"], ["type", "search", "placeholder", "Search Contacts..", 1, "form-control-plaintext", "form-control"], ["src", " assets/images/user/2.png", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "social-status", "social-online"], [1, "f-w-500", "d-block"], ["src", " assets/images/user/10.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "social-status", "social-busy"], ["src", " assets/images/user/6.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "social-status", "social-offline"], ["src", " assets/images/user/8.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", " assets/images/user/14.png", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", " assets/images/user/4.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", " assets/images/user/3.png", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["href", "javascript:void(0)"], [1, "light-span"], ["src", " assets/images/user/3.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", " assets/images/user/5.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "col-xl-6", "xl-60", "col-lg-12", "col-md-7", "box-col-8a"], [1, "row", "user-col2"], [1, "col-sm-12"], [1, "card-body"], [1, "new-users-social"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "rounded-circle", "image-radius", "m-r-15"], [1, "mb-0", "f-w-700"], [1, "pull-right", "mt-0"], ["data-feather", "more-vertical"], ["alt", "", "src", "assets/images/social-app/timeline-1.png", 1, "img-fluid"], [1, "timeline-content"], [1, "like-content"], [1, "pull-right", "comment-number"], [1, "fa", "fa-share-alt", "mr-0"], [1, "social-chat"], [1, "your-msg"], ["alt", "", "src", "assets/images/user/1.jpg", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "f-w-500"], [1, "fa", "fa-reply", "font-primary"], [1, "other-msg"], ["alt", "", "src", "assets/images/user/2.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", "assets/images/user/3.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["href", "#"], [1, "comments-box"], [1, "input-group", "text-box"], ["type", "text", "name", "message-to-send", "placeholder", "Post Your commnets", 1, "form-control", "input-txt-bx"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-transparent"], ["alt", "", "src", "assets/images/social-app/timeline-2.png", 1, "img-fluid"], [1, "col-xl-3", "xl-100", "box-col-12"], [1, "col-xl-12", "xl-50", "box-col-6"], [1, "card-body", "filter-cards-view"], [1, "social-network", "theme-form"], [1, "btn", "social-btn", "btn-fb", "mb-2", "text-center"], [1, "fa", "fa-facebook", "mr-1"], [1, "btn", "social-btn", "btn-twitter", "mb-2", "text-center"], [1, "fa", "fa-twitter", "mr-1"], [1, "btn", "social-btn", "btn-google", "text-center"], [1, "fa", "fa-dribbble", "mr-1"], [1, "card-body", "social-list"], ["alt", "", "src", " assets/images/user/2.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", " assets/images/user/3.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", " assets/images/user/3.jpg", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", " assets/images/user/10.jpg", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", " assets/images/user/11.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "card-body", "photos", "px-0"], [1, "latest-post"], ["alt", "", "src", " assets/images/social-app/post-1.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-2.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-3.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-4.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-5.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-6.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-7.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-8.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-9.png", 1, "img-fluid"], [1, "card-body", "avatar-showcase"], [1, "d-inline-block", "friend-pic"], ["src", " assets/images/user/3.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/5.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/1.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/2.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/3.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/6.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/10.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/14.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/4.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/11.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/8.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/social-app/timeline-4.png", 1, "img-fluid"], ["id", "about", "role", "tabpanel", "aria-labelledby", "about", 1, "tab-pane", "fade", "show"], ["src", " assets/images/user/3.jpg", "alt", "", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Johny Waston", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/5.jpg", "alt", "", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Andew Jon", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/1.jpg", "alt", "", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Comeren Diaz", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/2.png", "alt", "", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Bucky Barnes", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/8.jpg", "alt", "", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Jason Borne", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/11.png", "alt", "", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Comeren Diaz", 1, "img-40", "rounded-circle"], ["type", "search", "placeholder", "Search Contacts..", 1, "form-control-plaintext"], [1, "pepole-knows"], [1, "add-friend", "text-center"], ["alt", "", "src", " assets/images/user/2.png", 1, "img-60", "img-fluid", "rounded-circle"], [1, "d-block", "f-w-500"], [1, "btn", "btn-primary", "btn-xs"], ["alt", "", "src", " assets/images/user/3.png", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", " assets/images/user/3.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", " assets/images/user/4.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", " assets/images/user/8.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", " assets/images/user/10.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", " assets/images/user/14.png", 1, "img-60", "img-fluid", "rounded-circle"], [1, "card-header", "social-header"], [1, "pull-right"], [3, "icon"], [1, "row", "details-about"], [1, "col-sm-6"], [1, "your-details"], [1, "your-details", "your-details-xs"], [1, "activity-log"], [1, "my-activity"], [1, "m-r-20", 3, "icon"], [1, "title"], ["target", "_blank", "href", ""], [1, "desc", "mt-2"], ["id", "friends", "role", "tabpanel", "aria-labelledby", "friends", 1, "tab-pane", "fade", "show"], [1, "col-md-6", "col-xl-4", "box-col-6", "xl-50"], [1, "card", "custom-card"], ["src", " assets/images/user-card/1.jpg", "alt", "", 1, "img-fluid"], [1, "card-profile"], ["src", " assets/images/avtar/3.jpg", "alt", "", 1, "rounded-circle"], [1, "card-social"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-rss"], [1, "text-center", "profile-details"], [1, "card-footer", "row"], [1, "col-4", "col-sm-4"], [1, "counter"], ["src", " assets/images/user-card/2.jpg", "alt", "", 1, "img-fluid"], ["src", " assets/images/avtar/16.jpg", "alt", "", 1, "rounded-circle"], ["src", " assets/images/user-card/3.jpg", "alt", "", 1, "img-fluid"], ["src", " assets/images/avtar/11.jpg", "alt", "", 1, "rounded-circle"], ["src", " assets/images/user-card/7.jpg", "alt", "", 1, "img-fluid"], ["src", " assets/images/user-card/5.jpg", "alt", "", 1, "img-fluid"], ["src", " assets/images/user-card/6.jpg", "alt", "", 1, "img-fluid"], ["id", "photos", "role", "tabpanel", "aria-labelledby", "photos", 1, "tab-pane", "fade", "show", "gallery-popup"]],
        template: function SocialAppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function SocialAppComponent_Template_input_change_11_listener($event) {
              return ctx.readUrl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "ngb-tabset");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](26, SocialAppComponent_ng_template_26_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](27, SocialAppComponent_ng_template_27_Template, 604, 16, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](29, SocialAppComponent_ng_template_29_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](30, SocialAppComponent_ng_template_30_Template, 800, 42, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "ngb-tab", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](32, SocialAppComponent_ng_template_32_Template, 5, 0, "ng-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](34, SocialAppComponent_ng_template_34_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](35, SocialAppComponent_ng_template_35_Template, 284, 0, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](37, SocialAppComponent_ng_template_37_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](38, SocialAppComponent_ng_template_38_Template, 6, 0, "ng-template", 22);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", ctx.url ? ctx.url : " assets/images/user/7.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", true);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTabset, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTab, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTabTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTabContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_1__.ImageGalleryComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtYXBwLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    513: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SocialAppModule": function SocialAppModule() {
          return (
            /* binding */
            _SocialAppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _social_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./social-app-routing.module */
      67498);
      /* harmony import */


      var _social_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./social-app.component */
      60452);
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      59715);
      /* harmony import */


      var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./image-gallery/image-gallery.component */
      10234);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! hammerjs */
      11524);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! mousetrap */
      13544);
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SocialAppModule = function _SocialAppModule() {
        _classCallCheck(this, _SocialAppModule);
      };

      _SocialAppModule.??fac = function SocialAppModule_Factory(t) {
        return new (t || _SocialAppModule)();
      };

      _SocialAppModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({
        type: _SocialAppModule
      });
      _SocialAppModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _social_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.SocialAppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_10__.GalleryModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](_SocialAppModule, {
          declarations: [_social_app_component__WEBPACK_IMPORTED_MODULE_2__.SocialAppComponent, _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_3__.ImageGalleryComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _social_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.SocialAppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_10__.GalleryModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_social-app_social-app_module_ts-es5.js.map