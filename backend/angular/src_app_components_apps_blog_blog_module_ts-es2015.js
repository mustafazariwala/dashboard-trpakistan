(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_blog_blog_module_ts"],{

/***/ 99369:
/*!*********************************************************************!*\
  !*** ./src/app/components/apps/blog/add-post/add-post.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPostComponent": function() { return /* binding */ AddPostComponent; }
/* harmony export */ });
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 78556);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 22723);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 48020);







const _c0 = function () { return ["Apps", "Blog"]; };
const _c1 = function () { return { standalone: true }; };
class AddPostComponent {
    constructor() {
        this.category = [{ id: 1, name: "Life Style" }, { id: 2, name: "Travel" }];
        this.selectedCategory = [];
        this.ClassicEditor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__;
        this.config = {
            clickable: true,
            maxFiles: 1,
            addRemoveLinks: true,
            autoReset: null,
            errorReset: null,
            cancelReset: null
        };
    }
    ngOnInit() {
    }
    onUploadInit(args) {
    }
    onUploadError(args) {
    }
    onUploadSuccess(args) {
    }
}
AddPostComponent.??fac = function AddPostComponent_Factory(t) { return new (t || AddPostComponent)(); };
AddPostComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AddPostComponent, selectors: [["app-add-post"]], decls: 57, vars: 11, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "add-post"], [1, "row", "needs-validation"], [1, "form-group"], ["for", "validationCustom01"], ["id", "validationCustom01", "type", "text", "placeholder", "Post Title", "required", "", 1, "form-control"], [1, "valid-feedback"], [1, "m-checkbox-inline"], ["for", "edo-ani"], ["id", "edo-ani", "type", "radio", "name", "rdo-ani", "checked", "", 1, "radio_animated"], ["for", "edo-ani1"], ["id", "edo-ani1", "type", "radio", "name", "rdo-ani", 1, "radio_animated"], ["for", "edo-ani2"], ["id", "edo-ani2", "type", "radio", "name", "rdo-ani", "checked", "", 1, "radio_animated"], ["for", "edo-ani3"], ["id", "edo-ani3", "type", "radio", "name", "rdo-ani", 1, "radio_animated"], [1, "col-form-label"], ["bindLabel", "name", "bindValue", "id", 1, "mt-2", 3, "items", "ngModel", "multiple", "ngModelOptions", "ngModelChange"], [1, "email-wrapper"], [1, "theme-form"], ["data", "<p>Hello, world!</p>", 3, "editor"], [1, "dropzone", "dropzone-primary", 3, "dropzone", "init", "error", "success"], [1, "dz-message", "needsclick"], [1, "icon-cloud-up"], [1, "btn-showcase"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "reset", "value", "Discard", 1, "btn", "btn-light"]], template: function AddPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Post Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Looks good!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23, "Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "Audio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](35, "Category: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "ng-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function AddPostComponent_Template_ng_select_ngModelChange_36_listener($event) { return ctx.selectedCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, "Content:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](42, "ckeditor", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("init", function AddPostComponent_Template_div_init_43_listener($event) { return ctx.onUploadInit($event); })("error", function AddPostComponent_Template_div_error_43_listener($event) { return ctx.onUploadError($event); })("success", function AddPostComponent_Template_div_success_43_listener($event) { return ctx.onUploadSuccess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](45, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47, "Drop files here or click to upload.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](49, "(This is just a demo dropzone. Selected files are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, "not");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](52, " actually uploaded.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](55, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](56, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "Add Post")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](9, _c0))("active_item", "Add Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("items", ctx.category)("ngModel", ctx.selectedCategory)("multiple", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("editor", ctx.ClassicEditor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("dropzone", ctx.config);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__.CKEditorComponent, ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_6__.DropzoneDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 23804:
/*!*************************************************************!*\
  !*** ./src/app/components/apps/blog/blog-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogRoutingModule": function() { return /* binding */ BlogRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details/details.component */ 61009);
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single/single.component */ 98831);
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-post/add-post.component */ 99369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);






const routes = [
    {
        path: '',
        children: [
            {
                path: 'details',
                component: _details_details_component__WEBPACK_IMPORTED_MODULE_0__.DetailsComponent
            },
            {
                path: 'single',
                component: _single_single_component__WEBPACK_IMPORTED_MODULE_1__.SingleComponent
            },
            {
                path: 'add-post',
                component: _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_2__.AddPostComponent
            }
        ]
    }
];
class BlogRoutingModule {
}
BlogRoutingModule.??fac = function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); };
BlogRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: BlogRoutingModule });
BlogRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 72578:
/*!*****************************************************!*\
  !*** ./src/app/components/apps/blog/blog.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogModule": function() { return /* binding */ BlogModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 22723);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dropzone */ 30753);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 48020);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-post/add-post.component */ 99369);
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-routing.module */ 23804);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ 61009);
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single/single.component */ 98831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);












const DEFAULT_DROPZONE_CONFIG = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    createImageThumbnails: true
};
class BlogModule {
}
BlogModule.??fac = function BlogModule_Factory(t) { return new (t || BlogModule)(); };
BlogModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: BlogModule });
BlogModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ providers: [
        { provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_6__.DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__.BlogRoutingModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__.NgxDropzoneModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_6__.DropzoneModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__.CKEditorModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](BlogModule, { declarations: [_details_details_component__WEBPACK_IMPORTED_MODULE_3__.DetailsComponent, _single_single_component__WEBPACK_IMPORTED_MODULE_4__.SingleComponent, _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_1__.AddPostComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__.BlogRoutingModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__.NgxDropzoneModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_6__.DropzoneModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__.CKEditorModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 61009:
/*!*******************************************************************!*\
  !*** ./src/app/components/apps/blog/details/details.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": function() { return /* binding */ DetailsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);


const _c0 = function () { return ["Apps", "Blog"]; };
class DetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetailsComponent.??fac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(); };
DetailsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 125, vars: 4, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-6", "box-col-12", "xl-100"], [1, "card"], [1, "blog-box", "blog-shadow"], ["src", "assets/images/blog/blog.jpg", "alt", "", 1, "img-fluid"], [1, "blog-details"], [1, "digits"], [1, "blog-social"], [1, "icofont", "icofont-user"], [1, "icofont", "icofont-thumbs-up"], [1, "icofont", "icofont-ui-chat"], [1, "blog-box", "blog-list", "row"], [1, "col-sm-5"], ["src", "assets/images/blog/blog-2.jpg", "alt", "", 1, "img-fluid", "sm-100-w"], [1, "col-sm-7"], [1, "blog-date", "digits"], [1, "blog-bottom-content"], [1, "mt-0"], ["src", "assets/images/blog/blog-3.jpg", "alt", "", 1, "img-fluid", "sm-100-w"], [1, "col-md-6", "col-xl-3", "box-col-6", "xl-50"], [1, "blog-box", "blog-grid", "text-center"], ["src", "assets/images/blog/blog-5.jpg", "alt", "", 1, "img-fluid", "top-radius-blog"], [1, "blog-details-main"], [1, "blog-bottom-details"], ["src", "assets/images/blog/blog-6.jpg", "alt", "", 1, "img-fluid", "top-radius-blog"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "25 July 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Accusamus et iusto odio dignissimos ducimus qui blanditiis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Mark Jecno");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "02 Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "598 Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, " January 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Perspiciatis unde omnis iste natus error sit voluptatem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "by: Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "0 Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, " January 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Perspiciatis unde omnis iste natus error sit voluptatem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, "by: Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "02 Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](62, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](68, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "9 April 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, "by: Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, "0 Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](77, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Perspiciatis unde omnis iste natus error sit.Dummy text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](83, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](87, "9 April 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "by: Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "0 Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](92, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "Perspiciatis unde omnis iste natus error sit.Dummy text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](98, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "9 April 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "by: Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](106, "0 Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](107, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](109, "Perspiciatis unde omnis iste natus error sit.Dummy text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](113, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "9 April 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "by: Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, "0 Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](122, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "Perspiciatis unde omnis iste natus error sit.Dummy text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Blog Details")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Blog Details");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 98831:
/*!*****************************************************************!*\
  !*** ./src/app/components/apps/blog/single/single.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleComponent": function() { return /* binding */ SingleComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);


const _c0 = function () { return ["Apps", "Blog"]; };
class SingleComponent {
    constructor() { }
    ngOnInit() {
    }
}
SingleComponent.??fac = function SingleComponent_Factory(t) { return new (t || SingleComponent)(); };
SingleComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: SingleComponent, selectors: [["app-single"]], decls: 130, vars: 4, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "blog-single"], [1, "blog-box", "blog-details"], ["src", "assets/images/blog/blog-single.jpg", "alt", "blog-main", 1, "img-fluid", "w-100"], [1, "blog-details"], [1, "blog-social"], [1, "digits"], [1, "icofont", "icofont-user"], [1, "icofont", "icofont-thumbs-up"], [1, "icofont", "icofont-ui-chat"], [1, "single-blog-content-top"], [1, "comment-box"], [1, "media", "align-self-center"], ["src", "assets/images/blog/comment.jpg", "alt", "Generic placeholder image", 1, "align-self-center"], [1, "media-body"], [1, "col-md-4"], [1, "mt-0"], [1, "col-md-8"], [1, "comment-social", "float-left", "float-md-right"], [1, "media"], ["src", "assets/images/blog/9.jpg", "alt", "Generic placeholder image", 1, "align-self-center"], [1, "col-xl-12"], ["src", "assets/images/blog/4.jpg", "alt", "Generic placeholder image", 1, "align-self-center"], ["src", "assets/images/blog/12.png", "alt", "Generic placeholder image", 1, "align-self-center"], ["src", "assets/images/blog/14.png", "alt", "Generic placeholder image", 1, "align-self-center"]], template: function SingleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "25 July 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Mark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Jecno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "598 Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, " All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](38, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Jolio Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, " ( Designer )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](49, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "02 Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](52, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "598 Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](60, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Jolio Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, " ( Designer )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](72, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "Jolio Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, " ( Designer )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](83, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "02 Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](86, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](87, "598 Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](92, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "Jolio Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99, " ( Designer )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](103, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "02 Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](106, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "598 Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](109, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](112, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "Jolio Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, " ( Designer )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](123, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "02 Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](126, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, "598 Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Single Blog")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Single Blog");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW5nbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_blog_blog_module_ts-es2015.js.map