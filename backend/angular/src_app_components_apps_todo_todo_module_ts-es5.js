(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_todo_todo_module_ts"], {
    /***/
    94681: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TodoRoutingModule": function TodoRoutingModule() {
          return (
            /* binding */
            _TodoRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _todo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./todo.component */
      38128);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _todo_component__WEBPACK_IMPORTED_MODULE_0__.TodoComponent
        }]
      }];

      var _TodoRoutingModule = function _TodoRoutingModule() {
        _classCallCheck(this, _TodoRoutingModule);
      };

      _TodoRoutingModule.??fac = function TodoRoutingModule_Factory(t) {
        return new (t || _TodoRoutingModule)();
      };

      _TodoRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _TodoRoutingModule
      });
      _TodoRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_TodoRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    38128: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TodoComponent": function TodoComponent() {
          return (
            /* binding */
            _TodoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_todo_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/data/todo/todo */
      96718);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      49344);
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _c0 = function _c0(a0) {
        return {
          "completed": a0
        };
      };

      function TodoComponent_li_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h4", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function TodoComponent_li_28_Template_span_click_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r3.taskDeleted(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function TodoComponent_li_28_Template_span_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r4);

            var todo_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r5.taskCompleted(todo_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var todo_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](2, _c0, todo_r1.completed ? todo_r1.completed : ctx_r0.completed));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](todo_r1.text);
        }
      }

      var _c1 = function _c1() {
        return ["Apps"];
      };

      var _c2 = function _c2(a0) {
        return {
          "move-up": a0
        };
      };

      var _c3 = function _c3(a0) {
        return {
          "move-down": a0
        };
      };

      var _c4 = function _c4(a0) {
        return {
          "hide": a0
        };
      };

      var _c5 = function _c5(a0) {
        return {
          "visible": a0
        };
      };

      var _TodoComponent = /*#__PURE__*/function () {
        function _TodoComponent(toastrService) {
          _classCallCheck(this, _TodoComponent);

          this.toastrService = toastrService;
          this.todos = _shared_data_todo_todo__WEBPACK_IMPORTED_MODULE_0__.task;
          this.red_border = false;
        }

        _createClass(_TodoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addTask",
          value: function addTask(text) {
            if (!text) {
              this.red_border = true;
              return false;
            }

            var task = {
              text: text,
              completed: false
            };
            this.todos.push(task);
            this.text = '';
            this.red_border = false;
          }
        }, {
          key: "taskCompleted",
          value: function taskCompleted(task) {
            task.completed = !task.completed;
            task.completed ? this.toastrService.success(task.text, "Mark as completed") : this.toastrService.error(task.text, "Mark as Incompleted");
          }
        }, {
          key: "taskDeleted",
          value: function taskDeleted(index) {
            this.todos.splice(index, 1);
          }
        }, {
          key: "markAllAction",
          value: function markAllAction(action) {
            this.todos.filter(function (task) {
              task.completed = action;
            });
            this.completed = action;
            action ? this.toastrService.success("All Task as Completed") : this.toastrService.error("All Task as Incompleted");
          }
        }]);

        return _TodoComponent;
      }();

      _TodoComponent.??fac = function TodoComponent_Factory(t) {
        return new (t || _TodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
      };

      _TodoComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _TodoComponent,
        selectors: [["app-todo"]],
        decls: 45,
        vars: 20,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "todo"], [1, "todo-list-wrapper"], [1, "todo-list-container"], [1, "mark-all-tasks"], [1, "mark-all-tasks-container"], ["id", "mark-all-finished", "role", "button", "id", "mark-all-finished", "role", "button", 1, "mark-all-btn", 3, "ngClass"], [1, "btn-label"], [1, "action-box", "completed", 3, "click"], [1, "icon"], [1, "icon-check"], ["id", "mark-all-incomplete", "role", "button", 1, "mark-all-btn", "move-down", 3, "ngClass"], [1, "action-box"], [1, "icon", 3, "click"], [1, "todo-list-body"], ["id", "todo-list"], ["class", "task", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "todo-list-footer"], [1, "add-task-btn-wrapper"], [1, "add-task-btn", 3, "ngClass"], [1, "btn", "btn-primary", 3, "click"], [1, "icon-plus"], [1, "new-task-wrapper", 3, "ngClass"], ["name", "todo", "id", "new-task", 1, "textfield", 3, "ngModel", "ngModelChange"], ["id", "close-task-panel", 1, "btn", "btn-danger", "cancel-btn", 3, "click"], ["id", "add-task", 1, "btn", "btn-success", "ml-3", "add-new-task-btn", 3, "click"], [1, "notification-popup", "hide"], [1, "task"], [1, "notification-text"], [1, "task", 3, "ngClass"], [1, "task-container"], [1, "task-label"], [1, "task-action-btn"], ["title", "Delete Task", "routerLink", "/to-do", 1, "action-box", "large", "delete-btn", 3, "click"], [1, "icon-trash"], ["title", "Mark Complete", 1, "action-box", "large", "complete-btn", 3, "click"]],
        template: function TodoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "To-Do");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Mark all as finished");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function TodoComponent_Template_span_click_17_listener() {
              return ctx.markAllAction(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](19, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Mark all as Incomplete");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function TodoComponent_Template_i_click_24_listener() {
              return ctx.markAllAction(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](25, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "ul", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](28, TodoComponent_li_28_Template, 11, 4, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function TodoComponent_Template_button_click_32_listener() {
              return ctx.visible = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](33, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, " Add new task");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "textarea", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function TodoComponent_Template_textarea_ngModelChange_36_listener($event) {
              return ctx.text = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function TodoComponent_Template_span_click_37_listener() {
              return ctx.visible = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function TodoComponent_Template_span_click_39_listener() {
              return ctx.addTask(ctx.text);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "Add Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](43, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](44, "span", 34);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "To Do")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](11, _c1))("active_item", "To Do");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](12, _c2, ctx.completed));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](14, _c3, !ctx.completed));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.todos);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](16, _c4, ctx.visible));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](18, _c5, ctx.visible));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("border-danger", ctx.red_border);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.text);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
        styles: [".err[_ngcontent-%COMP%] {\n  border: thin red;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJ0b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycntcbiAgICBib3JkZXI6IHRoaW4gcmVkIDtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    97409: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TodoModule": function TodoModule() {
          return (
            /* binding */
            _TodoModule
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


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _todo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./todo-routing.module */
      94681);
      /* harmony import */


      var _todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./todo.component */
      38128);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TodoModule = function _TodoModule() {
        _classCallCheck(this, _TodoModule);
      };

      _TodoModule.??fac = function TodoModule_Factory(t) {
        return new (t || _TodoModule)();
      };

      _TodoModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _TodoModule
      });
      _TodoModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _todo_routing_module__WEBPACK_IMPORTED_MODULE_1__.TodoRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_TodoModule, {
          declarations: [_todo_component__WEBPACK_IMPORTED_MODULE_2__.TodoComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _todo_routing_module__WEBPACK_IMPORTED_MODULE_1__.TodoRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_todo_todo_module_ts-es5.js.map