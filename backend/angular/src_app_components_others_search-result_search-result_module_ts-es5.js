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

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_others_search-result_search-result_module_ts"], {
    /***/
    90167: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
            img: 'assets/images/big-lightgallry/013.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(1, {
            img: 'assets/images/big-lightgallry/014.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(2, {
            img: 'assets/images/big-lightgallry/015.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(3, {
            img: 'assets/images/big-lightgallry/016.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(4, {
            img: 'assets/images/big-lightgallry/012.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(5, {
            img: 'assets/images/big-lightgallry/01.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(6, {
            img: 'assets/images/big-lightgallry/02.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(7, {
            img: 'assets/images/big-lightgallry/03.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(8, {
            img: 'assets/images/big-lightgallry/04.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(9, {
            img: 'assets/images/big-lightgallry/05.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(10, {
            img: 'assets/images/big-lightgallry/06.jpg',
            extUrl: 'http://www.google.com',
            title: 'Portfolio Title',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(11, {
            img: 'assets/images/big-lightgallry/07.jpg',
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
        consts: [["id", "aniimated-thumbnials", 1, "my-gallery", "row", "gallery-with-description"], [1, "my-app-custom-plain-container-with-desc", "row"], ["class", "col-xl-3 col-sm-6", "itemprop", "associatedMedia", 4, "ngFor", "ngForOf"], [3, "id", "modalImages", "plainGalleryConfig", "currentImageConfig", "buttonsConfig"], ["itemprop", "associatedMedia", 1, "col-xl-3", "col-sm-6"], ["href", "javascript:void(0)", "itemprop", "contentUrl"], ["itemprop", "thumbnail", "alt", "Image description", 1, "img-thumbnail", 3, "src", "click"], [1, "caption"]],
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
    42550: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchResultRoutingModule": function SearchResultRoutingModule() {
          return (
            /* binding */
            _SearchResultRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _search_result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search-result.component */
      82144);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _search_result_component__WEBPACK_IMPORTED_MODULE_0__.SearchResultComponent
        }]
      }];

      var _SearchResultRoutingModule = function _SearchResultRoutingModule() {
        _classCallCheck(this, _SearchResultRoutingModule);
      };

      _SearchResultRoutingModule.??fac = function SearchResultRoutingModule_Factory(t) {
        return new (t || _SearchResultRoutingModule)();
      };

      _SearchResultRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _SearchResultRoutingModule
      });
      _SearchResultRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_SearchResultRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    82144: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchResultComponent": function SearchResultComponent() {
          return (
            /* binding */
            _SearchResultComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-gallery/image-gallery.component */
      90167);

      function SearchResultComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "All ");
        }
      }

      function SearchResultComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Search result for \"Pixelstrap\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "https://themeforest.net/user/pixelstrap/portfolio/");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "PixelStrap - Portfolio | ThemeForest");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "2020's Best Selling Creative WP Themes. The #1 Source of Premium WP Themes! ThemeForest 45,000+ WP Themes & Website Templates From $2. Check it Out! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "3 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "PixelStrap - Portfolio | ThemeForestthemeforest.net \u203A user \u203A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "PixelStrap - Portfolio | ThemeForest");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "The #1 marketplace for premium website templates, including themes for WordPress, Magento, Drupal, Joomla, and more. Create a website, fast.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](30, "3 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, "https://themeforest.net/user/pixelstrap/portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, "Morbi feugiat mauris vel semper fringilla.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, "Cuba introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](45, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](46, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](47, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](48, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](49, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, "3 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](53, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](55, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](58, "https://themeforest.net/user/pixelstrap/portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](60, "Morbi feugiat mauris vel semper fringilla.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](62, "Cuba introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](66, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](67, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](68, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](69, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](70, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](72, "3 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](74, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](76, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](79, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](80, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](81, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](83, "25 July 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](84, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](85, "Accusamus et iusto odio dignissimos ducimus qui blanditiis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "ul", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](87, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](88, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](89, "Mark Jecno");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](90, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](91, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](92, "02 Hits");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](93, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](94, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](95, "https://themeforest.net/user/pixelstrap/portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](97, "Pixelstrap Website Templates from ThemeForest ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](99, "Get 59 pixelstrap website templates on ThemeForest. Buy pixelstrap website templates from $7. All created by our Global Community of independent Web ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](101, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](102, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](103, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](104, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](105, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](106, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](107, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](108, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](109, "3 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](110, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](111, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](112, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](113, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](114, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](115, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](116, "https://themeforest.net/user/pixelstrap/portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](117, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](118, "Morbi feugiat mauris vel semper fringilla.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](119, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](120, "Cuba introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](121, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](122, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](123, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](124, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](125, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](126, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](127, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](128, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](129, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](130, "3 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](131, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](132, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](133, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](134, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](135, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](136, "nav", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](137, "ul", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](138, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](139, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](140, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](141, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](142, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](143, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](144, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](145, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](146, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](147, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](148, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](149, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](150, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](151, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](152, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](153, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](154, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function SearchResultComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Images ");
        }
      }

      function SearchResultComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "About 12,120 results (0.50 seconds)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "app-image-gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "nav", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "ul", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function SearchResultComponent_ng_template_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Videos ");
        }
      }

      function SearchResultComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "About 6,000 results (0.60 seconds)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "iframe", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "https://themeforest.net/user/pixelstrap/portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "Lorem Ipsum is simply dummy text of the printing and typesetting industry");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "3 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "iframe", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "https://themeforest.net/user/pixelstrap/portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "Lorem Ipsum is simply dummy text of the printing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](30, "3 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "iframe", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, "https://themeforest.net/user/pixelstrap/portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, "Morbi eget quam et purus commodo dapibus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45, "3 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](49, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "p", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](52, "About 6,000 results (0.60 seconds)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](54, "iframe", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, "https://themeforest.net/user/pixelstrap/portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](59, "Lorem Ipsum is simply dummy text of the printing and typesetting industry");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](63, "3 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](65, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](67, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](69, "iframe", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](72, "https://themeforest.net/user/pixelstrap/portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](74, "Morbi eget quam et purus commodo dapibus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](78, "3 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](79, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](80, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](81, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](82, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](84, "iframe", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](85, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](87, "https://themeforest.net/user/pixelstrap/portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](89, "Lorem Ipsum is simply dummy text of the printing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](90, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](91, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](92, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](93, "3 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](94, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](95, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](97, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](98, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](99, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "nav", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](101, "ul", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](102, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](103, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](104, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](105, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](106, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](107, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](108, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](109, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](110, "2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](111, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](112, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](113, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](114, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](115, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](116, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](117, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](118, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["Other"];
      };

      var _SearchResultComponent = /*#__PURE__*/function () {
        function _SearchResultComponent() {
          _classCallCheck(this, _SearchResultComponent);
        }

        _createClass(_SearchResultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SearchResultComponent;
      }();

      _SearchResultComponent.??fac = function SearchResultComponent_Factory(t) {
        return new (t || _SearchResultComponent)();
      };

      _SearchResultComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _SearchResultComponent,
        selectors: [["app-search-result"]],
        decls: 26,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid", "search-page"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header", "bg-light-primary"], [1, "theme-form"], [1, "input-group", "m-0"], ["type", "search", "placeholder", "Pixelstrap ..", 1, "form-control-plaintext"], [1, "input-group-append"], [1, "btn", "btn-primary"], ["id", "search-custom", 1, "card-body"], ["id", "top-tab", "role", "tablist", 1, "nav", "nav-tabs", "nav-material", "search-list"], ["id", "tabset"], ["ngbTabTitle", "", "class", "nav-item"], ["ngbTabContent", "", "class", "tab-content"], [1, "icon-target"], ["id", "all-links", "role", "tabpanel", "aria-labelledby", "all-link", 1, "search-links", "tab-pane", "fade", "show"], [1, "col-xl-8", "box-col-12"], [1, "mb-2"], [1, "info-block"], ["href", ""], [1, "star-ratings"], [1, "search-info"], [1, "icofont", "icofont-ui-rating"], [1, "icofont", "icofont-ui-rate-blank"], [1, "col-xl-4", "box-col-12", "mt-4"], [1, "card", "lg-mt", "o-hidden"], [1, "blog-box", "blog-shadow"], ["src", "../assets/images/blog/blog.jpg", "alt", "", 1, "img-fluid"], [1, "blog-details"], [1, "blog-social"], [1, "icofont", "icofont-user"], [1, "icofont", "icofont-thumbs-up"], [1, "col-12", "m-t-30"], ["aria-label", "..."], [1, "pagination", "pagination-primary"], [1, "page-item", "disabled"], ["href", "#", "tabindex", "-1", 1, "page-link"], [1, "page-item"], ["href", "#", 1, "page-link"], [1, "page-item", "active"], [1, "sr-only"], [1, "icon-image"], ["id", "image-links", "role", "tabpanel", "aria-labelledby", "image-link", 1, "tab-pane", "fade", "show"], [1, "info-block", "m-t-30"], [1, "pb-4", "col-sm-12", "digits"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], ["href", "javascript:void(0)", 1, "page-link"], [1, "icon-video-clapper"], ["id", "video-links", "role", "tabpanel", "aria-labelledby", "video-link", 1, "tab-pane", "fade", "show"], [1, "col-xl-6"], [1, "media", "info-block"], ["width", "200", "height", "100", "src", "https://www.youtube.com/embed/CJnfAXlBRTE", 1, "mr-3"], [1, "media-body"], ["width", "200", "height", "100", "src", "https://www.youtube.com/embed/wpmHZspl4EM", 1, "mr-3"], ["width", "200", "height", "100", "src", "https://www.youtube.com/embed/-L4gEk7cOfk", 1, "mr-3"], [1, "pb-4"], [1, "col-xl-12", "m-t-30"]],
        template: function SearchResultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "ngb-tabset", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](18, SearchResultComponent_ng_template_18_Template, 2, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, SearchResultComponent_ng_template_19_Template, 155, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](21, SearchResultComponent_ng_template_21_Template, 2, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](22, SearchResultComponent_ng_template_22_Template, 25, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](24, SearchResultComponent_ng_template_24_Template, 2, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](25, SearchResultComponent_ng_template_25_Template, 119, 0, "ng-template", 15);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "Search")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](3, _c0))("active_item", "Search");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTabset, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTab, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTabTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTabContent, _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_1__.ImageGalleryComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    14803: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchResultModule": function SearchResultModule() {
          return (
            /* binding */
            _SearchResultModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      59715);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _search_result_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search-result-routing.module */
      42550);
      /* harmony import */


      var _search_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-result.component */
      82144);
      /* harmony import */


      var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./image-gallery/image-gallery.component */
      90167);
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

      var _SearchResultModule = function _SearchResultModule() {
        _classCallCheck(this, _SearchResultModule);
      };

      _SearchResultModule.??fac = function SearchResultModule_Factory(t) {
        return new (t || _SearchResultModule)();
      };

      _SearchResultModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({
        type: _SearchResultModule
      });
      _SearchResultModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _search_result_routing_module__WEBPACK_IMPORTED_MODULE_1__.SearchResultRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_9__.GalleryModule.forRoot(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](_SearchResultModule, {
          declarations: [_search_result_component__WEBPACK_IMPORTED_MODULE_2__.SearchResultComponent, _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_3__.ImageGalleryComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _search_result_routing_module__WEBPACK_IMPORTED_MODULE_1__.SearchResultRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_9__.GalleryModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_components_others_search-result_search-result_module_ts-es5.js.map