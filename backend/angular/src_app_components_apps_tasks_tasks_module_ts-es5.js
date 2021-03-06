(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_tasks_tasks_module_ts"], {
    /***/
    42290: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddTaskComponent": function AddTaskComponent() {
          return (
            /* binding */
            _AddTaskComponent
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

      var _c0 = ["addTask"];

      function AddTaskComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddTaskComponent_ng_template_0_Template_button_click_3_listener() {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Task Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Sub task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Remind on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "7:00 am");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "7:30 am");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "8:00 am");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "8:30 am");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "9:00 am");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "9:30 am");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "10:00 am");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "10:30 am");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "11:00 am");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "11:30 am");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "12:00 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "12:30 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "1:00 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "2:00 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "3:00 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "4:00 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "5:00 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "6:00 pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "notification ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Mail ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "My Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "textarea", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _AddTaskComponent = /*#__PURE__*/function () {
        function _AddTaskComponent(platformId, modalService) {
          _classCallCheck(this, _AddTaskComponent);

          this.platformId = platformId;
          this.modalService = modalService;
          this.modalOpen = false;
        }

        _createClass(_AddTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal() {
            var _this = this;

            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
              // For SSR 
              this.modalService.open(this.AddTask, {
                size: 'lg',
                ariaLabelledBy: 'modal',
                centered: true,
                windowClass: 'modal'
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

        return _AddTaskComponent;
      }();

      _AddTaskComponent.??fac = function AddTaskComponent_Factory(t) {
        return new (t || _AddTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
      };

      _AddTaskComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _AddTaskComponent,
        selectors: [["app-add-task"]],
        viewQuery: function AddTaskComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.AddTask = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["addTask", ""], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "bookmark-form", "novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "row"], [1, "form-group", "col-md-12"], ["for", "task-title"], ["id", "task-title", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], ["for", "sub-task"], ["id", "sub-task", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "d-flex", "date-details"], [1, "d-inline-block"], ["for", "chk-ani", 1, "d-block", "mb-0"], ["id", "chk-ani", "type", "checkbox", 1, "checkbox_animated"], ["type", "text", "data-language", "en", "placeholder", "Date", 1, "datepicker-here", "form-control", "digits"], [1, "form-control"], ["for", "chk-ani1", 1, "d-block", "mb-0"], ["id", "chk-an1", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani2", 1, "d-block", "mb-0"], ["id", "chk-an2", "type", "checkbox", 1, "checkbox_animated"], [1, "form-group", "col-md-6"], [1, "js-example-basic-single"], ["value", "task"], ["id", "bm-collection", 1, "js-example-disabled-results"], ["value", "general"], [1, "form-group", "col-md-12", "my-0"], ["required", "", "autocomplete", "off", 1, "form-control"], ["id", "index_var", "type", "hidden", "value", "6"], ["id", "Bookmark", "onclick", "submitBookMark()", "type", "submit", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary"]],
        template: function AddTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, AddTaskComponent_ng_template_0_Template, 87, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdGFzay5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    23026: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
        selectors: [["app-create-task-tag"]],
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
    26631: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TasksRoutingModule": function TasksRoutingModule() {
          return (
            /* binding */
            _TasksRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tasks.component */
      70359);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent
        }]
      }];

      var _TasksRoutingModule = function _TasksRoutingModule() {
        _classCallCheck(this, _TasksRoutingModule);
      };

      _TasksRoutingModule.??fac = function TasksRoutingModule_Factory(t) {
        return new (t || _TasksRoutingModule)();
      };

      _TasksRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _TasksRoutingModule
      });
      _TasksRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_TasksRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    70359: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TasksComponent": function TasksComponent() {
          return (
            /* binding */
            _TasksComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _modal_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modal/add-task/add-task.component */
      42290);
      /* harmony import */


      var _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal/create-tag/create-tag.component */
      23026);

      var _c0 = ["addTask"];
      var _c1 = ["createTag"];

      var _c2 = function _c2() {
        return ["Apps"];
      };

      var _TasksComponent = /*#__PURE__*/function () {
        function _TasksComponent() {
          _classCallCheck(this, _TasksComponent);
        }

        _createClass(_TasksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TasksComponent;
      }();

      _TasksComponent.??fac = function TasksComponent_Factory(t) {
        return new (t || _TasksComponent)();
      };

      _TasksComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: _TasksComponent,
        selectors: [["app-tasks"]],
        viewQuery: function TasksComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.AddTask = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.CreateTag = _t.first);
          }
        },
        decls: 542,
        vars: 4,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "email-wrap", "bookmark-wrap"], [1, "row"], [1, "col-xl-3", "box-col-6"], [1, "email-left-aside"], [1, "card"], [1, "card-body"], [1, "email-app-sidebar", "left-bookmark"], [1, "media"], [1, "media-size-email"], ["src", "assets/images/user/user.png", "alt", "", 1, "mr-3", "rounded-circle"], [1, "media-body"], [1, "f-w-600"], ["role", "tablist", 1, "nav", "main-menu"], [1, "nav-item"], ["type", "button", 1, "badge-light-primary", "btn-block", "btn-mail", 3, "click"], ["data-feather", "check-circle", 1, "mr-2"], [1, "main-title"], ["id", "pills-created-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-created", "aria-selected", "true"], [1, "title"], ["id", "pills-todaytask-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-todaytask", "aria-selected", "false", 1, "show"], ["id", "pills-delayed-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-delayed", "aria-selected", "false", 1, "show"], ["id", "pills-upcoming-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-upcoming", "aria-selected", "false", 1, "show"], ["id", "pills-weekly-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-weekly", "aria-selected", "false", 1, "show"], ["id", "pills-monthly-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-monthly", "aria-selected", "false", 1, "show"], ["id", "pills-assigned-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-assigned", "aria-selected", "false", 1, "show"], ["id", "pills-tasks-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-tasks", "aria-selected", "false", 1, "show"], [1, "pull-right"], ["href", "javascript:void(0)", 3, "click"], ["data-feather", "plus-circle"], ["id", "pills-notification-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-notification", "aria-selected", "false", 1, "show"], ["id", "pills-newsletter-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-newsletter", "aria-selected", "false", 1, "show"], ["id", "pills-business-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-business", "aria-selected", "false", 1, "show"], ["id", "pills-holidays-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-holidays", "aria-selected", "false", 1, "show"], [1, "col-xl-9", "col-md-12", "box-col-12"], [1, "email-right-aside", "bookmark-tabcontent"], [1, "card", "email-body", "radius-left"], [1, "pl-0"], [1, "tab-content"], ["id", "pills-created", "role", "tabpanel", "aria-labelledby", "pills-created-tab", 1, "tab-pane", "fade", "active", "show"], [1, "card", "mb-0"], [1, "card-header", "d-flex"], [1, "mb-0"], ["href", "javascript:void(0)"], ["data-feather", "printer", 1, "mr-2"], [1, "card-body", "p-0"], [1, "taskadd"], [1, "table-responsive", "table-bordernone"], [1, "table"], [1, "task_title_0"], [1, "project_name_0"], [1, "task_desc_0"], ["href", "javascript:void(0)", 1, "mr-2"], ["data-feather", "link"], ["data-feather", "more-horizontal"], ["data-feather", "trash-2"], ["id", "pills-todaytask", "role", "tabpanel", "aria-labelledby", "pills-todaytask-tab", 1, "fade", "tab-pane"], [1, "details-bookmark", "text-center"], ["id", "favouriteData", 1, "row"], [1, "no-favourite"], ["id", "pills-delayed", "role", "tabpanel", "aria-labelledby", "pills-delayed-tab", 1, "fade", "tab-pane"], ["id", "pills-upcoming", "role", "tabpanel", "aria-labelledby", "pills-upcoming-tab", 1, "fade", "tab-pane"], ["id", "pills-weekly", "role", "tabpanel", "aria-labelledby", "pills-weekly-tab", 1, "fade", "tab-pane"], ["id", "pills-monthly", "role", "tabpanel", "aria-labelledby", "pills-monthly-tab", 1, "fade", "tab-pane"], ["id", "pills-assigned", "role", "tabpanel", "aria-labelledby", "pills-assigned-tab", 1, "fade", "tab-pane"], ["id", "pills-tasks", "role", "tabpanel", "aria-labelledby", "pills-tasks-tab", 1, "fade", "tab-pane"], ["id", "pills-notification", "role", "tabpanel", "aria-labelledby", "pills-notification-tab", 1, "fade", "tab-pane"], ["id", "pills-newsletter", "role", "tabpanel", "aria-labelledby", "pills-newsletter-tab", 1, "fade", "tab-pane"], ["id", "createtag", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade", "modal-bookmark"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "form-group", "col-md-12"], ["type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "col-md-12", "mb-0"], ["type", "color", "value", "#563d7c", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "mr-1"], ["addTask", ""], ["createTag", ""]],
        template: function TasksComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "h6", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "MARK JENCO");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Markjecno@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function TasksComponent_Template_button_click_19_listener() {
              return ctx.AddTask.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, " New Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, " Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28, " Created by me");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](32, " Today's Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](36, " Delayed Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](40, "Upcoming Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](44, "This week tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](48, "This month tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](50, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](52, "Assigned to me");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](56, "My tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](58, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](61, " Tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function TasksComponent_Template_a_click_63_listener() {
              return ctx.CreateTag.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](64, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](66, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](68, " notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](71, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](72, " Newsletter");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](74, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](75, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](76, " Business");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](80, " Holidays");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](81, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](82, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](83, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](84, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](85, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](87, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](88, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](89, "h5", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](90, "Created by me");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](91, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](92, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](93, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](94, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](95, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](96, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](97, "table", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](98, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](99, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](100, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](101, "Client meeting");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](102, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](103, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](104, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](105, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](106, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](107, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](108, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](109, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](110, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](111, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](112, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](113, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](114, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](115, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](116, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](117, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](118, "Plan webinar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](119, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](120, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](121, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](122, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](123, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](124, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](125, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](126, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](127, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](128, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](129, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](130, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](131, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](132, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](134, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](135, "Email newsletter");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](136, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](137, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](138, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](139, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](140, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](142, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](143, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](144, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](145, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](146, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](147, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](148, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](149, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](150, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](151, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](152, "Publish podcast");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](153, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](154, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](155, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](156, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](157, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](159, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](160, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](161, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](162, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](163, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](164, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](165, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](166, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](167, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](168, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](169, "Lunch website");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](170, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](171, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](172, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](173, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](174, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](175, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](176, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](177, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](178, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](179, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](180, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](181, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](182, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](183, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](184, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](185, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](186, "Client meeting");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](187, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](188, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](189, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](190, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](191, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](193, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](194, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](195, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](196, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](197, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](198, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](199, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](200, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](201, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](202, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](203, "Plan webinar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](204, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](205, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](206, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](207, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](208, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](209, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](210, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](211, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](212, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](213, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](215, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](216, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](217, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](218, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](219, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](220, "Email newsletter");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](221, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](222, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](224, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](225, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](226, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](227, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](228, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](229, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](230, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](231, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](232, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](233, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](234, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](235, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](236, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](237, "h6", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](238, "Today's Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](239, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](240, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](241, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](242, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](243, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](244, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](245, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](246, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](247, "No task due today.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](248, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](249, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](250, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](251, "h6", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](252, "Delayed Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](253, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](254, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](255, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](256, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](257, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](258, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](259, "No tasks found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](260, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](261, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](262, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](263, "h6", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](264, "Upcoming Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](265, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](266, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](267, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](268, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](269, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](270, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](271, "No tasks found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](272, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](273, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](274, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](275, "h6", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](276, "This Week Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](277, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](278, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](279, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](280, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](281, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](282, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](283, "No tasks found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](284, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](285, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](286, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](287, "h6", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](288, "This Month Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](289, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](290, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](291, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](292, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](293, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](294, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](295, "No tasks found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](296, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](297, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](298, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](299, "h6", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](300, "Assigned to me");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](301, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](302, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](303, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](304, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](305, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](306, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](307, "table", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](308, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](309, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](310, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](311, "Task name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](312, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](313, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](314, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](315, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](316, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](317, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](318, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](319, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](320, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](321, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](322, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](323, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](324, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](325, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](326, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](327, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](328, "Task name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](329, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](330, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](331, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](332, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](333, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](334, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](335, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](336, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](337, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](338, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](339, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](340, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](341, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](342, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](343, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](344, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](345, "Task name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](346, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](347, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](348, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](349, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](350, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](351, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](352, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](353, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](354, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](355, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](356, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](357, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](358, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](359, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](360, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](361, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](362, "Task name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](363, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](364, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](365, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](366, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](367, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](368, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](369, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](370, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](371, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](372, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](373, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](374, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](375, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](376, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](377, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](378, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](379, "Task name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](380, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](381, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](382, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](383, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](384, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](385, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](386, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](387, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](388, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](389, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](390, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](391, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](392, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](393, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](394, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](395, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](396, "h6", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](397, "My tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](398, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](399, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](400, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](401, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](402, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](403, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](404, "table", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](405, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](406, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](407, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](408, "Task name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](409, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](410, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](411, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](412, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](413, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](414, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](415, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](416, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](417, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](418, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](419, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](420, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](421, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](422, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](423, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](424, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](425, "Task name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](426, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](427, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](428, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](429, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](430, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](431, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](432, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](433, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](434, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](435, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](436, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](437, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](438, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](439, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](440, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](441, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](442, "Task name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](443, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](444, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](445, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](446, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](447, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](448, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](449, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](450, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](451, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](452, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](453, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](454, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](455, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](456, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](457, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](458, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](459, "Task name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](460, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](461, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](462, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](463, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](464, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](465, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](466, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](467, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](468, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](469, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](470, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](471, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](472, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](473, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](474, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](475, "h6", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](476, "Task name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](477, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](478, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](479, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](480, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](481, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](482, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](483, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](484, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](485, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](486, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](487, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](488, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](489, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](490, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](491, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](492, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](493, "h6", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](494, "notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](495, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](496, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](497, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](498, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](499, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](500, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](501, "No tasks found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](502, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](503, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](504, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](505, "h6", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](506, "Newsletter");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](507, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](508, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](509, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](510, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](511, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](512, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](513, "No tasks found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](514, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](515, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](516, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](517, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](518, "h5", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](519, "Create Tag");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](520, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](521, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](522, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](523, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](524, "form", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](525, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](526, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](527, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](528, "Tag Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](529, "input", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](530, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](531, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](532, "Tag color");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](533, "input", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](534, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](535, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](536, "button", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](537, "Cancel");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](538, "app-add-task", null, 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](540, "app-create-task-tag", null, 85);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("title", "Tasks")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](3, _c2))("active_item", "Tasks");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _modal_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_1__.AddTaskComponent, _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_2__.CreateTagComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    60876: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TasksModule": function TasksModule() {
          return (
            /* binding */
            _TasksModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tasks-routing.module */
      26631);
      /* harmony import */


      var _tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tasks.component */
      70359);
      /* harmony import */


      var _modal_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal/add-task/add-task.component */
      42290);
      /* harmony import */


      var _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modal/create-tag/create-tag.component */
      23026);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TasksModule = function _TasksModule() {
        _classCallCheck(this, _TasksModule);
      };

      _TasksModule.??fac = function TasksModule_Factory(t) {
        return new (t || _TasksModule)();
      };

      _TasksModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: _TasksModule
      });
      _TasksModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tasks_routing_module__WEBPACK_IMPORTED_MODULE_1__.TasksRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](_TasksModule, {
          declarations: [_tasks_component__WEBPACK_IMPORTED_MODULE_2__.TasksComponent, _modal_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__.AddTaskComponent, _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_4__.CreateTagComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tasks_routing_module__WEBPACK_IMPORTED_MODULE_1__.TasksRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_tasks_tasks_module_ts-es5.js.map