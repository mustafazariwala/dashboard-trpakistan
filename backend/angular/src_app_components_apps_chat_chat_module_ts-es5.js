(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_chat_chat_module_ts"], {
    /***/
    62558: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DEFAULT_BACKGROUNDFN": function DEFAULT_BACKGROUNDFN() {
          return (
            /* binding */
            _DEFAULT_BACKGROUNDFN
          );
        },

        /* harmony export */
        "EmojiComponent": function EmojiComponent() {
          return (
            /* binding */
            _EmojiComponent
          );
        },

        /* harmony export */
        "EmojiModule": function EmojiModule() {
          return (
            /* binding */
            _EmojiModule
          );
        },

        /* harmony export */
        "EmojiService": function EmojiService() {
          return (
            /* binding */
            _EmojiService
          );
        },

        /* harmony export */
        "categories": function categories() {
          return (
            /* binding */
            _categories
          );
        },

        /* harmony export */
        "emojis": function emojis() {
          return (
            /* binding */
            _emojis
          );
        },

        /* harmony export */
        "skins": function skins() {
          return (
            /* binding */
            _skins
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function EmojiComponent_button_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.unified);
        }
      }

      function EmojiComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmojiComponent_button_0_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.handleClick($event);
          })("mouseenter", function EmojiComponent_button_0_Template_button_mouseenter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.handleOver($event);
          })("mouseleave", function EmojiComponent_button_0_Template_button_mouseleave_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.handleLeave($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmojiComponent_button_0_ng_template_2_Template, 1, 1, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("emoji-mart-emoji-native", ctx_r0.isNative)("emoji-mart-emoji-custom", ctx_r0.custom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.style);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isNative);
        }
      }

      function EmojiComponent_span_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.unified);
        }
      }

      function EmojiComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmojiComponent_span_1_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.handleClick($event);
          })("mouseenter", function EmojiComponent_span_1_Template_span_mouseenter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.handleOver($event);
          })("mouseleave", function EmojiComponent_span_1_Template_span_mouseleave_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.handleLeave($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmojiComponent_span_1_ng_template_2_Template, 1, 1, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("emoji-mart-emoji-native", ctx_r1.isNative)("emoji-mart-emoji-custom", ctx_r1.custom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.style);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isNative);
        }
      }

      var _c0 = ["*", "*"];
      var _categories = [{
        id: 'people',
        name: 'Smileys & People',
        emojis: ['1F600', '1F603', '1F604', '1F601', '1F606', '1F605', '1F923', '1F602', '1F642', '1F643', '1F609', '1F60A', '1F607', '1F970', '1F60D', '1F929', '1F618', '1F617', '263A-FE0F', '1F61A', '1F619', '1F60B', '1F61B', '1F61C', '1F92A', '1F61D', '1F911', '1F917', '1F92D', '1F92B', '1F914', '1F910', '1F928', '1F610', '1F611', '1F636', '1F60F', '1F612', '1F644', '1F62C', '1F925', '1F60C', '1F614', '1F62A', '1F924', '1F634', '1F637', '1F912', '1F915', '1F922', '1F92E', '1F927', '1F975', '1F976', '1F974', '1F635', '1F92F', '1F920', '1F973', '1F60E', '1F913', '1F9D0', '1F615', '1F61F', '1F641', '2639-FE0F', '1F62E', '1F62F', '1F632', '1F633', '1F97A', '1F626', '1F627', '1F628', '1F630', '1F625', '1F622', '1F62D', '1F631', '1F616', '1F623', '1F61E', '1F613', '1F629', '1F62B', '1F971', '1F624', '1F621', '1F620', '1F92C', '1F608', '1F47F', '1F480', '2620-FE0F', '1F4A9', '1F921', '1F479', '1F47A', '1F47B', '1F47D', '1F47E', '1F916', '1F63A', '1F638', '1F639', '1F63B', '1F63C', '1F63D', '1F640', '1F63F', '1F63E', '1F648', '1F649', '1F64A', '1F44B', '1F91A', '1F590-FE0F', '270B', '1F596', '1F44C', '1F90F', '270C-FE0F', '1F91E', '1F91F', '1F918', '1F919', '1F448', '1F449', '1F446', '1F595', '1F447', '261D-FE0F', '1F44D', '1F44E', '270A', '1F44A', '1F91B', '1F91C', '1F44F', '1F64C', '1F450', '1F932', '1F91D', '1F64F', '270D-FE0F', '1F485', '1F933', '1F4AA', '1F9BE', '1F9BF', '1F9B5', '1F9B6', '1F442', '1F9BB', '1F443', '1F9E0', '1F9B7', '1F9B4', '1F440', '1F441-FE0F', '1F445', '1F444', '1F476', '1F9D2', '1F466', '1F467', '1F9D1', '1F471', '1F468', '1F9D4', '1F468-200D-1F9B0', '1F468-200D-1F9B1', '1F468-200D-1F9B3', '1F468-200D-1F9B2', '1F469', '1F469-200D-1F9B0', '1F9D1-200D-1F9B0', '1F469-200D-1F9B1', '1F9D1-200D-1F9B1', '1F469-200D-1F9B3', '1F9D1-200D-1F9B3', '1F469-200D-1F9B2', '1F9D1-200D-1F9B2', '1F471-200D-2640-FE0F', '1F471-200D-2642-FE0F', '1F9D3', '1F474', '1F475', '1F64D', '1F64D-200D-2642-FE0F', '1F64D-200D-2640-FE0F', '1F64E', '1F64E-200D-2642-FE0F', '1F64E-200D-2640-FE0F', '1F645', '1F645-200D-2642-FE0F', '1F645-200D-2640-FE0F', '1F646', '1F646-200D-2642-FE0F', '1F646-200D-2640-FE0F', '1F481', '1F481-200D-2642-FE0F', '1F481-200D-2640-FE0F', '1F64B', '1F64B-200D-2642-FE0F', '1F64B-200D-2640-FE0F', '1F9CF', '1F9CF-200D-2642-FE0F', '1F9CF-200D-2640-FE0F', '1F647', '1F647-200D-2642-FE0F', '1F647-200D-2640-FE0F', '1F926', '1F926-200D-2642-FE0F', '1F926-200D-2640-FE0F', '1F937', '1F937-200D-2642-FE0F', '1F937-200D-2640-FE0F', '1F9D1-200D-2695-FE0F', '1F468-200D-2695-FE0F', '1F469-200D-2695-FE0F', '1F9D1-200D-1F393', '1F468-200D-1F393', '1F469-200D-1F393', '1F9D1-200D-1F3EB', '1F468-200D-1F3EB', '1F469-200D-1F3EB', '1F9D1-200D-2696-FE0F', '1F468-200D-2696-FE0F', '1F469-200D-2696-FE0F', '1F9D1-200D-1F33E', '1F468-200D-1F33E', '1F469-200D-1F33E', '1F9D1-200D-1F373', '1F468-200D-1F373', '1F469-200D-1F373', '1F9D1-200D-1F527', '1F468-200D-1F527', '1F469-200D-1F527', '1F9D1-200D-1F3ED', '1F468-200D-1F3ED', '1F469-200D-1F3ED', '1F9D1-200D-1F4BC', '1F468-200D-1F4BC', '1F469-200D-1F4BC', '1F9D1-200D-1F52C', '1F468-200D-1F52C', '1F469-200D-1F52C', '1F9D1-200D-1F4BB', '1F468-200D-1F4BB', '1F469-200D-1F4BB', '1F9D1-200D-1F3A4', '1F468-200D-1F3A4', '1F469-200D-1F3A4', '1F9D1-200D-1F3A8', '1F468-200D-1F3A8', '1F469-200D-1F3A8', '1F9D1-200D-2708-FE0F', '1F468-200D-2708-FE0F', '1F469-200D-2708-FE0F', '1F9D1-200D-1F680', '1F468-200D-1F680', '1F469-200D-1F680', '1F9D1-200D-1F692', '1F468-200D-1F692', '1F469-200D-1F692', '1F46E', '1F46E-200D-2642-FE0F', '1F46E-200D-2640-FE0F', '1F575-FE0F', '1F575-FE0F-200D-2642-FE0F', '1F575-FE0F-200D-2640-FE0F', '1F482', '1F482-200D-2642-FE0F', '1F482-200D-2640-FE0F', '1F477', '1F477-200D-2642-FE0F', '1F477-200D-2640-FE0F', '1F934', '1F478', '1F473', '1F473-200D-2642-FE0F', '1F473-200D-2640-FE0F', '1F472', '1F9D5', '1F935', '1F470', '1F930', '1F931', '1F47C', '1F385', '1F936', '1F9B8', '1F9B8-200D-2642-FE0F', '1F9B8-200D-2640-FE0F', '1F9B9', '1F9B9-200D-2642-FE0F', '1F9B9-200D-2640-FE0F', '1F9D9', '1F9D9-200D-2642-FE0F', '1F9D9-200D-2640-FE0F', '1F9DA', '1F9DA-200D-2642-FE0F', '1F9DA-200D-2640-FE0F', '1F9DB', '1F9DB-200D-2642-FE0F', '1F9DB-200D-2640-FE0F', '1F9DC', '1F9DC-200D-2642-FE0F', '1F9DC-200D-2640-FE0F', '1F9DD', '1F9DD-200D-2642-FE0F', '1F9DD-200D-2640-FE0F', '1F9DE', '1F9DE-200D-2642-FE0F', '1F9DE-200D-2640-FE0F', '1F9DF', '1F9DF-200D-2642-FE0F', '1F9DF-200D-2640-FE0F', '1F486', '1F486-200D-2642-FE0F', '1F486-200D-2640-FE0F', '1F487', '1F487-200D-2642-FE0F', '1F487-200D-2640-FE0F', '1F6B6', '1F6B6-200D-2642-FE0F', '1F6B6-200D-2640-FE0F', '1F9CD', '1F9CD-200D-2642-FE0F', '1F9CD-200D-2640-FE0F', '1F9CE', '1F9CE-200D-2642-FE0F', '1F9CE-200D-2640-FE0F', '1F9D1-200D-1F9AF', '1F468-200D-1F9AF', '1F469-200D-1F9AF', '1F9D1-200D-1F9BC', '1F468-200D-1F9BC', '1F469-200D-1F9BC', '1F9D1-200D-1F9BD', '1F468-200D-1F9BD', '1F469-200D-1F9BD', '1F3C3', '1F3C3-200D-2642-FE0F', '1F3C3-200D-2640-FE0F', '1F483', '1F57A', '1F574-FE0F', '1F46F', '1F46F-200D-2642-FE0F', '1F46F-200D-2640-FE0F', '1F9D6', '1F9D6-200D-2642-FE0F', '1F9D6-200D-2640-FE0F', '1F9D7', '1F9D7-200D-2642-FE0F', '1F9D7-200D-2640-FE0F', '1F93A', '1F3C7', '26F7-FE0F', '1F3C2', '1F3CC-FE0F', '1F3CC-FE0F-200D-2642-FE0F', '1F3CC-FE0F-200D-2640-FE0F', '1F3C4', '1F3C4-200D-2642-FE0F', '1F3C4-200D-2640-FE0F', '1F6A3', '1F6A3-200D-2642-FE0F', '1F6A3-200D-2640-FE0F', '1F3CA', '1F3CA-200D-2642-FE0F', '1F3CA-200D-2640-FE0F', '26F9-FE0F', '26F9-FE0F-200D-2642-FE0F', '26F9-FE0F-200D-2640-FE0F', '1F3CB-FE0F', '1F3CB-FE0F-200D-2642-FE0F', '1F3CB-FE0F-200D-2640-FE0F', '1F6B4', '1F6B4-200D-2642-FE0F', '1F6B4-200D-2640-FE0F', '1F6B5', '1F6B5-200D-2642-FE0F', '1F6B5-200D-2640-FE0F', '1F938', '1F938-200D-2642-FE0F', '1F938-200D-2640-FE0F', '1F93C', '1F93C-200D-2642-FE0F', '1F93C-200D-2640-FE0F', '1F93D', '1F93D-200D-2642-FE0F', '1F93D-200D-2640-FE0F', '1F93E', '1F93E-200D-2642-FE0F', '1F93E-200D-2640-FE0F', '1F939', '1F939-200D-2642-FE0F', '1F939-200D-2640-FE0F', '1F9D8', '1F9D8-200D-2642-FE0F', '1F9D8-200D-2640-FE0F', '1F6C0', '1F6CC', '1F9D1-200D-1F91D-200D-1F9D1', '1F46D', '1F46B', '1F46C', '1F48F', '1F469-200D-2764-FE0F-200D-1F48B-200D-1F468', '1F468-200D-2764-FE0F-200D-1F48B-200D-1F468', '1F469-200D-2764-FE0F-200D-1F48B-200D-1F469', '1F491', '1F469-200D-2764-FE0F-200D-1F468', '1F468-200D-2764-FE0F-200D-1F468', '1F469-200D-2764-FE0F-200D-1F469', '1F46A', '1F468-200D-1F469-200D-1F466', '1F468-200D-1F469-200D-1F467', '1F468-200D-1F469-200D-1F467-200D-1F466', '1F468-200D-1F469-200D-1F466-200D-1F466', '1F468-200D-1F469-200D-1F467-200D-1F467', '1F468-200D-1F468-200D-1F466', '1F468-200D-1F468-200D-1F467', '1F468-200D-1F468-200D-1F467-200D-1F466', '1F468-200D-1F468-200D-1F466-200D-1F466', '1F468-200D-1F468-200D-1F467-200D-1F467', '1F469-200D-1F469-200D-1F466', '1F469-200D-1F469-200D-1F467', '1F469-200D-1F469-200D-1F467-200D-1F466', '1F469-200D-1F469-200D-1F466-200D-1F466', '1F469-200D-1F469-200D-1F467-200D-1F467', '1F468-200D-1F466', '1F468-200D-1F466-200D-1F466', '1F468-200D-1F467', '1F468-200D-1F467-200D-1F466', '1F468-200D-1F467-200D-1F467', '1F469-200D-1F466', '1F469-200D-1F466-200D-1F466', '1F469-200D-1F467', '1F469-200D-1F467-200D-1F466', '1F469-200D-1F467-200D-1F467', '1F5E3-FE0F', '1F464', '1F465', '1F463', '1F48B', '1F48C', '1F498', '1F49D', '1F496', '1F497', '1F493', '1F49E', '1F495', '1F49F', '2763-FE0F', '1F494', '2764-FE0F', '1F9E1', '1F49B', '1F49A', '1F499', '1F49C', '1F90E', '1F5A4', '1F90D', '1F4AF', '1F4A2', '1F4A5', '1F4AB', '1F4A6', '1F4A8', '1F573-FE0F', '1F4A3', '1F4AC', '1F441-FE0F-200D-1F5E8-FE0F', '1F5E8-FE0F', '1F5EF-FE0F', '1F4AD', '1F4A4']
      }, {
        id: 'nature',
        name: 'Animals & Nature',
        emojis: ['1F435', '1F412', '1F98D', '1F9A7', '1F436', '1F415', '1F9AE', '1F415-200D-1F9BA', '1F429', '1F43A', '1F98A', '1F99D', '1F431', '1F408', '1F981', '1F42F', '1F405', '1F406', '1F434', '1F40E', '1F984', '1F993', '1F98C', '1F42E', '1F402', '1F403', '1F404', '1F437', '1F416', '1F417', '1F43D', '1F40F', '1F411', '1F410', '1F42A', '1F42B', '1F999', '1F992', '1F418', '1F98F', '1F99B', '1F42D', '1F401', '1F400', '1F439', '1F430', '1F407', '1F43F-FE0F', '1F994', '1F987', '1F43B', '1F428', '1F43C', '1F9A5', '1F9A6', '1F9A8', '1F998', '1F9A1', '1F43E', '1F983', '1F414', '1F413', '1F423', '1F424', '1F425', '1F426', '1F427', '1F54A-FE0F', '1F985', '1F986', '1F9A2', '1F989', '1F9A9', '1F99A', '1F99C', '1F438', '1F40A', '1F422', '1F98E', '1F40D', '1F432', '1F409', '1F995', '1F996', '1F433', '1F40B', '1F42C', '1F41F', '1F420', '1F421', '1F988', '1F419', '1F41A', '1F40C', '1F98B', '1F41B', '1F41C', '1F41D', '1F41E', '1F997', '1F577-FE0F', '1F578-FE0F', '1F982', '1F99F', '1F9A0', '1F490', '1F338', '1F4AE', '1F3F5-FE0F', '1F339', '1F940', '1F33A', '1F33B', '1F33C', '1F337', '1F331', '1F332', '1F333', '1F334', '1F335', '1F33E', '1F33F', '2618-FE0F', '1F340', '1F341', '1F342', '1F343']
      }, {
        id: 'foods',
        name: 'Food & Drink',
        emojis: ['1F347', '1F348', '1F349', '1F34A', '1F34B', '1F34C', '1F34D', '1F96D', '1F34E', '1F34F', '1F350', '1F351', '1F352', '1F353', '1F95D', '1F345', '1F965', '1F951', '1F346', '1F954', '1F955', '1F33D', '1F336-FE0F', '1F952', '1F96C', '1F966', '1F9C4', '1F9C5', '1F344', '1F95C', '1F330', '1F35E', '1F950', '1F956', '1F968', '1F96F', '1F95E', '1F9C7', '1F9C0', '1F356', '1F357', '1F969', '1F953', '1F354', '1F35F', '1F355', '1F32D', '1F96A', '1F32E', '1F32F', '1F959', '1F9C6', '1F95A', '1F373', '1F958', '1F372', '1F963', '1F957', '1F37F', '1F9C8', '1F9C2', '1F96B', '1F371', '1F358', '1F359', '1F35A', '1F35B', '1F35C', '1F35D', '1F360', '1F362', '1F363', '1F364', '1F365', '1F96E', '1F361', '1F95F', '1F960', '1F961', '1F980', '1F99E', '1F990', '1F991', '1F9AA', '1F366', '1F367', '1F368', '1F369', '1F36A', '1F382', '1F370', '1F9C1', '1F967', '1F36B', '1F36C', '1F36D', '1F36E', '1F36F', '1F37C', '1F95B', '2615', '1F375', '1F376', '1F37E', '1F377', '1F378', '1F379', '1F37A', '1F37B', '1F942', '1F943', '1F964', '1F9C3', '1F9C9', '1F9CA', '1F962', '1F37D-FE0F', '1F374', '1F944', '1F52A', '1F3FA']
      }, {
        id: 'activity',
        name: 'Activities',
        emojis: ['1F383', '1F384', '1F386', '1F387', '1F9E8', '2728', '1F388', '1F389', '1F38A', '1F38B', '1F38D', '1F38E', '1F38F', '1F390', '1F391', '1F9E7', '1F380', '1F381', '1F397-FE0F', '1F39F-FE0F', '1F3AB', '1F396-FE0F', '1F3C6', '1F3C5', '1F947', '1F948', '1F949', '26BD', '26BE', '1F94E', '1F3C0', '1F3D0', '1F3C8', '1F3C9', '1F3BE', '1F94F', '1F3B3', '1F3CF', '1F3D1', '1F3D2', '1F94D', '1F3D3', '1F3F8', '1F94A', '1F94B', '1F945', '26F3', '26F8-FE0F', '1F3A3', '1F93F', '1F3BD', '1F3BF', '1F6F7', '1F94C', '1F3AF', '1FA80', '1FA81', '1F3B1', '1F52E', '1F9FF', '1F3AE', '1F579-FE0F', '1F3B0', '1F3B2', '1F9E9', '1F9F8', '2660-FE0F', '2665-FE0F', '2666-FE0F', '2663-FE0F', '265F-FE0F', '1F0CF', '1F004', '1F3B4', '1F3AD', '1F5BC-FE0F', '1F3A8', '1F9F5', '1F9F6']
      }, {
        id: 'places',
        name: 'Travel & Places',
        emojis: ['1F30D', '1F30E', '1F30F', '1F310', '1F5FA-FE0F', '1F5FE', '1F9ED', '1F3D4-FE0F', '26F0-FE0F', '1F30B', '1F5FB', '1F3D5-FE0F', '1F3D6-FE0F', '1F3DC-FE0F', '1F3DD-FE0F', '1F3DE-FE0F', '1F3DF-FE0F', '1F3DB-FE0F', '1F3D7-FE0F', '1F9F1', '1F3D8-FE0F', '1F3DA-FE0F', '1F3E0', '1F3E1', '1F3E2', '1F3E3', '1F3E4', '1F3E5', '1F3E6', '1F3E8', '1F3E9', '1F3EA', '1F3EB', '1F3EC', '1F3ED', '1F3EF', '1F3F0', '1F492', '1F5FC', '1F5FD', '26EA', '1F54C', '1F6D5', '1F54D', '26E9-FE0F', '1F54B', '26F2', '26FA', '1F301', '1F303', '1F3D9-FE0F', '1F304', '1F305', '1F306', '1F307', '1F309', '2668-FE0F', '1F3A0', '1F3A1', '1F3A2', '1F488', '1F3AA', '1F682', '1F683', '1F684', '1F685', '1F686', '1F687', '1F688', '1F689', '1F68A', '1F69D', '1F69E', '1F68B', '1F68C', '1F68D', '1F68E', '1F690', '1F691', '1F692', '1F693', '1F694', '1F695', '1F696', '1F697', '1F698', '1F699', '1F69A', '1F69B', '1F69C', '1F3CE-FE0F', '1F3CD-FE0F', '1F6F5', '1F9BD', '1F9BC', '1F6FA', '1F6B2', '1F6F4', '1F6F9', '1F68F', '1F6E3-FE0F', '1F6E4-FE0F', '1F6E2-FE0F', '26FD', '1F6A8', '1F6A5', '1F6A6', '1F6D1', '1F6A7', '2693', '26F5', '1F6F6', '1F6A4', '1F6F3-FE0F', '26F4-FE0F', '1F6E5-FE0F', '1F6A2', '2708-FE0F', '1F6E9-FE0F', '1F6EB', '1F6EC', '1FA82', '1F4BA', '1F681', '1F69F', '1F6A0', '1F6A1', '1F6F0-FE0F', '1F680', '1F6F8', '1F6CE-FE0F', '1F9F3', '231B', '23F3', '231A', '23F0', '23F1-FE0F', '23F2-FE0F', '1F570-FE0F', '1F55B', '1F567', '1F550', '1F55C', '1F551', '1F55D', '1F552', '1F55E', '1F553', '1F55F', '1F554', '1F560', '1F555', '1F561', '1F556', '1F562', '1F557', '1F563', '1F558', '1F564', '1F559', '1F565', '1F55A', '1F566', '1F311', '1F312', '1F313', '1F314', '1F315', '1F316', '1F317', '1F318', '1F319', '1F31A', '1F31B', '1F31C', '1F321-FE0F', '2600-FE0F', '1F31D', '1F31E', '1FA90', '2B50', '1F31F', '1F320', '1F30C', '2601-FE0F', '26C5', '26C8-FE0F', '1F324-FE0F', '1F325-FE0F', '1F326-FE0F', '1F327-FE0F', '1F328-FE0F', '1F329-FE0F', '1F32A-FE0F', '1F32B-FE0F', '1F32C-FE0F', '1F300', '1F308', '1F302', '2602-FE0F', '2614', '26F1-FE0F', '26A1', '2744-FE0F', '2603-FE0F', '26C4', '2604-FE0F', '1F525', '1F4A7', '1F30A']
      }, {
        id: 'objects',
        name: 'Objects',
        emojis: ['1F453', '1F576-FE0F', '1F97D', '1F97C', '1F9BA', '1F454', '1F455', '1F456', '1F9E3', '1F9E4', '1F9E5', '1F9E6', '1F457', '1F458', '1F97B', '1FA71', '1FA72', '1FA73', '1F459', '1F45A', '1F45B', '1F45C', '1F45D', '1F6CD-FE0F', '1F392', '1F45E', '1F45F', '1F97E', '1F97F', '1F460', '1F461', '1FA70', '1F462', '1F451', '1F452', '1F3A9', '1F393', '1F9E2', '26D1-FE0F', '1F4FF', '1F484', '1F48D', '1F48E', '1F507', '1F508', '1F509', '1F50A', '1F4E2', '1F4E3', '1F4EF', '1F514', '1F515', '1F3BC', '1F3B5', '1F3B6', '1F399-FE0F', '1F39A-FE0F', '1F39B-FE0F', '1F3A4', '1F3A7', '1F4FB', '1F3B7', '1F3B8', '1F3B9', '1F3BA', '1F3BB', '1FA95', '1F941', '1F4F1', '1F4F2', '260E-FE0F', '1F4DE', '1F4DF', '1F4E0', '1F50B', '1F50C', '1F4BB', '1F5A5-FE0F', '1F5A8-FE0F', '2328-FE0F', '1F5B1-FE0F', '1F5B2-FE0F', '1F4BD', '1F4BE', '1F4BF', '1F4C0', '1F9EE', '1F3A5', '1F39E-FE0F', '1F4FD-FE0F', '1F3AC', '1F4FA', '1F4F7', '1F4F8', '1F4F9', '1F4FC', '1F50D', '1F50E', '1F56F-FE0F', '1F4A1', '1F526', '1F3EE', '1FA94', '1F4D4', '1F4D5', '1F4D6', '1F4D7', '1F4D8', '1F4D9', '1F4DA', '1F4D3', '1F4D2', '1F4C3', '1F4DC', '1F4C4', '1F4F0', '1F5DE-FE0F', '1F4D1', '1F516', '1F3F7-FE0F', '1F4B0', '1F4B4', '1F4B5', '1F4B6', '1F4B7', '1F4B8', '1F4B3', '1F9FE', '1F4B9', '1F4B1', '1F4B2', '2709-FE0F', '1F4E7', '1F4E8', '1F4E9', '1F4E4', '1F4E5', '1F4E6', '1F4EB', '1F4EA', '1F4EC', '1F4ED', '1F4EE', '1F5F3-FE0F', '270F-FE0F', '2712-FE0F', '1F58B-FE0F', '1F58A-FE0F', '1F58C-FE0F', '1F58D-FE0F', '1F4DD', '1F4BC', '1F4C1', '1F4C2', '1F5C2-FE0F', '1F4C5', '1F4C6', '1F5D2-FE0F', '1F5D3-FE0F', '1F4C7', '1F4C8', '1F4C9', '1F4CA', '1F4CB', '1F4CC', '1F4CD', '1F4CE', '1F587-FE0F', '1F4CF', '1F4D0', '2702-FE0F', '1F5C3-FE0F', '1F5C4-FE0F', '1F5D1-FE0F', '1F512', '1F513', '1F50F', '1F510', '1F511', '1F5DD-FE0F', '1F528', '1FA93', '26CF-FE0F', '2692-FE0F', '1F6E0-FE0F', '1F5E1-FE0F', '2694-FE0F', '1F52B', '1F3F9', '1F6E1-FE0F', '1F527', '1F529', '2699-FE0F', '1F5DC-FE0F', '2696-FE0F', '1F9AF', '1F517', '26D3-FE0F', '1F9F0', '1F9F2', '2697-FE0F', '1F9EA', '1F9EB', '1F9EC', '1F52C', '1F52D', '1F4E1', '1F489', '1FA78', '1F48A', '1FA79', '1FA7A', '1F6AA', '1F6CF-FE0F', '1F6CB-FE0F', '1FA91', '1F6BD', '1F6BF', '1F6C1', '1FA92', '1F9F4', '1F9F7', '1F9F9', '1F9FA', '1F9FB', '1F9FC', '1F9FD', '1F9EF', '1F6D2', '1F6AC', '26B0-FE0F', '26B1-FE0F', '1F5FF']
      }, {
        id: 'symbols',
        name: 'Symbols',
        emojis: ['1F3E7', '1F6AE', '1F6B0', '267F', '1F6B9', '1F6BA', '1F6BB', '1F6BC', '1F6BE', '1F6C2', '1F6C3', '1F6C4', '1F6C5', '26A0-FE0F', '1F6B8', '26D4', '1F6AB', '1F6B3', '1F6AD', '1F6AF', '1F6B1', '1F6B7', '1F4F5', '1F51E', '2622-FE0F', '2623-FE0F', '2B06-FE0F', '2197-FE0F', '27A1-FE0F', '2198-FE0F', '2B07-FE0F', '2199-FE0F', '2B05-FE0F', '2196-FE0F', '2195-FE0F', '2194-FE0F', '21A9-FE0F', '21AA-FE0F', '2934-FE0F', '2935-FE0F', '1F503', '1F504', '1F519', '1F51A', '1F51B', '1F51C', '1F51D', '1F6D0', '269B-FE0F', '1F549-FE0F', '2721-FE0F', '2638-FE0F', '262F-FE0F', '271D-FE0F', '2626-FE0F', '262A-FE0F', '262E-FE0F', '1F54E', '1F52F', '2648', '2649', '264A', '264B', '264C', '264D', '264E', '264F', '2650', '2651', '2652', '2653', '26CE', '1F500', '1F501', '1F502', '25B6-FE0F', '23E9', '23ED-FE0F', '23EF-FE0F', '25C0-FE0F', '23EA', '23EE-FE0F', '1F53C', '23EB', '1F53D', '23EC', '23F8-FE0F', '23F9-FE0F', '23FA-FE0F', '23CF-FE0F', '1F3A6', '1F505', '1F506', '1F4F6', '1F4F3', '1F4F4', '2640-FE0F', '2642-FE0F', '2695-FE0F', '267E-FE0F', '267B-FE0F', '269C-FE0F', '1F531', '1F4DB', '1F530', '2B55', '2705', '2611-FE0F', '2714-FE0F', '2716-FE0F', '274C', '274E', '2795', '2796', '2797', '27B0', '27BF', '303D-FE0F', '2733-FE0F', '2734-FE0F', '2747-FE0F', '203C-FE0F', '2049-FE0F', '2753', '2754', '2755', '2757', '3030-FE0F', '00A9-FE0F', '00AE-FE0F', '2122-FE0F', '0023-FE0F-20E3', '002A-FE0F-20E3', '0030-FE0F-20E3', '0031-FE0F-20E3', '0032-FE0F-20E3', '0033-FE0F-20E3', '0034-FE0F-20E3', '0035-FE0F-20E3', '0036-FE0F-20E3', '0037-FE0F-20E3', '0038-FE0F-20E3', '0039-FE0F-20E3', '1F51F', '1F520', '1F521', '1F522', '1F523', '1F524', '1F170-FE0F', '1F18E', '1F171-FE0F', '1F191', '1F192', '1F193', '2139-FE0F', '1F194', '24C2-FE0F', '1F195', '1F196', '1F17E-FE0F', '1F197', '1F17F-FE0F', '1F198', '1F199', '1F19A', '1F201', '1F202-FE0F', '1F237-FE0F', '1F236', '1F22F', '1F250', '1F239', '1F21A', '1F232', '1F251', '1F238', '1F234', '1F233', '3297-FE0F', '3299-FE0F', '1F23A', '1F235', '1F534', '1F7E0', '1F7E1', '1F7E2', '1F535', '1F7E3', '1F7E4', '26AB', '26AA', '1F7E5', '1F7E7', '1F7E8', '1F7E9', '1F7E6', '1F7EA', '1F7EB', '2B1B', '2B1C', '25FC-FE0F', '25FB-FE0F', '25FE', '25FD', '25AA-FE0F', '25AB-FE0F', '1F536', '1F537', '1F538', '1F539', '1F53A', '1F53B', '1F4A0', '1F518', '1F533', '1F532']
      }, {
        id: 'flags',
        name: 'Flags',
        emojis: ['1F1E6-1F1E8', '1F1E6-1F1E9', '1F1E6-1F1EA', '1F1E6-1F1EB', '1F1E6-1F1EC', '1F1E6-1F1EE', '1F1E6-1F1F1', '1F1E6-1F1F2', '1F1E6-1F1F4', '1F1E6-1F1F6', '1F1E6-1F1F7', '1F1E6-1F1F8', '1F1E6-1F1F9', '1F1E6-1F1FA', '1F1E6-1F1FC', '1F1E6-1F1FD', '1F1E6-1F1FF', '1F1E7-1F1E6', '1F1E7-1F1E7', '1F1E7-1F1E9', '1F1E7-1F1EA', '1F1E7-1F1EB', '1F1E7-1F1EC', '1F1E7-1F1ED', '1F1E7-1F1EE', '1F1E7-1F1EF', '1F1E7-1F1F1', '1F1E7-1F1F2', '1F1E7-1F1F3', '1F1E7-1F1F4', '1F1E7-1F1F6', '1F1E7-1F1F7', '1F1E7-1F1F8', '1F1E7-1F1F9', '1F1E7-1F1FB', '1F1E7-1F1FC', '1F1E7-1F1FE', '1F1E7-1F1FF', '1F1E8-1F1E6', '1F1E8-1F1E8', '1F1E8-1F1E9', '1F1E8-1F1EB', '1F1E8-1F1EC', '1F1E8-1F1ED', '1F1E8-1F1EE', '1F1E8-1F1F0', '1F1E8-1F1F1', '1F1E8-1F1F2', '1F1E8-1F1F3', '1F1E8-1F1F4', '1F1E8-1F1F5', '1F1E8-1F1F7', '1F1E8-1F1FA', '1F1E8-1F1FB', '1F1E8-1F1FC', '1F1E8-1F1FD', '1F1E8-1F1FE', '1F1E8-1F1FF', '1F1E9-1F1EA', '1F1E9-1F1EC', '1F1E9-1F1EF', '1F1E9-1F1F0', '1F1E9-1F1F2', '1F1E9-1F1F4', '1F1E9-1F1FF', '1F1EA-1F1E6', '1F1EA-1F1E8', '1F1EA-1F1EA', '1F1EA-1F1EC', '1F1EA-1F1ED', '1F1EA-1F1F7', '1F1EA-1F1F8', '1F1EA-1F1F9', '1F1EA-1F1FA', '1F1EB-1F1EE', '1F1EB-1F1EF', '1F1EB-1F1F0', '1F1EB-1F1F2', '1F1EB-1F1F4', '1F1EB-1F1F7', '1F1EC-1F1E6', '1F1EC-1F1E7', '1F1EC-1F1E9', '1F1EC-1F1EA', '1F1EC-1F1EB', '1F1EC-1F1EC', '1F1EC-1F1ED', '1F1EC-1F1EE', '1F1EC-1F1F1', '1F1EC-1F1F2', '1F1EC-1F1F3', '1F1EC-1F1F5', '1F1EC-1F1F6', '1F1EC-1F1F7', '1F1EC-1F1F8', '1F1EC-1F1F9', '1F1EC-1F1FA', '1F1EC-1F1FC', '1F1EC-1F1FE', '1F1ED-1F1F0', '1F1ED-1F1F2', '1F1ED-1F1F3', '1F1ED-1F1F7', '1F1ED-1F1F9', '1F1ED-1F1FA', '1F1EE-1F1E8', '1F1EE-1F1E9', '1F1EE-1F1EA', '1F1EE-1F1F1', '1F1EE-1F1F2', '1F1EE-1F1F3', '1F1EE-1F1F4', '1F1EE-1F1F6', '1F1EE-1F1F7', '1F1EE-1F1F8', '1F1EE-1F1F9', '1F1EF-1F1EA', '1F1EF-1F1F2', '1F1EF-1F1F4', '1F1EF-1F1F5', '1F1F0-1F1EA', '1F1F0-1F1EC', '1F1F0-1F1ED', '1F1F0-1F1EE', '1F1F0-1F1F2', '1F1F0-1F1F3', '1F1F0-1F1F5', '1F1F0-1F1F7', '1F1F0-1F1FC', '1F1F0-1F1FE', '1F1F0-1F1FF', '1F1F1-1F1E6', '1F1F1-1F1E7', '1F1F1-1F1E8', '1F1F1-1F1EE', '1F1F1-1F1F0', '1F1F1-1F1F7', '1F1F1-1F1F8', '1F1F1-1F1F9', '1F1F1-1F1FA', '1F1F1-1F1FB', '1F1F1-1F1FE', '1F1F2-1F1E6', '1F1F2-1F1E8', '1F1F2-1F1E9', '1F1F2-1F1EA', '1F1F2-1F1EB', '1F1F2-1F1EC', '1F1F2-1F1ED', '1F1F2-1F1F0', '1F1F2-1F1F1', '1F1F2-1F1F2', '1F1F2-1F1F3', '1F1F2-1F1F4', '1F1F2-1F1F5', '1F1F2-1F1F6', '1F1F2-1F1F7', '1F1F2-1F1F8', '1F1F2-1F1F9', '1F1F2-1F1FA', '1F1F2-1F1FB', '1F1F2-1F1FC', '1F1F2-1F1FD', '1F1F2-1F1FE', '1F1F2-1F1FF', '1F1F3-1F1E6', '1F1F3-1F1E8', '1F1F3-1F1EA', '1F1F3-1F1EB', '1F1F3-1F1EC', '1F1F3-1F1EE', '1F1F3-1F1F1', '1F1F3-1F1F4', '1F1F3-1F1F5', '1F1F3-1F1F7', '1F1F3-1F1FA', '1F1F3-1F1FF', '1F1F4-1F1F2', '1F1F5-1F1E6', '1F1F5-1F1EA', '1F1F5-1F1EB', '1F1F5-1F1EC', '1F1F5-1F1ED', '1F1F5-1F1F0', '1F1F5-1F1F1', '1F1F5-1F1F2', '1F1F5-1F1F3', '1F1F5-1F1F7', '1F1F5-1F1F8', '1F1F5-1F1F9', '1F1F5-1F1FC', '1F1F5-1F1FE', '1F1F6-1F1E6', '1F1F7-1F1EA', '1F1F7-1F1F4', '1F1F7-1F1F8', '1F1F7-1F1FA', '1F1F7-1F1FC', '1F1F8-1F1E6', '1F1F8-1F1E7', '1F1F8-1F1E8', '1F1F8-1F1E9', '1F1F8-1F1EA', '1F1F8-1F1EC', '1F1F8-1F1ED', '1F1F8-1F1EE', '1F1F8-1F1EF', '1F1F8-1F1F0', '1F1F8-1F1F1', '1F1F8-1F1F2', '1F1F8-1F1F3', '1F1F8-1F1F4', '1F1F8-1F1F7', '1F1F8-1F1F8', '1F1F8-1F1F9', '1F1F8-1F1FB', '1F1F8-1F1FD', '1F1F8-1F1FE', '1F1F8-1F1FF', '1F1F9-1F1E6', '1F1F9-1F1E8', '1F1F9-1F1E9', '1F1F9-1F1EB', '1F1F9-1F1EC', '1F1F9-1F1ED', '1F1F9-1F1EF', '1F1F9-1F1F0', '1F1F9-1F1F1', '1F1F9-1F1F2', '1F1F9-1F1F3', '1F1F9-1F1F4', '1F1F9-1F1F7', '1F1F9-1F1F9', '1F1F9-1F1FB', '1F1F9-1F1FC', '1F1F9-1F1FF', '1F1FA-1F1E6', '1F1FA-1F1EC', '1F1FA-1F1F2', '1F1FA-1F1F3', '1F1FA-1F1F8', '1F1FA-1F1FE', '1F1FA-1F1FF', '1F1FB-1F1E6', '1F1FB-1F1E8', '1F1FB-1F1EA', '1F1FB-1F1EC', '1F1FB-1F1EE', '1F1FB-1F1F3', '1F1FB-1F1FA', '1F1FC-1F1EB', '1F1FC-1F1F8', '1F1FD-1F1F0', '1F1FE-1F1EA', '1F1FE-1F1F9', '1F1FF-1F1E6', '1F1FF-1F1F2', '1F1FF-1F1FC', '1F38C', '1F3C1', '1F3F3-FE0F', '1F3F3-FE0F-200D-1F308', '1F3F4', '1F3F4-200D-2620-FE0F', '1F3F4-E0067-E0062-E0065-E006E-E0067-E007F', '1F3F4-E0067-E0062-E0073-E0063-E0074-E007F', '1F3F4-E0067-E0062-E0077-E006C-E0073-E007F', '1F6A9']
      }];
      var _emojis = [{
        name: 'Earth Globe Europe-Africa',
        unified: '1F30D',
        keywords: ['globe', 'world', 'international'],
        sheet: [5, 32],
        shortName: 'earth_africa'
      }, {
        name: 'Grapes',
        unified: '1F347',
        keywords: ['fruit', 'food', 'wine'],
        sheet: [6, 31],
        shortName: 'grapes'
      }, {
        name: 'Jack-O-Lantern',
        unified: '1F383',
        keywords: ['halloween', 'light', 'pumpkin', 'creepy', 'fall'],
        sheet: [7, 34],
        shortName: 'jack_o_lantern'
      }, {
        name: 'Chequered Flag',
        unified: '1F3C1',
        keywords: ['contest', 'finishline', 'race', 'gokart'],
        sheet: [8, 39],
        shortName: 'checkered_flag'
      }, {
        name: 'Automated Teller Machine',
        unified: '1F3E7',
        keywords: ['money', 'sales', 'cash', 'blue-square', 'payment', 'bank'],
        sheet: [11, 1],
        shortName: 'atm'
      }, {
        name: 'Emoji Modifier Fitzpatrick Type-1-2',
        unified: '1F3FB',
        sheet: [11, 23],
        shortName: 'skin-tone-2'
      }, {
        name: 'Monkey Face',
        unified: '1F435',
        emoticons: [':o)'],
        keywords: ['animal', 'nature', 'circus'],
        sheet: [12, 25],
        shortName: 'monkey_face'
      }, {
        name: 'Waving Hand Sign',
        unified: '1F44B',
        keywords: ['hands', 'gesture', 'goodbye', 'solong', 'farewell', 'hello', 'hi', 'palm'],
        sheet: [13, 26],
        skinVariations: [{
          unified: '1F44B-1F3FB',
          sheet: [13, 27]
        }, {
          unified: '1F44B-1F3FC',
          sheet: [13, 28]
        }, {
          unified: '1F44B-1F3FD',
          sheet: [13, 29]
        }, {
          unified: '1F44B-1F3FE',
          sheet: [13, 30]
        }, {
          unified: '1F44B-1F3FF',
          sheet: [13, 31]
        }],
        shortName: 'wave'
      }, {
        name: 'Eyeglasses',
        unified: '1F453',
        keywords: ['fashion', 'accessories', 'eyesight', 'nerdy', 'dork', 'geek'],
        sheet: [14, 7],
        shortName: 'eyeglasses'
      }, {
        name: 'Grinning Face',
        unified: '1F600',
        text: ':D',
        keywords: ['face', 'smile', 'happy', 'joy', ':D', 'grin'],
        sheet: [30, 35],
        shortName: 'grinning'
      }, {
        name: 'Earth Globe Americas',
        unified: '1F30E',
        keywords: ['globe', 'world', 'USA', 'international'],
        sheet: [5, 33],
        shortName: 'earth_americas'
      }, {
        name: 'Melon',
        unified: '1F348',
        keywords: ['fruit', 'nature', 'food'],
        sheet: [6, 32],
        shortName: 'melon'
      }, {
        name: 'Christmas Tree',
        unified: '1F384',
        keywords: ['festival', 'vacation', 'december', 'xmas', 'celebration'],
        sheet: [7, 35],
        shortName: 'christmas_tree'
      }, {
        name: 'Emoji Modifier Fitzpatrick Type-3',
        unified: '1F3FC',
        sheet: [11, 24],
        shortName: 'skin-tone-3'
      }, {
        name: 'Monkey',
        unified: '1F412',
        keywords: ['animal', 'nature', 'banana', 'circus'],
        sheet: [11, 46],
        shortName: 'monkey'
      }, {
        name: 'Dark Sunglasses',
        unified: '1F576-FE0F',
        keywords: ['face', 'cool', 'accessories'],
        sheet: [29, 33],
        shortName: 'dark_sunglasses'
      }, {
        name: 'Smiling Face with Open Mouth',
        unified: '1F603',
        text: ':)',
        emoticons: ['=)', '=-)'],
        keywords: ['face', 'happy', 'joy', 'haha', ':D', ':)', 'smile', 'funny'],
        sheet: [30, 38],
        shortName: 'smiley'
      }, {
        name: 'Triangular Flag on Post',
        unified: '1F6A9',
        keywords: ['mark', 'milestone', 'place'],
        sheet: [35, 0],
        shortName: 'triangular_flag_on_post'
      }, {
        name: 'Put Litter in Its Place Symbol',
        unified: '1F6AE',
        keywords: ['blue-square', 'sign', 'human', 'info'],
        sheet: [35, 5],
        shortName: 'put_litter_in_its_place'
      }, {
        name: 'Raised Back of Hand',
        unified: '1F91A',
        keywords: ['fingers', 'raised', 'backhand'],
        sheet: [37, 43],
        skinVariations: [{
          unified: '1F91A-1F3FB',
          sheet: [37, 44]
        }, {
          unified: '1F91A-1F3FC',
          sheet: [37, 45]
        }, {
          unified: '1F91A-1F3FD',
          sheet: [37, 46]
        }, {
          unified: '1F91A-1F3FE',
          sheet: [37, 47]
        }, {
          unified: '1F91A-1F3FF',
          sheet: [37, 48]
        }],
        shortName: 'raised_back_of_hand'
      }, {
        name: 'Earth Globe Asia-Australia',
        unified: '1F30F',
        keywords: ['globe', 'world', 'east', 'international'],
        sheet: [5, 34],
        shortName: 'earth_asia'
      }, {
        name: 'Watermelon',
        unified: '1F349',
        keywords: ['fruit', 'food', 'picnic', 'summer'],
        sheet: [6, 33],
        shortName: 'watermelon'
      }, {
        name: 'Fireworks',
        unified: '1F386',
        keywords: ['photo', 'festival', 'carnival', 'congratulations'],
        sheet: [7, 42],
        shortName: 'fireworks'
      }, {
        name: 'Crossed Flags',
        unified: '1F38C',
        keywords: ['japanese', 'nation', 'country', 'border'],
        sheet: [7, 48],
        shortName: 'crossed_flags'
      }, {
        name: 'Emoji Modifier Fitzpatrick Type-4',
        unified: '1F3FD',
        sheet: [11, 25],
        shortName: 'skin-tone-4'
      }, {
        name: 'Raised Hand with Fingers Splayed',
        unified: '1F590-FE0F',
        keywords: ['hand', 'fingers', 'palm'],
        sheet: [29, 48],
        skinVariations: [{
          unified: '1F590-1F3FB',
          sheet: [29, 49]
        }, {
          unified: '1F590-1F3FC',
          sheet: [29, 50]
        }, {
          unified: '1F590-1F3FD',
          sheet: [29, 51]
        }, {
          unified: '1F590-1F3FE',
          sheet: [29, 52]
        }, {
          unified: '1F590-1F3FF',
          sheet: [29, 53]
        }],
        shortName: 'raised_hand_with_fingers_splayed'
      }, {
        name: 'Smiling Face with Open Mouth and Smiling Eyes',
        unified: '1F604',
        text: ':)',
        emoticons: ['C:', 'c:', ':D', ':-D'],
        keywords: ['face', 'happy', 'joy', 'funny', 'haha', 'laugh', 'like', ':D', ':)'],
        sheet: [30, 39],
        shortName: 'smile'
      }, {
        name: 'Potable Water Symbol',
        unified: '1F6B0',
        keywords: ['blue-square', 'liquid', 'restroom', 'cleaning', 'faucet'],
        sheet: [35, 7],
        shortName: 'potable_water'
      }, {
        name: 'Goggles',
        unified: '1F97D',
        keywords: ['eyes', 'protection', 'safety'],
        sheet: [42, 15],
        shortName: 'goggles'
      }, {
        name: 'Gorilla',
        unified: '1F98D',
        keywords: ['animal', 'nature', 'circus'],
        sheet: [42, 31],
        shortName: 'gorilla'
      }, {
        name: 'Globe with Meridians',
        unified: '1F310',
        keywords: ['earth', 'international', 'world', 'internet', 'interweb', 'i18n'],
        sheet: [5, 35],
        shortName: 'globe_with_meridians'
      }, {
        name: 'Tangerine',
        unified: '1F34A',
        keywords: ['food', 'fruit', 'nature', 'orange'],
        sheet: [6, 34],
        shortName: 'tangerine'
      }, {
        name: 'Firework Sparkler',
        unified: '1F387',
        keywords: ['stars', 'night', 'shine'],
        sheet: [7, 43],
        shortName: 'sparkler'
      }, {
        name: 'Waving Black Flag',
        unified: '1F3F4',
        sheet: [11, 17],
        shortName: 'waving_black_flag'
      }, {
        name: 'Emoji Modifier Fitzpatrick Type-5',
        unified: '1F3FE',
        sheet: [11, 26],
        shortName: 'skin-tone-5'
      }, {
        name: 'Grinning Face with Smiling Eyes',
        unified: '1F601',
        keywords: ['face', 'happy', 'smile', 'joy', 'kawaii'],
        sheet: [30, 36],
        shortName: 'grin'
      }, {
        name: 'Lab Coat',
        unified: '1F97C',
        sheet: [42, 14],
        shortName: 'lab_coat'
      }, {
        name: 'Orangutan',
        unified: '1F9A7',
        sheet: [42, 55],
        shortName: 'orangutan'
      }, {
        name: 'Wheelchair Symbol',
        unified: '267F',
        keywords: ['blue-square', 'disabled', 'a11y', 'accessibility'],
        sheet: [53, 40],
        shortName: 'wheelchair'
      }, {
        name: 'Raised Hand',
        unified: '270B',
        sheet: [54, 49],
        skinVariations: [{
          unified: '270B-1F3FB',
          sheet: [54, 50]
        }, {
          unified: '270B-1F3FC',
          sheet: [54, 51]
        }, {
          unified: '270B-1F3FD',
          sheet: [54, 52]
        }, {
          unified: '270B-1F3FE',
          sheet: [54, 53]
        }, {
          unified: '270B-1F3FF',
          sheet: [54, 54]
        }],
        shortNames: ['raised_hand'],
        shortName: 'hand'
      }, {
        name: 'Lemon',
        unified: '1F34B',
        keywords: ['fruit', 'nature'],
        sheet: [6, 35],
        shortName: 'lemon'
      }, {
        name: 'Waving White Flag',
        unified: '1F3F3-FE0F',
        sheet: [11, 12],
        shortName: 'waving_white_flag'
      }, {
        name: 'Emoji Modifier Fitzpatrick Type-6',
        unified: '1F3FF',
        sheet: [11, 27],
        shortName: 'skin-tone-6'
      }, {
        name: 'Dog Face',
        unified: '1F436',
        keywords: ['animal', 'friend', 'nature', 'woof', 'puppy', 'pet', 'faithful'],
        sheet: [12, 26],
        shortName: 'dog'
      }, {
        name: 'Raised Hand with Part Between Middle and Ring Fingers',
        unified: '1F596',
        sheet: [30, 3],
        skinVariations: [{
          unified: '1F596-1F3FB',
          sheet: [30, 4]
        }, {
          unified: '1F596-1F3FC',
          sheet: [30, 5]
        }, {
          unified: '1F596-1F3FD',
          sheet: [30, 6]
        }, {
          unified: '1F596-1F3FE',
          sheet: [30, 7]
        }, {
          unified: '1F596-1F3FF',
          sheet: [30, 8]
        }],
        shortName: 'spock-hand'
      }, {
        name: 'World Map',
        unified: '1F5FA-FE0F',
        keywords: ['location', 'direction'],
        sheet: [30, 29],
        shortName: 'world_map'
      }, {
        name: 'Smiling Face with Open Mouth and Tightly-Closed Eyes',
        unified: '1F606',
        emoticons: [':>', ':->'],
        keywords: ['happy', 'joy', 'lol', 'satisfied', 'haha', 'face', 'glad', 'XD', 'laugh'],
        sheet: [30, 41],
        shortNames: ['satisfied'],
        shortName: 'laughing'
      }, {
        name: 'Mens Symbol',
        unified: '1F6B9',
        keywords: ['toilet', 'restroom', 'wc', 'blue-square', 'gender', 'male'],
        sheet: [36, 10],
        shortName: 'mens'
      }, {
        name: 'Safety Vest',
        unified: '1F9BA',
        sheet: [43, 54],
        shortName: 'safety_vest'
      }, {
        name: 'Firecracker',
        unified: '1F9E8',
        keywords: ['dynamite', 'boom', 'explode', 'explosion', 'explosive'],
        sheet: [51, 27],
        shortName: 'firecracker'
      }, {
        name: 'Banana',
        unified: '1F34C',
        keywords: ['fruit', 'food', 'monkey'],
        sheet: [6, 36],
        shortName: 'banana'
      }, {
        name: 'Rainbow Flag',
        unified: '1F3F3-FE0F-200D-1F308',
        sheet: [11, 11],
        shortName: 'rainbow-flag'
      }, {
        name: 'Dog',
        unified: '1F415',
        keywords: ['animal', 'nature', 'friend', 'doge', 'pet', 'faithful'],
        sheet: [11, 50],
        shortName: 'dog2'
      }, {
        name: 'Ok Hand Sign',
        unified: '1F44C',
        keywords: ['fingers', 'limbs', 'perfect', 'ok', 'okay'],
        sheet: [13, 32],
        skinVariations: [{
          unified: '1F44C-1F3FB',
          sheet: [13, 33]
        }, {
          unified: '1F44C-1F3FC',
          sheet: [13, 34]
        }, {
          unified: '1F44C-1F3FD',
          sheet: [13, 35]
        }, {
          unified: '1F44C-1F3FE',
          sheet: [13, 36]
        }, {
          unified: '1F44C-1F3FF',
          sheet: [13, 37]
        }],
        shortName: 'ok_hand'
      }, {
        name: 'Necktie',
        unified: '1F454',
        keywords: ['shirt', 'suitup', 'formal', 'fashion', 'cloth', 'business'],
        sheet: [14, 8],
        shortName: 'necktie'
      }, {
        name: 'Silhouette of Japan',
        unified: '1F5FE',
        keywords: ['nation', 'country', 'japanese', 'asia'],
        sheet: [30, 33],
        shortName: 'japan'
      }, {
        name: 'Smiling Face with Open Mouth and Cold Sweat',
        unified: '1F605',
        keywords: ['face', 'hot', 'happy', 'laugh', 'sweat', 'smile', 'relief'],
        sheet: [30, 40],
        shortName: 'sweat_smile'
      }, {
        name: 'Womens Symbol',
        unified: '1F6BA',
        keywords: ['purple-square', 'woman', 'female', 'toilet', 'loo', 'restroom', 'gender'],
        sheet: [36, 11],
        shortName: 'womens'
      }, {
        name: 'Sparkles',
        unified: '2728',
        keywords: ['stars', 'shine', 'shiny', 'cool', 'awesome', 'good', 'magic'],
        sheet: [55, 16],
        shortName: 'sparkles'
      }, {
        name: 'Pineapple',
        unified: '1F34D',
        keywords: ['fruit', 'nature', 'food'],
        sheet: [6, 37],
        shortName: 'pineapple'
      }, {
        name: 'Balloon',
        unified: '1F388',
        keywords: ['party', 'celebration', 'birthday', 'circus'],
        sheet: [7, 44],
        shortName: 'balloon'
      }, {
        name: 'Pirate Flag',
        unified: '1F3F4-200D-2620-FE0F',
        keywords: ['skull', 'crossbones', 'flag', 'banner'],
        sheet: [11, 13],
        shortName: 'pirate_flag'
      }, {
        name: 'T-Shirt',
        unified: '1F455',
        sheet: [14, 9],
        shortNames: ['tshirt'],
        shortName: 'shirt'
      }, {
        name: 'Restroom',
        unified: '1F6BB',
        keywords: ['blue-square', 'toilet', 'refresh', 'wc', 'gender'],
        sheet: [36, 12],
        shortName: 'restroom'
      }, {
        name: 'Pinching Hand',
        unified: '1F90F',
        sheet: [37, 17],
        skinVariations: [{
          unified: '1F90F-1F3FB',
          sheet: [37, 18]
        }, {
          unified: '1F90F-1F3FC',
          sheet: [37, 19]
        }, {
          unified: '1F90F-1F3FD',
          sheet: [37, 20]
        }, {
          unified: '1F90F-1F3FE',
          sheet: [37, 21]
        }, {
          unified: '1F90F-1F3FF',
          sheet: [37, 22]
        }],
        shortName: 'pinching_hand'
      }, {
        name: 'Rolling on the Floor Laughing',
        unified: '1F923',
        sheet: [38, 20],
        shortName: 'rolling_on_the_floor_laughing'
      }, {
        name: 'Guide Dog',
        unified: '1F9AE',
        sheet: [43, 2],
        shortName: 'guide_dog'
      }, {
        name: 'Compass',
        unified: '1F9ED',
        keywords: ['magnetic', 'navigation', 'orienteering'],
        sheet: [51, 32],
        shortName: 'compass'
      }, {
        name: 'Ascension Island Flag',
        unified: '1F1E6-1F1E8',
        sheet: [0, 31],
        shortName: 'flag-ac'
      }, {
        name: 'Party Popper',
        unified: '1F389',
        keywords: ['party', 'congratulations', 'birthday', 'magic', 'circus', 'celebration'],
        sheet: [7, 45],
        shortName: 'tada'
      }, {
        name: 'Snow Capped Mountain',
        unified: '1F3D4-FE0F',
        sheet: [10, 39],
        shortName: 'snow_capped_mountain'
      }, {
        name: 'Service Dog',
        unified: '1F415-200D-1F9BA',
        sheet: [11, 49],
        shortName: 'service_dog'
      }, {
        name: 'Jeans',
        unified: '1F456',
        keywords: ['fashion', 'shopping'],
        sheet: [14, 10],
        shortName: 'jeans'
      }, {
        name: 'Face with Tears of Joy',
        unified: '1F602',
        keywords: ['face', 'cry', 'tears', 'weep', 'happy', 'happytears', 'haha'],
        sheet: [30, 37],
        shortName: 'joy'
      }, {
        name: 'Baby Symbol',
        unified: '1F6BC',
        keywords: ['orange-square', 'child'],
        sheet: [36, 13],
        shortName: 'baby_symbol'
      }, {
        name: 'Mango',
        unified: '1F96D',
        keywords: ['fruit', 'food', 'tropical'],
        sheet: [42, 3],
        shortName: 'mango'
      }, {
        name: 'Victory Hand',
        unified: '270C-FE0F',
        keywords: ['fingers', 'ohyeah', 'hand', 'peace', 'victory', 'two'],
        sheet: [54, 55],
        skinVariations: [{
          unified: '270C-1F3FB',
          sheet: [54, 56]
        }, {
          unified: '270C-1F3FC',
          sheet: [55, 0]
        }, {
          unified: '270C-1F3FD',
          sheet: [55, 1]
        }, {
          unified: '270C-1F3FE',
          sheet: [55, 2]
        }, {
          unified: '270C-1F3FF',
          sheet: [55, 3]
        }],
        shortName: 'v'
      }, {
        name: 'Andorra Flag',
        unified: '1F1E6-1F1E9',
        sheet: [0, 32],
        shortName: 'flag-ad'
      }, {
        name: 'Red Apple',
        unified: '1F34E',
        keywords: ['fruit', 'mac', 'school'],
        sheet: [6, 38],
        shortName: 'apple'
      }, {
        name: 'Confetti Ball',
        unified: '1F38A',
        keywords: ['festival', 'party', 'birthday', 'circus'],
        sheet: [7, 46],
        shortName: 'confetti_ball'
      }, {
        name: 'Poodle',
        unified: '1F429',
        keywords: ['dog', 'animal', '101', 'nature', 'pet'],
        sheet: [12, 13],
        shortName: 'poodle'
      }, {
        name: 'Slightly Smiling Face',
        unified: '1F642',
        emoticons: [':)', '(:', ':-)'],
        keywords: ['face', 'smile'],
        sheet: [31, 44],
        shortName: 'slightly_smiling_face'
      }, {
        name: 'Water Closet',
        unified: '1F6BE',
        keywords: ['toilet', 'restroom', 'blue-square'],
        sheet: [36, 15],
        shortName: 'wc'
      }, {
        name: 'Hand with Index and Middle Fingers Crossed',
        unified: '1F91E',
        keywords: ['good', 'lucky'],
        sheet: [38, 5],
        skinVariations: [{
          unified: '1F91E-1F3FB',
          sheet: [38, 6]
        }, {
          unified: '1F91E-1F3FC',
          sheet: [38, 7]
        }, {
          unified: '1F91E-1F3FD',
          sheet: [38, 8]
        }, {
          unified: '1F91E-1F3FE',
          sheet: [38, 9]
        }, {
          unified: '1F91E-1F3FF',
          sheet: [38, 10]
        }],
        shortNames: ['hand_with_index_and_middle_fingers_crossed'],
        shortName: 'crossed_fingers'
      }, {
        name: 'Scarf',
        unified: '1F9E3',
        keywords: ['neck', 'winter', 'clothes'],
        sheet: [51, 22],
        shortName: 'scarf'
      }, {
        name: 'Mountain',
        unified: '26F0-FE0F',
        keywords: ['photo', 'nature', 'environment'],
        sheet: [54, 11],
        shortName: 'mountain'
      }, {
        name: 'United Arab Emirates Flag',
        unified: '1F1E6-1F1EA',
        sheet: [0, 33],
        shortName: 'flag-ae'
      }, {
        name: 'Volcano',
        unified: '1F30B',
        keywords: ['photo', 'nature', 'disaster'],
        sheet: [5, 30],
        shortName: 'volcano'
      }, {
        name: 'Green Apple',
        unified: '1F34F',
        keywords: ['fruit', 'nature'],
        sheet: [6, 39],
        shortName: 'green_apple'
      }, {
        name: 'Tanabata Tree',
        unified: '1F38B',
        keywords: ['plant', 'nature', 'branch', 'summer'],
        sheet: [7, 47],
        shortName: 'tanabata_tree'
      }, {
        name: 'Wolf Face',
        unified: '1F43A',
        keywords: ['animal', 'nature', 'wild'],
        sheet: [12, 30],
        shortName: 'wolf'
      }, {
        name: 'Upside-Down Face',
        unified: '1F643',
        keywords: ['face', 'flipped', 'silly', 'smile'],
        sheet: [31, 45],
        shortName: 'upside_down_face'
      }, {
        name: 'Passport Control',
        unified: '1F6C2',
        keywords: ['custom', 'blue-square'],
        sheet: [36, 24],
        shortName: 'passport_control'
      }, {
        name: 'I Love You Hand Sign',
        unified: '1F91F',
        sheet: [38, 11],
        skinVariations: [{
          unified: '1F91F-1F3FB',
          sheet: [38, 12]
        }, {
          unified: '1F91F-1F3FC',
          sheet: [38, 13]
        }, {
          unified: '1F91F-1F3FD',
          sheet: [38, 14]
        }, {
          unified: '1F91F-1F3FE',
          sheet: [38, 15]
        }, {
          unified: '1F91F-1F3FF',
          sheet: [38, 16]
        }],
        shortName: 'i_love_you_hand_sign'
      }, {
        name: 'Gloves',
        unified: '1F9E4',
        keywords: ['hands', 'winter', 'clothes'],
        sheet: [51, 23],
        shortName: 'gloves'
      }, {
        name: 'Afghanistan Flag',
        unified: '1F1E6-1F1EB',
        sheet: [0, 34],
        shortName: 'flag-af'
      }, {
        name: 'Pear',
        unified: '1F350',
        keywords: ['fruit', 'nature', 'food'],
        sheet: [6, 40],
        shortName: 'pear'
      }, {
        name: 'Pine Decoration',
        unified: '1F38D',
        keywords: ['plant', 'nature', 'vegetable', 'panda', 'pine_decoration'],
        sheet: [7, 49],
        shortName: 'bamboo'
      }, {
        name: 'Mount Fuji',
        unified: '1F5FB',
        keywords: ['photo', 'mountain', 'nature', 'japanese'],
        sheet: [30, 30],
        shortName: 'mount_fuji'
      }, {
        name: 'Winking Face',
        unified: '1F609',
        text: ';)',
        emoticons: [';)', ';-)'],
        keywords: ['face', 'happy', 'mischievous', 'secret', ';)', 'smile', 'eye'],
        sheet: [30, 44],
        shortName: 'wink'
      }, {
        name: 'Customs',
        unified: '1F6C3',
        keywords: ['passport', 'border', 'blue-square'],
        sheet: [36, 25],
        shortName: 'customs'
      }, {
        name: 'Sign of the Horns',
        unified: '1F918',
        sheet: [37, 31],
        skinVariations: [{
          unified: '1F918-1F3FB',
          sheet: [37, 32]
        }, {
          unified: '1F918-1F3FC',
          sheet: [37, 33]
        }, {
          unified: '1F918-1F3FD',
          sheet: [37, 34]
        }, {
          unified: '1F918-1F3FE',
          sheet: [37, 35]
        }, {
          unified: '1F918-1F3FF',
          sheet: [37, 36]
        }],
        shortNames: ['sign_of_the_horns'],
        shortName: 'the_horns'
      }, {
        name: 'Fox Face',
        unified: '1F98A',
        keywords: ['animal', 'nature', 'face'],
        sheet: [42, 28],
        shortName: 'fox_face'
      }, {
        name: 'Coat',
        unified: '1F9E5',
        keywords: ['jacket'],
        sheet: [51, 24],
        shortName: 'coat'
      }, {
        name: 'Antigua & Barbuda Flag',
        unified: '1F1E6-1F1EC',
        sheet: [0, 35],
        shortName: 'flag-ag'
      }, {
        name: 'Peach',
        unified: '1F351',
        keywords: ['fruit', 'nature', 'food'],
        sheet: [6, 41],
        shortName: 'peach'
      }, {
        name: 'Japanese Dolls',
        unified: '1F38E',
        keywords: ['japanese', 'toy', 'kimono'],
        sheet: [7, 50],
        shortName: 'dolls'
      }, {
        name: 'Camping',
        unified: '1F3D5-FE0F',
        keywords: ['photo', 'outdoors', 'tent'],
        sheet: [10, 40],
        shortName: 'camping'
      }, {
        name: 'Smiling Face with Smiling Eyes',
        unified: '1F60A',
        text: ':)',
        keywords: ['face', 'smile', 'happy', 'flushed', 'crush', 'embarrassed', 'shy', 'joy'],
        sheet: [30, 45],
        shortName: 'blush'
      }, {
        name: 'Baggage Claim',
        unified: '1F6C4',
        keywords: ['blue-square', 'airport', 'transport'],
        sheet: [36, 26],
        shortName: 'baggage_claim'
      }, {
        name: 'Call Me Hand',
        unified: '1F919',
        keywords: ['hands', 'gesture'],
        sheet: [37, 37],
        skinVariations: [{
          unified: '1F919-1F3FB',
          sheet: [37, 38]
        }, {
          unified: '1F919-1F3FC',
          sheet: [37, 39]
        }, {
          unified: '1F919-1F3FD',
          sheet: [37, 40]
        }, {
          unified: '1F919-1F3FE',
          sheet: [37, 41]
        }, {
          unified: '1F919-1F3FF',
          sheet: [37, 42]
        }],
        shortName: 'call_me_hand'
      }, {
        name: 'Raccoon',
        unified: '1F99D',
        keywords: ['animal', 'nature'],
        sheet: [42, 47],
        shortName: 'raccoon'
      }, {
        name: 'Socks',
        unified: '1F9E6',
        keywords: ['stockings', 'clothes'],
        sheet: [51, 25],
        shortName: 'socks'
      }, {
        name: 'Anguilla Flag',
        unified: '1F1E6-1F1EE',
        sheet: [0, 36],
        shortName: 'flag-ai'
      }, {
        name: 'Cherries',
        unified: '1F352',
        keywords: ['food', 'fruit'],
        sheet: [6, 42],
        shortName: 'cherries'
      }, {
        name: 'Carp Streamer',
        unified: '1F38F',
        keywords: ['fish', 'japanese', 'koinobori', 'carp', 'banner'],
        sheet: [7, 51],
        shortName: 'flags'
      }, {
        name: 'Beach with Umbrella',
        unified: '1F3D6-FE0F',
        sheet: [10, 41],
        shortName: 'beach_with_umbrella'
      }, {
        name: 'Cat Face',
        unified: '1F431',
        keywords: ['animal', 'meow', 'nature', 'pet', 'kitten'],
        sheet: [12, 21],
        shortName: 'cat'
      }, {
        name: 'White Left Pointing Backhand Index',
        unified: '1F448',
        keywords: ['direction', 'fingers', 'hand', 'left'],
        sheet: [13, 8],
        skinVariations: [{
          unified: '1F448-1F3FB',
          sheet: [13, 9]
        }, {
          unified: '1F448-1F3FC',
          sheet: [13, 10]
        }, {
          unified: '1F448-1F3FD',
          sheet: [13, 11]
        }, {
          unified: '1F448-1F3FE',
          sheet: [13, 12]
        }, {
          unified: '1F448-1F3FF',
          sheet: [13, 13]
        }],
        shortName: 'point_left'
      }, {
        name: 'Dress',
        unified: '1F457',
        keywords: ['clothes', 'fashion', 'shopping'],
        sheet: [14, 11],
        shortName: 'dress'
      }, {
        name: 'Smiling Face with Halo',
        unified: '1F607',
        keywords: ['face', 'angel', 'heaven', 'halo'],
        sheet: [30, 42],
        shortName: 'innocent'
      }, {
        name: 'Left Luggage',
        unified: '1F6C5',
        keywords: ['blue-square', 'travel'],
        sheet: [36, 27],
        shortName: 'left_luggage'
      }, {
        name: 'Albania Flag',
        unified: '1F1E6-1F1F1',
        sheet: [0, 37],
        shortName: 'flag-al'
      }, {
        name: 'Strawberry',
        unified: '1F353',
        keywords: ['fruit', 'food', 'nature'],
        sheet: [6, 43],
        shortName: 'strawberry'
      }, {
        name: 'Wind Chime',
        unified: '1F390',
        keywords: ['nature', 'ding', 'spring', 'bell'],
        sheet: [7, 52],
        shortName: 'wind_chime'
      }, {
        name: 'Desert',
        unified: '1F3DC-FE0F',
        keywords: ['photo', 'warm', 'saharah'],
        sheet: [10, 47],
        shortName: 'desert'
      }, {
        name: 'Cat',
        unified: '1F408',
        keywords: ['animal', 'meow', 'pet', 'cats'],
        sheet: [11, 36],
        shortName: 'cat2'
      }, {
        name: 'White Right Pointing Backhand Index',
        unified: '1F449',
        keywords: ['fingers', 'hand', 'direction', 'right'],
        sheet: [13, 14],
        skinVariations: [{
          unified: '1F449-1F3FB',
          sheet: [13, 15]
        }, {
          unified: '1F449-1F3FC',
          sheet: [13, 16]
        }, {
          unified: '1F449-1F3FD',
          sheet: [13, 17]
        }, {
          unified: '1F449-1F3FE',
          sheet: [13, 18]
        }, {
          unified: '1F449-1F3FF',
          sheet: [13, 19]
        }],
        shortName: 'point_right'
      }, {
        name: 'Kimono',
        unified: '1F458',
        keywords: ['dress', 'fashion', 'women', 'female', 'japanese'],
        sheet: [14, 12],
        shortName: 'kimono'
      }, {
        name: 'Smiling Face with Smiling Eyes and Three Hearts',
        unified: '1F970',
        sheet: [42, 6],
        shortName: 'smiling_face_with_3_hearts'
      }, {
        name: 'Warning Sign',
        unified: '26A0-FE0F',
        keywords: ['exclamation', 'wip', 'alert', 'error', 'problem', 'issue'],
        sheet: [53, 50],
        shortName: 'warning'
      }, {
        name: 'Armenia Flag',
        unified: '1F1E6-1F1F2',
        sheet: [0, 38],
        shortName: 'flag-am'
      }, {
        name: 'Moon Viewing Ceremony',
        unified: '1F391',
        keywords: ['photo', 'japan', 'asia', 'tsukimi'],
        sheet: [7, 53],
        shortName: 'rice_scene'
      }, {
        name: 'Desert Island',
        unified: '1F3DD-FE0F',
        keywords: ['photo', 'tropical', 'mojito'],
        sheet: [10, 48],
        shortName: 'desert_island'
      }, {
        name: 'White Up Pointing Backhand Index',
        unified: '1F446',
        keywords: ['fingers', 'hand', 'direction', 'up'],
        sheet: [12, 53],
        skinVariations: [{
          unified: '1F446-1F3FB',
          sheet: [12, 54]
        }, {
          unified: '1F446-1F3FC',
          sheet: [12, 55]
        }, {
          unified: '1F446-1F3FD',
          sheet: [12, 56]
        }, {
          unified: '1F446-1F3FE',
          sheet: [13, 0]
        }, {
          unified: '1F446-1F3FF',
          sheet: [13, 1]
        }],
        shortName: 'point_up_2'
      }, {
        name: 'Smiling Face with Heart-Shaped Eyes',
        unified: '1F60D',
        keywords: ['face', 'love', 'like', 'affection', 'valentines', 'infatuation', 'crush', 'heart'],
        sheet: [30, 48],
        shortName: 'heart_eyes'
      }, {
        name: 'Children Crossing',
        unified: '1F6B8',
        keywords: ['school', 'warning', 'danger', 'sign', 'driving', 'yellow-diamond'],
        sheet: [36, 9],
        shortName: 'children_crossing'
      }, {
        name: 'Kiwifruit',
        unified: '1F95D',
        sheet: [41, 44],
        shortName: 'kiwifruit'
      }, {
        name: 'Sari',
        unified: '1F97B',
        sheet: [42, 13],
        shortName: 'sari'
      }, {
        name: 'Lion Face',
        unified: '1F981',
        sheet: [42, 19],
        shortName: 'lion_face'
      }, {
        name: 'Angola Flag',
        unified: '1F1E6-1F1F4',
        sheet: [0, 39],
        shortName: 'flag-ao'
      }, {
        name: 'Tomato',
        unified: '1F345',
        keywords: ['fruit', 'vegetable', 'nature', 'food'],
        sheet: [6, 29],
        shortName: 'tomato'
      }, {
        name: 'National Park',
        unified: '1F3DE-FE0F',
        keywords: ['photo', 'environment', 'nature'],
        sheet: [10, 49],
        shortName: 'national_park'
      }, {
        name: 'Tiger Face',
        unified: '1F42F',
        keywords: ['animal', 'cat', 'danger', 'wild', 'nature', 'roar'],
        sheet: [12, 19],
        shortName: 'tiger'
      }, {
        name: 'Reversed Hand with Middle Finger Extended',
        unified: '1F595',
        sheet: [29, 54],
        skinVariations: [{
          unified: '1F595-1F3FB',
          sheet: [29, 55]
        }, {
          unified: '1F595-1F3FC',
          sheet: [29, 56]
        }, {
          unified: '1F595-1F3FD',
          sheet: [30, 0]
        }, {
          unified: '1F595-1F3FE',
          sheet: [30, 1]
        }, {
          unified: '1F595-1F3FF',
          sheet: [30, 2]
        }],
        shortNames: ['reversed_hand_with_middle_finger_extended'],
        shortName: 'middle_finger'
      }, {
        name: 'Grinning Face with Star Eyes',
        unified: '1F929',
        sheet: [38, 43],
        shortNames: ['grinning_face_with_star_eyes'],
        shortName: 'star-struck'
      }, {
        name: 'Red Gift Envelope',
        unified: '1F9E7',
        keywords: ['gift'],
        sheet: [51, 26],
        shortName: 'red_envelope'
      }, {
        name: 'One-Piece Swimsuit',
        unified: '1FA71',
        sheet: [51, 52],
        shortName: 'one-piece_swimsuit'
      }, {
        name: 'No Entry',
        unified: '26D4',
        keywords: ['limit', 'security', 'privacy', 'bad', 'denied', 'stop', 'circle'],
        sheet: [54, 8],
        shortName: 'no_entry'
      }, {
        name: 'Antarctica Flag',
        unified: '1F1E6-1F1F6',
        sheet: [0, 40],
        shortName: 'flag-aq'
      }, {
        name: 'Ribbon',
        unified: '1F380',
        keywords: ['decoration', 'pink', 'girl', 'bowtie'],
        sheet: [7, 31],
        shortName: 'ribbon'
      }, {
        name: 'Stadium',
        unified: '1F3DF-FE0F',
        keywords: ['photo', 'place', 'sports', 'concert', 'venue'],
        sheet: [10, 50],
        shortName: 'stadium'
      }, {
        name: 'Tiger',
        unified: '1F405',
        keywords: ['animal', 'nature', 'roar'],
        sheet: [11, 33],
        shortName: 'tiger2'
      }, {
        name: 'White Down Pointing Backhand Index',
        unified: '1F447',
        keywords: ['fingers', 'hand', 'direction', 'down'],
        sheet: [13, 2],
        skinVariations: [{
          unified: '1F447-1F3FB',
          sheet: [13, 3]
        }, {
          unified: '1F447-1F3FC',
          sheet: [13, 4]
        }, {
          unified: '1F447-1F3FD',
          sheet: [13, 5]
        }, {
          unified: '1F447-1F3FE',
          sheet: [13, 6]
        }, {
          unified: '1F447-1F3FF',
          sheet: [13, 7]
        }],
        shortName: 'point_down'
      }, {
        name: 'Face Throwing a Kiss',
        unified: '1F618',
        emoticons: [':*', ':-*'],
        keywords: ['face', 'love', 'like', 'affection', 'valentines', 'infatuation', 'kiss'],
        sheet: [31, 2],
        shortName: 'kissing_heart'
      }, {
        name: 'No Entry Sign',
        unified: '1F6AB',
        keywords: ['forbid', 'stop', 'limit', 'denied', 'disallow', 'circle'],
        sheet: [35, 2],
        shortName: 'no_entry_sign'
      }, {
        name: 'Coconut',
        unified: '1F965',
        keywords: ['fruit', 'nature', 'food', 'palm'],
        sheet: [41, 52],
        shortName: 'coconut'
      }, {
        name: 'Briefs',
        unified: '1FA72',
        sheet: [51, 53],
        shortName: 'briefs'
      }, {
        name: 'Argentina Flag',
        unified: '1F1E6-1F1F7',
        sheet: [0, 41],
        shortName: 'flag-ar'
      }, {
        name: 'Wrapped Present',
        unified: '1F381',
        keywords: ['present', 'birthday', 'christmas', 'xmas'],
        sheet: [7, 32],
        shortName: 'gift'
      }, {
        name: 'Classical Building',
        unified: '1F3DB-FE0F',
        keywords: ['art', 'culture', 'history'],
        sheet: [10, 46],
        shortName: 'classical_building'
      }, {
        name: 'Leopard',
        unified: '1F406',
        keywords: ['animal', 'nature'],
        sheet: [11, 34],
        shortName: 'leopard'
      }, {
        name: 'Kissing Face',
        unified: '1F617',
        keywords: ['love', 'like', 'face', '3', 'valentines', 'infatuation', 'kiss'],
        sheet: [31, 1],
        shortName: 'kissing'
      }, {
        name: 'No Bicycles',
        unified: '1F6B3',
        keywords: ['cyclist', 'prohibited', 'circle'],
        sheet: [35, 10],
        shortName: 'no_bicycles'
      }, {
        name: 'Avocado',
        unified: '1F951',
        keywords: ['fruit', 'food'],
        sheet: [41, 32],
        shortName: 'avocado'
      }, {
        name: 'Shorts',
        unified: '1FA73',
        sheet: [51, 54],
        shortName: 'shorts'
      }, {
        name: 'White Up Pointing Index',
        unified: '261D-FE0F',
        keywords: ['hand', 'fingers', 'direction', 'up'],
        sheet: [53, 2],
        skinVariations: [{
          unified: '261D-1F3FB',
          sheet: [53, 3]
        }, {
          unified: '261D-1F3FC',
          sheet: [53, 4]
        }, {
          unified: '261D-1F3FD',
          sheet: [53, 5]
        }, {
          unified: '261D-1F3FE',
          sheet: [53, 6]
        }, {
          unified: '261D-1F3FF',
          sheet: [53, 7]
        }],
        shortName: 'point_up'
      }, {
        name: 'American Samoa Flag',
        unified: '1F1E6-1F1F8',
        sheet: [0, 42],
        shortName: 'flag-as'
      }, {
        name: 'Aubergine',
        unified: '1F346',
        keywords: ['vegetable', 'nature', 'food', 'aubergine'],
        sheet: [6, 30],
        shortName: 'eggplant'
      }, {
        name: 'Reminder Ribbon',
        unified: '1F397-FE0F',
        keywords: ['sports', 'cause', 'support', 'awareness'],
        sheet: [8, 0],
        shortName: 'reminder_ribbon'
      }, {
        name: 'Building Construction',
        unified: '1F3D7-FE0F',
        keywords: ['wip', 'working', 'progress'],
        sheet: [10, 42],
        shortName: 'building_construction'
      }, {
        name: 'Horse Face',
        unified: '1F434',
        keywords: ['animal', 'brown', 'nature'],
        sheet: [12, 24],
        shortName: 'horse'
      }, {
        name: 'Thumbs Up Sign',
        unified: '1F44D',
        keywords: ['thumbsup', 'yes', 'awesome', 'good', 'agree', 'accept', 'cool', 'hand', 'like'],
        sheet: [13, 38],
        skinVariations: [{
          unified: '1F44D-1F3FB',
          sheet: [13, 39]
        }, {
          unified: '1F44D-1F3FC',
          sheet: [13, 40]
        }, {
          unified: '1F44D-1F3FD',
          sheet: [13, 41]
        }, {
          unified: '1F44D-1F3FE',
          sheet: [13, 42]
        }, {
          unified: '1F44D-1F3FF',
          sheet: [13, 43]
        }],
        shortNames: ['thumbsup'],
        shortName: '+1'
      }, {
        name: 'Bikini',
        unified: '1F459',
        keywords: ['swimming', 'female', 'woman', 'girl', 'fashion', 'beach', 'summer'],
        sheet: [14, 13],
        shortName: 'bikini'
      }, {
        name: 'No Smoking Symbol',
        unified: '1F6AD',
        keywords: ['cigarette', 'blue-square', 'smell', 'smoke'],
        sheet: [35, 4],
        shortName: 'no_smoking'
      }, {
        name: 'White Smiling Face',
        unified: '263A-FE0F',
        keywords: ['face', 'blush', 'massage', 'happiness'],
        sheet: [53, 17],
        shortName: 'relaxed'
      }, {
        name: 'Austria Flag',
        unified: '1F1E6-1F1F9',
        sheet: [0, 43],
        shortName: 'flag-at'
      }, {
        name: 'Admission Tickets',
        unified: '1F39F-FE0F',
        sheet: [8, 5],
        shortName: 'admission_tickets'
      }, {
        name: 'Horse',
        unified: '1F40E',
        keywords: ['animal', 'gamble', 'luck'],
        sheet: [11, 42],
        shortName: 'racehorse'
      }, {
        name: 'Thumbs Down Sign',
        unified: '1F44E',
        keywords: ['thumbsdown', 'no', 'dislike', 'hand'],
        sheet: [13, 44],
        skinVariations: [{
          unified: '1F44E-1F3FB',
          sheet: [13, 45]
        }, {
          unified: '1F44E-1F3FC',
          sheet: [13, 46]
        }, {
          unified: '1F44E-1F3FD',
          sheet: [13, 47]
        }, {
          unified: '1F44E-1F3FE',
          sheet: [13, 48]
        }, {
          unified: '1F44E-1F3FF',
          sheet: [13, 49]
        }],
        shortNames: ['thumbsdown'],
        shortName: '-1'
      }, {
        name: 'Womans Clothes',
        unified: '1F45A',
        keywords: ['fashion', 'shopping_bags', 'female'],
        sheet: [14, 14],
        shortName: 'womans_clothes'
      }, {
        name: 'Kissing Face with Closed Eyes',
        unified: '1F61A',
        keywords: ['face', 'love', 'like', 'affection', 'valentines', 'infatuation', 'kiss'],
        sheet: [31, 4],
        shortName: 'kissing_closed_eyes'
      }, {
        name: 'Do Not Litter Symbol',
        unified: '1F6AF',
        keywords: ['trash', 'bin', 'garbage', 'circle'],
        sheet: [35, 6],
        shortName: 'do_not_litter'
      }, {
        name: 'Potato',
        unified: '1F954',
        keywords: ['food', 'tuber', 'vegatable', 'starch'],
        sheet: [41, 35],
        shortName: 'potato'
      }, {
        name: 'Brick',
        unified: '1F9F1',
        sheet: [51, 36],
        shortName: 'bricks'
      }, {
        name: 'Australia Flag',
        unified: '1F1E6-1F1FA',
        sheet: [0, 44],
        shortName: 'flag-au'
      }, {
        name: 'Ticket',
        unified: '1F3AB',
        keywords: ['event', 'concert', 'pass'],
        sheet: [8, 17],
        shortName: 'ticket'
      }, {
        name: 'House Buildings',
        unified: '1F3D8-FE0F',
        sheet: [10, 43],
        shortName: 'house_buildings'
      }, {
        name: 'Purse',
        unified: '1F45B',
        keywords: ['fashion', 'accessories', 'money', 'sales', 'shopping'],
        sheet: [14, 15],
        shortName: 'purse'
      }, {
        name: 'Kissing Face with Smiling Eyes',
        unified: '1F619',
        keywords: ['face', 'affection', 'valentines', 'infatuation', 'kiss'],
        sheet: [31, 3],
        shortName: 'kissing_smiling_eyes'
      }, {
        name: 'Non-Potable Water Symbol',
        unified: '1F6B1',
        keywords: ['drink', 'faucet', 'tap', 'circle'],
        sheet: [35, 8],
        shortName: 'non-potable_water'
      }, {
        name: 'Carrot',
        unified: '1F955',
        keywords: ['vegetable', 'food', 'orange'],
        sheet: [41, 36],
        shortName: 'carrot'
      }, {
        name: 'Unicorn Face',
        unified: '1F984',
        sheet: [42, 22],
        shortName: 'unicorn_face'
      }, {
        name: 'Raised Fist',
        unified: '270A',
        keywords: ['fingers', 'hand', 'grasp'],
        sheet: [54, 43],
        skinVariations: [{
          unified: '270A-1F3FB',
          sheet: [54, 44]
        }, {
          unified: '270A-1F3FC',
          sheet: [54, 45]
        }, {
          unified: '270A-1F3FD',
          sheet: [54, 46]
        }, {
          unified: '270A-1F3FE',
          sheet: [54, 47]
        }, {
          unified: '270A-1F3FF',
          sheet: [54, 48]
        }],
        shortName: 'fist'
      }, {
        name: 'Aruba Flag',
        unified: '1F1E6-1F1FC',
        sheet: [0, 45],
        shortName: 'flag-aw'
      }, {
        name: 'Ear of Maize',
        unified: '1F33D',
        keywords: ['food', 'vegetable', 'plant'],
        sheet: [6, 21],
        shortName: 'corn'
      }, {
        name: 'Medal',
        unified: '1F396-FE0F',
        sheet: [7, 56],
        shortName: 'medal'
      }, {
        name: 'Derelict House Building',
        unified: '1F3DA-FE0F',
        sheet: [10, 45],
        shortName: 'derelict_house_building'
      }, {
        name: 'Fisted Hand Sign',
        unified: '1F44A',
        keywords: ['angry', 'violence', 'fist', 'hit', 'attack', 'hand'],
        sheet: [13, 20],
        skinVariations: [{
          unified: '1F44A-1F3FB',
          sheet: [13, 21]
        }, {
          unified: '1F44A-1F3FC',
          sheet: [13, 22]
        }, {
          unified: '1F44A-1F3FD',
          sheet: [13, 23]
        }, {
          unified: '1F44A-1F3FE',
          sheet: [13, 24]
        }, {
          unified: '1F44A-1F3FF',
          sheet: [13, 25]
        }],
        shortNames: ['punch'],
        shortName: 'facepunch'
      }, {
        name: 'Handbag',
        unified: '1F45C',
        keywords: ['fashion', 'accessory', 'accessories', 'shopping'],
        sheet: [14, 16],
        shortName: 'handbag'
      }, {
        name: 'Face Savouring Delicious Food',
        unified: '1F60B',
        keywords: ['happy', 'joy', 'tongue', 'smile', 'face', 'silly', 'yummy', 'nom', 'delicious', 'savouring'],
        sheet: [30, 46],
        shortName: 'yum'
      }, {
        name: 'No Pedestrians',
        unified: '1F6B7',
        keywords: ['rules', 'crossing', 'walking', 'circle'],
        sheet: [36, 8],
        shortName: 'no_pedestrians'
      }, {
        name: 'Zebra Face',
        unified: '1F993',
        sheet: [42, 37],
        shortName: 'zebra_face'
      }, {
        name: 'Åland Islands Flag',
        unified: '1F1E6-1F1FD',
        sheet: [0, 46],
        shortName: 'flag-ax'
      }, {
        name: 'Hot Pepper',
        unified: '1F336-FE0F',
        keywords: ['food', 'spicy', 'chilli', 'chili'],
        sheet: [6, 14],
        shortName: 'hot_pepper'
      }, {
        name: 'Trophy',
        unified: '1F3C6',
        keywords: ['win', 'award', 'contest', 'place', 'ftw', 'ceremony'],
        sheet: [9, 26],
        shortName: 'trophy'
      }, {
        name: 'House Building',
        unified: '1F3E0',
        keywords: ['building', 'home'],
        sheet: [10, 51],
        shortName: 'house'
      }, {
        name: 'Pouch',
        unified: '1F45D',
        keywords: ['bag', 'accessories', 'shopping'],
        sheet: [14, 17],
        shortName: 'pouch'
      }, {
        name: 'No Mobile Phones',
        unified: '1F4F5',
        keywords: ['iphone', 'mute', 'circle'],
        sheet: [27, 18],
        shortName: 'no_mobile_phones'
      }, {
        name: 'Face with Stuck-out Tongue',
        unified: '1F61B',
        text: ':p',
        emoticons: [':p', ':-p', ':P', ':-P', ':b', ':-b'],
        keywords: ['face', 'prank', 'childish', 'playful', 'mischievous', 'smile', 'tongue'],
        sheet: [31, 5],
        shortName: 'stuck_out_tongue'
      }, {
        name: 'Left-Facing Fist',
        unified: '1F91B',
        sheet: [37, 49],
        skinVariations: [{
          unified: '1F91B-1F3FB',
          sheet: [37, 50]
        }, {
          unified: '1F91B-1F3FC',
          sheet: [37, 51]
        }, {
          unified: '1F91B-1F3FD',
          sheet: [37, 52]
        }, {
          unified: '1F91B-1F3FE',
          sheet: [37, 53]
        }, {
          unified: '1F91B-1F3FF',
          sheet: [37, 54]
        }],
        shortName: 'left-facing_fist'
      }, {
        name: 'Deer',
        unified: '1F98C',
        keywords: ['animal', 'nature', 'horns', 'venison'],
        sheet: [42, 30],
        shortName: 'deer'
      }, {
        name: 'Azerbaijan Flag',
        unified: '1F1E6-1F1FF',
        sheet: [0, 47],
        shortName: 'flag-az'
      }, {
        name: 'Sports Medal',
        unified: '1F3C5',
        sheet: [9, 25],
        shortName: 'sports_medal'
      }, {
        name: 'House with Garden',
        unified: '1F3E1',
        keywords: ['home', 'plant', 'nature'],
        sheet: [10, 52],
        shortName: 'house_with_garden'
      }, {
        name: 'Cow Face',
        unified: '1F42E',
        keywords: ['beef', 'ox', 'animal', 'nature', 'moo', 'milk'],
        sheet: [12, 18],
        shortName: 'cow'
      }, {
        name: 'No One Under Eighteen Symbol',
        unified: '1F51E',
        keywords: ['18', 'drink', 'pub', 'night', 'minor', 'circle'],
        sheet: [28, 1],
        shortName: 'underage'
      }, {
        name: 'Face with Stuck-out Tongue and Winking Eye',
        unified: '1F61C',
        text: ';p',
        emoticons: [';p', ';-p', ';b', ';-b', ';P', ';-P'],
        keywords: ['face', 'prank', 'childish', 'playful', 'mischievous', 'smile', 'wink', 'tongue'],
        sheet: [31, 6],
        shortName: 'stuck_out_tongue_winking_eye'
      }, {
        name: 'Shopping Bags',
        unified: '1F6CD-FE0F',
        sheet: [36, 35],
        shortName: 'shopping_bags'
      }, {
        name: 'Right-Facing Fist',
        unified: '1F91C',
        sheet: [37, 55],
        skinVariations: [{
          unified: '1F91C-1F3FB',
          sheet: [37, 56]
        }, {
          unified: '1F91C-1F3FC',
          sheet: [38, 0]
        }, {
          unified: '1F91C-1F3FD',
          sheet: [38, 1]
        }, {
          unified: '1F91C-1F3FE',
          sheet: [38, 2]
        }, {
          unified: '1F91C-1F3FF',
          sheet: [38, 3]
        }],
        shortName: 'right-facing_fist'
      }, {
        name: 'Cucumber',
        unified: '1F952',
        keywords: ['fruit', 'food', 'pickle'],
        sheet: [41, 33],
        shortName: 'cucumber'
      }, {
        name: 'Bosnia & Herzegovina Flag',
        unified: '1F1E7-1F1E6',
        sheet: [0, 48],
        shortName: 'flag-ba'
      }, {
        name: 'School Satchel',
        unified: '1F392',
        keywords: ['student', 'education', 'bag', 'backpack'],
        sheet: [7, 54],
        shortName: 'school_satchel'
      }, {
        name: 'Office Building',
        unified: '1F3E2',
        keywords: ['building', 'bureau', 'work'],
        sheet: [10, 53],
        shortName: 'office'
      }, {
        name: 'Ox',
        unified: '1F402',
        keywords: ['animal', 'cow', 'beef'],
        sheet: [11, 30],
        shortName: 'ox'
      }, {
        name: 'Clapping Hands Sign',
        unified: '1F44F',
        keywords: ['hands', 'praise', 'applause', 'congrats', 'yay'],
        sheet: [13, 50],
        skinVariations: [{
          unified: '1F44F-1F3FB',
          sheet: [13, 51]
        }, {
          unified: '1F44F-1F3FC',
          sheet: [13, 52]
        }, {
          unified: '1F44F-1F3FD',
          sheet: [13, 53]
        }, {
          unified: '1F44F-1F3FE',
          sheet: [13, 54]
        }, {
          unified: '1F44F-1F3FF',
          sheet: [13, 55]
        }],
        shortName: 'clap'
      }, {
        name: 'Grinning Face with One Large and One Small Eye',
        unified: '1F92A',
        sheet: [38, 44],
        shortNames: ['grinning_face_with_one_large_and_one_small_eye'],
        shortName: 'zany_face'
      }, {
        name: 'First Place Medal',
        unified: '1F947',
        sheet: [41, 22],
        shortName: 'first_place_medal'
      }, {
        name: 'Leafy Green',
        unified: '1F96C',
        sheet: [42, 2],
        shortName: 'leafy_green'
      }, {
        name: 'Radioactive Sign',
        unified: '2622-FE0F',
        sheet: [53, 9],
        shortName: 'radioactive_sign'
      }, {
        name: 'Barbados Flag',
        unified: '1F1E7-1F1E7',
        sheet: [0, 49],
        shortName: 'flag-bb'
      }, {
        name: 'Japanese Post Office',
        unified: '1F3E3',
        keywords: ['building', 'envelope', 'communication'],
        sheet: [10, 54],
        shortName: 'post_office'
      }, {
        name: 'Water Buffalo',
        unified: '1F403',
        keywords: ['animal', 'nature', 'ox', 'cow'],
        sheet: [11, 31],
        shortName: 'water_buffalo'
      }, {
        name: 'Mans Shoe',
        unified: '1F45E',
        keywords: ['fashion', 'male'],
        sheet: [14, 18],
        shortNames: ['shoe'],
        shortName: 'mans_shoe'
      }, {
        name: 'Face with Stuck-out Tongue and Tightly-Closed Eyes',
        unified: '1F61D',
        keywords: ['face', 'prank', 'playful', 'mischievous', 'smile', 'tongue'],
        sheet: [31, 7],
        shortName: 'stuck_out_tongue_closed_eyes'
      }, {
        name: 'Person Raising Both Hands in Celebration',
        unified: '1F64C',
        keywords: ['gesture', 'hooray', 'yea', 'celebration', 'hands'],
        sheet: [33, 8],
        skinVariations: [{
          unified: '1F64C-1F3FB',
          sheet: [33, 9]
        }, {
          unified: '1F64C-1F3FC',
          sheet: [33, 10]
        }, {
          unified: '1F64C-1F3FD',
          sheet: [33, 11]
        }, {
          unified: '1F64C-1F3FE',
          sheet: [33, 12]
        }, {
          unified: '1F64C-1F3FF',
          sheet: [33, 13]
        }],
        shortName: 'raised_hands'
      }, {
        name: 'Second Place Medal',
        unified: '1F948',
        sheet: [41, 23],
        shortName: 'second_place_medal'
      }, {
        name: 'Broccoli',
        unified: '1F966',
        keywords: ['fruit', 'food', 'vegetable'],
        sheet: [41, 53],
        shortName: 'broccoli'
      }, {
        name: 'Biohazard Sign',
        unified: '2623-FE0F',
        sheet: [53, 10],
        shortName: 'biohazard_sign'
      }, {
        name: 'Bangladesh Flag',
        unified: '1F1E7-1F1E9',
        sheet: [0, 50],
        shortName: 'flag-bd'
      }, {
        name: 'European Post Office',
        unified: '1F3E4',
        keywords: ['building', 'email'],
        sheet: [10, 55],
        shortName: 'european_post_office'
      }, {
        name: 'Cow',
        unified: '1F404',
        keywords: ['beef', 'ox', 'animal', 'nature', 'moo', 'milk'],
        sheet: [11, 32],
        shortName: 'cow2'
      }, {
        name: 'Open Hands Sign',
        unified: '1F450',
        keywords: ['fingers', 'butterfly', 'hands', 'open'],
        sheet: [13, 56],
        skinVariations: [{
          unified: '1F450-1F3FB',
          sheet: [14, 0]
        }, {
          unified: '1F450-1F3FC',
          sheet: [14, 1]
        }, {
          unified: '1F450-1F3FD',
          sheet: [14, 2]
        }, {
          unified: '1F450-1F3FE',
          sheet: [14, 3]
        }, {
          unified: '1F450-1F3FF',
          sheet: [14, 4]
        }],
        shortName: 'open_hands'
      }, {
        name: 'Athletic Shoe',
        unified: '1F45F',
        keywords: ['shoes', 'sports', 'sneakers'],
        sheet: [14, 19],
        shortName: 'athletic_shoe'
      }, {
        name: 'Money-Mouth Face',
        unified: '1F911',
        keywords: ['face', 'rich', 'dollar', 'money'],
        sheet: [37, 24],
        shortName: 'money_mouth_face'
      }, {
        name: 'Third Place Medal',
        unified: '1F949',
        sheet: [41, 24],
        shortName: 'third_place_medal'
      }, {
        name: 'Garlic',
        unified: '1F9C4',
        sheet: [44, 12],
        shortName: 'garlic'
      }, {
        name: 'Upwards Black Arrow',
        unified: '2B06-FE0F',
        keywords: ['blue-square', 'continue', 'top', 'direction'],
        sheet: [55, 38],
        shortName: 'arrow_up'
      }, {
        name: 'Belgium Flag',
        unified: '1F1E7-1F1EA',
        sheet: [0, 51],
        shortName: 'flag-be'
      }, {
        name: 'Hospital',
        unified: '1F3E5',
        keywords: ['building', 'health', 'surgery', 'doctor'],
        sheet: [10, 56],
        shortName: 'hospital'
      }, {
        name: 'Pig Face',
        unified: '1F437',
        keywords: ['animal', 'oink', 'nature'],
        sheet: [12, 27],
        shortName: 'pig'
      }, {
        name: 'Hugging Face',
        unified: '1F917',
        sheet: [37, 30],
        shortName: 'hugging_face'
      }, {
        name: 'Palms Up Together',
        unified: '1F932',
        sheet: [39, 5],
        skinVariations: [{
          unified: '1F932-1F3FB',
          sheet: [39, 6]
        }, {
          unified: '1F932-1F3FC',
          sheet: [39, 7]
        }, {
          unified: '1F932-1F3FD',
          sheet: [39, 8]
        }, {
          unified: '1F932-1F3FE',
          sheet: [39, 9]
        }, {
          unified: '1F932-1F3FF',
          sheet: [39, 10]
        }],
        shortName: 'palms_up_together'
      }, {
        name: 'Hiking Boot',
        unified: '1F97E',
        keywords: ['backpacking', 'camping', 'hiking'],
        sheet: [42, 16],
        shortName: 'hiking_boot'
      }, {
        name: 'Onion',
        unified: '1F9C5',
        sheet: [44, 13],
        shortName: 'onion'
      }, {
        name: 'North East Arrow',
        unified: '2197-FE0F',
        keywords: ['blue-square', 'point', 'direction', 'diagonal', 'northeast'],
        sheet: [52, 17],
        shortName: 'arrow_upper_right'
      }, {
        name: 'Soccer Ball',
        unified: '26BD',
        keywords: ['sports', 'football'],
        sheet: [53, 56],
        shortName: 'soccer'
      }, {
        name: 'Burkina Faso Flag',
        unified: '1F1E7-1F1EB',
        sheet: [0, 52],
        shortName: 'flag-bf'
      }, {
        name: 'Mushroom',
        unified: '1F344',
        keywords: ['plant', 'vegetable'],
        sheet: [6, 28],
        shortName: 'mushroom'
      }, {
        name: 'Bank',
        unified: '1F3E6',
        keywords: ['building', 'money', 'sales', 'cash', 'business', 'enterprise'],
        sheet: [11, 0],
        shortName: 'bank'
      }, {
        name: 'Pig',
        unified: '1F416',
        keywords: ['animal', 'nature'],
        sheet: [11, 51],
        shortName: 'pig2'
      }, {
        name: 'Handshake',
        unified: '1F91D',
        keywords: ['agreement', 'shake'],
        sheet: [38, 4],
        shortName: 'handshake'
      }, {
        name: 'Smiling Face with Smiling Eyes and Hand Covering Mouth',
        unified: '1F92D',
        sheet: [38, 47],
        shortNames: ['smiling_face_with_smiling_eyes_and_hand_covering_mouth'],
        shortName: 'face_with_hand_over_mouth'
      }, {
        name: 'Flat Shoe',
        unified: '1F97F',
        sheet: [42, 17],
        shortName: 'womans_flat_shoe'
      }, {
        name: 'Baseball',
        unified: '26BE',
        keywords: ['sports', 'balls'],
        sheet: [54, 0],
        shortName: 'baseball'
      }, {
        name: 'Black Rightwards Arrow',
        unified: '27A1-FE0F',
        keywords: ['blue-square', 'next'],
        sheet: [55, 32],
        shortName: 'arrow_right'
      }, {
        name: 'Bulgaria Flag',
        unified: '1F1E7-1F1EC',
        sheet: [0, 53],
        shortName: 'flag-bg'
      }, {
        name: 'Hotel',
        unified: '1F3E8',
        keywords: ['building', 'accomodation', 'checkin'],
        sheet: [11, 2],
        shortName: 'hotel'
      }, {
        name: 'Boar',
        unified: '1F417',
        keywords: ['animal', 'nature'],
        sheet: [11, 52],
        shortName: 'boar'
      }, {
        name: 'High-Heeled Shoe',
        unified: '1F460',
        keywords: ['fashion', 'shoes', 'female', 'pumps', 'stiletto'],
        sheet: [14, 20],
        shortName: 'high_heel'
      }, {
        name: 'Person with Folded Hands',
        unified: '1F64F',
        keywords: ['please', 'hope', 'wish', 'namaste', 'highfive'],
        sheet: [33, 50],
        skinVariations: [{
          unified: '1F64F-1F3FB',
          sheet: [33, 51]
        }, {
          unified: '1F64F-1F3FC',
          sheet: [33, 52]
        }, {
          unified: '1F64F-1F3FD',
          sheet: [33, 53]
        }, {
          unified: '1F64F-1F3FE',
          sheet: [33, 54]
        }, {
          unified: '1F64F-1F3FF',
          sheet: [33, 55]
        }],
        shortName: 'pray'
      }, {
        name: 'Face with Finger Covering Closed Lips',
        unified: '1F92B',
        sheet: [38, 45],
        shortNames: ['face_with_finger_covering_closed_lips'],
        shortName: 'shushing_face'
      }, {
        name: 'Softball',
        unified: '1F94E',
        keywords: ['sports', 'balls'],
        sheet: [41, 29],
        shortName: 'softball'
      }, {
        name: 'Peanuts',
        unified: '1F95C',
        keywords: ['food', 'nut'],
        sheet: [41, 43],
        shortName: 'peanuts'
      }, {
        name: 'South East Arrow',
        unified: '2198-FE0F',
        keywords: ['blue-square', 'direction', 'diagonal', 'southeast'],
        sheet: [52, 18],
        shortName: 'arrow_lower_right'
      }, {
        name: 'Bahrain Flag',
        unified: '1F1E7-1F1ED',
        sheet: [0, 54],
        shortName: 'flag-bh'
      }, {
        name: 'Chestnut',
        unified: '1F330',
        keywords: ['food', 'squirrel'],
        sheet: [6, 8],
        shortName: 'chestnut'
      }, {
        name: 'Basketball and Hoop',
        unified: '1F3C0',
        keywords: ['sports', 'balls', 'NBA'],
        sheet: [8, 38],
        shortName: 'basketball'
      }, {
        name: 'Love Hotel',
        unified: '1F3E9',
        keywords: ['like', 'affection', 'dating'],
        sheet: [11, 3],
        shortName: 'love_hotel'
      }, {
        name: 'Pig Nose',
        unified: '1F43D',
        keywords: ['animal', 'oink'],
        sheet: [12, 33],
        shortName: 'pig_nose'
      }, {
        name: 'Womans Sandal',
        unified: '1F461',
        keywords: ['shoes', 'fashion', 'flip flops'],
        sheet: [14, 21],
        shortName: 'sandal'
      }, {
        name: 'Thinking Face',
        unified: '1F914',
        sheet: [37, 27],
        shortName: 'thinking_face'
      }, {
        name: 'Writing Hand',
        unified: '270D-FE0F',
        keywords: ['lower_left_ballpoint_pen', 'stationery', 'write', 'compose'],
        sheet: [55, 4],
        skinVariations: [{
          unified: '270D-1F3FB',
          sheet: [55, 5]
        }, {
          unified: '270D-1F3FC',
          sheet: [55, 6]
        }, {
          unified: '270D-1F3FD',
          sheet: [55, 7]
        }, {
          unified: '270D-1F3FE',
          sheet: [55, 8]
        }, {
          unified: '270D-1F3FF',
          sheet: [55, 9]
        }],
        shortName: 'writing_hand'
      }, {
        name: 'Downwards Black Arrow',
        unified: '2B07-FE0F',
        keywords: ['blue-square', 'direction', 'bottom'],
        sheet: [55, 39],
        shortName: 'arrow_down'
      }, {
        name: 'Burundi Flag',
        unified: '1F1E7-1F1EE',
        sheet: [0, 55],
        shortName: 'flag-bi'
      }, {
        name: 'Bread',
        unified: '1F35E',
        keywords: ['food', 'wheat', 'breakfast', 'toast'],
        sheet: [6, 54],
        shortName: 'bread'
      }, {
        name: 'Volleyball',
        unified: '1F3D0',
        keywords: ['sports', 'balls'],
        sheet: [10, 35],
        shortName: 'volleyball'
      }, {
        name: 'Convenience Store',
        unified: '1F3EA',
        keywords: ['building', 'shopping', 'groceries'],
        sheet: [11, 4],
        shortName: 'convenience_store'
      }, {
        name: 'Ram',
        unified: '1F40F',
        keywords: ['animal', 'sheep', 'nature'],
        sheet: [11, 43],
        shortName: 'ram'
      }, {
        name: 'Nail Polish',
        unified: '1F485',
        keywords: ['beauty', 'manicure', 'finger', 'fashion', 'nail'],
        sheet: [24, 33],
        skinVariations: [{
          unified: '1F485-1F3FB',
          sheet: [24, 34]
        }, {
          unified: '1F485-1F3FC',
          sheet: [24, 35]
        }, {
          unified: '1F485-1F3FD',
          sheet: [24, 36]
        }, {
          unified: '1F485-1F3FE',
          sheet: [24, 37]
        }, {
          unified: '1F485-1F3FF',
          sheet: [24, 38]
        }],
        shortName: 'nail_care'
      }, {
        name: 'Zipper-Mouth Face',
        unified: '1F910',
        keywords: ['face', 'sealed', 'zipper', 'secret'],
        sheet: [37, 23],
        shortName: 'zipper_mouth_face'
      }, {
        name: 'Ballet Shoes',
        unified: '1FA70',
        sheet: [51, 51],
        shortName: 'ballet_shoes'
      }, {
        name: 'South West Arrow',
        unified: '2199-FE0F',
        keywords: ['blue-square', 'direction', 'diagonal', 'southwest'],
        sheet: [52, 19],
        shortName: 'arrow_lower_left'
      }, {
        name: 'Benin Flag',
        unified: '1F1E7-1F1EF',
        sheet: [0, 56],
        shortName: 'flag-bj'
      }, {
        name: 'American Football',
        unified: '1F3C8',
        keywords: ['sports', 'balls', 'NFL'],
        sheet: [9, 33],
        shortName: 'football'
      }, {
        name: 'School',
        unified: '1F3EB',
        keywords: ['building', 'student', 'education', 'learn', 'teach'],
        sheet: [11, 5],
        shortName: 'school'
      }, {
        name: 'Sheep',
        unified: '1F411',
        keywords: ['animal', 'nature', 'wool', 'shipit'],
        sheet: [11, 45],
        shortName: 'sheep'
      }, {
        name: 'Womans Boots',
        unified: '1F462',
        keywords: ['shoes', 'fashion'],
        sheet: [14, 22],
        shortName: 'boot'
      }, {
        name: 'Face with One Eyebrow Raised',
        unified: '1F928',
        sheet: [38, 42],
        shortNames: ['face_with_one_eyebrow_raised'],
        shortName: 'face_with_raised_eyebrow'
      }, {
        name: 'Selfie',
        unified: '1F933',
        keywords: ['camera', 'phone'],
        sheet: [39, 11],
        skinVariations: [{
          unified: '1F933-1F3FB',
          sheet: [39, 12]
        }, {
          unified: '1F933-1F3FC',
          sheet: [39, 13]
        }, {
          unified: '1F933-1F3FD',
          sheet: [39, 14]
        }, {
          unified: '1F933-1F3FE',
          sheet: [39, 15]
        }, {
          unified: '1F933-1F3FF',
          sheet: [39, 16]
        }],
        shortName: 'selfie'
      }, {
        name: 'Croissant',
        unified: '1F950',
        keywords: ['food', 'bread', 'french'],
        sheet: [41, 31],
        shortName: 'croissant'
      }, {
        name: 'Leftwards Black Arrow',
        unified: '2B05-FE0F',
        keywords: ['blue-square', 'previous', 'back'],
        sheet: [55, 37],
        shortName: 'arrow_left'
      }, {
        name: 'St. Barthélemy Flag',
        unified: '1F1E7-1F1F1',
        sheet: [1, 0],
        shortName: 'flag-bl'
      }, {
        name: 'Rugby Football',
        unified: '1F3C9',
        keywords: ['sports', 'team'],
        sheet: [9, 34],
        shortName: 'rugby_football'
      }, {
        name: 'Department Store',
        unified: '1F3EC',
        keywords: ['building', 'shopping', 'mall'],
        sheet: [11, 6],
        shortName: 'department_store'
      }, {
        name: 'Goat',
        unified: '1F410',
        keywords: ['animal', 'nature'],
        sheet: [11, 44],
        shortName: 'goat'
      }, {
        name: 'Crown',
        unified: '1F451',
        keywords: ['king', 'kod', 'leader', 'royalty', 'lord'],
        sheet: [14, 5],
        shortName: 'crown'
      }, {
        name: 'Flexed Biceps',
        unified: '1F4AA',
        keywords: ['arm', 'flex', 'hand', 'summer', 'strong', 'biceps'],
        sheet: [25, 52],
        skinVariations: [{
          unified: '1F4AA-1F3FB',
          sheet: [25, 53]
        }, {
          unified: '1F4AA-1F3FC',
          sheet: [25, 54]
        }, {
          unified: '1F4AA-1F3FD',
          sheet: [25, 55]
        }, {
          unified: '1F4AA-1F3FE',
          sheet: [25, 56]
        }, {
          unified: '1F4AA-1F3FF',
          sheet: [26, 0]
        }],
        shortName: 'muscle'
      }, {
        name: 'Neutral Face',
        unified: '1F610',
        emoticons: [':|', ':-|'],
        keywords: ['indifference', 'meh', ':|', 'neutral'],
        sheet: [30, 51],
        shortName: 'neutral_face'
      }, {
        name: 'Baguette Bread',
        unified: '1F956',
        keywords: ['food', 'bread', 'french'],
        sheet: [41, 37],
        shortName: 'baguette_bread'
      }, {
        name: 'North West Arrow',
        unified: '2196-FE0F',
        keywords: ['blue-square', 'point', 'direction', 'diagonal', 'northwest'],
        sheet: [52, 16],
        shortName: 'arrow_upper_left'
      }, {
        name: 'Bermuda Flag',
        unified: '1F1E7-1F1F2',
        sheet: [1, 1],
        shortName: 'flag-bm'
      }, {
        name: 'Tennis Racquet and Ball',
        unified: '1F3BE',
        keywords: ['sports', 'balls', 'green'],
        sheet: [8, 36],
        shortName: 'tennis'
      }, {
        name: 'Factory',
        unified: '1F3ED',
        keywords: ['building', 'industry', 'pollution', 'smoke'],
        sheet: [11, 7],
        shortName: 'factory'
      }, {
        name: 'Dromedary Camel',
        unified: '1F42A',
        keywords: ['animal', 'hot', 'desert', 'hump'],
        sheet: [12, 14],
        shortName: 'dromedary_camel'
      }, {
        name: 'Womans Hat',
        unified: '1F452',
        keywords: ['fashion', 'accessories', 'female', 'lady', 'spring'],
        sheet: [14, 6],
        shortName: 'womans_hat'
      }, {
        name: 'Expressionless Face',
        unified: '1F611',
        keywords: ['face', 'indifferent', '-_-', 'meh', 'deadpan'],
        sheet: [30, 52],
        shortName: 'expressionless'
      }, {
        name: 'Pretzel',
        unified: '1F968',
        keywords: ['food', 'bread', 'twisted'],
        sheet: [41, 55],
        shortName: 'pretzel'
      }, {
        name: 'Mechanical Arm',
        unified: '1F9BE',
        sheet: [44, 6],
        shortName: 'mechanical_arm'
      }, {
        name: 'Up Down Arrow',
        unified: '2195-FE0F',
        keywords: ['blue-square', 'direction', 'way', 'vertical'],
        sheet: [52, 15],
        shortName: 'arrow_up_down'
      }, {
        name: 'Brunei Flag',
        unified: '1F1E7-1F1F3',
        sheet: [1, 2],
        shortName: 'flag-bn'
      }, {
        name: 'Top Hat',
        unified: '1F3A9',
        keywords: ['magic', 'gentleman', 'classy', 'circus'],
        sheet: [8, 15],
        shortName: 'tophat'
      }, {
        name: 'Japanese Castle',
        unified: '1F3EF',
        keywords: ['photo', 'building'],
        sheet: [11, 9],
        shortName: 'japanese_castle'
      }, {
        name: 'Bactrian Camel',
        unified: '1F42B',
        keywords: ['animal', 'nature', 'hot', 'desert', 'hump'],
        sheet: [12, 15],
        shortName: 'camel'
      }, {
        name: 'Face Without Mouth',
        unified: '1F636',
        keywords: ['face', 'hellokitty'],
        sheet: [31, 32],
        shortName: 'no_mouth'
      }, {
        name: 'Flying Disc',
        unified: '1F94F',
        keywords: ['sports', 'frisbee', 'ultimate'],
        sheet: [41, 30],
        shortName: 'flying_disc'
      }, {
        name: 'Bagel',
        unified: '1F96F',
        keywords: ['food', 'bread', 'bakery', 'schmear'],
        sheet: [42, 5],
        shortName: 'bagel'
      }, {
        name: 'Mechanical Leg',
        unified: '1F9BF',
        sheet: [44, 7],
        shortName: 'mechanical_leg'
      }, {
        name: 'Left Right Arrow',
        unified: '2194-FE0F',
        keywords: ['shape', 'direction', 'horizontal', 'sideways'],
        sheet: [52, 14],
        shortName: 'left_right_arrow'
      }, {
        name: 'Bolivia Flag',
        unified: '1F1E7-1F1F4',
        sheet: [1, 3],
        shortName: 'flag-bo'
      }, {
        name: 'Graduation Cap',
        unified: '1F393',
        keywords: ['school', 'college', 'degree', 'university', 'graduation', 'cap', 'hat', 'legal', 'learn', 'education'],
        sheet: [7, 55],
        shortName: 'mortar_board'
      }, {
        name: 'Bowling',
        unified: '1F3B3',
        keywords: ['sports', 'fun', 'play'],
        sheet: [8, 25],
        shortName: 'bowling'
      }, {
        name: 'European Castle',
        unified: '1F3F0',
        keywords: ['building', 'royalty', 'history'],
        sheet: [11, 10],
        shortName: 'european_castle'
      }, {
        name: 'Smirking Face',
        unified: '1F60F',
        keywords: ['face', 'smile', 'mean', 'prank', 'smug', 'sarcasm'],
        sheet: [30, 50],
        shortName: 'smirk'
      }, {
        name: 'Pancakes',
        unified: '1F95E',
        keywords: ['food', 'breakfast', 'flapjacks', 'hotcakes'],
        sheet: [41, 45],
        shortName: 'pancakes'
      }, {
        name: 'Llama',
        unified: '1F999',
        keywords: ['animal', 'nature', 'alpaca'],
        sheet: [42, 43],
        shortName: 'llama'
      }, {
        name: 'Leg',
        unified: '1F9B5',
        keywords: ['kick', 'limb'],
        sheet: [43, 5],
        skinVariations: [{
          unified: '1F9B5-1F3FB',
          sheet: [43, 6]
        }, {
          unified: '1F9B5-1F3FC',
          sheet: [43, 7]
        }, {
          unified: '1F9B5-1F3FD',
          sheet: [43, 8]
        }, {
          unified: '1F9B5-1F3FE',
          sheet: [43, 9]
        }, {
          unified: '1F9B5-1F3FF',
          sheet: [43, 10]
        }],
        shortName: 'leg'
      }, {
        name: 'Leftwards Arrow with Hook',
        unified: '21A9-FE0F',
        keywords: ['back', 'return', 'blue-square', 'undo', 'enter'],
        sheet: [52, 20],
        shortName: 'leftwards_arrow_with_hook'
      }, {
        name: 'Caribbean Netherlands Flag',
        unified: '1F1E7-1F1F6',
        sheet: [1, 4],
        shortName: 'flag-bq'
      }, {
        name: 'Cricket Bat and Ball',
        unified: '1F3CF',
        sheet: [10, 34],
        shortName: 'cricket_bat_and_ball'
      }, {
        name: 'Wedding',
        unified: '1F492',
        keywords: ['love', 'like', 'affection', 'couple', 'marriage', 'bride', 'groom'],
        sheet: [25, 28],
        shortName: 'wedding'
      }, {
        name: 'Unamused Face',
        unified: '1F612',
        text: ':(',
        keywords: ['indifference', 'bored', 'straight face', 'serious', 'sarcasm', 'unimpressed', 'skeptical', 'dubious', 'side_eye'],
        sheet: [30, 53],
        shortName: 'unamused'
      }, {
        name: 'Giraffe Face',
        unified: '1F992',
        sheet: [42, 36],
        shortName: 'giraffe_face'
      }, {
        name: 'Foot',
        unified: '1F9B6',
        keywords: ['kick', 'stomp'],
        sheet: [43, 11],
        skinVariations: [{
          unified: '1F9B6-1F3FB',
          sheet: [43, 12]
        }, {
          unified: '1F9B6-1F3FC',
          sheet: [43, 13]
        }, {
          unified: '1F9B6-1F3FD',
          sheet: [43, 14]
        }, {
          unified: '1F9B6-1F3FE',
          sheet: [43, 15]
        }, {
          unified: '1F9B6-1F3FF',
          sheet: [43, 16]
        }],
        shortName: 'foot'
      }, {
        name: 'Waffle',
        unified: '1F9C7',
        sheet: [44, 15],
        shortName: 'waffle'
      }, {
        name: 'Billed Cap',
        unified: '1F9E2',
        sheet: [51, 21],
        shortName: 'billed_cap'
      }, {
        name: 'Rightwards Arrow with Hook',
        unified: '21AA-FE0F',
        keywords: ['blue-square', 'return', 'rotate', 'direction'],
        sheet: [52, 21],
        shortName: 'arrow_right_hook'
      }, {
        name: 'Brazil Flag',
        unified: '1F1E7-1F1F7',
        sheet: [1, 5],
        shortName: 'flag-br'
      }, {
        name: 'Field Hockey Stick and Ball',
        unified: '1F3D1',
        sheet: [10, 36],
        shortName: 'field_hockey_stick_and_ball'
      }, {
        name: 'Elephant',
        unified: '1F418',
        keywords: ['animal', 'nature', 'nose', 'th', 'circus'],
        sheet: [11, 53],
        shortName: 'elephant'
      }, {
        name: 'Ear',
        unified: '1F442',
        keywords: ['face', 'hear', 'sound', 'listen'],
        sheet: [12, 39],
        skinVariations: [{
          unified: '1F442-1F3FB',
          sheet: [12, 40]
        }, {
          unified: '1F442-1F3FC',
          sheet: [12, 41]
        }, {
          unified: '1F442-1F3FD',
          sheet: [12, 42]
        }, {
          unified: '1F442-1F3FE',
          sheet: [12, 43]
        }, {
          unified: '1F442-1F3FF',
          sheet: [12, 44]
        }],
        shortName: 'ear'
      }, {
        name: 'Tokyo Tower',
        unified: '1F5FC',
        keywords: ['photo', 'japanese'],
        sheet: [30, 31],
        shortName: 'tokyo_tower'
      }, {
        name: 'Face with Rolling Eyes',
        unified: '1F644',
        sheet: [31, 46],
        shortName: 'face_with_rolling_eyes'
      }, {
        name: 'Cheese Wedge',
        unified: '1F9C0',
        sheet: [44, 8],
        shortName: 'cheese_wedge'
      }, {
        name: 'Helmet with White Cross',
        unified: '26D1-FE0F',
        sheet: [54, 6],
        shortName: 'helmet_with_white_cross'
      }, {
        name: 'Arrow Pointing Rightwards Then Curving Upwards',
        unified: '2934-FE0F',
        keywords: ['blue-square', 'direction', 'top'],
        sheet: [55, 35],
        shortName: 'arrow_heading_up'
      }, {
        name: 'Bahamas Flag',
        unified: '1F1E7-1F1F8',
        sheet: [1, 6],
        shortName: 'flag-bs'
      }, {
        name: 'Meat on Bone',
        unified: '1F356',
        keywords: ['good', 'food', 'drumstick'],
        sheet: [6, 46],
        shortName: 'meat_on_bone'
      }, {
        name: 'Ice Hockey Stick and Puck',
        unified: '1F3D2',
        sheet: [10, 37],
        shortName: 'ice_hockey_stick_and_puck'
      }, {
        name: 'Prayer Beads',
        unified: '1F4FF',
        keywords: ['dhikr', 'religious'],
        sheet: [27, 27],
        shortName: 'prayer_beads'
      }, {
        name: 'Statue of Liberty',
        unified: '1F5FD',
        keywords: ['american', 'newyork'],
        sheet: [30, 32],
        shortName: 'statue_of_liberty'
      }, {
        name: 'Grimacing Face',
        unified: '1F62C',
        keywords: ['face', 'grimace', 'teeth'],
        sheet: [31, 22],
        shortName: 'grimacing'
      }, {
        name: 'Rhinoceros',
        unified: '1F98F',
        keywords: ['animal', 'nature', 'horn'],
        sheet: [42, 33],
        shortName: 'rhinoceros'
      }, {
        name: 'Ear with Hearing Aid',
        unified: '1F9BB',
        sheet: [43, 55],
        skinVariations: [{
          unified: '1F9BB-1F3FB',
          sheet: [43, 56]
        }, {
          unified: '1F9BB-1F3FC',
          sheet: [44, 0]
        }, {
          unified: '1F9BB-1F3FD',
          sheet: [44, 1]
        }, {
          unified: '1F9BB-1F3FE',
          sheet: [44, 2]
        }, {
          unified: '1F9BB-1F3FF',
          sheet: [44, 3]
        }],
        shortName: 'ear_with_hearing_aid'
      }, {
        name: 'Arrow Pointing Rightwards Then Curving Downwards',
        unified: '2935-FE0F',
        keywords: ['blue-square', 'direction', 'bottom'],
        sheet: [55, 36],
        shortName: 'arrow_heading_down'
      }, {
        name: 'Bhutan Flag',
        unified: '1F1E7-1F1F9',
        sheet: [1, 7],
        shortName: 'flag-bt'
      }, {
        name: 'Poultry Leg',
        unified: '1F357',
        keywords: ['food', 'meat', 'drumstick', 'bird', 'chicken', 'turkey'],
        sheet: [6, 47],
        shortName: 'poultry_leg'
      }, {
        name: 'Nose',
        unified: '1F443',
        keywords: ['smell', 'sniff'],
        sheet: [12, 45],
        skinVariations: [{
          unified: '1F443-1F3FB',
          sheet: [12, 46]
        }, {
          unified: '1F443-1F3FC',
          sheet: [12, 47]
        }, {
          unified: '1F443-1F3FD',
          sheet: [12, 48]
        }, {
          unified: '1F443-1F3FE',
          sheet: [12, 49]
        }, {
          unified: '1F443-1F3FF',
          sheet: [12, 50]
        }],
        shortName: 'nose'
      }, {
        name: 'Lipstick',
        unified: '1F484',
        keywords: ['female', 'girl', 'fashion', 'woman'],
        sheet: [24, 32],
        shortName: 'lipstick'
      }, {
        name: 'Clockwise Downwards and Upwards Open Circle Arrows',
        unified: '1F503',
        keywords: ['sync', 'cycle', 'round', 'repeat'],
        sheet: [27, 31],
        shortName: 'arrows_clockwise'
      }, {
        name: 'Lying Face',
        unified: '1F925',
        keywords: ['face', 'lie', 'pinocchio'],
        sheet: [38, 22],
        shortName: 'lying_face'
      }, {
        name: 'Lacrosse Stick and Ball',
        unified: '1F94D',
        keywords: ['sports', 'ball', 'stick'],
        sheet: [41, 28],
        shortName: 'lacrosse'
      }, {
        name: 'Hippopotamus',
        unified: '1F99B',
        keywords: ['animal', 'nature'],
        sheet: [42, 45],
        shortName: 'hippopotamus'
      }, {
        name: 'Church',
        unified: '26EA',
        keywords: ['building', 'religion', 'christ'],
        sheet: [54, 10],
        shortName: 'church'
      }, {
        name: 'Bouvet Island Flag',
        unified: '1F1E7-1F1FB',
        sheet: [1, 8],
        shortName: 'flag-bv'
      }, {
        name: 'Table Tennis Paddle and Ball',
        unified: '1F3D3',
        sheet: [10, 38],
        shortName: 'table_tennis_paddle_and_ball'
      }, {
        name: 'Mouse Face',
        unified: '1F42D',
        keywords: ['animal', 'nature', 'cheese_wedge', 'rodent'],
        sheet: [12, 17],
        shortName: 'mouse'
      }, {
        name: 'Ring',
        unified: '1F48D',
        keywords: ['wedding', 'propose', 'marriage', 'valentines', 'diamond', 'fashion', 'jewelry', 'gem', 'engagement'],
        sheet: [25, 23],
        shortName: 'ring'
      }, {
        name: 'Anticlockwise Downwards and Upwards Open Circle Arrows',
        unified: '1F504',
        keywords: ['blue-square', 'sync', 'cycle'],
        sheet: [27, 32],
        shortName: 'arrows_counterclockwise'
      }, {
        name: 'Mosque',
        unified: '1F54C',
        keywords: ['islam', 'worship', 'minaret'],
        sheet: [28, 36],
        shortName: 'mosque'
      }, {
        name: 'Relieved Face',
        unified: '1F60C',
        keywords: ['face', 'relaxed', 'phew', 'massage', 'happiness'],
        sheet: [30, 47],
        shortName: 'relieved'
      }, {
        name: 'Cut of Meat',
        unified: '1F969',
        sheet: [41, 56],
        shortName: 'cut_of_meat'
      }, {
        name: 'Brain',
        unified: '1F9E0',
        keywords: ['smart', 'intelligent'],
        sheet: [51, 19],
        shortName: 'brain'
      }, {
        name: 'Botswana Flag',
        unified: '1F1E7-1F1FC',
        sheet: [1, 9],
        shortName: 'flag-bw'
      }, {
        name: 'Badminton Racquet and Shuttlecock',
        unified: '1F3F8',
        sheet: [11, 20],
        shortName: 'badminton_racquet_and_shuttlecock'
      }, {
        name: 'Mouse',
        unified: '1F401',
        keywords: ['animal', 'nature', 'rodent'],
        sheet: [11, 29],
        shortName: 'mouse2'
      }, {
        name: 'Gem Stone',
        unified: '1F48E',
        keywords: ['blue', 'ruby', 'diamond', 'jewelry'],
        sheet: [25, 24],
        shortName: 'gem'
      }, {
        name: 'Back with Leftwards Arrow Above',
        unified: '1F519',
        keywords: ['arrow', 'words', 'return'],
        sheet: [27, 53],
        shortName: 'back'
      }, {
        name: 'Pensive Face',
        unified: '1F614',
        keywords: ['face', 'sad', 'depressed', 'upset'],
        sheet: [30, 55],
        shortName: 'pensive'
      }, {
        name: 'Hindu Temple',
        unified: '1F6D5',
        sheet: [36, 41],
        shortName: 'hindu_temple'
      }, {
        name: 'Bacon',
        unified: '1F953',
        keywords: ['food', 'breakfast', 'pork', 'pig', 'meat'],
        sheet: [41, 34],
        shortName: 'bacon'
      }, {
        name: 'Tooth',
        unified: '1F9B7',
        keywords: ['teeth', 'dentist'],
        sheet: [43, 17],
        shortName: 'tooth'
      }, {
        name: 'Belarus Flag',
        unified: '1F1E7-1F1FE',
        sheet: [1, 10],
        shortName: 'flag-by'
      }, {
        name: 'Hamburger',
        unified: '1F354',
        keywords: ['meat', 'fast food', 'beef', 'cheeseburger', 'mcdonalds', 'burger king'],
        sheet: [6, 44],
        shortName: 'hamburger'
      }, {
        name: 'Rat',
        unified: '1F400',
        keywords: ['animal', 'mouse', 'rodent'],
        sheet: [11, 28],
        shortName: 'rat'
      }, {
        name: 'Speaker with Cancellation Stroke',
        unified: '1F507',
        keywords: ['sound', 'volume', 'silence', 'quiet'],
        sheet: [27, 35],
        shortName: 'mute'
      }, {
        name: 'End with Leftwards Arrow Above',
        unified: '1F51A',
        keywords: ['words', 'arrow'],
        sheet: [27, 54],
        shortName: 'end'
      }, {
        name: 'Synagogue',
        unified: '1F54D',
        keywords: ['judaism', 'worship', 'temple', 'jewish'],
        sheet: [28, 37],
        shortName: 'synagogue'
      }, {
        name: 'Sleepy Face',
        unified: '1F62A',
        keywords: ['face', 'tired', 'rest', 'nap'],
        sheet: [31, 20],
        shortName: 'sleepy'
      }, {
        name: 'Boxing Glove',
        unified: '1F94A',
        keywords: ['sports', 'fighting'],
        sheet: [41, 25],
        shortName: 'boxing_glove'
      }, {
        name: 'Bone',
        unified: '1F9B4',
        keywords: ['skeleton'],
        sheet: [43, 4],
        shortName: 'bone'
      }, {
        name: 'Belize Flag',
        unified: '1F1E7-1F1FF',
        sheet: [1, 11],
        shortName: 'flag-bz'
      }, {
        name: 'French Fries',
        unified: '1F35F',
        keywords: ['chips', 'snack', 'fast food'],
        sheet: [6, 55],
        shortName: 'fries'
      }, {
        name: 'Hamster Face',
        unified: '1F439',
        keywords: ['animal', 'nature'],
        sheet: [12, 29],
        shortName: 'hamster'
      }, {
        name: 'Eyes',
        unified: '1F440',
        keywords: ['look', 'watch', 'stalk', 'peek', 'see'],
        sheet: [12, 36],
        shortName: 'eyes'
      }, {
        name: 'Speaker',
        unified: '1F508',
        keywords: ['sound', 'volume', 'silence', 'broadcast'],
        sheet: [27, 36],
        shortName: 'speaker'
      }, {
        name: 'On with Exclamation Mark with Left Right Arrow Above',
        unified: '1F51B',
        keywords: ['arrow', 'words'],
        sheet: [27, 55],
        shortName: 'on'
      }, {
        name: 'Drooling Face',
        unified: '1F924',
        keywords: ['face'],
        sheet: [38, 21],
        shortName: 'drooling_face'
      }, {
        name: 'Martial Arts Uniform',
        unified: '1F94B',
        keywords: ['judo', 'karate', 'taekwondo'],
        sheet: [41, 26],
        shortName: 'martial_arts_uniform'
      }, {
        name: 'Shinto Shrine',
        unified: '26E9-FE0F',
        keywords: ['temple', 'japan', 'kyoto'],
        sheet: [54, 9],
        shortName: 'shinto_shrine'
      }, {
        name: 'Canada Flag',
        unified: '1F1E8-1F1E6',
        sheet: [1, 12],
        shortName: 'flag-ca'
      }, {
        name: 'Slice of Pizza',
        unified: '1F355',
        keywords: ['food', 'party'],
        sheet: [6, 45],
        shortName: 'pizza'
      }, {
        name: 'Rabbit Face',
        unified: '1F430',
        keywords: ['animal', 'nature', 'pet', 'spring', 'magic', 'bunny'],
        sheet: [12, 20],
        shortName: 'rabbit'
      }, {
        name: 'Eye',
        unified: '1F441-FE0F',
        keywords: ['face', 'look', 'see', 'watch', 'stare'],
        sheet: [12, 38],
        shortName: 'eye'
      }, {
        name: 'Speaker with One Sound Wave',
        unified: '1F509',
        keywords: ['volume', 'speaker', 'broadcast'],
        sheet: [27, 37],
        shortName: 'sound'
      }, {
        name: 'Soon with Rightwards Arrow Above',
        unified: '1F51C',
        keywords: ['arrow', 'words'],
        sheet: [27, 56],
        shortName: 'soon'
      }, {
        name: 'Kaaba',
        unified: '1F54B',
        keywords: ['mecca', 'mosque', 'islam'],
        sheet: [28, 35],
        shortName: 'kaaba'
      }, {
        name: 'Sleeping Face',
        unified: '1F634',
        keywords: ['face', 'tired', 'sleepy', 'night', 'zzz'],
        sheet: [31, 30],
        shortName: 'sleeping'
      }, {
        name: 'Goal Net',
        unified: '1F945',
        keywords: ['sports'],
        sheet: [41, 21],
        shortName: 'goal_net'
      }, {
        name: 'Cocos (keeling) Islands Flag',
        unified: '1F1E8-1F1E8',
        sheet: [1, 13],
        shortName: 'flag-cc'
      }, {
        name: 'Hot Dog',
        unified: '1F32D',
        keywords: ['food', 'frankfurter'],
        sheet: [6, 5],
        shortName: 'hotdog'
      }, {
        name: 'Rabbit',
        unified: '1F407',
        keywords: ['animal', 'nature', 'pet', 'magic', 'spring'],
        sheet: [11, 35],
        shortName: 'rabbit2'
      }, {
        name: 'Tongue',
        unified: '1F445',
        keywords: ['mouth', 'playful'],
        sheet: [12, 52],
        shortName: 'tongue'
      }, {
        name: 'Speaker with Three Sound Waves',
        unified: '1F50A',
        keywords: ['volume', 'noise', 'noisy', 'speaker', 'broadcast'],
        sheet: [27, 38],
        shortName: 'loud_sound'
      }, {
        name: 'Top with Upwards Arrow Above',
        unified: '1F51D',
        keywords: ['words', 'blue-square'],
        sheet: [28, 0],
        shortName: 'top'
      }, {
        name: 'Face with Medical Mask',
        unified: '1F637',
        keywords: ['face', 'sick', 'ill', 'disease'],
        sheet: [31, 33],
        shortName: 'mask'
      }, {
        name: 'Fountain',
        unified: '26F2',
        keywords: ['photo', 'summer', 'water', 'fresh'],
        sheet: [54, 13],
        shortName: 'fountain'
      }, {
        name: 'Flag in Hole',
        unified: '26F3',
        keywords: ['sports', 'business', 'flag', 'hole', 'summer'],
        sheet: [54, 14],
        shortName: 'golf'
      }, {
        name: 'Congo - Kinshasa Flag',
        unified: '1F1E8-1F1E9',
        sheet: [1, 14],
        shortName: 'flag-cd'
      }, {
        name: 'Chipmunk',
        unified: '1F43F-FE0F',
        keywords: ['animal', 'nature', 'rodent', 'squirrel'],
        sheet: [12, 35],
        shortName: 'chipmunk'
      }, {
        name: 'Mouth',
        unified: '1F444',
        keywords: ['mouth', 'kiss'],
        sheet: [12, 51],
        shortName: 'lips'
      }, {
        name: 'Public Address Loudspeaker',
        unified: '1F4E2',
        keywords: ['volume', 'sound'],
        sheet: [26, 56],
        shortName: 'loudspeaker'
      }, {
        name: 'Place of Worship',
        unified: '1F6D0',
        keywords: ['religion', 'church', 'temple', 'prayer'],
        sheet: [36, 38],
        shortName: 'place_of_worship'
      }, {
        name: 'Face with Thermometer',
        unified: '1F912',
        keywords: ['sick', 'temperature', 'thermometer', 'cold', 'fever'],
        sheet: [37, 25],
        shortName: 'face_with_thermometer'
      }, {
        name: 'Sandwich',
        unified: '1F96A',
        keywords: ['food', 'lunch', 'bread'],
        sheet: [42, 0],
        shortName: 'sandwich'
      }, {
        name: 'Ice Skate',
        unified: '26F8-FE0F',
        keywords: ['sports'],
        sheet: [54, 18],
        shortName: 'ice_skate'
      }, {
        name: 'Tent',
        unified: '26FA',
        keywords: ['photo', 'camping', 'outdoors'],
        sheet: [54, 37],
        shortName: 'tent'
      }, {
        name: 'Central African Republic Flag',
        unified: '1F1E8-1F1EB',
        sheet: [1, 15],
        shortName: 'flag-cf'
      }, {
        name: 'Foggy',
        unified: '1F301',
        keywords: ['photo', 'mountain'],
        sheet: [5, 20],
        shortName: 'foggy'
      }, {
        name: 'Taco',
        unified: '1F32E',
        keywords: ['food', 'mexican'],
        sheet: [6, 6],
        shortName: 'taco'
      }, {
        name: 'Fishing Pole and Fish',
        unified: '1F3A3',
        keywords: ['food', 'hobby', 'summer'],
        sheet: [8, 9],
        shortName: 'fishing_pole_and_fish'
      }, {
        name: 'Baby',
        unified: '1F476',
        keywords: ['child', 'boy', 'girl', 'toddler'],
        sheet: [23, 4],
        skinVariations: [{
          unified: '1F476-1F3FB',
          sheet: [23, 5]
        }, {
          unified: '1F476-1F3FC',
          sheet: [23, 6]
        }, {
          unified: '1F476-1F3FD',
          sheet: [23, 7]
        }, {
          unified: '1F476-1F3FE',
          sheet: [23, 8]
        }, {
          unified: '1F476-1F3FF',
          sheet: [23, 9]
        }],
        shortName: 'baby'
      }, {
        name: 'Cheering Megaphone',
        unified: '1F4E3',
        keywords: ['sound', 'speaker', 'volume'],
        sheet: [27, 0],
        shortName: 'mega'
      }, {
        name: 'Face with Head-Bandage',
        unified: '1F915',
        keywords: ['injured', 'clumsy', 'bandage', 'hurt'],
        sheet: [37, 28],
        shortName: 'face_with_head_bandage'
      }, {
        name: 'Hedgehog',
        unified: '1F994',
        keywords: ['animal', 'nature', 'spiny'],
        sheet: [42, 38],
        shortName: 'hedgehog'
      }, {
        name: 'Atom Symbol',
        unified: '269B-FE0F',
        keywords: ['science', 'physics', 'chemistry'],
        sheet: [53, 48],
        shortName: 'atom_symbol'
      }, {
        name: 'Congo - Brazzaville Flag',
        unified: '1F1E8-1F1EC',
        sheet: [1, 16],
        shortName: 'flag-cg'
      }, {
        name: 'Night with Stars',
        unified: '1F303',
        keywords: ['evening', 'city', 'downtown'],
        sheet: [5, 22],
        shortName: 'night_with_stars'
      }, {
        name: 'Burrito',
        unified: '1F32F',
        keywords: ['food', 'mexican'],
        sheet: [6, 7],
        shortName: 'burrito'
      }, {
        name: 'Postal Horn',
        unified: '1F4EF',
        keywords: ['instrument', 'music'],
        sheet: [27, 12],
        shortName: 'postal_horn'
      }, {
        name: 'Om Symbol',
        unified: '1F549-FE0F',
        sheet: [28, 33],
        shortName: 'om_symbol'
      }, {
        name: 'Nauseated Face',
        unified: '1F922',
        keywords: ['face', 'vomit', 'gross', 'green', 'sick', 'throw up', 'ill'],
        sheet: [38, 19],
        shortName: 'nauseated_face'
      }, {
        name: 'Diving Mask',
        unified: '1F93F',
        sheet: [41, 15],
        shortName: 'diving_mask'
      }, {
        name: 'Bat',
        unified: '1F987',
        keywords: ['animal', 'nature', 'blind', 'vampire'],
        sheet: [42, 25],
        shortName: 'bat'
      }, {
        name: 'Child',
        unified: '1F9D2',
        keywords: ['gender-neutral', 'young'],
        sheet: [48, 16],
        skinVariations: [{
          unified: '1F9D2-1F3FB',
          sheet: [48, 17]
        }, {
          unified: '1F9D2-1F3FC',
          sheet: [48, 18]
        }, {
          unified: '1F9D2-1F3FD',
          sheet: [48, 19]
        }, {
          unified: '1F9D2-1F3FE',
          sheet: [48, 20]
        }, {
          unified: '1F9D2-1F3FF',
          sheet: [48, 21]
        }],
        shortName: 'child'
      }, {
        name: 'Switzerland Flag',
        unified: '1F1E8-1F1ED',
        sheet: [1, 17],
        shortName: 'flag-ch'
      }, {
        name: 'Running Shirt with Sash',
        unified: '1F3BD',
        keywords: ['play', 'pageant'],
        sheet: [8, 35],
        shortName: 'running_shirt_with_sash'
      }, {
        name: 'Cityscape',
        unified: '1F3D9-FE0F',
        keywords: ['photo', 'night life', 'urban'],
        sheet: [10, 44],
        shortName: 'cityscape'
      }, {
        name: 'Bear Face',
        unified: '1F43B',
        keywords: ['animal', 'nature', 'wild'],
        sheet: [12, 31],
        shortName: 'bear'
      }, {
        name: 'Boy',
        unified: '1F466',
        keywords: ['man', 'male', 'guy', 'teenager'],
        sheet: [14, 26],
        skinVariations: [{
          unified: '1F466-1F3FB',
          sheet: [14, 27]
        }, {
          unified: '1F466-1F3FC',
          sheet: [14, 28]
        }, {
          unified: '1F466-1F3FD',
          sheet: [14, 29]
        }, {
          unified: '1F466-1F3FE',
          sheet: [14, 30]
        }, {
          unified: '1F466-1F3FF',
          sheet: [14, 31]
        }],
        shortName: 'boy'
      }, {
        name: 'Bell',
        unified: '1F514',
        keywords: ['sound', 'notification', 'christmas', 'xmas', 'chime'],
        sheet: [27, 48],
        shortName: 'bell'
      }, {
        name: 'Face with Open Mouth Vomiting',
        unified: '1F92E',
        sheet: [38, 48],
        shortNames: ['face_with_open_mouth_vomiting'],
        shortName: 'face_vomiting'
      }, {
        name: 'Stuffed Flatbread',
        unified: '1F959',
        keywords: ['food', 'flatbread', 'stuffed', 'gyro'],
        sheet: [41, 40],
        shortName: 'stuffed_flatbread'
      }, {
        name: 'Star of David',
        unified: '2721-FE0F',
        keywords: ['judaism'],
        sheet: [55, 15],
        shortName: 'star_of_david'
      }, {
        name: 'Côte D’ivoire Flag',
        unified: '1F1E8-1F1EE',
        sheet: [1, 18],
        shortName: 'flag-ci'
      }, {
        name: 'Sunrise over Mountains',
        unified: '1F304',
        keywords: ['view', 'vacation', 'photo'],
        sheet: [5, 23],
        shortName: 'sunrise_over_mountains'
      }, {
        name: 'Ski and Ski Boot',
        unified: '1F3BF',
        keywords: ['sports', 'winter', 'cold', 'snow'],
        sheet: [8, 37],
        shortName: 'ski'
      }, {
        name: 'Koala',
        unified: '1F428',
        keywords: ['animal', 'nature'],
        sheet: [12, 12],
        shortName: 'koala'
      }, {
        name: 'Girl',
        unified: '1F467',
        keywords: ['female', 'woman', 'teenager'],
        sheet: [14, 32],
        skinVariations: [{
          unified: '1F467-1F3FB',
          sheet: [14, 33]
        }, {
          unified: '1F467-1F3FC',
          sheet: [14, 34]
        }, {
          unified: '1F467-1F3FD',
          sheet: [14, 35]
        }, {
          unified: '1F467-1F3FE',
          sheet: [14, 36]
        }, {
          unified: '1F467-1F3FF',
          sheet: [14, 37]
        }],
        shortName: 'girl'
      }, {
        name: 'Bell with Cancellation Stroke',
        unified: '1F515',
        keywords: ['sound', 'volume', 'mute', 'quiet', 'silent'],
        sheet: [27, 49],
        shortName: 'no_bell'
      }, {
        name: 'Sneezing Face',
        unified: '1F927',
        keywords: ['face', 'gesundheit', 'sneeze', 'sick', 'allergy'],
        sheet: [38, 41],
        shortName: 'sneezing_face'
      }, {
        name: 'Falafel',
        unified: '1F9C6',
        sheet: [44, 14],
        shortName: 'falafel'
      }, {
        name: 'Wheel of Dharma',
        unified: '2638-FE0F',
        keywords: ['hinduism', 'buddhism', 'sikhism', 'jainism'],
        sheet: [53, 15],
        shortName: 'wheel_of_dharma'
      }, {
        name: 'Cook Islands Flag',
        unified: '1F1E8-1F1F0',
        sheet: [1, 19],
        shortName: 'flag-ck'
      }, {
        name: 'Sunrise',
        unified: '1F305',
        keywords: ['morning', 'view', 'vacation', 'photo'],
        sheet: [5, 24],
        shortName: 'sunrise'
      }, {
        name: 'Musical Score',
        unified: '1F3BC',
        keywords: ['treble', 'clef', 'compose'],
        sheet: [8, 34],
        shortName: 'musical_score'
      }, {
        name: 'Panda Face',
        unified: '1F43C',
        keywords: ['animal', 'nature', 'panda'],
        sheet: [12, 32],
        shortName: 'panda_face'
      }, {
        name: 'Sled',
        unified: '1F6F7',
        keywords: ['sleigh', 'luge', 'toboggan'],
        sheet: [36, 56],
        shortName: 'sled'
      }, {
        name: 'Egg',
        unified: '1F95A',
        keywords: ['food', 'chicken', 'breakfast'],
        sheet: [41, 41],
        shortName: 'egg'
      }, {
        name: 'Overheated Face',
        unified: '1F975',
        sheet: [42, 10],
        shortName: 'hot_face'
      }, {
        name: 'Adult',
        unified: '1F9D1',
        keywords: ['gender-neutral', 'person'],
        sheet: [48, 10],
        skinVariations: [{
          unified: '1F9D1-1F3FB',
          sheet: [48, 11]
        }, {
          unified: '1F9D1-1F3FC',
          sheet: [48, 12]
        }, {
          unified: '1F9D1-1F3FD',
          sheet: [48, 13]
        }, {
          unified: '1F9D1-1F3FE',
          sheet: [48, 14]
        }, {
          unified: '1F9D1-1F3FF',
          sheet: [48, 15]
        }],
        shortName: 'adult'
      }, {
        name: 'Yin Yang',
        unified: '262F-FE0F',
        keywords: ['balance'],
        sheet: [53, 14],
        shortName: 'yin_yang'
      }, {
        name: 'Chile Flag',
        unified: '1F1E8-1F1F1',
        sheet: [1, 20],
        shortName: 'flag-cl'
      }, {
        name: 'Cityscape at Dusk',
        unified: '1F306',
        keywords: ['photo', 'evening', 'sky', 'buildings'],
        sheet: [5, 25],
        shortName: 'city_sunset'
      }, {
        name: 'Cooking',
        unified: '1F373',
        keywords: ['food', 'breakfast', 'kitchen', 'egg'],
        sheet: [7, 18],
        shortNames: ['cooking'],
        shortName: 'fried_egg'
      }, {
        name: 'Musical Note',
        unified: '1F3B5',
        keywords: ['score', 'tone', 'sound'],
        sheet: [8, 27],
        shortName: 'musical_note'
      }, {
        name: 'Person with Blond Hair',
        unified: '1F471',
        sheet: [22, 19],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F471-1F3FB',
          sheet: [22, 20],
          hidden: ['facebook']
        }, {
          unified: '1F471-1F3FC',
          sheet: [22, 21],
          hidden: ['facebook']
        }, {
          unified: '1F471-1F3FD',
          sheet: [22, 22],
          hidden: ['facebook']
        }, {
          unified: '1F471-1F3FE',
          sheet: [22, 23],
          hidden: ['facebook']
        }, {
          unified: '1F471-1F3FF',
          sheet: [22, 24],
          hidden: ['facebook']
        }],
        shortName: 'person_with_blond_hair',
        obsoletedBy: '1F471-200D-2642-FE0F'
      }, {
        name: 'Curling Stone',
        unified: '1F94C',
        keywords: ['sports'],
        sheet: [41, 27],
        shortName: 'curling_stone'
      }, {
        name: 'Freezing Face',
        unified: '1F976',
        sheet: [42, 11],
        shortName: 'cold_face'
      }, {
        name: 'Sloth',
        unified: '1F9A5',
        sheet: [42, 53],
        shortName: 'sloth'
      }, {
        name: 'Latin Cross',
        unified: '271D-FE0F',
        keywords: ['christianity'],
        sheet: [55, 14],
        shortName: 'latin_cross'
      }, {
        name: 'Cameroon Flag',
        unified: '1F1E8-1F1F2',
        sheet: [1, 21],
        shortName: 'flag-cm'
      }, {
        name: 'Sunset over Buildings',
        unified: '1F307',
        keywords: ['photo', 'good morning', 'dawn'],
        sheet: [5, 26],
        shortName: 'city_sunrise'
      }, {
        name: 'Direct Hit',
        unified: '1F3AF',
        keywords: ['game', 'play', 'bar', 'target', 'bullseye'],
        sheet: [8, 21],
        shortName: 'dart'
      }, {
        name: 'Multiple Musical Notes',
        unified: '1F3B6',
        keywords: ['music', 'score'],
        sheet: [8, 28],
        shortName: 'notes'
      }, {
        name: 'Man',
        unified: '1F468',
        keywords: ['mustache', 'father', 'dad', 'guy', 'classy', 'sir', 'moustache'],
        sheet: [17, 22],
        skinVariations: [{
          unified: '1F468-1F3FB',
          sheet: [17, 23]
        }, {
          unified: '1F468-1F3FC',
          sheet: [17, 24]
        }, {
          unified: '1F468-1F3FD',
          sheet: [17, 25]
        }, {
          unified: '1F468-1F3FE',
          sheet: [17, 26]
        }, {
          unified: '1F468-1F3FF',
          sheet: [17, 27]
        }],
        shortName: 'man'
      }, {
        name: 'Shallow Pan of Food',
        unified: '1F958',
        keywords: ['food', 'cooking', 'casserole', 'paella'],
        sheet: [41, 39],
        shortName: 'shallow_pan_of_food'
      }, {
        name: 'Face with Uneven Eyes and Wavy Mouth',
        unified: '1F974',
        sheet: [42, 9],
        shortName: 'woozy_face'
      }, {
        name: 'Otter',
        unified: '1F9A6',
        sheet: [42, 54],
        shortName: 'otter'
      }, {
        name: 'Orthodox Cross',
        unified: '2626-FE0F',
        keywords: ['suppedaneum', 'religion'],
        sheet: [53, 11],
        shortName: 'orthodox_cross'
      }, {
        name: 'China Flag',
        unified: '1F1E8-1F1F3',
        keywords: ['china', 'chinese', 'prc', 'flag', 'country', 'nation', 'banner'],
        sheet: [1, 22],
        shortNames: ['flag-cn'],
        shortName: 'cn'
      }, {
        name: 'Bridge at Night',
        unified: '1F309',
        keywords: ['photo', 'sanfrancisco'],
        sheet: [5, 28],
        shortName: 'bridge_at_night'
      }, {
        name: 'Pot of Food',
        unified: '1F372',
        keywords: ['food', 'meat', 'soup'],
        sheet: [7, 17],
        shortName: 'stew'
      }, {
        name: 'Studio Microphone',
        unified: '1F399-FE0F',
        keywords: ['sing', 'recording', 'artist', 'talkshow'],
        sheet: [8, 1],
        shortName: 'studio_microphone'
      }, {
        name: 'Dizzy Face',
        unified: '1F635',
        keywords: ['spent', 'unconscious', 'xox', 'dizzy'],
        sheet: [31, 31],
        shortName: 'dizzy_face'
      }, {
        name: 'Skunk',
        unified: '1F9A8',
        sheet: [42, 56],
        shortName: 'skunk'
      }, {
        name: 'Bearded Person',
        unified: '1F9D4',
        keywords: ['person', 'bewhiskered'],
        sheet: [48, 28],
        skinVariations: [{
          unified: '1F9D4-1F3FB',
          sheet: [48, 29]
        }, {
          unified: '1F9D4-1F3FC',
          sheet: [48, 30]
        }, {
          unified: '1F9D4-1F3FD',
          sheet: [48, 31]
        }, {
          unified: '1F9D4-1F3FE',
          sheet: [48, 32]
        }, {
          unified: '1F9D4-1F3FF',
          sheet: [48, 33]
        }],
        shortName: 'bearded_person'
      }, {
        name: 'Yo-Yo',
        unified: '1FA80',
        sheet: [52, 1],
        shortName: 'yo-yo'
      }, {
        name: 'Star and Crescent',
        unified: '262A-FE0F',
        keywords: ['islam'],
        sheet: [53, 12],
        shortName: 'star_and_crescent'
      }, {
        name: 'Colombia Flag',
        unified: '1F1E8-1F1F4',
        sheet: [1, 23],
        shortName: 'flag-co'
      }, {
        name: 'Level Slider',
        unified: '1F39A-FE0F',
        keywords: ['scale'],
        sheet: [8, 2],
        shortName: 'level_slider'
      }, {
        name: 'Red Haired Man',
        unified: '1F468-200D-1F9B0',
        sheet: [16, 23],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F9B0',
          sheet: [16, 24]
        }, {
          unified: '1F468-1F3FC-200D-1F9B0',
          sheet: [16, 25]
        }, {
          unified: '1F468-1F3FD-200D-1F9B0',
          sheet: [16, 26]
        }, {
          unified: '1F468-1F3FE-200D-1F9B0',
          sheet: [16, 27]
        }, {
          unified: '1F468-1F3FF-200D-1F9B0',
          sheet: [16, 28]
        }],
        shortName: 'red_haired_man'
      }, {
        name: 'Shocked Face with Exploding Head',
        unified: '1F92F',
        keywords: ['face', 'shocked', 'mind', 'blown'],
        sheet: [38, 49],
        shortNames: ['shocked_face_with_exploding_head'],
        shortName: 'exploding_head'
      }, {
        name: 'Bowl with Spoon',
        unified: '1F963',
        keywords: ['food', 'breakfast', 'cereal', 'oatmeal', 'porridge'],
        sheet: [41, 50],
        shortName: 'bowl_with_spoon'
      }, {
        name: 'Kangaroo',
        unified: '1F998',
        keywords: ['animal', 'nature', 'australia', 'joey', 'hop', 'marsupial'],
        sheet: [42, 42],
        shortName: 'kangaroo'
      }, {
        name: 'Kite',
        unified: '1FA81',
        sheet: [52, 2],
        shortName: 'kite'
      }, {
        name: 'Peace Symbol',
        unified: '262E-FE0F',
        keywords: ['hippie'],
        sheet: [53, 13],
        shortName: 'peace_symbol'
      }, {
        name: 'Hot Springs',
        unified: '2668-FE0F',
        keywords: ['bath', 'warm', 'relax'],
        sheet: [53, 37],
        shortName: 'hotsprings'
      }, {
        name: 'Clipperton Island Flag',
        unified: '1F1E8-1F1F5',
        sheet: [1, 24],
        shortName: 'flag-cp'
      }, {
        name: 'Control Knobs',
        unified: '1F39B-FE0F',
        keywords: ['dial'],
        sheet: [8, 3],
        shortName: 'control_knobs'
      }, {
        name: 'Carousel Horse',
        unified: '1F3A0',
        keywords: ['photo', 'carnival'],
        sheet: [8, 6],
        shortName: 'carousel_horse'
      }, {
        name: 'Billiards',
        unified: '1F3B1',
        keywords: ['pool', 'hobby', 'game', 'luck', 'magic'],
        sheet: [8, 23],
        shortName: '8ball'
      }, {
        name: 'Curly Haired Man',
        unified: '1F468-200D-1F9B1',
        sheet: [16, 29],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F9B1',
          sheet: [16, 30]
        }, {
          unified: '1F468-1F3FC-200D-1F9B1',
          sheet: [16, 31]
        }, {
          unified: '1F468-1F3FD-200D-1F9B1',
          sheet: [16, 32]
        }, {
          unified: '1F468-1F3FE-200D-1F9B1',
          sheet: [16, 33]
        }, {
          unified: '1F468-1F3FF-200D-1F9B1',
          sheet: [16, 34]
        }],
        shortName: 'curly_haired_man'
      }, {
        name: 'Menorah with Nine Branches',
        unified: '1F54E',
        sheet: [28, 38],
        shortName: 'menorah_with_nine_branches'
      }, {
        name: 'Face with Cowboy Hat',
        unified: '1F920',
        sheet: [38, 17],
        shortName: 'face_with_cowboy_hat'
      }, {
        name: 'Green Salad',
        unified: '1F957',
        keywords: ['food', 'healthy', 'lettuce'],
        sheet: [41, 38],
        shortName: 'green_salad'
      }, {
        name: 'Badger',
        unified: '1F9A1',
        keywords: ['animal', 'nature', 'honey'],
        sheet: [42, 51],
        shortName: 'badger'
      }, {
        name: 'Costa Rica Flag',
        unified: '1F1E8-1F1F7',
        sheet: [1, 25],
        shortName: 'flag-cr'
      }, {
        name: 'Popcorn',
        unified: '1F37F',
        keywords: ['food', 'movie theater', 'films', 'snack'],
        sheet: [7, 30],
        shortName: 'popcorn'
      }, {
        name: 'Ferris Wheel',
        unified: '1F3A1',
        keywords: ['photo', 'carnival', 'londoneye'],
        sheet: [8, 7],
        shortName: 'ferris_wheel'
      }, {
        name: 'Microphone',
        unified: '1F3A4',
        keywords: ['sound', 'music', 'PA', 'sing', 'talkshow'],
        sheet: [8, 10],
        shortName: 'microphone'
      }, {
        name: 'Paw Prints',
        unified: '1F43E',
        sheet: [12, 34],
        shortNames: ['paw_prints'],
        shortName: 'feet'
      }, {
        name: 'White Haired Man',
        unified: '1F468-200D-1F9B3',
        sheet: [16, 41],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F9B3',
          sheet: [16, 42]
        }, {
          unified: '1F468-1F3FC-200D-1F9B3',
          sheet: [16, 43]
        }, {
          unified: '1F468-1F3FD-200D-1F9B3',
          sheet: [16, 44]
        }, {
          unified: '1F468-1F3FE-200D-1F9B3',
          sheet: [16, 45]
        }, {
          unified: '1F468-1F3FF-200D-1F9B3',
          sheet: [16, 46]
        }],
        shortName: 'white_haired_man'
      }, {
        name: 'Crystal Ball',
        unified: '1F52E',
        keywords: ['disco', 'party', 'magic', 'circus', 'fortune_teller'],
        sheet: [28, 17],
        shortName: 'crystal_ball'
      }, {
        name: 'Six Pointed Star with Middle Dot',
        unified: '1F52F',
        keywords: ['purple-square', 'religion', 'jewish', 'hexagram'],
        sheet: [28, 18],
        shortName: 'six_pointed_star'
      }, {
        name: 'Face with Party Horn and Party Hat',
        unified: '1F973',
        sheet: [42, 8],
        shortName: 'partying_face'
      }, {
        name: 'Cuba Flag',
        unified: '1F1E8-1F1FA',
        sheet: [1, 26],
        shortName: 'flag-cu'
      }, {
        name: 'Roller Coaster',
        unified: '1F3A2',
        keywords: ['carnival', 'playground', 'photo', 'fun'],
        sheet: [8, 8],
        shortName: 'roller_coaster'
      }, {
        name: 'Headphone',
        unified: '1F3A7',
        keywords: ['music', 'score', 'gadgets'],
        sheet: [8, 13],
        shortName: 'headphones'
      }, {
        name: 'Bald Man',
        unified: '1F468-200D-1F9B2',
        sheet: [16, 35],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F9B2',
          sheet: [16, 36]
        }, {
          unified: '1F468-1F3FC-200D-1F9B2',
          sheet: [16, 37]
        }, {
          unified: '1F468-1F3FD-200D-1F9B2',
          sheet: [16, 38]
        }, {
          unified: '1F468-1F3FE-200D-1F9B2',
          sheet: [16, 39]
        }, {
          unified: '1F468-1F3FF-200D-1F9B2',
          sheet: [16, 40]
        }],
        shortName: 'bald_man'
      }, {
        name: 'Smiling Face with Sunglasses',
        unified: '1F60E',
        emoticons: ['8)'],
        keywords: ['face', 'cool', 'smile', 'summer', 'beach', 'sunglass'],
        sheet: [30, 49],
        shortName: 'sunglasses'
      }, {
        name: 'Turkey',
        unified: '1F983',
        keywords: ['animal', 'bird'],
        sheet: [42, 21],
        shortName: 'turkey'
      }, {
        name: 'Butter',
        unified: '1F9C8',
        sheet: [44, 16],
        shortName: 'butter'
      }, {
        name: 'Nazar Amulet',
        unified: '1F9FF',
        keywords: ['bead', 'charm'],
        sheet: [51, 50],
        shortName: 'nazar_amulet'
      }, {
        name: 'Aries',
        unified: '2648',
        keywords: ['sign', 'purple-square', 'zodiac', 'astrology'],
        sheet: [53, 20],
        shortName: 'aries'
      }, {
        name: 'Cape Verde Flag',
        unified: '1F1E8-1F1FB',
        sheet: [1, 27],
        shortName: 'flag-cv'
      }, {
        name: 'Video Game',
        unified: '1F3AE',
        keywords: ['play', 'console', 'PS4', 'controller'],
        sheet: [8, 20],
        shortName: 'video_game'
      }, {
        name: 'Chicken',
        unified: '1F414',
        keywords: ['animal', 'cluck', 'nature', 'bird'],
        sheet: [11, 48],
        shortName: 'chicken'
      }, {
        name: 'Woman',
        unified: '1F469',
        keywords: ['female', 'girls', 'lady'],
        sheet: [20, 9],
        skinVariations: [{
          unified: '1F469-1F3FB',
          sheet: [20, 10]
        }, {
          unified: '1F469-1F3FC',
          sheet: [20, 11]
        }, {
          unified: '1F469-1F3FD',
          sheet: [20, 12]
        }, {
          unified: '1F469-1F3FE',
          sheet: [20, 13]
        }, {
          unified: '1F469-1F3FF',
          sheet: [20, 14]
        }],
        shortName: 'woman'
      }, {
        name: 'Barber Pole',
        unified: '1F488',
        keywords: ['hair', 'salon', 'style'],
        sheet: [25, 18],
        shortName: 'barber'
      }, {
        name: 'Radio',
        unified: '1F4FB',
        keywords: ['communication', 'music', 'podcast', 'program'],
        sheet: [27, 24],
        shortName: 'radio'
      }, {
        name: 'Nerd Face',
        unified: '1F913',
        keywords: ['face', 'nerdy', 'geek', 'dork'],
        sheet: [37, 26],
        shortName: 'nerd_face'
      }, {
        name: 'Salt Shaker',
        unified: '1F9C2',
        keywords: ['condiment', 'shaker'],
        sheet: [44, 10],
        shortName: 'salt'
      }, {
        name: 'Taurus',
        unified: '2649',
        keywords: ['purple-square', 'sign', 'zodiac', 'astrology'],
        sheet: [53, 21],
        shortName: 'taurus'
      }, {
        name: 'Curaçao Flag',
        unified: '1F1E8-1F1FC',
        sheet: [1, 28],
        shortName: 'flag-cw'
      }, {
        name: 'Circus Tent',
        unified: '1F3AA',
        keywords: ['festival', 'carnival', 'party'],
        sheet: [8, 16],
        shortName: 'circus_tent'
      }, {
        name: 'Saxophone',
        unified: '1F3B7',
        keywords: ['music', 'instrument', 'jazz', 'blues'],
        sheet: [8, 29],
        shortName: 'saxophone'
      }, {
        name: 'Rooster',
        unified: '1F413',
        keywords: ['animal', 'nature', 'chicken'],
        sheet: [11, 47],
        shortName: 'rooster'
      }, {
        name: 'Red Haired Woman',
        unified: '1F469-200D-1F9B0',
        sheet: [19, 8],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F9B0',
          sheet: [19, 9]
        }, {
          unified: '1F469-1F3FC-200D-1F9B0',
          sheet: [19, 10]
        }, {
          unified: '1F469-1F3FD-200D-1F9B0',
          sheet: [19, 11]
        }, {
          unified: '1F469-1F3FE-200D-1F9B0',
          sheet: [19, 12]
        }, {
          unified: '1F469-1F3FF-200D-1F9B0',
          sheet: [19, 13]
        }],
        shortName: 'red_haired_woman'
      }, {
        name: 'Joystick',
        unified: '1F579-FE0F',
        keywords: ['game', 'play'],
        sheet: [29, 36],
        shortName: 'joystick'
      }, {
        name: 'Canned Food',
        unified: '1F96B',
        keywords: ['food', 'soup'],
        sheet: [42, 1],
        shortName: 'canned_food'
      }, {
        name: 'Face with Monocle',
        unified: '1F9D0',
        sheet: [45, 16],
        shortName: 'face_with_monocle'
      }, {
        name: 'Gemini',
        unified: '264A',
        keywords: ['sign', 'zodiac', 'purple-square', 'astrology'],
        sheet: [53, 22],
        shortName: 'gemini'
      }, {
        name: 'Christmas Island Flag',
        unified: '1F1E8-1F1FD',
        sheet: [1, 29],
        shortName: 'flag-cx'
      }, {
        name: 'Bento Box',
        unified: '1F371',
        keywords: ['food', 'japanese', 'box'],
        sheet: [7, 16],
        shortName: 'bento'
      }, {
        name: 'Slot Machine',
        unified: '1F3B0',
        keywords: ['bet', 'gamble', 'vegas', 'fruit machine', 'luck', 'casino'],
        sheet: [8, 22],
        shortName: 'slot_machine'
      }, {
        name: 'Guitar',
        unified: '1F3B8',
        keywords: ['music', 'instrument'],
        sheet: [8, 30],
        shortName: 'guitar'
      }, {
        name: 'Hatching Chick',
        unified: '1F423',
        keywords: ['animal', 'chicken', 'egg', 'born', 'baby', 'bird'],
        sheet: [12, 7],
        shortName: 'hatching_chick'
      }, {
        name: 'Confused Face',
        unified: '1F615',
        emoticons: [':\\', ':-\\', ':/', ':-/'],
        keywords: ['face', 'indifference', 'huh', 'weird', 'hmmm', ':/'],
        sheet: [30, 56],
        shortName: 'confused'
      }, {
        name: 'Steam Locomotive',
        unified: '1F682',
        keywords: ['transportation', 'vehicle', 'train'],
        sheet: [34, 1],
        shortName: 'steam_locomotive'
      }, {
        name: 'Red Haired Person',
        unified: '1F9D1-200D-1F9B0',
        sheet: [47, 13],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F9B0',
          sheet: [47, 14],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F9B0',
          sheet: [47, 15],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F9B0',
          sheet: [47, 16],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F9B0',
          sheet: [47, 17],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F9B0',
          sheet: [47, 18],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'red_haired_person'
      }, {
        name: 'Cancer',
        unified: '264B',
        keywords: ['sign', 'zodiac', 'purple-square', 'astrology'],
        sheet: [53, 23],
        shortName: 'cancer'
      }, {
        name: 'Cyprus Flag',
        unified: '1F1E8-1F1FE',
        sheet: [1, 30],
        shortName: 'flag-cy'
      }, {
        name: 'Rice Cracker',
        unified: '1F358',
        keywords: ['food', 'japanese'],
        sheet: [6, 48],
        shortName: 'rice_cracker'
      }, {
        name: 'Game Die',
        unified: '1F3B2',
        keywords: ['dice', 'random', 'tabletop', 'play', 'luck'],
        sheet: [8, 24],
        shortName: 'game_die'
      }, {
        name: 'Musical Keyboard',
        unified: '1F3B9',
        keywords: ['piano', 'instrument', 'compose'],
        sheet: [8, 31],
        shortName: 'musical_keyboard'
      }, {
        name: 'Baby Chick',
        unified: '1F424',
        keywords: ['animal', 'chicken', 'bird'],
        sheet: [12, 8],
        shortName: 'baby_chick'
      }, {
        name: 'Curly Haired Woman',
        unified: '1F469-200D-1F9B1',
        sheet: [19, 14],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F9B1',
          sheet: [19, 15]
        }, {
          unified: '1F469-1F3FC-200D-1F9B1',
          sheet: [19, 16]
        }, {
          unified: '1F469-1F3FD-200D-1F9B1',
          sheet: [19, 17]
        }, {
          unified: '1F469-1F3FE-200D-1F9B1',
          sheet: [19, 18]
        }, {
          unified: '1F469-1F3FF-200D-1F9B1',
          sheet: [19, 19]
        }],
        shortName: 'curly_haired_woman'
      }, {
        name: 'Worried Face',
        unified: '1F61F',
        keywords: ['face', 'concern', 'nervous', ':('],
        sheet: [31, 9],
        shortName: 'worried'
      }, {
        name: 'Railway Car',
        unified: '1F683',
        keywords: ['transportation', 'vehicle'],
        sheet: [34, 2],
        shortName: 'railway_car'
      }, {
        name: 'Leo',
        unified: '264C',
        keywords: ['sign', 'purple-square', 'zodiac', 'astrology'],
        sheet: [53, 24],
        shortName: 'leo'
      }, {
        name: 'Czechia Flag',
        unified: '1F1E8-1F1FF',
        sheet: [1, 31],
        shortName: 'flag-cz'
      }, {
        name: 'Rice Ball',
        unified: '1F359',
        keywords: ['food', 'japanese'],
        sheet: [6, 49],
        shortName: 'rice_ball'
      }, {
        name: 'Trumpet',
        unified: '1F3BA',
        keywords: ['music', 'brass'],
        sheet: [8, 32],
        shortName: 'trumpet'
      }, {
        name: 'Front-Facing Baby Chick',
        unified: '1F425',
        keywords: ['animal', 'chicken', 'baby', 'bird'],
        sheet: [12, 9],
        shortName: 'hatched_chick'
      }, {
        name: 'Slightly Frowning Face',
        unified: '1F641',
        keywords: ['face', 'frowning', 'disappointed', 'sad', 'upset'],
        sheet: [31, 43],
        shortName: 'slightly_frowning_face'
      }, {
        name: 'High-Speed Train',
        unified: '1F684',
        keywords: ['transportation', 'vehicle'],
        sheet: [34, 3],
        shortName: 'bullettrain_side'
      }, {
        name: 'Curly Haired Person',
        unified: '1F9D1-200D-1F9B1',
        sheet: [47, 19],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F9B1',
          sheet: [47, 20],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F9B1',
          sheet: [47, 21],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F9B1',
          sheet: [47, 22],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F9B1',
          sheet: [47, 23],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F9B1',
          sheet: [47, 24],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'curly_haired_person'
      }, {
        name: 'Jigsaw Puzzle Piece',
        unified: '1F9E9',
        keywords: ['interlocking', 'puzzle', 'piece'],
        sheet: [51, 28],
        shortName: 'jigsaw'
      }, {
        name: 'Virgo',
        unified: '264D',
        keywords: ['sign', 'zodiac', 'purple-square', 'astrology'],
        sheet: [53, 25],
        shortName: 'virgo'
      }, {
        name: 'Germany Flag',
        unified: '1F1E9-1F1EA',
        keywords: ['german', 'nation', 'flag', 'country', 'banner'],
        sheet: [1, 32],
        shortNames: ['flag-de'],
        shortName: 'de'
      }, {
        name: 'Cooked Rice',
        unified: '1F35A',
        keywords: ['food', 'china', 'asian'],
        sheet: [6, 50],
        shortName: 'rice'
      }, {
        name: 'Violin',
        unified: '1F3BB',
        keywords: ['music', 'instrument', 'orchestra', 'symphony'],
        sheet: [8, 33],
        shortName: 'violin'
      }, {
        name: 'Bird',
        unified: '1F426',
        keywords: ['animal', 'nature', 'fly', 'tweet', 'spring'],
        sheet: [12, 10],
        shortName: 'bird'
      }, {
        name: 'White Haired Woman',
        unified: '1F469-200D-1F9B3',
        sheet: [19, 26],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F9B3',
          sheet: [19, 27]
        }, {
          unified: '1F469-1F3FC-200D-1F9B3',
          sheet: [19, 28]
        }, {
          unified: '1F469-1F3FD-200D-1F9B3',
          sheet: [19, 29]
        }, {
          unified: '1F469-1F3FE-200D-1F9B3',
          sheet: [19, 30]
        }, {
          unified: '1F469-1F3FF-200D-1F9B3',
          sheet: [19, 31]
        }],
        shortName: 'white_haired_woman'
      }, {
        name: 'High-Speed Train with Bullet Nose',
        unified: '1F685',
        keywords: ['transportation', 'vehicle', 'speed', 'fast', 'public', 'travel'],
        sheet: [34, 4],
        shortName: 'bullettrain_front'
      }, {
        name: 'Teddy Bear',
        unified: '1F9F8',
        keywords: ['plush', 'stuffed'],
        sheet: [51, 43],
        shortName: 'teddy_bear'
      }, {
        name: 'White Frowning Face',
        unified: '2639-FE0F',
        sheet: [53, 16],
        shortName: 'white_frowning_face'
      }, {
        name: 'Libra',
        unified: '264E',
        keywords: ['sign', 'purple-square', 'zodiac', 'astrology'],
        sheet: [53, 26],
        shortName: 'libra'
      }, {
        name: 'Diego Garcia Flag',
        unified: '1F1E9-1F1EC',
        sheet: [1, 33],
        shortName: 'flag-dg'
      }, {
        name: 'Curry and Rice',
        unified: '1F35B',
        keywords: ['food', 'spicy', 'hot', 'indian'],
        sheet: [6, 51],
        shortName: 'curry'
      }, {
        name: 'Penguin',
        unified: '1F427',
        keywords: ['animal', 'nature'],
        sheet: [12, 11],
        shortName: 'penguin'
      }, {
        name: 'Face with Open Mouth',
        unified: '1F62E',
        emoticons: [':o', ':-o', ':O', ':-O'],
        keywords: ['face', 'surprise', 'impressed', 'wow', 'whoa', ':O'],
        sheet: [31, 24],
        shortName: 'open_mouth'
      }, {
        name: 'Train',
        unified: '1F686',
        keywords: ['transportation', 'vehicle'],
        sheet: [34, 5],
        shortName: 'train2'
      }, {
        name: 'White Haired Person',
        unified: '1F9D1-200D-1F9B3',
        sheet: [47, 31],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F9B3',
          sheet: [47, 32],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F9B3',
          sheet: [47, 33],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F9B3',
          sheet: [47, 34],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F9B3',
          sheet: [47, 35],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F9B3',
          sheet: [47, 36],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'white_haired_person'
      }, {
        name: 'Banjo',
        unified: '1FA95',
        sheet: [52, 9],
        shortName: 'banjo'
      }, {
        name: 'Scorpius',
        unified: '264F',
        keywords: ['sign', 'zodiac', 'purple-square', 'astrology', 'scorpio'],
        sheet: [53, 27],
        shortName: 'scorpius'
      }, {
        name: 'Black Spade Suit',
        unified: '2660-FE0F',
        keywords: ['poker', 'cards', 'suits', 'magic'],
        sheet: [53, 33],
        shortName: 'spades'
      }, {
        name: 'Djibouti Flag',
        unified: '1F1E9-1F1EF',
        sheet: [1, 34],
        shortName: 'flag-dj'
      }, {
        name: 'Steaming Bowl',
        unified: '1F35C',
        keywords: ['food', 'japanese', 'noodle', 'chopsticks'],
        sheet: [6, 52],
        shortName: 'ramen'
      }, {
        name: 'Bald Woman',
        unified: '1F469-200D-1F9B2',
        sheet: [19, 20],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F9B2',
          sheet: [19, 21]
        }, {
          unified: '1F469-1F3FC-200D-1F9B2',
          sheet: [19, 22]
        }, {
          unified: '1F469-1F3FD-200D-1F9B2',
          sheet: [19, 23]
        }, {
          unified: '1F469-1F3FE-200D-1F9B2',
          sheet: [19, 24]
        }, {
          unified: '1F469-1F3FF-200D-1F9B2',
          sheet: [19, 25]
        }],
        shortName: 'bald_woman'
      }, {
        name: 'Dove of Peace',
        unified: '1F54A-FE0F',
        sheet: [28, 34],
        shortName: 'dove_of_peace'
      }, {
        name: 'Hushed Face',
        unified: '1F62F',
        keywords: ['face', 'woo', 'shh'],
        sheet: [31, 25],
        shortName: 'hushed'
      }, {
        name: 'Metro',
        unified: '1F687',
        keywords: ['transportation', 'blue-square', 'mrt', 'underground', 'tube'],
        sheet: [34, 6],
        shortName: 'metro'
      }, {
        name: 'Drum with Drumsticks',
        unified: '1F941',
        sheet: [41, 17],
        shortName: 'drum_with_drumsticks'
      }, {
        name: 'Sagittarius',
        unified: '2650',
        keywords: ['sign', 'zodiac', 'purple-square', 'astrology'],
        sheet: [53, 28],
        shortName: 'sagittarius'
      }, {
        name: 'Black Heart Suit',
        unified: '2665-FE0F',
        keywords: ['poker', 'cards', 'magic', 'suits'],
        sheet: [53, 35],
        shortName: 'hearts'
      }, {
        name: 'Denmark Flag',
        unified: '1F1E9-1F1F0',
        sheet: [1, 35],
        shortName: 'flag-dk'
      }, {
        name: 'Spaghetti',
        unified: '1F35D',
        keywords: ['food', 'italian', 'noodle'],
        sheet: [6, 53],
        shortName: 'spaghetti'
      }, {
        name: 'Mobile Phone',
        unified: '1F4F1',
        keywords: ['technology', 'apple', 'gadgets', 'dial'],
        sheet: [27, 14],
        shortName: 'iphone'
      }, {
        name: 'Astonished Face',
        unified: '1F632',
        keywords: ['face', 'xox', 'surprised', 'poisoned'],
        sheet: [31, 28],
        shortName: 'astonished'
      }, {
        name: 'Light Rail',
        unified: '1F688',
        keywords: ['transportation', 'vehicle'],
        sheet: [34, 7],
        shortName: 'light_rail'
      }, {
        name: 'Eagle',
        unified: '1F985',
        keywords: ['animal', 'nature', 'bird'],
        sheet: [42, 23],
        shortName: 'eagle'
      }, {
        name: 'Bald Person',
        unified: '1F9D1-200D-1F9B2',
        sheet: [47, 25],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F9B2',
          sheet: [47, 26],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F9B2',
          sheet: [47, 27],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F9B2',
          sheet: [47, 28],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F9B2',
          sheet: [47, 29],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F9B2',
          sheet: [47, 30],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'bald_person'
      }, {
        name: 'Capricorn',
        unified: '2651',
        keywords: ['sign', 'zodiac', 'purple-square', 'astrology'],
        sheet: [53, 29],
        shortName: 'capricorn'
      }, {
        name: 'Black Diamond Suit',
        unified: '2666-FE0F',
        keywords: ['poker', 'cards', 'magic', 'suits'],
        sheet: [53, 36],
        shortName: 'diamonds'
      }, {
        name: 'Dominica Flag',
        unified: '1F1E9-1F1F2',
        sheet: [1, 36],
        shortName: 'flag-dm'
      }, {
        name: 'Roasted Sweet Potato',
        unified: '1F360',
        keywords: ['food', 'nature'],
        sheet: [6, 56],
        shortName: 'sweet_potato'
      }, {
        name: 'Blond Haired Woman',
        unified: '1F471-200D-2640-FE0F',
        sheet: [22, 7],
        skinVariations: [{
          unified: '1F471-1F3FB-200D-2640-FE0F',
          sheet: [22, 8]
        }, {
          unified: '1F471-1F3FC-200D-2640-FE0F',
          sheet: [22, 9]
        }, {
          unified: '1F471-1F3FD-200D-2640-FE0F',
          sheet: [22, 10]
        }, {
          unified: '1F471-1F3FE-200D-2640-FE0F',
          sheet: [22, 11]
        }, {
          unified: '1F471-1F3FF-200D-2640-FE0F',
          sheet: [22, 12]
        }],
        shortName: 'blond-haired-woman'
      }, {
        name: 'Mobile Phone with Rightwards Arrow at Left',
        unified: '1F4F2',
        keywords: ['iphone', 'incoming'],
        sheet: [27, 15],
        shortName: 'calling'
      }, {
        name: 'Flushed Face',
        unified: '1F633',
        keywords: ['face', 'blush', 'shy', 'flattered'],
        sheet: [31, 29],
        shortName: 'flushed'
      }, {
        name: 'Station',
        unified: '1F689',
        keywords: ['transportation', 'vehicle', 'public'],
        sheet: [34, 8],
        shortName: 'station'
      }, {
        name: 'Duck',
        unified: '1F986',
        keywords: ['animal', 'nature', 'bird', 'mallard'],
        sheet: [42, 24],
        shortName: 'duck'
      }, {
        name: 'Aquarius',
        unified: '2652',
        keywords: ['sign', 'purple-square', 'zodiac', 'astrology'],
        sheet: [53, 30],
        shortName: 'aquarius'
      }, {
        name: 'Black Club Suit',
        unified: '2663-FE0F',
        keywords: ['poker', 'cards', 'magic', 'suits'],
        sheet: [53, 34],
        shortName: 'clubs'
      }, {
        name: 'Dominican Republic Flag',
        unified: '1F1E9-1F1F4',
        sheet: [1, 37],
        shortName: 'flag-do'
      }, {
        name: 'Oden',
        unified: '1F362',
        keywords: ['food', 'japanese'],
        sheet: [7, 1],
        shortName: 'oden'
      }, {
        name: 'Blond Haired Man',
        unified: '1F471-200D-2642-FE0F',
        obsoletes: '1F471',
        sheet: [22, 13],
        skinVariations: [{
          unified: '1F471-1F3FB-200D-2642-FE0F',
          sheet: [22, 14]
        }, {
          unified: '1F471-1F3FC-200D-2642-FE0F',
          sheet: [22, 15]
        }, {
          unified: '1F471-1F3FD-200D-2642-FE0F',
          sheet: [22, 16]
        }, {
          unified: '1F471-1F3FE-200D-2642-FE0F',
          sheet: [22, 17]
        }, {
          unified: '1F471-1F3FF-200D-2642-FE0F',
          sheet: [22, 18]
        }],
        shortName: 'blond-haired-man'
      }, {
        name: 'Tram',
        unified: '1F68A',
        keywords: ['transportation', 'vehicle'],
        sheet: [34, 9],
        shortName: 'tram'
      }, {
        name: 'Face with Pleading Eyes',
        unified: '1F97A',
        sheet: [42, 12],
        shortName: 'pleading_face'
      }, {
        name: 'Swan',
        unified: '1F9A2',
        keywords: ['animal', 'nature', 'bird'],
        sheet: [42, 52],
        shortName: 'swan'
      }, {
        name: 'Black Telephone',
        unified: '260E-FE0F',
        keywords: ['technology', 'communication', 'dial', 'telephone'],
        sheet: [52, 54],
        shortNames: ['telephone'],
        shortName: 'phone'
      }, {
        name: 'Pisces',
        unified: '2653',
        keywords: ['purple-square', 'sign', 'zodiac', 'astrology'],
        sheet: [53, 31],
        shortName: 'pisces'
      }, {
        name: 'Chess Pawn',
        unified: '265F-FE0F',
        keywords: ['expendable'],
        sheet: [53, 32],
        shortName: 'chess_pawn'
      }, {
        name: 'Playing Card Black Joker',
        unified: '1F0CF',
        keywords: ['poker', 'cards', 'game', 'play', 'magic'],
        sheet: [0, 15],
        shortName: 'black_joker'
      }, {
        name: 'Algeria Flag',
        unified: '1F1E9-1F1FF',
        sheet: [1, 38],
        shortName: 'flag-dz'
      }, {
        name: 'Sushi',
        unified: '1F363',
        keywords: ['food', 'fish', 'japanese', 'rice'],
        sheet: [7, 2],
        shortName: 'sushi'
      }, {
        name: 'Telephone Receiver',
        unified: '1F4DE',
        keywords: ['technology', 'communication', 'dial'],
        sheet: [26, 52],
        shortName: 'telephone_receiver'
      }, {
        name: 'Frowning Face with Open Mouth',
        unified: '1F626',
        keywords: ['face', 'aw', 'what'],
        sheet: [31, 16],
        shortName: 'frowning'
      }, {
        name: 'Monorail',
        unified: '1F69D',
        keywords: ['transportation', 'vehicle'],
        sheet: [34, 28],
        shortName: 'monorail'
      }, {
        name: 'Owl',
        unified: '1F989',
        keywords: ['animal', 'nature', 'bird', 'hoot'],
        sheet: [42, 27],
        shortName: 'owl'
      }, {
        name: 'Older Adult',
        unified: '1F9D3',
        keywords: ['human', 'elder', 'senior', 'gender-neutral'],
        sheet: [48, 22],
        skinVariations: [{
          unified: '1F9D3-1F3FB',
          sheet: [48, 23]
        }, {
          unified: '1F9D3-1F3FC',
          sheet: [48, 24]
        }, {
          unified: '1F9D3-1F3FD',
          sheet: [48, 25]
        }, {
          unified: '1F9D3-1F3FE',
          sheet: [48, 26]
        }, {
          unified: '1F9D3-1F3FF',
          sheet: [48, 27]
        }],
        shortName: 'older_adult'
      }, {
        name: 'Ophiuchus',
        unified: '26CE',
        keywords: ['sign', 'purple-square', 'constellation', 'astrology'],
        sheet: [54, 4],
        shortName: 'ophiuchus'
      }, {
        name: 'Mahjong Tile Red Dragon',
        unified: '1F004',
        keywords: ['game', 'play', 'chinese', 'kanji'],
        sheet: [0, 14],
        shortName: 'mahjong'
      }, {
        name: 'Ceuta & Melilla Flag',
        unified: '1F1EA-1F1E6',
        sheet: [1, 39],
        shortName: 'flag-ea'
      }, {
        name: 'Fried Shrimp',
        unified: '1F364',
        keywords: ['food', 'animal', 'appetizer', 'summer'],
        sheet: [7, 3],
        shortName: 'fried_shrimp'
      }, {
        name: 'Older Man',
        unified: '1F474',
        keywords: ['human', 'male', 'men', 'old', 'elder', 'senior'],
        sheet: [22, 49],
        skinVariations: [{
          unified: '1F474-1F3FB',
          sheet: [22, 50]
        }, {
          unified: '1F474-1F3FC',
          sheet: [22, 51]
        }, {
          unified: '1F474-1F3FD',
          sheet: [22, 52]
        }, {
          unified: '1F474-1F3FE',
          sheet: [22, 53]
        }, {
          unified: '1F474-1F3FF',
          sheet: [22, 54]
        }],
        shortName: 'older_man'
      }, {
        name: 'Pager',
        unified: '1F4DF',
        keywords: ['bbcall', 'oldschool', '90s'],
        sheet: [26, 53],
        shortName: 'pager'
      }, {
        name: 'Twisted Rightwards Arrows',
        unified: '1F500',
        keywords: ['blue-square', 'shuffle', 'music', 'random'],
        sheet: [27, 28],
        shortName: 'twisted_rightwards_arrows'
      }, {
        name: 'Anguished Face',
        unified: '1F627',
        emoticons: ['D:'],
        keywords: ['face', 'stunned', 'nervous'],
        sheet: [31, 17],
        shortName: 'anguished'
      }, {
        name: 'Mountain Railway',
        unified: '1F69E',
        keywords: ['transportation', 'vehicle'],
        sheet: [34, 29],
        shortName: 'mountain_railway'
      }, {
        name: 'Flamingo',
        unified: '1F9A9',
        sheet: [43, 0],
        shortName: 'flamingo'
      }, {
        name: 'Ecuador Flag',
        unified: '1F1EA-1F1E8',
        sheet: [1, 40],
        shortName: 'flag-ec'
      }, {
        name: 'Fish Cake with Swirl Design',
        unified: '1F365',
        keywords: ['food', 'japan', 'sea', 'beach', 'narutomaki', 'pink', 'swirl', 'kamaboko', 'surimi', 'ramen'],
        sheet: [7, 4],
        shortName: 'fish_cake'
      }, {
        name: 'Flower Playing Cards',
        unified: '1F3B4',
        keywords: ['game', 'sunset', 'red'],
        sheet: [8, 26],
        shortName: 'flower_playing_cards'
      }, {
        name: 'Older Woman',
        unified: '1F475',
        keywords: ['human', 'female', 'women', 'lady', 'old', 'elder', 'senior'],
        sheet: [22, 55],
        skinVariations: [{
          unified: '1F475-1F3FB',
          sheet: [22, 56]
        }, {
          unified: '1F475-1F3FC',
          sheet: [23, 0]
        }, {
          unified: '1F475-1F3FD',
          sheet: [23, 1]
        }, {
          unified: '1F475-1F3FE',
          sheet: [23, 2]
        }, {
          unified: '1F475-1F3FF',
          sheet: [23, 3]
        }],
        shortName: 'older_woman'
      }, {
        name: 'Fax Machine',
        unified: '1F4E0',
        keywords: ['communication', 'technology'],
        sheet: [26, 54],
        shortName: 'fax'
      }, {
        name: 'Clockwise Rightwards and Leftwards Open Circle Arrows',
        unified: '1F501',
        keywords: ['loop', 'record'],
        sheet: [27, 29],
        shortName: 'repeat'
      }, {
        name: 'Fearful Face',
        unified: '1F628',
        keywords: ['face', 'scared', 'terrified', 'nervous', 'oops', 'huh'],
        sheet: [31, 18],
        shortName: 'fearful'
      }, {
        name: 'Tram Car',
        unified: '1F68B',
        keywords: ['transportation', 'vehicle', 'carriage', 'public', 'travel'],
        sheet: [34, 10],
        shortName: 'train'
      }, {
        name: 'Peacock',
        unified: '1F99A',
        keywords: ['animal', 'nature', 'peahen', 'bird'],
        sheet: [42, 44],
        shortName: 'peacock'
      }, {
        name: 'Estonia Flag',
        unified: '1F1EA-1F1EA',
        sheet: [1, 41],
        shortName: 'flag-ee'
      }, {
        name: 'Performing Arts',
        unified: '1F3AD',
        keywords: ['acting', 'theater', 'drama'],
        sheet: [8, 19],
        shortName: 'performing_arts'
      }, {
        name: 'Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay',
        unified: '1F502',
        keywords: ['blue-square', 'loop'],
        sheet: [27, 30],
        shortName: 'repeat_one'
      }, {
        name: 'Battery',
        unified: '1F50B',
        keywords: ['power', 'energy', 'sustain'],
        sheet: [27, 39],
        shortName: 'battery'
      }, {
        name: 'Face with Open Mouth and Cold Sweat',
        unified: '1F630',
        keywords: ['face', 'nervous', 'sweat'],
        sheet: [31, 26],
        shortName: 'cold_sweat'
      }, {
        name: 'Person Frowning',
        unified: '1F64D',
        sheet: [33, 26],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F64D-1F3FB',
          sheet: [33, 27],
          hidden: ['facebook']
        }, {
          unified: '1F64D-1F3FC',
          sheet: [33, 28],
          hidden: ['facebook']
        }, {
          unified: '1F64D-1F3FD',
          sheet: [33, 29],
          hidden: ['facebook']
        }, {
          unified: '1F64D-1F3FE',
          sheet: [33, 30],
          hidden: ['facebook']
        }, {
          unified: '1F64D-1F3FF',
          sheet: [33, 31],
          hidden: ['facebook']
        }],
        shortName: 'person_frowning',
        obsoletedBy: '1F64D-200D-2640-FE0F'
      }, {
        name: 'Bus',
        unified: '1F68C',
        keywords: ['car', 'vehicle', 'transportation'],
        sheet: [34, 11],
        shortName: 'bus'
      }, {
        name: 'Moon Cake',
        unified: '1F96E',
        keywords: ['food', 'autumn'],
        sheet: [42, 4],
        shortName: 'moon_cake'
      }, {
        name: 'Parrot',
        unified: '1F99C',
        keywords: ['animal', 'nature', 'bird', 'pirate', 'talk'],
        sheet: [42, 46],
        shortName: 'parrot'
      }, {
        name: 'Egypt Flag',
        unified: '1F1EA-1F1EC',
        sheet: [1, 42],
        shortName: 'flag-eg'
      }, {
        name: 'Dango',
        unified: '1F361',
        keywords: ['food', 'dessert', 'sweet', 'japanese', 'barbecue', 'meat'],
        sheet: [7, 0],
        shortName: 'dango'
      }, {
        name: 'Frog Face',
        unified: '1F438',
        keywords: ['animal', 'nature', 'croak', 'toad'],
        sheet: [12, 28],
        shortName: 'frog'
      }, {
        name: 'Electric Plug',
        unified: '1F50C',
        keywords: ['charger', 'power'],
        sheet: [27, 40],
        shortName: 'electric_plug'
      }, {
        name: 'Frame with Picture',
        unified: '1F5BC-FE0F',
        sheet: [30, 14],
        shortName: 'frame_with_picture'
      }, {
        name: 'Disappointed but Relieved Face',
        unified: '1F625',
        keywords: ['face', 'phew', 'sweat', 'nervous'],
        sheet: [31, 15],
        shortName: 'disappointed_relieved'
      }, {
        name: 'Man Frowning',
        unified: '1F64D-200D-2642-FE0F',
        sheet: [33, 20],
        skinVariations: [{
          unified: '1F64D-1F3FB-200D-2642-FE0F',
          sheet: [33, 21]
        }, {
          unified: '1F64D-1F3FC-200D-2642-FE0F',
          sheet: [33, 22]
        }, {
          unified: '1F64D-1F3FD-200D-2642-FE0F',
          sheet: [33, 23]
        }, {
          unified: '1F64D-1F3FE-200D-2642-FE0F',
          sheet: [33, 24]
        }, {
          unified: '1F64D-1F3FF-200D-2642-FE0F',
          sheet: [33, 25]
        }],
        shortName: 'man-frowning'
      }, {
        name: 'Oncoming Bus',
        unified: '1F68D',
        keywords: ['vehicle', 'transportation'],
        sheet: [34, 12],
        shortName: 'oncoming_bus'
      }, {
        name: 'Black Right-Pointing Triangle',
        unified: '25B6-FE0F',
        keywords: ['blue-square', 'right', 'direction', 'play'],
        sheet: [52, 43],
        shortName: 'arrow_forward'
      }, {
        name: 'Western Sahara Flag',
        unified: '1F1EA-1F1ED',
        sheet: [1, 43],
        shortName: 'flag-eh'
      }, {
        name: 'Artist Palette',
        unified: '1F3A8',
        keywords: ['design', 'paint', 'draw', 'colors'],
        sheet: [8, 14],
        shortName: 'art'
      }, {
        name: 'Crocodile',
        unified: '1F40A',
        keywords: ['animal', 'nature', 'reptile', 'lizard', 'alligator'],
        sheet: [11, 38],
        shortName: 'crocodile'
      }, {
        name: 'Personal Computer',
        unified: '1F4BB',
        keywords: ['technology', 'laptop', 'screen', 'display', 'monitor'],
        sheet: [26, 17],
        shortName: 'computer'
      }, {
        name: 'Crying Face',
        unified: '1F622',
        text: ':\'(',
        emoticons: [':\'('],
        keywords: ['face', 'tears', 'sad', 'depressed', 'upset', ':\'('],
        sheet: [31, 12],
        shortName: 'cry'
      }, {
        name: 'Woman Frowning',
        unified: '1F64D-200D-2640-FE0F',
        obsoletes: '1F64D',
        sheet: [33, 14],
        skinVariations: [{
          unified: '1F64D-1F3FB-200D-2640-FE0F',
          sheet: [33, 15]
        }, {
          unified: '1F64D-1F3FC-200D-2640-FE0F',
          sheet: [33, 16]
        }, {
          unified: '1F64D-1F3FD-200D-2640-FE0F',
          sheet: [33, 17]
        }, {
          unified: '1F64D-1F3FE-200D-2640-FE0F',
          sheet: [33, 18]
        }, {
          unified: '1F64D-1F3FF-200D-2640-FE0F',
          sheet: [33, 19]
        }],
        shortName: 'woman-frowning'
      }, {
        name: 'Trolleybus',
        unified: '1F68E',
        keywords: ['bart', 'transportation', 'vehicle'],
        sheet: [34, 13],
        shortName: 'trolleybus'
      }, {
        name: 'Dumpling',
        unified: '1F95F',
        keywords: ['food', 'empanada', 'pierogi', 'potsticker'],
        sheet: [41, 46],
        shortName: 'dumpling'
      }, {
        name: 'Black Right-Pointing Double Triangle',
        unified: '23E9',
        keywords: ['blue-square', 'play', 'speed', 'continue'],
        sheet: [52, 26],
        shortName: 'fast_forward'
      }, {
        name: 'Eritrea Flag',
        unified: '1F1EA-1F1F7',
        sheet: [1, 44],
        shortName: 'flag-er'
      }, {
        name: 'Turtle',
        unified: '1F422',
        keywords: ['animal', 'slow', 'nature', 'tortoise'],
        sheet: [12, 6],
        shortName: 'turtle'
      }, {
        name: 'Desktop Computer',
        unified: '1F5A5-FE0F',
        keywords: ['technology', 'computing', 'screen'],
        sheet: [30, 10],
        shortName: 'desktop_computer'
      }, {
        name: 'Loudly Crying Face',
        unified: '1F62D',
        text: ':\'(',
        keywords: ['face', 'cry', 'tears', 'sad', 'upset', 'depressed'],
        sheet: [31, 23],
        shortName: 'sob'
      }, {
        name: 'Person with Pouting Face',
        unified: '1F64E',
        sheet: [33, 44],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F64E-1F3FB',
          sheet: [33, 45],
          hidden: ['facebook']
        }, {
          unified: '1F64E-1F3FC',
          sheet: [33, 46],
          hidden: ['facebook']
        }, {
          unified: '1F64E-1F3FD',
          sheet: [33, 47],
          hidden: ['facebook']
        }, {
          unified: '1F64E-1F3FE',
          sheet: [33, 48],
          hidden: ['facebook']
        }, {
          unified: '1F64E-1F3FF',
          sheet: [33, 49],
          hidden: ['facebook']
        }],
        shortName: 'person_with_pouting_face',
        obsoletedBy: '1F64E-200D-2640-FE0F'
      }, {
        name: 'Minibus',
        unified: '1F690',
        keywords: ['vehicle', 'car', 'transportation'],
        sheet: [34, 15],
        shortName: 'minibus'
      }, {
        name: 'Fortune Cookie',
        unified: '1F960',
        keywords: ['food', 'prophecy'],
        sheet: [41, 47],
        shortName: 'fortune_cookie'
      }, {
        name: 'Spool of Thread',
        unified: '1F9F5',
        keywords: ['needle', 'sewing', 'spool', 'string'],
        sheet: [51, 40],
        shortName: 'thread'
      }, {
        name: 'Black Right Pointing Double Triangle with Vertical Bar',
        unified: '23ED-FE0F',
        sheet: [52, 30],
        shortName: 'black_right_pointing_double_triangle_with_vertical_bar'
      }, {
        name: 'Spain Flag',
        unified: '1F1EA-1F1F8',
        keywords: ['spain', 'flag', 'nation', 'country', 'banner'],
        sheet: [1, 45],
        shortNames: ['flag-es'],
        shortName: 'es'
      }, {
        name: 'Printer',
        unified: '1F5A8-FE0F',
        keywords: ['paper', 'ink'],
        sheet: [30, 11],
        shortName: 'printer'
      }, {
        name: 'Face Screaming in Fear',
        unified: '1F631',
        keywords: ['face', 'munch', 'scared', 'omg'],
        sheet: [31, 27],
        shortName: 'scream'
      }, {
        name: 'Man Pouting',
        unified: '1F64E-200D-2642-FE0F',
        sheet: [33, 38],
        skinVariations: [{
          unified: '1F64E-1F3FB-200D-2642-FE0F',
          sheet: [33, 39]
        }, {
          unified: '1F64E-1F3FC-200D-2642-FE0F',
          sheet: [33, 40]
        }, {
          unified: '1F64E-1F3FD-200D-2642-FE0F',
          sheet: [33, 41]
        }, {
          unified: '1F64E-1F3FE-200D-2642-FE0F',
          sheet: [33, 42]
        }, {
          unified: '1F64E-1F3FF-200D-2642-FE0F',
          sheet: [33, 43]
        }],
        shortName: 'man-pouting'
      }, {
        name: 'Ambulance',
        unified: '1F691',
        keywords: ['health', '911', 'hospital'],
        sheet: [34, 16],
        shortName: 'ambulance'
      }, {
        name: 'Takeout Box',
        unified: '1F961',
        keywords: ['food', 'leftovers'],
        sheet: [41, 48],
        shortName: 'takeout_box'
      }, {
        name: 'Lizard',
        unified: '1F98E',
        keywords: ['animal', 'nature', 'reptile'],
        sheet: [42, 32],
        shortName: 'lizard'
      }, {
        name: 'Ball of Yarn',
        unified: '1F9F6',
        keywords: ['ball', 'crochet', 'knit'],
        sheet: [51, 41],
        shortName: 'yarn'
      }, {
        name: 'Black Right Pointing Triangle with Double Vertical Bar',
        unified: '23EF-FE0F',
        sheet: [52, 32],
        shortName: 'black_right_pointing_triangle_with_double_vertical_bar'
      }, {
        name: 'Ethiopia Flag',
        unified: '1F1EA-1F1F9',
        sheet: [1, 46],
        shortName: 'flag-et'
      }, {
        name: 'Snake',
        unified: '1F40D',
        keywords: ['animal', 'evil', 'nature', 'hiss', 'python'],
        sheet: [11, 41],
        shortName: 'snake'
      }, {
        name: 'Confounded Face',
        unified: '1F616',
        keywords: ['face', 'confused', 'sick', 'unwell', 'oops', ':S'],
        sheet: [31, 0],
        shortName: 'confounded'
      }, {
        name: 'Woman Pouting',
        unified: '1F64E-200D-2640-FE0F',
        obsoletes: '1F64E',
        sheet: [33, 32],
        skinVariations: [{
          unified: '1F64E-1F3FB-200D-2640-FE0F',
          sheet: [33, 33]
        }, {
          unified: '1F64E-1F3FC-200D-2640-FE0F',
          sheet: [33, 34]
        }, {
          unified: '1F64E-1F3FD-200D-2640-FE0F',
          sheet: [33, 35]
        }, {
          unified: '1F64E-1F3FE-200D-2640-FE0F',
          sheet: [33, 36]
        }, {
          unified: '1F64E-1F3FF-200D-2640-FE0F',
          sheet: [33, 37]
        }],
        shortName: 'woman-pouting'
      }, {
        name: 'Fire Engine',
        unified: '1F692',
        keywords: ['transportation', 'cars', 'vehicle'],
        sheet: [34, 17],
        shortName: 'fire_engine'
      }, {
        name: 'Crab',
        unified: '1F980',
        keywords: ['animal', 'crustacean'],
        sheet: [42, 18],
        shortName: 'crab'
      }, {
        name: 'Keyboard',
        unified: '2328-FE0F',
        keywords: ['technology', 'computer', 'type', 'input', 'text'],
        sheet: [52, 24],
        shortName: 'keyboard'
      }, {
        name: 'Black Left-Pointing Triangle',
        unified: '25C0-FE0F',
        keywords: ['blue-square', 'left', 'direction'],
        sheet: [52, 44],
        shortName: 'arrow_backward'
      }, {
        name: 'European Union Flag',
        unified: '1F1EA-1F1FA',
        sheet: [1, 47],
        shortName: 'flag-eu'
      }, {
        name: 'Dragon Face',
        unified: '1F432',
        keywords: ['animal', 'myth', 'nature', 'chinese', 'green'],
        sheet: [12, 22],
        shortName: 'dragon_face'
      }, {
        name: 'Three Button Mouse',
        unified: '1F5B1-FE0F',
        sheet: [30, 12],
        shortName: 'three_button_mouse'
      }, {
        name: 'Persevering Face',
        unified: '1F623',
        keywords: ['face', 'sick', 'no', 'upset', 'oops'],
        sheet: [31, 13],
        shortName: 'persevere'
      }, {
        name: 'Face with No Good Gesture',
        unified: '1F645',
        sheet: [32, 2],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F645-1F3FB',
          sheet: [32, 3],
          hidden: ['facebook']
        }, {
          unified: '1F645-1F3FC',
          sheet: [32, 4],
          hidden: ['facebook']
        }, {
          unified: '1F645-1F3FD',
          sheet: [32, 5],
          hidden: ['facebook']
        }, {
          unified: '1F645-1F3FE',
          sheet: [32, 6],
          hidden: ['facebook']
        }, {
          unified: '1F645-1F3FF',
          sheet: [32, 7],
          hidden: ['facebook']
        }],
        shortName: 'no_good',
        obsoletedBy: '1F645-200D-2640-FE0F'
      }, {
        name: 'Police Car',
        unified: '1F693',
        keywords: ['vehicle', 'cars', 'transportation', 'law', 'legal', 'enforcement'],
        sheet: [34, 18],
        shortName: 'police_car'
      }, {
        name: 'Lobster',
        unified: '1F99E',
        keywords: ['animal', 'nature', 'bisque', 'claws', 'seafood'],
        sheet: [42, 48],
        shortName: 'lobster'
      }, {
        name: 'Black Left-Pointing Double Triangle',
        unified: '23EA',
        keywords: ['play', 'blue-square'],
        sheet: [52, 27],
        shortName: 'rewind'
      }, {
        name: 'Finland Flag',
        unified: '1F1EB-1F1EE',
        sheet: [1, 48],
        shortName: 'flag-fi'
      }, {
        name: 'Dragon',
        unified: '1F409',
        keywords: ['animal', 'myth', 'nature', 'chinese', 'green'],
        sheet: [11, 37],
        shortName: 'dragon'
      }, {
        name: 'Trackball',
        unified: '1F5B2-FE0F',
        keywords: ['technology', 'trackpad'],
        sheet: [30, 13],
        shortName: 'trackball'
      }, {
        name: 'Disappointed Face',
        unified: '1F61E',
        text: ':(',
        emoticons: ['):', ':(', ':-('],
        keywords: ['face', 'sad', 'upset', 'depressed', ':('],
        sheet: [31, 8],
        shortName: 'disappointed'
      }, {
        name: 'Man Gesturing No',
        unified: '1F645-200D-2642-FE0F',
        sheet: [31, 53],
        skinVariations: [{
          unified: '1F645-1F3FB-200D-2642-FE0F',
          sheet: [31, 54]
        }, {
          unified: '1F645-1F3FC-200D-2642-FE0F',
          sheet: [31, 55]
        }, {
          unified: '1F645-1F3FD-200D-2642-FE0F',
          sheet: [31, 56]
        }, {
          unified: '1F645-1F3FE-200D-2642-FE0F',
          sheet: [32, 0]
        }, {
          unified: '1F645-1F3FF-200D-2642-FE0F',
          sheet: [32, 1]
        }],
        shortName: 'man-gesturing-no'
      }, {
        name: 'Oncoming Police Car',
        unified: '1F694',
        keywords: ['vehicle', 'law', 'legal', 'enforcement', '911'],
        sheet: [34, 19],
        shortName: 'oncoming_police_car'
      }, {
        name: 'Shrimp',
        unified: '1F990',
        keywords: ['animal', 'ocean', 'nature', 'seafood'],
        sheet: [42, 34],
        shortName: 'shrimp'
      }, {
        name: 'Black Left Pointing Double Triangle with Vertical Bar',
        unified: '23EE-FE0F',
        sheet: [52, 31],
        shortName: 'black_left_pointing_double_triangle_with_vertical_bar'
      }, {
        name: 'Fiji Flag',
        unified: '1F1EB-1F1EF',
        sheet: [1, 49],
        shortName: 'flag-fj'
      }, {
        name: 'Minidisc',
        unified: '1F4BD',
        keywords: ['technology', 'record', 'data', 'disk', '90s'],
        sheet: [26, 19],
        shortName: 'minidisc'
      }, {
        name: 'Up-Pointing Small Red Triangle',
        unified: '1F53C',
        keywords: ['blue-square', 'triangle', 'direction', 'point', 'forward', 'top'],
        sheet: [28, 31],
        shortName: 'arrow_up_small'
      }, {
        name: 'Face with Cold Sweat',
        unified: '1F613',
        keywords: ['face', 'hot', 'sad', 'tired', 'exercise'],
        sheet: [30, 54],
        shortName: 'sweat'
      }, {
        name: 'Woman Gesturing No',
        unified: '1F645-200D-2640-FE0F',
        obsoletes: '1F645',
        sheet: [31, 47],
        skinVariations: [{
          unified: '1F645-1F3FB-200D-2640-FE0F',
          sheet: [31, 48]
        }, {
          unified: '1F645-1F3FC-200D-2640-FE0F',
          sheet: [31, 49]
        }, {
          unified: '1F645-1F3FD-200D-2640-FE0F',
          sheet: [31, 50]
        }, {
          unified: '1F645-1F3FE-200D-2640-FE0F',
          sheet: [31, 51]
        }, {
          unified: '1F645-1F3FF-200D-2640-FE0F',
          sheet: [31, 52]
        }],
        shortName: 'woman-gesturing-no'
      }, {
        name: 'Taxi',
        unified: '1F695',
        keywords: ['uber', 'vehicle', 'cars', 'transportation'],
        sheet: [34, 20],
        shortName: 'taxi'
      }, {
        name: 'Squid',
        unified: '1F991',
        keywords: ['animal', 'nature', 'ocean', 'sea'],
        sheet: [42, 35],
        shortName: 'squid'
      }, {
        name: 'Sauropod',
        unified: '1F995',
        keywords: ['animal', 'nature', 'dinosaur', 'brachiosaurus', 'brontosaurus', 'diplodocus', 'extinct'],
        sheet: [42, 39],
        shortName: 'sauropod'
      }, {
        name: 'Falkland Islands Flag',
        unified: '1F1EB-1F1F0',
        sheet: [1, 50],
        shortName: 'flag-fk'
      }, {
        name: 'Floppy Disk',
        unified: '1F4BE',
        keywords: ['oldschool', 'technology', 'save', '90s', '80s'],
        sheet: [26, 20],
        shortName: 'floppy_disk'
      }, {
        name: 'Weary Face',
        unified: '1F629',
        keywords: ['face', 'tired', 'sleepy', 'sad', 'frustrated', 'upset'],
        sheet: [31, 19],
        shortName: 'weary'
      }, {
        name: 'Face with Ok Gesture',
        unified: '1F646',
        keywords: ['women', 'girl', 'female', 'pink', 'human', 'woman'],
        sheet: [32, 20],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F646-1F3FB',
          sheet: [32, 21],
          hidden: ['facebook']
        }, {
          unified: '1F646-1F3FC',
          sheet: [32, 22],
          hidden: ['facebook']
        }, {
          unified: '1F646-1F3FD',
          sheet: [32, 23],
          hidden: ['facebook']
        }, {
          unified: '1F646-1F3FE',
          sheet: [32, 24],
          hidden: ['facebook']
        }, {
          unified: '1F646-1F3FF',
          sheet: [32, 25],
          hidden: ['facebook']
        }],
        shortName: 'ok_woman',
        obsoletedBy: '1F646-200D-2640-FE0F'
      }, {
        name: 'Oncoming Taxi',
        unified: '1F696',
        keywords: ['vehicle', 'cars', 'uber'],
        sheet: [34, 21],
        shortName: 'oncoming_taxi'
      }, {
        name: 'T-Rex',
        unified: '1F996',
        keywords: ['animal', 'nature', 'dinosaur', 'tyrannosaurus', 'extinct'],
        sheet: [42, 40],
        shortName: 't-rex'
      }, {
        name: 'Oyster',
        unified: '1F9AA',
        sheet: [43, 1],
        shortName: 'oyster'
      }, {
        name: 'Black Up-Pointing Double Triangle',
        unified: '23EB',
        keywords: ['blue-square', 'direction', 'top'],
        sheet: [52, 28],
        shortName: 'arrow_double_up'
      }, {
        name: 'Micronesia Flag',
        unified: '1F1EB-1F1F2',
        sheet: [1, 51],
        shortName: 'flag-fm'
      }, {
        name: 'Soft Ice Cream',
        unified: '1F366',
        keywords: ['food', 'hot', 'dessert', 'summer'],
        sheet: [7, 5],
        shortName: 'icecream'
      }, {
        name: 'Spouting Whale',
        unified: '1F433',
        keywords: ['animal', 'nature', 'sea', 'ocean'],
        sheet: [12, 23],
        shortName: 'whale'
      }, {
        name: 'Optical Disc',
        unified: '1F4BF',
        keywords: ['technology', 'dvd', 'disk', 'disc', '90s'],
        sheet: [26, 21],
        shortName: 'cd'
      }, {
        name: 'Down-Pointing Small Red Triangle',
        unified: '1F53D',
        keywords: ['blue-square', 'direction', 'bottom'],
        sheet: [28, 32],
        shortName: 'arrow_down_small'
      }, {
        name: 'Tired Face',
        unified: '1F62B',
        keywords: ['sick', 'whine', 'upset', 'frustrated'],
        sheet: [31, 21],
        shortName: 'tired_face'
      }, {
        name: 'Man Gesturing Ok',
        unified: '1F646-200D-2642-FE0F',
        sheet: [32, 14],
        skinVariations: [{
          unified: '1F646-1F3FB-200D-2642-FE0F',
          sheet: [32, 15]
        }, {
          unified: '1F646-1F3FC-200D-2642-FE0F',
          sheet: [32, 16]
        }, {
          unified: '1F646-1F3FD-200D-2642-FE0F',
          sheet: [32, 17]
        }, {
          unified: '1F646-1F3FE-200D-2642-FE0F',
          sheet: [32, 18]
        }, {
          unified: '1F646-1F3FF-200D-2642-FE0F',
          sheet: [32, 19]
        }],
        shortName: 'man-gesturing-ok'
      }, {
        name: 'Automobile',
        unified: '1F697',
        sheet: [34, 22],
        shortNames: ['red_car'],
        shortName: 'car'
      }, {
        name: 'Faroe Islands Flag',
        unified: '1F1EB-1F1F4',
        sheet: [1, 52],
        shortName: 'flag-fo'
      }, {
        name: 'Shaved Ice',
        unified: '1F367',
        keywords: ['hot', 'dessert', 'summer'],
        sheet: [7, 6],
        shortName: 'shaved_ice'
      }, {
        name: 'Whale',
        unified: '1F40B',
        keywords: ['animal', 'nature', 'sea', 'ocean'],
        sheet: [11, 39],
        shortName: 'whale2'
      }, {
        name: 'Dvd',
        unified: '1F4C0',
        keywords: ['cd', 'disk', 'disc'],
        sheet: [26, 22],
        shortName: 'dvd'
      }, {
        name: 'Woman Gesturing Ok',
        unified: '1F646-200D-2640-FE0F',
        obsoletes: '1F646',
        sheet: [32, 8],
        skinVariations: [{
          unified: '1F646-1F3FB-200D-2640-FE0F',
          sheet: [32, 9]
        }, {
          unified: '1F646-1F3FC-200D-2640-FE0F',
          sheet: [32, 10]
        }, {
          unified: '1F646-1F3FD-200D-2640-FE0F',
          sheet: [32, 11]
        }, {
          unified: '1F646-1F3FE-200D-2640-FE0F',
          sheet: [32, 12]
        }, {
          unified: '1F646-1F3FF-200D-2640-FE0F',
          sheet: [32, 13]
        }],
        shortName: 'woman-gesturing-ok'
      }, {
        name: 'Oncoming Automobile',
        unified: '1F698',
        keywords: ['car', 'vehicle', 'transportation'],
        sheet: [34, 23],
        shortName: 'oncoming_automobile'
      }, {
        name: 'Yawning Face',
        unified: '1F971',
        sheet: [42, 7],
        shortName: 'yawning_face'
      }, {
        name: 'Black Down-Pointing Double Triangle',
        unified: '23EC',
        keywords: ['blue-square', 'direction', 'bottom'],
        sheet: [52, 29],
        shortName: 'arrow_double_down'
      }, {
        name: 'France Flag',
        unified: '1F1EB-1F1F7',
        keywords: ['banner', 'flag', 'nation', 'france', 'french', 'country'],
        sheet: [1, 53],
        shortNames: ['flag-fr'],
        shortName: 'fr'
      }, {
        name: 'Ice Cream',
        unified: '1F368',
        keywords: ['food', 'hot', 'dessert'],
        sheet: [7, 7],
        shortName: 'ice_cream'
      }, {
        name: 'Dolphin',
        unified: '1F42C',
        keywords: ['animal', 'nature', 'fish', 'sea', 'ocean', 'flipper', 'fins', 'beach'],
        sheet: [12, 16],
        shortNames: ['flipper'],
        shortName: 'dolphin'
      }, {
        name: 'Information Desk Person',
        unified: '1F481',
        sheet: [24, 2],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F481-1F3FB',
          sheet: [24, 3],
          hidden: ['facebook']
        }, {
          unified: '1F481-1F3FC',
          sheet: [24, 4],
          hidden: ['facebook']
        }, {
          unified: '1F481-1F3FD',
          sheet: [24, 5],
          hidden: ['facebook']
        }, {
          unified: '1F481-1F3FE',
          sheet: [24, 6],
          hidden: ['facebook']
        }, {
          unified: '1F481-1F3FF',
          sheet: [24, 7],
          hidden: ['facebook']
        }],
        shortName: 'information_desk_person',
        obsoletedBy: '1F481-200D-2640-FE0F'
      }, {
        name: 'Face with Look of Triumph',
        unified: '1F624',
        keywords: ['face', 'gas', 'phew', 'proud', 'pride'],
        sheet: [31, 14],
        shortName: 'triumph'
      }, {
        name: 'Recreational Vehicle',
        unified: '1F699',
        keywords: ['transportation', 'vehicle'],
        sheet: [34, 24],
        shortName: 'blue_car'
      }, {
        name: 'Abacus',
        unified: '1F9EE',
        keywords: ['calculation'],
        sheet: [51, 33],
        shortName: 'abacus'
      }, {
        name: 'Double Vertical Bar',
        unified: '23F8-FE0F',
        sheet: [52, 37],
        shortName: 'double_vertical_bar'
      }, {
        name: 'Gabon Flag',
        unified: '1F1EC-1F1E6',
        sheet: [1, 54],
        shortName: 'flag-ga'
      }, {
        name: 'Doughnut',
        unified: '1F369',
        keywords: ['food', 'dessert', 'snack', 'sweet', 'donut'],
        sheet: [7, 8],
        shortName: 'doughnut'
      }, {
        name: 'Movie Camera',
        unified: '1F3A5',
        keywords: ['film', 'record'],
        sheet: [8, 11],
        shortName: 'movie_camera'
      }, {
        name: 'Fish',
        unified: '1F41F',
        keywords: ['animal', 'food', 'nature'],
        sheet: [12, 3],
        shortName: 'fish'
      }, {
        name: 'Man Tipping Hand',
        unified: '1F481-200D-2642-FE0F',
        sheet: [23, 53],
        skinVariations: [{
          unified: '1F481-1F3FB-200D-2642-FE0F',
          sheet: [23, 54]
        }, {
          unified: '1F481-1F3FC-200D-2642-FE0F',
          sheet: [23, 55]
        }, {
          unified: '1F481-1F3FD-200D-2642-FE0F',
          sheet: [23, 56]
        }, {
          unified: '1F481-1F3FE-200D-2642-FE0F',
          sheet: [24, 0]
        }, {
          unified: '1F481-1F3FF-200D-2642-FE0F',
          sheet: [24, 1]
        }],
        shortName: 'man-tipping-hand'
      }, {
        name: 'Pouting Face',
        unified: '1F621',
        keywords: ['angry', 'mad', 'hate', 'despise'],
        sheet: [31, 11],
        shortName: 'rage'
      }, {
        name: 'Delivery Truck',
        unified: '1F69A',
        keywords: ['cars', 'transportation'],
        sheet: [34, 25],
        shortName: 'truck'
      }, {
        name: 'Black Square for Stop',
        unified: '23F9-FE0F',
        sheet: [52, 38],
        shortName: 'black_square_for_stop'
      }, {
        name: 'United Kingdom Flag',
        unified: '1F1EC-1F1E7',
        sheet: [1, 55],
        shortNames: ['uk', 'flag-gb'],
        shortName: 'gb'
      }, {
        name: 'Cookie',
        unified: '1F36A',
        keywords: ['food', 'snack', 'oreo', 'chocolate', 'sweet', 'dessert'],
        sheet: [7, 9],
        shortName: 'cookie'
      }, {
        name: 'Film Frames',
        unified: '1F39E-FE0F',
        sheet: [8, 4],
        shortName: 'film_frames'
      }, {
        name: 'Tropical Fish',
        unified: '1F420',
        keywords: ['animal', 'swim', 'ocean', 'beach', 'nemo'],
        sheet: [12, 4],
        shortName: 'tropical_fish'
      }, {
        name: 'Woman Tipping Hand',
        unified: '1F481-200D-2640-FE0F',
        obsoletes: '1F481',
        sheet: [23, 47],
        skinVariations: [{
          unified: '1F481-1F3FB-200D-2640-FE0F',
          sheet: [23, 48]
        }, {
          unified: '1F481-1F3FC-200D-2640-FE0F',
          sheet: [23, 49]
        }, {
          unified: '1F481-1F3FD-200D-2640-FE0F',
          sheet: [23, 50]
        }, {
          unified: '1F481-1F3FE-200D-2640-FE0F',
          sheet: [23, 51]
        }, {
          unified: '1F481-1F3FF-200D-2640-FE0F',
          sheet: [23, 52]
        }],
        shortName: 'woman-tipping-hand'
      }, {
        name: 'Angry Face',
        unified: '1F620',
        emoticons: ['>:(', '>:-('],
        keywords: ['mad', 'face', 'annoyed', 'frustrated'],
        sheet: [31, 10],
        shortName: 'angry'
      }, {
        name: 'Articulated Lorry',
        unified: '1F69B',
        keywords: ['vehicle', 'cars', 'transportation', 'express'],
        sheet: [34, 26],
        shortName: 'articulated_lorry'
      }, {
        name: 'Black Circle for Record',
        unified: '23FA-FE0F',
        sheet: [52, 39],
        shortName: 'black_circle_for_record'
      }, {
        name: 'Grenada Flag',
        unified: '1F1EC-1F1E9',
        sheet: [1, 56],
        shortName: 'flag-gd'
      }, {
        name: 'Birthday Cake',
        unified: '1F382',
        keywords: ['food', 'dessert', 'cake'],
        sheet: [7, 33],
        shortName: 'birthday'
      }, {
        name: 'Blowfish',
        unified: '1F421',
        keywords: ['animal', 'nature', 'food', 'sea', 'ocean'],
        sheet: [12, 5],
        shortName: 'blowfish'
      }, {
        name: 'Film Projector',
        unified: '1F4FD-FE0F',
        keywords: ['video', 'tape', 'record', 'movie'],
        sheet: [27, 26],
        shortName: 'film_projector'
      }, {
        name: 'Happy Person Raising One Hand',
        unified: '1F64B',
        sheet: [33, 2],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F64B-1F3FB',
          sheet: [33, 3],
          hidden: ['facebook']
        }, {
          unified: '1F64B-1F3FC',
          sheet: [33, 4],
          hidden: ['facebook']
        }, {
          unified: '1F64B-1F3FD',
          sheet: [33, 5],
          hidden: ['facebook']
        }, {
          unified: '1F64B-1F3FE',
          sheet: [33, 6],
          hidden: ['facebook']
        }, {
          unified: '1F64B-1F3FF',
          sheet: [33, 7],
          hidden: ['facebook']
        }],
        shortName: 'raising_hand',
        obsoletedBy: '1F64B-200D-2640-FE0F'
      }, {
        name: 'Tractor',
        unified: '1F69C',
        keywords: ['vehicle', 'car', 'farming', 'agriculture'],
        sheet: [34, 27],
        shortName: 'tractor'
      }, {
        name: 'Serious Face with Symbols Covering Mouth',
        unified: '1F92C',
        sheet: [38, 46],
        shortNames: ['serious_face_with_symbols_covering_mouth'],
        shortName: 'face_with_symbols_on_mouth'
      }, {
        name: 'Eject',
        unified: '23CF-FE0F',
        sheet: [52, 25],
        shortName: 'eject'
      }, {
        name: 'Georgia Flag',
        unified: '1F1EC-1F1EA',
        sheet: [2, 0],
        shortName: 'flag-ge'
      }, {
        name: 'Shortcake',
        unified: '1F370',
        keywords: ['food', 'dessert'],
        sheet: [7, 15],
        shortName: 'cake'
      }, {
        name: 'Cinema',
        unified: '1F3A6',
        keywords: ['blue-square', 'record', 'film', 'movie', 'curtain', 'stage', 'theater'],
        sheet: [8, 12],
        shortName: 'cinema'
      }, {
        name: 'Clapper Board',
        unified: '1F3AC',
        keywords: ['movie', 'film', 'record'],
        sheet: [8, 18],
        shortName: 'clapper'
      }, {
        name: 'Racing Car',
        unified: '1F3CE-FE0F',
        keywords: ['sports', 'race', 'fast', 'formula', 'f1'],
        sheet: [10, 33],
        shortName: 'racing_car'
      }, {
        name: 'Smiling Face with Horns',
        unified: '1F608',
        keywords: ['devil', 'horns'],
        sheet: [30, 43],
        shortName: 'smiling_imp'
      }, {
        name: 'Man Raising Hand',
        unified: '1F64B-200D-2642-FE0F',
        sheet: [32, 53],
        skinVariations: [{
          unified: '1F64B-1F3FB-200D-2642-FE0F',
          sheet: [32, 54]
        }, {
          unified: '1F64B-1F3FC-200D-2642-FE0F',
          sheet: [32, 55]
        }, {
          unified: '1F64B-1F3FD-200D-2642-FE0F',
          sheet: [32, 56]
        }, {
          unified: '1F64B-1F3FE-200D-2642-FE0F',
          sheet: [33, 0]
        }, {
          unified: '1F64B-1F3FF-200D-2642-FE0F',
          sheet: [33, 1]
        }],
        shortName: 'man-raising-hand'
      }, {
        name: 'Shark',
        unified: '1F988',
        keywords: ['animal', 'nature', 'fish', 'sea', 'ocean', 'jaws', 'fins', 'beach'],
        sheet: [42, 26],
        shortName: 'shark'
      }, {
        name: 'French Guiana Flag',
        unified: '1F1EC-1F1EB',
        sheet: [2, 1],
        shortName: 'flag-gf'
      }, {
        name: 'Racing Motorcycle',
        unified: '1F3CD-FE0F',
        sheet: [10, 32],
        shortName: 'racing_motorcycle'
      }, {
        name: 'Octopus',
        unified: '1F419',
        keywords: ['animal', 'creature', 'ocean', 'sea', 'nature', 'beach'],
        sheet: [11, 54],
        shortName: 'octopus'
      }, {
        name: 'Imp',
        unified: '1F47F',
        keywords: ['devil', 'angry', 'horns'],
        sheet: [23, 45],
        shortName: 'imp'
      }, {
        name: 'Television',
        unified: '1F4FA',
        keywords: ['technology', 'program', 'oldschool', 'show', 'television'],
        sheet: [27, 23],
        shortName: 'tv'
      }, {
        name: 'Low Brightness Symbol',
        unified: '1F505',
        keywords: ['sun', 'afternoon', 'warm', 'summer'],
        sheet: [27, 33],
        shortName: 'low_brightness'
      }, {
        name: 'Woman Raising Hand',
        unified: '1F64B-200D-2640-FE0F',
        obsoletes: '1F64B',
        sheet: [32, 47],
        skinVariations: [{
          unified: '1F64B-1F3FB-200D-2640-FE0F',
          sheet: [32, 48]
        }, {
          unified: '1F64B-1F3FC-200D-2640-FE0F',
          sheet: [32, 49]
        }, {
          unified: '1F64B-1F3FD-200D-2640-FE0F',
          sheet: [32, 50]
        }, {
          unified: '1F64B-1F3FE-200D-2640-FE0F',
          sheet: [32, 51]
        }, {
          unified: '1F64B-1F3FF-200D-2640-FE0F',
          sheet: [32, 52]
        }],
        shortName: 'woman-raising-hand'
      }, {
        name: 'Cupcake',
        unified: '1F9C1',
        keywords: ['food', 'dessert', 'bakery', 'sweet'],
        sheet: [44, 9],
        shortName: 'cupcake'
      }, {
        name: 'Guernsey Flag',
        unified: '1F1EC-1F1EC',
        sheet: [2, 2],
        shortName: 'flag-gg'
      }, {
        name: 'Spiral Shell',
        unified: '1F41A',
        keywords: ['nature', 'sea', 'beach'],
        sheet: [11, 55],
        shortName: 'shell'
      }, {
        name: 'Skull',
        unified: '1F480',
        keywords: ['dead', 'skeleton', 'creepy', 'death'],
        sheet: [23, 46],
        shortName: 'skull'
      }, {
        name: 'Camera',
        unified: '1F4F7',
        keywords: ['gadgets', 'photography'],
        sheet: [27, 20],
        shortName: 'camera'
      }, {
        name: 'High Brightness Symbol',
        unified: '1F506',
        keywords: ['sun', 'light'],
        sheet: [27, 34],
        shortName: 'high_brightness'
      }, {
        name: 'Motor Scooter',
        unified: '1F6F5',
        keywords: ['vehicle', 'vespa', 'sasha'],
        sheet: [36, 54],
        shortName: 'motor_scooter'
      }, {
        name: 'Pie',
        unified: '1F967',
        keywords: ['food', 'dessert', 'pastry'],
        sheet: [41, 54],
        shortName: 'pie'
      }, {
        name: 'Deaf Person',
        unified: '1F9CF',
        sheet: [45, 10],
        skinVariations: [{
          unified: '1F9CF-1F3FB',
          sheet: [45, 11]
        }, {
          unified: '1F9CF-1F3FC',
          sheet: [45, 12]
        }, {
          unified: '1F9CF-1F3FD',
          sheet: [45, 13]
        }, {
          unified: '1F9CF-1F3FE',
          sheet: [45, 14]
        }, {
          unified: '1F9CF-1F3FF',
          sheet: [45, 15]
        }],
        shortName: 'deaf_person'
      }, {
        name: 'Ghana Flag',
        unified: '1F1EC-1F1ED',
        sheet: [2, 3],
        shortName: 'flag-gh'
      }, {
        name: 'Chocolate Bar',
        unified: '1F36B',
        keywords: ['food', 'snack', 'dessert', 'sweet'],
        sheet: [7, 10],
        shortName: 'chocolate_bar'
      }, {
        name: 'Snail',
        unified: '1F40C',
        keywords: ['slow', 'animal', 'shell'],
        sheet: [11, 40],
        shortName: 'snail'
      }, {
        name: 'Antenna with Bars',
        unified: '1F4F6',
        keywords: ['blue-square', 'reception', 'phone', 'internet', 'connection', 'wifi', 'bluetooth', 'bars'],
        sheet: [27, 19],
        shortName: 'signal_strength'
      }, {
        name: 'Camera with Flash',
        unified: '1F4F8',
        sheet: [27, 21],
        shortName: 'camera_with_flash'
      }, {
        name: 'Manual Wheelchair',
        unified: '1F9BD',
        sheet: [44, 5],
        shortName: 'manual_wheelchair'
      }, {
        name: 'Deaf Man',
        unified: '1F9CF-200D-2642-FE0F',
        sheet: [45, 4],
        skinVariations: [{
          unified: '1F9CF-1F3FB-200D-2642-FE0F',
          sheet: [45, 5]
        }, {
          unified: '1F9CF-1F3FC-200D-2642-FE0F',
          sheet: [45, 6]
        }, {
          unified: '1F9CF-1F3FD-200D-2642-FE0F',
          sheet: [45, 7]
        }, {
          unified: '1F9CF-1F3FE-200D-2642-FE0F',
          sheet: [45, 8]
        }, {
          unified: '1F9CF-1F3FF-200D-2642-FE0F',
          sheet: [45, 9]
        }],
        shortName: 'deaf_man'
      }, {
        name: 'Skull and Crossbones',
        unified: '2620-FE0F',
        keywords: ['poison', 'danger', 'deadly', 'scary', 'death', 'pirate', 'evil'],
        sheet: [53, 8],
        shortName: 'skull_and_crossbones'
      }, {
        name: 'Gibraltar Flag',
        unified: '1F1EC-1F1EE',
        sheet: [2, 4],
        shortName: 'flag-gi'
      }, {
        name: 'Candy',
        unified: '1F36C',
        keywords: ['snack', 'dessert', 'sweet', 'lolly'],
        sheet: [7, 11],
        shortName: 'candy'
      }, {
        name: 'Pile of Poo',
        unified: '1F4A9',
        sheet: [25, 51],
        shortNames: ['poop', 'shit'],
        shortName: 'hankey'
      }, {
        name: 'Vibration Mode',
        unified: '1F4F3',
        keywords: ['orange-square', 'phone'],
        sheet: [27, 16],
        shortName: 'vibration_mode'
      }, {
        name: 'Video Camera',
        unified: '1F4F9',
        keywords: ['film', 'record'],
        sheet: [27, 22],
        shortName: 'video_camera'
      }, {
        name: 'Butterfly',
        unified: '1F98B',
        keywords: ['animal', 'insect', 'nature', 'caterpillar'],
        sheet: [42, 29],
        shortName: 'butterfly'
      }, {
        name: 'Motorized Wheelchair',
        unified: '1F9BC',
        sheet: [44, 4],
        shortName: 'motorized_wheelchair'
      }, {
        name: 'Deaf Woman',
        unified: '1F9CF-200D-2640-FE0F',
        sheet: [44, 55],
        skinVariations: [{
          unified: '1F9CF-1F3FB-200D-2640-FE0F',
          sheet: [44, 56]
        }, {
          unified: '1F9CF-1F3FC-200D-2640-FE0F',
          sheet: [45, 0]
        }, {
          unified: '1F9CF-1F3FD-200D-2640-FE0F',
          sheet: [45, 1]
        }, {
          unified: '1F9CF-1F3FE-200D-2640-FE0F',
          sheet: [45, 2]
        }, {
          unified: '1F9CF-1F3FF-200D-2640-FE0F',
          sheet: [45, 3]
        }],
        shortName: 'deaf_woman'
      }, {
        name: 'Greenland Flag',
        unified: '1F1EC-1F1F1',
        sheet: [2, 5],
        shortName: 'flag-gl'
      }, {
        name: 'Lollipop',
        unified: '1F36D',
        keywords: ['food', 'snack', 'candy', 'sweet'],
        sheet: [7, 12],
        shortName: 'lollipop'
      }, {
        name: 'Bug',
        unified: '1F41B',
        keywords: ['animal', 'insect', 'nature', 'worm'],
        sheet: [11, 56],
        shortName: 'bug'
      }, {
        name: 'Mobile Phone off',
        unified: '1F4F4',
        keywords: ['mute', 'orange-square', 'silence', 'quiet'],
        sheet: [27, 17],
        shortName: 'mobile_phone_off'
      }, {
        name: 'Videocassette',
        unified: '1F4FC',
        keywords: ['record', 'video', 'oldschool', '90s', '80s'],
        sheet: [27, 25],
        shortName: 'vhs'
      }, {
        name: 'Person Bowing Deeply',
        unified: '1F647',
        sheet: [32, 38],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F647-1F3FB',
          sheet: [32, 39],
          hidden: ['facebook']
        }, {
          unified: '1F647-1F3FC',
          sheet: [32, 40],
          hidden: ['facebook']
        }, {
          unified: '1F647-1F3FD',
          sheet: [32, 41],
          hidden: ['facebook']
        }, {
          unified: '1F647-1F3FE',
          sheet: [32, 42],
          hidden: ['facebook']
        }, {
          unified: '1F647-1F3FF',
          sheet: [32, 43],
          hidden: ['facebook']
        }],
        shortName: 'bow',
        obsoletedBy: '1F647-200D-2642-FE0F'
      }, {
        name: 'Auto Rickshaw',
        unified: '1F6FA',
        sheet: [37, 2],
        shortName: 'auto_rickshaw'
      }, {
        name: 'Clown Face',
        unified: '1F921',
        keywords: ['face'],
        sheet: [38, 18],
        shortName: 'clown_face'
      }, {
        name: 'Gambia Flag',
        unified: '1F1EC-1F1F2',
        sheet: [2, 6],
        shortName: 'flag-gm'
      }, {
        name: 'Custard',
        unified: '1F36E',
        keywords: ['dessert', 'food'],
        sheet: [7, 13],
        shortName: 'custard'
      }, {
        name: 'Ant',
        unified: '1F41C',
        keywords: ['animal', 'insect', 'nature', 'bug'],
        sheet: [12, 0],
        shortName: 'ant'
      }, {
        name: 'Japanese Ogre',
        unified: '1F479',
        keywords: ['monster', 'red', 'mask', 'halloween', 'scary', 'creepy', 'devil', 'demon', 'japanese', 'ogre'],
        sheet: [23, 34],
        shortName: 'japanese_ogre'
      }, {
        name: 'Left-Pointing Magnifying Glass',
        unified: '1F50D',
        keywords: ['search', 'zoom', 'find', 'detective'],
        sheet: [27, 41],
        shortName: 'mag'
      }, {
        name: 'Man Bowing',
        unified: '1F647-200D-2642-FE0F',
        obsoletes: '1F647',
        sheet: [32, 32],
        skinVariations: [{
          unified: '1F647-1F3FB-200D-2642-FE0F',
          sheet: [32, 33]
        }, {
          unified: '1F647-1F3FC-200D-2642-FE0F',
          sheet: [32, 34]
        }, {
          unified: '1F647-1F3FD-200D-2642-FE0F',
          sheet: [32, 35]
        }, {
          unified: '1F647-1F3FE-200D-2642-FE0F',
          sheet: [32, 36]
        }, {
          unified: '1F647-1F3FF-200D-2642-FE0F',
          sheet: [32, 37]
        }],
        shortName: 'man-bowing'
      }, {
        name: 'Bicycle',
        unified: '1F6B2',
        keywords: ['sports', 'bicycle', 'exercise', 'hipster'],
        sheet: [35, 9],
        shortName: 'bike'
      }, {
        name: 'Female Sign',
        unified: '2640-FE0F',
        sheet: [53, 18],
        hidden: ['apple'],
        shortName: 'female_sign'
      }, {
        name: 'Guinea Flag',
        unified: '1F1EC-1F1F3',
        sheet: [2, 7],
        shortName: 'flag-gn'
      }, {
        name: 'Honey Pot',
        unified: '1F36F',
        keywords: ['bees', 'sweet', 'kitchen'],
        sheet: [7, 14],
        shortName: 'honey_pot'
      }, {
        name: 'Honeybee',
        unified: '1F41D',
        sheet: [12, 1],
        shortNames: ['honeybee'],
        shortName: 'bee'
      }, {
        name: 'Japanese Goblin',
        unified: '1F47A',
        keywords: ['red', 'evil', 'mask', 'monster', 'scary', 'creepy', 'japanese', 'goblin'],
        sheet: [23, 35],
        shortName: 'japanese_goblin'
      }, {
        name: 'Right-Pointing Magnifying Glass',
        unified: '1F50E',
        keywords: ['search', 'zoom', 'find', 'detective'],
        sheet: [27, 42],
        shortName: 'mag_right'
      }, {
        name: 'Woman Bowing',
        unified: '1F647-200D-2640-FE0F',
        sheet: [32, 26],
        skinVariations: [{
          unified: '1F647-1F3FB-200D-2640-FE0F',
          sheet: [32, 27]
        }, {
          unified: '1F647-1F3FC-200D-2640-FE0F',
          sheet: [32, 28]
        }, {
          unified: '1F647-1F3FD-200D-2640-FE0F',
          sheet: [32, 29]
        }, {
          unified: '1F647-1F3FE-200D-2640-FE0F',
          sheet: [32, 30]
        }, {
          unified: '1F647-1F3FF-200D-2640-FE0F',
          sheet: [32, 31]
        }],
        shortName: 'woman-bowing'
      }, {
        name: 'Scooter',
        unified: '1F6F4',
        sheet: [36, 53],
        shortName: 'scooter'
      }, {
        name: 'Male Sign',
        unified: '2642-FE0F',
        sheet: [53, 19],
        hidden: ['apple'],
        shortName: 'male_sign'
      }, {
        name: 'Guadeloupe Flag',
        unified: '1F1EC-1F1F5',
        sheet: [2, 8],
        shortName: 'flag-gp'
      }, {
        name: 'Baby Bottle',
        unified: '1F37C',
        keywords: ['food', 'container', 'milk'],
        sheet: [7, 27],
        shortName: 'baby_bottle'
      }, {
        name: 'Lady Beetle',
        unified: '1F41E',
        keywords: ['animal', 'insect', 'nature', 'ladybug'],
        sheet: [12, 2],
        shortName: 'beetle'
      }, {
        name: 'Ghost',
        unified: '1F47B',
        keywords: ['halloween', 'spooky', 'scary'],
        sheet: [23, 36],
        shortName: 'ghost'
      }, {
        name: 'Candle',
        unified: '1F56F-FE0F',
        keywords: ['fire', 'wax'],
        sheet: [29, 6],
        shortName: 'candle'
      }, {
        name: 'Skateboard',
        unified: '1F6F9',
        keywords: ['board'],
        sheet: [37, 1],
        shortName: 'skateboard'
      }, {
        name: 'Face Palm',
        unified: '1F926',
        sheet: [38, 35],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F926-1F3FB',
          sheet: [38, 36],
          hidden: ['facebook']
        }, {
          unified: '1F926-1F3FC',
          sheet: [38, 37],
          hidden: ['facebook']
        }, {
          unified: '1F926-1F3FD',
          sheet: [38, 38],
          hidden: ['facebook']
        }, {
          unified: '1F926-1F3FE',
          sheet: [38, 39],
          hidden: ['facebook']
        }, {
          unified: '1F926-1F3FF',
          sheet: [38, 40],
          hidden: ['facebook']
        }],
        shortName: 'face_palm'
      }, {
        name: 'Medical Symbol',
        unified: '2695-FE0F',
        sheet: [53, 44],
        hidden: ['apple'],
        shortNames: ['staff_of_aesculapius'],
        shortName: 'medical_symbol'
      }, {
        name: 'Equatorial Guinea Flag',
        unified: '1F1EC-1F1F6',
        sheet: [2, 9],
        shortName: 'flag-gq'
      }, {
        name: 'Extraterrestrial Alien',
        unified: '1F47D',
        keywords: ['UFO', 'paul', 'weird', 'outer_space'],
        sheet: [23, 43],
        shortName: 'alien'
      }, {
        name: 'Electric Light Bulb',
        unified: '1F4A1',
        keywords: ['light', 'electricity', 'idea'],
        sheet: [25, 43],
        shortName: 'bulb'
      }, {
        name: 'Bus Stop',
        unified: '1F68F',
        keywords: ['transportation', 'wait'],
        sheet: [34, 14],
        shortName: 'busstop'
      }, {
        name: 'Man Facepalming',
        unified: '1F926-200D-2642-FE0F',
        sheet: [38, 29],
        skinVariations: [{
          unified: '1F926-1F3FB-200D-2642-FE0F',
          sheet: [38, 30]
        }, {
          unified: '1F926-1F3FC-200D-2642-FE0F',
          sheet: [38, 31]
        }, {
          unified: '1F926-1F3FD-200D-2642-FE0F',
          sheet: [38, 32]
        }, {
          unified: '1F926-1F3FE-200D-2642-FE0F',
          sheet: [38, 33]
        }, {
          unified: '1F926-1F3FF-200D-2642-FE0F',
          sheet: [38, 34]
        }],
        shortName: 'man-facepalming'
      }, {
        name: 'Glass of Milk',
        unified: '1F95B',
        sheet: [41, 42],
        shortName: 'glass_of_milk'
      }, {
        name: 'Cricket',
        unified: '1F997',
        keywords: ['sports'],
        sheet: [42, 41],
        shortName: 'cricket'
      }, {
        name: 'Infinity',
        unified: '267E-FE0F',
        keywords: ['forever'],
        sheet: [53, 39],
        shortName: 'infinity'
      }, {
        name: 'Greece Flag',
        unified: '1F1EC-1F1F7',
        sheet: [2, 10],
        shortName: 'flag-gr'
      }, {
        name: 'Alien Monster',
        unified: '1F47E',
        keywords: ['game', 'arcade', 'play'],
        sheet: [23, 44],
        shortName: 'space_invader'
      }, {
        name: 'Electric Torch',
        unified: '1F526',
        keywords: ['dark', 'camping', 'sight', 'night'],
        sheet: [28, 9],
        shortName: 'flashlight'
      }, {
        name: 'Spider',
        unified: '1F577-FE0F',
        keywords: ['animal', 'arachnid'],
        sheet: [29, 34],
        shortName: 'spider'
      }, {
        name: 'Motorway',
        unified: '1F6E3-FE0F',
        keywords: ['road', 'cupertino', 'interstate', 'highway'],
        sheet: [36, 45],
        shortName: 'motorway'
      }, {
        name: 'Woman Facepalming',
        unified: '1F926-200D-2640-FE0F',
        sheet: [38, 23],
        skinVariations: [{
          unified: '1F926-1F3FB-200D-2640-FE0F',
          sheet: [38, 24]
        }, {
          unified: '1F926-1F3FC-200D-2640-FE0F',
          sheet: [38, 25]
        }, {
          unified: '1F926-1F3FD-200D-2640-FE0F',
          sheet: [38, 26]
        }, {
          unified: '1F926-1F3FE-200D-2640-FE0F',
          sheet: [38, 27]
        }, {
          unified: '1F926-1F3FF-200D-2640-FE0F',
          sheet: [38, 28]
        }],
        shortName: 'woman-facepalming'
      }, {
        name: 'Hot Beverage',
        unified: '2615',
        keywords: ['beverage', 'caffeine', 'latte', 'espresso'],
        sheet: [53, 0],
        shortName: 'coffee'
      }, {
        name: 'Black Universal Recycling Symbol',
        unified: '267B-FE0F',
        keywords: ['arrow', 'environment', 'garbage', 'trash'],
        sheet: [53, 38],
        shortName: 'recycle'
      }, {
        name: 'South Georgia & South Sandwich Islands Flag',
        unified: '1F1EC-1F1F8',
        sheet: [2, 11],
        shortName: 'flag-gs'
      }, {
        name: 'Teacup Without Handle',
        unified: '1F375',
        keywords: ['drink', 'bowl', 'breakfast', 'green', 'british'],
        sheet: [7, 20],
        shortName: 'tea'
      }, {
        name: 'Izakaya Lantern',
        unified: '1F3EE',
        keywords: ['light', 'paper', 'halloween', 'spooky'],
        sheet: [11, 8],
        shortNames: ['lantern'],
        shortName: 'izakaya_lantern'
      }, {
        name: 'Spider Web',
        unified: '1F578-FE0F',
        keywords: ['animal', 'insect', 'arachnid', 'silk'],
        sheet: [29, 35],
        shortName: 'spider_web'
      }, {
        name: 'Railway Track',
        unified: '1F6E4-FE0F',
        keywords: ['train', 'transportation'],
        sheet: [36, 46],
        shortName: 'railway_track'
      }, {
        name: 'Robot Face',
        unified: '1F916',
        sheet: [37, 29],
        shortName: 'robot_face'
      }, {
        name: 'Shrug',
        unified: '1F937',
        sheet: [39, 47],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F937-1F3FB',
          sheet: [39, 48],
          hidden: ['facebook']
        }, {
          unified: '1F937-1F3FC',
          sheet: [39, 49],
          hidden: ['facebook']
        }, {
          unified: '1F937-1F3FD',
          sheet: [39, 50],
          hidden: ['facebook']
        }, {
          unified: '1F937-1F3FE',
          sheet: [39, 51],
          hidden: ['facebook']
        }, {
          unified: '1F937-1F3FF',
          sheet: [39, 52],
          hidden: ['facebook']
        }],
        shortName: 'shrug'
      }, {
        name: 'Fleur De Lis',
        unified: '269C-FE0F',
        keywords: ['decorative', 'scout'],
        sheet: [53, 49],
        shortName: 'fleur_de_lis'
      }, {
        name: 'Guatemala Flag',
        unified: '1F1EC-1F1F9',
        sheet: [2, 12],
        shortName: 'flag-gt'
      }, {
        name: 'Sake Bottle and Cup',
        unified: '1F376',
        keywords: ['wine', 'drink', 'drunk', 'beverage', 'japanese', 'alcohol', 'booze'],
        sheet: [7, 21],
        shortName: 'sake'
      }, {
        name: 'Trident Emblem',
        unified: '1F531',
        keywords: ['weapon', 'spear'],
        sheet: [28, 20],
        shortName: 'trident'
      }, {
        name: 'Smiling Cat Face with Open Mouth',
        unified: '1F63A',
        keywords: ['animal', 'cats', 'happy', 'smile'],
        sheet: [31, 36],
        shortName: 'smiley_cat'
      }, {
        name: 'Oil Drum',
        unified: '1F6E2-FE0F',
        keywords: ['barrell'],
        sheet: [36, 44],
        shortName: 'oil_drum'
      }, {
        name: 'Man Shrugging',
        unified: '1F937-200D-2642-FE0F',
        sheet: [39, 41],
        skinVariations: [{
          unified: '1F937-1F3FB-200D-2642-FE0F',
          sheet: [39, 42]
        }, {
          unified: '1F937-1F3FC-200D-2642-FE0F',
          sheet: [39, 43]
        }, {
          unified: '1F937-1F3FD-200D-2642-FE0F',
          sheet: [39, 44]
        }, {
          unified: '1F937-1F3FE-200D-2642-FE0F',
          sheet: [39, 45]
        }, {
          unified: '1F937-1F3FF-200D-2642-FE0F',
          sheet: [39, 46]
        }],
        shortName: 'man-shrugging'
      }, {
        name: 'Scorpion',
        unified: '1F982',
        keywords: ['animal', 'arachnid'],
        sheet: [42, 20],
        shortName: 'scorpion'
      }, {
        name: 'Diya Lamp',
        unified: '1FA94',
        sheet: [52, 8],
        shortName: 'diya_lamp'
      }, {
        name: 'Guam Flag',
        unified: '1F1EC-1F1FA',
        sheet: [2, 13],
        shortName: 'flag-gu'
      }, {
        name: 'Bottle with Popping Cork',
        unified: '1F37E',
        keywords: ['drink', 'wine', 'bottle', 'celebration'],
        sheet: [7, 29],
        shortName: 'champagne'
      }, {
        name: 'Notebook with Decorative Cover',
        unified: '1F4D4',
        keywords: ['classroom', 'notes', 'record', 'paper', 'study'],
        sheet: [26, 42],
        shortName: 'notebook_with_decorative_cover'
      }, {
        name: 'Name Badge',
        unified: '1F4DB',
        keywords: ['fire', 'forbid'],
        sheet: [26, 49],
        shortName: 'name_badge'
      }, {
        name: 'Grinning Cat Face with Smiling Eyes',
        unified: '1F638',
        keywords: ['animal', 'cats', 'smile'],
        sheet: [31, 34],
        shortName: 'smile_cat'
      }, {
        name: 'Woman Shrugging',
        unified: '1F937-200D-2640-FE0F',
        sheet: [39, 35],
        skinVariations: [{
          unified: '1F937-1F3FB-200D-2640-FE0F',
          sheet: [39, 36]
        }, {
          unified: '1F937-1F3FC-200D-2640-FE0F',
          sheet: [39, 37]
        }, {
          unified: '1F937-1F3FD-200D-2640-FE0F',
          sheet: [39, 38]
        }, {
          unified: '1F937-1F3FE-200D-2640-FE0F',
          sheet: [39, 39]
        }, {
          unified: '1F937-1F3FF-200D-2640-FE0F',
          sheet: [39, 40]
        }],
        shortName: 'woman-shrugging'
      }, {
        name: 'Mosquito',
        unified: '1F99F',
        keywords: ['animal', 'nature', 'insect', 'malaria'],
        sheet: [42, 49],
        shortName: 'mosquito'
      }, {
        name: 'Fuel Pump',
        unified: '26FD',
        keywords: ['gas station', 'petroleum'],
        sheet: [54, 38],
        shortName: 'fuelpump'
      }, {
        name: 'Guinea-Bissau Flag',
        unified: '1F1EC-1F1FC',
        sheet: [2, 14],
        shortName: 'flag-gw'
      }, {
        name: 'Wine Glass',
        unified: '1F377',
        keywords: ['drink', 'beverage', 'drunk', 'alcohol', 'booze'],
        sheet: [7, 22],
        shortName: 'wine_glass'
      }, {
        name: 'Closed Book',
        unified: '1F4D5',
        keywords: ['read', 'library', 'knowledge', 'textbook', 'learn'],
        sheet: [26, 43],
        shortName: 'closed_book'
      }, {
        name: 'Japanese Symbol for Beginner',
        unified: '1F530',
        keywords: ['badge', 'shield'],
        sheet: [28, 19],
        shortName: 'beginner'
      }, {
        name: 'Cat Face with Tears of Joy',
        unified: '1F639',
        keywords: ['animal', 'cats', 'haha', 'happy', 'tears'],
        sheet: [31, 35],
        shortName: 'joy_cat'
      }, {
        name: 'Police Cars Revolving Light',
        unified: '1F6A8',
        keywords: ['police', 'ambulance', '911', 'emergency', 'alert', 'error', 'pinged', 'law', 'legal'],
        sheet: [34, 56],
        shortName: 'rotating_light'
      }, {
        name: 'Microbe',
        unified: '1F9A0',
        keywords: ['amoeba', 'bacteria', 'germs'],
        sheet: [42, 50],
        shortName: 'microbe'
      }, {
        name: 'Health Worker',
        unified: '1F9D1-200D-2695-FE0F',
        sheet: [47, 49],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-2695-FE0F',
          sheet: [47, 50],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-2695-FE0F',
          sheet: [47, 51],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-2695-FE0F',
          sheet: [47, 52],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-2695-FE0F',
          sheet: [47, 53],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-2695-FE0F',
          sheet: [47, 54],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'health_worker'
      }, {
        name: 'Guyana Flag',
        unified: '1F1EC-1F1FE',
        sheet: [2, 15],
        shortName: 'flag-gy'
      }, {
        name: 'Cocktail Glass',
        unified: '1F378',
        keywords: ['drink', 'drunk', 'alcohol', 'beverage', 'booze', 'mojito'],
        sheet: [7, 23],
        shortName: 'cocktail'
      }, {
        name: 'Male Doctor',
        unified: '1F468-200D-2695-FE0F',
        sheet: [17, 2],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-2695-FE0F',
          sheet: [17, 3]
        }, {
          unified: '1F468-1F3FC-200D-2695-FE0F',
          sheet: [17, 4]
        }, {
          unified: '1F468-1F3FD-200D-2695-FE0F',
          sheet: [17, 5]
        }, {
          unified: '1F468-1F3FE-200D-2695-FE0F',
          sheet: [17, 6]
        }, {
          unified: '1F468-1F3FF-200D-2695-FE0F',
          sheet: [17, 7]
        }],
        shortName: 'male-doctor'
      }, {
        name: 'Bouquet',
        unified: '1F490',
        keywords: ['flowers', 'nature', 'spring'],
        sheet: [25, 26],
        shortName: 'bouquet'
      }, {
        name: 'Open Book',
        unified: '1F4D6',
        sheet: [26, 44],
        shortNames: ['open_book'],
        shortName: 'book'
      }, {
        name: 'Smiling Cat Face with Heart-Shaped Eyes',
        unified: '1F63B',
        keywords: ['animal', 'love', 'like', 'affection', 'cats', 'valentines', 'heart'],
        sheet: [31, 37],
        shortName: 'heart_eyes_cat'
      }, {
        name: 'Horizontal Traffic Light',
        unified: '1F6A5',
        keywords: ['transportation', 'signal'],
        sheet: [34, 53],
        shortName: 'traffic_light'
      }, {
        name: 'Heavy Large Circle',
        unified: '2B55',
        keywords: ['circle', 'round'],
        sheet: [55, 43],
        shortName: 'o'
      }, {
        name: 'Hong Kong Sar China Flag',
        unified: '1F1ED-1F1F0',
        sheet: [2, 16],
        shortName: 'flag-hk'
      }, {
        name: 'Cherry Blossom',
        unified: '1F338',
        keywords: ['nature', 'plant', 'spring', 'flower'],
        sheet: [6, 16],
        shortName: 'cherry_blossom'
      }, {
        name: 'Tropical Drink',
        unified: '1F379',
        keywords: ['beverage', 'cocktail', 'summer', 'beach', 'alcohol', 'booze', 'mojito'],
        sheet: [7, 24],
        shortName: 'tropical_drink'
      }, {
        name: 'Female Doctor',
        unified: '1F469-200D-2695-FE0F',
        sheet: [19, 44],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-2695-FE0F',
          sheet: [19, 45]
        }, {
          unified: '1F469-1F3FC-200D-2695-FE0F',
          sheet: [19, 46]
        }, {
          unified: '1F469-1F3FD-200D-2695-FE0F',
          sheet: [19, 47]
        }, {
          unified: '1F469-1F3FE-200D-2695-FE0F',
          sheet: [19, 48]
        }, {
          unified: '1F469-1F3FF-200D-2695-FE0F',
          sheet: [19, 49]
        }],
        shortName: 'female-doctor'
      }, {
        name: 'Green Book',
        unified: '1F4D7',
        keywords: ['read', 'library', 'knowledge', 'study'],
        sheet: [26, 45],
        shortName: 'green_book'
      }, {
        name: 'Cat Face with Wry Smile',
        unified: '1F63C',
        keywords: ['animal', 'cats', 'smirk'],
        sheet: [31, 38],
        shortName: 'smirk_cat'
      }, {
        name: 'Vertical Traffic Light',
        unified: '1F6A6',
        keywords: ['transportation', 'driving'],
        sheet: [34, 54],
        shortName: 'vertical_traffic_light'
      }, {
        name: 'White Heavy Check Mark',
        unified: '2705',
        keywords: ['green-square', 'ok', 'agree', 'vote', 'election', 'answer', 'tick'],
        sheet: [54, 40],
        shortName: 'white_check_mark'
      }, {
        name: 'Heard & Mcdonald Islands Flag',
        unified: '1F1ED-1F1F2',
        sheet: [2, 17],
        shortName: 'flag-hm'
      }, {
        name: 'Beer Mug',
        unified: '1F37A',
        keywords: ['relax', 'beverage', 'drink', 'drunk', 'party', 'pub', 'summer', 'alcohol', 'booze'],
        sheet: [7, 25],
        shortName: 'beer'
      }, {
        name: 'White Flower',
        unified: '1F4AE',
        keywords: ['japanese', 'spring'],
        sheet: [26, 4],
        shortName: 'white_flower'
      }, {
        name: 'Blue Book',
        unified: '1F4D8',
        keywords: ['read', 'library', 'knowledge', 'learn', 'study'],
        sheet: [26, 46],
        shortName: 'blue_book'
      }, {
        name: 'Kissing Cat Face with Closed Eyes',
        unified: '1F63D',
        keywords: ['animal', 'cats', 'kiss'],
        sheet: [31, 39],
        shortName: 'kissing_cat'
      }, {
        name: 'Octagonal Sign',
        unified: '1F6D1',
        sheet: [36, 39],
        shortName: 'octagonal_sign'
      }, {
        name: 'Student',
        unified: '1F9D1-200D-1F393',
        sheet: [45, 29],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F393',
          sheet: [45, 30],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F393',
          sheet: [45, 31],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F393',
          sheet: [45, 32],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F393',
          sheet: [45, 33],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F393',
          sheet: [45, 34],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'student'
      }, {
        name: 'Ballot Box with Check',
        unified: '2611-FE0F',
        keywords: ['ok', 'agree', 'confirm', 'black-square', 'vote', 'election', 'yes', 'tick'],
        sheet: [52, 55],
        shortName: 'ballot_box_with_check'
      }, {
        name: 'Honduras Flag',
        unified: '1F1ED-1F1F3',
        sheet: [2, 18],
        shortName: 'flag-hn'
      }, {
        name: 'Clinking Beer Mugs',
        unified: '1F37B',
        keywords: ['relax', 'beverage', 'drink', 'drunk', 'party', 'pub', 'summer', 'alcohol', 'booze'],
        sheet: [7, 26],
        shortName: 'beers'
      }, {
        name: 'Rosette',
        unified: '1F3F5-FE0F',
        keywords: ['flower', 'decoration', 'military'],
        sheet: [11, 18],
        shortName: 'rosette'
      }, {
        name: 'Male Student',
        unified: '1F468-200D-1F393',
        sheet: [14, 50],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F393',
          sheet: [14, 51]
        }, {
          unified: '1F468-1F3FC-200D-1F393',
          sheet: [14, 52]
        }, {
          unified: '1F468-1F3FD-200D-1F393',
          sheet: [14, 53]
        }, {
          unified: '1F468-1F3FE-200D-1F393',
          sheet: [14, 54]
        }, {
          unified: '1F468-1F3FF-200D-1F393',
          sheet: [14, 55]
        }],
        shortName: 'male-student'
      }, {
        name: 'Orange Book',
        unified: '1F4D9',
        keywords: ['read', 'library', 'knowledge', 'textbook', 'study'],
        sheet: [26, 47],
        shortName: 'orange_book'
      }, {
        name: 'Weary Cat Face',
        unified: '1F640',
        keywords: ['animal', 'cats', 'munch', 'scared', 'scream'],
        sheet: [31, 42],
        shortName: 'scream_cat'
      }, {
        name: 'Construction Sign',
        unified: '1F6A7',
        keywords: ['wip', 'progress', 'caution', 'warning'],
        sheet: [34, 55],
        shortName: 'construction'
      }, {
        name: 'Heavy Check Mark',
        unified: '2714-FE0F',
        keywords: ['ok', 'nike', 'answer', 'yes', 'tick'],
        sheet: [55, 12],
        shortName: 'heavy_check_mark'
      }, {
        name: 'Croatia Flag',
        unified: '1F1ED-1F1F7',
        sheet: [2, 19],
        shortName: 'flag-hr'
      }, {
        name: 'Rose',
        unified: '1F339',
        keywords: ['flowers', 'valentines', 'love', 'spring'],
        sheet: [6, 17],
        shortName: 'rose'
      }, {
        name: 'Female Student',
        unified: '1F469-200D-1F393',
        sheet: [17, 40],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F393',
          sheet: [17, 41]
        }, {
          unified: '1F469-1F3FC-200D-1F393',
          sheet: [17, 42]
        }, {
          unified: '1F469-1F3FD-200D-1F393',
          sheet: [17, 43]
        }, {
          unified: '1F469-1F3FE-200D-1F393',
          sheet: [17, 44]
        }, {
          unified: '1F469-1F3FF-200D-1F393',
          sheet: [17, 45]
        }],
        shortName: 'female-student'
      }, {
        name: 'Books',
        unified: '1F4DA',
        keywords: ['literature', 'library', 'study'],
        sheet: [26, 48],
        shortName: 'books'
      }, {
        name: 'Crying Cat Face',
        unified: '1F63F',
        keywords: ['animal', 'tears', 'weep', 'sad', 'cats', 'upset', 'cry'],
        sheet: [31, 41],
        shortName: 'crying_cat_face'
      }, {
        name: 'Clinking Glasses',
        unified: '1F942',
        keywords: ['beverage', 'drink', 'party', 'alcohol', 'celebrate', 'cheers', 'wine', 'champagne', 'toast'],
        sheet: [41, 18],
        shortName: 'clinking_glasses'
      }, {
        name: 'Anchor',
        unified: '2693',
        keywords: ['ship', 'ferry', 'sea', 'boat'],
        sheet: [53, 42],
        shortName: 'anchor'
      }, {
        name: 'Heavy Multiplication X',
        unified: '2716-FE0F',
        keywords: ['math', 'calculation'],
        sheet: [55, 13],
        shortName: 'heavy_multiplication_x'
      }, {
        name: 'Haiti Flag',
        unified: '1F1ED-1F1F9',
        sheet: [2, 20],
        shortName: 'flag-ht'
      }, {
        name: 'Notebook',
        unified: '1F4D3',
        keywords: ['stationery', 'record', 'notes', 'paper', 'study'],
        sheet: [26, 41],
        shortName: 'notebook'
      }, {
        name: 'Pouting Cat Face',
        unified: '1F63E',
        keywords: ['animal', 'cats'],
        sheet: [31, 40],
        shortName: 'pouting_cat'
      }, {
        name: 'Wilted Flower',
        unified: '1F940',
        keywords: ['plant', 'nature', 'flower'],
        sheet: [41, 16],
        shortName: 'wilted_flower'
      }, {
        name: 'Tumbler Glass',
        unified: '1F943',
        keywords: ['drink', 'beverage', 'drunk', 'alcohol', 'liquor', 'booze', 'bourbon', 'scotch', 'whisky', 'glass', 'shot'],
        sheet: [41, 19],
        shortName: 'tumbler_glass'
      }, {
        name: 'Teacher',
        unified: '1F9D1-200D-1F3EB',
        sheet: [45, 47],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F3EB',
          sheet: [45, 48],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F3EB',
          sheet: [45, 49],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F3EB',
          sheet: [45, 50],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F3EB',
          sheet: [45, 51],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F3EB',
          sheet: [45, 52],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'teacher'
      }, {
        name: 'Sailboat',
        unified: '26F5',
        sheet: [54, 16],
        shortNames: ['sailboat'],
        shortName: 'boat'
      }, {
        name: 'Cross Mark',
        unified: '274C',
        keywords: ['no', 'delete', 'remove', 'cancel', 'red'],
        sheet: [55, 21],
        shortName: 'x'
      }, {
        name: 'Hungary Flag',
        unified: '1F1ED-1F1FA',
        sheet: [2, 21],
        shortName: 'flag-hu'
      }, {
        name: 'Hibiscus',
        unified: '1F33A',
        keywords: ['plant', 'vegetable', 'flowers', 'beach'],
        sheet: [6, 18],
        shortName: 'hibiscus'
      }, {
        name: 'Male Teacher',
        unified: '1F468-200D-1F3EB',
        sheet: [15, 11],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F3EB',
          sheet: [15, 12]
        }, {
          unified: '1F468-1F3FC-200D-1F3EB',
          sheet: [15, 13]
        }, {
          unified: '1F468-1F3FD-200D-1F3EB',
          sheet: [15, 14]
        }, {
          unified: '1F468-1F3FE-200D-1F3EB',
          sheet: [15, 15]
        }, {
          unified: '1F468-1F3FF-200D-1F3EB',
          sheet: [15, 16]
        }],
        shortName: 'male-teacher'
      }, {
        name: 'Ledger',
        unified: '1F4D2',
        keywords: ['notes', 'paper'],
        sheet: [26, 40],
        shortName: 'ledger'
      }, {
        name: 'See-No-Evil Monkey',
        unified: '1F648',
        keywords: ['monkey', 'animal', 'nature', 'haha'],
        sheet: [32, 44],
        shortName: 'see_no_evil'
      }, {
        name: 'Canoe',
        unified: '1F6F6',
        keywords: ['boat', 'paddle', 'water', 'ship'],
        sheet: [36, 55],
        shortName: 'canoe'
      }, {
        name: 'Cup with Straw',
        unified: '1F964',
        keywords: ['drink', 'soda'],
        sheet: [41, 51],
        shortName: 'cup_with_straw'
      }, {
        name: 'Negative Squared Cross Mark',
        unified: '274E',
        keywords: ['x', 'green-square', 'no', 'deny'],
        sheet: [55, 22],
        shortName: 'negative_squared_cross_mark'
      }, {
        name: 'Canary Islands Flag',
        unified: '1F1EE-1F1E8',
        sheet: [2, 22],
        shortName: 'flag-ic'
      }, {
        name: 'Sunflower',
        unified: '1F33B',
        keywords: ['nature', 'plant', 'fall'],
        sheet: [6, 19],
        shortName: 'sunflower'
      }, {
        name: 'Female Teacher',
        unified: '1F469-200D-1F3EB',
        sheet: [18, 1],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F3EB',
          sheet: [18, 2]
        }, {
          unified: '1F469-1F3FC-200D-1F3EB',
          sheet: [18, 3]
        }, {
          unified: '1F469-1F3FD-200D-1F3EB',
          sheet: [18, 4]
        }, {
          unified: '1F469-1F3FE-200D-1F3EB',
          sheet: [18, 5]
        }, {
          unified: '1F469-1F3FF-200D-1F3EB',
          sheet: [18, 6]
        }],
        shortName: 'female-teacher'
      }, {
        name: 'Page with Curl',
        unified: '1F4C3',
        keywords: ['documents', 'office', 'paper'],
        sheet: [26, 25],
        shortName: 'page_with_curl'
      }, {
        name: 'Hear-No-Evil Monkey',
        unified: '1F649',
        keywords: ['animal', 'monkey', 'nature'],
        sheet: [32, 45],
        shortName: 'hear_no_evil'
      }, {
        name: 'Speedboat',
        unified: '1F6A4',
        keywords: ['ship', 'transportation', 'vehicle', 'summer'],
        sheet: [34, 52],
        shortName: 'speedboat'
      }, {
        name: 'Beverage Box',
        unified: '1F9C3',
        sheet: [44, 11],
        shortName: 'beverage_box'
      }, {
        name: 'Heavy Plus Sign',
        unified: '2795',
        keywords: ['math', 'calculation', 'addition', 'more', 'increase'],
        sheet: [55, 29],
        shortName: 'heavy_plus_sign'
      }, {
        name: 'Indonesia Flag',
        unified: '1F1EE-1F1E9',
        sheet: [2, 23],
        shortName: 'flag-id'
      }, {
        name: 'Blossom',
        unified: '1F33C',
        keywords: ['nature', 'flowers', 'yellow'],
        sheet: [6, 20],
        shortName: 'blossom'
      }, {
        name: 'Scroll',
        unified: '1F4DC',
        keywords: ['documents', 'ancient', 'history', 'paper'],
        sheet: [26, 50],
        shortName: 'scroll'
      }, {
        name: 'Speak-No-Evil Monkey',
        unified: '1F64A',
        keywords: ['monkey', 'animal', 'nature', 'omg'],
        sheet: [32, 46],
        shortName: 'speak_no_evil'
      }, {
        name: 'Passenger Ship',
        unified: '1F6F3-FE0F',
        keywords: ['yacht', 'cruise', 'ferry'],
        sheet: [36, 52],
        shortName: 'passenger_ship'
      }, {
        name: 'Mate Drink',
        unified: '1F9C9',
        sheet: [44, 17],
        shortName: 'mate_drink'
      }, {
        name: 'Judge',
        unified: '1F9D1-200D-2696-FE0F',
        sheet: [47, 55],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-2696-FE0F',
          sheet: [47, 56],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-2696-FE0F',
          sheet: [48, 0],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-2696-FE0F',
          sheet: [48, 1],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-2696-FE0F',
          sheet: [48, 2],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-2696-FE0F',
          sheet: [48, 3],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'judge'
      }, {
        name: 'Heavy Minus Sign',
        unified: '2796',
        keywords: ['math', 'calculation', 'subtract', 'less'],
        sheet: [55, 30],
        shortName: 'heavy_minus_sign'
      }, {
        name: 'Ireland Flag',
        unified: '1F1EE-1F1EA',
        sheet: [2, 24],
        shortName: 'flag-ie'
      }, {
        name: 'Tulip',
        unified: '1F337',
        keywords: ['flowers', 'plant', 'nature', 'summer', 'spring'],
        sheet: [6, 15],
        shortName: 'tulip'
      }, {
        name: 'Male Judge',
        unified: '1F468-200D-2696-FE0F',
        sheet: [17, 8],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-2696-FE0F',
          sheet: [17, 9]
        }, {
          unified: '1F468-1F3FC-200D-2696-FE0F',
          sheet: [17, 10]
        }, {
          unified: '1F468-1F3FD-200D-2696-FE0F',
          sheet: [17, 11]
        }, {
          unified: '1F468-1F3FE-200D-2696-FE0F',
          sheet: [17, 12]
        }, {
          unified: '1F468-1F3FF-200D-2696-FE0F',
          sheet: [17, 13]
        }],
        shortName: 'male-judge'
      }, {
        name: 'Kiss Mark',
        unified: '1F48B',
        keywords: ['face', 'lips', 'love', 'like', 'affection', 'valentines'],
        sheet: [25, 21],
        shortName: 'kiss'
      }, {
        name: 'Page Facing Up',
        unified: '1F4C4',
        keywords: ['documents', 'office', 'paper', 'information'],
        sheet: [26, 26],
        shortName: 'page_facing_up'
      }, {
        name: 'Ice Cube',
        unified: '1F9CA',
        sheet: [44, 18],
        shortName: 'ice_cube'
      }, {
        name: 'Ferry',
        unified: '26F4-FE0F',
        keywords: ['boat', 'ship', 'yacht'],
        sheet: [54, 15],
        shortName: 'ferry'
      }, {
        name: 'Heavy Division Sign',
        unified: '2797',
        keywords: ['divide', 'math', 'calculation'],
        sheet: [55, 31],
        shortName: 'heavy_division_sign'
      }, {
        name: 'Israel Flag',
        unified: '1F1EE-1F1F1',
        sheet: [2, 25],
        shortName: 'flag-il'
      }, {
        name: 'Seedling',
        unified: '1F331',
        keywords: ['plant', 'nature', 'grass', 'lawn', 'spring'],
        sheet: [6, 9],
        shortName: 'seedling'
      }, {
        name: 'Female Judge',
        unified: '1F469-200D-2696-FE0F',
        sheet: [19, 50],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-2696-FE0F',
          sheet: [19, 51]
        }, {
          unified: '1F469-1F3FC-200D-2696-FE0F',
          sheet: [19, 52]
        }, {
          unified: '1F469-1F3FD-200D-2696-FE0F',
          sheet: [19, 53]
        }, {
          unified: '1F469-1F3FE-200D-2696-FE0F',
          sheet: [19, 54]
        }, {
          unified: '1F469-1F3FF-200D-2696-FE0F',
          sheet: [19, 55]
        }],
        shortName: 'female-judge'
      }, {
        name: 'Love Letter',
        unified: '1F48C',
        keywords: ['email', 'like', 'affection', 'envelope', 'valentines'],
        sheet: [25, 22],
        shortName: 'love_letter'
      }, {
        name: 'Newspaper',
        unified: '1F4F0',
        keywords: ['press', 'headline'],
        sheet: [27, 13],
        shortName: 'newspaper'
      }, {
        name: 'Motor Boat',
        unified: '1F6E5-FE0F',
        keywords: ['ship'],
        sheet: [36, 47],
        shortName: 'motor_boat'
      }, {
        name: 'Chopsticks',
        unified: '1F962',
        keywords: ['food'],
        sheet: [41, 49],
        shortName: 'chopsticks'
      }, {
        name: 'Curly Loop',
        unified: '27B0',
        keywords: ['scribble', 'draw', 'shape', 'squiggle'],
        sheet: [55, 33],
        shortName: 'curly_loop'
      }, {
        name: 'Isle of Man Flag',
        unified: '1F1EE-1F1F2',
        sheet: [2, 26],
        shortName: 'flag-im'
      }, {
        name: 'Evergreen Tree',
        unified: '1F332',
        keywords: ['plant', 'nature'],
        sheet: [6, 10],
        shortName: 'evergreen_tree'
      }, {
        name: 'Knife Fork Plate',
        unified: '1F37D-FE0F',
        sheet: [7, 28],
        shortName: 'knife_fork_plate'
      }, {
        name: 'Heart with Arrow',
        unified: '1F498',
        keywords: ['love', 'like', 'heart', 'affection', 'valentines'],
        sheet: [25, 34],
        shortName: 'cupid'
      }, {
        name: 'Rolled Up Newspaper',
        unified: '1F5DE-FE0F',
        sheet: [30, 23],
        shortName: 'rolled_up_newspaper'
      }, {
        name: 'Ship',
        unified: '1F6A2',
        keywords: ['transportation', 'titanic', 'deploy'],
        sheet: [34, 33],
        shortName: 'ship'
      }, {
        name: 'Farmer',
        unified: '1F9D1-200D-1F33E',
        sheet: [45, 17],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F33E',
          sheet: [45, 18],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F33E',
          sheet: [45, 19],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F33E',
          sheet: [45, 20],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F33E',
          sheet: [45, 21],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F33E',
          sheet: [45, 22],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'farmer'
      }, {
        name: 'Double Curly Loop',
        unified: '27BF',
        keywords: ['tape', 'cassette'],
        sheet: [55, 34],
        shortName: 'loop'
      }, {
        name: 'India Flag',
        unified: '1F1EE-1F1F3',
        sheet: [2, 27],
        shortName: 'flag-in'
      }, {
        name: 'Deciduous Tree',
        unified: '1F333',
        keywords: ['plant', 'nature'],
        sheet: [6, 11],
        shortName: 'deciduous_tree'
      }, {
        name: 'Fork and Knife',
        unified: '1F374',
        keywords: ['cutlery', 'kitchen'],
        sheet: [7, 19],
        shortName: 'fork_and_knife'
      }, {
        name: 'Male Farmer',
        unified: '1F468-200D-1F33E',
        sheet: [14, 38],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F33E',
          sheet: [14, 39]
        }, {
          unified: '1F468-1F3FC-200D-1F33E',
          sheet: [14, 40]
        }, {
          unified: '1F468-1F3FD-200D-1F33E',
          sheet: [14, 41]
        }, {
          unified: '1F468-1F3FE-200D-1F33E',
          sheet: [14, 42]
        }, {
          unified: '1F468-1F3FF-200D-1F33E',
          sheet: [14, 43]
        }],
        shortName: 'male-farmer'
      }, {
        name: 'Heart with Ribbon',
        unified: '1F49D',
        keywords: ['love', 'valentines'],
        sheet: [25, 39],
        shortName: 'gift_heart'
      }, {
        name: 'Bookmark Tabs',
        unified: '1F4D1',
        keywords: ['favorite', 'save', 'order', 'tidy'],
        sheet: [26, 39],
        shortName: 'bookmark_tabs'
      }, {
        name: 'Airplane',
        unified: '2708-FE0F',
        keywords: ['vehicle', 'transportation', 'flight', 'fly'],
        sheet: [54, 41],
        shortName: 'airplane'
      }, {
        name: 'Part Alternation Mark',
        unified: '303D-FE0F',
        keywords: ['graph', 'presentation', 'stats', 'business', 'economics', 'bad'],
        sheet: [55, 45],
        shortName: 'part_alternation_mark'
      }, {
        name: 'British Indian Ocean Territory Flag',
        unified: '1F1EE-1F1F4',
        sheet: [2, 28],
        shortName: 'flag-io'
      }, {
        name: 'Palm Tree',
        unified: '1F334',
        keywords: ['plant', 'vegetable', 'nature', 'summer', 'beach', 'mojito', 'tropical'],
        sheet: [6, 12],
        shortName: 'palm_tree'
      }, {
        name: 'Female Farmer',
        unified: '1F469-200D-1F33E',
        sheet: [17, 28],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F33E',
          sheet: [17, 29]
        }, {
          unified: '1F469-1F3FC-200D-1F33E',
          sheet: [17, 30]
        }, {
          unified: '1F469-1F3FD-200D-1F33E',
          sheet: [17, 31]
        }, {
          unified: '1F469-1F3FE-200D-1F33E',
          sheet: [17, 32]
        }, {
          unified: '1F469-1F3FF-200D-1F33E',
          sheet: [17, 33]
        }],
        shortName: 'female-farmer'
      }, {
        name: 'Sparkling Heart',
        unified: '1F496',
        keywords: ['love', 'like', 'affection', 'valentines'],
        sheet: [25, 32],
        shortName: 'sparkling_heart'
      }, {
        name: 'Bookmark',
        unified: '1F516',
        keywords: ['favorite', 'label', 'save'],
        sheet: [27, 50],
        shortName: 'bookmark'
      }, {
        name: 'Small Airplane',
        unified: '1F6E9-FE0F',
        keywords: ['flight', 'transportation', 'fly', 'vehicle'],
        sheet: [36, 48],
        shortName: 'small_airplane'
      }, {
        name: 'Spoon',
        unified: '1F944',
        keywords: ['cutlery', 'kitchen', 'tableware'],
        sheet: [41, 20],
        shortName: 'spoon'
      }, {
        name: 'Eight Spoked Asterisk',
        unified: '2733-FE0F',
        keywords: ['star', 'sparkle', 'green-square'],
        sheet: [55, 17],
        shortName: 'eight_spoked_asterisk'
      }, {
        name: 'Iraq Flag',
        unified: '1F1EE-1F1F6',
        sheet: [2, 29],
        shortName: 'flag-iq'
      }, {
        name: 'Cactus',
        unified: '1F335',
        keywords: ['vegetable', 'plant', 'nature'],
        sheet: [6, 13],
        shortName: 'cactus'
      }, {
        name: 'Label',
        unified: '1F3F7-FE0F',
        keywords: ['sale', 'tag'],
        sheet: [11, 19],
        shortName: 'label'
      }, {
        name: 'Growing Heart',
        unified: '1F497',
        keywords: ['like', 'love', 'affection', 'valentines', 'pink'],
        sheet: [25, 33],
        shortName: 'heartpulse'
      }, {
        name: 'Hocho',
        unified: '1F52A',
        keywords: ['knife', 'blade', 'cutlery', 'kitchen', 'weapon'],
        sheet: [28, 13],
        shortNames: ['knife'],
        shortName: 'hocho'
      }, {
        name: 'Airplane Departure',
        unified: '1F6EB',
        sheet: [36, 49],
        shortName: 'airplane_departure'
      }, {
        name: 'Cook',
        unified: '1F9D1-200D-1F373',
        sheet: [45, 23],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F373',
          sheet: [45, 24],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F373',
          sheet: [45, 25],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F373',
          sheet: [45, 26],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F373',
          sheet: [45, 27],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F373',
          sheet: [45, 28],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'cook'
      }, {
        name: 'Eight Pointed Black Star',
        unified: '2734-FE0F',
        keywords: ['orange-square', 'shape', 'polygon'],
        sheet: [55, 18],
        shortName: 'eight_pointed_black_star'
      }, {
        name: 'Iran Flag',
        unified: '1F1EE-1F1F7',
        sheet: [2, 30],
        shortName: 'flag-ir'
      }, {
        name: 'Ear of Rice',
        unified: '1F33E',
        keywords: ['nature', 'plant'],
        sheet: [6, 22],
        shortName: 'ear_of_rice'
      }, {
        name: 'Amphora',
        unified: '1F3FA',
        keywords: ['vase', 'jar'],
        sheet: [11, 22],
        shortName: 'amphora'
      }, {
        name: 'Male Cook',
        unified: '1F468-200D-1F373',
        sheet: [14, 44],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F373',
          sheet: [14, 45]
        }, {
          unified: '1F468-1F3FC-200D-1F373',
          sheet: [14, 46]
        }, {
          unified: '1F468-1F3FD-200D-1F373',
          sheet: [14, 47]
        }, {
          unified: '1F468-1F3FE-200D-1F373',
          sheet: [14, 48]
        }, {
          unified: '1F468-1F3FF-200D-1F373',
          sheet: [14, 49]
        }],
        shortName: 'male-cook'
      }, {
        name: 'Beating Heart',
        unified: '1F493',
        keywords: ['love', 'like', 'affection', 'valentines', 'pink', 'heart'],
        sheet: [25, 29],
        shortName: 'heartbeat'
      }, {
        name: 'Money Bag',
        unified: '1F4B0',
        keywords: ['dollar', 'payment', 'coins', 'sale'],
        sheet: [26, 6],
        shortName: 'moneybag'
      }, {
        name: 'Airplane Arriving',
        unified: '1F6EC',
        sheet: [36, 50],
        shortName: 'airplane_arriving'
      }, {
        name: 'Sparkle',
        unified: '2747-FE0F',
        keywords: ['stars', 'green-square', 'awesome', 'good', 'fireworks'],
        sheet: [55, 20],
        shortName: 'sparkle'
      }, {
        name: 'Iceland Flag',
        unified: '1F1EE-1F1F8',
        sheet: [2, 31],
        shortName: 'flag-is'
      }, {
        name: 'Herb',
        unified: '1F33F',
        keywords: ['vegetable', 'plant', 'medicine', 'weed', 'grass', 'lawn'],
        sheet: [6, 23],
        shortName: 'herb'
      }, {
        name: 'Female Cook',
        unified: '1F469-200D-1F373',
        sheet: [17, 34],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F373',
          sheet: [17, 35]
        }, {
          unified: '1F469-1F3FC-200D-1F373',
          sheet: [17, 36]
        }, {
          unified: '1F469-1F3FD-200D-1F373',
          sheet: [17, 37]
        }, {
          unified: '1F469-1F3FE-200D-1F373',
          sheet: [17, 38]
        }, {
          unified: '1F469-1F3FF-200D-1F373',
          sheet: [17, 39]
        }],
        shortName: 'female-cook'
      }, {
        name: 'Revolving Hearts',
        unified: '1F49E',
        keywords: ['love', 'like', 'affection', 'valentines'],
        sheet: [25, 40],
        shortName: 'revolving_hearts'
      }, {
        name: 'Banknote with Yen Sign',
        unified: '1F4B4',
        keywords: ['money', 'sales', 'japanese', 'dollar', 'currency'],
        sheet: [26, 10],
        shortName: 'yen'
      }, {
        name: 'Parachute',
        unified: '1FA82',
        sheet: [52, 3],
        shortName: 'parachute'
      }, {
        name: 'Double Exclamation Mark',
        unified: '203C-FE0F',
        keywords: ['exclamation', 'surprise'],
        sheet: [52, 10],
        shortName: 'bangbang'
      }, {
        name: 'Italy Flag',
        unified: '1F1EE-1F1F9',
        keywords: ['italy', 'flag', 'nation', 'country', 'banner'],
        sheet: [2, 32],
        shortNames: ['flag-it'],
        shortName: 'it'
      }, {
        name: 'Two Hearts',
        unified: '1F495',
        keywords: ['love', 'like', 'affection', 'valentines', 'heart'],
        sheet: [25, 31],
        shortName: 'two_hearts'
      }, {
        name: 'Banknote with Dollar Sign',
        unified: '1F4B5',
        keywords: ['money', 'sales', 'bill', 'currency'],
        sheet: [26, 11],
        shortName: 'dollar'
      }, {
        name: 'Seat',
        unified: '1F4BA',
        keywords: ['sit', 'airplane', 'transport', 'bus', 'flight', 'fly'],
        sheet: [26, 16],
        shortName: 'seat'
      }, {
        name: 'Mechanic',
        unified: '1F9D1-200D-1F527',
        sheet: [46, 14],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F527',
          sheet: [46, 15],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F527',
          sheet: [46, 16],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F527',
          sheet: [46, 17],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F527',
          sheet: [46, 18],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F527',
          sheet: [46, 19],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'mechanic'
      }, {
        name: 'Exclamation Question Mark',
        unified: '2049-FE0F',
        keywords: ['wat', 'punctuation', 'surprise'],
        sheet: [52, 11],
        shortName: 'interrobang'
      }, {
        name: 'Shamrock',
        unified: '2618-FE0F',
        keywords: ['vegetable', 'plant', 'nature', 'irish', 'clover'],
        sheet: [53, 1],
        shortName: 'shamrock'
      }, {
        name: 'Jersey Flag',
        unified: '1F1EF-1F1EA',
        sheet: [2, 33],
        shortName: 'flag-je'
      }, {
        name: 'Four Leaf Clover',
        unified: '1F340',
        keywords: ['vegetable', 'plant', 'nature', 'lucky', 'irish'],
        sheet: [6, 24],
        shortName: 'four_leaf_clover'
      }, {
        name: 'Male Mechanic',
        unified: '1F468-200D-1F527',
        sheet: [15, 50],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F527',
          sheet: [15, 51]
        }, {
          unified: '1F468-1F3FC-200D-1F527',
          sheet: [15, 52]
        }, {
          unified: '1F468-1F3FD-200D-1F527',
          sheet: [15, 53]
        }, {
          unified: '1F468-1F3FE-200D-1F527',
          sheet: [15, 54]
        }, {
          unified: '1F468-1F3FF-200D-1F527',
          sheet: [15, 55]
        }],
        shortName: 'male-mechanic'
      }, {
        name: 'Heart Decoration',
        unified: '1F49F',
        keywords: ['purple-square', 'love', 'like'],
        sheet: [25, 41],
        shortName: 'heart_decoration'
      }, {
        name: 'Banknote with Euro Sign',
        unified: '1F4B6',
        keywords: ['money', 'sales', 'dollar', 'currency'],
        sheet: [26, 12],
        shortName: 'euro'
      }, {
        name: 'Helicopter',
        unified: '1F681',
        keywords: ['transportation', 'vehicle', 'fly'],
        sheet: [34, 0],
        shortName: 'helicopter'
      }, {
        name: 'Black Question Mark Ornament',
        unified: '2753',
        keywords: ['doubt', 'confused'],
        sheet: [55, 23],
        shortName: 'question'
      }, {
        name: 'Jamaica Flag',
        unified: '1F1EF-1F1F2',
        sheet: [2, 34],
        shortName: 'flag-jm'
      }, {
        name: 'Maple Leaf',
        unified: '1F341',
        keywords: ['nature', 'plant', 'vegetable', 'ca', 'fall'],
        sheet: [6, 25],
        shortName: 'maple_leaf'
      }, {
        name: 'Female Mechanic',
        unified: '1F469-200D-1F527',
        sheet: [18, 35],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F527',
          sheet: [18, 36]
        }, {
          unified: '1F469-1F3FC-200D-1F527',
          sheet: [18, 37]
        }, {
          unified: '1F469-1F3FD-200D-1F527',
          sheet: [18, 38]
        }, {
          unified: '1F469-1F3FE-200D-1F527',
          sheet: [18, 39]
        }, {
          unified: '1F469-1F3FF-200D-1F527',
          sheet: [18, 40]
        }],
        shortName: 'female-mechanic'
      }, {
        name: 'Banknote with Pound Sign',
        unified: '1F4B7',
        keywords: ['british', 'sterling', 'money', 'sales', 'bills', 'uk', 'england', 'currency'],
        sheet: [26, 13],
        shortName: 'pound'
      }, {
        name: 'Suspension Railway',
        unified: '1F69F',
        keywords: ['vehicle', 'transportation'],
        sheet: [34, 30],
        shortName: 'suspension_railway'
      }, {
        name: 'White Question Mark Ornament',
        unified: '2754',
        keywords: ['doubts', 'gray', 'huh', 'confused'],
        sheet: [55, 24],
        shortName: 'grey_question'
      }, {
        name: 'Heavy Heart Exclamation Mark Ornament',
        unified: '2763-FE0F',
        sheet: [55, 27],
        shortName: 'heavy_heart_exclamation_mark_ornament'
      }, {
        name: 'Jordan Flag',
        unified: '1F1EF-1F1F4',
        sheet: [2, 35],
        shortName: 'flag-jo'
      }, {
        name: 'Fallen Leaf',
        unified: '1F342',
        keywords: ['nature', 'plant', 'vegetable', 'leaves'],
        sheet: [6, 26],
        shortName: 'fallen_leaf'
      }, {
        name: 'Broken Heart',
        unified: '1F494',
        text: '</3',
        emoticons: ['</3'],
        keywords: ['sad', 'sorry', 'break', 'heart', 'heartbreak'],
        sheet: [25, 30],
        shortName: 'broken_heart'
      }, {
        name: 'Money with Wings',
        unified: '1F4B8',
        keywords: ['dollar', 'bills', 'payment', 'sale'],
        sheet: [26, 14],
        shortName: 'money_with_wings'
      }, {
        name: 'Mountain Cableway',
        unified: '1F6A0',
        keywords: ['transportation', 'vehicle', 'ski'],
        sheet: [34, 31],
        shortName: 'mountain_cableway'
      }, {
        name: 'Factory Worker',
        unified: '1F9D1-200D-1F3ED',
        sheet: [45, 53],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F3ED',
          sheet: [45, 54],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F3ED',
          sheet: [45, 55],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F3ED',
          sheet: [45, 56],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F3ED',
          sheet: [46, 0],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F3ED',
          sheet: [46, 1],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'factory_worker'
      }, {
        name: 'White Exclamation Mark Ornament',
        unified: '2755',
        keywords: ['surprise', 'punctuation', 'gray', 'wow', 'warning'],
        sheet: [55, 25],
        shortName: 'grey_exclamation'
      }, {
        name: 'Japan Flag',
        unified: '1F1EF-1F1F5',
        keywords: ['japanese', 'nation', 'flag', 'country', 'banner'],
        sheet: [2, 36],
        shortNames: ['flag-jp'],
        shortName: 'jp'
      }, {
        name: 'Leaf Fluttering in Wind',
        unified: '1F343',
        keywords: ['nature', 'plant', 'tree', 'vegetable', 'grass', 'lawn', 'spring'],
        sheet: [6, 27],
        shortName: 'leaves'
      }, {
        name: 'Male Factory Worker',
        unified: '1F468-200D-1F3ED',
        sheet: [15, 17],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F3ED',
          sheet: [15, 18]
        }, {
          unified: '1F468-1F3FC-200D-1F3ED',
          sheet: [15, 19]
        }, {
          unified: '1F468-1F3FD-200D-1F3ED',
          sheet: [15, 20]
        }, {
          unified: '1F468-1F3FE-200D-1F3ED',
          sheet: [15, 21]
        }, {
          unified: '1F468-1F3FF-200D-1F3ED',
          sheet: [15, 22]
        }],
        shortName: 'male-factory-worker'
      }, {
        name: 'Credit Card',
        unified: '1F4B3',
        keywords: ['money', 'sales', 'dollar', 'bill', 'payment', 'shopping'],
        sheet: [26, 9],
        shortName: 'credit_card'
      }, {
        name: 'Aerial Tramway',
        unified: '1F6A1',
        keywords: ['transportation', 'vehicle', 'ski'],
        sheet: [34, 32],
        shortName: 'aerial_tramway'
      }, {
        name: 'Heavy Exclamation Mark Symbol',
        unified: '2757',
        keywords: ['heavy_exclamation_mark', 'danger', 'surprise', 'punctuation', 'wow', 'warning'],
        sheet: [55, 26],
        shortNames: ['heavy_exclamation_mark'],
        shortName: 'exclamation'
      }, {
        name: 'Heavy Black Heart',
        unified: '2764-FE0F',
        text: '<3',
        emoticons: ['<3'],
        keywords: ['love', 'like', 'valentines'],
        sheet: [55, 28],
        shortName: 'heart'
      }, {
        name: 'Kenya Flag',
        unified: '1F1F0-1F1EA',
        sheet: [2, 37],
        shortName: 'flag-ke'
      }, {
        name: 'Female Factory Worker',
        unified: '1F469-200D-1F3ED',
        sheet: [18, 7],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F3ED',
          sheet: [18, 8]
        }, {
          unified: '1F469-1F3FC-200D-1F3ED',
          sheet: [18, 9]
        }, {
          unified: '1F469-1F3FD-200D-1F3ED',
          sheet: [18, 10]
        }, {
          unified: '1F469-1F3FE-200D-1F3ED',
          sheet: [18, 11]
        }, {
          unified: '1F469-1F3FF-200D-1F3ED',
          sheet: [18, 12]
        }],
        shortName: 'female-factory-worker'
      }, {
        name: 'Satellite',
        unified: '1F6F0-FE0F',
        keywords: ['communication', 'future', 'radio', 'space'],
        sheet: [36, 51],
        shortName: 'satellite'
      }, {
        name: 'Orange Heart',
        unified: '1F9E1',
        keywords: ['love', 'like', 'affection', 'valentines'],
        sheet: [51, 20],
        shortName: 'orange_heart'
      }, {
        name: 'Receipt',
        unified: '1F9FE',
        keywords: ['accounting', 'expenses'],
        sheet: [51, 49],
        shortName: 'receipt'
      }, {
        name: 'Wavy Dash',
        unified: '3030-FE0F',
        keywords: ['draw', 'line', 'moustache', 'mustache', 'squiggle', 'scribble'],
        sheet: [55, 44],
        shortName: 'wavy_dash'
      }, {
        name: 'Copyright Sign',
        unified: '00A9-FE0F',
        keywords: ['ip', 'license', 'circle', 'law', 'legal'],
        sheet: [0, 12],
        hidden: ['facebook'],
        shortName: 'copyright'
      }, {
        name: 'Kyrgyzstan Flag',
        unified: '1F1F0-1F1EC',
        sheet: [2, 38],
        shortName: 'flag-kg'
      }, {
        name: 'Yellow Heart',
        unified: '1F49B',
        text: '<3',
        keywords: ['love', 'like', 'affection', 'valentines'],
        sheet: [25, 37],
        shortName: 'yellow_heart'
      }, {
        name: 'Chart with Upwards Trend and Yen Sign',
        unified: '1F4B9',
        keywords: ['green-square', 'graph', 'presentation', 'stats'],
        sheet: [26, 15],
        shortName: 'chart'
      }, {
        name: 'Rocket',
        unified: '1F680',
        keywords: ['launch', 'ship', 'staffmode', 'NASA', 'outer space', 'outer_space', 'fly'],
        sheet: [33, 56],
        shortName: 'rocket'
      }, {
        name: 'Office Worker',
        unified: '1F9D1-200D-1F4BC',
        sheet: [46, 8],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F4BC',
          sheet: [46, 9],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F4BC',
          sheet: [46, 10],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F4BC',
          sheet: [46, 11],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F4BC',
          sheet: [46, 12],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F4BC',
          sheet: [46, 13],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'office_worker'
      }, {
        name: 'Registered Sign',
        unified: '00AE-FE0F',
        keywords: ['alphabet', 'circle'],
        sheet: [0, 13],
        hidden: ['facebook'],
        shortName: 'registered'
      }, {
        name: 'Cambodia Flag',
        unified: '1F1F0-1F1ED',
        sheet: [2, 39],
        shortName: 'flag-kh'
      }, {
        name: 'Male Office Worker',
        unified: '1F468-200D-1F4BC',
        sheet: [15, 44],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F4BC',
          sheet: [15, 45]
        }, {
          unified: '1F468-1F3FC-200D-1F4BC',
          sheet: [15, 46]
        }, {
          unified: '1F468-1F3FD-200D-1F4BC',
          sheet: [15, 47]
        }, {
          unified: '1F468-1F3FE-200D-1F4BC',
          sheet: [15, 48]
        }, {
          unified: '1F468-1F3FF-200D-1F4BC',
          sheet: [15, 49]
        }],
        shortName: 'male-office-worker'
      }, {
        name: 'Green Heart',
        unified: '1F49A',
        text: '<3',
        keywords: ['love', 'like', 'affection', 'valentines'],
        sheet: [25, 36],
        shortName: 'green_heart'
      }, {
        name: 'Currency Exchange',
        unified: '1F4B1',
        keywords: ['money', 'sales', 'dollar', 'travel'],
        sheet: [26, 7],
        shortName: 'currency_exchange'
      }, {
        name: 'Flying Saucer',
        unified: '1F6F8',
        keywords: ['transportation', 'vehicle', 'ufo'],
        sheet: [37, 0],
        shortName: 'flying_saucer'
      }, {
        name: 'Kiribati Flag',
        unified: '1F1F0-1F1EE',
        sheet: [2, 40],
        shortName: 'flag-ki'
      }, {
        name: 'Female Office Worker',
        unified: '1F469-200D-1F4BC',
        sheet: [18, 29],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F4BC',
          sheet: [18, 30]
        }, {
          unified: '1F469-1F3FC-200D-1F4BC',
          sheet: [18, 31]
        }, {
          unified: '1F469-1F3FD-200D-1F4BC',
          sheet: [18, 32]
        }, {
          unified: '1F469-1F3FE-200D-1F4BC',
          sheet: [18, 33]
        }, {
          unified: '1F469-1F3FF-200D-1F4BC',
          sheet: [18, 34]
        }],
        shortName: 'female-office-worker'
      }, {
        name: 'Blue Heart',
        unified: '1F499',
        text: '<3',
        keywords: ['love', 'like', 'affection', 'valentines'],
        sheet: [25, 35],
        shortName: 'blue_heart'
      }, {
        name: 'Heavy Dollar Sign',
        unified: '1F4B2',
        keywords: ['money', 'sales', 'payment', 'currency', 'buck'],
        sheet: [26, 8],
        shortName: 'heavy_dollar_sign'
      }, {
        name: 'Bellhop Bell',
        unified: '1F6CE-FE0F',
        keywords: ['service'],
        sheet: [36, 36],
        shortName: 'bellhop_bell'
      }, {
        name: 'Trade Mark Sign',
        unified: '2122-FE0F',
        keywords: ['trademark', 'brand', 'law', 'legal'],
        sheet: [52, 12],
        shortName: 'tm'
      }, {
        name: 'Hash Key',
        unified: '0023-FE0F-20E3',
        keywords: ['symbol', 'blue-square', 'twitter'],
        sheet: [0, 0],
        hidden: ['facebook'],
        shortName: 'hash'
      }, {
        name: 'Comoros Flag',
        unified: '1F1F0-1F1F2',
        sheet: [2, 41],
        shortName: 'flag-km'
      }, {
        name: 'Purple Heart',
        unified: '1F49C',
        text: '<3',
        keywords: ['love', 'like', 'affection', 'valentines'],
        sheet: [25, 38],
        shortName: 'purple_heart'
      }, {
        name: 'Scientist',
        unified: '1F9D1-200D-1F52C',
        sheet: [46, 20],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F52C',
          sheet: [46, 21],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F52C',
          sheet: [46, 22],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F52C',
          sheet: [46, 23],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F52C',
          sheet: [46, 24],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F52C',
          sheet: [46, 25],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'scientist'
      }, {
        name: 'Luggage',
        unified: '1F9F3',
        keywords: ['packing', 'travel'],
        sheet: [51, 38],
        shortName: 'luggage'
      }, {
        name: 'Envelope',
        unified: '2709-FE0F',
        keywords: ['letter', 'postal', 'inbox', 'communication'],
        sheet: [54, 42],
        shortNames: ['envelope'],
        shortName: 'email'
      }, {
        name: 'Keycap Star',
        unified: '002A-FE0F-20E3',
        sheet: [0, 1],
        hidden: ['facebook'],
        shortName: 'keycap_star'
      }, {
        name: 'St. Kitts & Nevis Flag',
        unified: '1F1F0-1F1F3',
        sheet: [2, 42],
        shortName: 'flag-kn'
      }, {
        name: 'Male Scientist',
        unified: '1F468-200D-1F52C',
        sheet: [15, 56],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F52C',
          sheet: [16, 0]
        }, {
          unified: '1F468-1F3FC-200D-1F52C',
          sheet: [16, 1]
        }, {
          unified: '1F468-1F3FD-200D-1F52C',
          sheet: [16, 2]
        }, {
          unified: '1F468-1F3FE-200D-1F52C',
          sheet: [16, 3]
        }, {
          unified: '1F468-1F3FF-200D-1F52C',
          sheet: [16, 4]
        }],
        shortName: 'male-scientist'
      }, {
        name: 'E-Mail Symbol',
        unified: '1F4E7',
        keywords: ['communication', 'inbox'],
        sheet: [27, 4],
        shortName: 'e-mail'
      }, {
        name: 'Brown Heart',
        unified: '1F90E',
        sheet: [37, 16],
        shortName: 'brown_heart'
      }, {
        name: 'Hourglass',
        unified: '231B',
        keywords: ['time', 'clock', 'oldschool', 'limit', 'exam', 'quiz', 'test'],
        sheet: [52, 23],
        shortName: 'hourglass'
      }, {
        name: 'Keycap 0',
        unified: '0030-FE0F-20E3',
        keywords: ['0', 'numbers', 'blue-square', 'null'],
        sheet: [0, 2],
        hidden: ['facebook'],
        shortName: 'zero'
      }, {
        name: 'North Korea Flag',
        unified: '1F1F0-1F1F5',
        sheet: [2, 43],
        shortName: 'flag-kp'
      }, {
        name: 'Female Scientist',
        unified: '1F469-200D-1F52C',
        sheet: [18, 41],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F52C',
          sheet: [18, 42]
        }, {
          unified: '1F469-1F3FC-200D-1F52C',
          sheet: [18, 43]
        }, {
          unified: '1F469-1F3FD-200D-1F52C',
          sheet: [18, 44]
        }, {
          unified: '1F469-1F3FE-200D-1F52C',
          sheet: [18, 45]
        }, {
          unified: '1F469-1F3FF-200D-1F52C',
          sheet: [18, 46]
        }],
        shortName: 'female-scientist'
      }, {
        name: 'Incoming Envelope',
        unified: '1F4E8',
        keywords: ['email', 'inbox'],
        sheet: [27, 5],
        shortName: 'incoming_envelope'
      }, {
        name: 'Black Heart',
        unified: '1F5A4',
        keywords: ['evil'],
        sheet: [30, 9],
        shortName: 'black_heart'
      }, {
        name: 'Hourglass with Flowing Sand',
        unified: '23F3',
        keywords: ['oldschool', 'time', 'countdown'],
        sheet: [52, 36],
        shortName: 'hourglass_flowing_sand'
      }, {
        name: 'Keycap 1',
        unified: '0031-FE0F-20E3',
        keywords: ['blue-square', 'numbers', '1'],
        sheet: [0, 3],
        hidden: ['facebook'],
        shortName: 'one'
      }, {
        name: 'South Korea Flag',
        unified: '1F1F0-1F1F7',
        keywords: ['south', 'korea', 'nation', 'flag', 'country', 'banner'],
        sheet: [2, 44],
        shortNames: ['flag-kr'],
        shortName: 'kr'
      }, {
        name: 'Envelope with Downwards Arrow Above',
        unified: '1F4E9',
        keywords: ['email', 'communication'],
        sheet: [27, 6],
        shortName: 'envelope_with_arrow'
      }, {
        name: 'White Heart',
        unified: '1F90D',
        sheet: [37, 15],
        shortName: 'white_heart'
      }, {
        name: 'Technologist',
        unified: '1F9D1-200D-1F4BB',
        sheet: [46, 2],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F4BB',
          sheet: [46, 3],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F4BB',
          sheet: [46, 4],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F4BB',
          sheet: [46, 5],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F4BB',
          sheet: [46, 6],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F4BB',
          sheet: [46, 7],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'technologist'
      }, {
        name: 'Watch',
        unified: '231A',
        keywords: ['time', 'accessories'],
        sheet: [52, 22],
        shortName: 'watch'
      }, {
        name: 'Keycap 2',
        unified: '0032-FE0F-20E3',
        keywords: ['numbers', '2', 'prime', 'blue-square'],
        sheet: [0, 4],
        hidden: ['facebook'],
        shortName: 'two'
      }, {
        name: 'Kuwait Flag',
        unified: '1F1F0-1F1FC',
        sheet: [2, 45],
        shortName: 'flag-kw'
      }, {
        name: 'Male Technologist',
        unified: '1F468-200D-1F4BB',
        sheet: [15, 38],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F4BB',
          sheet: [15, 39]
        }, {
          unified: '1F468-1F3FC-200D-1F4BB',
          sheet: [15, 40]
        }, {
          unified: '1F468-1F3FD-200D-1F4BB',
          sheet: [15, 41]
        }, {
          unified: '1F468-1F3FE-200D-1F4BB',
          sheet: [15, 42]
        }, {
          unified: '1F468-1F3FF-200D-1F4BB',
          sheet: [15, 43]
        }],
        shortName: 'male-technologist'
      }, {
        name: 'Hundred Points Symbol',
        unified: '1F4AF',
        keywords: ['score', 'perfect', 'numbers', 'century', 'exam', 'quiz', 'test', 'pass', 'hundred'],
        sheet: [26, 5],
        shortName: '100'
      }, {
        name: 'Outbox Tray',
        unified: '1F4E4',
        keywords: ['inbox', 'email'],
        sheet: [27, 1],
        shortName: 'outbox_tray'
      }, {
        name: 'Alarm Clock',
        unified: '23F0',
        keywords: ['time', 'wake'],
        sheet: [52, 33],
        shortName: 'alarm_clock'
      }, {
        name: 'Keycap 3',
        unified: '0033-FE0F-20E3',
        keywords: ['3', 'numbers', 'prime', 'blue-square'],
        sheet: [0, 5],
        hidden: ['facebook'],
        shortName: 'three'
      }, {
        name: 'Cayman Islands Flag',
        unified: '1F1F0-1F1FE',
        sheet: [2, 46],
        shortName: 'flag-ky'
      }, {
        name: 'Female Technologist',
        unified: '1F469-200D-1F4BB',
        sheet: [18, 23],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F4BB',
          sheet: [18, 24]
        }, {
          unified: '1F469-1F3FC-200D-1F4BB',
          sheet: [18, 25]
        }, {
          unified: '1F469-1F3FD-200D-1F4BB',
          sheet: [18, 26]
        }, {
          unified: '1F469-1F3FE-200D-1F4BB',
          sheet: [18, 27]
        }, {
          unified: '1F469-1F3FF-200D-1F4BB',
          sheet: [18, 28]
        }],
        shortName: 'female-technologist'
      }, {
        name: 'Anger Symbol',
        unified: '1F4A2',
        keywords: ['angry', 'mad'],
        sheet: [25, 44],
        shortName: 'anger'
      }, {
        name: 'Inbox Tray',
        unified: '1F4E5',
        keywords: ['email', 'documents'],
        sheet: [27, 2],
        shortName: 'inbox_tray'
      }, {
        name: 'Stopwatch',
        unified: '23F1-FE0F',
        keywords: ['time', 'deadline'],
        sheet: [52, 34],
        shortName: 'stopwatch'
      }, {
        name: 'Keycap 4',
        unified: '0034-FE0F-20E3',
        keywords: ['4', 'numbers', 'blue-square'],
        sheet: [0, 6],
        hidden: ['facebook'],
        shortName: 'four'
      }, {
        name: 'Kazakhstan Flag',
        unified: '1F1F0-1F1FF',
        sheet: [2, 47],
        shortName: 'flag-kz'
      }, {
        name: 'Collision Symbol',
        unified: '1F4A5',
        keywords: ['bomb', 'explode', 'explosion', 'collision', 'blown'],
        sheet: [25, 47],
        shortNames: ['collision'],
        shortName: 'boom'
      }, {
        name: 'Package',
        unified: '1F4E6',
        keywords: ['mail', 'gift', 'cardboard', 'box', 'moving'],
        sheet: [27, 3],
        shortName: 'package'
      }, {
        name: 'Singer',
        unified: '1F9D1-200D-1F3A4',
        sheet: [45, 35],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F3A4',
          sheet: [45, 36],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F3A4',
          sheet: [45, 37],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F3A4',
          sheet: [45, 38],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F3A4',
          sheet: [45, 39],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F3A4',
          sheet: [45, 40],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'singer'
      }, {
        name: 'Timer Clock',
        unified: '23F2-FE0F',
        keywords: ['alarm'],
        sheet: [52, 35],
        shortName: 'timer_clock'
      }, {
        name: 'Keycap 5',
        unified: '0035-FE0F-20E3',
        keywords: ['5', 'numbers', 'blue-square', 'prime'],
        sheet: [0, 7],
        hidden: ['facebook'],
        shortName: 'five'
      }, {
        name: 'Laos Flag',
        unified: '1F1F1-1F1E6',
        sheet: [2, 48],
        shortName: 'flag-la'
      }, {
        name: 'Male Singer',
        unified: '1F468-200D-1F3A4',
        sheet: [14, 56],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F3A4',
          sheet: [15, 0]
        }, {
          unified: '1F468-1F3FC-200D-1F3A4',
          sheet: [15, 1]
        }, {
          unified: '1F468-1F3FD-200D-1F3A4',
          sheet: [15, 2]
        }, {
          unified: '1F468-1F3FE-200D-1F3A4',
          sheet: [15, 3]
        }, {
          unified: '1F468-1F3FF-200D-1F3A4',
          sheet: [15, 4]
        }],
        shortName: 'male-singer'
      }, {
        name: 'Dizzy Symbol',
        unified: '1F4AB',
        keywords: ['star', 'sparkle', 'shoot', 'magic'],
        sheet: [26, 1],
        shortName: 'dizzy'
      }, {
        name: 'Closed Mailbox with Raised Flag',
        unified: '1F4EB',
        keywords: ['email', 'inbox', 'communication'],
        sheet: [27, 8],
        shortName: 'mailbox'
      }, {
        name: 'Mantelpiece Clock',
        unified: '1F570-FE0F',
        keywords: ['time'],
        sheet: [29, 7],
        shortName: 'mantelpiece_clock'
      }, {
        name: 'Keycap 6',
        unified: '0036-FE0F-20E3',
        keywords: ['6', 'numbers', 'blue-square'],
        sheet: [0, 8],
        hidden: ['facebook'],
        shortName: 'six'
      }, {
        name: 'Lebanon Flag',
        unified: '1F1F1-1F1E7',
        sheet: [2, 49],
        shortName: 'flag-lb'
      }, {
        name: 'Female Singer',
        unified: '1F469-200D-1F3A4',
        sheet: [17, 46],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F3A4',
          sheet: [17, 47]
        }, {
          unified: '1F469-1F3FC-200D-1F3A4',
          sheet: [17, 48]
        }, {
          unified: '1F469-1F3FD-200D-1F3A4',
          sheet: [17, 49]
        }, {
          unified: '1F469-1F3FE-200D-1F3A4',
          sheet: [17, 50]
        }, {
          unified: '1F469-1F3FF-200D-1F3A4',
          sheet: [17, 51]
        }],
        shortName: 'female-singer'
      }, {
        name: 'Splashing Sweat Symbol',
        unified: '1F4A6',
        keywords: ['water', 'drip', 'oops'],
        sheet: [25, 48],
        shortName: 'sweat_drops'
      }, {
        name: 'Closed Mailbox with Lowered Flag',
        unified: '1F4EA',
        keywords: ['email', 'communication', 'inbox'],
        sheet: [27, 7],
        shortName: 'mailbox_closed'
      }, {
        name: 'Clock Face Twelve Oclock',
        unified: '1F55B',
        keywords: ['time', 'noon', 'midnight', 'midday', 'late', 'early', 'schedule'],
        sheet: [28, 50],
        shortName: 'clock12'
      }, {
        name: 'Keycap 7',
        unified: '0037-FE0F-20E3',
        keywords: ['7', 'numbers', 'blue-square', 'prime'],
        sheet: [0, 9],
        hidden: ['facebook'],
        shortName: 'seven'
      }, {
        name: 'St. Lucia Flag',
        unified: '1F1F1-1F1E8',
        sheet: [2, 50],
        shortName: 'flag-lc'
      }, {
        name: 'Dash Symbol',
        unified: '1F4A8',
        keywords: ['wind', 'air', 'fast', 'shoo', 'fart', 'smoke', 'puff'],
        sheet: [25, 50],
        shortName: 'dash'
      }, {
        name: 'Open Mailbox with Raised Flag',
        unified: '1F4EC',
        keywords: ['email', 'inbox', 'communication'],
        sheet: [27, 9],
        shortName: 'mailbox_with_mail'
      }, {
        name: 'Clock Face Twelve-Thirty',
        unified: '1F567',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [29, 5],
        shortName: 'clock1230'
      }, {
        name: 'Artist',
        unified: '1F9D1-200D-1F3A8',
        sheet: [45, 41],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F3A8',
          sheet: [45, 42],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F3A8',
          sheet: [45, 43],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F3A8',
          sheet: [45, 44],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F3A8',
          sheet: [45, 45],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F3A8',
          sheet: [45, 46],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'artist'
      }, {
        name: 'Keycap 8',
        unified: '0038-FE0F-20E3',
        keywords: ['8', 'blue-square', 'numbers'],
        sheet: [0, 10],
        hidden: ['facebook'],
        shortName: 'eight'
      }, {
        name: 'Liechtenstein Flag',
        unified: '1F1F1-1F1EE',
        sheet: [2, 51],
        shortName: 'flag-li'
      }, {
        name: 'Male Artist',
        unified: '1F468-200D-1F3A8',
        sheet: [15, 5],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F3A8',
          sheet: [15, 6]
        }, {
          unified: '1F468-1F3FC-200D-1F3A8',
          sheet: [15, 7]
        }, {
          unified: '1F468-1F3FD-200D-1F3A8',
          sheet: [15, 8]
        }, {
          unified: '1F468-1F3FE-200D-1F3A8',
          sheet: [15, 9]
        }, {
          unified: '1F468-1F3FF-200D-1F3A8',
          sheet: [15, 10]
        }],
        shortName: 'male-artist'
      }, {
        name: 'Open Mailbox with Lowered Flag',
        unified: '1F4ED',
        keywords: ['email', 'inbox'],
        sheet: [27, 10],
        shortName: 'mailbox_with_no_mail'
      }, {
        name: 'Clock Face One Oclock',
        unified: '1F550',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 39],
        shortName: 'clock1'
      }, {
        name: 'Hole',
        unified: '1F573-FE0F',
        keywords: ['embarrassing'],
        sheet: [29, 8],
        shortName: 'hole'
      }, {
        name: 'Keycap 9',
        unified: '0039-FE0F-20E3',
        keywords: ['blue-square', 'numbers', '9'],
        sheet: [0, 11],
        hidden: ['facebook'],
        shortName: 'nine'
      }, {
        name: 'Sri Lanka Flag',
        unified: '1F1F1-1F1F0',
        sheet: [2, 52],
        shortName: 'flag-lk'
      }, {
        name: 'Female Artist',
        unified: '1F469-200D-1F3A8',
        sheet: [17, 52],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F3A8',
          sheet: [17, 53]
        }, {
          unified: '1F469-1F3FC-200D-1F3A8',
          sheet: [17, 54]
        }, {
          unified: '1F469-1F3FD-200D-1F3A8',
          sheet: [17, 55]
        }, {
          unified: '1F469-1F3FE-200D-1F3A8',
          sheet: [17, 56]
        }, {
          unified: '1F469-1F3FF-200D-1F3A8',
          sheet: [18, 0]
        }],
        shortName: 'female-artist'
      }, {
        name: 'Bomb',
        unified: '1F4A3',
        keywords: ['boom', 'explode', 'explosion', 'terrorism'],
        sheet: [25, 45],
        shortName: 'bomb'
      }, {
        name: 'Postbox',
        unified: '1F4EE',
        keywords: ['email', 'letter', 'envelope'],
        sheet: [27, 11],
        shortName: 'postbox'
      }, {
        name: 'Clock Face One-Thirty',
        unified: '1F55C',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 51],
        shortName: 'clock130'
      }, {
        name: 'Liberia Flag',
        unified: '1F1F1-1F1F7',
        sheet: [2, 53],
        shortName: 'flag-lr'
      }, {
        name: 'Speech Balloon',
        unified: '1F4AC',
        keywords: ['bubble', 'words', 'message', 'talk', 'chatting'],
        sheet: [26, 2],
        shortName: 'speech_balloon'
      }, {
        name: 'Keycap Ten',
        unified: '1F51F',
        keywords: ['numbers', '10', 'blue-square'],
        sheet: [28, 2],
        shortName: 'keycap_ten'
      }, {
        name: 'Clock Face Two Oclock',
        unified: '1F551',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 40],
        shortName: 'clock2'
      }, {
        name: 'Ballot Box with Ballot',
        unified: '1F5F3-FE0F',
        sheet: [30, 28],
        shortName: 'ballot_box_with_ballot'
      }, {
        name: 'Pilot',
        unified: '1F9D1-200D-2708-FE0F',
        sheet: [48, 4],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-2708-FE0F',
          sheet: [48, 5],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-2708-FE0F',
          sheet: [48, 6],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-2708-FE0F',
          sheet: [48, 7],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-2708-FE0F',
          sheet: [48, 8],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-2708-FE0F',
          sheet: [48, 9],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'pilot'
      }, {
        name: 'Lesotho Flag',
        unified: '1F1F1-1F1F8',
        sheet: [2, 54],
        shortName: 'flag-ls'
      }, {
        name: 'Eye in Speech Bubble',
        unified: '1F441-FE0F-200D-1F5E8-FE0F',
        sheet: [12, 37],
        hidden: ['twitter', 'facebook'],
        shortName: 'eye-in-speech-bubble'
      }, {
        name: 'Male Pilot',
        unified: '1F468-200D-2708-FE0F',
        sheet: [17, 14],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-2708-FE0F',
          sheet: [17, 15]
        }, {
          unified: '1F468-1F3FC-200D-2708-FE0F',
          sheet: [17, 16]
        }, {
          unified: '1F468-1F3FD-200D-2708-FE0F',
          sheet: [17, 17]
        }, {
          unified: '1F468-1F3FE-200D-2708-FE0F',
          sheet: [17, 18]
        }, {
          unified: '1F468-1F3FF-200D-2708-FE0F',
          sheet: [17, 19]
        }],
        shortName: 'male-pilot'
      }, {
        name: 'Input Symbol for Latin Capital Letters',
        unified: '1F520',
        keywords: ['alphabet', 'words', 'blue-square'],
        sheet: [28, 3],
        shortName: 'capital_abcd'
      }, {
        name: 'Clock Face Two-Thirty',
        unified: '1F55D',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 52],
        shortName: 'clock230'
      }, {
        name: 'Pencil',
        unified: '270F-FE0F',
        keywords: ['stationery', 'write', 'paper', 'writing', 'school', 'study'],
        sheet: [55, 10],
        shortName: 'pencil2'
      }, {
        name: 'Lithuania Flag',
        unified: '1F1F1-1F1F9',
        sheet: [2, 55],
        shortName: 'flag-lt'
      }, {
        name: 'Female Pilot',
        unified: '1F469-200D-2708-FE0F',
        sheet: [19, 56],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-2708-FE0F',
          sheet: [20, 0]
        }, {
          unified: '1F469-1F3FC-200D-2708-FE0F',
          sheet: [20, 1]
        }, {
          unified: '1F469-1F3FD-200D-2708-FE0F',
          sheet: [20, 2]
        }, {
          unified: '1F469-1F3FE-200D-2708-FE0F',
          sheet: [20, 3]
        }, {
          unified: '1F469-1F3FF-200D-2708-FE0F',
          sheet: [20, 4]
        }],
        shortName: 'female-pilot'
      }, {
        name: 'Input Symbol for Latin Small Letters',
        unified: '1F521',
        keywords: ['blue-square', 'alphabet'],
        sheet: [28, 4],
        shortName: 'abcd'
      }, {
        name: 'Clock Face Three Oclock',
        unified: '1F552',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 41],
        shortName: 'clock3'
      }, {
        name: 'Left Speech Bubble',
        unified: '1F5E8-FE0F',
        keywords: ['words', 'message', 'talk', 'chatting'],
        sheet: [30, 26],
        shortName: 'left_speech_bubble'
      }, {
        name: 'Black Nib',
        unified: '2712-FE0F',
        keywords: ['pen', 'stationery', 'writing', 'write'],
        sheet: [55, 11],
        shortName: 'black_nib'
      }, {
        name: 'Luxembourg Flag',
        unified: '1F1F1-1F1FA',
        sheet: [2, 56],
        shortName: 'flag-lu'
      }, {
        name: 'Input Symbol for Numbers',
        unified: '1F522',
        keywords: ['numbers', 'blue-square'],
        sheet: [28, 5],
        shortName: '1234'
      }, {
        name: 'Clock Face Three-Thirty',
        unified: '1F55E',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 53],
        shortName: 'clock330'
      }, {
        name: 'Lower Left Fountain Pen',
        unified: '1F58B-FE0F',
        sheet: [29, 45],
        shortName: 'lower_left_fountain_pen'
      }, {
        name: 'Right Anger Bubble',
        unified: '1F5EF-FE0F',
        keywords: ['caption', 'speech', 'thinking', 'mad'],
        sheet: [30, 27],
        shortName: 'right_anger_bubble'
      }, {
        name: 'Astronaut',
        unified: '1F9D1-200D-1F680',
        sheet: [46, 26],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F680',
          sheet: [46, 27],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F680',
          sheet: [46, 28],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F680',
          sheet: [46, 29],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F680',
          sheet: [46, 30],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F680',
          sheet: [46, 31],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'astronaut'
      }, {
        name: 'Latvia Flag',
        unified: '1F1F1-1F1FB',
        sheet: [3, 0],
        shortName: 'flag-lv'
      }, {
        name: 'Male Astronaut',
        unified: '1F468-200D-1F680',
        sheet: [16, 5],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F680',
          sheet: [16, 6]
        }, {
          unified: '1F468-1F3FC-200D-1F680',
          sheet: [16, 7]
        }, {
          unified: '1F468-1F3FD-200D-1F680',
          sheet: [16, 8]
        }, {
          unified: '1F468-1F3FE-200D-1F680',
          sheet: [16, 9]
        }, {
          unified: '1F468-1F3FF-200D-1F680',
          sheet: [16, 10]
        }],
        shortName: 'male-astronaut'
      }, {
        name: 'Thought Balloon',
        unified: '1F4AD',
        keywords: ['bubble', 'cloud', 'speech', 'thinking', 'dream'],
        sheet: [26, 3],
        shortName: 'thought_balloon'
      }, {
        name: 'Input Symbol for Symbols',
        unified: '1F523',
        keywords: ['blue-square', 'music', 'note', 'ampersand', 'percent', 'glyphs', 'characters'],
        sheet: [28, 6],
        shortName: 'symbols'
      }, {
        name: 'Clock Face Four Oclock',
        unified: '1F553',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 42],
        shortName: 'clock4'
      }, {
        name: 'Lower Left Ballpoint Pen',
        unified: '1F58A-FE0F',
        sheet: [29, 44],
        shortName: 'lower_left_ballpoint_pen'
      }, {
        name: 'Libya Flag',
        unified: '1F1F1-1F1FE',
        sheet: [3, 1],
        shortName: 'flag-ly'
      }, {
        name: 'Female Astronaut',
        unified: '1F469-200D-1F680',
        sheet: [18, 47],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F680',
          sheet: [18, 48]
        }, {
          unified: '1F469-1F3FC-200D-1F680',
          sheet: [18, 49]
        }, {
          unified: '1F469-1F3FD-200D-1F680',
          sheet: [18, 50]
        }, {
          unified: '1F469-1F3FE-200D-1F680',
          sheet: [18, 51]
        }, {
          unified: '1F469-1F3FF-200D-1F680',
          sheet: [18, 52]
        }],
        shortName: 'female-astronaut'
      }, {
        name: 'Sleeping Symbol',
        unified: '1F4A4',
        keywords: ['sleepy', 'tired', 'dream'],
        sheet: [25, 46],
        shortName: 'zzz'
      }, {
        name: 'Input Symbol for Latin Letters',
        unified: '1F524',
        keywords: ['blue-square', 'alphabet'],
        sheet: [28, 7],
        shortName: 'abc'
      }, {
        name: 'Clock Face Four-Thirty',
        unified: '1F55F',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 54],
        shortName: 'clock430'
      }, {
        name: 'Lower Left Paintbrush',
        unified: '1F58C-FE0F',
        sheet: [29, 46],
        shortName: 'lower_left_paintbrush'
      }, {
        name: 'Negative Squared Latin Capital Letter a',
        unified: '1F170-FE0F',
        keywords: ['red-square', 'alphabet', 'letter'],
        sheet: [0, 16],
        shortName: 'a'
      }, {
        name: 'Morocco Flag',
        unified: '1F1F2-1F1E6',
        sheet: [3, 2],
        shortName: 'flag-ma'
      }, {
        name: 'Clock Face Five Oclock',
        unified: '1F554',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 43],
        shortName: 'clock5'
      }, {
        name: 'Lower Left Crayon',
        unified: '1F58D-FE0F',
        sheet: [29, 47],
        shortName: 'lower_left_crayon'
      }, {
        name: 'Firefighter',
        unified: '1F9D1-200D-1F692',
        sheet: [46, 32],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F692',
          sheet: [46, 33],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F692',
          sheet: [46, 34],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F692',
          sheet: [46, 35],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F692',
          sheet: [46, 36],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F692',
          sheet: [46, 37],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'firefighter'
      }, {
        name: 'Negative Squared Ab',
        unified: '1F18E',
        keywords: ['red-square', 'alphabet'],
        sheet: [0, 20],
        shortName: 'ab'
      }, {
        name: 'Monaco Flag',
        unified: '1F1F2-1F1E8',
        sheet: [3, 3],
        shortName: 'flag-mc'
      }, {
        name: 'Male Firefighter',
        unified: '1F468-200D-1F692',
        sheet: [16, 11],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F692',
          sheet: [16, 12]
        }, {
          unified: '1F468-1F3FC-200D-1F692',
          sheet: [16, 13]
        }, {
          unified: '1F468-1F3FD-200D-1F692',
          sheet: [16, 14]
        }, {
          unified: '1F468-1F3FE-200D-1F692',
          sheet: [16, 15]
        }, {
          unified: '1F468-1F3FF-200D-1F692',
          sheet: [16, 16]
        }],
        shortName: 'male-firefighter'
      }, {
        name: 'Memo',
        unified: '1F4DD',
        keywords: ['write', 'documents', 'stationery', 'pencil', 'paper', 'writing', 'legal', 'exam', 'quiz', 'test', 'study', 'compose'],
        sheet: [26, 51],
        shortNames: ['pencil'],
        shortName: 'memo'
      }, {
        name: 'Clock Face Five-Thirty',
        unified: '1F560',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 55],
        shortName: 'clock530'
      }, {
        name: 'Negative Squared Latin Capital Letter B',
        unified: '1F171-FE0F',
        keywords: ['red-square', 'alphabet', 'letter'],
        sheet: [0, 17],
        shortName: 'b'
      }, {
        name: 'Moldova Flag',
        unified: '1F1F2-1F1E9',
        sheet: [3, 4],
        shortName: 'flag-md'
      }, {
        name: 'Female Firefighter',
        unified: '1F469-200D-1F692',
        sheet: [18, 53],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F692',
          sheet: [18, 54]
        }, {
          unified: '1F469-1F3FC-200D-1F692',
          sheet: [18, 55]
        }, {
          unified: '1F469-1F3FD-200D-1F692',
          sheet: [18, 56]
        }, {
          unified: '1F469-1F3FE-200D-1F692',
          sheet: [19, 0]
        }, {
          unified: '1F469-1F3FF-200D-1F692',
          sheet: [19, 1]
        }],
        shortName: 'female-firefighter'
      }, {
        name: 'Briefcase',
        unified: '1F4BC',
        keywords: ['business', 'documents', 'work', 'law', 'legal', 'job', 'career'],
        sheet: [26, 18],
        shortName: 'briefcase'
      }, {
        name: 'Clock Face Six Oclock',
        unified: '1F555',
        keywords: ['time', 'late', 'early', 'schedule', 'dawn', 'dusk'],
        sheet: [28, 44],
        shortName: 'clock6'
      }, {
        name: 'Squared Cl',
        unified: '1F191',
        keywords: ['alphabet', 'words', 'red-square'],
        sheet: [0, 21],
        shortName: 'cl'
      }, {
        name: 'Montenegro Flag',
        unified: '1F1F2-1F1EA',
        sheet: [3, 5],
        shortName: 'flag-me'
      }, {
        name: 'Police Officer',
        unified: '1F46E',
        sheet: [21, 49],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F46E-1F3FB',
          sheet: [21, 50],
          hidden: ['facebook']
        }, {
          unified: '1F46E-1F3FC',
          sheet: [21, 51],
          hidden: ['facebook']
        }, {
          unified: '1F46E-1F3FD',
          sheet: [21, 52],
          hidden: ['facebook']
        }, {
          unified: '1F46E-1F3FE',
          sheet: [21, 53],
          hidden: ['facebook']
        }, {
          unified: '1F46E-1F3FF',
          sheet: [21, 54],
          hidden: ['facebook']
        }],
        shortName: 'cop',
        obsoletedBy: '1F46E-200D-2642-FE0F'
      }, {
        name: 'File Folder',
        unified: '1F4C1',
        keywords: ['documents', 'business', 'office'],
        sheet: [26, 23],
        shortName: 'file_folder'
      }, {
        name: 'Clock Face Six-Thirty',
        unified: '1F561',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 56],
        shortName: 'clock630'
      }, {
        name: 'Squared Cool',
        unified: '1F192',
        keywords: ['words', 'blue-square'],
        sheet: [0, 22],
        shortName: 'cool'
      }, {
        name: 'St. Martin Flag',
        unified: '1F1F2-1F1EB',
        sheet: [3, 6],
        shortName: 'flag-mf'
      }, {
        name: 'Male Police Officer',
        unified: '1F46E-200D-2642-FE0F',
        obsoletes: '1F46E',
        sheet: [21, 43],
        skinVariations: [{
          unified: '1F46E-1F3FB-200D-2642-FE0F',
          sheet: [21, 44]
        }, {
          unified: '1F46E-1F3FC-200D-2642-FE0F',
          sheet: [21, 45]
        }, {
          unified: '1F46E-1F3FD-200D-2642-FE0F',
          sheet: [21, 46]
        }, {
          unified: '1F46E-1F3FE-200D-2642-FE0F',
          sheet: [21, 47]
        }, {
          unified: '1F46E-1F3FF-200D-2642-FE0F',
          sheet: [21, 48]
        }],
        shortName: 'male-police-officer'
      }, {
        name: 'Open File Folder',
        unified: '1F4C2',
        keywords: ['documents', 'load'],
        sheet: [26, 24],
        shortName: 'open_file_folder'
      }, {
        name: 'Clock Face Seven Oclock',
        unified: '1F556',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 45],
        shortName: 'clock7'
      }, {
        name: 'Squared Free',
        unified: '1F193',
        keywords: ['blue-square', 'words'],
        sheet: [0, 23],
        shortName: 'free'
      }, {
        name: 'Madagascar Flag',
        unified: '1F1F2-1F1EC',
        sheet: [3, 7],
        shortName: 'flag-mg'
      }, {
        name: 'Female Police Officer',
        unified: '1F46E-200D-2640-FE0F',
        sheet: [21, 37],
        skinVariations: [{
          unified: '1F46E-1F3FB-200D-2640-FE0F',
          sheet: [21, 38]
        }, {
          unified: '1F46E-1F3FC-200D-2640-FE0F',
          sheet: [21, 39]
        }, {
          unified: '1F46E-1F3FD-200D-2640-FE0F',
          sheet: [21, 40]
        }, {
          unified: '1F46E-1F3FE-200D-2640-FE0F',
          sheet: [21, 41]
        }, {
          unified: '1F46E-1F3FF-200D-2640-FE0F',
          sheet: [21, 42]
        }],
        shortName: 'female-police-officer'
      }, {
        name: 'Clock Face Seven-Thirty',
        unified: '1F562',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [29, 0],
        shortName: 'clock730'
      }, {
        name: 'Card Index Dividers',
        unified: '1F5C2-FE0F',
        keywords: ['organizing', 'business', 'stationery'],
        sheet: [30, 15],
        shortName: 'card_index_dividers'
      }, {
        name: 'Marshall Islands Flag',
        unified: '1F1F2-1F1ED',
        sheet: [3, 8],
        shortName: 'flag-mh'
      }, {
        name: 'Calendar',
        unified: '1F4C5',
        keywords: ['calendar', 'schedule'],
        sheet: [26, 27],
        shortName: 'date'
      }, {
        name: 'Clock Face Eight Oclock',
        unified: '1F557',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 46],
        shortName: 'clock8'
      }, {
        name: 'Sleuth or Spy',
        unified: '1F575-FE0F',
        sheet: [29, 27],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F575-1F3FB',
          sheet: [29, 28],
          hidden: ['facebook']
        }, {
          unified: '1F575-1F3FC',
          sheet: [29, 29],
          hidden: ['facebook']
        }, {
          unified: '1F575-1F3FD',
          sheet: [29, 30],
          hidden: ['facebook']
        }, {
          unified: '1F575-1F3FE',
          sheet: [29, 31],
          hidden: ['facebook']
        }, {
          unified: '1F575-1F3FF',
          sheet: [29, 32],
          hidden: ['facebook']
        }],
        shortName: 'sleuth_or_spy',
        obsoletedBy: '1F575-FE0F-200D-2642-FE0F'
      }, {
        name: 'Information Source',
        unified: '2139-FE0F',
        keywords: ['blue-square', 'alphabet', 'letter'],
        sheet: [52, 13],
        shortName: 'information_source'
      }, {
        name: 'Squared Id',
        unified: '1F194',
        keywords: ['purple-square', 'words'],
        sheet: [0, 24],
        shortName: 'id'
      }, {
        name: 'North Macedonia Flag',
        unified: '1F1F2-1F1F0',
        sheet: [3, 9],
        shortName: 'flag-mk'
      }, {
        name: 'Tear-off Calendar',
        unified: '1F4C6',
        keywords: ['schedule', 'date', 'planning'],
        sheet: [26, 28],
        shortName: 'calendar'
      }, {
        name: 'Clock Face Eight-Thirty',
        unified: '1F563',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [29, 1],
        shortName: 'clock830'
      }, {
        name: 'Male Detective',
        unified: '1F575-FE0F-200D-2642-FE0F',
        obsoletes: '1F575-FE0F',
        sheet: [29, 21],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F575-1F3FB-200D-2642-FE0F',
          sheet: [29, 22]
        }, {
          unified: '1F575-1F3FC-200D-2642-FE0F',
          sheet: [29, 23]
        }, {
          unified: '1F575-1F3FD-200D-2642-FE0F',
          sheet: [29, 24]
        }, {
          unified: '1F575-1F3FE-200D-2642-FE0F',
          sheet: [29, 25]
        }, {
          unified: '1F575-1F3FF-200D-2642-FE0F',
          sheet: [29, 26]
        }],
        shortName: 'male-detective'
      }, {
        name: 'Mali Flag',
        unified: '1F1F2-1F1F1',
        sheet: [3, 10],
        shortName: 'flag-ml'
      }, {
        name: 'Clock Face Nine Oclock',
        unified: '1F558',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 47],
        shortName: 'clock9'
      }, {
        name: 'Female Detective',
        unified: '1F575-FE0F-200D-2640-FE0F',
        sheet: [29, 15],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F575-1F3FB-200D-2640-FE0F',
          sheet: [29, 16]
        }, {
          unified: '1F575-1F3FC-200D-2640-FE0F',
          sheet: [29, 17]
        }, {
          unified: '1F575-1F3FD-200D-2640-FE0F',
          sheet: [29, 18]
        }, {
          unified: '1F575-1F3FE-200D-2640-FE0F',
          sheet: [29, 19]
        }, {
          unified: '1F575-1F3FF-200D-2640-FE0F',
          sheet: [29, 20]
        }],
        shortName: 'female-detective'
      }, {
        name: 'Spiral Note Pad',
        unified: '1F5D2-FE0F',
        sheet: [30, 19],
        shortName: 'spiral_note_pad'
      }, {
        name: 'Circled Latin Capital Letter M',
        unified: '24C2-FE0F',
        keywords: ['alphabet', 'blue-circle', 'letter'],
        sheet: [52, 40],
        shortName: 'm'
      }, {
        name: 'Squared New',
        unified: '1F195',
        keywords: ['blue-square', 'words', 'start'],
        sheet: [0, 25],
        shortName: 'new'
      }, {
        name: 'Myanmar (burma) Flag',
        unified: '1F1F2-1F1F2',
        sheet: [3, 11],
        shortName: 'flag-mm'
      }, {
        name: 'Guardsman',
        unified: '1F482',
        keywords: ['uk', 'gb', 'british', 'male', 'guy', 'royal'],
        sheet: [24, 20],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F482-1F3FB',
          sheet: [24, 21],
          hidden: ['facebook']
        }, {
          unified: '1F482-1F3FC',
          sheet: [24, 22],
          hidden: ['facebook']
        }, {
          unified: '1F482-1F3FD',
          sheet: [24, 23],
          hidden: ['facebook']
        }, {
          unified: '1F482-1F3FE',
          sheet: [24, 24],
          hidden: ['facebook']
        }, {
          unified: '1F482-1F3FF',
          sheet: [24, 25],
          hidden: ['facebook']
        }],
        shortName: 'guardsman',
        obsoletedBy: '1F482-200D-2642-FE0F'
      }, {
        name: 'Clock Face Nine-Thirty',
        unified: '1F564',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [29, 2],
        shortName: 'clock930'
      }, {
        name: 'Spiral Calendar Pad',
        unified: '1F5D3-FE0F',
        sheet: [30, 20],
        shortName: 'spiral_calendar_pad'
      }, {
        name: 'Squared Ng',
        unified: '1F196',
        keywords: ['blue-square', 'words', 'shape', 'icon'],
        sheet: [0, 26],
        shortName: 'ng'
      }, {
        name: 'Mongolia Flag',
        unified: '1F1F2-1F1F3',
        sheet: [3, 12],
        shortName: 'flag-mn'
      }, {
        name: 'Male Guard',
        unified: '1F482-200D-2642-FE0F',
        obsoletes: '1F482',
        sheet: [24, 14],
        skinVariations: [{
          unified: '1F482-1F3FB-200D-2642-FE0F',
          sheet: [24, 15]
        }, {
          unified: '1F482-1F3FC-200D-2642-FE0F',
          sheet: [24, 16]
        }, {
          unified: '1F482-1F3FD-200D-2642-FE0F',
          sheet: [24, 17]
        }, {
          unified: '1F482-1F3FE-200D-2642-FE0F',
          sheet: [24, 18]
        }, {
          unified: '1F482-1F3FF-200D-2642-FE0F',
          sheet: [24, 19]
        }],
        shortName: 'male-guard'
      }, {
        name: 'Card Index',
        unified: '1F4C7',
        keywords: ['business', 'stationery'],
        sheet: [26, 29],
        shortName: 'card_index'
      }, {
        name: 'Clock Face Ten Oclock',
        unified: '1F559',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 48],
        shortName: 'clock10'
      }, {
        name: 'Negative Squared Latin Capital Letter O',
        unified: '1F17E-FE0F',
        keywords: ['alphabet', 'red-square', 'letter'],
        sheet: [0, 18],
        shortName: 'o2'
      }, {
        name: 'Macao Sar China Flag',
        unified: '1F1F2-1F1F4',
        sheet: [3, 13],
        shortName: 'flag-mo'
      }, {
        name: 'Female Guard',
        unified: '1F482-200D-2640-FE0F',
        sheet: [24, 8],
        skinVariations: [{
          unified: '1F482-1F3FB-200D-2640-FE0F',
          sheet: [24, 9]
        }, {
          unified: '1F482-1F3FC-200D-2640-FE0F',
          sheet: [24, 10]
        }, {
          unified: '1F482-1F3FD-200D-2640-FE0F',
          sheet: [24, 11]
        }, {
          unified: '1F482-1F3FE-200D-2640-FE0F',
          sheet: [24, 12]
        }, {
          unified: '1F482-1F3FF-200D-2640-FE0F',
          sheet: [24, 13]
        }],
        shortName: 'female-guard'
      }, {
        name: 'Chart with Upwards Trend',
        unified: '1F4C8',
        keywords: ['graph', 'presentation', 'stats', 'recovery', 'business', 'economics', 'money', 'sales', 'good', 'success'],
        sheet: [26, 30],
        shortName: 'chart_with_upwards_trend'
      }, {
        name: 'Clock Face Ten-Thirty',
        unified: '1F565',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [29, 3],
        shortName: 'clock1030'
      }, {
        name: 'Squared Ok',
        unified: '1F197',
        keywords: ['good', 'agree', 'yes', 'blue-square'],
        sheet: [0, 27],
        shortName: 'ok'
      }, {
        name: 'Northern Mariana Islands Flag',
        unified: '1F1F2-1F1F5',
        sheet: [3, 14],
        shortName: 'flag-mp'
      }, {
        name: 'Construction Worker',
        unified: '1F477',
        sheet: [23, 22],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F477-1F3FB',
          sheet: [23, 23],
          hidden: ['facebook']
        }, {
          unified: '1F477-1F3FC',
          sheet: [23, 24],
          hidden: ['facebook']
        }, {
          unified: '1F477-1F3FD',
          sheet: [23, 25],
          hidden: ['facebook']
        }, {
          unified: '1F477-1F3FE',
          sheet: [23, 26],
          hidden: ['facebook']
        }, {
          unified: '1F477-1F3FF',
          sheet: [23, 27],
          hidden: ['facebook']
        }],
        shortName: 'construction_worker',
        obsoletedBy: '1F477-200D-2642-FE0F'
      }, {
        name: 'Chart with Downwards Trend',
        unified: '1F4C9',
        keywords: ['graph', 'presentation', 'stats', 'recession', 'business', 'economics', 'money', 'sales', 'bad', 'failure'],
        sheet: [26, 31],
        shortName: 'chart_with_downwards_trend'
      }, {
        name: 'Clock Face Eleven Oclock',
        unified: '1F55A',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [28, 49],
        shortName: 'clock11'
      }, {
        name: 'Negative Squared Latin Capital Letter P',
        unified: '1F17F-FE0F',
        keywords: ['cars', 'blue-square', 'alphabet', 'letter'],
        sheet: [0, 19],
        shortName: 'parking'
      }, {
        name: 'Martinique Flag',
        unified: '1F1F2-1F1F6',
        sheet: [3, 15],
        shortName: 'flag-mq'
      }, {
        name: 'Male Construction Worker',
        unified: '1F477-200D-2642-FE0F',
        obsoletes: '1F477',
        sheet: [23, 16],
        skinVariations: [{
          unified: '1F477-1F3FB-200D-2642-FE0F',
          sheet: [23, 17]
        }, {
          unified: '1F477-1F3FC-200D-2642-FE0F',
          sheet: [23, 18]
        }, {
          unified: '1F477-1F3FD-200D-2642-FE0F',
          sheet: [23, 19]
        }, {
          unified: '1F477-1F3FE-200D-2642-FE0F',
          sheet: [23, 20]
        }, {
          unified: '1F477-1F3FF-200D-2642-FE0F',
          sheet: [23, 21]
        }],
        shortName: 'male-construction-worker'
      }, {
        name: 'Bar Chart',
        unified: '1F4CA',
        keywords: ['graph', 'presentation', 'stats'],
        sheet: [26, 32],
        shortName: 'bar_chart'
      }, {
        name: 'Clock Face Eleven-Thirty',
        unified: '1F566',
        keywords: ['time', 'late', 'early', 'schedule'],
        sheet: [29, 4],
        shortName: 'clock1130'
      }, {
        name: 'Squared Sos',
        unified: '1F198',
        keywords: ['help', 'red-square', 'words', 'emergency', '911'],
        sheet: [0, 28],
        shortName: 'sos'
      }, {
        name: 'Mauritania Flag',
        unified: '1F1F2-1F1F7',
        sheet: [3, 16],
        shortName: 'flag-mr'
      }, {
        name: 'New Moon Symbol',
        unified: '1F311',
        keywords: ['nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep'],
        sheet: [5, 36],
        shortName: 'new_moon'
      }, {
        name: 'Female Construction Worker',
        unified: '1F477-200D-2640-FE0F',
        sheet: [23, 10],
        skinVariations: [{
          unified: '1F477-1F3FB-200D-2640-FE0F',
          sheet: [23, 11]
        }, {
          unified: '1F477-1F3FC-200D-2640-FE0F',
          sheet: [23, 12]
        }, {
          unified: '1F477-1F3FD-200D-2640-FE0F',
          sheet: [23, 13]
        }, {
          unified: '1F477-1F3FE-200D-2640-FE0F',
          sheet: [23, 14]
        }, {
          unified: '1F477-1F3FF-200D-2640-FE0F',
          sheet: [23, 15]
        }],
        shortName: 'female-construction-worker'
      }, {
        name: 'Clipboard',
        unified: '1F4CB',
        keywords: ['stationery', 'documents'],
        sheet: [26, 33],
        shortName: 'clipboard'
      }, {
        name: 'Squared Up with Exclamation Mark',
        unified: '1F199',
        keywords: ['blue-square', 'above', 'high'],
        sheet: [0, 29],
        shortName: 'up'
      }, {
        name: 'Montserrat Flag',
        unified: '1F1F2-1F1F8',
        sheet: [3, 17],
        shortName: 'flag-ms'
      }, {
        name: 'Waxing Crescent Moon Symbol',
        unified: '1F312',
        keywords: ['nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep'],
        sheet: [5, 37],
        shortName: 'waxing_crescent_moon'
      }, {
        name: 'Pushpin',
        unified: '1F4CC',
        keywords: ['stationery', 'mark', 'here'],
        sheet: [26, 34],
        shortName: 'pushpin'
      }, {
        name: 'Prince',
        unified: '1F934',
        keywords: ['boy', 'man', 'male', 'crown', 'royal', 'king'],
        sheet: [39, 17],
        skinVariations: [{
          unified: '1F934-1F3FB',
          sheet: [39, 18]
        }, {
          unified: '1F934-1F3FC',
          sheet: [39, 19]
        }, {
          unified: '1F934-1F3FD',
          sheet: [39, 20]
        }, {
          unified: '1F934-1F3FE',
          sheet: [39, 21]
        }, {
          unified: '1F934-1F3FF',
          sheet: [39, 22]
        }],
        shortName: 'prince'
      }, {
        name: 'Squared Vs',
        unified: '1F19A',
        keywords: ['words', 'orange-square'],
        sheet: [0, 30],
        shortName: 'vs'
      }, {
        name: 'Malta Flag',
        unified: '1F1F2-1F1F9',
        sheet: [3, 18],
        shortName: 'flag-mt'
      }, {
        name: 'First Quarter Moon Symbol',
        unified: '1F313',
        keywords: ['nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep'],
        sheet: [5, 38],
        shortName: 'first_quarter_moon'
      }, {
        name: 'Princess',
        unified: '1F478',
        keywords: ['girl', 'woman', 'female', 'blond', 'crown', 'royal', 'queen'],
        sheet: [23, 28],
        skinVariations: [{
          unified: '1F478-1F3FB',
          sheet: [23, 29]
        }, {
          unified: '1F478-1F3FC',
          sheet: [23, 30]
        }, {
          unified: '1F478-1F3FD',
          sheet: [23, 31]
        }, {
          unified: '1F478-1F3FE',
          sheet: [23, 32]
        }, {
          unified: '1F478-1F3FF',
          sheet: [23, 33]
        }],
        shortName: 'princess'
      }, {
        name: 'Round Pushpin',
        unified: '1F4CD',
        keywords: ['stationery', 'location', 'map', 'here'],
        sheet: [26, 35],
        shortName: 'round_pushpin'
      }, {
        name: 'Mauritius Flag',
        unified: '1F1F2-1F1FA',
        sheet: [3, 19],
        shortName: 'flag-mu'
      }, {
        name: 'Squared Katakana Koko',
        unified: '1F201',
        keywords: ['blue-square', 'here', 'katakana', 'japanese', 'destination'],
        sheet: [5, 4],
        shortName: 'koko'
      }, {
        name: 'Waxing Gibbous Moon Symbol',
        unified: '1F314',
        sheet: [5, 39],
        shortNames: ['waxing_gibbous_moon'],
        shortName: 'moon'
      }, {
        name: 'Man with Turban',
        unified: '1F473',
        keywords: ['male', 'indian', 'hinduism', 'arabs'],
        sheet: [22, 43],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F473-1F3FB',
          sheet: [22, 44],
          hidden: ['facebook']
        }, {
          unified: '1F473-1F3FC',
          sheet: [22, 45],
          hidden: ['facebook']
        }, {
          unified: '1F473-1F3FD',
          sheet: [22, 46],
          hidden: ['facebook']
        }, {
          unified: '1F473-1F3FE',
          sheet: [22, 47],
          hidden: ['facebook']
        }, {
          unified: '1F473-1F3FF',
          sheet: [22, 48],
          hidden: ['facebook']
        }],
        shortName: 'man_with_turban',
        obsoletedBy: '1F473-200D-2642-FE0F'
      }, {
        name: 'Paperclip',
        unified: '1F4CE',
        keywords: ['documents', 'stationery'],
        sheet: [26, 36],
        shortName: 'paperclip'
      }, {
        name: 'Maldives Flag',
        unified: '1F1F2-1F1FB',
        sheet: [3, 20],
        shortName: 'flag-mv'
      }, {
        name: 'Squared Katakana Sa',
        unified: '1F202-FE0F',
        keywords: ['japanese', 'blue-square', 'katakana'],
        sheet: [5, 5],
        shortName: 'sa'
      }, {
        name: 'Full Moon Symbol',
        unified: '1F315',
        keywords: ['nature', 'yellow', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep'],
        sheet: [5, 40],
        shortName: 'full_moon'
      }, {
        name: 'Man Wearing Turban',
        unified: '1F473-200D-2642-FE0F',
        obsoletes: '1F473',
        sheet: [22, 37],
        skinVariations: [{
          unified: '1F473-1F3FB-200D-2642-FE0F',
          sheet: [22, 38]
        }, {
          unified: '1F473-1F3FC-200D-2642-FE0F',
          sheet: [22, 39]
        }, {
          unified: '1F473-1F3FD-200D-2642-FE0F',
          sheet: [22, 40]
        }, {
          unified: '1F473-1F3FE-200D-2642-FE0F',
          sheet: [22, 41]
        }, {
          unified: '1F473-1F3FF-200D-2642-FE0F',
          sheet: [22, 42]
        }],
        shortName: 'man-wearing-turban'
      }, {
        name: 'Linked Paperclips',
        unified: '1F587-FE0F',
        sheet: [29, 43],
        shortName: 'linked_paperclips'
      }, {
        name: 'Malawi Flag',
        unified: '1F1F2-1F1FC',
        sheet: [3, 21],
        shortName: 'flag-mw'
      }, {
        name: 'Squared Cjk Unified Ideograph-6708',
        unified: '1F237-FE0F',
        keywords: ['chinese', 'month', 'moon', 'japanese', 'orange-square', 'kanji'],
        sheet: [5, 13],
        shortName: 'u6708'
      }, {
        name: 'Waning Gibbous Moon Symbol',
        unified: '1F316',
        keywords: ['nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep', 'waxing_gibbous_moon'],
        sheet: [5, 41],
        shortName: 'waning_gibbous_moon'
      }, {
        name: 'Woman Wearing Turban',
        unified: '1F473-200D-2640-FE0F',
        sheet: [22, 31],
        skinVariations: [{
          unified: '1F473-1F3FB-200D-2640-FE0F',
          sheet: [22, 32]
        }, {
          unified: '1F473-1F3FC-200D-2640-FE0F',
          sheet: [22, 33]
        }, {
          unified: '1F473-1F3FD-200D-2640-FE0F',
          sheet: [22, 34]
        }, {
          unified: '1F473-1F3FE-200D-2640-FE0F',
          sheet: [22, 35]
        }, {
          unified: '1F473-1F3FF-200D-2640-FE0F',
          sheet: [22, 36]
        }],
        shortName: 'woman-wearing-turban'
      }, {
        name: 'Straight Ruler',
        unified: '1F4CF',
        keywords: ['stationery', 'calculate', 'length', 'math', 'school', 'drawing', 'architect', 'sketch'],
        sheet: [26, 37],
        shortName: 'straight_ruler'
      }, {
        name: 'Mexico Flag',
        unified: '1F1F2-1F1FD',
        sheet: [3, 22],
        shortName: 'flag-mx'
      }, {
        name: 'Squared Cjk Unified Ideograph-6709',
        unified: '1F236',
        keywords: ['orange-square', 'chinese', 'have', 'kanji'],
        sheet: [5, 12],
        shortName: 'u6709'
      }, {
        name: 'Last Quarter Moon Symbol',
        unified: '1F317',
        keywords: ['nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep'],
        sheet: [5, 42],
        shortName: 'last_quarter_moon'
      }, {
        name: 'Man with Gua Pi Mao',
        unified: '1F472',
        keywords: ['male', 'boy', 'chinese'],
        sheet: [22, 25],
        skinVariations: [{
          unified: '1F472-1F3FB',
          sheet: [22, 26]
        }, {
          unified: '1F472-1F3FC',
          sheet: [22, 27]
        }, {
          unified: '1F472-1F3FD',
          sheet: [22, 28]
        }, {
          unified: '1F472-1F3FE',
          sheet: [22, 29]
        }, {
          unified: '1F472-1F3FF',
          sheet: [22, 30]
        }],
        shortName: 'man_with_gua_pi_mao'
      }, {
        name: 'Triangular Ruler',
        unified: '1F4D0',
        keywords: ['stationery', 'math', 'architect', 'sketch'],
        sheet: [26, 38],
        shortName: 'triangular_ruler'
      }, {
        name: 'Malaysia Flag',
        unified: '1F1F2-1F1FE',
        sheet: [3, 23],
        shortName: 'flag-my'
      }, {
        name: 'Squared Cjk Unified Ideograph-6307',
        unified: '1F22F',
        keywords: ['chinese', 'point', 'green-square', 'kanji'],
        sheet: [5, 7],
        shortName: 'u6307'
      }, {
        name: 'Waning Crescent Moon Symbol',
        unified: '1F318',
        keywords: ['nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep'],
        sheet: [5, 43],
        shortName: 'waning_crescent_moon'
      }, {
        name: 'Person with Headscarf',
        unified: '1F9D5',
        sheet: [48, 34],
        skinVariations: [{
          unified: '1F9D5-1F3FB',
          sheet: [48, 35]
        }, {
          unified: '1F9D5-1F3FC',
          sheet: [48, 36]
        }, {
          unified: '1F9D5-1F3FD',
          sheet: [48, 37]
        }, {
          unified: '1F9D5-1F3FE',
          sheet: [48, 38]
        }, {
          unified: '1F9D5-1F3FF',
          sheet: [48, 39]
        }],
        shortName: 'person_with_headscarf'
      }, {
        name: 'Black Scissors',
        unified: '2702-FE0F',
        keywords: ['stationery', 'cut'],
        sheet: [54, 39],
        shortName: 'scissors'
      }, {
        name: 'Mozambique Flag',
        unified: '1F1F2-1F1FF',
        sheet: [3, 24],
        shortName: 'flag-mz'
      }, {
        name: 'Circled Ideograph Advantage',
        unified: '1F250',
        keywords: ['chinese', 'kanji', 'obtain', 'get', 'circle'],
        sheet: [5, 17],
        shortName: 'ideograph_advantage'
      }, {
        name: 'Crescent Moon',
        unified: '1F319',
        keywords: ['night', 'sleep', 'sky', 'evening', 'magic'],
        sheet: [5, 44],
        shortName: 'crescent_moon'
      }, {
        name: 'Card File Box',
        unified: '1F5C3-FE0F',
        keywords: ['business', 'stationery'],
        sheet: [30, 16],
        shortName: 'card_file_box'
      }, {
        name: 'Man in Tuxedo',
        unified: '1F935',
        keywords: ['couple', 'marriage', 'wedding', 'groom'],
        sheet: [39, 23],
        skinVariations: [{
          unified: '1F935-1F3FB',
          sheet: [39, 24]
        }, {
          unified: '1F935-1F3FC',
          sheet: [39, 25]
        }, {
          unified: '1F935-1F3FD',
          sheet: [39, 26]
        }, {
          unified: '1F935-1F3FE',
          sheet: [39, 27]
        }, {
          unified: '1F935-1F3FF',
          sheet: [39, 28]
        }],
        shortName: 'man_in_tuxedo'
      }, {
        name: 'Namibia Flag',
        unified: '1F1F3-1F1E6',
        sheet: [3, 25],
        shortName: 'flag-na'
      }, {
        name: 'Squared Cjk Unified Ideograph-5272',
        unified: '1F239',
        keywords: ['cut', 'divide', 'chinese', 'kanji', 'pink-square'],
        sheet: [5, 15],
        shortName: 'u5272'
      }, {
        name: 'New Moon with Face',
        unified: '1F31A',
        keywords: ['nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep'],
        sheet: [5, 45],
        shortName: 'new_moon_with_face'
      }, {
        name: 'Bride with Veil',
        unified: '1F470',
        keywords: ['couple', 'marriage', 'wedding', 'woman', 'bride'],
        sheet: [22, 1],
        skinVariations: [{
          unified: '1F470-1F3FB',
          sheet: [22, 2]
        }, {
          unified: '1F470-1F3FC',
          sheet: [22, 3]
        }, {
          unified: '1F470-1F3FD',
          sheet: [22, 4]
        }, {
          unified: '1F470-1F3FE',
          sheet: [22, 5]
        }, {
          unified: '1F470-1F3FF',
          sheet: [22, 6]
        }],
        shortName: 'bride_with_veil'
      }, {
        name: 'File Cabinet',
        unified: '1F5C4-FE0F',
        keywords: ['filing', 'organizing'],
        sheet: [30, 17],
        shortName: 'file_cabinet'
      }, {
        name: 'New Caledonia Flag',
        unified: '1F1F3-1F1E8',
        sheet: [3, 26],
        shortName: 'flag-nc'
      }, {
        name: 'Squared Cjk Unified Ideograph-7121',
        unified: '1F21A',
        keywords: ['nothing', 'chinese', 'kanji', 'japanese', 'orange-square'],
        sheet: [5, 6],
        shortName: 'u7121'
      }, {
        name: 'First Quarter Moon with Face',
        unified: '1F31B',
        keywords: ['nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep'],
        sheet: [5, 46],
        shortName: 'first_quarter_moon_with_face'
      }, {
        name: 'Wastebasket',
        unified: '1F5D1-FE0F',
        keywords: ['bin', 'trash', 'rubbish', 'garbage', 'toss'],
        sheet: [30, 18],
        shortName: 'wastebasket'
      }, {
        name: 'Pregnant Woman',
        unified: '1F930',
        keywords: ['baby'],
        sheet: [38, 50],
        skinVariations: [{
          unified: '1F930-1F3FB',
          sheet: [38, 51]
        }, {
          unified: '1F930-1F3FC',
          sheet: [38, 52]
        }, {
          unified: '1F930-1F3FD',
          sheet: [38, 53]
        }, {
          unified: '1F930-1F3FE',
          sheet: [38, 54]
        }, {
          unified: '1F930-1F3FF',
          sheet: [38, 55]
        }],
        shortName: 'pregnant_woman'
      }, {
        name: 'Niger Flag',
        unified: '1F1F3-1F1EA',
        sheet: [3, 27],
        shortName: 'flag-ne'
      }, {
        name: 'Squared Cjk Unified Ideograph-7981',
        unified: '1F232',
        keywords: ['kanji', 'japanese', 'chinese', 'forbidden', 'limit', 'restricted', 'red-square'],
        sheet: [5, 8],
        shortName: 'u7981'
      }, {
        name: 'Last Quarter Moon with Face',
        unified: '1F31C',
        keywords: ['nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep'],
        sheet: [5, 47],
        shortName: 'last_quarter_moon_with_face'
      }, {
        name: 'Lock',
        unified: '1F512',
        keywords: ['security', 'password', 'padlock'],
        sheet: [27, 46],
        shortName: 'lock'
      }, {
        name: 'Breast-Feeding',
        unified: '1F931',
        sheet: [38, 56],
        skinVariations: [{
          unified: '1F931-1F3FB',
          sheet: [39, 0]
        }, {
          unified: '1F931-1F3FC',
          sheet: [39, 1]
        }, {
          unified: '1F931-1F3FD',
          sheet: [39, 2]
        }, {
          unified: '1F931-1F3FE',
          sheet: [39, 3]
        }, {
          unified: '1F931-1F3FF',
          sheet: [39, 4]
        }],
        shortName: 'breast-feeding'
      }, {
        name: 'Norfolk Island Flag',
        unified: '1F1F3-1F1EB',
        sheet: [3, 28],
        shortName: 'flag-nf'
      }, {
        name: 'Circled Ideograph Accept',
        unified: '1F251',
        keywords: ['ok', 'good', 'chinese', 'kanji', 'agree', 'yes', 'orange-circle'],
        sheet: [5, 18],
        shortName: 'accept'
      }, {
        name: 'Thermometer',
        unified: '1F321-FE0F',
        keywords: ['weather', 'temperature', 'hot', 'cold'],
        sheet: [5, 52],
        shortName: 'thermometer'
      }, {
        name: 'Baby Angel',
        unified: '1F47C',
        keywords: ['heaven', 'wings', 'halo'],
        sheet: [23, 37],
        skinVariations: [{
          unified: '1F47C-1F3FB',
          sheet: [23, 38]
        }, {
          unified: '1F47C-1F3FC',
          sheet: [23, 39]
        }, {
          unified: '1F47C-1F3FD',
          sheet: [23, 40]
        }, {
          unified: '1F47C-1F3FE',
          sheet: [23, 41]
        }, {
          unified: '1F47C-1F3FF',
          sheet: [23, 42]
        }],
        shortName: 'angel'
      }, {
        name: 'Open Lock',
        unified: '1F513',
        keywords: ['privacy', 'security'],
        sheet: [27, 47],
        shortName: 'unlock'
      }, {
        name: 'Nigeria Flag',
        unified: '1F1F3-1F1EC',
        sheet: [3, 29],
        shortName: 'flag-ng'
      }, {
        name: 'Squared Cjk Unified Ideograph-7533',
        unified: '1F238',
        keywords: ['chinese', 'japanese', 'kanji', 'orange-square'],
        sheet: [5, 14],
        shortName: 'u7533'
      }, {
        name: 'Father Christmas',
        unified: '1F385',
        keywords: ['festival', 'man', 'male', 'xmas', 'father christmas'],
        sheet: [7, 36],
        skinVariations: [{
          unified: '1F385-1F3FB',
          sheet: [7, 37]
        }, {
          unified: '1F385-1F3FC',
          sheet: [7, 38]
        }, {
          unified: '1F385-1F3FD',
          sheet: [7, 39]
        }, {
          unified: '1F385-1F3FE',
          sheet: [7, 40]
        }, {
          unified: '1F385-1F3FF',
          sheet: [7, 41]
        }],
        shortName: 'santa'
      }, {
        name: 'Lock with Ink Pen',
        unified: '1F50F',
        keywords: ['security', 'secret'],
        sheet: [27, 43],
        shortName: 'lock_with_ink_pen'
      }, {
        name: 'Black Sun with Rays',
        unified: '2600-FE0F',
        keywords: ['weather', 'nature', 'brightness', 'summer', 'beach', 'spring'],
        sheet: [52, 49],
        shortName: 'sunny'
      }, {
        name: 'Nicaragua Flag',
        unified: '1F1F3-1F1EE',
        sheet: [3, 30],
        shortName: 'flag-ni'
      }, {
        name: 'Squared Cjk Unified Ideograph-5408',
        unified: '1F234',
        keywords: ['japanese', 'chinese', 'join', 'kanji', 'red-square'],
        sheet: [5, 10],
        shortName: 'u5408'
      }, {
        name: 'Full Moon with Face',
        unified: '1F31D',
        keywords: ['nature', 'twilight', 'planet', 'space', 'night', 'evening', 'sleep'],
        sheet: [5, 48],
        shortName: 'full_moon_with_face'
      }, {
        name: 'Closed Lock with Key',
        unified: '1F510',
        keywords: ['security', 'privacy'],
        sheet: [27, 44],
        shortName: 'closed_lock_with_key'
      }, {
        name: 'Mother Christmas',
        unified: '1F936',
        keywords: ['woman', 'female', 'xmas', 'mother christmas'],
        sheet: [39, 29],
        skinVariations: [{
          unified: '1F936-1F3FB',
          sheet: [39, 30]
        }, {
          unified: '1F936-1F3FC',
          sheet: [39, 31]
        }, {
          unified: '1F936-1F3FD',
          sheet: [39, 32]
        }, {
          unified: '1F936-1F3FE',
          sheet: [39, 33]
        }, {
          unified: '1F936-1F3FF',
          sheet: [39, 34]
        }],
        shortNames: ['mother_christmas'],
        shortName: 'mrs_claus'
      }, {
        name: 'Netherlands Flag',
        unified: '1F1F3-1F1F1',
        sheet: [3, 31],
        shortName: 'flag-nl'
      }, {
        name: 'Squared Cjk Unified Ideograph-7a7a',
        unified: '1F233',
        keywords: ['kanji', 'japanese', 'chinese', 'empty', 'sky', 'blue-square'],
        sheet: [5, 9],
        shortName: 'u7a7a'
      }, {
        name: 'Sun with Face',
        unified: '1F31E',
        keywords: ['nature', 'morning', 'sky'],
        sheet: [5, 49],
        shortName: 'sun_with_face'
      }, {
        name: 'Key',
        unified: '1F511',
        keywords: ['lock', 'door', 'password'],
        sheet: [27, 45],
        shortName: 'key'
      }, {
        name: 'Superhero',
        unified: '1F9B8',
        sheet: [43, 30],
        skinVariations: [{
          unified: '1F9B8-1F3FB',
          sheet: [43, 31]
        }, {
          unified: '1F9B8-1F3FC',
          sheet: [43, 32]
        }, {
          unified: '1F9B8-1F3FD',
          sheet: [43, 33]
        }, {
          unified: '1F9B8-1F3FE',
          sheet: [43, 34]
        }, {
          unified: '1F9B8-1F3FF',
          sheet: [43, 35]
        }],
        shortName: 'superhero'
      }, {
        name: 'Norway Flag',
        unified: '1F1F3-1F1F4',
        sheet: [3, 32],
        shortName: 'flag-no'
      }, {
        name: 'Old Key',
        unified: '1F5DD-FE0F',
        keywords: ['lock', 'door', 'password'],
        sheet: [30, 22],
        shortName: 'old_key'
      }, {
        name: 'Male Superhero',
        unified: '1F9B8-200D-2642-FE0F',
        sheet: [43, 24],
        skinVariations: [{
          unified: '1F9B8-1F3FB-200D-2642-FE0F',
          sheet: [43, 25]
        }, {
          unified: '1F9B8-1F3FC-200D-2642-FE0F',
          sheet: [43, 26]
        }, {
          unified: '1F9B8-1F3FD-200D-2642-FE0F',
          sheet: [43, 27]
        }, {
          unified: '1F9B8-1F3FE-200D-2642-FE0F',
          sheet: [43, 28]
        }, {
          unified: '1F9B8-1F3FF-200D-2642-FE0F',
          sheet: [43, 29]
        }],
        shortName: 'male_superhero'
      }, {
        name: 'Ringed Planet',
        unified: '1FA90',
        sheet: [52, 4],
        shortName: 'ringed_planet'
      }, {
        name: 'Circled Ideograph Congratulation',
        unified: '3297-FE0F',
        keywords: ['chinese', 'kanji', 'japanese', 'red-circle'],
        sheet: [55, 46],
        shortName: 'congratulations'
      }, {
        name: 'Nepal Flag',
        unified: '1F1F3-1F1F5',
        sheet: [3, 33],
        shortName: 'flag-np'
      }, {
        name: 'Hammer',
        unified: '1F528',
        keywords: ['tools', 'build', 'create'],
        sheet: [28, 11],
        shortName: 'hammer'
      }, {
        name: 'Female Superhero',
        unified: '1F9B8-200D-2640-FE0F',
        sheet: [43, 18],
        skinVariations: [{
          unified: '1F9B8-1F3FB-200D-2640-FE0F',
          sheet: [43, 19]
        }, {
          unified: '1F9B8-1F3FC-200D-2640-FE0F',
          sheet: [43, 20]
        }, {
          unified: '1F9B8-1F3FD-200D-2640-FE0F',
          sheet: [43, 21]
        }, {
          unified: '1F9B8-1F3FE-200D-2640-FE0F',
          sheet: [43, 22]
        }, {
          unified: '1F9B8-1F3FF-200D-2640-FE0F',
          sheet: [43, 23]
        }],
        shortName: 'female_superhero'
      }, {
        name: 'White Medium Star',
        unified: '2B50',
        keywords: ['night', 'yellow'],
        sheet: [55, 42],
        shortName: 'star'
      }, {
        name: 'Circled Ideograph Secret',
        unified: '3299-FE0F',
        keywords: ['privacy', 'chinese', 'sshh', 'kanji', 'red-circle'],
        sheet: [55, 47],
        shortName: 'secret'
      }, {
        name: 'Nauru Flag',
        unified: '1F1F3-1F1F7',
        sheet: [3, 34],
        shortName: 'flag-nr'
      }, {
        name: 'Squared Cjk Unified Ideograph-55b6',
        unified: '1F23A',
        keywords: ['japanese', 'opening hours', 'orange-square'],
        sheet: [5, 16],
        shortName: 'u55b6'
      }, {
        name: 'Glowing Star',
        unified: '1F31F',
        keywords: ['night', 'sparkle', 'awesome', 'good', 'magic'],
        sheet: [5, 50],
        shortName: 'star2'
      }, {
        name: 'Supervillain',
        unified: '1F9B9',
        sheet: [43, 48],
        skinVariations: [{
          unified: '1F9B9-1F3FB',
          sheet: [43, 49]
        }, {
          unified: '1F9B9-1F3FC',
          sheet: [43, 50]
        }, {
          unified: '1F9B9-1F3FD',
          sheet: [43, 51]
        }, {
          unified: '1F9B9-1F3FE',
          sheet: [43, 52]
        }, {
          unified: '1F9B9-1F3FF',
          sheet: [43, 53]
        }],
        shortName: 'supervillain'
      }, {
        name: 'Axe',
        unified: '1FA93',
        sheet: [52, 7],
        shortName: 'axe'
      }, {
        name: 'Niue Flag',
        unified: '1F1F3-1F1FA',
        sheet: [3, 35],
        shortName: 'flag-nu'
      }, {
        name: 'Squared Cjk Unified Ideograph-6e80',
        unified: '1F235',
        keywords: ['full', 'chinese', 'japanese', 'red-square', 'kanji'],
        sheet: [5, 11],
        shortName: 'u6e80'
      }, {
        name: 'Shooting Star',
        unified: '1F320',
        keywords: ['night', 'photo'],
        sheet: [5, 51],
        shortName: 'stars'
      }, {
        name: 'Male Supervillain',
        unified: '1F9B9-200D-2642-FE0F',
        sheet: [43, 42],
        skinVariations: [{
          unified: '1F9B9-1F3FB-200D-2642-FE0F',
          sheet: [43, 43]
        }, {
          unified: '1F9B9-1F3FC-200D-2642-FE0F',
          sheet: [43, 44]
        }, {
          unified: '1F9B9-1F3FD-200D-2642-FE0F',
          sheet: [43, 45]
        }, {
          unified: '1F9B9-1F3FE-200D-2642-FE0F',
          sheet: [43, 46]
        }, {
          unified: '1F9B9-1F3FF-200D-2642-FE0F',
          sheet: [43, 47]
        }],
        shortName: 'male_supervillain'
      }, {
        name: 'Pick',
        unified: '26CF-FE0F',
        keywords: ['tools', 'dig'],
        sheet: [54, 5],
        shortName: 'pick'
      }, {
        name: 'New Zealand Flag',
        unified: '1F1F3-1F1FF',
        sheet: [3, 36],
        shortName: 'flag-nz'
      }, {
        name: 'Milky Way',
        unified: '1F30C',
        keywords: ['photo', 'space', 'stars'],
        sheet: [5, 31],
        shortName: 'milky_way'
      }, {
        name: 'Large Red Circle',
        unified: '1F534',
        keywords: ['shape', 'error', 'danger'],
        sheet: [28, 23],
        shortName: 'red_circle'
      }, {
        name: 'Female Supervillain',
        unified: '1F9B9-200D-2640-FE0F',
        sheet: [43, 36],
        skinVariations: [{
          unified: '1F9B9-1F3FB-200D-2640-FE0F',
          sheet: [43, 37]
        }, {
          unified: '1F9B9-1F3FC-200D-2640-FE0F',
          sheet: [43, 38]
        }, {
          unified: '1F9B9-1F3FD-200D-2640-FE0F',
          sheet: [43, 39]
        }, {
          unified: '1F9B9-1F3FE-200D-2640-FE0F',
          sheet: [43, 40]
        }, {
          unified: '1F9B9-1F3FF-200D-2640-FE0F',
          sheet: [43, 41]
        }],
        shortName: 'female_supervillain'
      }, {
        name: 'Hammer and Pick',
        unified: '2692-FE0F',
        keywords: ['tools', 'build', 'create'],
        sheet: [53, 41],
        shortName: 'hammer_and_pick'
      }, {
        name: 'Oman Flag',
        unified: '1F1F4-1F1F2',
        sheet: [3, 37],
        shortName: 'flag-om'
      }, {
        name: 'Hammer and Wrench',
        unified: '1F6E0-FE0F',
        keywords: ['tools', 'build', 'create'],
        sheet: [36, 42],
        shortName: 'hammer_and_wrench'
      }, {
        name: 'Large Orange Circle',
        unified: '1F7E0',
        sheet: [37, 3],
        shortName: 'large_orange_circle'
      }, {
        name: 'Mage',
        unified: '1F9D9',
        sheet: [49, 49],
        skinVariations: [{
          unified: '1F9D9-1F3FB',
          sheet: [49, 50]
        }, {
          unified: '1F9D9-1F3FC',
          sheet: [49, 51]
        }, {
          unified: '1F9D9-1F3FD',
          sheet: [49, 52]
        }, {
          unified: '1F9D9-1F3FE',
          sheet: [49, 53]
        }, {
          unified: '1F9D9-1F3FF',
          sheet: [49, 54]
        }],
        shortName: 'mage',
        obsoletedBy: '1F9D9-200D-2640-FE0F'
      }, {
        name: 'Cloud',
        unified: '2601-FE0F',
        keywords: ['weather', 'sky'],
        sheet: [52, 50],
        shortName: 'cloud'
      }, {
        name: 'Panama Flag',
        unified: '1F1F5-1F1E6',
        sheet: [3, 38],
        shortName: 'flag-pa'
      }, {
        name: 'Dagger Knife',
        unified: '1F5E1-FE0F',
        sheet: [30, 24],
        shortName: 'dagger_knife'
      }, {
        name: 'Large Yellow Circle',
        unified: '1F7E1',
        sheet: [37, 4],
        shortName: 'large_yellow_circle'
      }, {
        name: 'Male Mage',
        unified: '1F9D9-200D-2642-FE0F',
        sheet: [49, 43],
        skinVariations: [{
          unified: '1F9D9-1F3FB-200D-2642-FE0F',
          sheet: [49, 44]
        }, {
          unified: '1F9D9-1F3FC-200D-2642-FE0F',
          sheet: [49, 45]
        }, {
          unified: '1F9D9-1F3FD-200D-2642-FE0F',
          sheet: [49, 46]
        }, {
          unified: '1F9D9-1F3FE-200D-2642-FE0F',
          sheet: [49, 47]
        }, {
          unified: '1F9D9-1F3FF-200D-2642-FE0F',
          sheet: [49, 48]
        }],
        shortName: 'male_mage'
      }, {
        name: 'Sun Behind Cloud',
        unified: '26C5',
        keywords: ['weather', 'nature', 'cloudy', 'morning', 'fall', 'spring'],
        sheet: [54, 2],
        shortName: 'partly_sunny'
      }, {
        name: 'Peru Flag',
        unified: '1F1F5-1F1EA',
        sheet: [3, 39],
        shortName: 'flag-pe'
      }, {
        name: 'Large Green Circle',
        unified: '1F7E2',
        sheet: [37, 5],
        shortName: 'large_green_circle'
      }, {
        name: 'Female Mage',
        unified: '1F9D9-200D-2640-FE0F',
        obsoletes: '1F9D9',
        sheet: [49, 37],
        skinVariations: [{
          unified: '1F9D9-1F3FB-200D-2640-FE0F',
          sheet: [49, 38]
        }, {
          unified: '1F9D9-1F3FC-200D-2640-FE0F',
          sheet: [49, 39]
        }, {
          unified: '1F9D9-1F3FD-200D-2640-FE0F',
          sheet: [49, 40]
        }, {
          unified: '1F9D9-1F3FE-200D-2640-FE0F',
          sheet: [49, 41]
        }, {
          unified: '1F9D9-1F3FF-200D-2640-FE0F',
          sheet: [49, 42]
        }],
        shortName: 'female_mage'
      }, {
        name: 'Crossed Swords',
        unified: '2694-FE0F',
        keywords: ['weapon'],
        sheet: [53, 43],
        shortName: 'crossed_swords'
      }, {
        name: 'Thunder Cloud and Rain',
        unified: '26C8-FE0F',
        sheet: [54, 3],
        shortName: 'thunder_cloud_and_rain'
      }, {
        name: 'French Polynesia Flag',
        unified: '1F1F5-1F1EB',
        sheet: [3, 40],
        shortName: 'flag-pf'
      }, {
        name: 'Mostly Sunny',
        unified: '1F324-FE0F',
        sheet: [5, 53],
        shortNames: ['sun_small_cloud'],
        shortName: 'mostly_sunny'
      }, {
        name: 'Pistol',
        unified: '1F52B',
        keywords: ['violence', 'weapon', 'pistol', 'revolver'],
        sheet: [28, 14],
        shortName: 'gun'
      }, {
        name: 'Large Blue Circle',
        unified: '1F535',
        keywords: ['shape', 'icon', 'button'],
        sheet: [28, 24],
        shortName: 'large_blue_circle'
      }, {
        name: 'Fairy',
        unified: '1F9DA',
        sheet: [50, 10],
        skinVariations: [{
          unified: '1F9DA-1F3FB',
          sheet: [50, 11],
          hidden: ['facebook']
        }, {
          unified: '1F9DA-1F3FC',
          sheet: [50, 12],
          hidden: ['facebook']
        }, {
          unified: '1F9DA-1F3FD',
          sheet: [50, 13],
          hidden: ['facebook']
        }, {
          unified: '1F9DA-1F3FE',
          sheet: [50, 14],
          hidden: ['facebook']
        }, {
          unified: '1F9DA-1F3FF',
          sheet: [50, 15],
          hidden: ['facebook']
        }],
        shortName: 'fairy',
        obsoletedBy: '1F9DA-200D-2640-FE0F'
      }, {
        name: 'Papua New Guinea Flag',
        unified: '1F1F5-1F1EC',
        sheet: [3, 41],
        shortName: 'flag-pg'
      }, {
        name: 'Barely Sunny',
        unified: '1F325-FE0F',
        sheet: [5, 54],
        shortNames: ['sun_behind_cloud'],
        shortName: 'barely_sunny'
      }, {
        name: 'Bow and Arrow',
        unified: '1F3F9',
        keywords: ['sports'],
        sheet: [11, 21],
        shortName: 'bow_and_arrow'
      }, {
        name: 'Large Purple Circle',
        unified: '1F7E3',
        sheet: [37, 6],
        shortName: 'large_purple_circle'
      }, {
        name: 'Male Fairy',
        unified: '1F9DA-200D-2642-FE0F',
        sheet: [50, 4],
        skinVariations: [{
          unified: '1F9DA-1F3FB-200D-2642-FE0F',
          sheet: [50, 5],
          hidden: ['facebook']
        }, {
          unified: '1F9DA-1F3FC-200D-2642-FE0F',
          sheet: [50, 6],
          hidden: ['facebook']
        }, {
          unified: '1F9DA-1F3FD-200D-2642-FE0F',
          sheet: [50, 7],
          hidden: ['facebook']
        }, {
          unified: '1F9DA-1F3FE-200D-2642-FE0F',
          sheet: [50, 8],
          hidden: ['facebook']
        }, {
          unified: '1F9DA-1F3FF-200D-2642-FE0F',
          sheet: [50, 9],
          hidden: ['facebook']
        }],
        shortName: 'male_fairy'
      }, {
        name: 'Philippines Flag',
        unified: '1F1F5-1F1ED',
        sheet: [3, 42],
        shortName: 'flag-ph'
      }, {
        name: 'Partly Sunny Rain',
        unified: '1F326-FE0F',
        sheet: [5, 55],
        shortNames: ['sun_behind_rain_cloud'],
        shortName: 'partly_sunny_rain'
      }, {
        name: 'Shield',
        unified: '1F6E1-FE0F',
        keywords: ['protection', 'security'],
        sheet: [36, 43],
        shortName: 'shield'
      }, {
        name: 'Large Brown Circle',
        unified: '1F7E4',
        sheet: [37, 7],
        shortName: 'large_brown_circle'
      }, {
        name: 'Female Fairy',
        unified: '1F9DA-200D-2640-FE0F',
        obsoletes: '1F9DA',
        sheet: [49, 55],
        skinVariations: [{
          unified: '1F9DA-1F3FB-200D-2640-FE0F',
          sheet: [49, 56],
          hidden: ['facebook']
        }, {
          unified: '1F9DA-1F3FC-200D-2640-FE0F',
          sheet: [50, 0],
          hidden: ['facebook']
        }, {
          unified: '1F9DA-1F3FD-200D-2640-FE0F',
          sheet: [50, 1],
          hidden: ['facebook']
        }, {
          unified: '1F9DA-1F3FE-200D-2640-FE0F',
          sheet: [50, 2],
          hidden: ['facebook']
        }, {
          unified: '1F9DA-1F3FF-200D-2640-FE0F',
          sheet: [50, 3],
          hidden: ['facebook']
        }],
        shortName: 'female_fairy'
      }, {
        name: 'Pakistan Flag',
        unified: '1F1F5-1F1F0',
        sheet: [3, 43],
        shortName: 'flag-pk'
      }, {
        name: 'Rain Cloud',
        unified: '1F327-FE0F',
        sheet: [5, 56],
        shortName: 'rain_cloud'
      }, {
        name: 'Wrench',
        unified: '1F527',
        keywords: ['tools', 'diy', 'ikea', 'fix', 'maintainer'],
        sheet: [28, 10],
        shortName: 'wrench'
      }, {
        name: 'Vampire',
        unified: '1F9DB',
        sheet: [50, 28],
        skinVariations: [{
          unified: '1F9DB-1F3FB',
          sheet: [50, 29]
        }, {
          unified: '1F9DB-1F3FC',
          sheet: [50, 30]
        }, {
          unified: '1F9DB-1F3FD',
          sheet: [50, 31]
        }, {
          unified: '1F9DB-1F3FE',
          sheet: [50, 32]
        }, {
          unified: '1F9DB-1F3FF',
          sheet: [50, 33]
        }],
        shortName: 'vampire',
        obsoletedBy: '1F9DB-200D-2640-FE0F'
      }, {
        name: 'Medium Black Circle',
        unified: '26AB',
        keywords: ['shape', 'button', 'round'],
        sheet: [53, 53],
        shortName: 'black_circle'
      }, {
        name: 'Poland Flag',
        unified: '1F1F5-1F1F1',
        sheet: [3, 44],
        shortName: 'flag-pl'
      }, {
        name: 'Snow Cloud',
        unified: '1F328-FE0F',
        sheet: [6, 0],
        shortName: 'snow_cloud'
      }, {
        name: 'Nut and Bolt',
        unified: '1F529',
        keywords: ['handy', 'tools', 'fix'],
        sheet: [28, 12],
        shortName: 'nut_and_bolt'
      }, {
        name: 'Male Vampire',
        unified: '1F9DB-200D-2642-FE0F',
        sheet: [50, 22],
        skinVariations: [{
          unified: '1F9DB-1F3FB-200D-2642-FE0F',
          sheet: [50, 23]
        }, {
          unified: '1F9DB-1F3FC-200D-2642-FE0F',
          sheet: [50, 24]
        }, {
          unified: '1F9DB-1F3FD-200D-2642-FE0F',
          sheet: [50, 25]
        }, {
          unified: '1F9DB-1F3FE-200D-2642-FE0F',
          sheet: [50, 26]
        }, {
          unified: '1F9DB-1F3FF-200D-2642-FE0F',
          sheet: [50, 27]
        }],
        shortName: 'male_vampire'
      }, {
        name: 'Medium White Circle',
        unified: '26AA',
        keywords: ['shape', 'round'],
        sheet: [53, 52],
        shortName: 'white_circle'
      }, {
        name: 'St. Pierre & Miquelon Flag',
        unified: '1F1F5-1F1F2',
        sheet: [3, 45],
        shortName: 'flag-pm'
      }, {
        name: 'Lightning',
        unified: '1F329-FE0F',
        sheet: [6, 1],
        shortNames: ['lightning_cloud'],
        shortName: 'lightning'
      }, {
        name: 'Large Red Square',
        unified: '1F7E5',
        sheet: [37, 8],
        shortName: 'large_red_square'
      }, {
        name: 'Female Vampire',
        unified: '1F9DB-200D-2640-FE0F',
        obsoletes: '1F9DB',
        sheet: [50, 16],
        skinVariations: [{
          unified: '1F9DB-1F3FB-200D-2640-FE0F',
          sheet: [50, 17]
        }, {
          unified: '1F9DB-1F3FC-200D-2640-FE0F',
          sheet: [50, 18]
        }, {
          unified: '1F9DB-1F3FD-200D-2640-FE0F',
          sheet: [50, 19]
        }, {
          unified: '1F9DB-1F3FE-200D-2640-FE0F',
          sheet: [50, 20]
        }, {
          unified: '1F9DB-1F3FF-200D-2640-FE0F',
          sheet: [50, 21]
        }],
        shortName: 'female_vampire'
      }, {
        name: 'Gear',
        unified: '2699-FE0F',
        keywords: ['cog'],
        sheet: [53, 47],
        shortName: 'gear'
      }, {
        name: 'Pitcairn Islands Flag',
        unified: '1F1F5-1F1F3',
        sheet: [3, 46],
        shortName: 'flag-pn'
      }, {
        name: 'Tornado',
        unified: '1F32A-FE0F',
        keywords: ['weather', 'cyclone', 'twister'],
        sheet: [6, 2],
        shortNames: ['tornado_cloud'],
        shortName: 'tornado'
      }, {
        name: 'Compression',
        unified: '1F5DC-FE0F',
        sheet: [30, 21],
        shortName: 'compression'
      }, {
        name: 'Large Orange Square',
        unified: '1F7E7',
        sheet: [37, 10],
        shortName: 'large_orange_square'
      }, {
        name: 'Merperson',
        unified: '1F9DC',
        sheet: [50, 46],
        skinVariations: [{
          unified: '1F9DC-1F3FB',
          sheet: [50, 47]
        }, {
          unified: '1F9DC-1F3FC',
          sheet: [50, 48]
        }, {
          unified: '1F9DC-1F3FD',
          sheet: [50, 49]
        }, {
          unified: '1F9DC-1F3FE',
          sheet: [50, 50]
        }, {
          unified: '1F9DC-1F3FF',
          sheet: [50, 51]
        }],
        shortName: 'merperson',
        obsoletedBy: '1F9DC-200D-2642-FE0F'
      }, {
        name: 'Puerto Rico Flag',
        unified: '1F1F5-1F1F7',
        sheet: [3, 47],
        shortName: 'flag-pr'
      }, {
        name: 'Fog',
        unified: '1F32B-FE0F',
        keywords: ['weather'],
        sheet: [6, 3],
        shortName: 'fog'
      }, {
        name: 'Large Yellow Square',
        unified: '1F7E8',
        sheet: [37, 11],
        shortName: 'large_yellow_square'
      }, {
        name: 'Merman',
        unified: '1F9DC-200D-2642-FE0F',
        obsoletes: '1F9DC',
        keywords: ['man', 'male', 'triton'],
        sheet: [50, 40],
        skinVariations: [{
          unified: '1F9DC-1F3FB-200D-2642-FE0F',
          sheet: [50, 41]
        }, {
          unified: '1F9DC-1F3FC-200D-2642-FE0F',
          sheet: [50, 42]
        }, {
          unified: '1F9DC-1F3FD-200D-2642-FE0F',
          sheet: [50, 43]
        }, {
          unified: '1F9DC-1F3FE-200D-2642-FE0F',
          sheet: [50, 44]
        }, {
          unified: '1F9DC-1F3FF-200D-2642-FE0F',
          sheet: [50, 45]
        }],
        shortName: 'merman'
      }, {
        name: 'Scales',
        unified: '2696-FE0F',
        sheet: [53, 45],
        shortName: 'scales'
      }, {
        name: 'Palestinian Territories Flag',
        unified: '1F1F5-1F1F8',
        sheet: [3, 48],
        shortName: 'flag-ps'
      }, {
        name: 'Wind Blowing Face',
        unified: '1F32C-FE0F',
        sheet: [6, 4],
        shortName: 'wind_blowing_face'
      }, {
        name: 'Large Green Square',
        unified: '1F7E9',
        sheet: [37, 12],
        shortName: 'large_green_square'
      }, {
        name: 'Probing Cane',
        unified: '1F9AF',
        sheet: [43, 3],
        shortName: 'probing_cane'
      }, {
        name: 'Mermaid',
        unified: '1F9DC-200D-2640-FE0F',
        keywords: ['woman', 'female', 'merwoman', 'ariel'],
        sheet: [50, 34],
        skinVariations: [{
          unified: '1F9DC-1F3FB-200D-2640-FE0F',
          sheet: [50, 35]
        }, {
          unified: '1F9DC-1F3FC-200D-2640-FE0F',
          sheet: [50, 36]
        }, {
          unified: '1F9DC-1F3FD-200D-2640-FE0F',
          sheet: [50, 37]
        }, {
          unified: '1F9DC-1F3FE-200D-2640-FE0F',
          sheet: [50, 38]
        }, {
          unified: '1F9DC-1F3FF-200D-2640-FE0F',
          sheet: [50, 39]
        }],
        shortName: 'mermaid'
      }, {
        name: 'Portugal Flag',
        unified: '1F1F5-1F1F9',
        sheet: [3, 49],
        shortName: 'flag-pt'
      }, {
        name: 'Cyclone',
        unified: '1F300',
        keywords: ['weather', 'swirl', 'blue', 'cloud', 'vortex', 'spiral', 'whirlpool', 'spin', 'tornado', 'hurricane', 'typhoon'],
        sheet: [5, 19],
        shortName: 'cyclone'
      }, {
        name: 'Link Symbol',
        unified: '1F517',
        keywords: ['rings', 'url'],
        sheet: [27, 51],
        shortName: 'link'
      }, {
        name: 'Large Blue Square',
        unified: '1F7E6',
        sheet: [37, 9],
        shortName: 'large_blue_square'
      }, {
        name: 'Elf',
        unified: '1F9DD',
        sheet: [51, 7],
        skinVariations: [{
          unified: '1F9DD-1F3FB',
          sheet: [51, 8]
        }, {
          unified: '1F9DD-1F3FC',
          sheet: [51, 9]
        }, {
          unified: '1F9DD-1F3FD',
          sheet: [51, 10]
        }, {
          unified: '1F9DD-1F3FE',
          sheet: [51, 11]
        }, {
          unified: '1F9DD-1F3FF',
          sheet: [51, 12]
        }],
        shortName: 'elf',
        obsoletedBy: '1F9DD-200D-2642-FE0F'
      }, {
        name: 'Palau Flag',
        unified: '1F1F5-1F1FC',
        sheet: [3, 50],
        shortName: 'flag-pw'
      }, {
        name: 'Rainbow',
        unified: '1F308',
        keywords: ['nature', 'happy', 'unicorn_face', 'photo', 'sky', 'spring'],
        sheet: [5, 27],
        shortName: 'rainbow'
      }, {
        name: 'Large Purple Square',
        unified: '1F7EA',
        sheet: [37, 13],
        shortName: 'large_purple_square'
      }, {
        name: 'Male Elf',
        unified: '1F9DD-200D-2642-FE0F',
        obsoletes: '1F9DD',
        sheet: [51, 1],
        skinVariations: [{
          unified: '1F9DD-1F3FB-200D-2642-FE0F',
          sheet: [51, 2]
        }, {
          unified: '1F9DD-1F3FC-200D-2642-FE0F',
          sheet: [51, 3]
        }, {
          unified: '1F9DD-1F3FD-200D-2642-FE0F',
          sheet: [51, 4]
        }, {
          unified: '1F9DD-1F3FE-200D-2642-FE0F',
          sheet: [51, 5]
        }, {
          unified: '1F9DD-1F3FF-200D-2642-FE0F',
          sheet: [51, 6]
        }],
        shortName: 'male_elf'
      }, {
        name: 'Chains',
        unified: '26D3-FE0F',
        keywords: ['lock', 'arrest'],
        sheet: [54, 7],
        shortName: 'chains'
      }, {
        name: 'Paraguay Flag',
        unified: '1F1F5-1F1FE',
        sheet: [3, 51],
        shortName: 'flag-py'
      }, {
        name: 'Closed Umbrella',
        unified: '1F302',
        keywords: ['weather', 'rain', 'drizzle'],
        sheet: [5, 21],
        shortName: 'closed_umbrella'
      }, {
        name: 'Large Brown Square',
        unified: '1F7EB',
        sheet: [37, 14],
        shortName: 'large_brown_square'
      }, {
        name: 'Female Elf',
        unified: '1F9DD-200D-2640-FE0F',
        sheet: [50, 52],
        skinVariations: [{
          unified: '1F9DD-1F3FB-200D-2640-FE0F',
          sheet: [50, 53]
        }, {
          unified: '1F9DD-1F3FC-200D-2640-FE0F',
          sheet: [50, 54]
        }, {
          unified: '1F9DD-1F3FD-200D-2640-FE0F',
          sheet: [50, 55]
        }, {
          unified: '1F9DD-1F3FE-200D-2640-FE0F',
          sheet: [50, 56]
        }, {
          unified: '1F9DD-1F3FF-200D-2640-FE0F',
          sheet: [51, 0]
        }],
        shortName: 'female_elf'
      }, {
        name: 'Toolbox',
        unified: '1F9F0',
        keywords: ['tools', 'diy', 'fix', 'maintainer', 'mechanic'],
        sheet: [51, 35],
        shortName: 'toolbox'
      }, {
        name: 'Qatar Flag',
        unified: '1F1F6-1F1E6',
        sheet: [3, 52],
        shortName: 'flag-qa'
      }, {
        name: 'Genie',
        unified: '1F9DE',
        sheet: [51, 15],
        shortName: 'genie',
        obsoletedBy: '1F9DE-200D-2642-FE0F'
      }, {
        name: 'Magnet',
        unified: '1F9F2',
        keywords: ['attraction', 'magnetic'],
        sheet: [51, 37],
        shortName: 'magnet'
      }, {
        name: 'Umbrella',
        unified: '2602-FE0F',
        keywords: ['rainy', 'weather', 'spring'],
        sheet: [52, 51],
        shortName: 'umbrella'
      }, {
        name: 'Black Large Square',
        unified: '2B1B',
        keywords: ['shape', 'icon', 'button'],
        sheet: [55, 40],
        shortName: 'black_large_square'
      }, {
        name: 'Réunion Flag',
        unified: '1F1F7-1F1EA',
        sheet: [3, 53],
        shortName: 'flag-re'
      }, {
        name: 'Male Genie',
        unified: '1F9DE-200D-2642-FE0F',
        obsoletes: '1F9DE',
        sheet: [51, 14],
        shortName: 'male_genie'
      }, {
        name: 'Umbrella with Rain Drops',
        unified: '2614',
        sheet: [52, 56],
        shortName: 'umbrella_with_rain_drops'
      }, {
        name: 'Alembic',
        unified: '2697-FE0F',
        keywords: ['distilling', 'science', 'experiment', 'chemistry'],
        sheet: [53, 46],
        shortName: 'alembic'
      }, {
        name: 'White Large Square',
        unified: '2B1C',
        keywords: ['shape', 'icon', 'stone', 'button'],
        sheet: [55, 41],
        shortName: 'white_large_square'
      }, {
        name: 'Romania Flag',
        unified: '1F1F7-1F1F4',
        sheet: [3, 54],
        shortName: 'flag-ro'
      }, {
        name: 'Female Genie',
        unified: '1F9DE-200D-2640-FE0F',
        sheet: [51, 13],
        shortName: 'female_genie'
      }, {
        name: 'Test Tube',
        unified: '1F9EA',
        keywords: ['chemistry', 'experiment', 'lab', 'science'],
        sheet: [51, 29],
        shortName: 'test_tube'
      }, {
        name: 'Black Medium Square',
        unified: '25FC-FE0F',
        keywords: ['shape', 'button', 'icon'],
        sheet: [52, 46],
        shortName: 'black_medium_square'
      }, {
        name: 'Umbrella on Ground',
        unified: '26F1-FE0F',
        sheet: [54, 12],
        shortName: 'umbrella_on_ground'
      }, {
        name: 'Serbia Flag',
        unified: '1F1F7-1F1F8',
        sheet: [3, 55],
        shortName: 'flag-rs'
      }, {
        name: 'Zombie',
        unified: '1F9DF',
        sheet: [51, 18],
        shortName: 'zombie',
        obsoletedBy: '1F9DF-200D-2642-FE0F'
      }, {
        name: 'Petri Dish',
        unified: '1F9EB',
        keywords: ['bacteria', 'biology', 'culture', 'lab'],
        sheet: [51, 30],
        shortName: 'petri_dish'
      }, {
        name: 'White Medium Square',
        unified: '25FB-FE0F',
        keywords: ['shape', 'stone', 'icon'],
        sheet: [52, 45],
        shortName: 'white_medium_square'
      }, {
        name: 'High Voltage Sign',
        unified: '26A1',
        keywords: ['thunder', 'weather', 'lightning bolt', 'fast'],
        sheet: [53, 51],
        shortName: 'zap'
      }, {
        name: 'Russia Flag',
        unified: '1F1F7-1F1FA',
        keywords: ['russian', 'federation', 'flag', 'nation', 'country', 'banner'],
        sheet: [3, 56],
        shortNames: ['flag-ru'],
        shortName: 'ru'
      }, {
        name: 'Male Zombie',
        unified: '1F9DF-200D-2642-FE0F',
        obsoletes: '1F9DF',
        sheet: [51, 17],
        shortName: 'male_zombie'
      }, {
        name: 'Dna Double Helix',
        unified: '1F9EC',
        keywords: ['biologist', 'genetics', 'life'],
        sheet: [51, 31],
        shortName: 'dna'
      }, {
        name: 'Black Medium Small Square',
        unified: '25FE',
        keywords: ['icon', 'shape', 'button'],
        sheet: [52, 48],
        shortName: 'black_medium_small_square'
      }, {
        name: 'Snowflake',
        unified: '2744-FE0F',
        keywords: ['winter', 'season', 'cold', 'weather', 'christmas', 'xmas'],
        sheet: [55, 19],
        shortName: 'snowflake'
      }, {
        name: 'Rwanda Flag',
        unified: '1F1F7-1F1FC',
        sheet: [4, 0],
        shortName: 'flag-rw'
      }, {
        name: 'Microscope',
        unified: '1F52C',
        keywords: ['laboratory', 'experiment', 'zoomin', 'science', 'study'],
        sheet: [28, 15],
        shortName: 'microscope'
      }, {
        name: 'Female Zombie',
        unified: '1F9DF-200D-2640-FE0F',
        sheet: [51, 16],
        shortName: 'female_zombie'
      }, {
        name: 'White Medium Small Square',
        unified: '25FD',
        keywords: ['shape', 'stone', 'icon', 'button'],
        sheet: [52, 47],
        shortName: 'white_medium_small_square'
      }, {
        name: 'Snowman',
        unified: '2603-FE0F',
        keywords: ['winter', 'season', 'cold', 'weather', 'christmas', 'xmas', 'frozen', 'without_snow'],
        sheet: [52, 52],
        shortName: 'snowman'
      }, {
        name: 'Saudi Arabia Flag',
        unified: '1F1F8-1F1E6',
        sheet: [4, 1],
        shortName: 'flag-sa'
      }, {
        name: 'Face Massage',
        unified: '1F486',
        sheet: [24, 51],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F486-1F3FB',
          sheet: [24, 52],
          hidden: ['facebook']
        }, {
          unified: '1F486-1F3FC',
          sheet: [24, 53],
          hidden: ['facebook']
        }, {
          unified: '1F486-1F3FD',
          sheet: [24, 54],
          hidden: ['facebook']
        }, {
          unified: '1F486-1F3FE',
          sheet: [24, 55],
          hidden: ['facebook']
        }, {
          unified: '1F486-1F3FF',
          sheet: [24, 56],
          hidden: ['facebook']
        }],
        shortName: 'massage',
        obsoletedBy: '1F486-200D-2640-FE0F'
      }, {
        name: 'Telescope',
        unified: '1F52D',
        keywords: ['stars', 'space', 'zoom', 'science', 'astronomy'],
        sheet: [28, 16],
        shortName: 'telescope'
      }, {
        name: 'Black Small Square',
        unified: '25AA-FE0F',
        keywords: ['shape', 'icon'],
        sheet: [52, 41],
        shortName: 'black_small_square'
      }, {
        name: 'Snowman Without Snow',
        unified: '26C4',
        sheet: [54, 1],
        shortName: 'snowman_without_snow'
      }, {
        name: 'Solomon Islands Flag',
        unified: '1F1F8-1F1E7',
        sheet: [4, 2],
        shortName: 'flag-sb'
      }, {
        name: 'Man Getting Massage',
        unified: '1F486-200D-2642-FE0F',
        sheet: [24, 45],
        skinVariations: [{
          unified: '1F486-1F3FB-200D-2642-FE0F',
          sheet: [24, 46]
        }, {
          unified: '1F486-1F3FC-200D-2642-FE0F',
          sheet: [24, 47]
        }, {
          unified: '1F486-1F3FD-200D-2642-FE0F',
          sheet: [24, 48]
        }, {
          unified: '1F486-1F3FE-200D-2642-FE0F',
          sheet: [24, 49]
        }, {
          unified: '1F486-1F3FF-200D-2642-FE0F',
          sheet: [24, 50]
        }],
        shortName: 'man-getting-massage'
      }, {
        name: 'Satellite Antenna',
        unified: '1F4E1',
        sheet: [26, 55],
        shortName: 'satellite_antenna'
      }, {
        name: 'White Small Square',
        unified: '25AB-FE0F',
        keywords: ['shape', 'icon'],
        sheet: [52, 42],
        shortName: 'white_small_square'
      }, {
        name: 'Comet',
        unified: '2604-FE0F',
        keywords: ['space'],
        sheet: [52, 53],
        shortName: 'comet'
      }, {
        name: 'Seychelles Flag',
        unified: '1F1F8-1F1E8',
        sheet: [4, 3],
        shortName: 'flag-sc'
      }, {
        name: 'Woman Getting Massage',
        unified: '1F486-200D-2640-FE0F',
        obsoletes: '1F486',
        sheet: [24, 39],
        skinVariations: [{
          unified: '1F486-1F3FB-200D-2640-FE0F',
          sheet: [24, 40]
        }, {
          unified: '1F486-1F3FC-200D-2640-FE0F',
          sheet: [24, 41]
        }, {
          unified: '1F486-1F3FD-200D-2640-FE0F',
          sheet: [24, 42]
        }, {
          unified: '1F486-1F3FE-200D-2640-FE0F',
          sheet: [24, 43]
        }, {
          unified: '1F486-1F3FF-200D-2640-FE0F',
          sheet: [24, 44]
        }],
        shortName: 'woman-getting-massage'
      }, {
        name: 'Syringe',
        unified: '1F489',
        keywords: ['health', 'hospital', 'drugs', 'blood', 'medicine', 'needle', 'doctor', 'nurse'],
        sheet: [25, 19],
        shortName: 'syringe'
      }, {
        name: 'Fire',
        unified: '1F525',
        keywords: ['hot', 'cook', 'flame'],
        sheet: [28, 8],
        shortName: 'fire'
      }, {
        name: 'Large Orange Diamond',
        unified: '1F536',
        keywords: ['shape', 'jewel', 'gem'],
        sheet: [28, 25],
        shortName: 'large_orange_diamond'
      }, {
        name: 'Sudan Flag',
        unified: '1F1F8-1F1E9',
        sheet: [4, 4],
        shortName: 'flag-sd'
      }, {
        name: 'Haircut',
        unified: '1F487',
        sheet: [25, 12],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F487-1F3FB',
          sheet: [25, 13],
          hidden: ['facebook']
        }, {
          unified: '1F487-1F3FC',
          sheet: [25, 14],
          hidden: ['facebook']
        }, {
          unified: '1F487-1F3FD',
          sheet: [25, 15],
          hidden: ['facebook']
        }, {
          unified: '1F487-1F3FE',
          sheet: [25, 16],
          hidden: ['facebook']
        }, {
          unified: '1F487-1F3FF',
          sheet: [25, 17],
          hidden: ['facebook']
        }],
        shortName: 'haircut',
        obsoletedBy: '1F487-200D-2640-FE0F'
      }, {
        name: 'Droplet',
        unified: '1F4A7',
        keywords: ['water', 'drip', 'faucet', 'spring'],
        sheet: [25, 49],
        shortName: 'droplet'
      }, {
        name: 'Large Blue Diamond',
        unified: '1F537',
        keywords: ['shape', 'jewel', 'gem'],
        sheet: [28, 26],
        shortName: 'large_blue_diamond'
      }, {
        name: 'Drop of Blood',
        unified: '1FA78',
        sheet: [51, 55],
        shortName: 'drop_of_blood'
      }, {
        name: 'Sweden Flag',
        unified: '1F1F8-1F1EA',
        sheet: [4, 5],
        shortName: 'flag-se'
      }, {
        name: 'Water Wave',
        unified: '1F30A',
        keywords: ['sea', 'water', 'wave', 'nature', 'tsunami', 'disaster'],
        sheet: [5, 29],
        shortName: 'ocean'
      }, {
        name: 'Man Getting Haircut',
        unified: '1F487-200D-2642-FE0F',
        sheet: [25, 6],
        skinVariations: [{
          unified: '1F487-1F3FB-200D-2642-FE0F',
          sheet: [25, 7]
        }, {
          unified: '1F487-1F3FC-200D-2642-FE0F',
          sheet: [25, 8]
        }, {
          unified: '1F487-1F3FD-200D-2642-FE0F',
          sheet: [25, 9]
        }, {
          unified: '1F487-1F3FE-200D-2642-FE0F',
          sheet: [25, 10]
        }, {
          unified: '1F487-1F3FF-200D-2642-FE0F',
          sheet: [25, 11]
        }],
        shortName: 'man-getting-haircut'
      }, {
        name: 'Pill',
        unified: '1F48A',
        keywords: ['health', 'medicine', 'doctor', 'pharmacy', 'drug'],
        sheet: [25, 20],
        shortName: 'pill'
      }, {
        name: 'Small Orange Diamond',
        unified: '1F538',
        keywords: ['shape', 'jewel', 'gem'],
        sheet: [28, 27],
        shortName: 'small_orange_diamond'
      }, {
        name: 'Singapore Flag',
        unified: '1F1F8-1F1EC',
        sheet: [4, 6],
        shortName: 'flag-sg'
      }, {
        name: 'Woman Getting Haircut',
        unified: '1F487-200D-2640-FE0F',
        obsoletes: '1F487',
        sheet: [25, 0],
        skinVariations: [{
          unified: '1F487-1F3FB-200D-2640-FE0F',
          sheet: [25, 1]
        }, {
          unified: '1F487-1F3FC-200D-2640-FE0F',
          sheet: [25, 2]
        }, {
          unified: '1F487-1F3FD-200D-2640-FE0F',
          sheet: [25, 3]
        }, {
          unified: '1F487-1F3FE-200D-2640-FE0F',
          sheet: [25, 4]
        }, {
          unified: '1F487-1F3FF-200D-2640-FE0F',
          sheet: [25, 5]
        }],
        shortName: 'woman-getting-haircut'
      }, {
        name: 'Small Blue Diamond',
        unified: '1F539',
        keywords: ['shape', 'jewel', 'gem'],
        sheet: [28, 28],
        shortName: 'small_blue_diamond'
      }, {
        name: 'Adhesive Bandage',
        unified: '1FA79',
        sheet: [51, 56],
        shortName: 'adhesive_bandage'
      }, {
        name: 'St. Helena Flag',
        unified: '1F1F8-1F1ED',
        sheet: [4, 7],
        shortName: 'flag-sh'
      }, {
        name: 'Up-Pointing Red Triangle',
        unified: '1F53A',
        keywords: ['shape', 'direction', 'up', 'top'],
        sheet: [28, 29],
        shortName: 'small_red_triangle'
      }, {
        name: 'Pedestrian',
        unified: '1F6B6',
        sheet: [36, 2],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F6B6-1F3FB',
          sheet: [36, 3],
          hidden: ['facebook']
        }, {
          unified: '1F6B6-1F3FC',
          sheet: [36, 4],
          hidden: ['facebook']
        }, {
          unified: '1F6B6-1F3FD',
          sheet: [36, 5],
          hidden: ['facebook']
        }, {
          unified: '1F6B6-1F3FE',
          sheet: [36, 6],
          hidden: ['facebook']
        }, {
          unified: '1F6B6-1F3FF',
          sheet: [36, 7],
          hidden: ['facebook']
        }],
        shortName: 'walking',
        obsoletedBy: '1F6B6-200D-2642-FE0F'
      }, {
        name: 'Stethoscope',
        unified: '1FA7A',
        sheet: [52, 0],
        shortName: 'stethoscope'
      }, {
        name: 'Slovenia Flag',
        unified: '1F1F8-1F1EE',
        sheet: [4, 8],
        shortName: 'flag-si'
      }, {
        name: 'Down-Pointing Red Triangle',
        unified: '1F53B',
        keywords: ['shape', 'direction', 'bottom'],
        sheet: [28, 30],
        shortName: 'small_red_triangle_down'
      }, {
        name: 'Door',
        unified: '1F6AA',
        keywords: ['house', 'entry', 'exit'],
        sheet: [35, 1],
        shortName: 'door'
      }, {
        name: 'Man Walking',
        unified: '1F6B6-200D-2642-FE0F',
        obsoletes: '1F6B6',
        sheet: [35, 53],
        skinVariations: [{
          unified: '1F6B6-1F3FB-200D-2642-FE0F',
          sheet: [35, 54]
        }, {
          unified: '1F6B6-1F3FC-200D-2642-FE0F',
          sheet: [35, 55]
        }, {
          unified: '1F6B6-1F3FD-200D-2642-FE0F',
          sheet: [35, 56]
        }, {
          unified: '1F6B6-1F3FE-200D-2642-FE0F',
          sheet: [36, 0]
        }, {
          unified: '1F6B6-1F3FF-200D-2642-FE0F',
          sheet: [36, 1]
        }],
        shortName: 'man-walking'
      }, {
        name: 'Svalbard & Jan Mayen Flag',
        unified: '1F1F8-1F1EF',
        sheet: [4, 9],
        shortName: 'flag-sj'
      }, {
        name: 'Diamond Shape with a Dot Inside',
        unified: '1F4A0',
        keywords: ['jewel', 'blue', 'gem', 'crystal', 'fancy'],
        sheet: [25, 42],
        shortName: 'diamond_shape_with_a_dot_inside'
      }, {
        name: 'Woman Walking',
        unified: '1F6B6-200D-2640-FE0F',
        sheet: [35, 47],
        skinVariations: [{
          unified: '1F6B6-1F3FB-200D-2640-FE0F',
          sheet: [35, 48]
        }, {
          unified: '1F6B6-1F3FC-200D-2640-FE0F',
          sheet: [35, 49]
        }, {
          unified: '1F6B6-1F3FD-200D-2640-FE0F',
          sheet: [35, 50]
        }, {
          unified: '1F6B6-1F3FE-200D-2640-FE0F',
          sheet: [35, 51]
        }, {
          unified: '1F6B6-1F3FF-200D-2640-FE0F',
          sheet: [35, 52]
        }],
        shortName: 'woman-walking'
      }, {
        name: 'Bed',
        unified: '1F6CF-FE0F',
        keywords: ['sleep', 'rest'],
        sheet: [36, 37],
        shortName: 'bed'
      }, {
        name: 'Slovakia Flag',
        unified: '1F1F8-1F1F0',
        sheet: [4, 10],
        shortName: 'flag-sk'
      }, {
        name: 'Radio Button',
        unified: '1F518',
        keywords: ['input', 'old', 'music', 'circle'],
        sheet: [27, 52],
        shortName: 'radio_button'
      }, {
        name: 'Couch and Lamp',
        unified: '1F6CB-FE0F',
        keywords: ['read', 'chill'],
        sheet: [36, 28],
        shortName: 'couch_and_lamp'
      }, {
        name: 'Standing Person',
        unified: '1F9CD',
        sheet: [44, 31],
        skinVariations: [{
          unified: '1F9CD-1F3FB',
          sheet: [44, 32]
        }, {
          unified: '1F9CD-1F3FC',
          sheet: [44, 33]
        }, {
          unified: '1F9CD-1F3FD',
          sheet: [44, 34]
        }, {
          unified: '1F9CD-1F3FE',
          sheet: [44, 35]
        }, {
          unified: '1F9CD-1F3FF',
          sheet: [44, 36]
        }],
        shortName: 'standing_person'
      }, {
        name: 'Sierra Leone Flag',
        unified: '1F1F8-1F1F1',
        sheet: [4, 11],
        shortName: 'flag-sl'
      }, {
        name: 'White Square Button',
        unified: '1F533',
        keywords: ['shape', 'input'],
        sheet: [28, 22],
        shortName: 'white_square_button'
      }, {
        name: 'Man Standing',
        unified: '1F9CD-200D-2642-FE0F',
        sheet: [44, 25],
        skinVariations: [{
          unified: '1F9CD-1F3FB-200D-2642-FE0F',
          sheet: [44, 26]
        }, {
          unified: '1F9CD-1F3FC-200D-2642-FE0F',
          sheet: [44, 27]
        }, {
          unified: '1F9CD-1F3FD-200D-2642-FE0F',
          sheet: [44, 28]
        }, {
          unified: '1F9CD-1F3FE-200D-2642-FE0F',
          sheet: [44, 29]
        }, {
          unified: '1F9CD-1F3FF-200D-2642-FE0F',
          sheet: [44, 30]
        }],
        shortName: 'man_standing'
      }, {
        name: 'Chair',
        unified: '1FA91',
        sheet: [52, 5],
        shortName: 'chair'
      }, {
        name: 'San Marino Flag',
        unified: '1F1F8-1F1F2',
        sheet: [4, 12],
        shortName: 'flag-sm'
      }, {
        name: 'Black Square Button',
        unified: '1F532',
        keywords: ['shape', 'input', 'frame'],
        sheet: [28, 21],
        shortName: 'black_square_button'
      }, {
        name: 'Toilet',
        unified: '1F6BD',
        keywords: ['restroom', 'wc', 'washroom', 'bathroom', 'potty'],
        sheet: [36, 14],
        shortName: 'toilet'
      }, {
        name: 'Woman Standing',
        unified: '1F9CD-200D-2640-FE0F',
        sheet: [44, 19],
        skinVariations: [{
          unified: '1F9CD-1F3FB-200D-2640-FE0F',
          sheet: [44, 20]
        }, {
          unified: '1F9CD-1F3FC-200D-2640-FE0F',
          sheet: [44, 21]
        }, {
          unified: '1F9CD-1F3FD-200D-2640-FE0F',
          sheet: [44, 22]
        }, {
          unified: '1F9CD-1F3FE-200D-2640-FE0F',
          sheet: [44, 23]
        }, {
          unified: '1F9CD-1F3FF-200D-2640-FE0F',
          sheet: [44, 24]
        }],
        shortName: 'woman_standing'
      }, {
        name: 'Senegal Flag',
        unified: '1F1F8-1F1F3',
        sheet: [4, 13],
        shortName: 'flag-sn'
      }, {
        name: 'Shower',
        unified: '1F6BF',
        keywords: ['clean', 'water', 'bathroom'],
        sheet: [36, 16],
        shortName: 'shower'
      }, {
        name: 'Kneeling Person',
        unified: '1F9CE',
        sheet: [44, 49],
        skinVariations: [{
          unified: '1F9CE-1F3FB',
          sheet: [44, 50]
        }, {
          unified: '1F9CE-1F3FC',
          sheet: [44, 51]
        }, {
          unified: '1F9CE-1F3FD',
          sheet: [44, 52]
        }, {
          unified: '1F9CE-1F3FE',
          sheet: [44, 53]
        }, {
          unified: '1F9CE-1F3FF',
          sheet: [44, 54]
        }],
        shortName: 'kneeling_person'
      }, {
        name: 'Somalia Flag',
        unified: '1F1F8-1F1F4',
        sheet: [4, 14],
        shortName: 'flag-so'
      }, {
        name: 'Bathtub',
        unified: '1F6C1',
        keywords: ['clean', 'shower', 'bathroom'],
        sheet: [36, 23],
        shortName: 'bathtub'
      }, {
        name: 'Man Kneeling',
        unified: '1F9CE-200D-2642-FE0F',
        sheet: [44, 43],
        skinVariations: [{
          unified: '1F9CE-1F3FB-200D-2642-FE0F',
          sheet: [44, 44]
        }, {
          unified: '1F9CE-1F3FC-200D-2642-FE0F',
          sheet: [44, 45]
        }, {
          unified: '1F9CE-1F3FD-200D-2642-FE0F',
          sheet: [44, 46]
        }, {
          unified: '1F9CE-1F3FE-200D-2642-FE0F',
          sheet: [44, 47]
        }, {
          unified: '1F9CE-1F3FF-200D-2642-FE0F',
          sheet: [44, 48]
        }],
        shortName: 'man_kneeling'
      }, {
        name: 'Suriname Flag',
        unified: '1F1F8-1F1F7',
        sheet: [4, 15],
        shortName: 'flag-sr'
      }, {
        name: 'Woman Kneeling',
        unified: '1F9CE-200D-2640-FE0F',
        sheet: [44, 37],
        skinVariations: [{
          unified: '1F9CE-1F3FB-200D-2640-FE0F',
          sheet: [44, 38]
        }, {
          unified: '1F9CE-1F3FC-200D-2640-FE0F',
          sheet: [44, 39]
        }, {
          unified: '1F9CE-1F3FD-200D-2640-FE0F',
          sheet: [44, 40]
        }, {
          unified: '1F9CE-1F3FE-200D-2640-FE0F',
          sheet: [44, 41]
        }, {
          unified: '1F9CE-1F3FF-200D-2640-FE0F',
          sheet: [44, 42]
        }],
        shortName: 'woman_kneeling'
      }, {
        name: 'Razor',
        unified: '1FA92',
        sheet: [52, 6],
        shortName: 'razor'
      }, {
        name: 'South Sudan Flag',
        unified: '1F1F8-1F1F8',
        sheet: [4, 16],
        shortName: 'flag-ss'
      }, {
        name: 'Person with Probing Cane',
        unified: '1F9D1-200D-1F9AF',
        sheet: [47, 7],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F9AF',
          sheet: [47, 8],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F9AF',
          sheet: [47, 9],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F9AF',
          sheet: [47, 10],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F9AF',
          sheet: [47, 11],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F9AF',
          sheet: [47, 12],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'person_with_probing_cane'
      }, {
        name: 'Lotion Bottle',
        unified: '1F9F4',
        keywords: ['moisturizer', 'sunscreen'],
        sheet: [51, 39],
        shortName: 'lotion_bottle'
      }, {
        name: 'São Tomé & Príncipe Flag',
        unified: '1F1F8-1F1F9',
        sheet: [4, 17],
        shortName: 'flag-st'
      }, {
        name: 'Man with Probing Cane',
        unified: '1F468-200D-1F9AF',
        sheet: [16, 17],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F9AF',
          sheet: [16, 18]
        }, {
          unified: '1F468-1F3FC-200D-1F9AF',
          sheet: [16, 19]
        }, {
          unified: '1F468-1F3FD-200D-1F9AF',
          sheet: [16, 20]
        }, {
          unified: '1F468-1F3FE-200D-1F9AF',
          sheet: [16, 21]
        }, {
          unified: '1F468-1F3FF-200D-1F9AF',
          sheet: [16, 22]
        }],
        shortName: 'man_with_probing_cane'
      }, {
        name: 'Safety Pin',
        unified: '1F9F7',
        keywords: ['diaper'],
        sheet: [51, 42],
        shortName: 'safety_pin'
      }, {
        name: 'El Salvador Flag',
        unified: '1F1F8-1F1FB',
        sheet: [4, 18],
        shortName: 'flag-sv'
      }, {
        name: 'Woman with Probing Cane',
        unified: '1F469-200D-1F9AF',
        sheet: [19, 2],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F9AF',
          sheet: [19, 3]
        }, {
          unified: '1F469-1F3FC-200D-1F9AF',
          sheet: [19, 4]
        }, {
          unified: '1F469-1F3FD-200D-1F9AF',
          sheet: [19, 5]
        }, {
          unified: '1F469-1F3FE-200D-1F9AF',
          sheet: [19, 6]
        }, {
          unified: '1F469-1F3FF-200D-1F9AF',
          sheet: [19, 7]
        }],
        shortName: 'woman_with_probing_cane'
      }, {
        name: 'Broom',
        unified: '1F9F9',
        keywords: ['cleaning', 'sweeping', 'witch'],
        sheet: [51, 44],
        shortName: 'broom'
      }, {
        name: 'Sint Maarten Flag',
        unified: '1F1F8-1F1FD',
        sheet: [4, 19],
        shortName: 'flag-sx'
      }, {
        name: 'Person in Motorized Wheelchair',
        unified: '1F9D1-200D-1F9BC',
        sheet: [47, 37],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F9BC',
          sheet: [47, 38],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F9BC',
          sheet: [47, 39],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F9BC',
          sheet: [47, 40],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F9BC',
          sheet: [47, 41],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F9BC',
          sheet: [47, 42],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'person_in_motorized_wheelchair'
      }, {
        name: 'Basket',
        unified: '1F9FA',
        keywords: ['laundry'],
        sheet: [51, 45],
        shortName: 'basket'
      }, {
        name: 'Syria Flag',
        unified: '1F1F8-1F1FE',
        sheet: [4, 20],
        shortName: 'flag-sy'
      }, {
        name: 'Man in Motorized Wheelchair',
        unified: '1F468-200D-1F9BC',
        sheet: [16, 47],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F9BC',
          sheet: [16, 48]
        }, {
          unified: '1F468-1F3FC-200D-1F9BC',
          sheet: [16, 49]
        }, {
          unified: '1F468-1F3FD-200D-1F9BC',
          sheet: [16, 50]
        }, {
          unified: '1F468-1F3FE-200D-1F9BC',
          sheet: [16, 51]
        }, {
          unified: '1F468-1F3FF-200D-1F9BC',
          sheet: [16, 52]
        }],
        shortName: 'man_in_motorized_wheelchair'
      }, {
        name: 'Roll of Paper',
        unified: '1F9FB',
        sheet: [51, 46],
        shortName: 'roll_of_paper'
      }, {
        name: 'Eswatini Flag',
        unified: '1F1F8-1F1FF',
        sheet: [4, 21],
        shortName: 'flag-sz'
      }, {
        name: 'Woman in Motorized Wheelchair',
        unified: '1F469-200D-1F9BC',
        sheet: [19, 32],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F9BC',
          sheet: [19, 33]
        }, {
          unified: '1F469-1F3FC-200D-1F9BC',
          sheet: [19, 34]
        }, {
          unified: '1F469-1F3FD-200D-1F9BC',
          sheet: [19, 35]
        }, {
          unified: '1F469-1F3FE-200D-1F9BC',
          sheet: [19, 36]
        }, {
          unified: '1F469-1F3FF-200D-1F9BC',
          sheet: [19, 37]
        }],
        shortName: 'woman_in_motorized_wheelchair'
      }, {
        name: 'Bar of Soap',
        unified: '1F9FC',
        keywords: ['bar', 'bathing', 'cleaning', 'lather'],
        sheet: [51, 47],
        shortName: 'soap'
      }, {
        name: 'Tristan Da Cunha Flag',
        unified: '1F1F9-1F1E6',
        sheet: [4, 22],
        shortName: 'flag-ta'
      }, {
        name: 'Person in Manual Wheelchair',
        unified: '1F9D1-200D-1F9BD',
        sheet: [47, 43],
        hidden: ['google', 'twitter', 'facebook'],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F9BD',
          sheet: [47, 44],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F9BD',
          sheet: [47, 45],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F9BD',
          sheet: [47, 46],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F9BD',
          sheet: [47, 47],
          hidden: ['google', 'twitter', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F9BD',
          sheet: [47, 48],
          hidden: ['google', 'twitter', 'facebook']
        }],
        shortName: 'person_in_manual_wheelchair'
      }, {
        name: 'Sponge',
        unified: '1F9FD',
        keywords: ['absorbing', 'cleaning', 'porous'],
        sheet: [51, 48],
        shortName: 'sponge'
      }, {
        name: 'Turks & Caicos Islands Flag',
        unified: '1F1F9-1F1E8',
        sheet: [4, 23],
        shortName: 'flag-tc'
      }, {
        name: 'Man in Manual Wheelchair',
        unified: '1F468-200D-1F9BD',
        sheet: [16, 53],
        skinVariations: [{
          unified: '1F468-1F3FB-200D-1F9BD',
          sheet: [16, 54]
        }, {
          unified: '1F468-1F3FC-200D-1F9BD',
          sheet: [16, 55]
        }, {
          unified: '1F468-1F3FD-200D-1F9BD',
          sheet: [16, 56]
        }, {
          unified: '1F468-1F3FE-200D-1F9BD',
          sheet: [17, 0]
        }, {
          unified: '1F468-1F3FF-200D-1F9BD',
          sheet: [17, 1]
        }],
        shortName: 'man_in_manual_wheelchair'
      }, {
        name: 'Fire Extinguisher',
        unified: '1F9EF',
        keywords: ['quench'],
        sheet: [51, 34],
        shortName: 'fire_extinguisher'
      }, {
        name: 'Chad Flag',
        unified: '1F1F9-1F1E9',
        sheet: [4, 24],
        shortName: 'flag-td'
      }, {
        name: 'Woman in Manual Wheelchair',
        unified: '1F469-200D-1F9BD',
        sheet: [19, 38],
        skinVariations: [{
          unified: '1F469-1F3FB-200D-1F9BD',
          sheet: [19, 39]
        }, {
          unified: '1F469-1F3FC-200D-1F9BD',
          sheet: [19, 40]
        }, {
          unified: '1F469-1F3FD-200D-1F9BD',
          sheet: [19, 41]
        }, {
          unified: '1F469-1F3FE-200D-1F9BD',
          sheet: [19, 42]
        }, {
          unified: '1F469-1F3FF-200D-1F9BD',
          sheet: [19, 43]
        }],
        shortName: 'woman_in_manual_wheelchair'
      }, {
        name: 'Shopping Trolley',
        unified: '1F6D2',
        sheet: [36, 40],
        shortName: 'shopping_trolley'
      }, {
        name: 'French Southern Territories Flag',
        unified: '1F1F9-1F1EB',
        sheet: [4, 25],
        shortName: 'flag-tf'
      }, {
        name: 'Runner',
        unified: '1F3C3',
        sheet: [9, 1],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F3C3-1F3FB',
          sheet: [9, 2],
          hidden: ['facebook']
        }, {
          unified: '1F3C3-1F3FC',
          sheet: [9, 3],
          hidden: ['facebook']
        }, {
          unified: '1F3C3-1F3FD',
          sheet: [9, 4],
          hidden: ['facebook']
        }, {
          unified: '1F3C3-1F3FE',
          sheet: [9, 5],
          hidden: ['facebook']
        }, {
          unified: '1F3C3-1F3FF',
          sheet: [9, 6],
          hidden: ['facebook']
        }],
        shortNames: ['running'],
        shortName: 'runner',
        obsoletedBy: '1F3C3-200D-2642-FE0F'
      }, {
        name: 'Smoking Symbol',
        unified: '1F6AC',
        keywords: ['kills', 'tobacco', 'cigarette', 'joint', 'smoke'],
        sheet: [35, 3],
        shortName: 'smoking'
      }, {
        name: 'Togo Flag',
        unified: '1F1F9-1F1EC',
        sheet: [4, 26],
        shortName: 'flag-tg'
      }, {
        name: 'Man Running',
        unified: '1F3C3-200D-2642-FE0F',
        obsoletes: '1F3C3',
        sheet: [8, 52],
        skinVariations: [{
          unified: '1F3C3-1F3FB-200D-2642-FE0F',
          sheet: [8, 53]
        }, {
          unified: '1F3C3-1F3FC-200D-2642-FE0F',
          sheet: [8, 54]
        }, {
          unified: '1F3C3-1F3FD-200D-2642-FE0F',
          sheet: [8, 55]
        }, {
          unified: '1F3C3-1F3FE-200D-2642-FE0F',
          sheet: [8, 56]
        }, {
          unified: '1F3C3-1F3FF-200D-2642-FE0F',
          sheet: [9, 0]
        }],
        shortName: 'man-running'
      }, {
        name: 'Coffin',
        unified: '26B0-FE0F',
        keywords: ['vampire', 'dead', 'die', 'death', 'rip', 'graveyard', 'cemetery', 'casket', 'funeral', 'box'],
        sheet: [53, 54],
        shortName: 'coffin'
      }, {
        name: 'Thailand Flag',
        unified: '1F1F9-1F1ED',
        sheet: [4, 27],
        shortName: 'flag-th'
      }, {
        name: 'Woman Running',
        unified: '1F3C3-200D-2640-FE0F',
        sheet: [8, 46],
        skinVariations: [{
          unified: '1F3C3-1F3FB-200D-2640-FE0F',
          sheet: [8, 47]
        }, {
          unified: '1F3C3-1F3FC-200D-2640-FE0F',
          sheet: [8, 48]
        }, {
          unified: '1F3C3-1F3FD-200D-2640-FE0F',
          sheet: [8, 49]
        }, {
          unified: '1F3C3-1F3FE-200D-2640-FE0F',
          sheet: [8, 50]
        }, {
          unified: '1F3C3-1F3FF-200D-2640-FE0F',
          sheet: [8, 51]
        }],
        shortName: 'woman-running'
      }, {
        name: 'Funeral Urn',
        unified: '26B1-FE0F',
        keywords: ['dead', 'die', 'death', 'rip', 'ashes'],
        sheet: [53, 55],
        shortName: 'funeral_urn'
      }, {
        name: 'Tajikistan Flag',
        unified: '1F1F9-1F1EF',
        sheet: [4, 28],
        shortName: 'flag-tj'
      }, {
        name: 'Dancer',
        unified: '1F483',
        keywords: ['female', 'girl', 'woman', 'fun'],
        sheet: [24, 26],
        skinVariations: [{
          unified: '1F483-1F3FB',
          sheet: [24, 27]
        }, {
          unified: '1F483-1F3FC',
          sheet: [24, 28]
        }, {
          unified: '1F483-1F3FD',
          sheet: [24, 29]
        }, {
          unified: '1F483-1F3FE',
          sheet: [24, 30]
        }, {
          unified: '1F483-1F3FF',
          sheet: [24, 31]
        }],
        shortName: 'dancer'
      }, {
        name: 'Moyai',
        unified: '1F5FF',
        keywords: ['rock', 'easter island', 'moai'],
        sheet: [30, 34],
        shortName: 'moyai'
      }, {
        name: 'Tokelau Flag',
        unified: '1F1F9-1F1F0',
        sheet: [4, 29],
        shortName: 'flag-tk'
      }, {
        name: 'Man Dancing',
        unified: '1F57A',
        keywords: ['male', 'boy', 'fun', 'dancer'],
        sheet: [29, 37],
        skinVariations: [{
          unified: '1F57A-1F3FB',
          sheet: [29, 38]
        }, {
          unified: '1F57A-1F3FC',
          sheet: [29, 39]
        }, {
          unified: '1F57A-1F3FD',
          sheet: [29, 40]
        }, {
          unified: '1F57A-1F3FE',
          sheet: [29, 41]
        }, {
          unified: '1F57A-1F3FF',
          sheet: [29, 42]
        }],
        shortName: 'man_dancing'
      }, {
        name: 'Timor-Leste Flag',
        unified: '1F1F9-1F1F1',
        sheet: [4, 30],
        shortName: 'flag-tl'
      }, {
        name: 'Man in Business Suit Levitating',
        unified: '1F574-FE0F',
        sheet: [29, 9],
        skinVariations: [{
          unified: '1F574-1F3FB',
          sheet: [29, 10]
        }, {
          unified: '1F574-1F3FC',
          sheet: [29, 11]
        }, {
          unified: '1F574-1F3FD',
          sheet: [29, 12]
        }, {
          unified: '1F574-1F3FE',
          sheet: [29, 13]
        }, {
          unified: '1F574-1F3FF',
          sheet: [29, 14]
        }],
        shortName: 'man_in_business_suit_levitating'
      }, {
        name: 'Turkmenistan Flag',
        unified: '1F1F9-1F1F2',
        sheet: [4, 31],
        shortName: 'flag-tm'
      }, {
        name: 'Woman with Bunny Ears',
        unified: '1F46F',
        sheet: [22, 0],
        shortName: 'dancers',
        obsoletedBy: '1F46F-200D-2640-FE0F'
      }, {
        name: 'Tunisia Flag',
        unified: '1F1F9-1F1F3',
        sheet: [4, 32],
        shortName: 'flag-tn'
      }, {
        name: 'Man with Bunny Ears Partying',
        unified: '1F46F-200D-2642-FE0F',
        sheet: [21, 56],
        shortName: 'man-with-bunny-ears-partying'
      }, {
        name: 'Tonga Flag',
        unified: '1F1F9-1F1F4',
        sheet: [4, 33],
        shortName: 'flag-to'
      }, {
        name: 'Woman with Bunny Ears Partying',
        unified: '1F46F-200D-2640-FE0F',
        obsoletes: '1F46F',
        sheet: [21, 55],
        shortName: 'woman-with-bunny-ears-partying'
      }, {
        name: 'Turkey Flag',
        unified: '1F1F9-1F1F7',
        sheet: [4, 34],
        shortName: 'flag-tr'
      }, {
        name: 'Person in Steamy Room',
        unified: '1F9D6',
        sheet: [48, 52],
        skinVariations: [{
          unified: '1F9D6-1F3FB',
          sheet: [48, 53]
        }, {
          unified: '1F9D6-1F3FC',
          sheet: [48, 54]
        }, {
          unified: '1F9D6-1F3FD',
          sheet: [48, 55]
        }, {
          unified: '1F9D6-1F3FE',
          sheet: [48, 56]
        }, {
          unified: '1F9D6-1F3FF',
          sheet: [49, 0]
        }],
        shortName: 'person_in_steamy_room',
        obsoletedBy: '1F9D6-200D-2642-FE0F'
      }, {
        name: 'Trinidad & Tobago Flag',
        unified: '1F1F9-1F1F9',
        sheet: [4, 35],
        shortName: 'flag-tt'
      }, {
        name: 'Man in Steamy Room',
        unified: '1F9D6-200D-2642-FE0F',
        obsoletes: '1F9D6',
        keywords: ['male', 'man', 'spa', 'steamroom', 'sauna'],
        sheet: [48, 46],
        skinVariations: [{
          unified: '1F9D6-1F3FB-200D-2642-FE0F',
          sheet: [48, 47]
        }, {
          unified: '1F9D6-1F3FC-200D-2642-FE0F',
          sheet: [48, 48]
        }, {
          unified: '1F9D6-1F3FD-200D-2642-FE0F',
          sheet: [48, 49]
        }, {
          unified: '1F9D6-1F3FE-200D-2642-FE0F',
          sheet: [48, 50]
        }, {
          unified: '1F9D6-1F3FF-200D-2642-FE0F',
          sheet: [48, 51]
        }],
        shortName: 'man_in_steamy_room'
      }, {
        name: 'Tuvalu Flag',
        unified: '1F1F9-1F1FB',
        sheet: [4, 36],
        shortName: 'flag-tv'
      }, {
        name: 'Woman in Steamy Room',
        unified: '1F9D6-200D-2640-FE0F',
        keywords: ['female', 'woman', 'spa', 'steamroom', 'sauna'],
        sheet: [48, 40],
        skinVariations: [{
          unified: '1F9D6-1F3FB-200D-2640-FE0F',
          sheet: [48, 41]
        }, {
          unified: '1F9D6-1F3FC-200D-2640-FE0F',
          sheet: [48, 42]
        }, {
          unified: '1F9D6-1F3FD-200D-2640-FE0F',
          sheet: [48, 43]
        }, {
          unified: '1F9D6-1F3FE-200D-2640-FE0F',
          sheet: [48, 44]
        }, {
          unified: '1F9D6-1F3FF-200D-2640-FE0F',
          sheet: [48, 45]
        }],
        shortName: 'woman_in_steamy_room'
      }, {
        name: 'Taiwan Flag',
        unified: '1F1F9-1F1FC',
        sheet: [4, 37],
        shortName: 'flag-tw'
      }, {
        name: 'Person Climbing',
        unified: '1F9D7',
        sheet: [49, 13],
        skinVariations: [{
          unified: '1F9D7-1F3FB',
          sheet: [49, 14]
        }, {
          unified: '1F9D7-1F3FC',
          sheet: [49, 15]
        }, {
          unified: '1F9D7-1F3FD',
          sheet: [49, 16]
        }, {
          unified: '1F9D7-1F3FE',
          sheet: [49, 17]
        }, {
          unified: '1F9D7-1F3FF',
          sheet: [49, 18]
        }],
        shortName: 'person_climbing',
        obsoletedBy: '1F9D7-200D-2640-FE0F'
      }, {
        name: 'Tanzania Flag',
        unified: '1F1F9-1F1FF',
        sheet: [4, 38],
        shortName: 'flag-tz'
      }, {
        name: 'Man Climbing',
        unified: '1F9D7-200D-2642-FE0F',
        sheet: [49, 7],
        skinVariations: [{
          unified: '1F9D7-1F3FB-200D-2642-FE0F',
          sheet: [49, 8]
        }, {
          unified: '1F9D7-1F3FC-200D-2642-FE0F',
          sheet: [49, 9]
        }, {
          unified: '1F9D7-1F3FD-200D-2642-FE0F',
          sheet: [49, 10]
        }, {
          unified: '1F9D7-1F3FE-200D-2642-FE0F',
          sheet: [49, 11]
        }, {
          unified: '1F9D7-1F3FF-200D-2642-FE0F',
          sheet: [49, 12]
        }],
        shortName: 'man_climbing'
      }, {
        name: 'Ukraine Flag',
        unified: '1F1FA-1F1E6',
        sheet: [4, 39],
        shortName: 'flag-ua'
      }, {
        name: 'Woman Climbing',
        unified: '1F9D7-200D-2640-FE0F',
        obsoletes: '1F9D7',
        sheet: [49, 1],
        skinVariations: [{
          unified: '1F9D7-1F3FB-200D-2640-FE0F',
          sheet: [49, 2]
        }, {
          unified: '1F9D7-1F3FC-200D-2640-FE0F',
          sheet: [49, 3]
        }, {
          unified: '1F9D7-1F3FD-200D-2640-FE0F',
          sheet: [49, 4]
        }, {
          unified: '1F9D7-1F3FE-200D-2640-FE0F',
          sheet: [49, 5]
        }, {
          unified: '1F9D7-1F3FF-200D-2640-FE0F',
          sheet: [49, 6]
        }],
        shortName: 'woman_climbing'
      }, {
        name: 'Uganda Flag',
        unified: '1F1FA-1F1EC',
        sheet: [4, 40],
        shortName: 'flag-ug'
      }, {
        name: 'Fencer',
        unified: '1F93A',
        sheet: [40, 32],
        shortName: 'fencer'
      }, {
        name: 'U.s. Outlying Islands Flag',
        unified: '1F1FA-1F1F2',
        sheet: [4, 41],
        shortName: 'flag-um'
      }, {
        name: 'Horse Racing',
        unified: '1F3C7',
        keywords: ['animal', 'betting', 'competition', 'gambling', 'luck'],
        sheet: [9, 27],
        skinVariations: [{
          unified: '1F3C7-1F3FB',
          sheet: [9, 28]
        }, {
          unified: '1F3C7-1F3FC',
          sheet: [9, 29]
        }, {
          unified: '1F3C7-1F3FD',
          sheet: [9, 30]
        }, {
          unified: '1F3C7-1F3FE',
          sheet: [9, 31]
        }, {
          unified: '1F3C7-1F3FF',
          sheet: [9, 32]
        }],
        shortName: 'horse_racing'
      }, {
        name: 'United Nations Flag',
        unified: '1F1FA-1F1F3',
        sheet: [4, 42],
        shortName: 'flag-un'
      }, {
        name: 'Skier',
        unified: '26F7-FE0F',
        keywords: ['sports', 'winter', 'snow'],
        sheet: [54, 17],
        shortName: 'skier'
      }, {
        name: 'United States Flag',
        unified: '1F1FA-1F1F8',
        keywords: ['united', 'states', 'america', 'flag', 'nation', 'country', 'banner'],
        sheet: [4, 43],
        shortNames: ['flag-us'],
        shortName: 'us'
      }, {
        name: 'Snowboarder',
        unified: '1F3C2',
        keywords: ['sports', 'winter'],
        sheet: [8, 40],
        skinVariations: [{
          unified: '1F3C2-1F3FB',
          sheet: [8, 41]
        }, {
          unified: '1F3C2-1F3FC',
          sheet: [8, 42]
        }, {
          unified: '1F3C2-1F3FD',
          sheet: [8, 43]
        }, {
          unified: '1F3C2-1F3FE',
          sheet: [8, 44]
        }, {
          unified: '1F3C2-1F3FF',
          sheet: [8, 45]
        }],
        shortName: 'snowboarder'
      }, {
        name: 'Uruguay Flag',
        unified: '1F1FA-1F1FE',
        sheet: [4, 44],
        shortName: 'flag-uy'
      }, {
        name: 'Golfer',
        unified: '1F3CC-FE0F',
        sheet: [10, 26],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F3CC-1F3FB',
          sheet: [10, 27],
          hidden: ['facebook']
        }, {
          unified: '1F3CC-1F3FC',
          sheet: [10, 28],
          hidden: ['facebook']
        }, {
          unified: '1F3CC-1F3FD',
          sheet: [10, 29],
          hidden: ['facebook']
        }, {
          unified: '1F3CC-1F3FE',
          sheet: [10, 30],
          hidden: ['facebook']
        }, {
          unified: '1F3CC-1F3FF',
          sheet: [10, 31],
          hidden: ['facebook']
        }],
        shortName: 'golfer',
        obsoletedBy: '1F3CC-FE0F-200D-2642-FE0F'
      }, {
        name: 'Uzbekistan Flag',
        unified: '1F1FA-1F1FF',
        sheet: [4, 45],
        shortName: 'flag-uz'
      }, {
        name: 'Man Golfing',
        unified: '1F3CC-FE0F-200D-2642-FE0F',
        obsoletes: '1F3CC-FE0F',
        sheet: [10, 20],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F3CC-1F3FB-200D-2642-FE0F',
          sheet: [10, 21]
        }, {
          unified: '1F3CC-1F3FC-200D-2642-FE0F',
          sheet: [10, 22]
        }, {
          unified: '1F3CC-1F3FD-200D-2642-FE0F',
          sheet: [10, 23]
        }, {
          unified: '1F3CC-1F3FE-200D-2642-FE0F',
          sheet: [10, 24]
        }, {
          unified: '1F3CC-1F3FF-200D-2642-FE0F',
          sheet: [10, 25]
        }],
        shortName: 'man-golfing'
      }, {
        name: 'Vatican City Flag',
        unified: '1F1FB-1F1E6',
        sheet: [4, 46],
        shortName: 'flag-va'
      }, {
        name: 'Woman Golfing',
        unified: '1F3CC-FE0F-200D-2640-FE0F',
        sheet: [10, 14],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F3CC-1F3FB-200D-2640-FE0F',
          sheet: [10, 15]
        }, {
          unified: '1F3CC-1F3FC-200D-2640-FE0F',
          sheet: [10, 16]
        }, {
          unified: '1F3CC-1F3FD-200D-2640-FE0F',
          sheet: [10, 17]
        }, {
          unified: '1F3CC-1F3FE-200D-2640-FE0F',
          sheet: [10, 18]
        }, {
          unified: '1F3CC-1F3FF-200D-2640-FE0F',
          sheet: [10, 19]
        }],
        shortName: 'woman-golfing'
      }, {
        name: 'St. Vincent & Grenadines Flag',
        unified: '1F1FB-1F1E8',
        sheet: [4, 47],
        shortName: 'flag-vc'
      }, {
        name: 'Surfer',
        unified: '1F3C4',
        sheet: [9, 19],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F3C4-1F3FB',
          sheet: [9, 20],
          hidden: ['facebook']
        }, {
          unified: '1F3C4-1F3FC',
          sheet: [9, 21],
          hidden: ['facebook']
        }, {
          unified: '1F3C4-1F3FD',
          sheet: [9, 22],
          hidden: ['facebook']
        }, {
          unified: '1F3C4-1F3FE',
          sheet: [9, 23],
          hidden: ['facebook']
        }, {
          unified: '1F3C4-1F3FF',
          sheet: [9, 24],
          hidden: ['facebook']
        }],
        shortName: 'surfer',
        obsoletedBy: '1F3C4-200D-2642-FE0F'
      }, {
        name: 'Venezuela Flag',
        unified: '1F1FB-1F1EA',
        sheet: [4, 48],
        shortName: 'flag-ve'
      }, {
        name: 'Man Surfing',
        unified: '1F3C4-200D-2642-FE0F',
        obsoletes: '1F3C4',
        sheet: [9, 13],
        skinVariations: [{
          unified: '1F3C4-1F3FB-200D-2642-FE0F',
          sheet: [9, 14]
        }, {
          unified: '1F3C4-1F3FC-200D-2642-FE0F',
          sheet: [9, 15]
        }, {
          unified: '1F3C4-1F3FD-200D-2642-FE0F',
          sheet: [9, 16]
        }, {
          unified: '1F3C4-1F3FE-200D-2642-FE0F',
          sheet: [9, 17]
        }, {
          unified: '1F3C4-1F3FF-200D-2642-FE0F',
          sheet: [9, 18]
        }],
        shortName: 'man-surfing'
      }, {
        name: 'British Virgin Islands Flag',
        unified: '1F1FB-1F1EC',
        sheet: [4, 49],
        shortName: 'flag-vg'
      }, {
        name: 'Woman Surfing',
        unified: '1F3C4-200D-2640-FE0F',
        sheet: [9, 7],
        skinVariations: [{
          unified: '1F3C4-1F3FB-200D-2640-FE0F',
          sheet: [9, 8]
        }, {
          unified: '1F3C4-1F3FC-200D-2640-FE0F',
          sheet: [9, 9]
        }, {
          unified: '1F3C4-1F3FD-200D-2640-FE0F',
          sheet: [9, 10]
        }, {
          unified: '1F3C4-1F3FE-200D-2640-FE0F',
          sheet: [9, 11]
        }, {
          unified: '1F3C4-1F3FF-200D-2640-FE0F',
          sheet: [9, 12]
        }],
        shortName: 'woman-surfing'
      }, {
        name: 'U.s. Virgin Islands Flag',
        unified: '1F1FB-1F1EE',
        sheet: [4, 50],
        shortName: 'flag-vi'
      }, {
        name: 'Rowboat',
        unified: '1F6A3',
        sheet: [34, 46],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F6A3-1F3FB',
          sheet: [34, 47],
          hidden: ['facebook']
        }, {
          unified: '1F6A3-1F3FC',
          sheet: [34, 48],
          hidden: ['facebook']
        }, {
          unified: '1F6A3-1F3FD',
          sheet: [34, 49],
          hidden: ['facebook']
        }, {
          unified: '1F6A3-1F3FE',
          sheet: [34, 50],
          hidden: ['facebook']
        }, {
          unified: '1F6A3-1F3FF',
          sheet: [34, 51],
          hidden: ['facebook']
        }],
        shortName: 'rowboat',
        obsoletedBy: '1F6A3-200D-2642-FE0F'
      }, {
        name: 'Vietnam Flag',
        unified: '1F1FB-1F1F3',
        sheet: [4, 51],
        shortName: 'flag-vn'
      }, {
        name: 'Man Rowing Boat',
        unified: '1F6A3-200D-2642-FE0F',
        obsoletes: '1F6A3',
        sheet: [34, 40],
        skinVariations: [{
          unified: '1F6A3-1F3FB-200D-2642-FE0F',
          sheet: [34, 41]
        }, {
          unified: '1F6A3-1F3FC-200D-2642-FE0F',
          sheet: [34, 42]
        }, {
          unified: '1F6A3-1F3FD-200D-2642-FE0F',
          sheet: [34, 43]
        }, {
          unified: '1F6A3-1F3FE-200D-2642-FE0F',
          sheet: [34, 44]
        }, {
          unified: '1F6A3-1F3FF-200D-2642-FE0F',
          sheet: [34, 45]
        }],
        shortName: 'man-rowing-boat'
      }, {
        name: 'Vanuatu Flag',
        unified: '1F1FB-1F1FA',
        sheet: [4, 52],
        shortName: 'flag-vu'
      }, {
        name: 'Woman Rowing Boat',
        unified: '1F6A3-200D-2640-FE0F',
        sheet: [34, 34],
        skinVariations: [{
          unified: '1F6A3-1F3FB-200D-2640-FE0F',
          sheet: [34, 35]
        }, {
          unified: '1F6A3-1F3FC-200D-2640-FE0F',
          sheet: [34, 36]
        }, {
          unified: '1F6A3-1F3FD-200D-2640-FE0F',
          sheet: [34, 37]
        }, {
          unified: '1F6A3-1F3FE-200D-2640-FE0F',
          sheet: [34, 38]
        }, {
          unified: '1F6A3-1F3FF-200D-2640-FE0F',
          sheet: [34, 39]
        }],
        shortName: 'woman-rowing-boat'
      }, {
        name: 'Wallis & Futuna Flag',
        unified: '1F1FC-1F1EB',
        sheet: [4, 53],
        shortName: 'flag-wf'
      }, {
        name: 'Swimmer',
        unified: '1F3CA',
        sheet: [9, 47],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F3CA-1F3FB',
          sheet: [9, 48],
          hidden: ['facebook']
        }, {
          unified: '1F3CA-1F3FC',
          sheet: [9, 49],
          hidden: ['facebook']
        }, {
          unified: '1F3CA-1F3FD',
          sheet: [9, 50],
          hidden: ['facebook']
        }, {
          unified: '1F3CA-1F3FE',
          sheet: [9, 51],
          hidden: ['facebook']
        }, {
          unified: '1F3CA-1F3FF',
          sheet: [9, 52],
          hidden: ['facebook']
        }],
        shortName: 'swimmer',
        obsoletedBy: '1F3CA-200D-2642-FE0F'
      }, {
        name: 'Samoa Flag',
        unified: '1F1FC-1F1F8',
        sheet: [4, 54],
        shortName: 'flag-ws'
      }, {
        name: 'Man Swimming',
        unified: '1F3CA-200D-2642-FE0F',
        obsoletes: '1F3CA',
        sheet: [9, 41],
        skinVariations: [{
          unified: '1F3CA-1F3FB-200D-2642-FE0F',
          sheet: [9, 42]
        }, {
          unified: '1F3CA-1F3FC-200D-2642-FE0F',
          sheet: [9, 43]
        }, {
          unified: '1F3CA-1F3FD-200D-2642-FE0F',
          sheet: [9, 44]
        }, {
          unified: '1F3CA-1F3FE-200D-2642-FE0F',
          sheet: [9, 45]
        }, {
          unified: '1F3CA-1F3FF-200D-2642-FE0F',
          sheet: [9, 46]
        }],
        shortName: 'man-swimming'
      }, {
        name: 'Kosovo Flag',
        unified: '1F1FD-1F1F0',
        sheet: [4, 55],
        shortName: 'flag-xk'
      }, {
        name: 'Woman Swimming',
        unified: '1F3CA-200D-2640-FE0F',
        sheet: [9, 35],
        skinVariations: [{
          unified: '1F3CA-1F3FB-200D-2640-FE0F',
          sheet: [9, 36]
        }, {
          unified: '1F3CA-1F3FC-200D-2640-FE0F',
          sheet: [9, 37]
        }, {
          unified: '1F3CA-1F3FD-200D-2640-FE0F',
          sheet: [9, 38]
        }, {
          unified: '1F3CA-1F3FE-200D-2640-FE0F',
          sheet: [9, 39]
        }, {
          unified: '1F3CA-1F3FF-200D-2640-FE0F',
          sheet: [9, 40]
        }],
        shortName: 'woman-swimming'
      }, {
        name: 'Yemen Flag',
        unified: '1F1FE-1F1EA',
        sheet: [4, 56],
        shortName: 'flag-ye'
      }, {
        name: 'Person with Ball',
        unified: '26F9-FE0F',
        sheet: [54, 31],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '26F9-1F3FB',
          sheet: [54, 32],
          hidden: ['facebook']
        }, {
          unified: '26F9-1F3FC',
          sheet: [54, 33],
          hidden: ['facebook']
        }, {
          unified: '26F9-1F3FD',
          sheet: [54, 34],
          hidden: ['facebook']
        }, {
          unified: '26F9-1F3FE',
          sheet: [54, 35],
          hidden: ['facebook']
        }, {
          unified: '26F9-1F3FF',
          sheet: [54, 36],
          hidden: ['facebook']
        }],
        shortName: 'person_with_ball',
        obsoletedBy: '26F9-FE0F-200D-2642-FE0F'
      }, {
        name: 'Mayotte Flag',
        unified: '1F1FE-1F1F9',
        sheet: [5, 0],
        shortName: 'flag-yt'
      }, {
        name: 'Man Bouncing Ball',
        unified: '26F9-FE0F-200D-2642-FE0F',
        obsoletes: '26F9-FE0F',
        sheet: [54, 25],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '26F9-1F3FB-200D-2642-FE0F',
          sheet: [54, 26]
        }, {
          unified: '26F9-1F3FC-200D-2642-FE0F',
          sheet: [54, 27]
        }, {
          unified: '26F9-1F3FD-200D-2642-FE0F',
          sheet: [54, 28]
        }, {
          unified: '26F9-1F3FE-200D-2642-FE0F',
          sheet: [54, 29]
        }, {
          unified: '26F9-1F3FF-200D-2642-FE0F',
          sheet: [54, 30]
        }],
        shortName: 'man-bouncing-ball'
      }, {
        name: 'South Africa Flag',
        unified: '1F1FF-1F1E6',
        sheet: [5, 1],
        shortName: 'flag-za'
      }, {
        name: 'Woman Bouncing Ball',
        unified: '26F9-FE0F-200D-2640-FE0F',
        sheet: [54, 19],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '26F9-1F3FB-200D-2640-FE0F',
          sheet: [54, 20]
        }, {
          unified: '26F9-1F3FC-200D-2640-FE0F',
          sheet: [54, 21]
        }, {
          unified: '26F9-1F3FD-200D-2640-FE0F',
          sheet: [54, 22]
        }, {
          unified: '26F9-1F3FE-200D-2640-FE0F',
          sheet: [54, 23]
        }, {
          unified: '26F9-1F3FF-200D-2640-FE0F',
          sheet: [54, 24]
        }],
        shortName: 'woman-bouncing-ball'
      }, {
        name: 'Zambia Flag',
        unified: '1F1FF-1F1F2',
        sheet: [5, 2],
        shortName: 'flag-zm'
      }, {
        name: 'Weight Lifter',
        unified: '1F3CB-FE0F',
        sheet: [10, 8],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F3CB-1F3FB',
          sheet: [10, 9],
          hidden: ['facebook']
        }, {
          unified: '1F3CB-1F3FC',
          sheet: [10, 10],
          hidden: ['facebook']
        }, {
          unified: '1F3CB-1F3FD',
          sheet: [10, 11],
          hidden: ['facebook']
        }, {
          unified: '1F3CB-1F3FE',
          sheet: [10, 12],
          hidden: ['facebook']
        }, {
          unified: '1F3CB-1F3FF',
          sheet: [10, 13],
          hidden: ['facebook']
        }],
        shortName: 'weight_lifter',
        obsoletedBy: '1F3CB-FE0F-200D-2642-FE0F'
      }, {
        name: 'Zimbabwe Flag',
        unified: '1F1FF-1F1FC',
        sheet: [5, 3],
        shortName: 'flag-zw'
      }, {
        name: 'Man Lifting Weights',
        unified: '1F3CB-FE0F-200D-2642-FE0F',
        obsoletes: '1F3CB-FE0F',
        sheet: [10, 2],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F3CB-1F3FB-200D-2642-FE0F',
          sheet: [10, 3]
        }, {
          unified: '1F3CB-1F3FC-200D-2642-FE0F',
          sheet: [10, 4]
        }, {
          unified: '1F3CB-1F3FD-200D-2642-FE0F',
          sheet: [10, 5]
        }, {
          unified: '1F3CB-1F3FE-200D-2642-FE0F',
          sheet: [10, 6]
        }, {
          unified: '1F3CB-1F3FF-200D-2642-FE0F',
          sheet: [10, 7]
        }],
        shortName: 'man-lifting-weights'
      }, {
        name: 'Woman Lifting Weights',
        unified: '1F3CB-FE0F-200D-2640-FE0F',
        sheet: [9, 53],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F3CB-1F3FB-200D-2640-FE0F',
          sheet: [9, 54]
        }, {
          unified: '1F3CB-1F3FC-200D-2640-FE0F',
          sheet: [9, 55]
        }, {
          unified: '1F3CB-1F3FD-200D-2640-FE0F',
          sheet: [9, 56]
        }, {
          unified: '1F3CB-1F3FE-200D-2640-FE0F',
          sheet: [10, 0]
        }, {
          unified: '1F3CB-1F3FF-200D-2640-FE0F',
          sheet: [10, 1]
        }],
        shortName: 'woman-lifting-weights'
      }, {
        name: 'England Flag',
        unified: '1F3F4-E0067-E0062-E0065-E006E-E0067-E007F',
        sheet: [11, 14],
        shortName: 'flag-england'
      }, {
        name: 'Scotland Flag',
        unified: '1F3F4-E0067-E0062-E0073-E0063-E0074-E007F',
        sheet: [11, 15],
        shortName: 'flag-scotland'
      }, {
        name: 'Bicyclist',
        unified: '1F6B4',
        sheet: [35, 23],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F6B4-1F3FB',
          sheet: [35, 24],
          hidden: ['facebook']
        }, {
          unified: '1F6B4-1F3FC',
          sheet: [35, 25],
          hidden: ['facebook']
        }, {
          unified: '1F6B4-1F3FD',
          sheet: [35, 26],
          hidden: ['facebook']
        }, {
          unified: '1F6B4-1F3FE',
          sheet: [35, 27],
          hidden: ['facebook']
        }, {
          unified: '1F6B4-1F3FF',
          sheet: [35, 28],
          hidden: ['facebook']
        }],
        shortName: 'bicyclist',
        obsoletedBy: '1F6B4-200D-2642-FE0F'
      }, {
        name: 'Wales Flag',
        unified: '1F3F4-E0067-E0062-E0077-E006C-E0073-E007F',
        sheet: [11, 16],
        shortName: 'flag-wales'
      }, {
        name: 'Man Biking',
        unified: '1F6B4-200D-2642-FE0F',
        obsoletes: '1F6B4',
        sheet: [35, 17],
        skinVariations: [{
          unified: '1F6B4-1F3FB-200D-2642-FE0F',
          sheet: [35, 18]
        }, {
          unified: '1F6B4-1F3FC-200D-2642-FE0F',
          sheet: [35, 19]
        }, {
          unified: '1F6B4-1F3FD-200D-2642-FE0F',
          sheet: [35, 20]
        }, {
          unified: '1F6B4-1F3FE-200D-2642-FE0F',
          sheet: [35, 21]
        }, {
          unified: '1F6B4-1F3FF-200D-2642-FE0F',
          sheet: [35, 22]
        }],
        shortName: 'man-biking'
      }, {
        name: 'Woman Biking',
        unified: '1F6B4-200D-2640-FE0F',
        sheet: [35, 11],
        skinVariations: [{
          unified: '1F6B4-1F3FB-200D-2640-FE0F',
          sheet: [35, 12]
        }, {
          unified: '1F6B4-1F3FC-200D-2640-FE0F',
          sheet: [35, 13]
        }, {
          unified: '1F6B4-1F3FD-200D-2640-FE0F',
          sheet: [35, 14]
        }, {
          unified: '1F6B4-1F3FE-200D-2640-FE0F',
          sheet: [35, 15]
        }, {
          unified: '1F6B4-1F3FF-200D-2640-FE0F',
          sheet: [35, 16]
        }],
        shortName: 'woman-biking'
      }, {
        name: 'Mountain Bicyclist',
        unified: '1F6B5',
        sheet: [35, 41],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F6B5-1F3FB',
          sheet: [35, 42],
          hidden: ['facebook']
        }, {
          unified: '1F6B5-1F3FC',
          sheet: [35, 43],
          hidden: ['facebook']
        }, {
          unified: '1F6B5-1F3FD',
          sheet: [35, 44],
          hidden: ['facebook']
        }, {
          unified: '1F6B5-1F3FE',
          sheet: [35, 45],
          hidden: ['facebook']
        }, {
          unified: '1F6B5-1F3FF',
          sheet: [35, 46],
          hidden: ['facebook']
        }],
        shortName: 'mountain_bicyclist',
        obsoletedBy: '1F6B5-200D-2642-FE0F'
      }, {
        name: 'Man Mountain Biking',
        unified: '1F6B5-200D-2642-FE0F',
        obsoletes: '1F6B5',
        sheet: [35, 35],
        skinVariations: [{
          unified: '1F6B5-1F3FB-200D-2642-FE0F',
          sheet: [35, 36]
        }, {
          unified: '1F6B5-1F3FC-200D-2642-FE0F',
          sheet: [35, 37]
        }, {
          unified: '1F6B5-1F3FD-200D-2642-FE0F',
          sheet: [35, 38]
        }, {
          unified: '1F6B5-1F3FE-200D-2642-FE0F',
          sheet: [35, 39]
        }, {
          unified: '1F6B5-1F3FF-200D-2642-FE0F',
          sheet: [35, 40]
        }],
        shortName: 'man-mountain-biking'
      }, {
        name: 'Woman Mountain Biking',
        unified: '1F6B5-200D-2640-FE0F',
        sheet: [35, 29],
        skinVariations: [{
          unified: '1F6B5-1F3FB-200D-2640-FE0F',
          sheet: [35, 30]
        }, {
          unified: '1F6B5-1F3FC-200D-2640-FE0F',
          sheet: [35, 31]
        }, {
          unified: '1F6B5-1F3FD-200D-2640-FE0F',
          sheet: [35, 32]
        }, {
          unified: '1F6B5-1F3FE-200D-2640-FE0F',
          sheet: [35, 33]
        }, {
          unified: '1F6B5-1F3FF-200D-2640-FE0F',
          sheet: [35, 34]
        }],
        shortName: 'woman-mountain-biking'
      }, {
        name: 'Person Doing Cartwheel',
        unified: '1F938',
        sheet: [40, 8],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F938-1F3FB',
          sheet: [40, 9],
          hidden: ['facebook']
        }, {
          unified: '1F938-1F3FC',
          sheet: [40, 10],
          hidden: ['facebook']
        }, {
          unified: '1F938-1F3FD',
          sheet: [40, 11],
          hidden: ['facebook']
        }, {
          unified: '1F938-1F3FE',
          sheet: [40, 12],
          hidden: ['facebook']
        }, {
          unified: '1F938-1F3FF',
          sheet: [40, 13],
          hidden: ['facebook']
        }],
        shortName: 'person_doing_cartwheel'
      }, {
        name: 'Man Cartwheeling',
        unified: '1F938-200D-2642-FE0F',
        sheet: [40, 2],
        skinVariations: [{
          unified: '1F938-1F3FB-200D-2642-FE0F',
          sheet: [40, 3]
        }, {
          unified: '1F938-1F3FC-200D-2642-FE0F',
          sheet: [40, 4]
        }, {
          unified: '1F938-1F3FD-200D-2642-FE0F',
          sheet: [40, 5]
        }, {
          unified: '1F938-1F3FE-200D-2642-FE0F',
          sheet: [40, 6]
        }, {
          unified: '1F938-1F3FF-200D-2642-FE0F',
          sheet: [40, 7]
        }],
        shortName: 'man-cartwheeling'
      }, {
        name: 'Woman Cartwheeling',
        unified: '1F938-200D-2640-FE0F',
        sheet: [39, 53],
        skinVariations: [{
          unified: '1F938-1F3FB-200D-2640-FE0F',
          sheet: [39, 54]
        }, {
          unified: '1F938-1F3FC-200D-2640-FE0F',
          sheet: [39, 55]
        }, {
          unified: '1F938-1F3FD-200D-2640-FE0F',
          sheet: [39, 56]
        }, {
          unified: '1F938-1F3FE-200D-2640-FE0F',
          sheet: [40, 0]
        }, {
          unified: '1F938-1F3FF-200D-2640-FE0F',
          sheet: [40, 1]
        }],
        shortName: 'woman-cartwheeling'
      }, {
        name: 'Wrestlers',
        unified: '1F93C',
        sheet: [40, 35],
        shortName: 'wrestlers'
      }, {
        name: 'Man Wrestling',
        unified: '1F93C-200D-2642-FE0F',
        sheet: [40, 34],
        shortName: 'man-wrestling'
      }, {
        name: 'Woman Wrestling',
        unified: '1F93C-200D-2640-FE0F',
        sheet: [40, 33],
        shortName: 'woman-wrestling'
      }, {
        name: 'Water Polo',
        unified: '1F93D',
        sheet: [40, 48],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F93D-1F3FB',
          sheet: [40, 49],
          hidden: ['facebook']
        }, {
          unified: '1F93D-1F3FC',
          sheet: [40, 50],
          hidden: ['facebook']
        }, {
          unified: '1F93D-1F3FD',
          sheet: [40, 51],
          hidden: ['facebook']
        }, {
          unified: '1F93D-1F3FE',
          sheet: [40, 52],
          hidden: ['facebook']
        }, {
          unified: '1F93D-1F3FF',
          sheet: [40, 53],
          hidden: ['facebook']
        }],
        shortName: 'water_polo'
      }, {
        name: 'Man Playing Water Polo',
        unified: '1F93D-200D-2642-FE0F',
        sheet: [40, 42],
        skinVariations: [{
          unified: '1F93D-1F3FB-200D-2642-FE0F',
          sheet: [40, 43]
        }, {
          unified: '1F93D-1F3FC-200D-2642-FE0F',
          sheet: [40, 44]
        }, {
          unified: '1F93D-1F3FD-200D-2642-FE0F',
          sheet: [40, 45]
        }, {
          unified: '1F93D-1F3FE-200D-2642-FE0F',
          sheet: [40, 46]
        }, {
          unified: '1F93D-1F3FF-200D-2642-FE0F',
          sheet: [40, 47]
        }],
        shortName: 'man-playing-water-polo'
      }, {
        name: 'Woman Playing Water Polo',
        unified: '1F93D-200D-2640-FE0F',
        sheet: [40, 36],
        skinVariations: [{
          unified: '1F93D-1F3FB-200D-2640-FE0F',
          sheet: [40, 37]
        }, {
          unified: '1F93D-1F3FC-200D-2640-FE0F',
          sheet: [40, 38]
        }, {
          unified: '1F93D-1F3FD-200D-2640-FE0F',
          sheet: [40, 39]
        }, {
          unified: '1F93D-1F3FE-200D-2640-FE0F',
          sheet: [40, 40]
        }, {
          unified: '1F93D-1F3FF-200D-2640-FE0F',
          sheet: [40, 41]
        }],
        shortName: 'woman-playing-water-polo'
      }, {
        name: 'Handball',
        unified: '1F93E',
        sheet: [41, 9],
        hidden: ['facebook'],
        skinVariations: [{
          unified: '1F93E-1F3FB',
          sheet: [41, 10],
          hidden: ['facebook']
        }, {
          unified: '1F93E-1F3FC',
          sheet: [41, 11],
          hidden: ['facebook']
        }, {
          unified: '1F93E-1F3FD',
          sheet: [41, 12],
          hidden: ['facebook']
        }, {
          unified: '1F93E-1F3FE',
          sheet: [41, 13],
          hidden: ['facebook']
        }, {
          unified: '1F93E-1F3FF',
          sheet: [41, 14],
          hidden: ['facebook']
        }],
        shortName: 'handball'
      }, {
        name: 'Man Playing Handball',
        unified: '1F93E-200D-2642-FE0F',
        sheet: [41, 3],
        skinVariations: [{
          unified: '1F93E-1F3FB-200D-2642-FE0F',
          sheet: [41, 4]
        }, {
          unified: '1F93E-1F3FC-200D-2642-FE0F',
          sheet: [41, 5]
        }, {
          unified: '1F93E-1F3FD-200D-2642-FE0F',
          sheet: [41, 6]
        }, {
          unified: '1F93E-1F3FE-200D-2642-FE0F',
          sheet: [41, 7]
        }, {
          unified: '1F93E-1F3FF-200D-2642-FE0F',
          sheet: [41, 8]
        }],
        shortName: 'man-playing-handball'
      }, {
        name: 'Woman Playing Handball',
        unified: '1F93E-200D-2640-FE0F',
        sheet: [40, 54],
        skinVariations: [{
          unified: '1F93E-1F3FB-200D-2640-FE0F',
          sheet: [40, 55]
        }, {
          unified: '1F93E-1F3FC-200D-2640-FE0F',
          sheet: [40, 56]
        }, {
          unified: '1F93E-1F3FD-200D-2640-FE0F',
          sheet: [41, 0]
        }, {
          unified: '1F93E-1F3FE-200D-2640-FE0F',
          sheet: [41, 1]
        }, {
          unified: '1F93E-1F3FF-200D-2640-FE0F',
          sheet: [41, 2]
        }],
        shortName: 'woman-playing-handball'
      }, {
        name: 'Juggling',
        unified: '1F939',
        sheet: [40, 26],
        skinVariations: [{
          unified: '1F939-1F3FB',
          sheet: [40, 27]
        }, {
          unified: '1F939-1F3FC',
          sheet: [40, 28]
        }, {
          unified: '1F939-1F3FD',
          sheet: [40, 29]
        }, {
          unified: '1F939-1F3FE',
          sheet: [40, 30]
        }, {
          unified: '1F939-1F3FF',
          sheet: [40, 31]
        }],
        shortName: 'juggling'
      }, {
        name: 'Man Juggling',
        unified: '1F939-200D-2642-FE0F',
        sheet: [40, 20],
        skinVariations: [{
          unified: '1F939-1F3FB-200D-2642-FE0F',
          sheet: [40, 21]
        }, {
          unified: '1F939-1F3FC-200D-2642-FE0F',
          sheet: [40, 22]
        }, {
          unified: '1F939-1F3FD-200D-2642-FE0F',
          sheet: [40, 23]
        }, {
          unified: '1F939-1F3FE-200D-2642-FE0F',
          sheet: [40, 24]
        }, {
          unified: '1F939-1F3FF-200D-2642-FE0F',
          sheet: [40, 25]
        }],
        shortName: 'man-juggling'
      }, {
        name: 'Woman Juggling',
        unified: '1F939-200D-2640-FE0F',
        sheet: [40, 14],
        skinVariations: [{
          unified: '1F939-1F3FB-200D-2640-FE0F',
          sheet: [40, 15]
        }, {
          unified: '1F939-1F3FC-200D-2640-FE0F',
          sheet: [40, 16]
        }, {
          unified: '1F939-1F3FD-200D-2640-FE0F',
          sheet: [40, 17]
        }, {
          unified: '1F939-1F3FE-200D-2640-FE0F',
          sheet: [40, 18]
        }, {
          unified: '1F939-1F3FF-200D-2640-FE0F',
          sheet: [40, 19]
        }],
        shortName: 'woman-juggling'
      }, {
        name: 'Person in Lotus Position',
        unified: '1F9D8',
        sheet: [49, 31],
        skinVariations: [{
          unified: '1F9D8-1F3FB',
          sheet: [49, 32]
        }, {
          unified: '1F9D8-1F3FC',
          sheet: [49, 33]
        }, {
          unified: '1F9D8-1F3FD',
          sheet: [49, 34]
        }, {
          unified: '1F9D8-1F3FE',
          sheet: [49, 35]
        }, {
          unified: '1F9D8-1F3FF',
          sheet: [49, 36]
        }],
        shortName: 'person_in_lotus_position',
        obsoletedBy: '1F9D8-200D-2640-FE0F'
      }, {
        name: 'Man in Lotus Position',
        unified: '1F9D8-200D-2642-FE0F',
        keywords: ['man', 'male', 'meditation', 'yoga', 'serenity', 'zen', 'mindfulness'],
        sheet: [49, 25],
        skinVariations: [{
          unified: '1F9D8-1F3FB-200D-2642-FE0F',
          sheet: [49, 26]
        }, {
          unified: '1F9D8-1F3FC-200D-2642-FE0F',
          sheet: [49, 27]
        }, {
          unified: '1F9D8-1F3FD-200D-2642-FE0F',
          sheet: [49, 28]
        }, {
          unified: '1F9D8-1F3FE-200D-2642-FE0F',
          sheet: [49, 29]
        }, {
          unified: '1F9D8-1F3FF-200D-2642-FE0F',
          sheet: [49, 30]
        }],
        shortName: 'man_in_lotus_position'
      }, {
        name: 'Woman in Lotus Position',
        unified: '1F9D8-200D-2640-FE0F',
        obsoletes: '1F9D8',
        keywords: ['woman', 'female', 'meditation', 'yoga', 'serenity', 'zen', 'mindfulness'],
        sheet: [49, 19],
        skinVariations: [{
          unified: '1F9D8-1F3FB-200D-2640-FE0F',
          sheet: [49, 20]
        }, {
          unified: '1F9D8-1F3FC-200D-2640-FE0F',
          sheet: [49, 21]
        }, {
          unified: '1F9D8-1F3FD-200D-2640-FE0F',
          sheet: [49, 22]
        }, {
          unified: '1F9D8-1F3FE-200D-2640-FE0F',
          sheet: [49, 23]
        }, {
          unified: '1F9D8-1F3FF-200D-2640-FE0F',
          sheet: [49, 24]
        }],
        shortName: 'woman_in_lotus_position'
      }, {
        name: 'Bath',
        unified: '1F6C0',
        keywords: ['clean', 'shower', 'bathroom'],
        sheet: [36, 17],
        skinVariations: [{
          unified: '1F6C0-1F3FB',
          sheet: [36, 18]
        }, {
          unified: '1F6C0-1F3FC',
          sheet: [36, 19]
        }, {
          unified: '1F6C0-1F3FD',
          sheet: [36, 20]
        }, {
          unified: '1F6C0-1F3FE',
          sheet: [36, 21]
        }, {
          unified: '1F6C0-1F3FF',
          sheet: [36, 22]
        }],
        shortName: 'bath'
      }, {
        name: 'Sleeping Accommodation',
        unified: '1F6CC',
        sheet: [36, 29],
        skinVariations: [{
          unified: '1F6CC-1F3FB',
          sheet: [36, 30]
        }, {
          unified: '1F6CC-1F3FC',
          sheet: [36, 31]
        }, {
          unified: '1F6CC-1F3FD',
          sheet: [36, 32]
        }, {
          unified: '1F6CC-1F3FE',
          sheet: [36, 33]
        }, {
          unified: '1F6CC-1F3FF',
          sheet: [36, 34]
        }],
        shortName: 'sleeping_accommodation'
      }, {
        name: 'People Holding Hands',
        unified: '1F9D1-200D-1F91D-200D-1F9D1',
        sheet: [46, 38],
        skinVariations: [{
          unified: '1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FB',
          sheet: [46, 39]
        }, {
          unified: '1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FC',
          sheet: [46, 40],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FD',
          sheet: [46, 41],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FE',
          sheet: [46, 42],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FF',
          sheet: [46, 43],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FB',
          sheet: [46, 44]
        }, {
          unified: '1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FC',
          sheet: [46, 45]
        }, {
          unified: '1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FD',
          sheet: [46, 46],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FE',
          sheet: [46, 47],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FF',
          sheet: [46, 48],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FB',
          sheet: [46, 49]
        }, {
          unified: '1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FC',
          sheet: [46, 50]
        }, {
          unified: '1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FD',
          sheet: [46, 51]
        }, {
          unified: '1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FE',
          sheet: [46, 52],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FF',
          sheet: [46, 53],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FB',
          sheet: [46, 54]
        }, {
          unified: '1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FC',
          sheet: [46, 55]
        }, {
          unified: '1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FD',
          sheet: [46, 56]
        }, {
          unified: '1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FE',
          sheet: [47, 0]
        }, {
          unified: '1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FF',
          sheet: [47, 1],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FB',
          sheet: [47, 2]
        }, {
          unified: '1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FC',
          sheet: [47, 3]
        }, {
          unified: '1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FD',
          sheet: [47, 4]
        }, {
          unified: '1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FE',
          sheet: [47, 5]
        }, {
          unified: '1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FF',
          sheet: [47, 6]
        }],
        shortName: 'people_holding_hands'
      }, {
        name: 'Two Women Holding Hands',
        unified: '1F46D',
        keywords: ['pair', 'friendship', 'couple', 'love', 'like', 'female', 'people', 'human'],
        sheet: [21, 11],
        skinVariations: [{
          unified: '1F46D-1F3FB',
          sheet: [21, 12]
        }, {
          unified: '1F46D-1F3FC',
          sheet: [21, 13]
        }, {
          unified: '1F46D-1F3FD',
          sheet: [21, 14]
        }, {
          unified: '1F46D-1F3FE',
          sheet: [21, 15]
        }, {
          unified: '1F46D-1F3FF',
          sheet: [21, 16]
        }, {
          unified: '1F469-1F3FB-200D-1F91D-200D-1F469-1F3FC',
          sheet: [21, 17],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F469-1F3FB-200D-1F91D-200D-1F469-1F3FD',
          sheet: [21, 18],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F469-1F3FB-200D-1F91D-200D-1F469-1F3FE',
          sheet: [21, 19],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F469-1F3FB-200D-1F91D-200D-1F469-1F3FF',
          sheet: [21, 20],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F469-1F3FC-200D-1F91D-200D-1F469-1F3FB',
          sheet: [21, 21]
        }, {
          unified: '1F469-1F3FC-200D-1F91D-200D-1F469-1F3FD',
          sheet: [21, 22],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F469-1F3FC-200D-1F91D-200D-1F469-1F3FE',
          sheet: [21, 23],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F469-1F3FC-200D-1F91D-200D-1F469-1F3FF',
          sheet: [21, 24],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F469-1F3FD-200D-1F91D-200D-1F469-1F3FB',
          sheet: [21, 25]
        }, {
          unified: '1F469-1F3FD-200D-1F91D-200D-1F469-1F3FC',
          sheet: [21, 26]
        }, {
          unified: '1F469-1F3FD-200D-1F91D-200D-1F469-1F3FE',
          sheet: [21, 27],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F469-1F3FD-200D-1F91D-200D-1F469-1F3FF',
          sheet: [21, 28],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F469-1F3FE-200D-1F91D-200D-1F469-1F3FB',
          sheet: [21, 29]
        }, {
          unified: '1F469-1F3FE-200D-1F91D-200D-1F469-1F3FC',
          sheet: [21, 30]
        }, {
          unified: '1F469-1F3FE-200D-1F91D-200D-1F469-1F3FD',
          sheet: [21, 31]
        }, {
          unified: '1F469-1F3FE-200D-1F91D-200D-1F469-1F3FF',
          sheet: [21, 32],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F469-1F3FF-200D-1F91D-200D-1F469-1F3FB',
          sheet: [21, 33]
        }, {
          unified: '1F469-1F3FF-200D-1F91D-200D-1F469-1F3FC',
          sheet: [21, 34]
        }, {
          unified: '1F469-1F3FF-200D-1F91D-200D-1F469-1F3FD',
          sheet: [21, 35]
        }, {
          unified: '1F469-1F3FF-200D-1F91D-200D-1F469-1F3FE',
          sheet: [21, 36]
        }],
        shortNames: ['women_holding_hands'],
        shortName: 'two_women_holding_hands'
      }, {
        name: 'Man and Woman Holding Hands',
        unified: '1F46B',
        keywords: ['pair', 'people', 'human', 'love', 'date', 'dating', 'like', 'affection', 'valentines', 'marriage'],
        sheet: [20, 16],
        skinVariations: [{
          unified: '1F46B-1F3FB',
          sheet: [20, 17]
        }, {
          unified: '1F46B-1F3FC',
          sheet: [20, 18]
        }, {
          unified: '1F46B-1F3FD',
          sheet: [20, 19]
        }, {
          unified: '1F46B-1F3FE',
          sheet: [20, 20]
        }, {
          unified: '1F46B-1F3FF',
          sheet: [20, 21]
        }, {
          unified: '1F469-1F3FB-200D-1F91D-200D-1F468-1F3FC',
          sheet: [20, 22]
        }, {
          unified: '1F469-1F3FB-200D-1F91D-200D-1F468-1F3FD',
          sheet: [20, 23]
        }, {
          unified: '1F469-1F3FB-200D-1F91D-200D-1F468-1F3FE',
          sheet: [20, 24]
        }, {
          unified: '1F469-1F3FB-200D-1F91D-200D-1F468-1F3FF',
          sheet: [20, 25]
        }, {
          unified: '1F469-1F3FC-200D-1F91D-200D-1F468-1F3FB',
          sheet: [20, 26]
        }, {
          unified: '1F469-1F3FC-200D-1F91D-200D-1F468-1F3FD',
          sheet: [20, 27]
        }, {
          unified: '1F469-1F3FC-200D-1F91D-200D-1F468-1F3FE',
          sheet: [20, 28]
        }, {
          unified: '1F469-1F3FC-200D-1F91D-200D-1F468-1F3FF',
          sheet: [20, 29]
        }, {
          unified: '1F469-1F3FD-200D-1F91D-200D-1F468-1F3FB',
          sheet: [20, 30]
        }, {
          unified: '1F469-1F3FD-200D-1F91D-200D-1F468-1F3FC',
          sheet: [20, 31]
        }, {
          unified: '1F469-1F3FD-200D-1F91D-200D-1F468-1F3FE',
          sheet: [20, 32]
        }, {
          unified: '1F469-1F3FD-200D-1F91D-200D-1F468-1F3FF',
          sheet: [20, 33]
        }, {
          unified: '1F469-1F3FE-200D-1F91D-200D-1F468-1F3FB',
          sheet: [20, 34]
        }, {
          unified: '1F469-1F3FE-200D-1F91D-200D-1F468-1F3FC',
          sheet: [20, 35]
        }, {
          unified: '1F469-1F3FE-200D-1F91D-200D-1F468-1F3FD',
          sheet: [20, 36]
        }, {
          unified: '1F469-1F3FE-200D-1F91D-200D-1F468-1F3FF',
          sheet: [20, 37]
        }, {
          unified: '1F469-1F3FF-200D-1F91D-200D-1F468-1F3FB',
          sheet: [20, 38]
        }, {
          unified: '1F469-1F3FF-200D-1F91D-200D-1F468-1F3FC',
          sheet: [20, 39]
        }, {
          unified: '1F469-1F3FF-200D-1F91D-200D-1F468-1F3FD',
          sheet: [20, 40]
        }, {
          unified: '1F469-1F3FF-200D-1F91D-200D-1F468-1F3FE',
          sheet: [20, 41]
        }],
        shortNames: ['man_and_woman_holding_hands', 'woman_and_man_holding_hands'],
        shortName: 'couple'
      }, {
        name: 'Two Men Holding Hands',
        unified: '1F46C',
        keywords: ['pair', 'couple', 'love', 'like', 'bromance', 'friendship', 'people', 'human'],
        sheet: [20, 42],
        skinVariations: [{
          unified: '1F46C-1F3FB',
          sheet: [20, 43]
        }, {
          unified: '1F46C-1F3FC',
          sheet: [20, 44]
        }, {
          unified: '1F46C-1F3FD',
          sheet: [20, 45]
        }, {
          unified: '1F46C-1F3FE',
          sheet: [20, 46]
        }, {
          unified: '1F46C-1F3FF',
          sheet: [20, 47]
        }, {
          unified: '1F468-1F3FB-200D-1F91D-200D-1F468-1F3FC',
          sheet: [20, 48],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F468-1F3FB-200D-1F91D-200D-1F468-1F3FD',
          sheet: [20, 49],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F468-1F3FB-200D-1F91D-200D-1F468-1F3FE',
          sheet: [20, 50],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F468-1F3FB-200D-1F91D-200D-1F468-1F3FF',
          sheet: [20, 51],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F468-1F3FC-200D-1F91D-200D-1F468-1F3FB',
          sheet: [20, 52]
        }, {
          unified: '1F468-1F3FC-200D-1F91D-200D-1F468-1F3FD',
          sheet: [20, 53],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F468-1F3FC-200D-1F91D-200D-1F468-1F3FE',
          sheet: [20, 54],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F468-1F3FC-200D-1F91D-200D-1F468-1F3FF',
          sheet: [20, 55],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F468-1F3FD-200D-1F91D-200D-1F468-1F3FB',
          sheet: [20, 56]
        }, {
          unified: '1F468-1F3FD-200D-1F91D-200D-1F468-1F3FC',
          sheet: [21, 0]
        }, {
          unified: '1F468-1F3FD-200D-1F91D-200D-1F468-1F3FE',
          sheet: [21, 1],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F468-1F3FD-200D-1F91D-200D-1F468-1F3FF',
          sheet: [21, 2],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F468-1F3FE-200D-1F91D-200D-1F468-1F3FB',
          sheet: [21, 3]
        }, {
          unified: '1F468-1F3FE-200D-1F91D-200D-1F468-1F3FC',
          sheet: [21, 4]
        }, {
          unified: '1F468-1F3FE-200D-1F91D-200D-1F468-1F3FD',
          sheet: [21, 5]
        }, {
          unified: '1F468-1F3FE-200D-1F91D-200D-1F468-1F3FF',
          sheet: [21, 6],
          hidden: ['google', 'facebook']
        }, {
          unified: '1F468-1F3FF-200D-1F91D-200D-1F468-1F3FB',
          sheet: [21, 7]
        }, {
          unified: '1F468-1F3FF-200D-1F91D-200D-1F468-1F3FC',
          sheet: [21, 8]
        }, {
          unified: '1F468-1F3FF-200D-1F91D-200D-1F468-1F3FD',
          sheet: [21, 9]
        }, {
          unified: '1F468-1F3FF-200D-1F91D-200D-1F468-1F3FE',
          sheet: [21, 10]
        }],
        shortNames: ['men_holding_hands'],
        shortName: 'two_men_holding_hands'
      }, {
        name: 'Kiss',
        unified: '1F48F',
        sheet: [25, 25],
        shortName: 'couplekiss',
        obsoletedBy: '1F469-200D-2764-FE0F-200D-1F48B-200D-1F468'
      }, {
        name: 'Woman Kiss Man',
        unified: '1F469-200D-2764-FE0F-200D-1F48B-200D-1F468',
        obsoletes: '1F48F',
        sheet: [20, 7],
        shortName: 'woman-kiss-man'
      }, {
        name: 'Man Kiss Man',
        unified: '1F468-200D-2764-FE0F-200D-1F48B-200D-1F468',
        sheet: [17, 21],
        shortName: 'man-kiss-man'
      }, {
        name: 'Woman Kiss Woman',
        unified: '1F469-200D-2764-FE0F-200D-1F48B-200D-1F469',
        sheet: [20, 8],
        shortName: 'woman-kiss-woman'
      }, {
        name: 'Couple with Heart',
        unified: '1F491',
        sheet: [25, 27],
        shortName: 'couple_with_heart',
        obsoletedBy: '1F469-200D-2764-FE0F-200D-1F468'
      }, {
        name: 'Woman Heart Man',
        unified: '1F469-200D-2764-FE0F-200D-1F468',
        obsoletes: '1F491',
        sheet: [20, 5],
        shortName: 'woman-heart-man'
      }, {
        name: 'Man Heart Man',
        unified: '1F468-200D-2764-FE0F-200D-1F468',
        sheet: [17, 20],
        shortName: 'man-heart-man'
      }, {
        name: 'Woman Heart Woman',
        unified: '1F469-200D-2764-FE0F-200D-1F469',
        sheet: [20, 6],
        shortName: 'woman-heart-woman'
      }, {
        name: 'Family',
        unified: '1F46A',
        sheet: [20, 15],
        shortNames: ['man-woman-boy'],
        shortName: 'family',
        obsoletedBy: '1F468-200D-1F469-200D-1F466'
      }, {
        name: 'Man Woman Boy',
        unified: '1F468-200D-1F469-200D-1F466',
        obsoletes: '1F46A',
        sheet: [15, 33],
        shortNames: ['family'],
        shortName: 'man-woman-boy'
      }, {
        name: 'Man Woman Girl',
        unified: '1F468-200D-1F469-200D-1F467',
        sheet: [15, 35],
        shortName: 'man-woman-girl'
      }, {
        name: 'Man Woman Girl Boy',
        unified: '1F468-200D-1F469-200D-1F467-200D-1F466',
        sheet: [15, 36],
        shortName: 'man-woman-girl-boy'
      }, {
        name: 'Man Woman Boy Boy',
        unified: '1F468-200D-1F469-200D-1F466-200D-1F466',
        sheet: [15, 34],
        shortName: 'man-woman-boy-boy'
      }, {
        name: 'Man Woman Girl Girl',
        unified: '1F468-200D-1F469-200D-1F467-200D-1F467',
        sheet: [15, 37],
        shortName: 'man-woman-girl-girl'
      }, {
        name: 'Man Man Boy',
        unified: '1F468-200D-1F468-200D-1F466',
        sheet: [15, 28],
        shortName: 'man-man-boy'
      }, {
        name: 'Man Man Girl',
        unified: '1F468-200D-1F468-200D-1F467',
        sheet: [15, 30],
        shortName: 'man-man-girl'
      }, {
        name: 'Man Man Girl Boy',
        unified: '1F468-200D-1F468-200D-1F467-200D-1F466',
        sheet: [15, 31],
        shortName: 'man-man-girl-boy'
      }, {
        name: 'Man Man Boy Boy',
        unified: '1F468-200D-1F468-200D-1F466-200D-1F466',
        sheet: [15, 29],
        shortName: 'man-man-boy-boy'
      }, {
        name: 'Man Man Girl Girl',
        unified: '1F468-200D-1F468-200D-1F467-200D-1F467',
        sheet: [15, 32],
        shortName: 'man-man-girl-girl'
      }, {
        name: 'Woman Woman Boy',
        unified: '1F469-200D-1F469-200D-1F466',
        sheet: [18, 18],
        shortName: 'woman-woman-boy'
      }, {
        name: 'Woman Woman Girl',
        unified: '1F469-200D-1F469-200D-1F467',
        sheet: [18, 20],
        shortName: 'woman-woman-girl'
      }, {
        name: 'Woman Woman Girl Boy',
        unified: '1F469-200D-1F469-200D-1F467-200D-1F466',
        sheet: [18, 21],
        shortName: 'woman-woman-girl-boy'
      }, {
        name: 'Woman Woman Boy Boy',
        unified: '1F469-200D-1F469-200D-1F466-200D-1F466',
        sheet: [18, 19],
        shortName: 'woman-woman-boy-boy'
      }, {
        name: 'Woman Woman Girl Girl',
        unified: '1F469-200D-1F469-200D-1F467-200D-1F467',
        sheet: [18, 22],
        shortName: 'woman-woman-girl-girl'
      }, {
        name: 'Man Boy',
        unified: '1F468-200D-1F466',
        sheet: [15, 24],
        shortName: 'man-boy'
      }, {
        name: 'Man Boy Boy',
        unified: '1F468-200D-1F466-200D-1F466',
        sheet: [15, 23],
        shortName: 'man-boy-boy'
      }, {
        name: 'Man Girl',
        unified: '1F468-200D-1F467',
        sheet: [15, 27],
        shortName: 'man-girl'
      }, {
        name: 'Man Girl Boy',
        unified: '1F468-200D-1F467-200D-1F466',
        sheet: [15, 25],
        shortName: 'man-girl-boy'
      }, {
        name: 'Man Girl Girl',
        unified: '1F468-200D-1F467-200D-1F467',
        sheet: [15, 26],
        shortName: 'man-girl-girl'
      }, {
        name: 'Woman Boy',
        unified: '1F469-200D-1F466',
        sheet: [18, 14],
        shortName: 'woman-boy'
      }, {
        name: 'Woman Boy Boy',
        unified: '1F469-200D-1F466-200D-1F466',
        sheet: [18, 13],
        shortName: 'woman-boy-boy'
      }, {
        name: 'Woman Girl',
        unified: '1F469-200D-1F467',
        sheet: [18, 17],
        shortName: 'woman-girl'
      }, {
        name: 'Woman Girl Boy',
        unified: '1F469-200D-1F467-200D-1F466',
        sheet: [18, 15],
        shortName: 'woman-girl-boy'
      }, {
        name: 'Woman Girl Girl',
        unified: '1F469-200D-1F467-200D-1F467',
        sheet: [18, 16],
        shortName: 'woman-girl-girl'
      }, {
        name: 'Speaking Head in Silhouette',
        unified: '1F5E3-FE0F',
        sheet: [30, 25],
        shortName: 'speaking_head_in_silhouette'
      }, {
        name: 'Bust in Silhouette',
        unified: '1F464',
        keywords: ['user', 'person', 'human'],
        sheet: [14, 24],
        shortName: 'bust_in_silhouette'
      }, {
        name: 'Busts in Silhouette',
        unified: '1F465',
        keywords: ['user', 'person', 'human', 'group', 'team'],
        sheet: [14, 25],
        shortName: 'busts_in_silhouette'
      }, {
        name: 'Footprints',
        unified: '1F463',
        keywords: ['feet', 'tracking', 'walking', 'beach'],
        sheet: [14, 23],
        shortName: 'footprints'
      }];
      var _skins = [{
        name: 'Emoji Modifier Fitzpatrick Type-1-2',
        unified: '1F3FB',
        sheet: [11, 23],
        shortName: 'skin-tone-2'
      }, {
        name: 'Emoji Modifier Fitzpatrick Type-3',
        unified: '1F3FC',
        sheet: [11, 24],
        shortName: 'skin-tone-3'
      }, {
        name: 'Emoji Modifier Fitzpatrick Type-4',
        unified: '1F3FD',
        sheet: [11, 25],
        shortName: 'skin-tone-4'
      }, {
        name: 'Emoji Modifier Fitzpatrick Type-5',
        unified: '1F3FE',
        sheet: [11, 26],
        shortName: 'skin-tone-5'
      }, {
        name: 'Emoji Modifier Fitzpatrick Type-6',
        unified: '1F3FF',
        sheet: [11, 27],
        shortName: 'skin-tone-6'
      }];
      var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
      var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

      var _DEFAULT_BACKGROUNDFN = function _DEFAULT_BACKGROUNDFN(set, sheetSize) {
        return "https://unpkg.com/emoji-datasource-".concat(set, "@5.0.1/img/").concat(set, "/sheets-256/").concat(sheetSize, ".png");
      };

      var _EmojiService = /*#__PURE__*/function () {
        function EmojiService() {
          _classCallCheck(this, EmojiService);

          this.uncompressed = false;
          this.names = {};
          this.emojis = [];

          if (!this.uncompressed) {
            this.uncompress(_emojis);
            this.uncompressed = true;
          }
        }

        _createClass(EmojiService, [{
          key: "uncompress",
          value: function uncompress(list) {
            var _this = this;

            this.emojis = list.map(function (emoji) {
              var data = Object.assign({}, emoji);

              if (!data.shortNames) {
                data.shortNames = [];
              }

              data.shortNames.unshift(data.shortName);
              data.id = data.shortName;
              data["native"] = _this.unifiedToNative(data.unified);

              if (!data.skinVariations) {
                data.skinVariations = [];
              }

              if (!data.keywords) {
                data.keywords = [];
              }

              if (!data.emoticons) {
                data.emoticons = [];
              }

              if (!data.hidden) {
                data.hidden = [];
              }

              if (!data.text) {
                data.text = '';
              }

              if (data.obsoletes) {
                // get keywords from emoji that it obsoletes since that is shared
                var f = list.find(function (x) {
                  return x.unified === data.obsoletes;
                });

                if (f) {
                  if (f.keywords) {
                    data.keywords = [].concat(_toConsumableArray(data.keywords), _toConsumableArray(f.keywords), [f.shortName]);
                  } else {
                    data.keywords = [].concat(_toConsumableArray(data.keywords), [f.shortName]);
                  }
                }
              }

              _this.names[data.unified] = data;

              var _iterator = _createForOfIteratorHelper(data.shortNames),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var n = _step.value;
                  _this.names[n] = data;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return data;
            });
          }
        }, {
          key: "getData",
          value: function getData(emoji, skin, set) {
            var emojiData;

            if (typeof emoji === 'string') {
              var matches = emoji.match(COLONS_REGEX);

              if (matches) {
                emoji = matches[1];

                if (matches[2]) {
                  skin = parseInt(matches[2], 10);
                }
              }

              if (this.names.hasOwnProperty(emoji)) {
                emojiData = this.names[emoji];
              } else {
                return null;
              }
            } else if (emoji.id) {
              emojiData = this.names[emoji.id];
            } else if (emoji.unified) {
              emojiData = this.names[emoji.unified.toUpperCase()];
            }

            if (!emojiData) {
              emojiData = emoji;
              emojiData.custom = true;
            }

            var hasSkinVariations = emojiData.skinVariations && emojiData.skinVariations.length;

            if (hasSkinVariations && skin && skin > 1 && set) {
              emojiData = Object.assign({}, emojiData);
              var skinKey = SKINS[skin - 1];
              var variationData = emojiData.skinVariations.find(function (n) {
                return n.unified.includes(skinKey);
              });

              if (!variationData.hidden || !variationData.hidden.includes(set)) {
                emojiData.skinTone = skin;
                emojiData = Object.assign(Object.assign({}, emojiData), variationData);
              }

              emojiData["native"] = this.unifiedToNative(emojiData.unified);
            }

            emojiData.set = set || '';
            return emojiData;
          }
        }, {
          key: "unifiedToNative",
          value: function unifiedToNative(unified) {
            var codePoints = unified.split('-').map(function (u) {
              return parseInt("0x".concat(u), 16);
            });
            return String.fromCodePoint.apply(String, _toConsumableArray(codePoints));
          }
        }, {
          key: "emojiSpriteStyles",
          value: function emojiSpriteStyles(sheet) {
            var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'apple';
            var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 24;
            var sheetSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 64;
            var sheetRows = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 57;
            var backgroundImageFn = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _DEFAULT_BACKGROUNDFN;
            var sheetColumns = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 57;
            return {
              width: "".concat(size, "px"),
              height: "".concat(size, "px"),
              display: 'inline-block',
              'background-image': "url(".concat(backgroundImageFn(set, sheetSize), ")"),
              'background-size': "".concat(100 * sheetColumns, "% ").concat(100 * sheetRows, "%"),
              'background-position': this.getSpritePosition(sheet, sheetColumns)
            };
          }
        }, {
          key: "getSpritePosition",
          value: function getSpritePosition(sheet, sheetColumns) {
            var _sheet = _slicedToArray(sheet, 2),
                sheetX = _sheet[0],
                sheetY = _sheet[1];

            var multiply = 100 / (sheetColumns - 1);
            return "".concat(multiply * sheetX, "% ").concat(multiply * sheetY, "%");
          }
        }, {
          key: "sanitize",
          value: function sanitize(emoji) {
            if (emoji === null) {
              return null;
            }

            var id = emoji.id || emoji.shortNames[0];
            var colons = ":".concat(id, ":");

            if (emoji.skinTone) {
              colons += ":skin-tone-".concat(emoji.skinTone, ":");
            }

            emoji.colons = colons;
            return Object.assign({}, emoji);
          }
        }, {
          key: "getSanitizedData",
          value: function getSanitizedData(emoji, skin, set) {
            return this.sanitize(this.getData(emoji, skin, set));
          }
        }]);

        return EmojiService;
      }();

      _EmojiService.ɵfac = function EmojiService_Factory(t) {
        return new (t || _EmojiService)();
      };

      _EmojiService.ɵprov = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function EmojiService_Factory() {
          return new _EmojiService();
        },
        token: _EmojiService,
        providedIn: "root"
      });

      var _EmojiComponent = /*#__PURE__*/function () {
        function EmojiComponent(emojiService) {
          _classCallCheck(this, EmojiComponent);

          this.emojiService = emojiService;
          this.skin = 1;
          this.set = 'apple';
          this.sheetSize = 64;
          /** Renders the native unicode emoji */

          this.isNative = false;
          this.forceSize = false;
          this.tooltip = false;
          this.size = 24;
          this.emoji = '';
          this.hideObsolete = false;
          this.SHEET_COLUMNS = 57;
          this.emojiOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.emojiLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.emojiClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.title = '';
          this.label = '';
          this.custom = false;
          this.isVisible = true; // TODO: replace 4.0.3 w/ dynamic get verison from emoji-datasource in package.json

          this.backgroundImageFn = _DEFAULT_BACKGROUNDFN;
        }

        _createClass(EmojiComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (!this.emoji) {
              return this.isVisible = false;
            }

            var data = this.getData();

            if (!data) {
              return this.isVisible = false;
            } // const children = this.children;


            this.unified = data["native"] || null;

            if (data.custom) {
              this.custom = data.custom;
            }

            if (!data.unified && !data.custom) {
              return this.isVisible = false;
            }

            if (this.tooltip) {
              this.title = data.shortNames[0];
            }

            if (data.obsoletedBy && this.hideObsolete) {
              return this.isVisible = false;
            }

            this.label = [data["native"]].concat(data.shortNames).filter(Boolean).join(', ');

            if (this.isNative && data.unified && data["native"]) {
              // hide older emoji before the split into gendered emoji
              this.style = {
                fontSize: "".concat(this.size, "px")
              };

              if (this.forceSize) {
                this.style.display = 'inline-block';
                this.style.width = "".concat(this.size, "px");
                this.style.height = "".concat(this.size, "px");
                this.style['word-break'] = 'keep-all';
              }
            } else if (data.custom) {
              this.style = {
                width: "".concat(this.size, "px"),
                height: "".concat(this.size, "px"),
                display: 'inline-block'
              };

              if (data.spriteUrl && this.sheetRows && this.sheetColumns) {
                this.style = Object.assign(Object.assign({}, this.style), {
                  backgroundImage: "url(".concat(data.spriteUrl, ")"),
                  backgroundSize: "".concat(100 * this.sheetColumns, "% ").concat(100 * this.sheetRows, "%"),
                  backgroundPosition: this.emojiService.getSpritePosition(data.sheet, this.sheetColumns)
                });
              } else {
                this.style = Object.assign(Object.assign({}, this.style), {
                  backgroundImage: "url(".concat(data.imageUrl, ")"),
                  backgroundSize: 'contain'
                });
              }
            } else {
              if (data.hidden.length && data.hidden.includes(this.set)) {
                if (this.fallback) {
                  this.style = {
                    fontSize: "".concat(this.size, "px")
                  };
                  this.unified = this.fallback(data, this);
                } else {
                  return this.isVisible = false;
                }
              } else {
                this.style = this.emojiService.emojiSpriteStyles(data.sheet, this.set, this.size, this.sheetSize, this.sheetRows, this.backgroundImageFn, this.SHEET_COLUMNS);
              }
            }

            return this.isVisible = true;
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.emojiService.getData(this.emoji, this.skin, this.set);
          }
        }, {
          key: "getSanitizedData",
          value: function getSanitizedData() {
            return this.emojiService.getSanitizedData(this.emoji, this.skin, this.set);
          }
        }, {
          key: "handleClick",
          value: function handleClick($event) {
            var emoji = this.getSanitizedData();
            this.emojiClick.emit({
              emoji: emoji,
              $event: $event
            });
          }
        }, {
          key: "handleOver",
          value: function handleOver($event) {
            var emoji = this.getSanitizedData();
            this.emojiOver.emit({
              emoji: emoji,
              $event: $event
            });
          }
        }, {
          key: "handleLeave",
          value: function handleLeave($event) {
            var emoji = this.getSanitizedData();
            this.emojiLeave.emit({
              emoji: emoji,
              $event: $event
            });
          }
        }]);

        return EmojiComponent;
      }();

      _EmojiComponent.ɵfac = function EmojiComponent_Factory(t) {
        return new (t || _EmojiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_EmojiService));
      };

      _EmojiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _EmojiComponent,
        selectors: [["ngx-emoji"]],
        inputs: {
          skin: "skin",
          set: "set",
          sheetSize: "sheetSize",
          isNative: "isNative",
          forceSize: "forceSize",
          tooltip: "tooltip",
          size: "size",
          emoji: "emoji",
          hideObsolete: "hideObsolete",
          SHEET_COLUMNS: "SHEET_COLUMNS",
          backgroundImageFn: "backgroundImageFn",
          fallback: "fallback",
          sheetRows: "sheetRows",
          sheetColumns: "sheetColumns",
          useButton: "useButton"
        },
        outputs: {
          emojiOver: "emojiOver",
          emojiLeave: "emojiLeave",
          emojiClick: "emojiClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 2,
        consts: [["type", "button", "class", "emoji-mart-emoji", 3, "title", "emoji-mart-emoji-native", "emoji-mart-emoji-custom", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["class", "emoji-mart-emoji", 3, "title", "emoji-mart-emoji-native", "emoji-mart-emoji-custom", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["type", "button", 1, "emoji-mart-emoji", 3, "title", "click", "mouseenter", "mouseleave"], [3, "ngStyle"], [3, "ngIf"], [1, "emoji-mart-emoji", 3, "title", "click", "mouseenter", "mouseleave"]],
        template: function EmojiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmojiComponent_button_0_Template, 4, 8, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmojiComponent_span_1_Template, 4, 8, "span", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.useButton && ctx.isVisible);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.useButton && ctx.isVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        encapsulation: 2,
        changeDetection: 0
      });

      _EmojiComponent.ctorParameters = function () {
        return [{
          type: _EmojiService
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "skin", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "set", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "sheetSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "isNative", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "forceSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "tooltip", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "size", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "emoji", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "fallback", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "hideObsolete", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "SHEET_COLUMNS", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "sheetRows", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "sheetColumns", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "useButton", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _EmojiComponent.prototype, "emojiOver", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _EmojiComponent.prototype, "emojiLeave", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _EmojiComponent.prototype, "emojiClick", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _EmojiComponent.prototype, "backgroundImageFn", void 0);

      var _EmojiModule = function EmojiModule() {
        _classCallCheck(this, EmojiModule);
      };

      _EmojiModule.ɵfac = function EmojiModule_Factory(t) {
        return new (t || _EmojiModule)();
      };

      _EmojiModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _EmojiModule
      });
      _EmojiModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_EmojiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_EmojiComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'ngx-emoji',
            template: "\n    <button\n      *ngIf=\"useButton && isVisible\"\n      type=\"button\"\n      (click)=\"handleClick($event)\"\n      (mouseenter)=\"handleOver($event)\"\n      (mouseleave)=\"handleLeave($event)\"\n      [title]=\"title\"\n      [attr.aria-label]=\"label\"\n      class=\"emoji-mart-emoji\"\n      [class.emoji-mart-emoji-native]=\"isNative\"\n      [class.emoji-mart-emoji-custom]=\"custom\"\n    >\n      <span [ngStyle]=\"style\">\n        <ng-template [ngIf]=\"isNative\">{{ unified }}</ng-template>\n        <ng-content></ng-content>\n      </span>\n    </button>\n\n    <span\n      *ngIf=\"!useButton && isVisible\"\n      (click)=\"handleClick($event)\"\n      (mouseenter)=\"handleOver($event)\"\n      (mouseleave)=\"handleLeave($event)\"\n      [title]=\"title\"\n      [attr.aria-label]=\"label\"\n      class=\"emoji-mart-emoji\"\n      [class.emoji-mart-emoji-native]=\"isNative\"\n      [class.emoji-mart-emoji-custom]=\"custom\"\n    >\n      <span [ngStyle]=\"style\">\n        <ng-template [ngIf]=\"isNative\">{{ unified }}</ng-template>\n        <ng-content></ng-content>\n      </span>\n    </span>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false
          }]
        }], function () {
          return [{
            type: _EmojiService
          }];
        }, {
          skin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          set: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sheetSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          isNative: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          forceSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emoji: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hideObsolete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          SHEET_COLUMNS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          emojiLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          emojiClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          backgroundImageFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          fallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sheetRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sheetColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          useButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_EmojiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
            exports: [_EmojiComponent],
            declarations: [_EmojiComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_EmojiModule, {
          declarations: function declarations() {
            return [_EmojiComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule];
          },
          exports: function exports() {
            return [_EmojiComponent];
          }
        });
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ctrl-ngx-emoji-mart-ngx-emoji.js.map

      /***/

    },

    /***/
    46180: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AnchorsComponent": function AnchorsComponent() {
          return (
            /* binding */
            _AnchorsComponent
          );
        },

        /* harmony export */
        "CategoryComponent": function CategoryComponent() {
          return (
            /* binding */
            _CategoryComponent
          );
        },

        /* harmony export */
        "EmojiFrequentlyService": function EmojiFrequentlyService() {
          return (
            /* binding */
            _EmojiFrequentlyService
          );
        },

        /* harmony export */
        "EmojiSearch": function EmojiSearch() {
          return (
            /* binding */
            _EmojiSearch
          );
        },

        /* harmony export */
        "PickerComponent": function PickerComponent() {
          return (
            /* binding */
            _PickerComponent
          );
        },

        /* harmony export */
        "PickerModule": function PickerModule() {
          return (
            /* binding */
            _PickerModule
          );
        },

        /* harmony export */
        "PreviewComponent": function PreviewComponent() {
          return (
            /* binding */
            _PreviewComponent
          );
        },

        /* harmony export */
        "SearchComponent": function SearchComponent() {
          return (
            /* binding */
            _SearchComponent
          );
        },

        /* harmony export */
        "SkinComponent": function SkinComponent() {
          return (
            /* binding */
            _SkinComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ctrl/ngx-emoji-mart/ngx-emoji */
      62558);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      function AnchorsComponent_ng_template_1_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnchorsComponent_ng_template_1_span_0_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var idx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.handleClick($event, idx_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", category_r1.name === ctx_r3.selected ? ctx_r3.color : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("emoji-mart-anchor-selected", category_r1.name === ctx_r3.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r3.i18n.categories[category_r1.id]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r3.icons[category_r1.id]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r3.color);
        }
      }

      function AnchorsComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AnchorsComponent_ng_template_1_span_0_Template, 5, 8, "span", 2);
        }

        if (rf & 2) {
          var category_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r1.anchor !== false);
        }
      }

      var _c0 = ["container"];
      var _c1 = ["label"];

      function CategoryComponent_ng_template_6_ngx_emoji_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-emoji", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emojiOver", function CategoryComponent_ng_template_6_ngx_emoji_0_Template_ngx_emoji_emojiOver_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.emojiOver.emit($event);
          })("emojiLeave", function CategoryComponent_ng_template_6_ngx_emoji_0_Template_ngx_emoji_emojiLeave_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.emojiLeave.emit($event);
          })("emojiClick", function CategoryComponent_ng_template_6_ngx_emoji_0_Template_ngx_emoji_emojiClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.emojiClick.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var emoji_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("emoji", emoji_r5)("size", ctx_r4.emojiSize)("skin", ctx_r4.emojiSkin)("isNative", ctx_r4.emojiIsNative)("set", ctx_r4.emojiSet)("sheetSize", ctx_r4.emojiSheetSize)("forceSize", ctx_r4.emojiForceSize)("tooltip", ctx_r4.emojiTooltip)("backgroundImageFn", ctx_r4.emojiBackgroundImageFn)("hideObsolete", ctx_r4.hideObsolete);
        }
      }

      function CategoryComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoryComponent_ng_template_6_ngx_emoji_0_Template, 1, 10, "ngx-emoji", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.emojis)("ngForTrackBy", ctx_r2.trackById);
        }
      }

      function CategoryComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-emoji", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("emoji", ctx_r3.notFoundEmoji)("skin", ctx_r3.emojiSkin)("isNative", ctx_r3.emojiIsNative)("set", ctx_r3.emojiSet)("sheetSize", ctx_r3.emojiSheetSize)("forceSize", ctx_r3.emojiForceSize)("tooltip", ctx_r3.emojiTooltip)("backgroundImageFn", ctx_r3.emojiBackgroundImageFn)("useButton", ctx_r3.emojiUseButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.i18n.notfound, " ");
        }
      }

      var _c2 = ["scrollRef"];
      var _c3 = ["previewRef"];
      var _c4 = ["searchRef"];
      var _c5 = ["categoryRef"];

      function PickerComponent_emoji_search_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "emoji-search", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchResults", function PickerComponent_emoji_search_3_Template_emoji_search_searchResults_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.handleSearch($event);
          })("enterKey", function PickerComponent_emoji_search_3_Template_emoji_search_enterKey_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.handleEnterKey($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("i18n", ctx_r0.i18n)("include", ctx_r0.include)("exclude", ctx_r0.exclude)("custom", ctx_r0.custom)("autoFocus", ctx_r0.autoFocus)("icons", ctx_r0.searchIcons)("emojisToShowFilter", ctx_r0.emojisToShowFilter);
        }
      }

      function PickerComponent_emoji_category_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "emoji-category", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emojiOver", function PickerComponent_emoji_category_6_Template_emoji_category_emojiOver_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.handleEmojiOver($event);
          })("emojiLeave", function PickerComponent_emoji_category_6_Template_emoji_category_emojiLeave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.handleEmojiLeave();
          })("emojiClick", function PickerComponent_emoji_category_6_Template_emoji_category_emojiClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.handleEmojiClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r8 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", category_r8.id)("name", category_r8.name)("emojis", category_r8.emojis)("perLine", ctx_r2.perLine)("totalFrequentLines", ctx_r2.totalFrequentLines)("hasStickyPosition", ctx_r2.isNative)("i18n", ctx_r2.i18n)("hideObsolete", ctx_r2.hideObsolete)("notFoundEmoji", ctx_r2.notFoundEmoji)("custom", category_r8.id == ctx_r2.RECENT_CATEGORY.id ? ctx_r2.CUSTOM_CATEGORY.emojis : undefined)("recent", category_r8.id == ctx_r2.RECENT_CATEGORY.id ? ctx_r2.recent : undefined)("emojiIsNative", ctx_r2.isNative)("emojiSkin", ctx_r2.skin)("emojiSize", ctx_r2.emojiSize)("emojiSet", ctx_r2.set)("emojiSheetSize", ctx_r2.sheetSize)("emojiForceSize", ctx_r2.isNative)("emojiTooltip", ctx_r2.emojiTooltip)("emojiBackgroundImageFn", ctx_r2.backgroundImageFn)("emojiUseButton", false);
        }
      }

      function PickerComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "emoji-preview", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("skinChange", function PickerComponent_div_7_Template_emoji_preview_skinChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.handleSkinChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r3.title)("emoji", ctx_r3.previewEmoji)("idleEmoji", ctx_r3.emoji)("emojiIsNative", ctx_r3.isNative)("emojiSize", 38)("emojiSkin", ctx_r3.skin)("emojiSet", ctx_r3.set)("i18n", ctx_r3.i18n)("emojiSheetSize", ctx_r3.sheetSize)("emojiBackgroundImageFn", ctx_r3.backgroundImageFn);
        }
      }

      function PreviewComponent_div_0_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var short_name_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :", short_name_r4, ": ");
        }
      }

      function PreviewComponent_div_0_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var emoticon_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", emoticon_r5, " ");
        }
      }

      function PreviewComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-emoji", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PreviewComponent_div_0_span_7_Template, 2, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PreviewComponent_div_0_span_9_Template, 2, 1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("emoji", ctx_r0.emoji)("size", 38)("isNative", ctx_r0.emojiIsNative)("skin", ctx_r0.emojiSkin)("size", ctx_r0.emojiSize)("set", ctx_r0.emojiSet)("sheetSize", ctx_r0.emojiSheetSize)("backgroundImageFn", ctx_r0.emojiBackgroundImageFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.emojiData.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.emojiData.shortNames);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listedEmoticons);
        }
      }

      function PreviewComponent_div_1_ngx_emoji_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-emoji", 15);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isNative", ctx_r6.emojiIsNative)("skin", ctx_r6.emojiSkin)("set", ctx_r6.emojiSet)("emoji", ctx_r6.idleEmoji)("backgroundImageFn", ctx_r6.emojiBackgroundImageFn)("size", 38);
        }
      }

      function PreviewComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PreviewComponent_div_1_ngx_emoji_2_Template, 1, 6, "ngx-emoji", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "emoji-skins", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeSkin", function PreviewComponent_div_1_Template_emoji_skins_changeSkin_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.skinChange.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.idleEmoji && ctx_r1.idleEmoji.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skin", ctx_r1.emojiSkin)("i18n", ctx_r1.i18n);
        }
      }

      var _c6 = ["inputRef"];

      function SkinComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkinComponent_span_1_Template_span_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var skinTone_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.handleClick(skinTone_r1);
          })("keyup.enter", function SkinComponent_span_1_Template_span_keyup_enter_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var skinTone_r1 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.handleClick(skinTone_r1);
          })("keyup.space", function SkinComponent_span_1_Template_span_keyup_space_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var skinTone_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.handleClick(skinTone_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var skinTone_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", skinTone_r1 === ctx_r0.skin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("emoji-mart-skin emoji-mart-skin-tone-", skinTone_r1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx_r0.tabIndex(skinTone_r1))("title", ctx_r0.i18n.skintones[skinTone_r1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !ctx_r0.isVisible(skinTone_r1))("aria-pressed", ctx_r0.pressed(skinTone_r1))("aria-haspopup", !!ctx_r0.isSelected(skinTone_r1))("aria-expanded", ctx_r0.expanded(skinTone_r1))("aria-label", ctx_r0.i18n.skintones[skinTone_r1]);
        }
      }

      var _AnchorsComponent = /*#__PURE__*/function () {
        function AnchorsComponent() {
          _classCallCheck(this, AnchorsComponent);

          this.categories = [];
          this.icons = {};
          this.anchorClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(AnchorsComponent, [{
          key: "trackByFn",
          value: function trackByFn(idx, cat) {
            return cat.id;
          }
        }, {
          key: "handleClick",
          value: function handleClick($event, index) {
            this.anchorClick.emit({
              category: this.categories[index],
              index: index
            });
          }
        }]);

        return AnchorsComponent;
      }();

      _AnchorsComponent.ɵfac = function AnchorsComponent_Factory(t) {
        return new (t || _AnchorsComponent)();
      };

      _AnchorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AnchorsComponent,
        selectors: [["emoji-mart-anchors"]],
        inputs: {
          categories: "categories",
          icons: "icons",
          color: "color",
          selected: "selected",
          i18n: "i18n"
        },
        outputs: {
          anchorClick: "anchorClick"
        },
        decls: 2,
        vars: 2,
        consts: [[1, "emoji-mart-anchors"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["class", "emoji-mart-anchor", 3, "emoji-mart-anchor-selected", "color", "click", 4, "ngIf"], [1, "emoji-mart-anchor", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], [1, "emoji-mart-anchor-bar"]],
        template: function AnchorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnchorsComponent_ng_template_1_Template, 1, 1, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories)("ngForTrackBy", ctx.trackByFn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        encapsulation: 2,
        changeDetection: 0
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _AnchorsComponent.prototype, "categories", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _AnchorsComponent.prototype, "color", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _AnchorsComponent.prototype, "selected", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _AnchorsComponent.prototype, "i18n", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _AnchorsComponent.prototype, "icons", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _AnchorsComponent.prototype, "anchorClick", void 0);

      var _EmojiFrequentlyService = /*#__PURE__*/function () {
        function EmojiFrequentlyService() {
          _classCallCheck(this, EmojiFrequentlyService);

          this.NAMESPACE = 'emoji-mart';
          this.frequently = null;
          this.defaults = {};
          this.initialized = false;
          this.DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];
        }

        _createClass(EmojiFrequentlyService, [{
          key: "init",
          value: function init() {
            this.frequently = JSON.parse(localStorage.getItem("".concat(this.NAMESPACE, ".frequently")) || 'null');
            this.initialized = true;
          }
        }, {
          key: "add",
          value: function add(emoji) {
            if (!this.initialized) {
              this.init();
            }

            if (!this.frequently) {
              this.frequently = this.defaults;
            }

            if (!this.frequently[emoji.id]) {
              this.frequently[emoji.id] = 0;
            }

            this.frequently[emoji.id] += 1;
            localStorage.setItem("".concat(this.NAMESPACE, ".last"), emoji.id);
            localStorage.setItem("".concat(this.NAMESPACE, ".frequently"), JSON.stringify(this.frequently));
          }
        }, {
          key: "get",
          value: function get(perLine, totalLines) {
            var _this2 = this;

            if (!this.initialized) {
              this.init();
            }

            if (this.frequently === null) {
              this.defaults = {};
              var result = [];

              for (var i = 0; i < perLine; i++) {
                this.defaults[this.DEFAULTS[i]] = perLine - i;
                result.push(this.DEFAULTS[i]);
              }

              return result;
            }

            var quantity = perLine * totalLines;
            var frequentlyKeys = Object.keys(this.frequently);
            var sorted = frequentlyKeys.sort(function (a, b) {
              return _this2.frequently[a] - _this2.frequently[b];
            }).reverse();
            var sliced = sorted.slice(0, quantity);
            var last = localStorage.getItem("".concat(this.NAMESPACE, ".last"));

            if (last && !sliced.includes(last)) {
              sliced.pop();
              sliced.push(last);
            }

            return sliced;
          }
        }]);

        return EmojiFrequentlyService;
      }();

      _EmojiFrequentlyService.ɵfac = function EmojiFrequentlyService_Factory(t) {
        return new (t || _EmojiFrequentlyService)();
      };

      _EmojiFrequentlyService.ɵprov = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function EmojiFrequentlyService_Factory() {
          return new _EmojiFrequentlyService();
        },
        token: _EmojiFrequentlyService,
        providedIn: "root"
      });

      var _CategoryComponent = /*#__PURE__*/function () {
        function CategoryComponent(ref, emojiService, frequently) {
          _classCallCheck(this, CategoryComponent);

          this.ref = ref;
          this.emojiService = emojiService;
          this.frequently = frequently;
          this.hasStickyPosition = true;
          this.name = '';
          this.perLine = 9;
          this.totalFrequentLines = 4;
          this.recent = [];
          this.custom = [];
          this.hideObsolete = true;
          this.emojiOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.emojiLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.emojiClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.containerStyles = {};
          this.labelStyles = {};
          this.labelSpanStyles = {};
          this.margin = 0;
          this.minMargin = 0;
          this.maxMargin = 0;
          this.top = 0;
        }

        _createClass(CategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.emojis = this.getEmojis();

            if (!this.emojis) {
              this.containerStyles = {
                display: 'none'
              };
            }

            if (!this.hasStickyPosition) {
              this.labelStyles = {
                height: 28
              }; // this.labelSpanStyles = { position: 'absolute' };
            }
          }
        }, {
          key: "memoizeSize",
          value: function memoizeSize() {
            var parent = this.container.nativeElement.parentNode.parentNode;

            var _this$container$nativ = this.container.nativeElement.getBoundingClientRect(),
                top = _this$container$nativ.top,
                height = _this$container$nativ.height;

            var parentTop = parent.getBoundingClientRect().top;
            var labelHeight = this.label.nativeElement.getBoundingClientRect().height;
            this.top = top - parentTop + parent.scrollTop;

            if (height === 0) {
              this.maxMargin = 0;
            } else {
              this.maxMargin = height - labelHeight;
            }
          }
        }, {
          key: "handleScroll",
          value: function handleScroll(scrollTop) {
            var margin = scrollTop - this.top;
            margin = margin < this.minMargin ? this.minMargin : margin;
            margin = margin > this.maxMargin ? this.maxMargin : margin;

            if (margin === this.margin) {
              return false;
            }

            if (!this.hasStickyPosition) {
              this.label.nativeElement.style.top = "".concat(margin, "px");
            }

            this.margin = margin;
            return true;
          }
        }, {
          key: "getEmojis",
          value: function getEmojis() {
            var _this3 = this;

            if (this.name === 'Recent') {
              var frequentlyUsed = this.recent || this.frequently.get(this.perLine, this.totalFrequentLines);

              if (!frequentlyUsed || !frequentlyUsed.length) {
                frequentlyUsed = this.frequently.get(this.perLine, this.totalFrequentLines);
              }

              if (frequentlyUsed.length) {
                this.emojis = frequentlyUsed.map(function (id) {
                  var emoji = _this3.custom.filter(function (e) {
                    return e.id === id;
                  })[0];

                  if (emoji) {
                    return emoji;
                  }

                  return id;
                }).filter(function (id) {
                  return !!_this3.emojiService.getData(id);
                });
              }

              if ((!this.emojis || this.emojis.length === 0) && frequentlyUsed.length > 0) {
                return null;
              }
            }

            if (this.emojis) {
              this.emojis = this.emojis.slice(0);
            }

            return this.emojis;
          }
        }, {
          key: "updateDisplay",
          value: function updateDisplay(display) {
            this.containerStyles.display = display;
            this.getEmojis();
            this.ref.detectChanges();
          }
        }, {
          key: "trackById",
          value: function trackById(index, item) {
            return item;
          }
        }]);

        return CategoryComponent;
      }();

      _CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
        return new (t || _CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_EmojiFrequentlyService));
      };

      _CategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CategoryComponent,
        selectors: [["emoji-category"]],
        viewQuery: function CategoryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.label = _t.first);
          }
        },
        inputs: {
          hasStickyPosition: "hasStickyPosition",
          name: "name",
          perLine: "perLine",
          totalFrequentLines: "totalFrequentLines",
          recent: "recent",
          custom: "custom",
          hideObsolete: "hideObsolete",
          emojis: "emojis",
          i18n: "i18n",
          id: "id",
          notFoundEmoji: "notFoundEmoji",
          emojiIsNative: "emojiIsNative",
          emojiSkin: "emojiSkin",
          emojiSize: "emojiSize",
          emojiSet: "emojiSet",
          emojiSheetSize: "emojiSheetSize",
          emojiForceSize: "emojiForceSize",
          emojiTooltip: "emojiTooltip",
          emojiBackgroundImageFn: "emojiBackgroundImageFn",
          emojiUseButton: "emojiUseButton"
        },
        outputs: {
          emojiOver: "emojiOver",
          emojiLeave: "emojiLeave",
          emojiClick: "emojiClick"
        },
        decls: 8,
        vars: 10,
        consts: [[1, "emoji-mart-category", 3, "ngStyle"], ["container", ""], [1, "emoji-mart-category-label", 3, "ngStyle"], ["aria-hidden", "true", 3, "ngStyle"], ["label", ""], [3, "ngIf"], [4, "ngIf"], [3, "emoji", "size", "skin", "isNative", "set", "sheetSize", "forceSize", "tooltip", "backgroundImageFn", "hideObsolete", "emojiOver", "emojiLeave", "emojiClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "emoji", "size", "skin", "isNative", "set", "sheetSize", "forceSize", "tooltip", "backgroundImageFn", "hideObsolete", "emojiOver", "emojiLeave", "emojiClick"], ["size", "38", 3, "emoji", "skin", "isNative", "set", "sheetSize", "forceSize", "tooltip", "backgroundImageFn", "useButton"], [1, "emoji-mart-no-results-label"]],
        template: function CategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoryComponent_ng_template_6_Template, 1, 2, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CategoryComponent_div_7_Template, 5, 10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("emoji-mart-no-results", ctx.emojis && !ctx.emojis.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.containerStyles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.i18n.categories[ctx.id]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.labelStyles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-name", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.labelSpanStyles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.i18n.categories[ctx.id], " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emojis);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emojis && !ctx.emojis.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiComponent],
        encapsulation: 2,
        changeDetection: 0
      });

      _CategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiService
        }, {
          type: _EmojiFrequentlyService
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "emojis", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "hasStickyPosition", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "name", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "perLine", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "totalFrequentLines", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "recent", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "custom", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "i18n", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "id", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "hideObsolete", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "notFoundEmoji", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "emojiIsNative", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "emojiSkin", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "emojiSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "emojiSet", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "emojiSheetSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "emojiForceSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "emojiTooltip", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "emojiBackgroundImageFn", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _CategoryComponent.prototype, "emojiUseButton", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _CategoryComponent.prototype, "emojiOver", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _CategoryComponent.prototype, "emojiLeave", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _CategoryComponent.prototype, "emojiClick", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('container', {
        "static": true
      })], _CategoryComponent.prototype, "container", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('label', {
        "static": true
      })], _CategoryComponent.prototype, "label", void 0);

      function uniq(arr) {
        return arr.reduce(function (acc, item) {
          if (!acc.includes(item)) {
            acc.push(item);
          }

          return acc;
        }, []);
      }

      function intersect(a, b) {
        var uniqA = uniq(a);
        var uniqB = uniq(b);
        return uniqA.filter(function (item) {
          return uniqB.indexOf(item) >= 0;
        });
      } // https://github.com/sonicdoe/measure-scrollbar


      function measureScrollbar() {
        if (typeof document === 'undefined') {
          return 0;
        }

        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.overflow = 'scroll';
        div.style.position = 'absolute';
        div.style.top = '-9999px';
        document.body.appendChild(div);
        var scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
        return scrollbarWidth;
      }

      var _EmojiSearch = /*#__PURE__*/function () {
        function EmojiSearch(emojiService) {
          var _this4 = this;

          _classCallCheck(this, EmojiSearch);

          this.emojiService = emojiService;
          this.originalPool = {};
          this.index = {};
          this.emojisList = {};
          this.emoticonsList = {};
          this.emojiSearch = {};

          var _iterator2 = _createForOfIteratorHelper(this.emojiService.emojis),
              _step2;

          try {
            var _loop = function _loop() {
              var emojiData = _step2.value;
              var shortNames = emojiData.shortNames,
                  emoticons = emojiData.emoticons;
              var id = shortNames[0];
              emoticons.forEach(function (emoticon) {
                if (_this4.emoticonsList[emoticon]) {
                  return;
                }

                _this4.emoticonsList[emoticon] = id;
              });
              _this4.emojisList[id] = _this4.emojiService.getSanitizedData(id);
              _this4.originalPool[id] = emojiData;
            };

            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        _createClass(EmojiSearch, [{
          key: "addCustomToPool",
          value: function addCustomToPool(custom, pool) {
            var _this5 = this;

            custom.forEach(function (emoji) {
              var emojiId = emoji.id || emoji.shortNames[0];

              if (emojiId && !pool[emojiId]) {
                pool[emojiId] = _this5.emojiService.getData(emoji);
                _this5.emojisList[emojiId] = _this5.emojiService.getSanitizedData(emoji);
              }
            });
          }
        }, {
          key: "search",
          value: function search(value, emojisToShowFilter) {
            var _this6 = this;

            var maxResults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 75;
            var include = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            var exclude = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
            var custom = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
            this.addCustomToPool(custom, this.originalPool);
            var results;
            var pool = this.originalPool;

            if (value.length) {
              if (value === '-' || value === '-1') {
                return [this.emojisList['-1']];
              }

              if (value === '+' || value === '+1') {
                return [this.emojisList['+1']];
              }

              var values = value.toLowerCase().split(/[\s|,|\-|_]+/);
              var allResults = [];

              if (values.length > 2) {
                values = [values[0], values[1]];
              }

              if (include.length || exclude.length) {
                pool = {};

                _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.categories.forEach(function (category) {
                  var isIncluded = include && include.length ? include.indexOf(category.id) > -1 : true;
                  var isExcluded = exclude && exclude.length ? exclude.indexOf(category.id) > -1 : false;

                  if (!isIncluded || isExcluded) {
                    return;
                  }

                  category.emojis.forEach(function (emojiId) {
                    // Need to make sure that pool gets keyed
                    // with the correct id, which is why we call emojiService.getData below
                    var emoji = _this6.emojiService.getData(emojiId);

                    pool[emoji.id] = emoji;
                  });
                });

                if (custom.length) {
                  var customIsIncluded = include && include.length ? include.indexOf('custom') > -1 : true;
                  var customIsExcluded = exclude && exclude.length ? exclude.indexOf('custom') > -1 : false;

                  if (customIsIncluded && !customIsExcluded) {
                    this.addCustomToPool(custom, pool);
                  }
                }
              }

              allResults = values.map(function (v) {
                var aPool = pool;
                var aIndex = _this6.index;
                var length = 0; // tslint:disable-next-line: prefer-for-of

                for (var charIndex = 0; charIndex < v.length; charIndex++) {
                  var _char = v[charIndex];
                  length++;

                  if (!aIndex[_char]) {
                    aIndex[_char] = {};
                  }

                  aIndex = aIndex[_char];

                  if (!aIndex.results) {
                    (function () {
                      var scores = {};
                      aIndex.results = [];
                      aIndex.pool = {};

                      for (var _i2 = 0, _Object$keys = Object.keys(aPool); _i2 < _Object$keys.length; _i2++) {
                        var _id = _Object$keys[_i2];
                        var emoji = aPool[_id];

                        if (!_this6.emojiSearch[_id]) {
                          _this6.emojiSearch[_id] = _this6.buildSearch(emoji.short_names, emoji.name, emoji.id, emoji.keywords, emoji.emoticons);
                        }

                        var query = _this6.emojiSearch[_id];
                        var sub = v.substr(0, length);
                        var subIndex = query.indexOf(sub);

                        if (subIndex !== -1) {
                          var score = subIndex + 1;

                          if (sub === _id) {
                            score = 0;
                          }

                          aIndex.results.push(_this6.emojisList[_id]);
                          aIndex.pool[_id] = emoji;
                          scores[_id] = score;
                        }
                      }

                      aIndex.results.sort(function (a, b) {
                        var aScore = scores[a.id];
                        var bScore = scores[b.id];
                        return aScore - bScore;
                      });
                    })();
                  }

                  aPool = aIndex.pool;
                }

                return aIndex.results;
              }).filter(function (a) {
                return a;
              });

              if (allResults.length > 1) {
                results = intersect.apply(null, allResults);
              } else if (allResults.length) {
                results = allResults[0];
              } else {
                results = [];
              }
            }

            if (results) {
              if (emojisToShowFilter) {
                results = results.filter(function (result) {
                  if (result && result.id) {
                    return emojisToShowFilter(_this6.emojiService.names[result.id]);
                  }

                  return false;
                });
              }

              if (results && results.length > maxResults) {
                results = results.slice(0, maxResults);
              }
            }

            return results || null;
          }
        }, {
          key: "buildSearch",
          value: function buildSearch(shortNames, name, id, keywords, emoticons) {
            var search = [];

            var addToSearch = function addToSearch(strings, split) {
              if (!strings) {
                return;
              }

              (Array.isArray(strings) ? strings : [strings]).forEach(function (str) {
                (split ? str.split(/[-|_|\s]+/) : [str]).forEach(function (s) {
                  s = s.toLowerCase();

                  if (!search.includes(s)) {
                    search.push(s);
                  }
                });
              });
            };

            addToSearch(shortNames, true);
            addToSearch(name, true);
            addToSearch(id, true);
            addToSearch(keywords, true);
            addToSearch(emoticons, false);
            return search.join(',');
          }
        }]);

        return EmojiSearch;
      }();

      _EmojiSearch.ɵfac = function EmojiSearch_Factory(t) {
        return new (t || _EmojiSearch)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiService));
      };

      _EmojiSearch.ctorParameters = function () {
        return [{
          type: _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiService
        }];
      };

      _EmojiSearch.ɵprov = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function EmojiSearch_Factory() {
          return new _EmojiSearch((0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiService));
        },
        token: _EmojiSearch,
        providedIn: "root"
      });
      /* tslint:disable max-line-length */

      var categories = {
        activity: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m10 11h-5c.3-2.5 1.3-4.8 2-6.1a10 10 0 0 1 3 6.1m-9 0V2a10 10 0 0 1 4.4 1.6A18 18 0 0 0 15 11h-2zm-2 0H9a18 18 0 0 0-2.4-7.4A10 10 0 0 1 11 2.1V11zm0 2v9a10 10 0 0 1-4.4-1.6A18 18 0 0 0 9 13h2zm4 0a18 18 0 0 0 2.4 7.4 10 10 0 0 1-4.4 1.5V13h2zM5 4.9c.7 1.3 1.7 3.6 2 6.1H2a10 10 0 0 1 3-6.1M2 13h5c-.3 2.5-1.3 4.8-2 6.1A10 10 0 0 1 2 13m17 6.1c-.7-1.3-1.7-3.6-2-6.1h5a10 10 0 0 1-3 6.1",
        custom: "M10 1h3v21h-3zm10.186 4l1.5 2.598L3.5 18.098 2 15.5zM2 7.598L3.5 5l18.186 10.5-1.5 2.598z",
        flags: "M0 0l6 24h2L2 0zm21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.6 3h7.8l2 8H8.6l-2-8zm8.8 10l-2.9 1.9-.4-1.9h3.3zm3.6 0l-1.5-6h2l2 8H16l3-2z",
        foods: "M17 5c-1.8 0-2.9.4-3.7 1 .5-1.3 1.8-3 4.7-3a1 1 0 0 0 0-2c-3 0-4.6 1.3-5.5 2.5l-.2.2c-.6-1.9-1.5-3.7-3-3.7C8.5 0 7.7.3 7 1c-2 1.5-1.7 2.9-.5 4C3.6 5.2 0 7.4 0 13c0 4.6 5 11 9 11 2 0 2.4-.5 3-1 .6.5 1 1 3 1 4 0 9-6.4 9-11 0-6-4-8-7-8M8.2 2.5c.7-.5 1-.5 1-.5.4.2 1 1.4 1.4 3-1.6-.6-2.8-1.3-3-1.8l.6-.7M15 22c-1 0-1.2-.1-1.6-.4l-.1-.2a2 2 0 0 0-2.6 0l-.1.2c-.4.3-.5.4-1.6.4-2.8 0-7-5.4-7-9 0-6 4.5-6 5-6 2 0 2.5.4 3.4 1.2l.3.3a2 2 0 0 0 2.6 0l.3-.3c1-.8 1.5-1.2 3.4-1.2.5 0 5 .1 5 6 0 3.6-4.2 9-7 9",
        nature: "M15.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m10.43-8h-.02c-.97 0-2.14.79-3.02 1.5A13.88 13.88 0 0 0 12 .99c-1.28 0-2.62.13-3.87.51C7.24.8 6.07 0 5.09 0h-.02C3.35 0 .07 2.67 0 7.03c-.04 2.47.28 4.23 1.04 5 .26.27.88.69 1.3.9.19 3.17.92 5.23 2.53 6.37.9.64 2.19.95 3.2 1.1-.03.2-.07.4-.07.6 0 1.77 2.35 3 4 3s4-1.23 4-3c0-.2-.04-.4-.07-.59 2.57-.38 5.43-1.87 5.92-7.58.4-.22.89-.57 1.1-.8.77-.76 1.09-2.52 1.05-5C23.93 2.67 20.65 0 18.93 0M3.23 9.13c-.24.29-.84 1.16-.9 1.24A9.67 9.67 0 0 1 2 7.08c.05-3.28 2.48-4.97 3.1-5.03.25.02.72.27 1.26.65A7.95 7.95 0 0 0 4 7.82c-.14.55-.4.86-.79 1.31M12 22c-.9 0-1.95-.7-2-1 0-.65.47-1.24 1-1.6v.6a1 1 0 1 0 2 0v-.6c.52.36 1 .95 1 1.6-.05.3-1.1 1-2 1m3-3.48v.02a4.75 4.75 0 0 0-1.26-1.02c1.09-.52 2.24-1.33 2.24-2.22 0-1.84-1.78-2.2-3.98-2.2s-3.98.36-3.98 2.2c0 .89 1.15 1.7 2.24 2.22A4.8 4.8 0 0 0 9 18.54v-.03a6.1 6.1 0 0 1-2.97-.84c-1.3-.92-1.84-3.04-1.86-6.48l.03-.04c.5-.82 1.49-1.45 1.8-3.1C6 6 7.36 4.42 8.36 3.53c1.01-.35 2.2-.53 3.59-.53 1.45 0 2.68.2 3.73.57 1 .9 2.32 2.46 2.32 4.48.31 1.65 1.3 2.27 1.8 3.1l.1.18c-.06 5.97-1.95 7.01-4.9 7.19m6.63-8.2l-.11-.2a7.59 7.59 0 0 0-.74-.98 3.02 3.02 0 0 1-.79-1.32 7.93 7.93 0 0 0-2.35-5.12c.53-.38 1-.63 1.26-.65.64.07 3.05 1.77 3.1 5.03.02 1.81-.35 3.22-.37 3.24",
        objects: "M12 0a9 9 0 0 0-5 16.5V21s2 3 5 3 5-3 5-3v-4.5A9 9 0 0 0 12 0zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM9 17.5a9 9 0 0 0 6 0v.8a7 7 0 0 1-3 .7 7 7 0 0 1-3-.7v-.8zm.2 3a8.9 8.9 0 0 0 2.8.5c1 0 1.9-.2 2.8-.5-.6.7-1.6 1.5-2.8 1.5-1.1 0-2.1-.8-2.8-1.5zm5.5-8.1c-.8 0-1.1-.8-1.5-1.8-.5-1-.7-1.5-1.2-1.5s-.8.5-1.3 1.5c-.4 1-.8 1.8-1.6 1.8h-.3c-.5-.2-.8-.7-1.3-1.8l-.2-1A3 3 0 0 0 7 9a1 1 0 0 1 0-2c1.7 0 2 1.4 2.2 2.1.5-1 1.3-2 2.8-2 1.5 0 2.3 1.1 2.7 2.1.2-.8.6-2.2 2.3-2.2a1 1 0 1 1 0 2c-.2 0-.3.5-.3.7a6.5 6.5 0 0 1-.3 1c-.5 1-.8 1.7-1.7 1.7",
        people: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20M8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-.8 8c-.7 1.2-1.8 2-3.3 2-1.5 0-2.7-.8-3.4-2H15m3-2H6a6 6 0 1 0 12 0",
        places: "M6.5 12a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m11-3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m5-5.5l-1-.4-.1-.1h.6c.6 0 1-.4 1-1 0-1-.9-2-2-2h-.6l-.8-1.7A3 3 0 0 0 16.8 2H7.2a3 3 0 0 0-2.8 2.3L3.6 6H3a2 2 0 0 0-2 2c0 .6.4 1 1 1h.6v.1l-1 .4a2 2 0 0 0-1.4 2l.7 7.6a1 1 0 0 0 1 .9H3v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h6v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h1.1a1 1 0 0 0 1-.9l.7-7.5a2 2 0 0 0-1.3-2.1M6.3 4.9c.1-.5.5-.9 1-.9h9.5c.4 0 .8.4 1 .9L19.2 9H4.7l1.6-4.1zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.2-3H2.8l-.7-6.6.9-.4h18l.9.4-.7 6.6z",
        recent: "M13 4h-2v7H9v2h2v2h2v-2h4v-2h-4zm-1-4a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20",
        symbols: "M0 0h11v2H0zm4 11h3V6h4V4H0v2h4zm11.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-2.99a.5.5 0 0 1 0 .99c-.28 0-.5-.22-.5-.5s.22-.49.5-.49m6 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 2.99a.5.5 0 0 1-.5-.5.5.5 0 0 1 1 .01.5.5 0 0 1-.5.49m.5-9l-9 9 1.51 1.5 9-9zm-5-2c2.2 0 4-1.12 4-2.5V2s.98-.16 1.5.95C23 4.05 23 6 23 6s1-1.12 1-3.13C24-.02 21 0 21 0h-2v6.35A5.85 5.85 0 0 0 17 6c-2.2 0-4 1.12-4 2.5s1.8 2.5 4 2.5m-6.7 9.48L8.82 18.9a47.54 47.54 0 0 1-1.44 1.13c-.3-.3-.99-1.02-2.04-2.19.9-.83 1.47-1.46 1.72-1.89s.38-.87.38-1.33c0-.6-.27-1.18-.82-1.76-.54-.58-1.33-.87-2.35-.87-1 0-1.79.29-2.34.87-.56.6-.83 1.18-.83 1.79 0 .81.42 1.75 1.25 2.8a6.57 6.57 0 0 0-1.8 1.79 3.46 3.46 0 0 0-.51 1.83c0 .86.3 1.56.92 2.1a3.5 3.5 0 0 0 2.42.83c1.17 0 2.44-.38 3.81-1.14L8.23 24h2.82l-2.09-2.38 1.34-1.14zM3.56 14.1a1.02 1.02 0 0 1 .73-.28c.31 0 .56.08.75.25a.85.85 0 0 1 .28.66c0 .52-.42 1.11-1.26 1.78-.53-.65-.8-1.23-.8-1.74a.9.9 0 0 1 .3-.67m.18 7.9c-.43 0-.78-.12-1.06-.35-.28-.23-.41-.49-.41-.76 0-.6.5-1.3 1.52-2.09a31.23 31.23 0 0 0 2.25 2.44c-.92.5-1.69.76-2.3.76"
      };
      var search = {
        search: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z",
        "delete": "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
      };
      var I18N = {
        search: 'Search',
        emojilist: 'List of emoji',
        notfound: 'No Emoji Found',
        clear: 'Clear',
        categories: {
          search: 'Search Results',
          recent: 'Frequently Used',
          people: 'Smileys & People',
          nature: 'Animals & Nature',
          foods: 'Food & Drink',
          activity: 'Activity',
          places: 'Travel & Places',
          objects: 'Objects',
          symbols: 'Symbols',
          flags: 'Flags',
          custom: 'Custom'
        },
        skintones: {
          1: 'Default Skin Tone',
          2: 'Light Skin Tone',
          3: 'Medium-Light Skin Tone',
          4: 'Medium Skin Tone',
          5: 'Medium-Dark Skin Tone',
          6: 'Dark Skin Tone'
        }
      };

      var _PickerComponent = /*#__PURE__*/function () {
        function PickerComponent(ref, frequently) {
          var _this7 = this;

          _classCallCheck(this, PickerComponent);

          this.ref = ref;
          this.frequently = frequently;
          this.perLine = 9;
          this.totalFrequentLines = 4;
          this.i18n = {};
          this.style = {};
          this.title = 'Emoji Mart™';
          this.emoji = 'department_store';
          this.darkMode = !!(typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: dark)').matches);
          this.color = '#ae65c5';
          this.hideObsolete = true;
          /** all categories shown */

          this.categories = [];
          /** used to temporarily draw categories */

          this.activeCategories = [];
          this.set = 'apple';
          this.skin = 1;
          /** Renders the native unicode emoji */

          this.isNative = false;
          this.emojiSize = 24;
          this.sheetSize = 64;
          this.showPreview = true;
          this.emojiTooltip = false;
          this.autoFocus = false;
          this.custom = [];
          this.hideRecent = true;
          this.notFoundEmoji = 'sleuth_or_spy';
          this.categoriesIcons = categories;
          this.searchIcons = search;
          this.useButton = false;
          this.enableFrequentEmojiSort = false;
          this.enableSearch = true;
          this.showSingleCategory = false;
          this.emojiClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.emojiSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.skinChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.scrollHeight = 0;
          this.clientHeight = 0;
          this.firstRender = true;
          this.NAMESPACE = 'emoji-mart';
          this.measureScrollbar = 0;
          this.RECENT_CATEGORY = {
            id: 'recent',
            name: 'Recent',
            emojis: null
          };
          this.SEARCH_CATEGORY = {
            id: 'search',
            name: 'Search',
            emojis: null,
            anchor: false
          };
          this.CUSTOM_CATEGORY = {
            id: 'custom',
            name: 'Custom',
            emojis: []
          };

          this.backgroundImageFn = function (set, sheetSize) {
            return "https://unpkg.com/emoji-datasource-".concat(_this7.set, "@5.0.1/img/").concat(_this7.set, "/sheets-256/").concat(_this7.sheetSize, ".png");
          };
        }

        _createClass(PickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            // measure scroll
            this.measureScrollbar = measureScrollbar();
            this.i18n = Object.assign(Object.assign({}, I18N), this.i18n);
            this.i18n.categories = Object.assign(Object.assign({}, I18N.categories), this.i18n.categories);
            this.skin = JSON.parse(localStorage.getItem("".concat(this.NAMESPACE, ".skin")) || 'null') || this.skin;

            var allCategories = _toConsumableArray(_ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.categories);

            if (this.custom.length > 0) {
              this.CUSTOM_CATEGORY.emojis = this.custom.map(function (emoji) {
                return Object.assign(Object.assign({}, emoji), {
                  // `<Category />` expects emoji to have an `id`.
                  id: emoji.shortNames[0],
                  custom: true
                });
              });
              allCategories.push(this.CUSTOM_CATEGORY);
            }

            if (this.include !== undefined) {
              allCategories.sort(function (a, b) {
                if (_this8.include.indexOf(a.id) > _this8.include.indexOf(b.id)) {
                  return 1;
                }

                return -1;
              });
            }

            var _iterator3 = _createForOfIteratorHelper(allCategories),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var category = _step3.value;
                var isIncluded = this.include && this.include.length ? this.include.indexOf(category.id) > -1 : true;
                var isExcluded = this.exclude && this.exclude.length ? this.exclude.indexOf(category.id) > -1 : false;

                if (!isIncluded || isExcluded) {
                  continue;
                }

                if (this.emojisToShowFilter) {
                  var newEmojis = [];
                  var emojis = category.emojis; // tslint:disable-next-line: prefer-for-of

                  for (var emojiIndex = 0; emojiIndex < emojis.length; emojiIndex++) {
                    var emoji = emojis[emojiIndex];

                    if (this.emojisToShowFilter(emoji)) {
                      newEmojis.push(emoji);
                    }
                  }

                  if (newEmojis.length) {
                    var newCategory = {
                      emojis: newEmojis,
                      name: category.name,
                      id: category.id
                    };
                    this.categories.push(newCategory);
                  }
                } else {
                  this.categories.push(category);
                }

                this.categoriesIcons = Object.assign(Object.assign({}, categories), this.categoriesIcons);
                this.searchIcons = Object.assign(Object.assign({}, search), this.searchIcons);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var includeRecent = this.include && this.include.length ? this.include.indexOf(this.RECENT_CATEGORY.id) > -1 : true;
            var excludeRecent = this.exclude && this.exclude.length ? this.exclude.indexOf(this.RECENT_CATEGORY.id) > -1 : false;

            if (includeRecent && !excludeRecent) {
              this.hideRecent = false;
              this.categories.unshift(this.RECENT_CATEGORY);
            }

            if (this.categories[0]) {
              this.categories[0].first = true;
            }

            this.categories.unshift(this.SEARCH_CATEGORY);
            this.selected = this.categories.filter(function (category) {
              return category.first;
            })[0].name; // Need to be careful if small number of categories

            var categoriesToLoadFirst = Math.min(this.categories.length, 3);
            this.setActiveCategories(this.activeCategories = this.categories.slice(0, categoriesToLoadFirst)); // Trim last active category

            var lastActiveCategoryEmojis = this.categories[categoriesToLoadFirst - 1].emojis.slice();
            this.categories[categoriesToLoadFirst - 1].emojis = lastActiveCategoryEmojis.slice(0, 60);
            this.ref.markForCheck();
            setTimeout(function () {
              // Restore last category
              _this8.categories[categoriesToLoadFirst - 1].emojis = lastActiveCategoryEmojis;

              _this8.setActiveCategories(_this8.categories);

              _this8.ref.markForCheck();

              setTimeout(function () {
                return _this8.updateCategoriesSize();
              });
            });
          }
        }, {
          key: "setActiveCategories",
          value: function setActiveCategories(categoriesToMakeActive) {
            var _this9 = this;

            if (this.showSingleCategory) {
              this.activeCategories = categoriesToMakeActive.filter(function (x) {
                return x.name === _this9.selected || x === _this9.SEARCH_CATEGORY;
              });
            } else {
              this.activeCategories = categoriesToMakeActive;
            }
          }
        }, {
          key: "updateCategoriesSize",
          value: function updateCategoriesSize() {
            this.categoryRefs.forEach(function (component) {
              return component.memoizeSize();
            });

            if (this.scrollRef) {
              var target = this.scrollRef.nativeElement;
              this.scrollHeight = target.scrollHeight;
              this.clientHeight = target.clientHeight;
            }
          }
        }, {
          key: "handleAnchorClick",
          value: function handleAnchorClick($event) {
            this.updateCategoriesSize();
            this.selected = $event.category.name;
            this.setActiveCategories(this.categories);

            if (this.SEARCH_CATEGORY.emojis) {
              this.handleSearch(null);
              this.searchRef.clear();
              this.handleAnchorClick($event);
              return;
            }

            var component = this.categoryRefs.find(function (n) {
              return n.id === $event.category.id;
            });

            if (component) {
              var top = component.top;

              if ($event.category.first) {
                top = 0;
              } else {
                top += 1;
              }

              this.scrollRef.nativeElement.scrollTop = top;
            }

            this.selected = $event.category.name;
            this.nextScroll = $event.category.name;
          }
        }, {
          key: "categoryTrack",
          value: function categoryTrack(index, item) {
            return item.id;
          }
        }, {
          key: "handleScroll",
          value: function handleScroll() {
            var _this10 = this;

            if (this.nextScroll) {
              this.selected = this.nextScroll;
              this.nextScroll = undefined;
              return;
            }

            if (!this.scrollRef) {
              return;
            }

            if (this.showSingleCategory) {
              return;
            }

            var activeCategory = null;

            if (this.SEARCH_CATEGORY.emojis) {
              activeCategory = this.SEARCH_CATEGORY;
            } else {
              var target = this.scrollRef.nativeElement; // check scroll is not at bottom

              if (target.scrollTop === 0) {
                // hit the TOP
                activeCategory = this.categories.find(function (n) {
                  return n.first === true;
                });
              } else if (target.scrollHeight - target.scrollTop === this.clientHeight) {
                // scrolled to bottom activate last category
                activeCategory = this.categories[this.categories.length - 1];
              } else {
                // scrolling
                var _iterator4 = _createForOfIteratorHelper(this.categories),
                    _step4;

                try {
                  var _loop2 = function _loop2() {
                    var category = _step4.value;

                    var component = _this10.categoryRefs.find(function (n) {
                      return n.id === category.id;
                    });

                    var active = component.handleScroll(target.scrollTop);

                    if (active) {
                      activeCategory = category;
                    }
                  };

                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    _loop2();
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }

              this.scrollTop = target.scrollTop;
            }

            if (activeCategory) {
              this.selected = activeCategory.name;
            }
          }
        }, {
          key: "handleSearch",
          value: function handleSearch($emojis) {
            this.SEARCH_CATEGORY.emojis = $emojis;

            var _iterator5 = _createForOfIteratorHelper(this.categoryRefs.toArray()),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var component = _step5.value;

                if (component.name === 'Search') {
                  component.emojis = $emojis;
                  component.updateDisplay($emojis ? 'block' : 'none');
                } else {
                  component.updateDisplay($emojis ? 'none' : 'block');
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            this.scrollRef.nativeElement.scrollTop = 0;
            this.handleScroll();
          }
        }, {
          key: "handleEnterKey",
          value: function handleEnterKey($event, emoji) {
            if (!emoji) {
              if (this.SEARCH_CATEGORY.emojis !== null && this.SEARCH_CATEGORY.emojis.length) {
                emoji = this.SEARCH_CATEGORY.emojis[0];

                if (emoji) {
                  this.emojiSelect.emit({
                    $event: $event,
                    emoji: emoji
                  });
                } else {
                  return;
                }
              }
            }

            if (!this.hideRecent && !this.recent) {
              this.frequently.add(emoji);
            }

            var component = this.categoryRefs.toArray()[1];

            if (component && this.enableFrequentEmojiSort) {
              component.getEmojis();
              component.ref.markForCheck();
            }
          }
        }, {
          key: "handleEmojiOver",
          value: function handleEmojiOver($event) {
            if (!this.showPreview || !this.previewRef) {
              return;
            }

            var emojiData = this.CUSTOM_CATEGORY.emojis.find(function (customEmoji) {
              return customEmoji.id === $event.emoji.id;
            });

            if (emojiData) {
              $event.emoji = Object.assign({}, emojiData);
            }

            this.previewEmoji = $event.emoji;
            clearTimeout(this.leaveTimeout);
          }
        }, {
          key: "handleEmojiLeave",
          value: function handleEmojiLeave() {
            var _this11 = this;

            if (!this.showPreview || !this.previewRef) {
              return;
            }

            this.leaveTimeout = setTimeout(function () {
              _this11.previewEmoji = null;

              _this11.previewRef.ref.markForCheck();
            }, 16);
          }
        }, {
          key: "handleEmojiClick",
          value: function handleEmojiClick($event) {
            this.emojiClick.emit($event);
            this.emojiSelect.emit($event);
            this.handleEnterKey($event.$event, $event.emoji);
          }
        }, {
          key: "handleSkinChange",
          value: function handleSkinChange(skin) {
            this.skin = skin;
            localStorage.setItem("".concat(this.NAMESPACE, ".skin"), String(skin));
            this.skinChange.emit(skin);
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            if (this.style && this.style.width) {
              return this.style.width;
            }

            return this.perLine * (this.emojiSize + 12) + 12 + 2 + this.measureScrollbar + 'px';
          }
        }]);

        return PickerComponent;
      }();

      _PickerComponent.ɵfac = function PickerComponent_Factory(t) {
        return new (t || _PickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_EmojiFrequentlyService));
      };

      _PickerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PickerComponent,
        selectors: [["emoji-mart"]],
        viewQuery: function PickerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.previewRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.categoryRefs = _t);
          }
        },
        inputs: {
          perLine: "perLine",
          totalFrequentLines: "totalFrequentLines",
          i18n: "i18n",
          style: "style",
          title: "title",
          emoji: "emoji",
          darkMode: "darkMode",
          color: "color",
          hideObsolete: "hideObsolete",
          categories: "categories",
          activeCategories: "activeCategories",
          set: "set",
          skin: "skin",
          isNative: "isNative",
          emojiSize: "emojiSize",
          sheetSize: "sheetSize",
          showPreview: "showPreview",
          emojiTooltip: "emojiTooltip",
          autoFocus: "autoFocus",
          custom: "custom",
          hideRecent: "hideRecent",
          notFoundEmoji: "notFoundEmoji",
          categoriesIcons: "categoriesIcons",
          searchIcons: "searchIcons",
          useButton: "useButton",
          enableFrequentEmojiSort: "enableFrequentEmojiSort",
          enableSearch: "enableSearch",
          showSingleCategory: "showSingleCategory",
          backgroundImageFn: "backgroundImageFn",
          emojisToShowFilter: "emojisToShowFilter",
          include: "include",
          exclude: "exclude"
        },
        outputs: {
          emojiClick: "emojiClick",
          emojiSelect: "emojiSelect",
          skinChange: "skinChange"
        },
        decls: 8,
        vars: 16,
        consts: [[3, "ngStyle"], [1, "emoji-mart-bar"], [3, "categories", "color", "selected", "i18n", "icons", "anchorClick"], [3, "i18n", "include", "exclude", "custom", "autoFocus", "icons", "emojisToShowFilter", "searchResults", "enterKey", 4, "ngIf"], [1, "emoji-mart-scroll", 3, "scroll"], ["scrollRef", ""], [3, "id", "name", "emojis", "perLine", "totalFrequentLines", "hasStickyPosition", "i18n", "hideObsolete", "notFoundEmoji", "custom", "recent", "emojiIsNative", "emojiSkin", "emojiSize", "emojiSet", "emojiSheetSize", "emojiForceSize", "emojiTooltip", "emojiBackgroundImageFn", "emojiUseButton", "emojiOver", "emojiLeave", "emojiClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "emoji-mart-bar", 4, "ngIf"], [3, "i18n", "include", "exclude", "custom", "autoFocus", "icons", "emojisToShowFilter", "searchResults", "enterKey"], ["searchRef", ""], [3, "id", "name", "emojis", "perLine", "totalFrequentLines", "hasStickyPosition", "i18n", "hideObsolete", "notFoundEmoji", "custom", "recent", "emojiIsNative", "emojiSkin", "emojiSize", "emojiSet", "emojiSheetSize", "emojiForceSize", "emojiTooltip", "emojiBackgroundImageFn", "emojiUseButton", "emojiOver", "emojiLeave", "emojiClick"], ["categoryRef", ""], [3, "title", "emoji", "idleEmoji", "emojiIsNative", "emojiSize", "emojiSkin", "emojiSet", "i18n", "emojiSheetSize", "emojiBackgroundImageFn", "skinChange"], ["previewRef", ""]],
        template: function PickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "emoji-mart-anchors", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("anchorClick", function PickerComponent_Template_emoji_mart_anchors_anchorClick_2_listener($event) {
              return ctx.handleAnchorClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PickerComponent_emoji_search_3_Template, 2, 7, "emoji-search", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function PickerComponent_Template_section_scroll_4_listener() {
              return ctx.handleScroll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PickerComponent_emoji_category_6_Template, 2, 20, "emoji-category", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PickerComponent_div_7_Template, 3, 10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("emoji-mart ", ctx.darkMode ? "emoji-mart-dark" : "", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getWidth());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.categories)("color", ctx.color)("selected", ctx.selected)("i18n", ctx.i18n)("icons", ctx.categoriesIcons);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.i18n.emojilist);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activeCategories)("ngForTrackBy", ctx.categoryTrack);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPreview);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _AnchorsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _SearchComponent, _CategoryComponent, _PreviewComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      _PickerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _EmojiFrequentlyService
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "perLine", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "totalFrequentLines", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "i18n", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "style", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "title", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "emoji", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "darkMode", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "color", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "hideObsolete", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "categories", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "activeCategories", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "set", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "skin", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "isNative", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "emojiSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "sheetSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "emojisToShowFilter", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "showPreview", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "emojiTooltip", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "autoFocus", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "custom", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "hideRecent", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "include", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "exclude", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "notFoundEmoji", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "categoriesIcons", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "searchIcons", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "useButton", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "enableFrequentEmojiSort", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "enableSearch", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "showSingleCategory", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _PickerComponent.prototype, "emojiClick", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _PickerComponent.prototype, "emojiSelect", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _PickerComponent.prototype, "skinChange", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('scrollRef', {
        "static": true
      })], _PickerComponent.prototype, "scrollRef", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('previewRef')], _PickerComponent.prototype, "previewRef", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('searchRef', {
        "static": true
      })], _PickerComponent.prototype, "searchRef", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren)('categoryRef')], _PickerComponent.prototype, "categoryRefs", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PickerComponent.prototype, "backgroundImageFn", void 0);

      var _PreviewComponent = /*#__PURE__*/function () {
        function PreviewComponent(ref, emojiService) {
          _classCallCheck(this, PreviewComponent);

          this.ref = ref;
          this.emojiService = emojiService;
          this.skinChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.emojiData = {};
        }

        _createClass(PreviewComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (!this.emoji) {
              return;
            }

            this.emojiData = this.emojiService.getData(this.emoji, this.emojiSkin, this.emojiSet);
            var knownEmoticons = [];
            var listedEmoticons = [];
            var emoitcons = this.emojiData.emoticons || [];
            emoitcons.forEach(function (emoticon) {
              if (knownEmoticons.indexOf(emoticon.toLowerCase()) >= 0) {
                return;
              }

              knownEmoticons.push(emoticon.toLowerCase());
              listedEmoticons.push(emoticon);
            });
            this.listedEmoticons = listedEmoticons;
          }
        }]);

        return PreviewComponent;
      }();

      _PreviewComponent.ɵfac = function PreviewComponent_Factory(t) {
        return new (t || _PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiService));
      };

      _PreviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PreviewComponent,
        selectors: [["emoji-preview"]],
        inputs: {
          title: "title",
          emoji: "emoji",
          idleEmoji: "idleEmoji",
          i18n: "i18n",
          emojiIsNative: "emojiIsNative",
          emojiSkin: "emojiSkin",
          emojiSize: "emojiSize",
          emojiSet: "emojiSet",
          emojiSheetSize: "emojiSheetSize",
          emojiBackgroundImageFn: "emojiBackgroundImageFn"
        },
        outputs: {
          skinChange: "skinChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 2,
        consts: [["class", "emoji-mart-preview", 4, "ngIf"], [1, "emoji-mart-preview"], [1, "emoji-mart-preview-emoji"], [3, "emoji", "size", "isNative", "skin", "set", "sheetSize", "backgroundImageFn"], [1, "emoji-mart-preview-data"], [1, "emoji-mart-preview-name"], [1, "emoji-mart-preview-shortname"], ["class", "emoji-mart-preview-shortname", 4, "ngFor", "ngForOf"], [1, "emoji-mart-preview-emoticons"], ["class", "emoji-mart-preview-emoticon", 4, "ngFor", "ngForOf"], [1, "emoji-mart-preview-emoticon"], [3, "isNative", "skin", "set", "emoji", "backgroundImageFn", "size", 4, "ngIf"], [1, "emoji-mart-title-label"], [1, "emoji-mart-preview-skins"], [3, "skin", "i18n", "changeSkin"], [3, "isNative", "skin", "set", "emoji", "backgroundImageFn", "size"]],
        template: function PreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PreviewComponent_div_0_Template, 10, 11, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewComponent_div_1_Template, 8, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emoji && ctx.emojiData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.emoji);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _SkinComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      _PreviewComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiService
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PreviewComponent.prototype, "title", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PreviewComponent.prototype, "emoji", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PreviewComponent.prototype, "idleEmoji", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PreviewComponent.prototype, "i18n", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PreviewComponent.prototype, "emojiIsNative", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PreviewComponent.prototype, "emojiSkin", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PreviewComponent.prototype, "emojiSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PreviewComponent.prototype, "emojiSet", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PreviewComponent.prototype, "emojiSheetSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _PreviewComponent.prototype, "emojiBackgroundImageFn", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _PreviewComponent.prototype, "skinChange", void 0);
      var id = 0;

      var _SearchComponent = /*#__PURE__*/function () {
        function SearchComponent(emojiSearch) {
          _classCallCheck(this, SearchComponent);

          this.emojiSearch = emojiSearch;
          this.maxResults = 75;
          this.autoFocus = false;
          this.include = [];
          this.exclude = [];
          this.custom = [];
          this.searchResults = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.enterKey = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.isSearching = false;
          this.query = '';
          this.inputId = "emoji-mart-search-".concat(++id);
        }

        _createClass(SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.icon = this.icons.search;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.autoFocus) {
              this.inputRef.nativeElement.focus();
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.query = '';
            this.handleSearch('');
            this.inputRef.nativeElement.focus();
          }
        }, {
          key: "handleEnterKey",
          value: function handleEnterKey($event) {
            if (!this.query) {
              return;
            }

            this.enterKey.emit($event);
            $event.preventDefault();
          }
        }, {
          key: "handleSearch",
          value: function handleSearch(value) {
            if (value === '') {
              this.icon = this.icons.search;
              this.isSearching = false;
            } else {
              this.icon = this.icons["delete"];
              this.isSearching = true;
            }

            var emojis = this.emojiSearch.search(this.query, this.emojisToShowFilter, this.maxResults, this.include, this.exclude, this.custom);
            this.searchResults.emit(emojis);
          }
        }, {
          key: "handleChange",
          value: function handleChange() {
            this.handleSearch(this.query);
          }
        }]);

        return SearchComponent;
      }();

      _SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || _SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_EmojiSearch));
      };

      _SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SearchComponent,
        selectors: [["emoji-search"]],
        viewQuery: function SearchComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputRef = _t.first);
          }
        },
        inputs: {
          maxResults: "maxResults",
          autoFocus: "autoFocus",
          include: "include",
          exclude: "exclude",
          custom: "custom",
          i18n: "i18n",
          icons: "icons",
          emojisToShowFilter: "emojisToShowFilter"
        },
        outputs: {
          searchResults: "searchResults",
          enterKey: "enterKey"
        },
        decls: 8,
        vars: 9,
        consts: [[1, "emoji-mart-search"], ["type", "search", 3, "id", "placeholder", "autofocus", "ngModel", "keyup.enter", "ngModelChange"], ["inputRef", ""], [1, "emoji-mart-sr-only", 3, "htmlFor"], ["type", "button", 1, "emoji-mart-search-icon", 3, "disabled", "click", "keyup.enter"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "width", "13", "height", "13", "opacity", "0.5"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_1_listener($event) {
              return ctx.handleEnterKey($event);
            })("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.query = $event;
            })("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener() {
              return ctx.handleChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_5_listener() {
              return ctx.clear();
            })("keyup.enter", function SearchComponent_Template_button_keyup_enter_5_listener() {
              return ctx.clear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("placeholder", ctx.i18n.search)("autofocus", ctx.autoFocus)("ngModel", ctx.query);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("htmlFor", ctx.inputId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.i18n.search, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isSearching);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.i18n.clear);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx.icon);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
        encapsulation: 2
      });

      _SearchComponent.ctorParameters = function () {
        return [{
          type: _EmojiSearch
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _SearchComponent.prototype, "maxResults", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _SearchComponent.prototype, "autoFocus", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _SearchComponent.prototype, "i18n", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _SearchComponent.prototype, "include", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _SearchComponent.prototype, "exclude", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _SearchComponent.prototype, "custom", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _SearchComponent.prototype, "icons", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _SearchComponent.prototype, "emojisToShowFilter", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _SearchComponent.prototype, "searchResults", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _SearchComponent.prototype, "enterKey", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('inputRef', {
        "static": true
      })], _SearchComponent.prototype, "inputRef", void 0);

      var _SkinComponent = /*#__PURE__*/function () {
        function SkinComponent() {
          _classCallCheck(this, SkinComponent);

          this.changeSkin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.opened = false;
          this.skinTones = [1, 2, 3, 4, 5, 6];
        }

        _createClass(SkinComponent, [{
          key: "toggleOpen",
          value: function toggleOpen() {
            this.opened = !this.opened;
          }
        }, {
          key: "isSelected",
          value: function isSelected(skinTone) {
            return skinTone === this.skin;
          }
        }, {
          key: "isVisible",
          value: function isVisible(skinTone) {
            return this.opened || this.isSelected(skinTone);
          }
        }, {
          key: "pressed",
          value: function pressed(skinTone) {
            return this.opened ? !!this.isSelected(skinTone) : '';
          }
        }, {
          key: "tabIndex",
          value: function tabIndex(skinTone) {
            return this.isVisible(skinTone) ? '0' : '';
          }
        }, {
          key: "expanded",
          value: function expanded(skinTone) {
            return this.isSelected(skinTone) ? this.opened : '';
          }
        }, {
          key: "handleClick",
          value: function handleClick(skin) {
            if (!this.opened) {
              this.opened = true;
              return;
            }

            this.opened = false;

            if (skin !== this.skin) {
              this.changeSkin.emit(skin);
            }
          }
        }]);

        return SkinComponent;
      }();

      _SkinComponent.ɵfac = function SkinComponent_Factory(t) {
        return new (t || _SkinComponent)();
      };

      _SkinComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SkinComponent,
        selectors: [["emoji-skins"]],
        inputs: {
          skin: "skin",
          i18n: "i18n"
        },
        outputs: {
          changeSkin: "changeSkin"
        },
        decls: 2,
        vars: 3,
        consts: [[1, "emoji-mart-skin-swatches"], ["class", "emoji-mart-skin-swatch", 3, "selected", 4, "ngFor", "ngForOf"], [1, "emoji-mart-skin-swatch"], ["role", "button", 3, "tabIndex", "title", "click", "keyup.enter", "keyup.space"]],
        template: function SkinComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkinComponent_span_1_Template, 2, 12, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", ctx.opened);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skinTones);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
        encapsulation: 2,
        changeDetection: 0
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _SkinComponent.prototype, "skin", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _SkinComponent.prototype, "i18n", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _SkinComponent.prototype, "changeSkin", void 0);

      var _PickerModule = function PickerModule() {
        _classCallCheck(this, PickerModule);
      };

      _PickerModule.ɵfac = function PickerModule_Factory(t) {
        return new (t || _PickerModule)();
      };

      _PickerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _PickerModule
      });
      _PickerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_AnchorsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'emoji-mart-anchors',
            template: "\n  <div class=\"emoji-mart-anchors\">\n    <ng-template ngFor let-category [ngForOf]=\"categories\" let-idx=\"index\" [ngForTrackBy]=\"trackByFn\">\n      <span\n        *ngIf=\"category.anchor !== false\"\n        [attr.title]=\"i18n.categories[category.id]\"\n        (click)=\"this.handleClick($event, idx)\"\n        class=\"emoji-mart-anchor\"\n        [class.emoji-mart-anchor-selected]=\"category.name === selected\"\n        [style.color]=\"category.name === selected ? color : null\"\n      >\n        <div>\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n            <path [attr.d]=\"icons[category.id]\" />\n          </svg>\n        </div>\n        <span class=\"emoji-mart-anchor-bar\" [style.background-color]=\"color\"></span>\n      </span>\n    </ng-template>\n  </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false
          }]
        }], function () {
          return [];
        }, {
          categories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          anchorClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          i18n: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_EmojiFrequentlyService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'emoji-category',
            template: "\n  <section #container class=\"emoji-mart-category\"\n    [attr.aria-label]=\"i18n.categories[id]\"\n    [class.emoji-mart-no-results]=\"emojis && !emojis.length\"\n    [ngStyle]=\"containerStyles\">\n    <div class=\"emoji-mart-category-label\"\n      [ngStyle]=\"labelStyles\"\n      [attr.data-name]=\"name\">\n      <!-- already labeled by the section aria-label -->\n      <span #label [ngStyle]=\"labelSpanStyles\" aria-hidden=\"true\">\n        {{ i18n.categories[id] }}\n      </span>\n    </div>\n\n    <ng-template [ngIf]=\"emojis\">\n      <ngx-emoji\n        *ngFor=\"let emoji of emojis; trackBy: trackById\"\n        [emoji]=\"emoji\"\n        [size]=\"emojiSize\"\n        [skin]=\"emojiSkin\"\n        [isNative]=\"emojiIsNative\"\n        [set]=\"emojiSet\"\n        [sheetSize]=\"emojiSheetSize\"\n        [forceSize]=\"emojiForceSize\"\n        [tooltip]=\"emojiTooltip\"\n        [backgroundImageFn]=\"emojiBackgroundImageFn\"\n        [hideObsolete]=\"hideObsolete\"\n        (emojiOver)=\"emojiOver.emit($event)\"\n        (emojiLeave)=\"emojiLeave.emit($event)\"\n        (emojiClick)=\"emojiClick.emit($event)\"\n      ></ngx-emoji>\n    </ng-template>\n\n    <div *ngIf=\"emojis && !emojis.length\">\n      <div>\n        <ngx-emoji\n          [emoji]=\"notFoundEmoji\"\n          size=\"38\"\n          [skin]=\"emojiSkin\"\n          [isNative]=\"emojiIsNative\"\n          [set]=\"emojiSet\"\n          [sheetSize]=\"emojiSheetSize\"\n          [forceSize]=\"emojiForceSize\"\n          [tooltip]=\"emojiTooltip\"\n          [backgroundImageFn]=\"emojiBackgroundImageFn\"\n          [useButton]=\"emojiUseButton\"\n        ></ngx-emoji>\n      </div>\n\n      <div class=\"emoji-mart-no-results-label\">\n        {{ i18n.notfound }}\n      </div>\n    </div>\n\n  </section>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiService
          }, {
            type: _EmojiFrequentlyService
          }];
        }, {
          hasStickyPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          perLine: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          totalFrequentLines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          recent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          custom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hideObsolete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          emojiLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          emojiClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          emojis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          i18n: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          notFoundEmoji: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiIsNative: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiSkin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiSheetSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiForceSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiTooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiBackgroundImageFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiUseButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['container', {
              "static": true
            }]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['label', {
              "static": true
            }]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_EmojiSearch, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiService
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_PickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'emoji-mart',
            template: "<section class=\"emoji-mart {{ darkMode ? 'emoji-mart-dark' : '' }}\"\n  [style.width]=\"getWidth()\"\n  [ngStyle]=\"style\">\n  <div class=\"emoji-mart-bar\">\n    <emoji-mart-anchors\n      [categories]=\"categories\"\n      (anchorClick)=\"handleAnchorClick($event)\"\n      [color]=\"color\"\n      [selected]=\"selected\"\n      [i18n]=\"i18n\"\n      [icons]=\"categoriesIcons\"\n    ></emoji-mart-anchors>\n  </div>\n  <emoji-search\n    *ngIf=\"enableSearch\"\n    #searchRef\n    [i18n]=\"i18n\"\n    (searchResults)=\"handleSearch($event)\"\n    (enterKey)=\"handleEnterKey($event)\"\n    [include]=\"include\"\n    [exclude]=\"exclude\"\n    [custom]=\"custom\"\n    [autoFocus]=\"autoFocus\"\n    [icons]=\"searchIcons\"\n    [emojisToShowFilter]=\"emojisToShowFilter\"\n  ></emoji-search>\n  <section #scrollRef class=\"emoji-mart-scroll\" (scroll)=\"handleScroll()\" [attr.aria-label]=\"i18n.emojilist\">\n    <emoji-category\n      *ngFor=\"let category of activeCategories; let idx = index; trackBy: categoryTrack\"\n      #categoryRef\n      [id]=\"category.id\"\n      [name]=\"category.name\"\n      [emojis]=\"category.emojis\"\n      [perLine]=\"perLine\"\n      [totalFrequentLines]=\"totalFrequentLines\"\n      [hasStickyPosition]=\"isNative\"\n      [i18n]=\"i18n\"\n      [hideObsolete]=\"hideObsolete\"\n      [notFoundEmoji]=\"notFoundEmoji\"\n      [custom]=\"category.id == RECENT_CATEGORY.id ? CUSTOM_CATEGORY.emojis : undefined\"\n      [recent]=\"category.id == RECENT_CATEGORY.id ? recent : undefined\"\n      [emojiIsNative]=\"isNative\"\n      [emojiSkin]=\"skin\"\n      [emojiSize]=\"emojiSize\"\n      [emojiSet]=\"set\"\n      [emojiSheetSize]=\"sheetSize\"\n      [emojiForceSize]=\"isNative\"\n      [emojiTooltip]=\"emojiTooltip\"\n      [emojiBackgroundImageFn]=\"backgroundImageFn\"\n      [emojiUseButton]=\"false\"\n      (emojiOver)=\"handleEmojiOver($event)\"\n      (emojiLeave)=\"handleEmojiLeave()\"\n      (emojiClick)=\"handleEmojiClick($event)\"\n    ></emoji-category>\n  </section>\n  <div class=\"emoji-mart-bar\" *ngIf=\"showPreview\">\n    <emoji-preview\n      #previewRef\n      [title]=\"title\"\n      [emoji]=\"previewEmoji\"\n      [idleEmoji]=\"emoji\"\n      [emojiIsNative]=\"isNative\"\n      [emojiSize]=\"38\"\n      [emojiSkin]=\"skin\"\n      [emojiSet]=\"set\"\n      [i18n]=\"i18n\"\n      [emojiSheetSize]=\"sheetSize\"\n      [emojiBackgroundImageFn]=\"backgroundImageFn\"\n      (skinChange)=\"handleSkinChange($event)\"\n    ></emoji-preview>\n  </div>\n</section>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _EmojiFrequentlyService
          }];
        }, {
          perLine: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          totalFrequentLines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          i18n: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emoji: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          darkMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hideObsolete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          categories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          activeCategories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          set: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          skin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          isNative: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sheetSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          showPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiTooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          autoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          custom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hideRecent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          notFoundEmoji: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          categoriesIcons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          searchIcons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          useButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          enableFrequentEmojiSort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          enableSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          showSingleCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          emojiSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          skinChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          backgroundImageFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojisToShowFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          include: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          exclude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          scrollRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['scrollRef', {
              "static": true
            }]
          }],
          previewRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['previewRef']
          }],
          searchRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['searchRef', {
              "static": true
            }]
          }],
          categoryRefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
            args: ['categoryRef']
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_PreviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'emoji-preview',
            template: "\n  <div class=\"emoji-mart-preview\" *ngIf=\"emoji && emojiData\">\n    <div class=\"emoji-mart-preview-emoji\">\n      <ngx-emoji\n        [emoji]=\"emoji\"\n        [size]=\"38\"\n        [isNative]=\"emojiIsNative\"\n        [skin]=\"emojiSkin\"\n        [size]=\"emojiSize\"\n        [set]=\"emojiSet\"\n        [sheetSize]=\"emojiSheetSize\"\n        [backgroundImageFn]=\"emojiBackgroundImageFn\"\n      ></ngx-emoji>\n    </div>\n\n    <div class=\"emoji-mart-preview-data\">\n      <div class=\"emoji-mart-preview-name\">{{ emojiData.name }}</div>\n      <div class=\"emoji-mart-preview-shortname\">\n        <span class=\"emoji-mart-preview-shortname\" *ngFor=\"let short_name of emojiData.shortNames\">\n          :{{ short_name }}:\n        </span>\n      </div>\n      <div class=\"emoji-mart-preview-emoticons\">\n        <span class=\"emoji-mart-preview-emoticon\" *ngFor=\"let emoticon of listedEmoticons\">\n          {{ emoticon }}\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"emoji-mart-preview\" *ngIf=\"!emoji\">\n    <div class=\"emoji-mart-preview-emoji\">\n      <ngx-emoji *ngIf=\"idleEmoji && idleEmoji.length\"\n        [isNative]=\"emojiIsNative\"\n        [skin]=\"emojiSkin\"\n        [set]=\"emojiSet\"\n        [emoji]=\"idleEmoji\"\n        [backgroundImageFn]=\"emojiBackgroundImageFn\"\n        [size]=\"38\"\n      ></ngx-emoji>\n    </div>\n\n    <div class=\"emoji-mart-preview-data\">\n      <span class=\"emoji-mart-title-label\">{{ title }}</span>\n    </div>\n\n    <div class=\"emoji-mart-preview-skins\">\n      <emoji-skins [skin]=\"emojiSkin\" (changeSkin)=\"skinChange.emit($event)\" [i18n]=\"i18n\">\n      </emoji-skins>\n    </div>\n  </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiService
          }];
        }, {
          skinChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emoji: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          idleEmoji: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          i18n: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiIsNative: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiSkin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiSheetSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojiBackgroundImageFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_SearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'emoji-search',
            template: "\n    <div class=\"emoji-mart-search\">\n      <input\n        [id]=\"inputId\"\n        #inputRef\n        type=\"search\"\n        (keyup.enter)=\"handleEnterKey($event)\"\n        [placeholder]=\"i18n.search\"\n        [autofocus]=\"autoFocus\"\n        [(ngModel)]=\"query\"\n        (ngModelChange)=\"handleChange()\"\n      />\n      <!--\n      Use a <label> in addition to the placeholder for accessibility, but place it off-screen\n      http://www.maxability.co.in/2016/01/placeholder-attribute-and-why-it-is-not-accessible/\n      -->\n      <label class=\"emoji-mart-sr-only\" [htmlFor]=\"inputId\">\n        {{ i18n.search }}\n      </label>\n      <button\n        type=\"button\"\n        class=\"emoji-mart-search-icon\"\n        (click)=\"clear()\"\n        (keyup.enter)=\"clear()\"\n        [disabled]=\"!isSearching\"\n        [attr.aria-label]=\"i18n.clear\"\n      >\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          viewBox=\"0 0 20 20\"\n          width=\"13\"\n          height=\"13\"\n          opacity=\"0.5\"\n        >\n          <path [attr.d]=\"icon\" />\n        </svg>\n      </button>\n    </div>\n  ",
            preserveWhitespaces: false
          }]
        }], function () {
          return [{
            type: _EmojiSearch
          }];
        }, {
          maxResults: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          autoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          include: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          exclude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          custom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          searchResults: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          enterKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          i18n: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emojisToShowFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          inputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['inputRef', {
              "static": true
            }]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_SkinComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'emoji-skins',
            template: "\n    <section\n      class=\"emoji-mart-skin-swatches\"\n      [class.opened]=\"opened\"\n    >\n      <span\n        *ngFor=\"let skinTone of skinTones\"\n        class=\"emoji-mart-skin-swatch\"\n        [class.selected]=\"skinTone === skin\"\n      >\n        <span\n          (click)=\"this.handleClick(skinTone)\"\n          (keyup.enter)=\"handleClick(skinTone)\"\n          (keyup.space)=\"handleClick(skinTone)\"\n          class=\"emoji-mart-skin emoji-mart-skin-tone-{{ skinTone }}\"\n          role=\"button\"\n          [tabIndex]=\"tabIndex(skinTone)\"\n          [attr.aria-hidden]=\"!isVisible(skinTone)\"\n          [attr.aria-pressed]=\"pressed(skinTone)\"\n          [attr.aria-haspopup]=\"!!isSelected(skinTone)\"\n          [attr.aria-expanded]=\"expanded(skinTone)\"\n          [attr.aria-label]=\"i18n.skintones[skinTone]\"\n          [title]=\"i18n.skintones[skinTone]\"\n        ></span>\n      </span>\n    </section>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false
          }]
        }], function () {
          return [];
        }, {
          changeSkin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          skin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          i18n: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_PickerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiModule],
            exports: [_PickerComponent, _AnchorsComponent, _CategoryComponent, _SearchComponent, _PreviewComponent, _SkinComponent],
            declarations: [_PickerComponent, _AnchorsComponent, _CategoryComponent, _SearchComponent, _PreviewComponent, _SkinComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_PickerModule, {
          declarations: function declarations() {
            return [_PickerComponent, _AnchorsComponent, _CategoryComponent, _SearchComponent, _PreviewComponent, _SkinComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_3__.EmojiModule];
          },
          exports: function exports() {
            return [_PickerComponent, _AnchorsComponent, _CategoryComponent, _SearchComponent, _PreviewComponent, _SkinComponent];
          }
        });
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ctrl-ngx-emoji-mart.js.map

      /***/

    },

    /***/
    72040: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatRoutingModule": function ChatRoutingModule() {
          return (
            /* binding */
            _ChatRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chat/chat.component */
      1650);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent
        }]
      }];

      var _ChatRoutingModule = function _ChatRoutingModule() {
        _classCallCheck(this, _ChatRoutingModule);
      };

      _ChatRoutingModule.ɵfac = function ChatRoutingModule_Factory(t) {
        return new (t || _ChatRoutingModule)();
      };

      _ChatRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ChatRoutingModule
      });
      _ChatRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ChatRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    68470: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatModule": function ChatModule() {
          return (
            /* binding */
            _ChatModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ctrl/ngx-emoji-mart */
      46180);
      /* harmony import */


      var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ctrl/ngx-emoji-mart/ngx-emoji */
      62558);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _chat_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chat-routing.module */
      72040);
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chat/chat.component */
      1650);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ChatModule = function _ChatModule() {
        _classCallCheck(this, _ChatModule);
      };

      _ChatModule.ɵfac = function ChatModule_Factory(t) {
        return new (t || _ChatModule)();
      };

      _ChatModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _ChatModule
      });
      _ChatModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _chat_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChatRoutingModule, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_6__.PickerModule, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_7__.EmojiModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_ChatModule, {
          declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__.ChatComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _chat_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChatRoutingModule, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_6__.PickerModule, _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_7__.EmojiModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
        });
      })();
      /***/

    },

    /***/
    1650: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatComponent": function ChatComponent() {
          return (
            /* binding */
            _ChatComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/services/chat.service */
      88925);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ctrl/ngx-emoji-mart */
      46180);

      var _c0 = function _c0(a0, a1) {
        return {
          "online": a0,
          "offline": a1
        };
      };

      function ChatComponent_ng_container_22_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_ng_container_22_li_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.userChat(user_r8.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", user_r8 == null ? null : user_r8.profile, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, user_r8.online, !user_r8.online));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r8 == null ? null : user_r8.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r8 == null ? null : user_r8.status);
        }
      }

      function ChatComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatComponent_ng_container_22_li_1_Template, 9, 7, "li", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var user_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r8.authenticate != 1);
        }
      }

      function ChatComponent_ng_container_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Sorry, We didn't find any results matching this search");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function ChatComponent_span_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Typing...");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ChatComponent_li_56_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chat_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r15.chatUser == null ? null : ctx_r15.chatUser.profile, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r14 == null ? null : chat_r14.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", chat_r14 == null ? null : chat_r14.text, " ");
        }
      }

      function ChatComponent_li_56_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chat_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r17.profile == null ? null : ctx_r17.profile.profile, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r14 == null ? null : chat_r14.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", chat_r14 == null ? null : chat_r14.text, " ");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "clearfix": a0
        };
      };

      function ChatComponent_li_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatComponent_li_56_div_1_Template, 6, 3, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ChatComponent_li_56_ng_template_2_Template, 6, 3, "ng-template", null, 102, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chat_r14 = ctx.$implicit;

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, chat_r14.sender == ctx_r3.profile.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chat_r14.sender != ctx_r3.profile.id)("ngIfElse", _r16);
        }
      }

      function ChatComponent_ng_container_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function ChatComponent_ng_container_68_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "emoji-mart", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("emojiClick", function ChatComponent_ng_container_68_Template_emoji_mart_emojiClick_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r20.addEmoji($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function ChatComponent_ng_container_87_li_1_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 116);
        }
      }

      function ChatComponent_ng_container_87_li_1_i_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 117);
        }
      }

      function ChatComponent_ng_container_87_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ChatComponent_ng_container_87_li_1_i_6_Template, 1, 0, "i", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ChatComponent_ng_container_87_li_1_i_7_Template, 1, 0, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", user_r22 == null ? null : user_r22.profile, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r22 == null ? null : user_r22.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (user_r22 == null ? null : user_r22.call == null ? null : user_r22.call.status) == "outgoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (user_r22 == null ? null : user_r22.call == null ? null : user_r22.call.status) == "incoming");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\xA0\xA0", user_r22 == null ? null : user_r22.call.date_time, " ");
        }
      }

      function ChatComponent_ng_container_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatComponent_ng_container_87_li_1_Template, 9, 5, "li", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var user_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r22.authenticate != 1);
        }
      }

      var _c2 = function _c2() {
        return ["Apps"];
      };

      var _c3 = function _c3() {
        return {
          standalone: true
        };
      };

      var _c4 = function _c4(a0) {
        return {
          "active show": a0
        };
      };

      var _c5 = function _c5(a0) {
        return {
          "active": a0
        };
      };

      var _c6 = function _c6(a0) {
        return {
          "show active": a0
        };
      };

      var _ChatComponent = /*#__PURE__*/function () {
        function _ChatComponent(chatService) {
          var _this12 = this;

          _classCallCheck(this, _ChatComponent);

          this.chatService = chatService;
          this.openTab = "call";
          this.users = [];
          this.searchUsers = [];
          this.error = false;
          this.notFound = false;
          this.showEmojiPicker = false;
          this.mobileToggle = false;
          this.chatService.getUsers().subscribe(function (users) {
            _this12.searchUsers = users;
            _this12.users = users;
          });
        }

        _createClass(_ChatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userChat(this.id);
            this.getProfile();
          }
        }, {
          key: "toggleEmojiPicker",
          value: function toggleEmojiPicker() {
            this.showEmojiPicker = !this.showEmojiPicker;
          }
        }, {
          key: "addEmoji",
          value: function addEmoji(event) {
            var text = "".concat(event.emoji["native"]);
            this.chatText = text;
            this.showEmojiPicker = false;
          }
        }, {
          key: "tabbed",
          value: function tabbed(val) {
            this.openTab = val;
          } // Get user Profile

        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this13 = this;

            this.chatService.getCurrentUser().subscribe(function (userProfile) {
              return _this13.profile = userProfile;
            });
          } // User Chat

        }, {
          key: "userChat",
          value: function userChat() {
            var _this14 = this;

            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.chatService.chatToUser(id).subscribe(function (chatUser) {
              return _this14.chatUser = chatUser;
            });
            this.chatService.getChatHistory(id).subscribe(function (chats) {
              return _this14.chats = chats;
            });
          } // Send Message to User

        }, {
          key: "sendMessage",
          value: function sendMessage(form) {
            if (!form.value.message) {
              this.error = true;
              return false;
            }

            this.error = false;
            var chat = {
              sender: this.profile.id,
              receiver: this.chatUser.id,
              receiver_name: this.chatUser.name,
              message: form.value.message
            };
            this.chatService.sendMessage(chat);
            this.chatText = '';
            this.chatUser.seen = 'online';
            this.chatUser.online = true;
          }
        }, {
          key: "searchTerm",
          value: function searchTerm(term) {
            if (!term) return this.searchUsers = this.users;
            term = term.toLowerCase();
            var user = [];
            this.users.filter(function (users) {
              if (users.name.toLowerCase().includes(term)) {
                user.push(users);
              }
            });
            this.searchUsers = user;
          }
        }, {
          key: "mobileMenu",
          value: function mobileMenu() {
            this.mobileToggle = !this.mobileToggle;
          }
        }]);

        return _ChatComponent;
      }();

      _ChatComponent.ɵfac = function ChatComponent_Factory(t) {
        return new (t || _ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService));
      };

      _ChatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ChatComponent,
        selectors: [["app-chat"]],
        decls: 155,
        vars: 45,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col", "call-chat-sidebar", "col-sm-12"], [1, "card"], [1, "card-body", "chat-body"], [1, "chat-box"], [1, "chat-left-aside"], [1, "media"], ["alt", "", 1, "rounded-circle", "user-image", 3, "src"], [1, "about"], [1, "name", "f-w-600"], [1, "status"], ["id", "people-list", 1, "people-list"], [1, "search"], [1, "theme-form"], [1, "form-group"], ["type", "text", "placeholder", "search", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], [1, "fa", "fa-search"], [1, "list"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col", "call-chat-body"], [1, "card-body", "p-0"], [1, "row", "chat-box"], [1, "col", "pr-0", "chat-right-aside"], [1, "chat"], [1, "chat-header", "clearfix"], ["alt", "", 1, "rounded-circle", 3, "src"], [1, "name"], ["class", "font-primary f-12", 4, "ngIf"], [1, "status", "digits"], [1, "list-inline", "float-left", "float-sm-right", "chat-menu-icons"], [1, "list-inline-item"], ["href", "javascript:void(0)"], [1, "icon-search"], [1, "icon-clip"], [1, "icon-headphone-alt"], [1, "icon-video-camera"], [1, "list-inline-item", "toogle-bar", 3, "click"], [1, "icon-menu"], [1, "chat-history", "chat-msg-box", "custom-scrollbar"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngSubmit"], ["chatForm", "ngForm"], [1, "chat-message", "clearfix"], [1, "col-xl-12", "d-flex"], [1, "smiley-box", "bg-primary"], [1, "picker"], ["src", "assets/images/smiley.png", "alt", "", 3, "click"], [1, "input-group", "text-box"], ["id", "message-to-send", "type", "text", "name", "message", "placeholder", "Type a message......", 1, "form-control", "input-txt-bx", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "col", "pl-0", "chat-menu"], ["id", "info-tab", "role", "tablist", 1, "nav", "nav-tabs", "border-tab", "nav-primary"], [1, "nav-item"], ["href", "javascript:void(0)", "id", "info-home-tab", 1, "nav-link", 3, "ngClass", "click"], ["href", "javascript:void(0)", "id", "profile-info-tab", 1, "nav-link", 3, "ngClass", "click"], ["href", "javascript:void(0)", "id", "contact-info-tab", 1, "nav-link", 3, "ngClass", "click"], ["id", "info-tabContent", 1, "tab-content"], ["id", "info-home", "role", "tabpanel", "aria-labelledby", "info-home-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "people-list"], [1, "list", "digits"], ["id", "info-profile", "role", "tabpanel", "aria-labelledby", "profile-info-tab", 1, "tab-pane", "fade", 3, "ngClass"], ["type", "text", "placeholder", "Write Status...", 1, "form-control"], [1, "fa", "fa-pencil"], [1, "font-dark"], [1, "icofont", "icofont-emo-heart-eyes", "font-danger", "f-20"], [1, "icofont", "icofont-emo-heart-eyes", "font-danger", "f-20", "m-l-5"], [1, "icofont", "icofont-emo-rolling-eyes", "font-success", "f-20"], ["id", "info-contact", "role", "tabpanel", "aria-labelledby", "contact-info-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "user-profile"], [1, "image"], [1, "avatar", "text-center"], ["alt", "", 3, "src"], [1, "icon-wrapper"], [1, "icofont", "icofont-pencil-alt-5"], [1, "user-content", "text-center"], [1, "text-uppercase"], [1, "social-media"], [1, "list-inline"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-rss"], [1, "follow", "text-center"], [1, "col", "border-right"], [1, "follow-num"], [1, "col"], [1, "text-center", "digits"], [1, "mb-0"], ["class", "clearfix", 4, "ngIf"], [1, "clearfix"], ["href", "javascript:void(0)", 3, "click"], [1, "status-circle", "away", 3, "ngClass"], [1, "search-not-found", "chat-search", "text-center"], ["src", "assets/images/search-not-found.png", "alt", "", 1, "second-search"], [1, "font-primary", "f-12"], [3, "ngClass"], ["class", "message my-message mb-0", 4, "ngIf", "ngIfElse"], ["myChat", ""], [1, "message", "my-message", "mb-0"], ["alt", "", 1, "rounded-circle", "float-left", "chat-user-img", "img-30", 3, "src"], [1, "message-data", "text-right"], [1, "message-data-time"], [1, "message", "other-message", "pull-right"], ["alt", "", 1, "rounded-circle", "float-right", "chat-user-img", "img-30", 3, "src"], [1, "message-data"], [1, "image-not-found"], [1, "d-block", "start-conversion"], ["src", "assets/images/start-conversion.jpg", 1, "img-fluid"], ["set", "apple", "useButton", "true", 3, "emojiClick"], ["class", "fa fa-share font-success", 4, "ngIf"], ["class", "fa fa-reply font-danger", 4, "ngIf"], [1, "fa", "fa-share", "font-success"], [1, "fa", "fa-reply", "font-danger"]],
        template: function ChatComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.searchText = $event;
            })("keyup", function ChatComponent_Template_input_keyup_19_listener() {
              return ctx.searchTerm(ctx.searchText);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ChatComponent_ng_container_22_Template, 2, 1, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ChatComponent_ng_container_23_Template, 6, 0, "ng-container", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ChatComponent_span_35_Template, 2, 0, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ul", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_Template_li_click_51_listener() {
              return ctx.mobileMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, ChatComponent_li_56_Template, 4, 5, "li", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, ChatComponent_ng_container_57_Template, 4, 0, "ng-container", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "form", 43, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ChatComponent_Template_form_ngSubmit_58_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](59);

              return ctx.sendMessage(_r5);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_Template_img_click_65_listener() {
              return ctx.toggleEmojiPicker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_67_listener($event) {
              return ctx.chatText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, ChatComponent_ng_container_68_Template, 2, 0, "ng-container", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_70_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](59);

              return ctx.sendMessage(_r5);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "SEND");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "ul", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "li", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_Template_a_click_75_listener() {
              return ctx.tabbed("call");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "CALL");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "li", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_Template_a_click_78_listener() {
              return ctx.tabbed("status");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "STATUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "li", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_Template_a_click_81_listener() {
              return ctx.tabbed("profile");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "PROFILE");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "ul", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, ChatComponent_ng_container_87_Template, 2, 1, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "input", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "p", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, " Established fact that a reader will be distracted \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "i", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "i", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Dolore magna aliqua \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "i", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "img", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "i", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "h5", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "ul", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "i", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "i", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "i", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "i", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "i", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "236k");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "3691k");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "p", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Mark.jecno23@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "p", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "+91 365 - 658 - 1236");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "p", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "Fax: 123-4560");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Chat")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c2))("active_item", "Chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.profile == null ? null : ctx.profile.profile, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchText)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](32, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.searchUsers);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.searchUsers.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.chatUser == null ? null : ctx.chatUser.profile, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.chatUser == null ? null : ctx.chatUser.name, "\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.chatUser == null ? null : ctx.chatUser.typing);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.chatUser == null ? null : ctx.chatUser.seen);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.chats == null ? null : ctx.chats.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.chats == null ? null : ctx.chats.message.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("border-danger", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.chatText);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showEmojiPicker);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx.mobileToggle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](33, _c4, ctx.openTab == "call"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](35, _c5, ctx.openTab == "status"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](37, _c5, ctx.openTab == "profile"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](39, _c6, ctx.openTab == "call"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.users);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](41, _c6, ctx.openTab == "status"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](43, _c6, ctx.openTab == "profile"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.profile == null ? null : ctx.profile.profile, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.name);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_5__.PickerComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_chat_chat_module_ts-es5.js.map