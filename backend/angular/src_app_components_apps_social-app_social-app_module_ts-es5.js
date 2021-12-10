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
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageGalleryComponent_figure_2_Template_img_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var img_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.openImageModalRowDescription(img_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portfolio Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var img_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
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

      _ImageGalleryComponent.ɵfac = function ImageGalleryComponent_Factory(t) {
        return new (t || _ImageGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.GalleryService));
      };

      _ImageGalleryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ImageGalleryComponent,
        selectors: [["app-image-gallery"]],
        decls: 4,
        vars: 7,
        consts: [["id", "aniimated-thumbnials"], ["itemscope", "", 1, "my-gallery", "row", "gallery-with-description"], ["class", "col-xl-3 col-sm-6", "itemprop", "associatedMedia", 4, "ngFor", "ngForOf"], [3, "id", "modalImages", "plainGalleryConfig", "currentImageConfig", "buttonsConfig"], ["itemprop", "associatedMedia", 1, "col-xl-3", "col-sm-6"], ["href", "javascript:void(0)", "itemprop", "contentUrl"], ["itemprop", "thumbnail", "alt", "Image description", 1, "img-thumbnail", 3, "src", "click"], [1, "caption"]],
        template: function ImageGalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageGalleryComponent_figure_2_Template, 8, 1, "figure", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ks-modal-gallery", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagesRect);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", 1)("modalImages", ctx.imagesRect)("plainGalleryConfig", ctx.customPlainGalleryRowDescConfig)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("buttonsConfig", ctx.buttonsConfigCustom);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ɵd"]],
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

      _SocialAppRoutingModule.ɵfac = function SocialAppRoutingModule_Factory(t) {
        return new (t || _SocialAppRoutingModule)();
      };

      _SocialAppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _SocialAppRoutingModule
      });
      _SocialAppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_SocialAppRoutingModule, {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Timeline");
        }
      }

      function SocialAppComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r9.isProfile = !ctx_r9.isProfile;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h6", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "My Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Likes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " 884");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "35 New Likes This Week");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r11.isMutualFriend = !ctx_r11.isMutualFriend;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Mutual Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "wintersolder@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "barnes@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "jasonb@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "comeren@gmail.comtt");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "andrewj@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "johnywaston@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Johny William");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "johnyw@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "wintersolder@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "barnes@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "jasonb@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "comeren@gmail.comtt");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "andrewj@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "johnywaston@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](178, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Johny William");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "johnyw@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_188_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r12.isActiveFeed = !ctx_r12.isActiveFeed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Activity Feed");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "20 min Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](211, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, "1 hour Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](215, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "1 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, "2 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](237, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246, "5 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](257, "6 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](265, "img", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, "ELANA");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "January, 12,2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](272, "i", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](273, "img", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](279, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](282, "20 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](284, "i", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](287, "10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](289, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](293, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](296, "Jason Borne ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](298, "1 Year Ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](299, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](300, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](301, "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](304, "img", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](306, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](307, "Alexendra Dhadio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](309, "1 Month Ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](310, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](312, "yes, really very awesome car i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](315, "img", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](318, "Olivia Jon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](320, "15 Days Ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](321, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](323, "i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](326, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](328, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, "Issa Bell ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](330, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](331, "1 Year Ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](332, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](334, "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](335, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](337, "More Commnets");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](340, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](342, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](343, "input", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](344, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](345, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](346, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](348, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](352, "img", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](353, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](355, "ELANA");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](357, "January, 12,2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](358, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](359, "i", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](360, "img", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](361, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](362, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](363, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](364, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](366, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](367, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](368, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](369, "20 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](370, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](371, "i", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](373, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](374, "10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](375, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](376, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](377, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](378, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](380, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](381, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](383, "Jason Borne ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](385, "1 Year Ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](386, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](388, "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](389, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](390, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](391, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](393, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](394, "Issa Bell ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](395, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](396, "1 Year Ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](397, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](399, "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](400, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](401, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](402, "More Commnets");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](404, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](405, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](406, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](407, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](408, "input", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](409, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](410, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](411, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](413, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](415, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](416, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](417, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](418, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](419, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_419_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.isIntroProfile = !ctx_r13.isIntroProfile;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](420, "Profile Intro");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](421, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](423, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](424, "About Me :");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](426, " Hi, I\u2019m elana, I\u2019m 30 and I work as a web Designer for the \u201CDaydreams\u201D Agency in Pier 56. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](427, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](428, "Favourite TV shows :");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](430, " Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](431, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](432, "Favourite Music Bands :");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](433, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](434, " Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](435, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](436, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](437, "Social Networks");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](438, "button", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](439, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](440, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](441, "button", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](442, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](443, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](444, "button", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](445, "i", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](446, "Dribbble");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](447, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](448, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](450, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](451, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_451_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.isFollowers = !ctx_r14.isFollowers;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](452, "Followers");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](453, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](454, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](455, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](456, "img", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](457, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](458, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](459, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](461, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](462, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](463, "img", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](464, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](465, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](466, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](467, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](468, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](469, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](470, "img", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](471, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](472, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](473, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](474, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](475, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](476, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](477, "img", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](478, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](479, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](480, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](481, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](482, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](483, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](484, "img", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](485, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](486, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](487, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](488, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](489, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](490, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](491, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](492, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](493, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](494, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_494_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.isFollowings = !ctx_r15.isFollowings;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](495, "Followings");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](496, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](497, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](498, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](499, "img", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](500, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](501, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](502, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](503, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](504, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](505, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](506, "img", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](507, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](508, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](509, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](510, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](511, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](512, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](513, "img", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](514, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](515, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](516, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](517, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](518, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](519, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](520, "img", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](521, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](522, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](523, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](524, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](525, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](526, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](527, "img", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](528, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](529, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](530, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](531, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](532, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](533, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](534, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](535, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](536, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](537, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_537_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r16.isLatestPhotos = !ctx_r16.isLatestPhotos;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](538, "Latest Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](539, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](540, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](541, "ul", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](542, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](543, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](544, "img", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](545, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](546, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](547, "img", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](548, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](549, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](550, "img", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](551, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](552, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](553, "img", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](554, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](555, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](556, "img", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](557, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](558, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](559, "img", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](560, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](561, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](562, "img", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](563, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](564, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](565, "img", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](566, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](567, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](568, "img", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](569, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](570, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](571, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](572, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](573, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_27_Template_button_click_573_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r17.isFriends = !ctx_r17.isFriends;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](574, "Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](575, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](576, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](577, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](578, "img", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](579, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](580, "img", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](581, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](582, "img", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](583, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](584, "img", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](585, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](586, "img", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](587, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](588, "img", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](589, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](590, "img", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](591, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](592, "img", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](593, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](594, "img", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](595, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](596, "img", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](597, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](598, "img", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](599, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](600, "img", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](601, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](602, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](603, "img", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r1.isProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r1.isProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r1.isMutualFriend);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r1.isMutualFriend);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r1.isActiveFeed);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r1.isActiveFeed);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](229);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r1.isIntroProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r1.isIntroProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r1.isFollowers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r1.isFollowers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r1.isFollowings);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r1.isFollowings);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r1.isLatestPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r1.isLatestPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r1.isFriends);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r1.isFriends);
        }
      }

      function SocialAppComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "About");
        }
      }

      function SocialAppComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r18.isProfile = !ctx_r18.isProfile;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h6", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "My Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Likes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " 884");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "35 New Likes This Week");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "img", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "img", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "img", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r20.isMutualFriend = !ctx_r20.isMutualFriend;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Mutual Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "input", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "wintersolder@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "barnes@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "jasonb@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "comeren@gmail.comtt");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "andrewj@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "johnywaston@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Johny William");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "johnyw@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "wintersolder@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "barnes@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "jasonb@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "comeren@gmail.comtt");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "andrewj@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "johnywaston@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](178, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Johny William");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "johnyw@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_188_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r21.isActiveFeed = !ctx_r21.isActiveFeed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Activity Feed");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "20 min Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](211, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, "1 hour Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](215, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "1 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, "2 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](237, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, "Johny Waston");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246, "5 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "Commented on Shaun Park's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](257, "6 days Ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](264, "Pepole You May Know");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "div", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](270, "img", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](274, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](277, "img", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, "Anna Mull");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](281, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](284, "img", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](286, "Dion Cast");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](288, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](291, "img", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "Karlene Lex");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](295, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](298, "img", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](300, "Vella Chism");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](305, "img", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](306, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](307, "Wai Schalk");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](309, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](310, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](312, "img", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](314, "Karlene Lex");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "div", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](321, "Hobbies and Interests");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "span", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](323, "app-feather-icons", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](326, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](328, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, "Hobbies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](330, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](331, "I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it\u2019s raining outside.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](332, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](334, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](335, "Favourite Music Bands / Artists:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](337, "Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](340, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "Favourite TV Shows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](344, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](345, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](346, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, "Favourite Books:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](350, "The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](352, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](353, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](355, "Favourite Movies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](357, "Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad Ferrum Man. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](358, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](360, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](361, "Favourite Writers:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](362, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](363, "Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandr Platt, Marcus Roth.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](364, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](366, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](367, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](368, "Favourite Games:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](369, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](370, "The First of Us, Assassin\u2019s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](371, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](373, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](374, "Other Interests:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](375, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](376, "Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](377, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](378, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "div", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](380, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](381, "Education and Employement");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "span", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](383, "app-feather-icons", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](385, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](386, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](388, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](389, "The New College of Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](390, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](391, "2001 - 2006");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](393, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](394, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](395, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](396, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](397, "Digital Design Intern");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](399, "2006-2008");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](400, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](401, "Digital Design Intern for the \u201CMultimedz\u201D agency. Was in charge of the communication with the clients.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](402, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](404, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](405, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](406, "Rembrandt Institute");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](407, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](408, "2008");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](409, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](410, "Five months Digital Illustration course. Professor: Leonardo Stagg. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](411, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](413, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](414, "UI/UX Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](415, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](416, "2001 - 2006");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](417, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](418, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](419, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](420, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](421, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](423, "The Digital College");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](424, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](425, "2010");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](426, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](427, "6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](428, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](430, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](431, "The New College of Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](432, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](433, "2008 - 2013");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](435, "UI/UX Designer for the \u201CDaydreams\u201D agency.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](436, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](437, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](438, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](439, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](440, "Viewed Your Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](441, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](442, "div", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](443, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](444, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](445, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](446, "img", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](447, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](448, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](450, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](451, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](452, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](453, "img", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](454, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](455, "Anna Mull");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](456, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](457, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](458, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](459, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](460, "img", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](461, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](462, "Dion Cast");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](463, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](464, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](465, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](466, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](467, "img", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](468, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](469, "Karlene Lex");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](470, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](471, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](472, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](473, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](474, "img", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](475, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](476, "Vella Chism");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](477, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](478, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](479, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](480, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](481, "img", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](482, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](483, "Wai Schalk");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](484, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](485, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](486, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](487, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](488, "img", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](489, "span", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](490, "Karlene Lex");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](491, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](492, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](493, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](494, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](495, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](496, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](497, "Activity Log");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](498, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](499, "div", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](500, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](501, "h6", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](502, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](503, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](504, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](505, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](506, "Comeren Diaz likes your photos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](507, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](508, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](509, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](510, "Karlene Lex and Comeren Diaz now friends.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](511, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](512, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](513, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](514, "Sarah Loren wrote on your timeline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](515, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](516, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](517, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](518, "Johny Waston likes your post's. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](519, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](520, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](521, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](522, "Andew Jon became friends with Comeren Diaz.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](523, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](524, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](525, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](526, "Johny Waston became friends with Bucky Barnes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](527, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](528, "h6", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](529, "25 December");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](530, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](531, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](532, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](533, "Comeren Diaz likes your photos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](534, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](535, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](536, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](537, "Johny Waston likes your post's. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](538, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](539, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](540, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](541, "Karlene Lex and Comeren Diaz now friends.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](542, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](543, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](544, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](545, "Johny Waston became friends with Bucky Barnes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](546, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](547, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](548, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](549, "Sarah Loren wrote on your timeline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](550, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](551, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](552, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](553, "Comeren Diaz wrote on your timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](554, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](555, "h6", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](556, "8 september");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](557, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](558, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](559, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](560, "Comeren Diaz likes your photos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](561, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](562, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](563, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](564, "Johny Waston likes your post's. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](565, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](566, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](567, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](568, "Karlene Lex and Comeren Diaz now friends.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](569, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](570, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](571, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](572, "Johny Waston became friends with Bucky Barnes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](573, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](574, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](575, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](576, "Sarah Loren wrote on your timeline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](577, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](578, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](579, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](580, "Andew Jon became friends with Comeren Diaz.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](581, "div", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](582, "h6", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](583, "6 June");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](584, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](585, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](586, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](587, "Comeren Diaz likes your photos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](588, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](589, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](590, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](591, "Karlene Lex and Comeren Diaz now friends.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](592, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](593, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](594, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](595, "Sarah Loren wrote on your timeline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](596, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](597, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](598, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](599, "Johny Waston likes your post's. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](600, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](601, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](602, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](603, "Andew Jon became friends with Comeren Diaz.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](604, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](605, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](606, "app-feather-icons", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](607, "Johny Waston became friends with Bucky Barnes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](608, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](609, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](610, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](611, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](612, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](613, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](614, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](615, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_615_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r22.isIntroProfile = !ctx_r22.isIntroProfile;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](616, "Profile Intro");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](617, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](618, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](619, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](620, "About Me :");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](621, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](622, " Hi, I\u2019m elana, I\u2019m 30 and I work as a web Designer for the \u201CDaydreams\u201D Agency in Pier 56. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](623, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](624, "Favourite TV shows :");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](625, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](626, " Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](627, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](628, "Favourite Music Bands :");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](629, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](630, " Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](631, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](632, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](633, "Social Networks");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](634, "button", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](635, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](636, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](637, "button", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](638, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](639, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](640, "button", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](641, "i", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](642, "Dribbble");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](643, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](644, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](645, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](646, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](647, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_647_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r23.isFollowers = !ctx_r23.isFollowers;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](648, "Followers");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](649, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](650, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](651, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](652, "img", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](653, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](654, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](655, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](656, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](657, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](658, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](659, "img", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](660, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](661, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](662, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](663, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](664, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](665, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](666, "img", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](667, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](668, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](669, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](670, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](671, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](672, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](673, "img", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](674, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](675, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](676, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](677, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](678, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](679, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](680, "img", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](681, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](682, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](683, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](684, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](685, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](686, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](687, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](688, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](689, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](690, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_690_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r24.isFollowings = !ctx_r24.isFollowings;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](691, "Followings");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](692, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](693, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](694, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](695, "img", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](696, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](697, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](698, "Sarah Loren");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](699, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](700, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](701, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](702, "img", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](703, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](704, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](705, "Bucky Barnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](706, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](707, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](708, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](709, "img", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](710, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](711, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](712, "Comeren Diaz");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](713, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](714, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](715, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](716, "img", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](717, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](718, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](719, "Jason Borne");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](720, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](721, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](722, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](723, "img", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](724, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](725, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](726, "Andew Jon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](727, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](728, "Add Friend");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](729, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](730, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](731, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](732, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](733, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_733_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r25.isLatestPhotos = !ctx_r25.isLatestPhotos;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](734, "Latest Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](735, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](736, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](737, "ul", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](738, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](739, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](740, "img", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](741, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](742, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](743, "img", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](744, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](745, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](746, "img", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](747, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](748, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](749, "img", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](750, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](751, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](752, "img", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](753, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](754, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](755, "img", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](756, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](757, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](758, "img", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](759, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](760, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](761, "img", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](762, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](763, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](764, "img", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](765, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](766, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](767, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](768, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](769, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAppComponent_ng_template_30_Template_button_click_769_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r26.isFriends = !ctx_r26.isFriends;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](770, "Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](771, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](772, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](773, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](774, "img", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](775, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](776, "img", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](777, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](778, "img", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](779, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](780, "img", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](781, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](782, "img", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](783, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](784, "img", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](785, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](786, "img", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](787, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](788, "img", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](789, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](790, "img", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](791, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](792, "img", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](793, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](794, "img", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](795, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](796, "img", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](797, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](798, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](799, "img", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r3.isProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r3.isProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r3.isMutualFriend);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r3.isMutualFriend);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r3.isActiveFeed);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r3.isActiveFeed);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](133);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "more-vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "more-vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](122);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "message-square");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "message-square");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "message-square");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "message-square");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "message-square");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "thumbs-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "user-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r3.isIntroProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r3.isIntroProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r3.isFollowers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r3.isFollowers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r3.isFollowings);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r3.isFollowings);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r3.isLatestPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r3.isLatestPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx_r3.isFriends);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx_r3.isFriends);
        }
      }

      function SocialAppComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ElANA");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "general manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function SocialAppComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Friends");
        }
      }

      function SocialAppComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Mark Jecno");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h3", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "9564");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "49");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Total Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "96");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "img", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "img", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "ul", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "i", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "i", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "i", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Johan Deo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "h3", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "2578");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "26");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Total Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "96");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "img", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "ul", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "i", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "i", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "i", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "i", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Dev John");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Devloper");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "h3", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "6545");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "91");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Total Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "21");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "img", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "img", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "ul", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "i", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "i", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "i", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "i", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "Johan Deo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "h3", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "2578");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "26");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "Total Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "96");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "img", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](195, "img", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "ul", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](199, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](202, "i", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](205, "i", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](208, "i", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](211, "i", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Dev John");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](216, "Devloper");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "h3", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "6545");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "91");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "Total Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, "21");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](240, "img", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "div", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](242, "img", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "ul", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](246, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](249, "i", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](252, "i", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](255, "i", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](258, "i", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](261, "Mark Jecno");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, "Follower");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "h3", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269, "9564");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](275, "49");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, "Total Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "span", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](282, "96");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function SocialAppComponent_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Photos");
        }
      }

      function SocialAppComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 204);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-image-gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
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

      _SocialAppComponent.ɵfac = function SocialAppComponent_Factory(t) {
        return new (t || _SocialAppComponent)();
      };

      _SocialAppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SocialAppComponent,
        selectors: [["app-social-app"]],
        decls: 39,
        vars: 2,
        consts: [[1, "container-fluid"], [1, "user-profile", "social-app-profile"], [1, "row"], [1, "col-sm-12", "social-app-tab"], [1, "card", "hovercard", "mb-0"], [1, "cardheader", "socialheader"], [1, "user-image"], [1, "avatar"], ["alt", "", 3, "src"], [1, "icon-wrapper"], [1, "icofont", "icofont-pencil-alt-5"], ["type", "file", 1, "upload", 3, "change"], [1, "share-icons"], ["href", "javascript:void(0)", 1, "social-icon", "bg-primary"], [1, "fa", "fa-smile-o"], ["href", "javascript:void(0)", 1, "social-icon", "bg-secondary"], [1, "fa", "fa-wechat"], ["href", "javascript:void(0)", 1, "social-icon", "bg-warning"], [1, "fa", "fa-share-alt"], [1, "info", "market-tabs", "p-0"], ["id", "top-tab", "role", "tablist", 1, "nav", "nav-tabs", "border-tab", "tabs-scoial"], ["ngbTabTitle", "", "class", "nav-item"], ["ngbTabContent", "", "class", "tab-content"], [3, "disabled"], ["ngbTabTitle", ""], ["id", "timeline", "role", "tabpanel", "aria-labelledby", "timeline", 1, "tab-pane", "fade", "show"], [1, "col-xl-3", "xl-40", "col-lg-12", "col-md-5", "box-col-4a"], ["id", "accordionoc", 1, "default-according", "style-1", "faq-accordion", "job-accordion"], [1, "col-xl-12"], [1, "card"], [1, "card-header"], [1, "mb-0"], ["aria-controls", "collapse", 1, "btn", "btn-link", "pl-0", 3, "click"], ["id", "collapse", 1, "collapse", 3, "ngbCollapse"], [1, "card-body", "socialprofile"], [1, "media"], ["src", " assets/images/user/1.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "media-body"], [1, "font-primary", "f-w-500"], [1, "d-block"], [1, "fa", "fa-comments-o"], [1, "px-2"], [1, "badge", "badge-pill", "badge-light"], [1, "fa", "fa-bell-o"], [1, "social-btngroup", "d-flex"], ["type", "button", 1, "btn", "btn-primary", "text-center"], ["type", "button", 1, "btn", "btn-light", "text-center"], [1, "likes-profile", "text-center"], [1, "fa", "fa-heart", "font-danger"], [1, "text-center"], [1, "customers", "text-center", "social-group"], [1, "d-inline-block"], ["src", " assets/images/user/3.jpg", "alt", "", "data-container", "body", "placement", "top", "ngbTooltip", "Johny Waston", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/5.jpg", "alt", "", "data-container", "body", "placement", "top", "ngbTooltip", "Andew Jon", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/1.jpg", "alt", "", "data-container", "body", "placement", "top", "ngbTooltip", "Comeren Diaz", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/2.png", "alt", "", "data-container", "body", "placement", "top", "ngbTooltip", "Bucky Barnes", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/8.jpg", "alt", "", "data-container", "body", "placement", "top", "ngbTooltip", "Jason Borne", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/11.png", "alt", "", "data-container", "body", "placement", "top", "ngbTooltip", "Comeren Diaz", 1, "img-40", "rounded-circle"], ["alt", "", "src", " assets/images/social-app/timeline-3.png", 1, "img-fluid"], ["aria-controls", "collapse1", 1, "btn", "btn-link", "pl-0", 3, "click"], ["id", "collapse1", 1, "collapse", 3, "ngbCollapse"], [1, "card-body", "social-status"], [1, "form-group", "m-0"], ["type", "search", "placeholder", "Search Contacts..", 1, "form-control-plaintext", "form-control"], ["src", " assets/images/user/2.png", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "social-status", "social-online"], [1, "f-w-500", "d-block"], ["src", " assets/images/user/10.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "social-status", "social-busy"], ["src", " assets/images/user/6.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "social-status", "social-offline"], ["src", " assets/images/user/8.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", " assets/images/user/14.png", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", " assets/images/user/4.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", " assets/images/user/3.png", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["href", "javascript:void(0)"], [1, "light-span"], ["src", " assets/images/user/3.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", " assets/images/user/5.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "col-xl-6", "xl-60", "col-lg-12", "col-md-7", "box-col-8a"], [1, "row", "user-col2"], [1, "col-sm-12"], [1, "card-body"], [1, "new-users-social"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "rounded-circle", "image-radius", "m-r-15"], [1, "mb-0", "f-w-700"], [1, "pull-right", "mt-0"], ["data-feather", "more-vertical"], ["alt", "", "src", "assets/images/social-app/timeline-1.png", 1, "img-fluid"], [1, "timeline-content"], [1, "like-content"], [1, "pull-right", "comment-number"], [1, "fa", "fa-share-alt", "mr-0"], [1, "social-chat"], [1, "your-msg"], ["alt", "", "src", "assets/images/user/1.jpg", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "f-w-500"], [1, "fa", "fa-reply", "font-primary"], [1, "other-msg"], ["alt", "", "src", "assets/images/user/2.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", "assets/images/user/3.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["href", "#"], [1, "comments-box"], [1, "input-group", "text-box"], ["type", "text", "name", "message-to-send", "placeholder", "Post Your commnets", 1, "form-control", "input-txt-bx"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-transparent"], ["alt", "", "src", "assets/images/social-app/timeline-2.png", 1, "img-fluid"], [1, "col-xl-3", "xl-100", "box-col-12"], [1, "col-xl-12", "xl-50", "box-col-6"], [1, "card-body", "filter-cards-view"], [1, "social-network", "theme-form"], [1, "btn", "social-btn", "btn-fb", "mb-2", "text-center"], [1, "fa", "fa-facebook", "mr-1"], [1, "btn", "social-btn", "btn-twitter", "mb-2", "text-center"], [1, "fa", "fa-twitter", "mr-1"], [1, "btn", "social-btn", "btn-google", "text-center"], [1, "fa", "fa-dribbble", "mr-1"], [1, "card-body", "social-list"], ["alt", "", "src", " assets/images/user/2.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", " assets/images/user/3.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", " assets/images/user/3.jpg", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", " assets/images/user/10.jpg", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", " assets/images/user/11.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "card-body", "photos", "px-0"], [1, "latest-post"], ["alt", "", "src", " assets/images/social-app/post-1.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-2.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-3.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-4.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-5.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-6.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-7.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-8.png", 1, "img-fluid"], ["alt", "", "src", " assets/images/social-app/post-9.png", 1, "img-fluid"], [1, "card-body", "avatar-showcase"], [1, "d-inline-block", "friend-pic"], ["src", " assets/images/user/3.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/5.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/1.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/2.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/3.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/6.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/10.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/14.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/4.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/11.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/user/8.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", " assets/images/social-app/timeline-4.png", 1, "img-fluid"], ["id", "about", "role", "tabpanel", "aria-labelledby", "about", 1, "tab-pane", "fade", "show"], ["src", " assets/images/user/3.jpg", "alt", "", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Johny Waston", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/5.jpg", "alt", "", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Andew Jon", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/1.jpg", "alt", "", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Comeren Diaz", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/2.png", "alt", "", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Bucky Barnes", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/8.jpg", "alt", "", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Jason Borne", 1, "img-40", "rounded-circle"], ["src", " assets/images/user/11.png", "alt", "", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Comeren Diaz", 1, "img-40", "rounded-circle"], ["type", "search", "placeholder", "Search Contacts..", 1, "form-control-plaintext"], [1, "pepole-knows"], [1, "add-friend", "text-center"], ["alt", "", "src", " assets/images/user/2.png", 1, "img-60", "img-fluid", "rounded-circle"], [1, "d-block", "f-w-500"], [1, "btn", "btn-primary", "btn-xs"], ["alt", "", "src", " assets/images/user/3.png", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", " assets/images/user/3.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", " assets/images/user/4.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", " assets/images/user/8.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", " assets/images/user/10.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", " assets/images/user/14.png", 1, "img-60", "img-fluid", "rounded-circle"], [1, "card-header", "social-header"], [1, "pull-right"], [3, "icon"], [1, "row", "details-about"], [1, "col-sm-6"], [1, "your-details"], [1, "your-details", "your-details-xs"], [1, "activity-log"], [1, "my-activity"], [1, "m-r-20", 3, "icon"], [1, "title"], ["target", "_blank", "href", ""], [1, "desc", "mt-2"], ["id", "friends", "role", "tabpanel", "aria-labelledby", "friends", 1, "tab-pane", "fade", "show"], [1, "col-md-6", "col-xl-4", "box-col-6", "xl-50"], [1, "card", "custom-card"], ["src", " assets/images/user-card/1.jpg", "alt", "", 1, "img-fluid"], [1, "card-profile"], ["src", " assets/images/avtar/3.jpg", "alt", "", 1, "rounded-circle"], [1, "card-social"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-rss"], [1, "text-center", "profile-details"], [1, "card-footer", "row"], [1, "col-4", "col-sm-4"], [1, "counter"], ["src", " assets/images/user-card/2.jpg", "alt", "", 1, "img-fluid"], ["src", " assets/images/avtar/16.jpg", "alt", "", 1, "rounded-circle"], ["src", " assets/images/user-card/3.jpg", "alt", "", 1, "img-fluid"], ["src", " assets/images/avtar/11.jpg", "alt", "", 1, "rounded-circle"], ["src", " assets/images/user-card/7.jpg", "alt", "", 1, "img-fluid"], ["src", " assets/images/user-card/5.jpg", "alt", "", 1, "img-fluid"], ["src", " assets/images/user-card/6.jpg", "alt", "", 1, "img-fluid"], ["id", "photos", "role", "tabpanel", "aria-labelledby", "photos", 1, "tab-pane", "fade", "show", "gallery-popup"]],
        template: function SocialAppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SocialAppComponent_Template_input_change_11_listener($event) {
              return ctx.readUrl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ngb-tabset");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SocialAppComponent_ng_template_26_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SocialAppComponent_ng_template_27_Template, 604, 16, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, SocialAppComponent_ng_template_29_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, SocialAppComponent_ng_template_30_Template, 800, 42, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ngb-tab", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, SocialAppComponent_ng_template_32_Template, 5, 0, "ng-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, SocialAppComponent_ng_template_34_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, SocialAppComponent_ng_template_35_Template, 284, 0, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, SocialAppComponent_ng_template_37_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, SocialAppComponent_ng_template_38_Template, 6, 0, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.url ? ctx.url : " assets/images/user/7.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", true);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTabset, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTab, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTabTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTabContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_1__.ImageGalleryComponent],
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

      _SocialAppModule.ɵfac = function SocialAppModule_Factory(t) {
        return new (t || _SocialAppModule)();
      };

      _SocialAppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _SocialAppModule
      });
      _SocialAppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _social_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.SocialAppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_10__.GalleryModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_SocialAppModule, {
          declarations: [_social_app_component__WEBPACK_IMPORTED_MODULE_2__.SocialAppComponent, _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_3__.ImageGalleryComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _social_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.SocialAppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_10__.GalleryModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_social-app_social-app_module_ts-es5.js.map