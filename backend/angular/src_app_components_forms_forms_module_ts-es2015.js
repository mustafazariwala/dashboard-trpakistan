(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_forms_forms_module_ts"],{

/***/ 72386:
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-archwizard/__ivy_ngcc__/fesm2015/angular-archwizard.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchwizardModule": function() { return /* binding */ ArchwizardModule; },
/* harmony export */   "BaseNavigationMode": function() { return /* binding */ BaseNavigationMode; },
/* harmony export */   "CompletedStepDirective": function() { return /* binding */ CompletedStepDirective; },
/* harmony export */   "ConfigurableNavigationMode": function() { return /* binding */ ConfigurableNavigationMode; },
/* harmony export */   "EnableBackLinksDirective": function() { return /* binding */ EnableBackLinksDirective; },
/* harmony export */   "GoToStepDirective": function() { return /* binding */ GoToStepDirective; },
/* harmony export */   "MovingDirection": function() { return /* binding */ MovingDirection; },
/* harmony export */   "NavigationModeDirective": function() { return /* binding */ NavigationModeDirective; },
/* harmony export */   "NextStepDirective": function() { return /* binding */ NextStepDirective; },
/* harmony export */   "OptionalStepDirective": function() { return /* binding */ OptionalStepDirective; },
/* harmony export */   "PreviousStepDirective": function() { return /* binding */ PreviousStepDirective; },
/* harmony export */   "ResetWizardDirective": function() { return /* binding */ ResetWizardDirective; },
/* harmony export */   "SelectedStepDirective": function() { return /* binding */ SelectedStepDirective; },
/* harmony export */   "WizardCompletionStep": function() { return /* binding */ WizardCompletionStep; },
/* harmony export */   "WizardCompletionStepComponent": function() { return /* binding */ WizardCompletionStepComponent; },
/* harmony export */   "WizardCompletionStepDirective": function() { return /* binding */ WizardCompletionStepDirective; },
/* harmony export */   "WizardComponent": function() { return /* binding */ WizardComponent; },
/* harmony export */   "WizardNavigationBarComponent": function() { return /* binding */ WizardNavigationBarComponent; },
/* harmony export */   "WizardStep": function() { return /* binding */ WizardStep; },
/* harmony export */   "WizardStepComponent": function() { return /* binding */ WizardStepComponent; },
/* harmony export */   "WizardStepDirective": function() { return /* binding */ WizardStepDirective; },
/* harmony export */   "WizardStepSymbolDirective": function() { return /* binding */ WizardStepSymbolDirective; },
/* harmony export */   "WizardStepTitleDirective": function() { return /* binding */ WizardStepTitleDirective; },
/* harmony export */   "isStepId": function() { return /* binding */ isStepId; },
/* harmony export */   "isStepIndex": function() { return /* binding */ isStepIndex; },
/* harmony export */   "isStepOffset": function() { return /* binding */ isStepOffset; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 20104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);




/**
 * The `awWizardStepSymbol` directive can be used as an alternative to the `navigationSymbol` input of a [[WizardStep]]
 * to define the step symbol inside the navigation bar.  This way step symbol may contain arbitrary content.
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepSymbol>
 *     ...
 * </ng-template>
 * ```
 */



const _c0 = ["*"];
const _c1 = function (a0, a1, a2, a3, a4, a5, a6) { return { "vertical": a0, "horizontal": a1, "small": a2, "large-filled": a3, "large-filled-symbols": a4, "large-empty": a5, "large-empty-symbols": a6 }; };
function WizardComponent_aw_wizard_navigation_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "aw-wizard-navigation-bar", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("direction", ctx_r0.navBarDirection)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction7"](2, _c1, ctx_r0.navBarLocation == "left", ctx_r0.navBarLocation == "top", ctx_r0.navBarLayout == "small", ctx_r0.navBarLayout == "large-filled", ctx_r0.navBarLayout == "large-filled-symbols", ctx_r0.navBarLayout == "large-empty", ctx_r0.navBarLayout == "large-empty-symbols"));
} }
function WizardComponent_aw_wizard_navigation_bar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "aw-wizard-navigation-bar", 2);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("direction", ctx_r1.navBarDirection)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction7"](2, _c1, ctx_r1.navBarLocation == "right", ctx_r1.navBarLocation == "bottom", ctx_r1.navBarLayout == "small", ctx_r1.navBarLayout == "large-filled", ctx_r1.navBarLayout == "large-filled-symbols", ctx_r1.navBarLayout == "large-empty", ctx_r1.navBarLayout == "large-empty-symbols"));
} }
const _c2 = function (a1, a2) { return { "wizard-steps": true, "vertical": a1, "horizontal": a2 }; };
const _c3 = function (a0) { return { wizardStep: a0 }; };
function WizardNavigationBarComponent_li_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0, 7);
} if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", step_r1.stepTitleTemplate.templateRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c3, step_r1));
} }
function WizardNavigationBarComponent_li_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](step_r1.stepTitle);
} }
function WizardNavigationBarComponent_li_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0, 7);
} if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", step_r1.stepSymbolTemplate.templateRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c3, step_r1));
} }
function WizardNavigationBarComponent_li_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](step_r1.navigationSymbol.symbol);
} }
const _c4 = function (a0, a1, a2, a3, a4, a5) { return { "current": a0, "editing": a1, "done": a2, "optional": a3, "completed": a4, "navigable": a5 }; };
const _c5 = function (a0) { return { "font-family": a0 }; };
function WizardNavigationBarComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, WizardNavigationBarComponent_li_1_ng_container_3_Template, 1, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, WizardNavigationBarComponent_li_1_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, WizardNavigationBarComponent_li_1_ng_container_6_Template, 1, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, WizardNavigationBarComponent_li_1_ng_container_7_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction6"](8, _c4, ctx_r0.isCurrent(step_r1), ctx_r0.isEditing(step_r1), ctx_r0.isDone(step_r1), ctx_r0.isOptional(step_r1), ctx_r0.isCompleted(step_r1), ctx_r0.isNavigable(step_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("id", step_r1.stepId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("awGoToStep", step_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", step_r1.stepTitleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !step_r1.stepTitleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c5, step_r1.stepSymbolTemplate ? "" : step_r1.navigationSymbol.fontFamily));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", step_r1.stepSymbolTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !step_r1.stepSymbolTemplate);
} }
let WizardStepSymbolDirective = class WizardStepSymbolDirective {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepSymbolDirective]]
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
WizardStepSymbolDirective.??fac = function WizardStepSymbolDirective_Factory(t) { return new (t || WizardStepSymbolDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
WizardStepSymbolDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: WizardStepSymbolDirective, selectors: [["ng-template", "awStepSymbol", ""], ["ng-template", "awWizardStepSymbol", ""]] });
WizardStepSymbolDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
WizardStepSymbolDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef])
], WizardStepSymbolDirective);

/**
 * The `awWizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
 * to define the content of a step title inside the navigation bar.
 * This step title can be freely created and can contain more than only plain text
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepTitle>
 *     ...
 * </ng-template>
 * ```
 *
 * @author Marc Arndt
 */
let WizardStepTitleDirective = class WizardStepTitleDirective {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
WizardStepTitleDirective.??fac = function WizardStepTitleDirective_Factory(t) { return new (t || WizardStepTitleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
WizardStepTitleDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: WizardStepTitleDirective, selectors: [["ng-template", "awStepTitle", ""], ["ng-template", "awWizardStepTitle", ""]] });
WizardStepTitleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
WizardStepTitleDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef])
], WizardStepTitleDirective);

var WizardStep_1;
/**
 * Basic functionality every type of wizard step needs to provide
 *
 * @author Marc Arndt
 */
let WizardStep = WizardStep_1 = class WizardStep {
    constructor() {
        /**
         * A symbol property, which contains an optional symbol for the step inside the navigation bar.
         * Takes effect when `stepSymbolTemplate` is not defined or null.
         */
        this.navigationSymbol = { symbol: '' };
        /**
         * A boolean describing if the wizard step is currently selected
         */
        this.selected = false;
        /**
         * A boolean describing if the wizard step has been completed
         */
        this.completed = false;
        /**
         * A boolean describing if the wizard step is shown as completed when the wizard is presented to the user
         *
         * Users will typically use `CompletedStepDirective` to set this flag
         */
        this.initiallyCompleted = false;
        /**
         * A boolean describing if the wizard step is being edited after being competed
         *
         * This flag can only be true when `selected` is true.
         */
        this.editing = false;
        /**
         * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
         */
        this.defaultSelected = false;
        /**
         * A boolean describing if the wizard step is an optional step
         */
        this.optional = false;
        /**
         * A function or boolean deciding, if this step can be entered
         */
        this.canEnter = true;
        /**
         * A function or boolean deciding, if this step can be exited
         */
        this.canExit = true;
        /**
         * This [[EventEmitter]] is called when the step is entered.
         * The bound method should be used to do initialization work.
         */
        this.stepEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * This [[EventEmitter]] is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Returns true if this wizard step should be visible to the user.
     * If the step should be visible to the user false is returned, otherwise true
     */
    get hidden() {
        return !this.selected;
    }
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @param condition A condition variable, deciding if the step can be transitioned
     * @param direction The direction in which this step should be transitioned
     * @returns A [[Promise]] containing `true`, if this step can transitioned in the given direction
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     */
    static canTransitionStep(condition, direction) {
        if (typeof (condition) === typeof (true)) {
            return Promise.resolve(condition);
        }
        else if (condition instanceof Function) {
            return Promise.resolve(condition(direction));
        }
        else {
            return Promise.reject(new Error(`Input value '${condition}' is neither a boolean nor a function`));
        }
    }
    /**
     * A function called when the step is entered
     *
     * @param direction The direction in which the step is entered
     */
    enter(direction) {
        this.stepEnter.emit(direction);
    }
    /**
     * A function called when the step is exited
     *
     * @param direction The direction in which the step is exited
     */
    exit(direction) {
        this.stepExit.emit(direction);
    }
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be entered
     * @returns A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     */
    canEnterStep(direction) {
        return WizardStep_1.canTransitionStep(this.canEnter, direction);
    }
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be left
     * @returns A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     */
    canExitStep(direction) {
        return WizardStep_1.canTransitionStep(this.canExit, direction);
    }
};
WizardStep.??fac = function WizardStep_Factory(t) { return new (t || WizardStep)(); };
WizardStep.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: WizardStep, contentQueries: function WizardStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????contentQuery"](dirIndex, WizardStepTitleDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????contentQuery"](dirIndex, WizardStepSymbolDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.stepTitleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.stepSymbolTemplate = _t.first);
    } }, hostVars: 1, hostBindings: function WizardStep_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????hostProperty"]("hidden", ctx.hidden);
    } }, inputs: { navigationSymbol: "navigationSymbol", canEnter: "canEnter", canExit: "canExit", stepId: "stepId", stepTitle: "stepTitle" }, outputs: { stepEnter: "stepEnter", stepExit: "stepExit" } });
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild)(WizardStepTitleDirective),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", WizardStepTitleDirective)
], WizardStep.prototype, "stepTitleTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild)(WizardStepSymbolDirective),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", WizardStepSymbolDirective)
], WizardStep.prototype, "stepSymbolTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)
], WizardStep.prototype, "stepId", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)
], WizardStep.prototype, "stepTitle", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], WizardStep.prototype, "navigationSymbol", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], WizardStep.prototype, "canEnter", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], WizardStep.prototype, "canExit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter)
], WizardStep.prototype, "stepEnter", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter)
], WizardStep.prototype, "stepExit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding)('hidden'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Boolean),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], WizardStep.prototype, "hidden", null);

/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 */
let WizardCompletionStep = class WizardCompletionStep extends WizardStep {
    constructor() {
        super(...arguments);
        /**
         * @inheritDoc
         */
        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * @inheritDoc
         */
        this.canExit = false;
    }
    /**
     * @inheritDoc
     */
    enter(direction) {
        this.completed = true;
        this.stepEnter.emit(direction);
    }
    /**
     * @inheritDoc
     */
    exit(direction) {
        // set this completion step as incomplete (unless it happens to be initiallyCompleted)
        this.completed = this.initiallyCompleted;
        this.stepExit.emit(direction);
    }
};
WizardCompletionStep.??fac = /*@__PURE__*/ function () { let ??WizardCompletionStep_BaseFactory; return function WizardCompletionStep_Factory(t) { return (??WizardCompletionStep_BaseFactory || (??WizardCompletionStep_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](WizardCompletionStep)))(t || WizardCompletionStep); }; }();
WizardCompletionStep.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: WizardCompletionStep, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]] });

var WizardCompletionStepComponent_1;
/**
 * The `aw-wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
 * After a `aw-wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a `aw-wizard-completion-step` automatically sets the `aw-wizard` and all steps inside the `aw-wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'navigation symbol font family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
let WizardCompletionStepComponent = WizardCompletionStepComponent_1 = class WizardCompletionStepComponent extends WizardCompletionStep {
};
WizardCompletionStepComponent.??fac = /*@__PURE__*/ function () { let ??WizardCompletionStepComponent_BaseFactory; return function WizardCompletionStepComponent_Factory(t) { return (??WizardCompletionStepComponent_BaseFactory || (??WizardCompletionStepComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](WizardCompletionStepComponent)))(t || WizardCompletionStepComponent); }; }();
WizardCompletionStepComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WizardCompletionStepComponent, selectors: [["aw-wizard-completion-step"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([
            { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepComponent_1) },
            { provide: WizardCompletionStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepComponent_1) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function WizardCompletionStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](0);
    } }, encapsulation: 2 });

/**
 * The direction in which a step transition was made
 *
 * @author Marc Arndt
 */
/**
 * This enum contains the different possible moving directions in which a wizard can be traversed
 *
 * @author Marc Arndt
 */
var MovingDirection;
(function (MovingDirection) {
    /**
     * A forward step transition
     */
    MovingDirection[MovingDirection["Forwards"] = 0] = "Forwards";
    /**
     * A backward step transition
     */
    MovingDirection[MovingDirection["Backwards"] = 1] = "Backwards";
    /**
     * No step transition was done
     */
    MovingDirection[MovingDirection["Stay"] = 2] = "Stay";
})(MovingDirection || (MovingDirection = {}));

/**
 * Base implementation of [[NavigationMode]]
 *
 * Note: Built-in [[NavigationMode]] classes should be stateless, allowing the library user to easily create
 * an instance of a particular [[NavigationMode]] class and pass it to `<aw-wizard [navigationMode]="...">`.
 *
 * @author Marc Arndt
 */
class BaseNavigationMode {
    /**
     * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
     *
     * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
     * Navigation by navigation bar is governed by [[isNavigable]].
     *
     * In this implementation, a destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - the destination step can be entered in the direction from the current step
     *
     * Subclasses can impose additional restrictions, see [[canTransitionToStep]].
     *
     * @param wizard The wizard component to operate on
     * @param destinationIndex The index of the destination step
     * @returns A [[Promise]] containing `true`, if the destination step can be transitioned to and `false` otherwise
     */
    canGoToStep(wizard, destinationIndex) {
        const hasStep = wizard.hasStep(destinationIndex);
        const movingDirection = wizard.getMovingDirection(destinationIndex);
        const canExitCurrentStep = (previous) => {
            return previous && wizard.currentStep.canExitStep(movingDirection);
        };
        const canEnterDestinationStep = (previous) => {
            return previous && wizard.getStepAtIndex(destinationIndex).canEnterStep(movingDirection);
        };
        const canTransitionToStep = (previous) => {
            return previous && this.canTransitionToStep(wizard, destinationIndex);
        };
        return Promise.resolve(hasStep)
            .then(canTransitionToStep)
            // Apply user-defined checks at the end.  They can involve user interaction
            // which is better to be avoided if navigation mode does not actually allow the transition
            // (`canTransitionToStep` returns `false`).
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep);
    }
    /**
     * Imposes additional restrictions for `canGoToStep` in current navigation mode.
     *
     * The base implementation allows transition iff the given step is navigable from the navigation bar (see `isNavigable`).
     * However, in some navigation modes `canTransitionToStep` can be more relaxed to allow navigation to certain steps
     * by previous/next buttons, but not using the navigation bar.
     *
     * @param wizard The wizard component to operate on
     * @param destinationIndex The index of the destination step
     * @returns `true`, if the destination step can be transitioned to and `false` otherwise
     */
    canTransitionToStep(wizard, destinationIndex) {
        return this.isNavigable(wizard, destinationIndex);
    }
    /**
     * Tries to transition to the wizard step, as denoted by the given destination index.
     *
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param wizard The wizard component to operate on
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    goToStep(wizard, destinationIndex, preFinalize, postFinalize) {
        this.canGoToStep(wizard, destinationIndex).then(navigationAllowed => {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                const movingDirection = wizard.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                wizard.currentStep.completed = true;
                wizard.currentStep.exit(movingDirection);
                wizard.currentStep.editing = false;
                wizard.currentStep.selected = false;
                this.transition(wizard, destinationIndex);
                // remember if the next step is already completed before entering it to properly set `editing` flag
                const wasCompleted = wizard.completed || wizard.currentStep.completed;
                // go to next step
                wizard.currentStep.enter(movingDirection);
                wizard.currentStep.selected = true;
                if (wasCompleted) {
                    wizard.currentStep.editing = true;
                }
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                wizard.currentStep.exit(MovingDirection.Stay);
                wizard.currentStep.enter(MovingDirection.Stay);
            }
        });
    }
    /**
     * Transitions the wizard to the given step index.
     *
     * Can perform additional actions in particular navigation mode implementations.
     *
     * @param wizard The wizard component to operate on
     * @param destinationIndex The index of the destination wizard step
     */
    transition(wizard, destinationIndex) {
        wizard.currentStepIndex = destinationIndex;
    }
    /**
     * Resets the state of this wizard.
     *
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete.
     *
     * @param wizard The wizard component to operate on
     */
    reset(wizard) {
        this.ensureCanReset(wizard);
        // reset the step internal state
        wizard.wizardSteps.forEach(step => {
            step.completed = step.initiallyCompleted;
            step.selected = false;
            step.editing = false;
        });
        // set the first step as the current step
        wizard.currentStepIndex = wizard.defaultStepIndex;
        wizard.currentStep.selected = true;
        wizard.currentStep.enter(MovingDirection.Forwards);
    }
    /**
     * Checks if wizard configuration allows to perform reset.
     *
     * A check failure is indicated by throwing an `Error` with the message discribing the discovered misconfiguration issue.
     *
     * Can include additional checks in particular navigation mode implementations.
     *
     * @param wizard The wizard component to operate on
     * @throws An `Error` is thrown, if a micconfiguration issue is discovered.
     */
    ensureCanReset(wizard) {
        // the wizard doesn't contain a step with the default step index
        if (!wizard.hasStep(wizard.defaultStepIndex)) {
            throw new Error(`The wizard doesn't contain a step with index ${wizard.defaultStepIndex}`);
        }
    }
}

/**
 * The default navigation mode used by [[WizardComponent]] and [[NavigationModeDirective]].
 *
 * It is parameterized with two navigation policies passed to constructor:
 *
 * - [[navigateBackward]] policy controls whether wizard steps before the current step are navigable:
 *
 *   - `"deny"` -- the steps are not navigable
 *   - `"allow"` -- the steps are navigable
 *   - If the corresponding constructor argument is omitted or is `null` or `undefined`,
 *     then the default value is applied which is `"deny"`
 *
 * - [[navigateForward]] policy controls whether wizard steps after the current step are navigable:
 *
 *   - `"deny"` -- the steps are not navigable
 *   - `"allow"` -- the steps are navigable
 *   - `"visited"` -- a step is navigable iff it was already visited before
 *   - If the corresponding constructor argument is omitted or is `null` or `undefined`,
 *     then the default value is applied which is `"allow"`
 */
class ConfigurableNavigationMode extends BaseNavigationMode {
    /**
     * Constructor
     *
     * @param navigateBackward Controls whether wizard steps before the current step are navigable
     * @param navigateForward Controls whether wizard steps before the current step are navigable
     */
    constructor(navigateBackward = null, navigateForward = null) {
        super();
        this.navigateBackward = navigateBackward;
        this.navigateForward = navigateForward;
        this.navigateBackward = this.navigateBackward || 'allow';
        this.navigateForward = this.navigateForward || 'deny';
    }
    /**
     * @inheritDoc
     */
    canTransitionToStep(wizard, destinationIndex) {
        // if the destination step can be navigated to using the navigation bar,
        // it should be accessible with [goToStep] as well
        if (this.isNavigable(wizard, destinationIndex)) {
            return true;
        }
        // navigation with [goToStep] is permitted if all previous steps
        // to the destination step have been completed or are optional
        return wizard.wizardSteps
            .filter((step, index) => index < destinationIndex && index !== wizard.currentStepIndex)
            .every(step => step.completed || step.optional);
    }
    /**
     * @inheritDoc
     */
    transition(wizard, destinationIndex) {
        if (this.navigateForward === 'deny') {
            // set all steps after the destination step to incomplete
            wizard.wizardSteps
                .filter((step, index) => wizard.currentStepIndex > destinationIndex && index > destinationIndex)
                .forEach(step => step.completed = false);
        }
        super.transition(wizard, destinationIndex);
    }
    /**
     * @inheritDoc
     */
    isNavigable(wizard, destinationIndex) {
        // Check if the destination step can be navigated to
        const destinationStep = wizard.getStepAtIndex(destinationIndex);
        if (destinationStep instanceof WizardCompletionStep) {
            // A completion step can only be entered, if all previous steps have been completed, are optional, or selected
            const previousStepsCompleted = wizard.wizardSteps
                .filter((step, index) => index < destinationIndex)
                .every(step => step.completed || step.optional || step.selected);
            if (!previousStepsCompleted) {
                return false;
            }
        }
        // Apply navigation pocicies
        if (destinationIndex < wizard.currentStepIndex) {
            // If the destination step is before current, apply the `navigateBackward` policy
            switch (this.navigateBackward) {
                case 'allow': return true;
                case 'deny': return false;
                default:
                    throw new Error(`Invalid value for navigateBackward: ${this.navigateBackward}`);
            }
        }
        else if (destinationIndex > wizard.currentStepIndex) {
            // If the destination step is after current, apply the `navigateForward` policy
            switch (this.navigateForward) {
                case 'allow': return true;
                case 'deny': return false;
                case 'visited': return destinationStep.completed;
                default:
                    throw new Error(`Invalid value for navigateForward: ${this.navigateForward}`);
            }
        }
        else {
            // Re-entering the current step is not allowed
            return false;
        }
    }
    /**
     * @inheritDoc
     */
    ensureCanReset(wizard) {
        super.ensureCanReset(wizard);
        // the default step is a completion step and the wizard contains more than one step
        const defaultWizardStep = wizard.getStepAtIndex(wizard.defaultStepIndex);
        const defaultCompletionStep = defaultWizardStep instanceof WizardCompletionStep;
        if (defaultCompletionStep && wizard.wizardSteps.length !== 1) {
            throw new Error(`The default step index ${wizard.defaultStepIndex} references a completion step`);
        }
    }
}

/**
 * The `aw-wizard` component defines the root component of a wizard.
 * Through the setting of input parameters for the `aw-wizard` component it's possible to change the location and size
 * of its navigation bar.
 *
 * ### Syntax
 * ```html
 * <aw-wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
 *     ...
 * </aw-wizard>
 * ```
 *
 * ### Example
 *
 * Without completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 * </aw-wizard>
 * ```
 *
 * With completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-completion-step>...</aw-wizard-completion-step>
 * </aw-wizard>
 * ```
 *
 * @author Marc Arndt
 */
let WizardComponent = class WizardComponent {
    /**
     * Constructor
     */
    constructor() {
        /**
         * The location of the navigation bar inside the wizard.
         * This location can be either top, bottom, left or right
         */
        this.navBarLocation = 'top';
        /**
         * The layout of the navigation bar inside the wizard.
         * The layout can be either small, large-filled, large-empty or large-symbols
         */
        this.navBarLayout = 'small';
        /**
         * The direction in which the steps inside the navigation bar should be shown.
         * The direction can be either `left-to-right` or `right-to-left`
         */
        this.navBarDirection = 'left-to-right';
        this._defaultStepIndex = 0;
        /**
         * True, if the navigation bar shouldn't be used for navigating
         */
        this.disableNavigationBar = false;
        /**
         * The navigation mode used to navigate inside the wizard
         *
         * For outside access, use the [[navigation]] getter.
         */
        this._navigation = new ConfigurableNavigationMode();
        /**
         * An array representation of all wizard steps belonging to this model
         *
         * For outside access, use the [[wizardSteps]] getter.
         */
        this._wizardSteps = [];
        /**
         * The index of the currently visible and selected step inside the wizardSteps QueryList.
         * If this wizard contains no steps, currentStepIndex is -1
         *
         * Note: Do not modify this field directly.  Instead, use navigation methods:
         * [[goToStep]], [[goToPreviousStep]], [[goToNextStep]].
         */
        this.currentStepIndex = -1;
    }
    /**
     * The initially selected step, represented by its index
     * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
     */
    get defaultStepIndex() {
        // This value can be either:
        // - the index of a wizard step with a `selected` directive, or
        // - the default step index, set in the [[WizardComponent]]
        const foundDefaultStep = this.wizardSteps.find(step => step.defaultSelected);
        if (foundDefaultStep) {
            return this.getIndexOfStep(foundDefaultStep);
        }
        else {
            return this._defaultStepIndex;
        }
    }
    set defaultStepIndex(defaultStepIndex) {
        this._defaultStepIndex = defaultStepIndex;
    }
    /**
     * Returns true if this wizard uses a horizontal orientation.
     * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
     *
     * @returns True if this wizard uses a horizontal orientation
     */
    get horizontalOrientation() {
        return this.navBarLocation === 'top' || this.navBarLocation === 'bottom';
    }
    /**
     * Returns true if this wizard uses a vertical orientation.
     * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
     *
     * @returns True if this wizard uses a vertical orientation
     */
    get verticalOrientation() {
        return this.navBarLocation === 'left' || this.navBarLocation === 'right';
    }
    /**
     * Initialization work
     */
    ngAfterContentInit() {
        // add a subscriber to the wizard steps QueryList to listen to changes in the DOM
        this.wizardStepsQueryList.changes.subscribe(changedWizardSteps => {
            this.updateWizardSteps(changedWizardSteps.toArray());
        });
        // initialize the model
        this.updateWizardSteps(this.wizardStepsQueryList.toArray());
        // finally reset the whole wizard component
        setTimeout(() => this.reset());
    }
    /**
     * The WizardStep object belonging to the currently visible and selected step.
     * The currentStep is always the currently selected wizard step.
     * The currentStep can be either completed, if it was visited earlier,
     * or not completed, if it is visited for the first time or its state is currently out of date.
     *
     * If this wizard contains no steps, currentStep is null
     */
    get currentStep() {
        if (this.hasStep(this.currentStepIndex)) {
            return this.wizardSteps[this.currentStepIndex];
        }
        else {
            return null;
        }
    }
    /**
     * The completeness of the wizard.
     * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
     */
    get completed() {
        return this.wizardSteps.every(step => step.completed || step.optional);
    }
    /**
     * An array representation of all wizard steps belonging to this model
     */
    get wizardSteps() {
        return this._wizardSteps;
    }
    /**
     * Updates the wizard steps to the new array
     *
     * @param wizardSteps The updated wizard steps
     */
    updateWizardSteps(wizardSteps) {
        // the wizard is currently not in the initialization phase
        if (this.wizardSteps.length > 0 && this.currentStepIndex > -1) {
            this.currentStepIndex = wizardSteps.indexOf(this.wizardSteps[this.currentStepIndex]);
        }
        this._wizardSteps = wizardSteps;
    }
    /**
     * The navigation mode used to navigate inside the wizard
     */
    get navigation() {
        return this._navigation;
    }
    /**
     * Updates the navigation mode for this wizard component
     *
     * @param navigation The updated navigation mode
     */
    set navigation(navigation) {
        this._navigation = navigation;
    }
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param stepIndex The to be checked index of a step inside this wizard
     * @returns True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    hasStep(stepIndex) {
        return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
    }
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @returns True if this wizard has a previous step before the current step
     */
    hasPreviousStep() {
        return this.hasStep(this.currentStepIndex - 1);
    }
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @returns True if this wizard has a next step after the current step
     */
    hasNextStep() {
        return this.hasStep(this.currentStepIndex + 1);
    }
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @returns True if the wizard is currently inside its last step
     */
    isLastStep() {
        return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
    }
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @param stepIndex The given index
     * @returns The found [[WizardStep]] at the given index `stepIndex`
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     */
    getStepAtIndex(stepIndex) {
        if (!this.hasStep(stepIndex)) {
            throw new Error(`Expected a known step, but got stepIndex: ${stepIndex}.`);
        }
        return this.wizardSteps[stepIndex];
    }
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param stepId The given step id
     * @returns The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    getIndexOfStepWithId(stepId) {
        return this.wizardSteps.findIndex(step => step.stepId === stepId);
    }
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param step The given [[WizardStep]]
     * @returns The found index of `step` or `-1` if the step is not included in the wizard
     */
    getIndexOfStep(step) {
        return this.wizardSteps.indexOf(step);
    }
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param destinationStep The given destination step
     * @returns The calculated [[MovingDirection]]
     */
    getMovingDirection(destinationStep) {
        let movingDirection;
        if (destinationStep > this.currentStepIndex) {
            movingDirection = MovingDirection.Forwards;
        }
        else if (destinationStep < this.currentStepIndex) {
            movingDirection = MovingDirection.Backwards;
        }
        else {
            movingDirection = MovingDirection.Stay;
        }
        return movingDirection;
    }
    /**
     * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
     *
     * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
     * Navigation by navigation bar is governed by [[isNavigable]].
     *
     * @param destinationIndex The index of the destination step
     * @returns A [[Promise]] containing `true`, if the destination step can be transitioned to and false otherwise
     */
    canGoToStep(destinationIndex) {
        return this.navigation.canGoToStep(this, destinationIndex);
    }
    /**
     * Tries to transition to the wizard step, as denoted by the given destination index.
     *
     * Note: You do not have to call [[canGoToStep]] before calling [[goToStep]].
     * The [[canGoToStep]] method will be called automatically.
     *
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    goToStep(destinationIndex, preFinalize, postFinalize) {
        return this.navigation.goToStep(this, destinationIndex, preFinalize, postFinalize);
    }
    /**
     * Tries to transition the wizard to the previous step
     *
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    goToPreviousStep(preFinalize, postFinalize) {
        return this.navigation.goToStep(this, this.currentStepIndex - 1, preFinalize, postFinalize);
    }
    /**
     * Tries to transition the wizard to the next step
     *
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    goToNextStep(preFinalize, postFinalize) {
        return this.navigation.goToStep(this, this.currentStepIndex + 1, preFinalize, postFinalize);
    }
    /**
     * Checks, whether the wizard step, located at the given index, can be navigated to using the navigation bar.
     *
     * @param destinationIndex The index of the destination step
     * @returns True if the step can be navigated to, false otherwise
     */
    isNavigable(destinationIndex) {
        return this.navigation.isNavigable(this, destinationIndex);
    }
    /**
     * Resets the state of this wizard.
     */
    reset() {
        this.navigation.reset(this);
    }
};
WizardComponent.??fac = function WizardComponent_Factory(t) { return new (t || WizardComponent)(); };
WizardComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WizardComponent, selectors: [["aw-wizard"]], contentQueries: function WizardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????contentQuery"](dirIndex, WizardStep, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.wizardStepsQueryList = _t);
    } }, hostVars: 4, hostBindings: function WizardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("horizontal", ctx.horizontalOrientation)("vertical", ctx.verticalOrientation);
    } }, inputs: { navBarLocation: "navBarLocation", navBarLayout: "navBarLayout", navBarDirection: "navBarDirection", disableNavigationBar: "disableNavigationBar", defaultStepIndex: "defaultStepIndex" }, ngContentSelectors: _c0, decls: 4, vars: 6, consts: [[3, "direction", "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "direction", "ngClass"]], template: function WizardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, WizardComponent_aw_wizard_navigation_bar_0_Template, 1, 10, "aw-wizard-navigation-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, WizardComponent_aw_wizard_navigation_bar_3_Template, 1, 10, "aw-wizard-navigation-bar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.navBarLocation == "top" || ctx.navBarLocation == "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](3, _c2, ctx.navBarLocation == "left" || ctx.navBarLocation == "right", ctx.navBarLocation == "top" || ctx.navBarLocation == "bottom"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.navBarLocation == "bottom" || ctx.navBarLocation == "right");
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, WizardNavigationBarComponent]; }, encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren)(WizardStep, { descendants: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList)
], WizardComponent.prototype, "wizardStepsQueryList", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], WizardComponent.prototype, "navBarLocation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], WizardComponent.prototype, "navBarLayout", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], WizardComponent.prototype, "navBarDirection", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [Number])
], WizardComponent.prototype, "defaultStepIndex", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], WizardComponent.prototype, "disableNavigationBar", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding)('class.horizontal'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Boolean),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], WizardComponent.prototype, "horizontalOrientation", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding)('class.vertical'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Boolean),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], WizardComponent.prototype, "verticalOrientation", null);
WizardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], WizardComponent);

/**
 * The `aw-wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
 * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
 * otherwise it will look like a normal `ul` component.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-navigation-bar></aw-wizard-navigation-bar>
 * ```
 *
 * @author Marc Arndt
 */
let WizardNavigationBarComponent = class WizardNavigationBarComponent {
    /**
     * Constructor
     *
     * @param wizard The state the wizard currently resides in
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * The direction in which the wizard steps should be shown in the navigation bar.
         * This value can be either `left-to-right` or `right-to-left`
         */
        this.direction = 'left-to-right';
    }
    /**
     * Returns all [[WizardStep]]s contained in the wizard
     *
     * @returns An array containing all [[WizardStep]]s
     */
    get wizardSteps() {
        switch (this.direction) {
            case 'right-to-left':
                return this.wizard.wizardSteps.slice().reverse();
            case 'left-to-right':
            default:
                return this.wizard.wizardSteps;
        }
    }
    /**
     * Returns the number of wizard steps, that need to be displaced in the navigation bar
     *
     * @returns The number of wizard steps to be displayed
     */
    get numberOfWizardSteps() {
        return this.wizard.wizardSteps.length;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `current`
     */
    isCurrent(wizardStep) {
        return wizardStep.selected;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `editing`
     */
    isEditing(wizardStep) {
        return wizardStep.editing;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `done`
     */
    isDone(wizardStep) {
        return wizardStep.completed;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `optional`
     */
    isOptional(wizardStep) {
        return wizardStep.optional;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `completed` in the navigation bar.
     *
     * The `completed` class is only applied to completion steps.
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `completed`
     */
    isCompleted(wizardStep) {
        return wizardStep instanceof WizardCompletionStep && this.wizard.completed;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as navigable
     */
    isNavigable(wizardStep) {
        return !wizardStep.selected && !this.wizard.disableNavigationBar &&
            this.wizard.isNavigable(this.wizard.getIndexOfStep(wizardStep));
    }
};
WizardNavigationBarComponent.??fac = function WizardNavigationBarComponent_Factory(t) { return new (t || WizardNavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](WizardComponent)); };
WizardNavigationBarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WizardNavigationBarComponent, selectors: [["aw-wizard-navigation-bar"]], inputs: { direction: "direction" }, decls: 2, vars: 4, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "awGoToStep"], [1, "label"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], [1, "step-indicator", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function WizardNavigationBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, WizardNavigationBarComponent_li_1_Template, 8, 17, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("steps-indicator steps-", ctx.numberOfWizardSteps, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.wizardSteps);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, GoToStepDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet]; }, encapsulation: 2 });
WizardNavigationBarComponent.ctorParameters = () => [
    { type: WizardComponent }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], WizardNavigationBarComponent.prototype, "direction", void 0);
WizardNavigationBarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [WizardComponent])
], WizardNavigationBarComponent);

var WizardStepComponent_1;
/**
 * The `aw-wizard-step` component is used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
let WizardStepComponent = WizardStepComponent_1 = class WizardStepComponent extends WizardStep {
};
WizardStepComponent.??fac = /*@__PURE__*/ function () { let ??WizardStepComponent_BaseFactory; return function WizardStepComponent_Factory(t) { return (??WizardStepComponent_BaseFactory || (??WizardStepComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](WizardStepComponent)))(t || WizardStepComponent); }; }();
WizardStepComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WizardStepComponent, selectors: [["aw-wizard-step"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([
            { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardStepComponent_1) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function WizardStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](0);
    } }, encapsulation: 2 });

/**
 * The `awEnableBackLinks` directive can be used to allow the user to leave a [[WizardCompletionStep]] after is has been entered.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step awEnableBackLinks (stepExit)="exit function">
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Final step" awEnableBackLinks>
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
let EnableBackLinksDirective = class EnableBackLinksDirective {
    /**
     * Constructor
     *
     * @param completionStep The wizard completion step, which should be exitable
     */
    constructor(completionStep) {
        this.completionStep = completionStep;
        /**
         * This EventEmitter is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Initialization work
     */
    ngOnInit() {
        this.completionStep.canExit = true;
        this.completionStep.stepExit = this.stepExit;
    }
};
EnableBackLinksDirective.??fac = function EnableBackLinksDirective_Factory(t) { return new (t || EnableBackLinksDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](WizardCompletionStep, 1)); };
EnableBackLinksDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: EnableBackLinksDirective, selectors: [["", "awEnableBackLinks", ""]], outputs: { stepExit: "stepExit" } });
EnableBackLinksDirective.ctorParameters = () => [
    { type: WizardCompletionStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], EnableBackLinksDirective.prototype, "stepExit", void 0);
EnableBackLinksDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Host)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [WizardCompletionStep])
], EnableBackLinksDirective);

/**
 * Checks whether the given `value` implements the interface [[StepId]].
 *
 * @param value The value to be checked
 * @returns True if the given value implements [[StepId]] and false otherwise
 */
function isStepId(value) {
    return value.hasOwnProperty('stepId') && !(value instanceof WizardStep);
}

/**
 * Checks whether the given `value` implements the interface [[StepIndex]].
 *
 * @param value The value to be checked
 * @returns True if the given value implements [[StepIndex]] and false otherwise
 */
function isStepIndex(value) {
    return value.hasOwnProperty('stepIndex');
}

/**
 * Checks whether the given `value` implements the interface [[StepOffset]].
 *
 * @param value The value to be checked
 * @returns True if the given value implements [[StepOffset]] and false otherwise
 */
function isStepOffset(value) {
    return value.hasOwnProperty('stepOffset');
}

/**
 * The `awGoToStep` directive can be used to navigate to a given step.
 * This step can be defined in one of multiple formats
 *
 * ### Syntax
 *
 * With absolute step index:
 *
 * ```html
 * <button [awGoToStep]="{ stepIndex: absolute step index }" (finalize)="finalize method">...</button>
 * ```
 *
 * With unique step id:
 *
 * ```html
 * <button [awGoToStep]="{ stepId: 'step id of destination step' }" (finalize)="finalize method">...</button>
 * ```
 *
 * With a wizard step object:
 *
 * ```html
 * <button [awGoToStep]="wizard step object" (finalize)="finalize method">...</button>
 * ```
 *
 * With an offset to the defining step:
 *
 * ```html
 * <button [awGoToStep]="{ stepOffset: offset }" (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
let GoToStepDirective = class GoToStepDirective {
    /**
     * Constructor
     *
     * @param wizard The wizard component
     * @param wizardStep The wizard step, which contains this [[GoToStepDirective]]
     */
    constructor(wizard, wizardStep) {
        this.wizard = wizard;
        this.wizardStep = wizardStep;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * A convenience field for `preFinalize`
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * A convenience name for `preFinalize`
     *
     * @param emitter The [[EventEmitter]] to be set
     */
    set finalize(emitter) {
        /* istanbul ignore next */
        this.preFinalize = emitter;
    }
    /**
     * Returns the destination step of this directive as an absolute step index inside the wizard
     *
     * @returns The index of the destination step
     * @throws If `targetStep` is of an unknown type an `Error` is thrown
     */
    get destinationStep() {
        let destinationStep;
        if (isStepIndex(this.targetStep)) {
            destinationStep = this.targetStep.stepIndex;
        }
        else if (isStepId(this.targetStep)) {
            destinationStep = this.wizard.getIndexOfStepWithId(this.targetStep.stepId);
        }
        else if (isStepOffset(this.targetStep) && this.wizardStep !== null) {
            destinationStep = this.wizard.getIndexOfStep(this.wizardStep) + this.targetStep.stepOffset;
        }
        else if (this.targetStep instanceof WizardStep) {
            destinationStep = this.wizard.getIndexOfStep(this.targetStep);
        }
        else {
            throw new Error(`Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId`);
        }
        return destinationStep;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     */
    onClick() {
        this.wizard.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
    }
};
GoToStepDirective.??fac = function GoToStepDirective_Factory(t) { return new (t || GoToStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](WizardComponent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](WizardStep, 8)); };
GoToStepDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: GoToStepDirective, selectors: [["", "awGoToStep", ""]], hostBindings: function GoToStepDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GoToStepDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { targetStep: ["awGoToStep", "targetStep"] }, outputs: { preFinalize: "preFinalize", postFinalize: "postFinalize", finalize: "finalize" } });
GoToStepDirective.ctorParameters = () => [
    { type: WizardComponent },
    { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter)
], GoToStepDirective.prototype, "preFinalize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter)
], GoToStepDirective.prototype, "postFinalize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('awGoToStep'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], GoToStepDirective.prototype, "targetStep", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter])
], GoToStepDirective.prototype, "finalize", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)('click'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:returntype", void 0)
], GoToStepDirective.prototype, "onClick", null);
GoToStepDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [WizardComponent, WizardStep])
], GoToStepDirective);

/**
 * The `awNextStep` directive can be used to navigate to the next step.
 *
 * ### Syntax
 *
 * ```html
 * <button awNextStep (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
let NextStepDirective = class NextStepDirective {
    /**
     * Constructor
     *
     * @param wizard The state of the wizard
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * A convenience field for `preFinalize`
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * A convenience name for `preFinalize`
     *
     * @param emitter The [[EventEmitter]] to be set
     */
    set finalize(emitter) {
        /* istanbul ignore next */
        this.preFinalize = emitter;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     */
    onClick() {
        this.wizard.goToNextStep(this.preFinalize, this.postFinalize);
    }
};
NextStepDirective.??fac = function NextStepDirective_Factory(t) { return new (t || NextStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](WizardComponent)); };
NextStepDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: NextStepDirective, selectors: [["", "awNextStep", ""]], hostBindings: function NextStepDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NextStepDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, outputs: { preFinalize: "preFinalize", postFinalize: "postFinalize", finalize: "finalize" } });
NextStepDirective.ctorParameters = () => [
    { type: WizardComponent }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter)
], NextStepDirective.prototype, "preFinalize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter)
], NextStepDirective.prototype, "postFinalize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter])
], NextStepDirective.prototype, "finalize", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)('click'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:returntype", void 0)
], NextStepDirective.prototype, "onClick", null);
NextStepDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [WizardComponent])
], NextStepDirective);

/**
 * The `awOptionalStep` directive can be used to define an optional `wizard-step`.
 * An optional wizard step is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="Second step" awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
let OptionalStepDirective = class OptionalStepDirective {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
        // tslint:disable-next-line:no-input-rename
        this.optional = true;
    }
    /**
     * Initialization work
     */
    ngOnInit() {
        // The input receives '' when specified in the template without a value.  In this case, apply the default value (`true`).
        this.wizardStep.optional = this.optional || this.optional === '';
    }
};
OptionalStepDirective.??fac = function OptionalStepDirective_Factory(t) { return new (t || OptionalStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](WizardStep, 1)); };
OptionalStepDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: OptionalStepDirective, selectors: [["", "awOptionalStep", ""]], inputs: { optional: ["awOptionalStep", "optional"] } });
OptionalStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('awOptionalStep'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], OptionalStepDirective.prototype, "optional", void 0);
OptionalStepDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Host)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [WizardStep])
], OptionalStepDirective);

/**
 * The `awPreviousStep` directive can be used to navigate to the previous step.
 * Compared to the [[NextStepDirective]] it's important to note, that this directive doesn't contain a `finalize` output method.
 *
 * ### Syntax
 *
 * ```html
 * <button awPreviousStep>...</button>
 * ```
 *
 * @author Marc Arndt
 */
let PreviousStepDirective = class PreviousStepDirective {
    /**
     * Constructor
     *
     * @param wizard The state of the wizard
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * A convenience field for `preFinalize`
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * A convenience field for `preFinalize`
     *
     * @param emitter The [[EventEmitter]] to be set
     */
    set finalize(emitter) {
        /* istanbul ignore next */
        this.preFinalize = emitter;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     */
    onClick() {
        this.wizard.goToPreviousStep(this.preFinalize, this.postFinalize);
    }
};
PreviousStepDirective.??fac = function PreviousStepDirective_Factory(t) { return new (t || PreviousStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](WizardComponent)); };
PreviousStepDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: PreviousStepDirective, selectors: [["", "awPreviousStep", ""]], hostBindings: function PreviousStepDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PreviousStepDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, outputs: { preFinalize: "preFinalize", postFinalize: "postFinalize", finalize: "finalize" } });
PreviousStepDirective.ctorParameters = () => [
    { type: WizardComponent }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter)
], PreviousStepDirective.prototype, "preFinalize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter)
], PreviousStepDirective.prototype, "postFinalize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter])
], PreviousStepDirective.prototype, "finalize", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)('click'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:returntype", void 0)
], PreviousStepDirective.prototype, "onClick", null);
PreviousStepDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [WizardComponent])
], PreviousStepDirective);

/**
 * The `awResetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button awResetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
let ResetWizardDirective = class ResetWizardDirective {
    /**
     * Constructor
     *
     * @param wizard The wizard component
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
         */
        this.finalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Resets the wizard
     */
    onClick() {
        // do some optional cleanup work
        this.finalize.emit();
        // reset the wizard to its initial state
        this.wizard.reset();
    }
};
ResetWizardDirective.??fac = function ResetWizardDirective_Factory(t) { return new (t || ResetWizardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](WizardComponent)); };
ResetWizardDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: ResetWizardDirective, selectors: [["", "awResetWizard", ""]], hostBindings: function ResetWizardDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ResetWizardDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, outputs: { finalize: "finalize" } });
ResetWizardDirective.ctorParameters = () => [
    { type: WizardComponent }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter)
], ResetWizardDirective.prototype, "finalize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)('click'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:returntype", void 0)
], ResetWizardDirective.prototype, "onClick", null);
ResetWizardDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [WizardComponent])
], ResetWizardDirective);

/**
 * The `awSelectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step stepTitle="Step title" awSelectedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
let SelectedStepDirective = class SelectedStepDirective {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which should be selected by default
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    ngOnInit() {
        this.wizardStep.defaultSelected = true;
    }
};
SelectedStepDirective.??fac = function SelectedStepDirective_Factory(t) { return new (t || SelectedStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](WizardStep, 1)); };
SelectedStepDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: SelectedStepDirective, selectors: [["", "awSelectedStep", ""]] });
SelectedStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] }
];
SelectedStepDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Host)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [WizardStep])
], SelectedStepDirective);

var WizardCompletionStepDirective_1;
/**
 * The `awWizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
 * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard`, and all steps inside the `wizard`,
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <div awWizardCompletionStep [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'font-family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </div>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
let WizardCompletionStepDirective = WizardCompletionStepDirective_1 = class WizardCompletionStepDirective extends WizardCompletionStep {
};
WizardCompletionStepDirective.??fac = /*@__PURE__*/ function () { let ??WizardCompletionStepDirective_BaseFactory; return function WizardCompletionStepDirective_Factory(t) { return (??WizardCompletionStepDirective_BaseFactory || (??WizardCompletionStepDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](WizardCompletionStepDirective)))(t || WizardCompletionStepDirective); }; }();
WizardCompletionStepDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: WizardCompletionStepDirective, selectors: [["", "awWizardCompletionStep", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([
            { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepDirective_1) },
            { provide: WizardCompletionStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepDirective_1) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]] });

var WizardStepDirective_1;
/**
 * The `awWizardStep` directive can be used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
let WizardStepDirective = WizardStepDirective_1 = class WizardStepDirective extends WizardStep {
};
WizardStepDirective.??fac = /*@__PURE__*/ function () { let ??WizardStepDirective_BaseFactory; return function WizardStepDirective_Factory(t) { return (??WizardStepDirective_BaseFactory || (??WizardStepDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](WizardStepDirective)))(t || WizardStepDirective); }; }();
WizardStepDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: WizardStepDirective, selectors: [["", "awWizardStep", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([
            { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardStepDirective_1) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]] });

/**
 * The [[awNavigationMode]] directive can be used to customize wizard'd navigation mode.
 *
 * There are several usage options:
 *
 * ### Option 1. Customize the default navigation mode with [[navigateBackward]] and/or [[navigateForward]] inputs.
 *
 * ```html
 * <aw-wizard [awNavigationMode] navigateBackward="deny" navigateForward="allow">...</aw-wizard>
 * ```
 *
 * ### Option 2. Pass in a custom navigation mode
 *
 * ```typescript
 * import { BaseNavigationMode } from 'angular-archwizard'
 *
 * class CustomNavigationMode extends BaseNavigationMode {
 *
 *   // ...
 * }
 * ```
 *
 * ```typescript
 * @Component({
 *   // ...
 * })
 * class MyComponent {
 *
 *   navigationMode = new CustomNavigationMode();
 * }
 * ```
 *
 * ```html
 * <aw-wizard [awNavigationMode]="navigationMode">...</aw-wizard>
 * ```
 *
 * ### Additional Notes
 *
 * - Specifying a custom navigation mode takes priority over [[navigateBackward]] and [[navigateForward]] inputs
 *
 * - Omitting the [[awNavigationMode]] directive or, equally, specifying just [[awNavigationMode]] without
 *   any inputs or parameters causes the wizard to use the default "strict" navigation mode equivalent to
 *
 * ```html
 * <aw-wizard [awNavigationMode] navigateBackward="deny" navigateForward="allow">...</aw-wizard>
 * ````
 */
let NavigationModeDirective = class NavigationModeDirective {
    constructor(wizard) {
        this.wizard = wizard;
    }
    ngOnChanges(changes) {
        this.wizard.navigation = this.getNavigationMode();
    }
    getNavigationMode() {
        if (this.awNavigationMode) {
            return this.awNavigationMode;
        }
        return new ConfigurableNavigationMode(this.navigateBackward, this.navigateForward);
    }
};
NavigationModeDirective.??fac = function NavigationModeDirective_Factory(t) { return new (t || NavigationModeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](WizardComponent)); };
NavigationModeDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: NavigationModeDirective, selectors: [["", "awNavigationMode", ""]], inputs: { awNavigationMode: "awNavigationMode", navigateBackward: "navigateBackward", navigateForward: "navigateForward" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]] });
NavigationModeDirective.ctorParameters = () => [
    { type: WizardComponent }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], NavigationModeDirective.prototype, "awNavigationMode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)
], NavigationModeDirective.prototype, "navigateBackward", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)
], NavigationModeDirective.prototype, "navigateForward", void 0);
NavigationModeDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [WizardComponent])
], NavigationModeDirective);

/**
 * The `awCompletedStep` directive can be used to make a wizard step initially completed.
 *
 * Initially completed steps are shown as completed when the wizard is presented to the user.
 *
 * A typical use case is to make a step initially completed if it is automatically filled with some derived/predefined information.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awCompletedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * An optional boolean condition can be specified:
 *
 * ```html
 * <aw-wizard-step [awCompletedStep]="shouldBeCompleted">
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="First step" [awCompletedStep]="firstStepPrefilled">
 *     ...
 * </aw-wizard-step>
 * ```
 */
let CompletedStepDirective = class CompletedStepDirective {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[CompletedStepDirective]]
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
        // tslint:disable-next-line:no-input-rename
        this.initiallyCompleted = true;
    }
    /**
     * Initialization work
     */
    ngOnInit() {
        // The input receives '' when specified in the template without a value.  In this case, apply the default value (`true`).
        this.wizardStep.initiallyCompleted = this.initiallyCompleted || this.initiallyCompleted === '';
    }
};
CompletedStepDirective.??fac = function CompletedStepDirective_Factory(t) { return new (t || CompletedStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](WizardStep, 1)); };
CompletedStepDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: CompletedStepDirective, selectors: [["", "awCompletedStep", ""]], inputs: { initiallyCompleted: ["awCompletedStep", "initiallyCompleted"] } });
CompletedStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)('awCompletedStep'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], CompletedStepDirective.prototype, "initiallyCompleted", void 0);
CompletedStepDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Host)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [WizardStep])
], CompletedStepDirective);

var ArchwizardModule_1;
/**
 * The module defining all the content inside `angular-archwizard`
 *
 * @author Marc Arndt
 */
let ArchwizardModule = ArchwizardModule_1 = class ArchwizardModule {
    /* istanbul ignore next */
    static forRoot() {
        return {
            ngModule: ArchwizardModule_1,
            providers: [
            // Nothing here yet
            ]
        };
    }
};
ArchwizardModule.??fac = function ArchwizardModule_Factory(t) { return new (t || ArchwizardModule)(); };
ArchwizardModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ArchwizardModule });
ArchwizardModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WizardStepSymbolDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WizardStepTitleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'ng-template[awStepTitle], ng-template[awWizardStepTitle]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WizardStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return []; }, { navigationSymbol: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], canEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], canExit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stepEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], stepExit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], hidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['hidden']
        }], stepTitleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [WizardStepTitleDirective]
        }], stepSymbolTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [WizardStepSymbolDirective]
        }], stepId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stepTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WizardCompletionStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WizardCompletionStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'aw-wizard-completion-step',
                template: "<ng-content></ng-content>\n",
                providers: [
                    { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepComponent_1) },
                    { provide: WizardCompletionStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepComponent_1) }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WizardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'aw-wizard',
                template: "<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n  [ngClass]=\"{\n    'vertical': navBarLocation == 'left',\n    'horizontal': navBarLocation == 'top',\n    'small': navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n\n<div [ngClass]=\"{\n  'wizard-steps': true,\n  'vertical': navBarLocation == 'left' || navBarLocation == 'right',\n  'horizontal': navBarLocation == 'top' || navBarLocation == 'bottom'\n}\">\n  <ng-content></ng-content>\n</div>\n\n<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n  [ngClass]=\"{\n    'vertical': navBarLocation == 'right',\n    'horizontal': navBarLocation == 'bottom',\n    'small': navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n"
            }]
    }], function () { return []; }, { navBarLocation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], navBarLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], navBarDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disableNavigationBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], defaultStepIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], horizontalOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.horizontal']
        }], verticalOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.vertical']
        }], wizardStepsQueryList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [WizardStep, { descendants: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WizardNavigationBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'aw-wizard-navigation-bar',
                template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n  <li [attr.id]=\"step.stepId\" *ngFor=\"let step of wizardSteps\" [ngClass]=\"{\n        'current': isCurrent(step),\n        'editing': isEditing(step),\n        'done': isDone(step),\n        'optional': isOptional(step),\n        'completed': isCompleted(step),\n        'navigable': isNavigable(step)\n  }\">\n    <a [awGoToStep]=\"step\">\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"\n          [ngTemplateOutletContext]=\"{wizardStep: step}\"></ng-container>\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n      </div>\n      <div class=\"step-indicator\"\n        [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"\n          [ngTemplateOutletContext]=\"{wizardStep: step}\"></ng-container>\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\n      </div>\n    </a>\n  </li>\n</ul>\n"
            }]
    }], function () { return [{ type: WizardComponent }]; }, { direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WizardStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'aw-wizard-step',
                template: "<ng-content></ng-content>\n",
                providers: [
                    { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardStepComponent_1) }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EnableBackLinksDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awEnableBackLinks]'
            }]
    }], function () { return [{ type: WizardCompletionStep, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }]; }, { stepExit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GoToStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awGoToStep]'
            }]
    }], function () { return [{ type: WizardComponent }, { type: WizardStep, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { preFinalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], postFinalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], finalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }], targetStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['awGoToStep']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NextStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awNextStep]'
            }]
    }], function () { return [{ type: WizardComponent }]; }, { preFinalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], postFinalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], finalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OptionalStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awOptionalStep]'
            }]
    }], function () { return [{ type: WizardStep, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }]; }, { optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['awOptionalStep']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PreviousStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awPreviousStep]'
            }]
    }], function () { return [{ type: WizardComponent }]; }, { preFinalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], postFinalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], finalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ResetWizardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awResetWizard]'
            }]
    }], function () { return [{ type: WizardComponent }]; }, { finalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * Resets the wizard
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SelectedStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awSelectedStep]'
            }]
    }], function () { return [{ type: WizardStep, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WizardCompletionStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awWizardCompletionStep]',
                providers: [
                    { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepDirective_1) },
                    { provide: WizardCompletionStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardCompletionStepDirective_1) }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WizardStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awWizardStep]',
                providers: [
                    { provide: WizardStep, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => WizardStepDirective_1) }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavigationModeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awNavigationMode]'
            }]
    }], function () { return [{ type: WizardComponent }]; }, { awNavigationMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], navigateBackward: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], navigateForward: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CompletedStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[awCompletedStep]'
            }]
    }], function () { return [{ type: WizardStep, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }]; }, { initiallyCompleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['awCompletedStep']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ArchwizardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective,
                    NavigationModeDirective,
                    CompletedStepDirective,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
                ],
                exports: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective,
                    NavigationModeDirective,
                    CompletedStepDirective,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ArchwizardModule, { declarations: function () { return [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]; }, exports: function () { return [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective]; } }); })();

// export the components

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=angular-archwizard.js.map

/***/ }),

/***/ 93576:
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ 15730);
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ 67104);
var observable_1 = __webpack_require__(/*! ./symbol/observable */ 96232);
var pipe_1 = __webpack_require__(/*! ./util/pipe */ 61227);
var config_1 = __webpack_require__(/*! ./config */ 68273);
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ 16011:
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(/*! ./config */ 68273);
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ 32434);
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ 67241:
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ 67382);
var Observer_1 = __webpack_require__(/*! ./Observer */ 16011);
var Subscription_1 = __webpack_require__(/*! ./Subscription */ 43984);
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ 81476);
var config_1 = __webpack_require__(/*! ./config */ 68273);
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ 32434);
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ 43984:
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var isArray_1 = __webpack_require__(/*! ./util/isArray */ 40993);
var isObject_1 = __webpack_require__(/*! ./util/isObject */ 54720);
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ 67382);
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ 18574);
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ 68273:
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 17778:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromArray.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ 93576);
var subscribeToArray_1 = __webpack_require__(/*! ../util/subscribeToArray */ 43655);
var scheduleArray_1 = __webpack_require__(/*! ../scheduled/scheduleArray */ 18662);
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
    }
    else {
        return scheduleArray_1.scheduleArray(input, scheduler);
    }
}
exports.fromArray = fromArray;
//# sourceMappingURL=fromArray.js.map

/***/ }),

/***/ 98779:
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/of.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ 80130);
var fromArray_1 = __webpack_require__(/*! ./fromArray */ 17778);
var scheduleArray_1 = __webpack_require__(/*! ../scheduled/scheduleArray */ 18662);
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        args.pop();
        return scheduleArray_1.scheduleArray(args, scheduler);
    }
    else {
        return fromArray_1.fromArray(args);
    }
}
exports.of = of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 18662:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduleArray.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ 93576);
var Subscription_1 = __webpack_require__(/*! ../Subscription */ 43984);
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
exports.scheduleArray = scheduleArray;
//# sourceMappingURL=scheduleArray.js.map

/***/ }),

/***/ 96232:
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ 81476:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ 18574:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ 15730:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 67241);
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ 32434:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ 72516:
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ 40993:
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ 67382:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ 54720:
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ 80130:
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ 61227:
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var identity_1 = __webpack_require__(/*! ./identity */ 72516);
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ 43655:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.subscribeToArray = function (array) { return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    subscriber.complete();
}; };
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ 67104:
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 67241);
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ 81476);
var Observer_1 = __webpack_require__(/*! ../Observer */ 16011);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ 22808:
/*!**************************************************************************************!*\
  !*** ./src/app/components/forms/form-Layouts/default-form/default-form.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFormComponent": function() { return /* binding */ DefaultFormComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);



const _c0 = function () { return ["Forms", "Form Layout"]; };
class DefaultFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
DefaultFormComponent.??fac = function DefaultFormComponent_Factory(t) { return new (t || DefaultFormComponent)(); };
DefaultFormComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: DefaultFormComponent, selectors: [["app-default-form"]], decls: 200, vars: 4, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], ["href", "javascript:void(0)"], [1, "card-body"], [1, "theme-form"], [1, "form-group"], ["for", "exampleInputEmail1", 1, "col-form-label", "pt-0"], ["id", "exampleInputEmail1", "type", "email", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "exampleInputPassword1"], ["id", "exampleInputPassword1", "type", "password", "placeholder", "Password", 1, "form-control"], [1, "checkbox", "p-0"], ["id", "dafault-checkbox", "type", "checkbox"], ["for", "dafault-checkbox", 1, "mb-0"], [1, "card-footer"], [1, "btn", "btn-primary", "mr-1"], [1, "btn", "btn-secondary"], [1, "form-group", "row"], ["for", "inputEmail3", 1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["id", "inputEmail3", "type", "email", "placeholder", "Email", 1, "form-control"], ["for", "inputPassword3", 1, "col-sm-3", "col-form-label"], ["id", "inputPassword3", "type", "password", "placeholder", "Password", 1, "form-control"], ["id", "inputnumber", "type", "number", "placeholder", "Contact", 1, "form-control"], ["id", "url", "type", "text", "placeholder", "Company name", 1, "form-control"], ["id", "Website", "type", "url", "placeholder", "Website", 1, "form-control"], [1, "col-form-label", "col-sm-3", "pt-0"], [1, "radio", "radio-primary", "ml-2"], ["id", "radio11", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio11"], ["id", "radio22", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio22"], ["id", "radio33", "type", "radio", "name", "radio1", "value", "option1", "disabled", ""], ["for", "radio33"], ["id", "radio44", "type", "radio", "name", "radio1", "value", "option1", "checked", ""], ["for", "radio44"], ["id", "radio55", "type", "radio", "name", "radio1", "value", "option1", "checked", ""], [1, "form-group", "row", "mb-0"], [1, "col-sm-3", "col-form-label", "pb-0"], [1, "form-group", "m-checkbox-inline", "mb-0"], [1, "checkbox", "checkbox-primary"], ["id", "inline-form-1", "type", "checkbox"], ["for", "inline-form-1", 1, "mb-0"], ["id", "inline-form-2", "type", "checkbox"], ["for", "inline-form-2", 1, "mb-0"], [1, "theme-form", "mega-form"], [1, "col-form-label"], ["type", "text", "placeholder", "your Name", 1, "form-control"], ["type", "email", "placeholder", "Enter email", 1, "form-control"], ["type", "Number", "placeholder", "Enter contact number", 1, "form-control"], [1, "mt-4", "mb-4"], ["type", "text", "placeholder", "Company Name", 1, "form-control"], ["type", "text", "placeholder", "Website", 1, "form-control"], [1, "pb-4"], [1, "form-inline", "theme-form", "billing-info"], ["type", "text", "placeholder", "Name On Card", 1, "form-control"], ["type", "text", "name", "inputPassword", "placeholder", "Card Number", 1, "form-control"], ["type", "text", "name", "inputPassword", "placeholder", "Zip Code", 1, "form-control"], [1, "col-xl-12"], [1, "form-inline", "theme-form", "mt-3", "mb-0"], ["for", "inputInlineUsername", 1, "col-form-label"], ["id", "inputInlineUsername", "type", "text", "name", "inputUsername", "placeholder", "Username", "autocomplete", "off", 1, "form-control"], ["for", "inputInlinePassword", 1, "col-form-label"], ["id", "inputInlinePassword", "type", "password", "name", "inputPassword", "placeholder", "Password", "autocomplete", "off", 1, "form-control"], [1, "btn", "btn-primary"], [1, "form-inline", "theme-form", "mt-3", "billing-info"], ["type", "text", "name", "inputUnlabelUsername", "placeholder", "Username", "autocomplete", "off", 1, "form-control"], ["id", "inputUnlabelPassword", "type", "password", "name", "inputPassword", "placeholder", "Password", "autocomplete", "off", 1, "form-control"]], template: function DefaultFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Default Form Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, " component, you can extend the default collapse behavior to create an accordion.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Remember my preference");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Horizontal Form Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, " component, you can extend the default collapse behavior to create an accordion.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](52, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](57, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](62, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Company name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](67, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](72, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "fieldset", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, "Radios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](79, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](83, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](87, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](91, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](95, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "Checkboxes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](104, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](106, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](108, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, "Mega form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "form", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "Account Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](130, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](134, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](138, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](139, "hr", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, "Company Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](145, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](148, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](149, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](150, "hr", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "h6", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "Billing Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "form", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](155, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](157, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](159, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](162, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](164, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](169, "Inline Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, "Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, ".form-inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "class in the form to style with inline fields.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](177, "Inline Form with Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "form", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](182, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](185, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](186, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](189, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](191, "Inline Form without Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "form", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](194, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](196, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](199, "Login");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Default Form")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Default Form");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 17988:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/forms/form-Layouts/form-wizard-four/form-wizard-four.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormWizardFourComponent": function() { return /* binding */ FormWizardFourComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_validators_passwordMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/validators/passwordMatch */ 76181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-archwizard */ 72386);
/* harmony import */ var _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/only-alphabets.directive */ 33177);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/only-numbers.directive */ 5262);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _shared_directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/directives/disable-key-press.directive */ 87500);












function FormWizardFourComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function FormWizardFourComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function FormWizardFourComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Contact is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function FormWizardFourComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function FormWizardFourComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Email is not Proper");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function FormWizardFourComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function FormWizardFourComponent_div_45_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function FormWizardFourComponent_div_45_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Passwords Doesnt match");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function FormWizardFourComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, FormWizardFourComponent_div_45_ng_container_4_Template, 2, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, FormWizardFourComponent_div_45_ng_container_5_Template, 2, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r6.secondFormGroup.get("cnfPassword").hasError("required") && ctx_r6.secondFormGroup.get("cnfPassword").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r6.secondFormGroup.get("cnfPassword").hasError("mustMatch") && ctx_r6.secondFormGroup.get("cnfPassword").touched);
} }
function FormWizardFourComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Birth Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function FormWizardFourComponent_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Passport field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function FormWizardFourComponent_ng_container_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Country is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function FormWizardFourComponent_ng_container_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " State is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function FormWizardFourComponent_ng_container_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
const _c0 = function () { return ["Forms", "Form Layout"]; };
class FormWizardFourComponent {
    constructor(_formBuilder, toaster) {
        this._formBuilder = _formBuilder;
        this.toaster = toaster;
        this.maxDate = new Date();
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            contactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            cnfPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        }, {
            validator: (0,_shared_validators_passwordMatch__WEBPACK_IMPORTED_MODULE_0__.MustMatch)('password', 'cnfPassword')
        });
        this.thirdFormGroup = this._formBuilder.group({
            birthdate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            age: [''],
            hasPassport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
        this.fourthFormGroup = this._formBuilder.group({
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    finish() {
        this.toaster.success('Successfully Registered');
    }
}
FormWizardFourComponent.??fac = function FormWizardFourComponent_Factory(t) { return new (t || FormWizardFourComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService)); };
FormWizardFourComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: FormWizardFourComponent, selectors: [["app-form-wizard-four"]], decls: 94, vars: 24, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["id", "wizard", 1, "wizard-4"], ["navBarLocation", "left"], ["id", "step-1"], ["stepTitle", "Registration"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "Johan", "required", "required", "formControlName", "firstName", "onlyAlphabets", "", 1, "form-control"], ["class", "invalid", 4, "ngIf"], ["for", "lname"], ["id", "lname", "type", "text", "placeholder", "Deo", "formControlName", "lastName", "onlyAlphabets", "", 1, "form-control"], ["for", "contact"], ["id", "contact", "type", "text", "placeholder", "123456789", "formControlName", "contactNumber", "onlyNumbers", "", 1, "form-control", "digits"], ["type", "submit", "awNextStep", "", 1, "btn", "btn-primary", "pull-right", 3, "disabled"], ["id", "step-2"], ["stepTitle", "Email`"], [1, "form-group", "m-t-15"], ["for", "exampleFormControlInput1"], ["id", "exampleFormControlInput1", "type", "email", "placeholder", "name@example.com", "formControlName", "email", 1, "form-control"], ["for", "exampleInputPassword1"], ["id", "exampleInputPassword1", "type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], ["class", "form-group", 4, "ngIf"], ["type", "button", "awNextStep", "", 1, "btn", "btn-primary", "pull-right", 3, "disabled"], ["type", "button", "awPreviousStep", "", 1, "btn", "btn-secondary", "pull-right", "mr-1"], ["id", "step-3"], ["stepTitle", "Birth Date"], [1, "form-group", "custom-datepicker-dropdown", "custom-datepicker"], ["type", "text", "formControlName", "birthdate", "ngbDatepicker", "", "disableKeyPress", "", 1, "form-control", "digits", 3, "maxDate", "click"], ["dob", "ngbDatepicker"], [1, "control-label"], ["placeholder", "Age", "type", "text", "formControlName", "age", 1, "form-control", "digits"], ["placeholder", "Yes/No", "type", "text", "formControlName", "hasPassport", 1, "form-control", "digits"], ["type", "button", "awNextStep", "", 1, "btn", "btn-primary", "pull-right"], ["id", "step-4"], ["awEnableBackLinks", "", "stepTitle", "Login Info"], ["type", "text", "placeholder", "Country", "required", "required", "formControlName", "country", 1, "form-control", "mt-1"], ["type", "text", "placeholder", "State", "required", "required", "formControlName", "state", 1, "form-control", "mt-1"], ["type", "text", "placeholder", "City", "required", "required", "formControlName", "city", 1, "form-control", "mt-1"], ["type", "button", 1, "btn", "btn-success", "pull-right", 3, "disabled", "click"], [1, "invalid"], ["id", "exampleInputcPassword1", "type", "password", "placeholder", "Enter again", "formControlName", "cnfPassword", 1, "form-control"]], template: function FormWizardFourComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7, "Form Vertical Wizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "aw-wizard", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "aw-wizard-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](16, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](18, FormWizardFourComponent_ng_container_18_Template, 2, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](23, FormWizardFourComponent_ng_container_23_Template, 2, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](26, "Contact No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, FormWizardFourComponent_ng_container_28_Template, 2, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](30, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "aw-wizard-step", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](36, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](37, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](38, FormWizardFourComponent_ng_container_38_Template, 2, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](39, FormWizardFourComponent_ng_container_39_Template, 2, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](41, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](42, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](43, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](44, FormWizardFourComponent_ng_container_44_Template, 2, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](45, FormWizardFourComponent_div_45_Template, 6, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](46, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](47, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](48, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](49, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](51, "aw-wizard-step", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](52, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](54, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](55, "Birthday:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](56, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function FormWizardFourComponent_Template_input_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r15); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](57); return _r7.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](58, FormWizardFourComponent_ng_container_58_Template, 2, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](60, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](61, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](62, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](64, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](65, "Have Passport");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](66, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](67, FormWizardFourComponent_ng_container_67_Template, 2, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](68, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](69, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](70, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](71, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](72, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](73, "aw-wizard-completion-step", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](74, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](75, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](76, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](77, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](78, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](79, FormWizardFourComponent_ng_container_79_Template, 2, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](80, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](81, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](82, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](83, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](84, FormWizardFourComponent_ng_container_84_Template, 2, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](85, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](86, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](87, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](88, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](89, FormWizardFourComponent_ng_container_89_Template, 2, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](90, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function FormWizardFourComponent_Template_button_click_90_listener() { return ctx.finish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](91, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](92, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](93, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("title", "Form Wizard Four")("items", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](23, _c0))("active_item", "Form Wizard Four");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.firstFormGroup.get("firstName").hasError("required") && ctx.firstFormGroup.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.firstFormGroup.get("lastName").hasError("required") && ctx.firstFormGroup.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.firstFormGroup.get("contactNumber").hasError("required") && ctx.firstFormGroup.get("contactNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx.firstFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.secondFormGroup.get("email").hasError("required") && ctx.secondFormGroup.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.secondFormGroup.get("email").hasError("email") && ctx.secondFormGroup.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.secondFormGroup.get("password").hasError("required") && ctx.secondFormGroup.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.secondFormGroup.get("password").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx.secondFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("maxDate", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.thirdFormGroup.get("birthdate").hasError("required") && ctx.thirdFormGroup.get("birthdate").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.thirdFormGroup.get("hasPassport").hasError("required") && ctx.thirdFormGroup.get("hasPassport").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.fourthFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.fourthFormGroup.get("country").hasError("required") && ctx.fourthFormGroup.get("country").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.fourthFormGroup.get("state").hasError("required") && ctx.fourthFormGroup.get("state").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.fourthFormGroup.get("city").hasError("required") && ctx.fourthFormGroup.get("city").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx.fourthFormGroup.valid);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_8__.WizardComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_8__.WizardStepComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_2__.OnlyAlphabetsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_3__.OnlyNumbersDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_8__.NextStepDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_8__.PreviousStepDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbInputDatepicker, _shared_directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_4__.DisableKeyPressDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_8__.WizardCompletionStepComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_8__.EnableBackLinksDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXdpemFyZC1mb3VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 82663:
/*!************************************************************************************************!*\
  !*** ./src/app/components/forms/form-Layouts/form-wizard-three/form-wizard-three.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormWizardThreeComponent": function() { return /* binding */ FormWizardThreeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_validators_passwordMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/validators/passwordMatch */ 76181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-archwizard */ 72386);
/* harmony import */ var _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/only-alphabets.directive */ 33177);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/only-numbers.directive */ 5262);










function FormWizardThreeComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4, "Registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function FormWizardThreeComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardThreeComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardThreeComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function FormWizardThreeComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardThreeComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Email is not Proper");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardThreeComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardThreeComponent_div_39_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardThreeComponent_div_39_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Passwords Doesnt match");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardThreeComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](3, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](4, FormWizardThreeComponent_div_39_ng_container_4_Template, 2, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](5, FormWizardThreeComponent_div_39_ng_container_5_Template, 2, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r7.secondFormGroup.get("cnfPassword").hasError("required") && ctx_r7.secondFormGroup.get("cnfPassword").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r7.secondFormGroup.get("cnfPassword").hasError("mustMatch") && ctx_r7.secondFormGroup.get("cnfPassword").touched);
} }
function FormWizardThreeComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4, "Birth Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function FormWizardThreeComponent_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Day is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardThreeComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Day Should be Only two characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardThreeComponent_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Month is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardThreeComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Month Should be Only two characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardThreeComponent_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Year is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardThreeComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Year Should be Only 4 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
const _c0 = function () { return ["Forms", "Form Layout"]; };
class FormWizardThreeComponent {
    constructor(_formBuilder, toaster) {
        this._formBuilder = _formBuilder;
        this.toaster = toaster;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            cnfPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        }, {
            validator: (0,_shared_validators_passwordMatch__WEBPACK_IMPORTED_MODULE_0__.MustMatch)('password', 'cnfPassword')
        });
        this.thirdFormGroup = this._formBuilder.group({
            dd: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[0-9]{2}')]],
            mm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[0-9]{2}')]],
            yyyy: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[0-9]{4}')]],
        });
    }
    finish() {
        this.toaster.success('Successfully Registered');
    }
}
FormWizardThreeComponent.??fac = function FormWizardThreeComponent_Factory(t) { return new (t || FormWizardThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
FormWizardThreeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: FormWizardThreeComponent, selectors: [["app-form-wizard-three"]], decls: 69, vars: 22, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["navBarLayout", "large-filled-symbols"], [3, "formGroup"], ["awWizardStepSymbol", ""], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "Johan", "formControlName", "firstName", "onlyAlphabets", "", 1, "form-control"], ["class", "invalid", 4, "ngIf"], ["for", "lname"], ["id", "lname", "type", "text", "placeholder", "Deo", "formControlName", "lastName", "onlyAlphabets", "", 1, "form-control"], ["type", "submit", "awNextStep", "", 1, "btn", "btn-primary", "pull-right", 3, "disabled"], [1, "form-group", "m-t-15"], ["for", "exampleFormControlInput1"], ["id", "exampleFormControlInput1", "type", "email", "placeholder", "name@example.com", "formControlName", "email", 1, "form-control"], ["for", "exampleInputPassword1"], ["id", "exampleInputPassword1", "type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], ["class", "form-group", 4, "ngIf"], ["type", "button", "awNextStep", "", 1, "btn", "btn-primary", "pull-right", 3, "disabled"], ["type", "button", "awPreviousStep", "", 1, "btn", "btn-secondary", "pull-right", "mr-1"], ["awEnableBackLinks", ""], [1, "sr-only"], ["id", "dd", "type", "number", "placeholder", "dd", "formControlName", "dd", "onlyNumbers", "", 1, "form-control"], ["id", "mm", "type", "number", "placeholder", "mm", "formControlName", "mm", "onlyNumbers", "", 1, "form-control"], ["id", "yyyy", "type", "number", "placeholder", "yyyy", "formControlName", "yyyy", "onlyNumbers", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-success", "pull-right", 3, "disabled", "click"], ["id", "prevBtn", "type", "button", "awPreviousStep", "", 1, "btn", "btn-secondary", "pull-right", "mr-1"], [1, "f1-step"], [1, "f1-step-icon"], [1, "fa", "fa-user"], [1, "invalid"], [1, "fa", "fa-key"], ["id", "exampleInputcPassword1", "type", "password", "placeholder", "Enter again", "formControlName", "cnfPassword", 1, "form-control"], [1, "fa", "fa-twitter"]], template: function FormWizardThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "Form Wizard with icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "aw-wizard", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "aw-wizard-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](12, FormWizardThreeComponent_ng_template_12_Template, 5, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](15, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](17, FormWizardThreeComponent_ng_container_17_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](22, FormWizardThreeComponent_ng_container_22_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](24, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "aw-wizard-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](27, FormWizardThreeComponent_ng_template_27_Template, 5, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](30, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](31, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](32, FormWizardThreeComponent_ng_container_32_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](33, FormWizardThreeComponent_ng_container_33_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](36, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](38, FormWizardThreeComponent_ng_container_38_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](39, FormWizardThreeComponent_div_39_Template, 6, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](41, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](42, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](43, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](44, "aw-wizard-completion-step", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](45, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](46, FormWizardThreeComponent_ng_template_46_Template, 5, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](48, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](49, "DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](50, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](51, FormWizardThreeComponent_ng_container_51_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](52, FormWizardThreeComponent_ng_container_52_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](54, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](55, "MM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](56, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](57, FormWizardThreeComponent_ng_container_57_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](58, FormWizardThreeComponent_ng_container_58_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](60, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](61, "YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](62, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](63, FormWizardThreeComponent_ng_container_63_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](64, FormWizardThreeComponent_ng_container_64_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](65, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function FormWizardThreeComponent_Template_button_click_65_listener() { return ctx.finish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](66, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](67, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](68, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("title", "Form Wizard Three")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](21, _c0))("active_item", "Form Wizard Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.firstFormGroup.get("firstName").hasError("required") && ctx.firstFormGroup.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.firstFormGroup.get("lastName").hasError("required") && ctx.firstFormGroup.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", !ctx.firstFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.secondFormGroup.get("email").hasError("required") && ctx.secondFormGroup.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.secondFormGroup.get("email").hasError("email") && ctx.secondFormGroup.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.secondFormGroup.get("password").hasError("required") && ctx.secondFormGroup.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.secondFormGroup.get("password").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", !ctx.secondFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.thirdFormGroup.get("dd").hasError("required") && ctx.thirdFormGroup.get("dd").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.thirdFormGroup.get("dd").hasError("pattern") && ctx.thirdFormGroup.get("dd").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.thirdFormGroup.get("mm").hasError("required") && ctx.thirdFormGroup.get("mm").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.thirdFormGroup.get("mm").hasError("pattern") && ctx.thirdFormGroup.get("mm").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.thirdFormGroup.get("yyyy").hasError("required") && ctx.thirdFormGroup.get("yyyy").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.thirdFormGroup.get("yyyy").hasError("pattern") && ctx.thirdFormGroup.get("yyyy").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", !ctx.thirdFormGroup.valid);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.WizardComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.WizardStepComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.WizardStepSymbolDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_2__.OnlyAlphabetsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.NextStepDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.PreviousStepDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.WizardCompletionStepComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.EnableBackLinksDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_3__.OnlyNumbersDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXdpemFyZC10aHJlZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 48314:
/*!********************************************************************************************!*\
  !*** ./src/app/components/forms/form-Layouts/form-wizard-two/form-wizard-two.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormWizardTwoComponent": function() { return /* binding */ FormWizardTwoComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-archwizard */ 72386);
/* harmony import */ var _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directives/only-alphabets.directive */ 33177);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _shared_directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/disable-key-press.directive */ 87500);










function FormWizardTwoComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Step 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function FormWizardTwoComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} }
function FormWizardTwoComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} }
function FormWizardTwoComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Step 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function FormWizardTwoComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} }
function FormWizardTwoComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Email is not Proper");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} }
function FormWizardTwoComponent_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} }
function FormWizardTwoComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Step 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function FormWizardTwoComponent_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Birth Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} }
function FormWizardTwoComponent_ng_container_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Passport field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} }
function FormWizardTwoComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Step 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function FormWizardTwoComponent_ng_container_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " State is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} }
function FormWizardTwoComponent_ng_container_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} }
const _c0 = function () { return ["Forms", "Form Layout"]; };
const _c1 = function () { return { symbol: "1" }; };
const _c2 = function () { return { symbol: "2" }; };
const _c3 = function () { return { symbol: "3" }; };
const _c4 = function () { return { symbol: "4" }; };
class FormWizardTwoComponent {
    constructor(_formBuilder, toaster) {
        this._formBuilder = _formBuilder;
        this.toaster = toaster;
        this.maxDate = new Date();
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        this.thirdFormGroup = this._formBuilder.group({
            birthdate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            hasPassport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        this.fourthFormGroup = this._formBuilder.group({
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    finish() {
        this.toaster.success('Successfully Registered');
    }
}
FormWizardTwoComponent.??fac = function FormWizardTwoComponent_Factory(t) { return new (t || FormWizardTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
FormWizardTwoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: FormWizardTwoComponent, selectors: [["app-form-wizard-two"]], decls: 93, vars: 29, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["action", "#"], ["navBarLayout", "large-filled-symbols"], [3, "navigationSymbol"], [3, "formGroup"], ["awWizardStepTitle", ""], ["id", "step-1", 1, "setup-content"], [1, "col-xs-12"], [1, "col-md-12"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "Johan", "required", "required", "formControlName", "firstName", "onlyAlphabets", "", 1, "form-control"], ["class", "invalid", 4, "ngIf"], ["for", "lname"], ["id", "lname", "type", "text", "placeholder", "Deo", "formControlName", "lastName", "onlyAlphabets", "", 1, "form-control"], ["type", "submit", "awNextStep", "", 1, "btn", "btn-primary", "pull-right", 3, "disabled"], ["id", "step-2", 1, "setup-content"], [1, "form-group", "m-t-15"], ["for", "exampleFormControlInput1"], ["id", "exampleFormControlInput1", "type", "email", "placeholder", "name@example.com", "formControlName", "email", 1, "form-control"], ["for", "exampleInputPassword1"], ["id", "exampleInputPassword1", "type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], ["type", "button", "awPreviousStep", "", 1, "btn", "btn-secondary", "pull-right", "mr-1"], ["id", "step-3", 1, "setup-content"], [1, "form-group", "custom-datepicker-dropdown", "custom-datepicker"], ["type", "text", "formControlName", "birthdate", "ngbDatepicker", "", "disableKeyPress", "", 1, "form-control", "digits", 3, "maxDate", "click"], ["dob", "ngbDatepicker"], [1, "control-label"], ["placeholder", "Yes/No", "type", "text", "formControlName", "hasPassport", 1, "form-control", "digits"], ["type", "submit", "awNextStep", "", 1, "btn", "btn-primary", "pull-right"], ["id", "step-4", 1, "setup-content"], ["type", "text", "placeholder", "State", "required", "required", "formControlName", "state", 1, "form-control", "mt-1"], ["type", "text", "placeholder", "City", "required", "required", "formControlName", "city", 1, "form-control", "mt-1"], ["type", "button", 1, "btn", "btn-success", "pull-right", 3, "disabled", "click"], [1, "invalid"]], template: function FormWizardTwoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Form Wizard And Validation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "Validation Step Form Wizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "aw-wizard", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "aw-wizard-step", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](15, FormWizardTwoComponent_ng_template_15_Template, 2, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, FormWizardTwoComponent_ng_container_23_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](27, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, FormWizardTwoComponent_ng_container_28_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](30, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "aw-wizard-step", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](33, FormWizardTwoComponent_ng_template_33_Template, 2, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](39, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](40, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](41, FormWizardTwoComponent_ng_container_41_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](42, FormWizardTwoComponent_ng_container_42_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](45, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](46, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](47, FormWizardTwoComponent_ng_container_47_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](49, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](50, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](51, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](52, "aw-wizard-step", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](54, FormWizardTwoComponent_ng_template_54_Template, 2, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](60, "Birthday:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function FormWizardTwoComponent_Template_input_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r14); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](62); return _r8.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](63, FormWizardTwoComponent_ng_container_63_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](65, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](66, "Have Passport");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](67, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](68, FormWizardTwoComponent_ng_container_68_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](70, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](71, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](72, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "aw-wizard-step", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](74, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](75, FormWizardTwoComponent_ng_template_75_Template, 2, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](80, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](81, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](82, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](83, FormWizardTwoComponent_ng_container_83_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](84, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](85, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](86, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](87, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](88, FormWizardTwoComponent_ng_container_88_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](89, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function FormWizardTwoComponent_Template_button_click_89_listener() { return ctx.finish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](90, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](91, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](92, "Previous");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("title", "Form Wizard Two")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](24, _c0))("active_item", "Form Wizard Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("navigationSymbol", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](25, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.firstFormGroup.get("firstName").hasError("required") && ctx.firstFormGroup.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.firstFormGroup.get("lastName").hasError("required") && ctx.firstFormGroup.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", !ctx.firstFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("navigationSymbol", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](26, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.secondFormGroup.get("email").hasError("required") && ctx.secondFormGroup.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.secondFormGroup.get("email").hasError("email") && ctx.secondFormGroup.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.secondFormGroup.get("password").hasError("required") && ctx.secondFormGroup.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", !ctx.secondFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("navigationSymbol", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](27, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("maxDate", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.thirdFormGroup.get("birthdate").hasError("required") && ctx.thirdFormGroup.get("birthdate").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.thirdFormGroup.get("hasPassport").hasError("required") && ctx.thirdFormGroup.get("hasPassport").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("navigationSymbol", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](28, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.fourthFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.fourthFormGroup.get("state").hasError("required") && ctx.fourthFormGroup.get("state").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.fourthFormGroup.get("city").hasError("required") && ctx.fourthFormGroup.get("city").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", !ctx.fourthFormGroup.valid);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, angular_archwizard__WEBPACK_IMPORTED_MODULE_6__.WizardComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_6__.WizardStepComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_6__.WizardStepTitleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_1__.OnlyAlphabetsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, angular_archwizard__WEBPACK_IMPORTED_MODULE_6__.NextStepDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_6__.PreviousStepDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbInputDatepicker, _shared_directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_2__.DisableKeyPressDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXdpemFyZC10d28uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 27378:
/*!************************************************************************************!*\
  !*** ./src/app/components/forms/form-Layouts/form-wizard/form-wizard.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormWizardComponent": function() { return /* binding */ FormWizardComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_validators_passwordMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/validators/passwordMatch */ 76181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-archwizard */ 72386);
/* harmony import */ var _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/only-alphabets.directive */ 33177);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/only-numbers.directive */ 5262);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);











function FormWizardComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "div");
} }
function FormWizardComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Contact is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Email is not Proper");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardComponent_div_46_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardComponent_div_46_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Passwords Doesnt match");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](3, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](4, FormWizardComponent_div_46_ng_container_4_Template, 2, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](5, FormWizardComponent_div_46_ng_container_5_Template, 2, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r7.secondFormGroup.get("cnfPassword").hasError("required") && ctx_r7.secondFormGroup.get("cnfPassword").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r7.secondFormGroup.get("cnfPassword").hasError("mustMatch") && ctx_r7.secondFormGroup.get("cnfPassword").touched);
} }
function FormWizardComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Birth Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardComponent_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Passport field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardComponent_ng_container_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Country is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardComponent_ng_container_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " State is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
function FormWizardComponent_ng_container_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
const _c0 = function () { return ["Forms", "Form Layout"]; };
class FormWizardComponent {
    constructor(_formBuilder, toaster) {
        this._formBuilder = _formBuilder;
        this.toaster = toaster;
        this.maxDate = new Date();
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            contactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            cnfPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        }, {
            validator: (0,_shared_validators_passwordMatch__WEBPACK_IMPORTED_MODULE_0__.MustMatch)('password', 'cnfPassword')
        });
        this.thirdFormGroup = this._formBuilder.group({
            birthdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            age: [''],
            hasPassport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
        this.fourthFormGroup = this._formBuilder.group({
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    finish() {
        this.toaster.success('Successfully Registered');
    }
}
FormWizardComponent.??fac = function FormWizardComponent_Factory(t) { return new (t || FormWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
FormWizardComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: FormWizardComponent, selectors: [["app-form-wizard"]], decls: 93, vars: 25, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["id", "regForm", 1, "form-wizard"], [3, "disableNavigationBar"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "Johan", "required", "required", "formControlName", "firstName", "onlyAlphabets", "", 1, "form-control"], ["class", "invalid", 4, "ngIf"], [4, "ngIf"], ["for", "lname"], ["id", "lname", "type", "text", "placeholder", "Deo", "formControlName", "lastName", "onlyAlphabets", "", 1, "form-control"], ["for", "contact"], ["id", "contact", "type", "text", "placeholder", "123456789", "formControlName", "contactNumber", "onlyNumbers", "", 1, "form-control", "digits"], ["type", "submit", "awNextStep", "", 1, "btn", "btn-primary", "pull-right", 3, "disabled"], [1, "form-group", "m-t-15"], ["for", "exampleFormControlInput1"], ["id", "exampleFormControlInput1", "type", "email", "placeholder", "name@example.com", "formControlName", "email", 1, "form-control"], ["for", "exampleInputPassword1"], ["id", "exampleInputPassword1", "type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], ["class", "form-group", 4, "ngIf"], ["type", "button", "awNextStep", "", 1, "btn", "btn-primary", "pull-right", 3, "disabled"], ["type", "button", "awPreviousStep", "", 1, "btn", "btn-secondary", "pull-right", "mr-1"], [1, "form-group", "custom-datepicker-dropdown", "custom-datepicker"], ["type", "text", "formControlName", "birthdate", "ngbDatepicker", "", 1, "form-control", "digits", 3, "maxDate", "click"], ["dob", "ngbDatepicker"], [1, "control-label"], ["placeholder", "Age", "type", "text", "formControlName", "age", 1, "form-control", "digits"], ["placeholder", "Yes/No", "type", "text", "formControlName", "hasPassport", 1, "form-control", "digits"], ["type", "button", "awNextStep", "", 1, "btn", "btn-primary", "pull-right"], ["awEnableBackLinks", ""], ["type", "text", "placeholder", "Country", "required", "required", "formControlName", "country", 1, "form-control", "mt-1"], ["type", "text", "placeholder", "State", "required", "required", "formControlName", "state", 1, "form-control", "mt-1"], ["type", "text", "placeholder", "City", "required", "required", "formControlName", "city", 1, "form-control", "mt-1"], ["type", "button", 1, "btn", "btn-success", "pull-right", 3, "disabled", "click"], [1, "invalid"], ["id", "exampleInputcPassword1", "type", "password", "placeholder", "Enter again", "formControlName", "cnfPassword", 1, "form-control"]], template: function FormWizardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "Simple Form Wizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](9, "Please Make sure fill all the filed before click on next button");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "aw-wizard", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "aw-wizard-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](17, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](19, FormWizardComponent_ng_container_19_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](20, FormWizardComponent_div_20_Template, 1, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](23, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](25, FormWizardComponent_ng_container_25_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](28, "Contact No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](30, FormWizardComponent_ng_container_30_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](32, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](33, "aw-wizard-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](37, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](38, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](39, FormWizardComponent_ng_container_39_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](40, FormWizardComponent_ng_container_40_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](42, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](43, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](44, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](45, FormWizardComponent_ng_container_45_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](46, FormWizardComponent_div_46_Template, 6, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](47, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](48, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](50, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](51, "aw-wizard-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](52, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](54, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](55, "Birthday:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](56, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function FormWizardComponent_Template_input_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r16); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](57); return _r8.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](58, FormWizardComponent_ng_container_58_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](60, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](61, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](62, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](64, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](65, "Have Passport");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](66, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](67, FormWizardComponent_ng_container_67_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](68, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](69, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](70, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](71, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](72, "aw-wizard-completion-step", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](73, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](75, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](76, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](77, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](78, FormWizardComponent_ng_container_78_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](79, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](80, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](81, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](82, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](83, FormWizardComponent_ng_container_83_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](84, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](85, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](86, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](87, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](88, FormWizardComponent_ng_container_88_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](89, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function FormWizardComponent_Template_button_click_89_listener() { return ctx.finish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](90, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](91, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](92, "Previous");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("title", "Form Wizard")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](24, _c0))("active_item", "Form Wizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disableNavigationBar", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.firstFormGroup.get("firstName").hasError("required") && ctx.firstFormGroup.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.firstFormGroup.get("lastName").hasError("required") && ctx.firstFormGroup.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.firstFormGroup.get("contactNumber").hasError("required") && ctx.firstFormGroup.get("contactNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", !ctx.firstFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.secondFormGroup.get("email").hasError("required") && ctx.secondFormGroup.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.secondFormGroup.get("email").hasError("email") && ctx.secondFormGroup.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.secondFormGroup.get("password").hasError("required") && ctx.secondFormGroup.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.secondFormGroup.get("password").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", !ctx.secondFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("maxDate", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.thirdFormGroup.get("birthdate").hasError("required") && ctx.thirdFormGroup.get("birthdate").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.thirdFormGroup.get("hasPassport").hasError("required") && ctx.thirdFormGroup.get("hasPassport").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.fourthFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.fourthFormGroup.get("country").hasError("required") && ctx.fourthFormGroup.get("country").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.fourthFormGroup.get("state").hasError("required") && ctx.fourthFormGroup.get("state").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.fourthFormGroup.get("city").hasError("required") && ctx.fourthFormGroup.get("city").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", !ctx.fourthFormGroup.valid);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.WizardComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.WizardStepComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_2__.OnlyAlphabetsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_3__.OnlyNumbersDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.NextStepDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.PreviousStepDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbInputDatepicker, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.WizardCompletionStepComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_7__.EnableBackLinksDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXdpemFyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 15370:
/*!*************************************************************************************!*\
  !*** ./src/app/components/forms/form-controls/base-inputs/base-inputs.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseInputsComponent": function() { return /* binding */ BaseInputsComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/of */ 98779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);






const _c0 = function () { return ["Forms", "Form Control"]; };
class BaseInputsComponent {
    constructor() {
        this.options$ = (0,rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__.of)([1, 2, 3, 4, 5, 6]);
    }
    ngOnInit() {
    }
}
BaseInputsComponent.??fac = function BaseInputsComponent_Factory(t) { return new (t || BaseInputsComponent)(); };
BaseInputsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: BaseInputsComponent, selectors: [["app-base-inputs"]], decls: 462, vars: 24, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "form", "theme-form"], [1, "card-body"], [1, "col"], [1, "form-group"], ["for", "exampleFormControlInput1"], ["id", "exampleFormControlInput1", "type", "email", "placeholder", "name@example.com", 1, "form-control"], ["for", "exampleInputPassword2"], ["id", "exampleInputPassword2", "type", "password", "placeholder", "Password", 1, "form-control"], ["for", "exampleFormControlSelect9"], ["id", "exampleFormControlSelect9", 1, "form-control", "digits"], ["for", "exampleFormControlSelect3"], ["placeholder", "Select", 3, "items", "multiple"], [1, "form-group", "mb-0"], ["for", "exampleFormControlTextarea4"], ["id", "exampleFormControlTextarea4", "rows", "3", 1, "form-control"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "reset", "value", "Cancel", 1, "btn", "btn-light", "ml-1"], [1, "form-group", "row"], [1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["type", "text", 1, "form-control"], ["type", "text", "placeholder", "Type your title in Placeholder", 1, "form-control"], ["type", "password", "placeholder", "Password input", 1, "form-control"], ["type", "number", "placeholder", "Number", 1, "form-control", "digits"], ["type", "tel", "value", "91-(999)-999-999", 1, "form-control", "m-input", "digits"], ["type", "url", "value", "https://getbootstrap.com", 1, "form-control"], ["id", "example-datetime-local-input", "type", "datetime-local", "value", "2019-01-19T18:45:00", 1, "form-control", "digits"], ["type", "date", "value", "2019-01-01", 1, "form-control", "digits"], ["type", "month", "value", "2019-01", 1, "form-control", "digits"], ["type", "week", "value", "2019-W09", 1, "form-control", "digits"], ["type", "time", "value", "21:45:00", 1, "form-control", "digits"], [1, "col-sm-3", "col-form-label", "pt-0"], ["type", "color", "value", "#563d7c", 1, "form-control"], ["type", "text", "placeholder", "Content must be in 6 characters", "maxlength", "6", 1, "form-control"], [1, "form-control-static"], [1, "form-group", "row", "mb-0"], ["rows", "5", "cols", "5", "placeholder", "Default textarea", 1, "form-control"], [1, "col-sm-9", "offset-sm-3"], ["for", "exampleFormControlInput5"], ["id", "exampleFormControlInput5", "type", "email", "placeholder", "name@example.com", 1, "form-control", "btn-pill"], ["for", "exampleInputPassword6"], ["id", "exampleInputPassword6", "type", "password", "placeholder", "Password", 1, "form-control", "btn-pill"], ["for", "exampleFormControlSelect7"], ["id", "exampleFormControlSelect7", 1, "form-control", "btn-pill", "digits"], ["for", "exampleFormControlSelect8"], ["placeholder", "Select", 1, "btn-pill", 3, "items", "multiple"], ["for", "exampleFormControlTextarea9"], ["id", "exampleFormControlTextarea9", "rows", "3", 1, "form-control", "btn-pill"], ["for", "exampleFormControlInput10"], ["id", "exampleFormControlInput10", "type", "email", "placeholder", "name@example.com", 1, "form-control", "btn-square"], ["for", "exampleInputPassword11"], ["id", "exampleInputPassword11", "type", "password", "placeholder", "Password", 1, "form-control", "btn-square"], ["for", "exampleFormControlSelect12"], ["id", "exampleFormControlSelect12", 1, "form-control", "btn-square", "digits"], ["for", "exampleFormControlSelect13"], ["placeholder", "Select", 1, "btn-square", 3, "items", "multiple"], ["for", "exampleFormControlTextarea14"], ["id", "exampleFormControlTextarea14", "rows", "3", 1, "form-control", "btn-square"], ["for", "exampleFormControlInput15"], ["id", "exampleFormControlInput15", "type", "email", "placeholder", "name@example.com", 1, "form-control", "input-air-primary"], ["for", "exampleInputPassword16"], ["id", "exampleInputPassword16", "type", "password", "placeholder", "Password", 1, "form-control", "input-air-primary"], ["for", "exampleFormControlSelect17"], ["id", "exampleFormControlSelect17", 1, "form-control", "input-air-primary", "digits"], ["for", "exampleFormControlSelect18"], ["placeholder", "Select", 1, "input-air-primary", 3, "items", "multiple"], ["for", "exampleFormControlTextarea19"], ["id", "exampleFormControlTextarea19", "rows", "3", 1, "form-control", "input-air-primary"], ["for", "exampleFormControlInput20"], ["id", "exampleFormControlInput20", "type", "email", "placeholder", "name@example.com", 1, "form-control"], ["for", "exampleInputPassword21"], ["id", "exampleInputPassword21", "type", "password", "placeholder", "Password", 1, "form-control"], ["for", "exampleInputPassword22"], ["id", "exampleInputPassword22", "type", "text", "disabled", "", "placeholder", "Disabled", 1, "form-control"], ["for", "exampleFormControlSelect23"], ["id", "exampleFormControlSelect23", 1, "form-control", "digits"], ["for", "exampleFormControlSelect24"], ["for", "exampleFormControlTextarea25"], ["id", "exampleFormControlTextarea25", "rows", "3", 1, "form-control"], ["for", "colFormLabelSm26", 1, "col-form-label-sm"], ["id", "colFormLabelSm26", "type", "text", "placeholder", "col-form-label-lg", 1, "form-control", "form-control-lg"], ["for", "exampleInputPassword27"], ["id", "exampleInputPassword27", "type", "text", "placeholder", "form-control", 1, "form-control"], ["for", "colFormLabelSm28", 1, "col-form-label-sm"], ["id", "colFormLabelSm28", "type", "text", "placeholder", "col-form-label-sm", 1, "form-control", "form-control-sm"], ["for", "exampleFormControlSelect29"], ["id", "exampleFormControlSelect29", 1, "form-control", "form-control-lg", "digits"], ["for", "exampleFormControlSelect30"], ["id", "exampleFormControlSelect30", 1, "form-control", "digits"], ["for", "exampleFormControlSelect31"], ["id", "exampleFormControlSelect31", 1, "form-control", "form-control-sm", "digits"], ["type", "file", 1, "form-control"], [1, "custom-select", "form-control"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"]], template: function BaseInputsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Basic form control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "Example select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](35, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "Example multiple select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](43, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](44, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](49, "Example textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](50, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](53, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](54, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](58, "Basic HTML input control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](65, "Simple Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](67, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](70, "Placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](72, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](74, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](75, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](77, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](79, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](80, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](81, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](82, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](84, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](85, "Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](87, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](89, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](90, "URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](91, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](92, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](93, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](94, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](95, "Date and time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](97, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](98, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](99, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](100, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](101, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](102, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](103, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](104, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](105, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](106, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](107, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](108, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](109, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](110, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](111, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](112, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](113, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](114, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](115, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](116, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](117, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](118, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](119, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](120, "Color picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](121, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](122, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](123, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](124, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](125, " Maximum Length ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](126, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](127, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](128, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](129, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](130, "Static Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](131, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](132, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](133, " Hello !... This is static text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](134, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](135, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](136, "Textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](137, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](138, "textarea", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](139, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](140, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](141, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](142, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](143, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](144, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](145, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](146, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](147, "Edges input style");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](148, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](149, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](150, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](151, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](152, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](153, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](154, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](155, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](156, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](157, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](158, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](159, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](160, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](161, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](162, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](163, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](164, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](165, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](166, "Example select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](167, "select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](168, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](169, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](170, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](171, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](172, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](173, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](174, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](175, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](176, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](177, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](178, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](179, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](180, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](181, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](182, "Example multiple select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](183, "ng-select", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](184, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](185, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](186, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](187, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](188, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](189, "Example textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](190, "textarea", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](191, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](192, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](193, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](194, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](195, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](196, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](197, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](198, "Flat input style");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](199, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](200, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](201, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](202, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](203, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](204, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](205, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](206, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](207, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](208, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](209, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](210, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](211, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](212, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](213, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](214, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](215, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](216, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](217, "Example select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](218, "select", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](219, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](220, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](221, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](222, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](223, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](224, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](225, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](226, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](227, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](228, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](229, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](230, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](231, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](232, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](233, "Example multiple select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](234, "ng-select", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](235, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](236, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](237, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](238, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](239, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](240, "Example textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](241, "textarea", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](242, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](243, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](244, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](245, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](246, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](247, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](248, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](249, "Raise input style");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](250, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](251, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](252, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](253, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](254, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](255, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](256, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](257, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](258, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](259, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](260, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](261, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](262, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](263, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](264, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](265, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](266, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](267, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](268, "Example select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](269, "select", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](270, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](271, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](272, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](273, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](274, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](275, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](276, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](277, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](278, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](279, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](280, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](281, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](282, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](283, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](284, "Example multiple select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](285, "ng-select", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](286, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](287, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](288, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](289, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](290, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](291, "Example textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](292, "textarea", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](293, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](294, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](295, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](296, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](297, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](298, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](299, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](300, "Solid input style");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](301, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](302, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](303, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](304, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](305, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](306, "label", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](307, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](308, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](309, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](310, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](311, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](312, "label", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](313, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](314, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](315, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](316, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](317, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](318, "label", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](319, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](320, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](321, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](322, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](323, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](324, "label", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](325, "Example select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](326, "select", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](327, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](328, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](329, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](330, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](331, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](332, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](333, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](334, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](335, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](336, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](337, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](338, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](339, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](340, "label", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](341, "Example multiple select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](342, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](343, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](344, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](345, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](346, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](347, "label", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](348, "Example textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](349, "textarea", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](350, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](351, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](352, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](353, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](354, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](355, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](356, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](357, "Input sizing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](358, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](359, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](360, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](361, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](362, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](363, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](364, "Large input");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](365, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](366, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](367, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](368, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](369, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](370, "Default input");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](371, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](372, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](373, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](374, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](375, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](376, "Small input");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](377, "input", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](378, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](379, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](380, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](381, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](382, "Large select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](383, "select", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](384, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](385, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](386, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](387, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](388, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](389, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](390, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](391, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](392, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](393, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](394, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](395, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](396, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](397, "label", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](398, "Default select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](399, "select", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](400, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](401, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](402, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](403, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](404, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](405, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](406, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](407, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](408, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](409, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](410, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](411, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](412, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](413, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](414, "Small select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](415, "select", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](416, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](417, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](418, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](419, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](420, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](421, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](422, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](423, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](424, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](425, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](426, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](427, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](428, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](429, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](430, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](431, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](432, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](433, "Custom controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](434, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](435, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](436, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](437, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](438, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](439, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](440, "Upload File");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](441, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](442, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](443, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](444, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](445, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](446, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](447, "Custom select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](448, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](449, "select", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](450, "option", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](451, "Open this select menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](452, "option", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](453, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](454, "option", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](455, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](456, "option", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](457, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](458, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](459, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](460, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](461, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "Base Inputs")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](23, _c0))("active_item", "Base Inputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](44, 13, ctx.options$))("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](184, 15, ctx.options$))("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](235, 17, ctx.options$))("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](286, 19, ctx.options$))("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](343, 21, ctx.options$))("multiple", true);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgSelectMultipleOption"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__.NgSelectComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlLWlucHV0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 87484:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/forms/form-controls/checkbox-radio/checkbox-radio.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxRadioComponent": function() { return /* binding */ CheckboxRadioComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);


const _c0 = function () { return ["Forms", "Form Control"]; };
class CheckboxRadioComponent {
    constructor() { }
    ngOnInit() {
    }
}
CheckboxRadioComponent.??fac = function CheckboxRadioComponent_Factory(t) { return new (t || CheckboxRadioComponent)(); };
CheckboxRadioComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: CheckboxRadioComponent, selectors: [["app-checkbox-radio"]], decls: 251, vars: 4, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-sm-12"], [1, "col"], [1, "form-group", "m-t-15", "custom-radio-ml", "ml-2"], [1, "radio", "radio-primary"], ["id", "radio1", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio1"], [1, "digits"], ["id", "radio3", "type", "radio", "name", "radio1", "value", "option1", "disabled", ""], ["for", "radio3"], ["id", "radio4", "type", "radio", "name", "radio1", "value", "option1", "checked", ""], ["for", "radio4"], ["id", "radio11", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio11"], [1, "radio", "radio-secondary"], ["id", "radio22", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio22"], [1, "radio", "radio-success"], ["id", "radio55", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio55"], [1, "radio", "radio-info"], ["id", "radio33", "type", "radio", "name", "radio1", "value", "option1", "disabled", ""], ["for", "radio33"], [1, "radio", "radio-warning"], ["id", "radio44", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio44"], [1, "radio", "radio-danger"], ["id", "radio66", "type", "radio", "name", "radio1", "value", "option1", "checked", ""], ["for", "radio66"], [1, "form-group", "m-t-15", "m-checkbox-inline", "mb-0", "custom-radio-ml", "ml-2"], ["id", "radioinline1", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radioinline1", 1, "mb-0"], ["id", "radioinline2", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radioinline2", 1, "mb-0"], ["id", "radioinline3", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radioinline3", 1, "mb-0"], [1, "form-group", "m-t-15", "ml-1"], [1, "checkbox"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1"], ["id", "checkbox2", "type", "checkbox", "disabled", ""], ["for", "checkbox2"], ["id", "checkbox3", "type", "checkbox", "checked", ""], ["for", "checkbox3"], [1, "checkbox", "checkbox-primary"], ["id", "checkbox-primary-1", "type", "checkbox"], ["for", "checkbox-primary-1"], [1, "checkbox", "checkbox-secondary"], ["id", "checkbox-dark", "type", "checkbox", "disabled", ""], ["for", "checkbox-dark"], [1, "checkbox", "checkbox-success"], ["id", "checkbox-primary", "type", "checkbox"], ["for", "checkbox-primary"], [1, "form-group", "m-t-15", "m-checkbox-inline", "mb-0", "ml-1"], [1, "checkbox", "checkbox-dark"], ["id", "inline-1", "type", "checkbox"], ["for", "inline-1"], ["id", "inline-2", "type", "checkbox"], ["for", "inline-2"], ["id", "inline-3", "type", "checkbox"], ["for", "inline-3"], [1, "card-body", "animate-chk"], ["for", "edo-ani", 1, "d-block"], ["id", "edo-ani", "type", "radio", "name", "rdo-ani", "checked", "", 1, "radio_animated"], ["for", "edo-ani1", 1, "d-block"], ["id", "edo-ani1", "type", "radio", "name", "rdo-ani", 1, "radio_animated"], ["for", "edo-ani2", 1, "d-block"], ["id", "edo-ani2", "type", "radio", "name", "rdo-ani", "checked", "", 1, "radio_animated"], ["for", "edo-ani13", 1, "d-block"], ["id", "edo-ani13", "type", "radio", "name", "rdo-ani", 1, "radio_animated"], ["for", "chk-ani", 1, "d-block"], ["id", "chk-ani", "type", "checkbox", "checked", "", 1, "checkbox_animated"], ["for", "chk-ani1", 1, "d-block"], ["id", "chk-ani1", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani2", 1, "d-block"], ["id", "chk-ani2", "type", "checkbox", "checked", "", 1, "checkbox_animated"], ["for", "chk-ani3", 1, "d-block"], ["id", "chk-ani3", "type", "checkbox", 1, "checkbox_animated"], [1, "col-md-12"], [1, "form-group", "ml-1"], [1, "checkbox", "checkbox-dark", "m-squar"], ["id", "inline-sqr-1", "type", "checkbox"], ["for", "inline-sqr-1", 1, "mt-0"], ["id", "inline-sqr-2", "type", "checkbox", "disabled", ""], ["for", "inline-sqr-2"], ["id", "inline-sqr-3", "type", "checkbox", "checked", ""], ["for", "inline-sqr-3"], [1, "form-group", "m-t-15", "mb-0", "ml-1"], [1, "checkbox", "checkbox-solid-success"], ["id", "solid1", "type", "checkbox"], ["for", "solid1"], [1, "checkbox", "checkbox-solid-dark"], ["id", "solid2", "type", "checkbox", "disabled", ""], ["for", "solid2"], [1, "checkbox", "checkbox-solid-primary"], ["id", "solid3", "type", "checkbox", "checked", ""], ["for", "solid3"], [1, "checkbox", "checkbox-solid-danger"], ["id", "solid4", "type", "checkbox", "checked", ""], ["for", "solid4"], [1, "checkbox", "checkbox-solid-light"], ["id", "solid5", "type", "checkbox", "checked", ""], ["for", "solid5"], [1, "checkbox", "checkbox-solid-info"], ["id", "solid6", "type", "checkbox", "checked", ""], ["for", "solid6"], ["id", "solid7", "type", "checkbox", "checked", ""], ["for", "solid7", 1, "mb-0"]], template: function CheckboxRadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Custom Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Custom Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, " 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Radio states");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, " 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, " 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](53, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, " 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](59, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, " 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](65, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, " 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Inline checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](76, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, " 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](82, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, " 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](88, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, " 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "Custom checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Custom checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](106, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](110, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](114, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "Checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "Checkbox states");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](123, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "Success state");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](127, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, "Brand state");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](131, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "primary state");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "Inline checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](140, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](142, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, " 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](146, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](148, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](150, " 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](152, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](154, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, " 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, "Animated radio buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](166, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](167, " Option 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](169, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](170, " Option 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](172, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, " Option 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](175, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, " Option 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, "Animated checkbox buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](186, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](187, " Option 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](189, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, " Option 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "label", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](192, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, " Option 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](195, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](196, " Option 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](201, "Square checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](207, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](209, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](211, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](213, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](215, "input", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](217, "checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, "Solid checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](224, "input", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](226, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](228, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "label", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](230, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](232, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "label", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, "checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](236, "input", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "label", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, "checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](240, "input", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "label", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](242, "checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](244, "input", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "label", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](246, "checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](248, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "label", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](250, "checked");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Checkbox Radio")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Checkbox Radio");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2JveC1yYWRpby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 78044:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/forms/form-controls/form-validation/form-validation.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidationComponent": function() { return /* binding */ FormValidationComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directives/only-alphabets.directive */ 33177);





const _c0 = function () { return ["Forms", "Form Control"]; };
const _c1 = function (a0) { return { "was-validated": a0 }; };
class FormValidationComponent {
    constructor() {
        this.validate = false;
        this.tooltipValidation = false;
    }
    ngOnInit() {
    }
    submit() {
        this.validate = !this.validate;
    }
    tooltipSubmit() {
        this.tooltipValidation = !this.tooltipValidation;
    }
}
FormValidationComponent.??fac = function FormValidationComponent_Factory(t) { return new (t || FormValidationComponent)(); };
FormValidationComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: FormValidationComponent, selectors: [["app-form-validation"]], decls: 156, vars: 7, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["novalidate", "", 1, "needs-validation", 3, "ngClass"], [1, "form-row"], [1, "col-md-4", "mb-3"], ["for", "validationCustom01"], ["id", "validationCustom01", "type", "text", "placeholder", "First name", "required", "", "onlyAlphabets", "", 1, "form-control"], [1, "valid-feedback"], ["for", "validationCustom02"], ["id", "validationCustom02", "type", "text", "placeholder", "Last name", "required", "", "onlyAlphabets", "", 1, "form-control"], ["for", "validationCustomUsername"], [1, "input-group"], [1, "input-group-prepend"], ["id", "inputGroupPrepend", 1, "input-group-text"], ["id", "validationCustomUsername", "type", "text", "placeholder", "Username", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control"], [1, "invalid-feedback"], [1, "col-md-6", "mb-3"], ["for", "validationCustom03"], ["id", "validationCustom03", "type", "text", "placeholder", "City", "required", "", 1, "form-control"], [1, "col-md-3", "mb-3"], ["for", "validationCustom04"], ["id", "validationCustom04", "type", "text", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationCustom05"], ["id", "validationCustom05", "type", "text", "placeholder", "Zip", "required", "", 1, "form-control"], [1, "form-group"], [1, "form-check"], [1, "checkbox", "p-0"], ["id", "invalidCheck", "type", "checkbox", "required", "", 1, "form-check-input"], ["for", "invalidCheck", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["ngNativeValidate", ""], ["for", "validationDefault01"], ["id", "validationDefault01", "type", "text", "placeholder", "First name", "required", "", "onlyAlphabets", "", 1, "form-control"], ["for", "validationDefault02"], ["id", "validationDefault02", "type", "text", "placeholder", "Last name", "required", "", "onlyAlphabets", "", 1, "form-control"], ["for", "validationDefaultUsername"], ["id", "inputGroupPrepend2", 1, "input-group-text"], ["id", "validationDefaultUsername", "type", "text", "placeholder", "Username", "aria-describedby", "inputGroupPrepend2", "required", "", 1, "form-control"], ["for", "validationDefault03"], ["id", "validationDefault03", "type", "text", "placeholder", "City", "required", "", 1, "form-control"], ["for", "validationDefault04"], ["id", "validationDefault04", "type", "text", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationDefault05"], ["id", "validationDefault05", "type", "text", "placeholder", "Zip", "required", "", 1, "form-control"], ["id", "invalidCheck2", "type", "checkbox", "required", "", 1, "form-check-input"], ["for", "invalidCheck2", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], [1, "was-validated"], [1, "custom-control", "custom-checkbox", "mb-3"], ["id", "customControlValidation1", "type", "checkbox", "required", "", 1, "custom-control-input"], ["for", "customControlValidation1", 1, "custom-control-label"], [1, "custom-control", "custom-radio"], ["id", "customControlValidation2", "type", "radio", "name", "radio-stacked", "required", "", 1, "custom-control-input"], ["for", "customControlValidation2", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "mb-3"], ["id", "customControlValidation3", "type", "radio", "name", "radio-stacked", "required", "", 1, "custom-control-input"], ["for", "customControlValidation3", 1, "custom-control-label"], ["required", "", 1, "custom-select"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "custom-file"], ["id", "validatedCustomFile", "type", "file", "required", "", 1, "custom-file-input"], ["for", "validatedCustomFile", 1, "custom-file-label"]], template: function FormValidationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Custom styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Looks good!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Looks good!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Please choose a username.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](37, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, "Please provide a valid city.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45, "Please provide a valid state.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](49, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, "Please provide a valid zip.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](55, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, "Agree to terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](59, "You must agree before submitting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormValidationComponent_Template_button_click_60_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](61, "Submit form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](65, "Browser defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](67, "Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you\u2019ll see a slightly different style of feedback.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](69, "While these feedback styles cannot be styled with CSS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](71, " If you want to use them it can be done by adding \"ngNativeValidate\" to your Form tag.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](77, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](78, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](79, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](80, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](81, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](82, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](84, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](85, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](87, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](89, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](90, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](92, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](93, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](94, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](95, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](97, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](98, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](99, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](101, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](102, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](103, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](104, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](105, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](106, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](107, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](108, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](109, "Agree to terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](110, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](111, "Submit form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](112, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](113, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](114, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](115, "Supported elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](117, "Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you\u2019ll see a slightly different style of feedback.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](119, "While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](120, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](121, "form", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](122, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](123, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](124, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](125, "Check this custom checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](126, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](127, "Example invalid feedback text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](128, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](129, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](130, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](131, "Toggle this custom radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](132, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](133, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](134, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](135, "Or toggle this other custom radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](136, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](137, "More example invalid feedback text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](138, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](139, "select", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](140, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](141, "Open this select menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](142, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](143, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](144, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](145, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](146, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](147, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](148, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](149, "Example invalid custom select feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](150, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](151, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](152, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](153, "Choose file...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](154, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](155, "Example invalid custom file feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", "Form Validation")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](4, _c0))("active_item", "Form Validation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](5, _c1, ctx.validate));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_1__.OnlyAlphabetsDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXZhbGlkYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 77712:
/*!***************************************************************************************!*\
  !*** ./src/app/components/forms/form-controls/input-groups/input-groups.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputGroupsComponent": function() { return /* binding */ InputGroupsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);



const _c0 = function () { return ["Forms", "Form Control"]; };
class InputGroupsComponent {
    constructor() { }
    ngOnInit() {
    }
}
InputGroupsComponent.??fac = function InputGroupsComponent_Factory(t) { return new (t || InputGroupsComponent)(); };
InputGroupsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: InputGroupsComponent, selectors: [["app-input-groups"]], decls: 174, vars: 4, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col"], [1, "form-group", "m-form__group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "placeholder", "Email", 1, "form-control"], [1, "form-group"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "text", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], [1, "form-group", "mb-0"], [1, "input-group", "mb-3"], [1, "form-group", "input-group-solid"], [1, "form-group", "input-group-square"], [1, "input-group", "input-group-air"], [1, "input-group", "pill-input-group"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "submit", 1, "btn", "btn-light", "ml-1"], [1, "icofont", "icofont-pencil-alt-5"], [1, "icofont", "icofont-ui-dial-phone"], [1, "icofont", "icofont-unlink"], [1, "icofont", "icofont-ui-zoom-out"], [1, "icofont", "icofont-ui-zoom-in"], [1, "icofont", "icofont-users"], ["type", "text", "placeholder", "999999", 1, "form-control"], [1, "icofont", "icofont-credit-card"], ["type", "text", "placeholder", "", 1, "form-control"], [1, "icofont", "icofont-download"], ["type", "text", "placeholder", "https://www.example.com", 1, "form-control", "input-group-air"], [1, "icofont", "icofont-ui-copy"], [1, "icofont", "icofont-stock-search"]], template: function InputGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Basic Input groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Left Addon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Right Addon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Joint Addon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Left & Right Addon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "Solid style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](56, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, "Square style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](64, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "Raise style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](72, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "Left & Right Addon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](80, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Basic Input groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99, "Left Addon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](103, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](104, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "Right Addon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](109, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](112, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "Joint Addon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](119, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](122, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "Left & Right Addon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](129, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](130, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](133, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "Solid style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](140, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](141, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "Flat style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](148, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](149, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "Raise style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](156, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](157, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](160, "Left & Right Addon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](164, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](165, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](168, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Input Groups")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Input Groups");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1ncm91cHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6785:
/*!***************************************************************************************!*\
  !*** ./src/app/components/forms/form-controls/mega-options/mega-options.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MegaOptionsComponent": function() { return /* binding */ MegaOptionsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);



const _c0 = function () { return ["Forms", "Form Control"]; };
class MegaOptionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MegaOptionsComponent.??fac = function MegaOptionsComponent_Factory(t) { return new (t || MegaOptionsComponent)(); };
MegaOptionsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: MegaOptionsComponent, selectors: [["app-mega-options"]], decls: 435, vars: 4, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6", "xl-100", "box-col-12"], [1, "card"], [1, "card-header"], [1, "card-body", "megaoptions-border-space-sm"], [1, "mega-inline"], [1, "col-sm-6"], [1, "media", "p-20"], [1, "radio", "radio-primary", "mr-3", "ml-2"], ["id", "radio14", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio14"], [1, "media-body"], [1, "mt-0", "mega-title-badge"], [1, "badge", "badge-primary", "pull-right", "digits"], [1, "radio", "radio-secondary", "mr-3", "ml-2"], ["id", "radio13", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio13"], [1, "badge", "badge-secondary", "pull-right", "digits"], [1, "card-footer", "text-right"], ["type", "submit", 1, "btn", "btn-primary", "m-r-15"], ["type", "submit", 1, "btn", "btn-light"], [1, "card-body"], [1, "mega-inline", "plain-style"], ["id", "radio11", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio11"], ["id", "radio12", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio12"], [1, "mega-inline", "border-style"], ["id", "radio15", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio15"], ["id", "radio16", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio16"], [1, "mega-inline", "offer-style"], ["id", "radio17", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio17"], ["id", "radio18", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio18"], [1, "col-sm-12"], ["id", "radio19", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio19"], ["id", "radio20", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio20"], ["id", "radio21", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio21"], ["id", "radio22", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio22"], [1, "card", "height-equal"], [1, "mega-vertical"], [1, "mega-title", "m-b-5"], ["id", "radio23", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio23"], ["id", "radio24", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio24"], [1, "radio", "radio-success", "mr-3", "ml-2"], ["id", "radio25", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio25"], [1, "badge", "badge-success", "pull-right", "digits"], [1, "radio", "radio-info", "mr-3", "ml-2"], ["id", "radio5", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio5"], [1, "badge", "badge-info", "pull-right", "digits"], [1, "card", "mb-0"], [1, "radio", "radio-warning", "mr-3", "ml-2"], ["id", "radio26", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio26"], [1, "badge", "badge-warning", "pull-right", "digits"], [1, "rating-star-wrapper"], [1, "icofont", "icofont-star", "txt-warning"], [1, "icofont", "icofont-star", "txt-warning", "m-r-5"], [1, "radio", "radio-danger", "mr-3", "ml-2"], ["id", "radio27", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio27"], [1, "badge", "badge-danger", "pull-right", "digits"], [1, "icofont", "icofont-star"], [1, "icofont", "icofont-star", "m-r-5"], [1, "mega-horizontal"], [1, "col-sm-3"], [1, "mega-title"], [1, "col-sm-9"], ["id", "radio30", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio30"], [1, "col-sm-9", "offset-sm-3"], ["id", "radio31", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio31"], ["id", "radio32", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio32"], ["id", "radio33", "type", "radio", "name", "radio1", "value", "option1"], ["for", "radio33"]], template: function MegaOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Default Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "This option is show buydefault you don't need to add any extra class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "COD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "50 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Estimated 1 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "100 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Estimated 1 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "No Border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "By adding .plain-style class to .mega-inline You can archive this style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](58, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](59, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "COD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "50 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Estimated 1 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](71, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](72, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "100 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Estimated 1 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "Solid Border Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "By adding .border-style class to .mega-inline You can archive this style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "form", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](99, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](100, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "COD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, "50 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "Estimated 1 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](112, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](113, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "100 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, "Estimated 1 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "Offer style Border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "By adding .offer-style class to .mega-inline You can archive this style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "form", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](140, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](141, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "COD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, "50 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](148, "Estimated 1 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](153, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](154, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "100 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, "Estimated 1 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](164, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](166, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, "Inline Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "For Create inline megaoption add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, ".mega-inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, " class in form tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](184, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](185, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](188, "COD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "50 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](192, "Estimated 14-20 Day Shipping ( Duties end taxes may be due upon delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](197, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](198, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](201, "Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](203, "100 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](205, "Estimated 1 Day Shipping ( Duties end taxes may be due upon delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](210, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](211, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](214, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](216, "80 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](218, "Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](223, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](224, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](227, "Local ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](229, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, "Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](241, "Vertical Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](243, "For Create inline megaoption add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](245, ".mega-vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](246, " class in form tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "form", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252, "Delivery Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](257, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](258, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](261, "COD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](263, "50 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](264, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](265, "Estimated 10 to 15 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](268, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](270, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](271, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](274, "Fast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](276, "100 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](278, "Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](280, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](282, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](283, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](284, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](286, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](287, "Standard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](289, "80 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](291, "Estimated 3 to 5 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](292, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](294, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](295, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](296, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](297, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](299, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](300, "Local ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](302, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](304, "Estimated 3 to 5 Day Shipping ( Duties end taxes may be due upon delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](306, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](307, "Buying Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](309, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](310, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](312, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](313, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](316, "XYZ Seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](317, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](318, "250 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](320, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](321, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](322, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](323, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](324, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](325, "5 start rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](327, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](328, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](330, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](331, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](332, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](333, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](334, "ABC Seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](336, "150 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](337, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](338, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](339, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](340, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](341, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](342, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](343, "1 start rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](345, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](346, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](347, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](348, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](349, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](350, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](351, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](353, "Horizontal Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](354, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](355, "For Create inline megaoption add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](357, ".mega-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](358, " class in form tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](360, "form", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](361, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](362, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](363, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](364, "Delivery Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](366, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](367, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](368, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](369, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](370, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](371, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](372, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](373, "COD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](374, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](375, "50 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](376, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](377, "Estimated 5 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](378, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](379, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](380, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](381, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](382, "input", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](383, "label", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](384, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](385, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](386, "Fast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](387, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](388, "100 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](389, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](390, "Estimated 1 Day Shipping ( Duties end tax may be due delivery )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](391, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](392, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](393, "Buying Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](394, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](395, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](396, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](397, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](398, "input", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](399, "label", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](400, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](401, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](402, "XYZ Seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](403, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](404, "250 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](405, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](406, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](407, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](408, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](409, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](410, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](411, "5 start rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](412, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](413, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](414, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](415, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](416, "input", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](417, "label", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](418, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](419, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](420, "ABC Seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](421, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](422, "150 INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](423, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](424, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](425, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](426, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](427, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](428, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](429, "1 start rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](430, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](431, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](432, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](433, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](434, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Mega Options")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Mega Options");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWdhLW9wdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 99109:
/*!********************************************************************************!*\
  !*** ./src/app/components/forms/form-widgets/clipboard/clipboard.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipboardComponent": function() { return /* binding */ ClipboardComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);


const _c0 = function () { return ["Forms", "Form Widgets"]; };
class ClipboardComponent {
    constructor() { }
    copyInputMessage(inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
    }
    cutInputMessage(inputElement) {
        inputElement.select();
        document.execCommand('cut');
        inputElement.setSelectionRange(0, 0);
    }
    ngOnInit() {
    }
}
ClipboardComponent.??fac = function ClipboardComponent_Factory(t) { return new (t || ClipboardComponent)(); };
ClipboardComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ClipboardComponent, selectors: [["app-clipboard"]], decls: 56, vars: 4, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "clipboaard-container"], [1, "card-description"], ["id", "clipboardExample1", "type", "text", "placeholder", "type some text to copy / cut", 1, "form-control"], ["userinput", ""], [1, "mt-3"], ["type", "button", 1, "btn", "btn-primary", "btn-clipboard", 3, "click"], [1, "fa", "fa-copy"], ["type", "button", 1, "btn", "btn-secondary", "btn-clipboard-cut", "ml-1", 3, "click"], [1, "fa", "fa-cut"], ["id", "clipboardExample2", "rows", "1", "spellcheck", "false", 1, "form-control"], ["textareaInput", ""], ["id", "clipboardExample3", 1, "border", "rounded", "card-body"], ["paragraph", ""]], template: function ClipboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Clipboard On Text Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Cut/copy from text input");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ClipboardComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](13); return ctx.copyInputMessage(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, " Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ClipboardComponent_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](13); return ctx.cutInputMessage(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, " Cut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Clipboard On Textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Cut/copy from textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "textarea", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ClipboardComponent_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](31); return ctx.copyInputMessage(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, " Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ClipboardComponent_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](31); return ctx.cutInputMessage(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](38, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " Cut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Clipboard On Paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Copy from Paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "h6", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ClipboardComponent_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](50); return ctx.copyInputMessage(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](54, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, " Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Clipboard")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Clipboard");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGlwYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 15704:
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/form-widgets/ngselect/select2.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select2Component": function() { return /* binding */ Select2Component; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);





function Select2Component_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "ng-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function Select2Component_div_45_Template_ng_select_ngModelChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return (ctx_r4.selectedCitiesOuline[i_r3] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](3, 6, item_r2.buttonColor), " Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classMapInterpolate1"]("form-control form-control-", item_r2.buttonColor, " btn-square ng-select-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", item_r2.defaultBindingsList)("ngModel", ctx_r0.selectedCitiesOuline[i_r3]);
} }
function Select2Component_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "ng-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function Select2Component_div_52_Template_ng_select_ngModelChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9); const i_r7 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return (ctx_r8.selectedCities[i_r7] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](3, 6, item_r6.buttonColor), " Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classMapInterpolate1"]("form-control form-control-", item_r6.buttonColor, " btn-square ng-select-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", item_r6.defaultBindingsList)("ngModel", ctx_r1.selectedCities[i_r7]);
} }
const _c0 = function () { return ["Forms", "Form Widgets"]; };
class Select2Component {
    constructor() {
        this.defaultBindingsList = [
            { value: "1", label: "Alabama", job: "Developer" },
            { value: "2", label: "Wyoming", job: "Developer" },
            { value: "3", label: "Coming", job: "Designer", disabled: true },
            { value: "4", label: "Hanry Die", job: "Designer" },
            { value: "5", label: "John Doe", job: "Designer" },
        ];
        this.disable = false;
        this.selectedCities = [];
        this.selectedCitiesOuline = [];
        this.dropdowns = [
            {
                buttonColor: "primary",
                defaultBindingsList: this.defaultBindingsList
            },
            {
                buttonColor: "secondary",
                defaultBindingsList: this.defaultBindingsList
            },
            {
                buttonColor: "success",
                defaultBindingsList: this.defaultBindingsList
            },
            {
                buttonColor: "info",
                defaultBindingsList: this.defaultBindingsList
            },
            {
                buttonColor: "warning",
                defaultBindingsList: this.defaultBindingsList
            },
            {
                buttonColor: "inverse",
                defaultBindingsList: this.defaultBindingsList
            },
        ];
    }
    ngOnInit() {
    }
}
Select2Component.??fac = function Select2Component_Factory(t) { return new (t || Select2Component)(); };
Select2Component.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: Select2Component, selectors: [["app-select2"]], decls: 53, vars: 23, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "select2-drpdwn"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "mb-2"], [1, "col-form-label"], ["placeholder", "Select", 1, "js-example-placeholder-multiple", 3, "items", "ngModel", "ngModelChange"], ["groupBy", "job", "placeholder", "Single Select", 1, "js-example-basic-single", 3, "items", "ngModel", "ngModelChange"], ["placeholder", "Select", 1, "js-example-basic-multiple", 3, "items", "ngModel", "multiple", "ngModelChange"], ["id", "rtl-support", 1, "col-form-label"], ["placeholder", "Select", "dir", "rtl", 1, "js-example-basic-multiple", "rtl", 3, "items", "ngModel", "multiple", "ngModelChange"], ["placeholder", "Select", 1, "js-example-basic-multiple-limit", 3, "items", "ngModel", "multiple", "maxSelectedItems", "ngModelChange"], ["placeholder", "Select", 1, "js-example-disabled", 3, "items", "ngModel", "disabled", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", "ml-1", 3, "click"], [1, "col-md-6"], ["class", "mb-2", 4, "ngFor", "ngForOf"], ["placeholder", "Select", 3, "items", "ngModel", "ngModelChange"]], template: function Select2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "NG SELECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Default Placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_13_listener($event) { return ctx.selectedCity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Single select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_17_listener($event) { return ctx.selectgroupby = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Select2 multi select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_21_listener($event) { return ctx.multipleSelectedCity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "RTL support");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "ng-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_25_listener($event) { return ctx.rtl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Limiting The Number Of Selections");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "ng-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_29_listener($event) { return ctx.multipleSelectedCity1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Enable-Disable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function Select2Component_Template_ng_select_ngModelChange_33_listener($event) { return ctx.selectedCity1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function Select2Component_Template_button_click_35_listener() { return ctx.disable = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function Select2Component_Template_button_click_37_listener() { return ctx.disable = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Disable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Outline Color Variant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](45, Select2Component_div_45_Template, 5, 8, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Full Colored Variant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](52, Select2Component_div_52_Template, 5, 8, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Ngselect")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](22, _c0))("active_item", "Ngselect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", ctx.defaultBindingsList)("ngModel", ctx.selectedCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", ctx.defaultBindingsList)("ngModel", ctx.selectgroupby);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", ctx.defaultBindingsList)("ngModel", ctx.multipleSelectedCity)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", ctx.defaultBindingsList)("ngModel", ctx.rtl)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", ctx.defaultBindingsList)("ngModel", ctx.multipleSelectedCity1)("multiple", true)("maxSelectedItems", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", ctx.defaultBindingsList)("ngModel", ctx.selectedCity1)("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.dropdowns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.dropdowns);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6821:
/*!**************************************************************************!*\
  !*** ./src/app/components/forms/form-widgets/switch/switch.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchComponent": function() { return /* binding */ SwitchComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);


const _c0 = function () { return ["Forms", "Form Widgets"]; };
class SwitchComponent {
    constructor() { }
    ngOnInit() {
    }
}
SwitchComponent.??fac = function SwitchComponent_Factory(t) { return new (t || SwitchComponent)(); };
SwitchComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: SwitchComponent, selectors: [["app-switch"]], decls: 346, vars: 4, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6", "col-lg-12", "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-body", "row", "switch-showcase", "height-equal"], [1, "col-sm-12"], [1, "media"], [1, "col-form-label", "m-r-10"], [1, "media-body", "text-right"], [1, "switch"], ["type", "checkbox", "checked", ""], [1, "switch-state"], ["type", "checkbox"], [1, "media-body", "text-right", "icon-state"], ["type", "checkbox", "disabled", ""], [1, "switch-state", "bg-primary"], [1, "switch-state", "bg-secondary"], [1, "switch-state", "bg-success"], [1, "switch-state", "bg-info"], [1, "switch-state", "bg-warning"], [1, "switch-state", "bg-danger"], [1, "card-body", "row", "switch-showcase"], [1, "media-body", "text-right", "icon-state", "switch-outline"], [1, "col-sm-12", "col-xl-4", "xl-50"], [1, "media-body", "text-right", "switch-lg"], [1, "media-body", "text-right", "switch-sm"], [1, "media-body", "text-right", "switch-lg", "icon-state"], [1, "media-body", "text-right", "switch-sm", "icon-state"], [1, "col-sm-12", "col-xl-4", "xl-100"], ["type", "checkbox", "checked", "", "disabled", ""]], template: function SwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Basic Switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Default Switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Unhecked Switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "With Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Unhecked With Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Disabled State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Disabled With Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](50, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](51, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "Switch Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "Primary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](64, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](65, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "Secondary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](71, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](72, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "Success Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](78, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](79, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "Info Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](85, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](86, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "Warning Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](92, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](93, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "Danger Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](99, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](100, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, "Switch Outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Primary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](113, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](114, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "Secondary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](120, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](121, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "Success Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](127, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](128, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](131, "Info Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](134, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](135, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, "Warning Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](141, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](142, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](145, "Danger Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](148, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](149, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](154, "Switch unchecked Outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "Primary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](162, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](163, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](166, "Secondary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](169, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](170, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "Success Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](176, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](177, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](180, "Info Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](183, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](184, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](187, "Warning Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](190, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](191, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](194, "Danger Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](197, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](198, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](203, "Switch Sizing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, "Large Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](211, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](212, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](215, "Large Unhecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](218, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](219, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](222, "Normal Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](225, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](226, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](229, "Normal Unhecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](232, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](233, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "Small Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](239, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](240, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](243, "Small Size Unhecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](246, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](247, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252, "Switch With icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](257, "Large Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](260, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](261, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](264, "Large Unhecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](267, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](268, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](270, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](271, "Normal Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](274, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](275, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](276, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](278, "Normal Unhecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](280, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](281, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](282, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](284, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](285, "Small Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](286, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](288, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](289, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](292, "Small Size Unhecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](294, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](295, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](296, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](299, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](301, "Switch With color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](304, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](306, "Primary Color (Disabled)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](307, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](309, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](310, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](313, "Secondary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](316, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](317, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](320, "Success Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](321, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](322, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](323, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](324, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](325, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](327, "Info Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](328, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](330, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](331, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](332, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](333, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](334, "Warning Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](336, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](337, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](338, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](339, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](340, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](341, "Danger Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](343, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](344, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](345, "span", 22);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "Switch")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("active_item", "Switch");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2l0Y2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 40573:
/*!********************************************************************************!*\
  !*** ./src/app/components/forms/form-widgets/touchspin/touchspin.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TouchspinComponent": function() { return /* binding */ TouchspinComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);




function TouchspinComponent_div_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const content_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](content_r1);
} }
const _c0 = function () { return ["Forms", "Form Widgets"]; };
class TouchspinComponent {
    constructor() {
        this.counter = [40, 55, 40, 40, 40, 20, 40, 50.00, 40, 40, 50, 50, 40, 60, 40];
        this.contents = ["Action", "Another Action", "Something Else Here"];
    }
    increment(i) {
        if (i === 0 || i === 1 || i === 2 || i === 3 || i === 5 || i === 6 || i === 8 || i === 9 || i === 10 || i === 11 || i === 12 || i === 13 || i === 14) {
            this.counter[i] += 1;
        }
        else if (i === 4) {
            if (this.counter[i] < 80) {
                this.counter[i] += 1;
            }
        }
        else if (i === 7) {
            this.counter[i] += 0.25;
        }
    }
    decrement(i) {
        if (i === 0 || i === 1 || i === 2 || i === 3 || i === 5 || i === 6 || i === 8 || i === 9 || i === 10 || i === 11 || i === 12 || i === 13 || i === 14) {
            if (this.counter[i] > 1) {
                this.counter[i] -= 1;
            }
        }
        else if (i === 4) {
            if (this.counter[i] > 40) {
                this.counter[i] -= 1;
            }
        }
        else if (i === 7) {
            if (this.counter[i] > 1) {
                this.counter[i] -= 0.25;
            }
        }
    }
    ngOnInit() {
    }
}
TouchspinComponent.??fac = function TouchspinComponent_Factory(t) { return new (t || TouchspinComponent)(); };
TouchspinComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: TouchspinComponent, selectors: [["app-touchspin"]], decls: 325, vars: 20, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "bootstrap-touchspin"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "input-group", "bootstrap-touchspin"], ["type", "button", 1, "btn", "btn-primary", "btn-square", "bootstrap-touchspin-down", 3, "click"], [1, "fa", "fa-minus"], ["type", "text", 1, "touchspin", "form-control", 3, "value"], [1, "input-group-append", "ml-0"], ["type", "button", 1, "btn", "btn-primary", "btn-square", "bootstrap-touchspin-up", 3, "click"], [1, "fa", "fa-plus"], [1, "touchspin-vertical-tab"], ["type", "text", 1, "touchspin-vertical", "form-control", 3, "value"], [1, "input-group-btn-vertical"], [1, "fa", "fa-angle-up"], [1, "fa", "fa-angle-down"], [1, "input-group-prepend"], ["type", "text", "data-bts-postfix", "%", 1, "touchspin", "form-control", 3, "value"], [1, "input-group-append"], [1, "input-group-text", "bootstrap-touchspin-postfix"], [1, "input-group-text", "bootstrap-touchspin-prefix"], ["type", "text", "data-bts-prefix", "#", 1, "touchspin", "form-control", 3, "value"], [1, "fa", "fa-check"], [1, "dropdown-basic"], ["ngbDropdown", "", 1, "dropdown"], [1, "btn-group", "mb-0", "mr-0"], ["type", "button", "ngbDropdownToggle", "", 1, "dropbtn", "btn-light", "txt-dark"], ["ngbDropdownMenu", ""], [4, "ngFor", "ngForOf"], ["type", "text", 1, "touchspin-stop-mousewheel", "form-control", 3, "value"], [1, "input-group", "input-group-sm", "bootstrap-touchspin"], [1, "col-sm-12"], [1, "input-group", "input-group-lg", "bootstrap-touchspin"], ["ngbDropdownItem", ""]], template: function TouchspinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Default Touchspin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, ".touchspin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, " class to input to add touchspin input group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_17_listener() { return ctx.decrement(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_21_listener() { return ctx.increment(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "vertical Touchspin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, ".touchspin-vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, " class for vertical touchspin input group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_39_listener() { return ctx.increment(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](40, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_41_listener() { return ctx.decrement(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Touchspin with Postfix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "data-bts-postfix=\"POSTFIX_VALUE\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, " attribute to input to add postfix to touchspin input group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_57_listener() { return ctx.decrement(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](58, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](59, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_64_listener() { return ctx.increment(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](65, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "Touchspin with Prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, "data-bts-prefix=\"PREFIX_VALUE\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, " attribute to input to add prefix to touchspin input group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_80_listener() { return ctx.decrement(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](81, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](85, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_87_listener() { return ctx.increment(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](88, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "Min Max Value of Touchspin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "data-bts-min=\"VALUE\" data-bts-max=\"VALUE\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, " attribute to input to set min and max value of touchspin input.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_103_listener() { return ctx.decrement(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](104, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](105, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_107_listener() { return ctx.increment(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](108, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, "Touchspin with initial Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "data-bts-init-val=\"VALUE\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, " attribute attribute to set initial value for input group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_123_listener() { return ctx.decrement(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](124, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](125, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_127_listener() { return ctx.increment(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](128, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "Touchspin steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, "data-bts-step=\"VALUE\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, " attribute for increament and decrement steps to touchspin input group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_143_listener() { return ctx.decrement(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](144, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](145, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_147_listener() { return ctx.increment(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](148, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "Decimal Value of Touchspin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "data-bts-decimal=\"VALUE\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, " attribute to use decimal value of touchspin input.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_163_listener() { return ctx.decrement(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](164, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](165, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_167_listener() { return ctx.increment(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](168, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "Change Button Class to link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](177, "data-bts-button-down-class & data-bts-button-up-class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](178, " attribute to change button Class.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_183_listener() { return ctx.decrement(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](184, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](185, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_187_listener() { return ctx.increment(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](188, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, "Touchspin With Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](195, "Add icon class in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](197, "data-bts-postfix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](198, " attribute to icon to postfix as well prefix.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_203_listener() { return ctx.decrement(9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](204, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](205, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](208, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_210_listener() { return ctx.increment(9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](211, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](216, "Touchspin Icon Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](218, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, "data-bts-button-down-txt & data-bts-button-up-txt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](221, " attribute to set touchspin icon button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_226_listener() { return ctx.decrement(10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](227, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](228, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_230_listener() { return ctx.increment(10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](231, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "Touchspin With Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](240, "data-bts-prefix & data-bts-postfix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](241, " attribute to set Prefix and Postfix to touchspin input with button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_246_listener() { return ctx.decrement(11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](247, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](250, "Pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](251, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_256_listener() { return ctx.increment(11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](257, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](262, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](264, TouchspinComponent_div_264_Template, 3, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](268, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](269, "Touchspin mousewheel Disable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](270, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](271, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](273, ".touchspin-stop-mousewheel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](274, " class to diable mousewheel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](276, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](278, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_279_listener() { return ctx.decrement(12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](280, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](281, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](282, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_283_listener() { return ctx.increment(12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](284, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](286, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](289, "Small Horizontal Touchspin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](291, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](293, ".input-group-sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](294, " class to input-group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](295, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](299, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_299_listener() { return ctx.decrement(13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](300, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](301, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_303_listener() { return ctx.increment(13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](304, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](306, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](307, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](309, "Large Horizontal Touchspin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](310, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](312, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](314, ".input-group-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](315, " class to input-group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](316, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](317, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_319_listener() { return ctx.decrement(14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](320, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](321, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](322, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](323, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TouchspinComponent_Template_button_click_323_listener() { return ctx.increment(14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](324, "i", 15);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("title", "TouchSpin")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](19, _c0))("active_item", "TouchSpin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[7]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[8]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[10]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[11]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.contents);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[12]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[13]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.counter[14]);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownItem], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3VjaHNwaW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 45197:
/*!**********************************************************!*\
  !*** ./src/app/components/forms/forms-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsRoutingModule": function() { return /* binding */ FormsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _form_controls_base_inputs_base_inputs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-controls/base-inputs/base-inputs.component */ 15370);
/* harmony import */ var _form_controls_checkbox_radio_checkbox_radio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-controls/checkbox-radio/checkbox-radio.component */ 87484);
/* harmony import */ var _form_controls_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-controls/form-validation/form-validation.component */ 78044);
/* harmony import */ var _form_controls_input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-controls/input-groups/input-groups.component */ 77712);
/* harmony import */ var _form_controls_mega_options_mega_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-controls/mega-options/mega-options.component */ 6785);
/* harmony import */ var _form_widgets_touchspin_touchspin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-widgets/touchspin/touchspin.component */ 40573);
/* harmony import */ var _form_widgets_ngselect_select2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-widgets/ngselect/select2.component */ 15704);
/* harmony import */ var _form_widgets_switch_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-widgets/switch/switch.component */ 6821);
/* harmony import */ var _form_widgets_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-widgets/clipboard/clipboard.component */ 99109);
/* harmony import */ var _form_Layouts_form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-Layouts/form-wizard/form-wizard.component */ 27378);
/* harmony import */ var _form_Layouts_default_form_default_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-Layouts/default-form/default-form.component */ 22808);
/* harmony import */ var _form_Layouts_form_wizard_two_form_wizard_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-Layouts/form-wizard-two/form-wizard-two.component */ 48314);
/* harmony import */ var _form_Layouts_form_wizard_three_form_wizard_three_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form-Layouts/form-wizard-three/form-wizard-three.component */ 82663);
/* harmony import */ var _form_Layouts_form_wizard_four_form_wizard_four_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-Layouts/form-wizard-four/form-wizard-four.component */ 17988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);

















const routes = [
    {
        path: '',
        children: [
            {
                path: "form-controls",
                children: [
                    {
                        path: 'validation',
                        component: _form_controls_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_2__.FormValidationComponent
                    },
                    {
                        path: 'inputs',
                        component: _form_controls_base_inputs_base_inputs_component__WEBPACK_IMPORTED_MODULE_0__.BaseInputsComponent
                    },
                    {
                        path: 'checkbox-radio',
                        component: _form_controls_checkbox_radio_checkbox_radio_component__WEBPACK_IMPORTED_MODULE_1__.CheckboxRadioComponent
                    },
                    {
                        path: 'input-groups',
                        component: _form_controls_input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_3__.InputGroupsComponent
                    },
                    {
                        path: 'mega-options',
                        component: _form_controls_mega_options_mega_options_component__WEBPACK_IMPORTED_MODULE_4__.MegaOptionsComponent
                    },
                ]
            },
            {
                path: "form-widgets",
                children: [
                    {
                        path: "touchspin",
                        component: _form_widgets_touchspin_touchspin_component__WEBPACK_IMPORTED_MODULE_5__.TouchspinComponent,
                    },
                    {
                        path: "ngselect",
                        component: _form_widgets_ngselect_select2_component__WEBPACK_IMPORTED_MODULE_6__.Select2Component
                    },
                    {
                        path: "switch",
                        component: _form_widgets_switch_switch_component__WEBPACK_IMPORTED_MODULE_7__.SwitchComponent
                    },
                    {
                        path: "clipboard",
                        component: _form_widgets_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_8__.ClipboardComponent
                    },
                ]
            },
            {
                path: "form-layout",
                children: [
                    {
                        path: "default-form",
                        component: _form_Layouts_default_form_default_form_component__WEBPACK_IMPORTED_MODULE_10__.DefaultFormComponent
                    },
                    {
                        path: "form-wizard",
                        component: _form_Layouts_form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_9__.FormWizardComponent
                    },
                    {
                        path: "form-wizard-two",
                        component: _form_Layouts_form_wizard_two_form_wizard_two_component__WEBPACK_IMPORTED_MODULE_11__.FormWizardTwoComponent
                    },
                    {
                        path: "form-wizard-three",
                        component: _form_Layouts_form_wizard_three_form_wizard_three_component__WEBPACK_IMPORTED_MODULE_12__.FormWizardThreeComponent
                    },
                    {
                        path: "form-wizard-four",
                        component: _form_Layouts_form_wizard_four_form_wizard_four_component__WEBPACK_IMPORTED_MODULE_13__.FormWizardFourComponent
                    },
                ]
            }
        ]
    }
];
class FormsRoutingModule {
}
FormsRoutingModule.??fac = function FormsRoutingModule_Factory(t) { return new (t || FormsRoutingModule)(); };
FormsRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineNgModule"]({ type: FormsRoutingModule });
FormsRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["????setNgModuleScope"](FormsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] }); })();


/***/ }),

/***/ 36106:
/*!**************************************************!*\
  !*** ./src/app/components/forms/forms.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormModule": function() { return /* binding */ FormModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-archwizard */ 72386);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _form_controls_base_inputs_base_inputs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-controls/base-inputs/base-inputs.component */ 15370);
/* harmony import */ var _form_controls_checkbox_radio_checkbox_radio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-controls/checkbox-radio/checkbox-radio.component */ 87484);
/* harmony import */ var _form_controls_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-controls/form-validation/form-validation.component */ 78044);
/* harmony import */ var _form_controls_input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-controls/input-groups/input-groups.component */ 77712);
/* harmony import */ var _form_controls_mega_options_mega_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-controls/mega-options/mega-options.component */ 6785);
/* harmony import */ var _form_Layouts_default_form_default_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-Layouts/default-form/default-form.component */ 22808);
/* harmony import */ var _form_Layouts_form_wizard_four_form_wizard_four_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-Layouts/form-wizard-four/form-wizard-four.component */ 17988);
/* harmony import */ var _form_Layouts_form_wizard_three_form_wizard_three_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-Layouts/form-wizard-three/form-wizard-three.component */ 82663);
/* harmony import */ var _form_Layouts_form_wizard_two_form_wizard_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-Layouts/form-wizard-two/form-wizard-two.component */ 48314);
/* harmony import */ var _form_Layouts_form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-Layouts/form-wizard/form-wizard.component */ 27378);
/* harmony import */ var _form_widgets_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-widgets/clipboard/clipboard.component */ 99109);
/* harmony import */ var _form_widgets_ngselect_select2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form-widgets/ngselect/select2.component */ 15704);
/* harmony import */ var _form_widgets_switch_switch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-widgets/switch/switch.component */ 6821);
/* harmony import */ var _form_widgets_touchspin_touchspin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form-widgets/touchspin/touchspin.component */ 40573);
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forms-routing.module */ 45197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);























class FormModule {
}
FormModule.??fac = function FormModule_Factory(t) { return new (t || FormModule)(); };
FormModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineNgModule"]({ type: FormModule });
FormModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _forms_routing_module__WEBPACK_IMPORTED_MODULE_15__.FormsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule,
            angular_archwizard__WEBPACK_IMPORTED_MODULE_21__.ArchwizardModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["????setNgModuleScope"](FormModule, { declarations: [_form_controls_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_3__.FormValidationComponent,
        _form_controls_checkbox_radio_checkbox_radio_component__WEBPACK_IMPORTED_MODULE_2__.CheckboxRadioComponent,
        _form_controls_input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_4__.InputGroupsComponent,
        _form_controls_mega_options_mega_options_component__WEBPACK_IMPORTED_MODULE_5__.MegaOptionsComponent,
        _form_controls_base_inputs_base_inputs_component__WEBPACK_IMPORTED_MODULE_1__.BaseInputsComponent,
        _form_widgets_touchspin_touchspin_component__WEBPACK_IMPORTED_MODULE_14__.TouchspinComponent,
        _form_widgets_ngselect_select2_component__WEBPACK_IMPORTED_MODULE_12__.Select2Component,
        _form_widgets_switch_switch_component__WEBPACK_IMPORTED_MODULE_13__.SwitchComponent,
        _form_widgets_clipboard_clipboard_component__WEBPACK_IMPORTED_MODULE_11__.ClipboardComponent,
        _form_Layouts_default_form_default_form_component__WEBPACK_IMPORTED_MODULE_6__.DefaultFormComponent,
        _form_Layouts_form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_10__.FormWizardComponent,
        _form_Layouts_form_wizard_two_form_wizard_two_component__WEBPACK_IMPORTED_MODULE_9__.FormWizardTwoComponent,
        _form_Layouts_form_wizard_three_form_wizard_three_component__WEBPACK_IMPORTED_MODULE_8__.FormWizardThreeComponent,
        _form_Layouts_form_wizard_four_form_wizard_four_component__WEBPACK_IMPORTED_MODULE_7__.FormWizardFourComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _forms_routing_module__WEBPACK_IMPORTED_MODULE_15__.FormsRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule,
        angular_archwizard__WEBPACK_IMPORTED_MODULE_21__.ArchwizardModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectModule] }); })();


/***/ }),

/***/ 76181:
/*!****************************************************!*\
  !*** ./src/app/shared/validators/passwordMatch.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MustMatch": function() { return /* binding */ MustMatch; }
/* harmony export */ });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ 20104:
/*!*************!*\
  !*** tslib ***!
  \*************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);
//# sourceMappingURL=src_app_components_forms_forms_module_ts-es2015.js.map