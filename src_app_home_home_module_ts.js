"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_home_home_module_ts"],{

/***/ 4022:
/*!*******************************************!*\
  !*** ./src/app/constant/frontend.data.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontend": () => (/* binding */ frontend)
/* harmony export */ });
const frontend = [
    {
        cover: '/assets/frontend/screenshot-ce',
        title: 'Screenshot Chrome Extension',
        subtitle: 'Angular 13, RxJS, TypeScript',
        description: 'Utility to automate the process of take screenshot in multiple resolutions',
        links: [
            {
                name: 'Repository',
                zelda: 'https://github.com/jotaate/screenshot-chrome-extension',
            },
        ],
        endDate: 2022,
    },
    {
        cover: '/assets/frontend/deck-builder',
        title: 'Yu-Gi-Oh! Deck Builder',
        subtitle: 'Angular 13, RxJS, TypeScript',
        description: 'Simple application to show concepts about reactive programming and good practices in Angular',
        links: [
            { name: 'Repository', zelda: 'https://github.com/jotaate/deck-builder' },
            { name: 'Demo', zelda: 'https://jotaate.github.io/ygo-deck-builder/' },
        ],
        endDate: 2022,
    },
    {
        cover: '/assets/frontend/kavak',
        title: 'KAVAK',
        subtitle: 'Typescript, Angular 11, Stencil, RxJs, Storybook',
        description: 'Platform dedicated to the trade of used cars',
        links: [{ name: 'Navigate to Kavak.com', zelda: 'https://www.kavak.com/' }],
        startDate: 2018,
        endDate: -1,
    },
];


/***/ }),

/***/ 7470:
/*!*********************************************!*\
  !*** ./src/app/constant/videogames.data.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "videogames": () => (/* binding */ videogames)
/* harmony export */ });
const videogames = [
    {
        cover: '/assets/vg/crowd-simulation',
        title: 'Crowd Simulation',
        subtitle: 'Unity3D',
        description: 'Research about crowd simulation models.',
        links: [
            {
                name: 'Video',
                zelda: 'https://youtu.be/dblzEx7WnDI',
            },
        ],
        startDate: 2018,
        endDate: 2019,
    },
    {
        cover: '/assets/vg/ygo',
        title: 'Yugioh Duelist of the Roses',
        subtitle: 'Unity3D',
        description: 'A remake based on the game Yu-Gi-Oh! Duelist of the Roses',
        links: [
            {
                name: 'Video',
                zelda: 'https://youtu.be/uUspAGvrGdE',
            },
        ],
        endDate: 2018,
    },
    {
        cover: '/assets/vg/caza-a-casa',
        title: 'Caza a Casa',
        subtitle: 'Unity3D',
        description: 'A 2D game platformer inspired by petroglyphs, figures engraved in stone thousands of years ago.',
        links: [
            {
                name: 'Video',
                zelda: 'https://www.youtube.com/watch?v=K7vWXWfpdD0',
            },
        ],
        endDate: 2018,
    },
    {
        cover: '/assets/vg/goku-escape-itachi-no-jutsu',
        title: 'Goku escape Itachi no Jutsu',
        subtitle: 'LÖVE 2D',
        description: 'A simple game developed in orden to learn about Lua programming language.',
        links: [
            {
                name: 'Video',
                zelda: 'https://youtu.be/Z_l2B_m0t9A',
            },
        ],
        endDate: 2018,
    },
    {
        cover: '/assets/vg/ai4vg-3',
        title: 'States Machines',
        subtitle: 'Unity3D',
        description: 'Implementation of FSM to allow NPC can make decisions according to the game state.',
        links: [
            {
                name: 'Video',
                zelda: 'https://www.youtube.com/watch?v=NBQ8Mfu8y_c',
            },
        ],
        endDate: 2017,
    },
    {
        cover: '/assets/vg/ai4vg-2',
        title: 'Navigation Mesh',
        subtitle: 'Unity3D',
        description: 'Automatic generation of navmesh voxel based from scratch and integration with A* algorithm.',
        links: [
            {
                name: 'Video',
                zelda: 'https://youtu.be/kCVZcDi-71w',
            },
        ],
        endDate: 2017,
    },
    {
        cover: '/assets/vg/ai4vg-1',
        title: 'Steering Behaviors',
        subtitle: 'Unity3D',
        description: 'Interesting movement algorithms based on steering behavior principles.',
        links: [
            {
                name: 'Video',
                zelda: 'https://youtu.be/r7ljr2gJ3eU',
            },
        ],
        endDate: 2017,
    },
    {
        cover: '/assets/vg/tps',
        title: 'TPS Protopyte',
        subtitle: 'Unity3D',
        description: 'A template to third person shooter with include player controller, enemies, policies, vehicles and wanted system and more.',
        links: [
            {
                name: 'Video',
                zelda: 'https://www.youtube.com/watch?v=3qoVqg6spMU',
            },
        ],
        endDate: 2015,
    },
    {
        cover: '/assets/vg/first-game-1',
        title: 'TPS Sandbox Prototype',
        subtitle: 'Unity3D',
        description: 'In my introduction to game development, I made a large-scale prototype of a third person open world game over a period of 1 year.',
        links: [
            {
                name: 'Video',
                zelda: 'https://www.youtube.com/watch?v=jy9TMtB9WaE',
            },
        ],
        endDate: 2013,
    },
];


/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var src_app_constant_videogames_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constant/videogames.data */ 7470);
/* harmony import */ var src_app_constant_frontend_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constant/frontend.data */ 4022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function HomeComponent_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { card: a0 }; };
function HomeComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_ng_container_13_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, project_r4));
} }
function HomeComponent_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function HomeComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_ng_container_21_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const project_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, project_r6));
} }
function HomeComponent_ng_template_22_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).card;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", (card_r8 == null ? null : card_r8.startDate) ? (card_r8 == null ? null : card_r8.startDate) + " -" : "", " ", (card_r8 == null ? null : card_r8.endDate) === -1 ? "present" : card_r8 == null ? null : card_r8.endDate, "");
} }
function HomeComponent_ng_template_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "source", 14)(3, "source", 15)(4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HomeComponent_ng_template_22_div_1_div_5_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().card;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("srcset", card_r8.cover + ".webp", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("srcset", card_r8.cover + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", card_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (card_r8 == null ? null : card_r8.startDate) || (card_r8 == null ? null : card_r8.endDate));
} }
function HomeComponent_ng_template_22_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", link_r14.zelda, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", link_r14.name, " ");
} }
function HomeComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_ng_template_22_div_1_Template, 6, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 8)(3, "div", 9)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HomeComponent_ng_template_22_a_12_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const card_r8 = ctx.card;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", card_r8.cover);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r8 == null ? null : card_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r8 == null ? null : card_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r8 == null ? null : card_r8.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", card_r8 == null ? null : card_r8.links);
} }
class HomeComponent {
    constructor() {
        this.videogames = src_app_constant_videogames_data__WEBPACK_IMPORTED_MODULE_0__.videogames;
        this.frontend = src_app_constant_frontend_data__WEBPACK_IMPORTED_MODULE_1__.frontend;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], hostAttrs: [1, "h-100"], decls: 24, vars: 2, consts: [[1, "container"], [1, "description"], [1, "content"], [4, "ngFor", "ngForOf"], ["cardTemplate", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "card"], ["class", "pic-wrapper", 4, "ngIf"], [1, "card-body"], [1, "card-header"], [1, "card-description"], [1, "card-links"], [3, "href", 4, "ngFor", "ngForOf"], [1, "pic-wrapper"], ["type", "image/webp", 3, "srcset"], ["type", "image/jpg", 3, "srcset"], ["width", "320", "height", "180", "draggable", "false", 3, "alt"], ["class", "date", 4, "ngIf"], [1, "date"], [3, "href"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Juan Ortiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Welcome! Thank you for taking the time to look through my portfolio - I am constantly adding new projects, features, and insights to this site as I learn and grow as a programmer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "section")(7, "div", 1)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Frontend Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " I enjoy working closely with teammates to build robust applications which enrich user experience providing a faster, responsive and consistent navigation. I\u2019ve been working as a Frontend Engineer for almost 4 years, developing applications using tools such as Angular, Stencil, TypeScript, JavaScript, RxJS, Jest, HTML, SCSS and Storybook. The architecture is the most interesting area for me for now and I am currently learning about microfront. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HomeComponent_ng_container_13_Template, 2, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "section")(15, "div", 1)(16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Game Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " I'm entusiastic about videogames and I have been develop several prototypes. I have almost 10 years of expericience using Unity Engine and in the future I would like to work as Game Developer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, HomeComponent_ng_container_21_Template, 2, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, HomeComponent_ng_template_22_Template, 13, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.frontend);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.videogames);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".description[_ngcontent-%COMP%] {\n  max-width: 960px;\n  padding: 0 1rem;\n  margin: 0 auto 2rem;\n}\n.description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\nsection[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  max-width: 18rem;\n  background: #ecf4ff;\n  display: flex;\n  flex-direction: column;\n  border-radius: 8px;\n  padding-bottom: 1rem;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .pic-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .pic-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  max-width: 100%;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .pic-wrapper[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.1rem 0.2rem;\n  border-bottom-left-radius: 4px;\n  background-color: azure;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem 0;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-links[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7O0VBRUUsa0JBQUE7QUFDSjtBQUdBO0VBQ0UsbUJBQUE7QUFBRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUNNO0VBQ0Usa0JBQUE7QUFDUjtBQUNRO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDVjtBQUVRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUFWO0FBSU07RUFDRSx3QkFBQTtBQUZSO0FBSVE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFGVjtBQUtRO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUhWO0FBS1U7RUFDRSxrQkFBQTtBQUhaIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb24ge1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIG1hcmdpbjogMCBhdXRvIDJyZW07XG5cbiAgaDEsXG4gIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5jYXJkIHtcbiAgICAgIG1heC13aWR0aDogMThyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAjZWNmNGZmO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAgIC5waWMtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMC4ycmVtO1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwO1xuXG4gICAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtbGlua3Mge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map