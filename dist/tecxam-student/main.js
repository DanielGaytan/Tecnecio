(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");







var routes = [
    { path: 'room', component: _room_room_component__WEBPACK_IMPORTED_MODULE_3__["RoomComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
    { path: 'quiz', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"] },
    { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"] },
    { path: '', redirectTo: 'room', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tecxam-student';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/fesm5/ngu-carousel.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pinch-zoom */ "./node_modules/ngx-pinch-zoom/fesm5/ngx-pinch-zoom.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_12__["QuizComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_13__["ResultComponent"],
                _room_room_component__WEBPACK_IMPORTED_MODULE_15__["RoomComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_3__["NguCarouselModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__["PinchZoomModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n  <nav>\n    <div class=\"nav-wrapper\">\n      <a class=\"brand-logo center\">ROOMID</a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><i class=\"material-icons right\">view_module</i></li>\n      </ul>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-fixed {\n  position: fixed; }\n\nnav {\n  background-color: #ffb725; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EYW5pZWxHL0RvY3VtZW50cy9BUElTL3RlY25lY2lvL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWZpeGVkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5uYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmI3MjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<section [ngClass]=\"{'show': !started, 'hide': started}\">\n  <div class=\"row\">\n    <div class=\"col s12\">\n        <!-- blue-grey darken-1 -->\n      <div class=\"card card-full-nav\">\n          <!-- white-text -->\n        <div class=\"card-content \">\n          <span class=\"card-title\">ESTEREOISOMERÍA ÓPTICA DE MOLECULAS ORGANICAS</span>\n          <p>Los estereoisómeros son compuestos que se forman por el mismo tipo y numero de átomos unidos en la misma secuencia, pero con distinta disposición espacial. (Conocimiento de la estructura de una molécula).\n            Existen dos tipos de estereoisómeros: los isómeros geométricos y los isómeros ópticos.</p>\n          <br>\n          <p>Duración: 20 min</p>\n          <br>\n          <div class=\"card-action\">\n            <button class=\"btn btn-large btn-submit\" (click)=\"startExam()\">Empezar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"fix-overflow\">\n  <div class=\"row\">\n    <div class=\"col s12 fixed\">\n      <div class=\"card card-full-nav-2\">\n        <span class=\"card-title m-4\">Tiempo restante: {{time}}\n          <div class=\"progress\">\n            <div class=\"determinate\" [style.width.%]=\"percentage\"></div>\n          </div>\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col s12\">\n        <ngu-carousel class=\"card-full-nav-3\" #myCarousel [inputs]=\"carouselConfig\" [dataSource]=\"carouselItems\" (onMove)=\"onChange($event)\">\n            <div *nguCarouselDef=\"let item; let i = index\" class=\"item\">\n                <div class=\"tile\">\n                  <!-- {{i}} -->\n                    <mat-radio-group *ngIf=\"item.type == 1\"\n                      aria-labelledby=\"example-radio-group-label\"\n                      class=\"example-radio-group\"\n                      >\n                      <h4>{{item.question}}</h4><br>\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let a of item.answers\" [value]=\"a\">\n                        {{a}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                    <mat-radio-group *ngIf=\"item.type == 2\"\n                      aria-labelledby=\"example-radio-group-label\"\n                      class=\"example-radio-group\"\n                      >\n                      <h4>{{item.question}}</h4><br>\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let a of item.answers\" [value]=\"a\">\n                        {{a}}\n                      </mat-radio-button>\n                      <img class=\"answer-image\" src=\"{{item.image}}\" alt=\"\" (click)=\"zoomIn(item.image)\">\n                    </mat-radio-group>\n    \n                    <mat-radio-group *ngIf=\"item.type == 3\"\n                      aria-labelledby=\"example-radio-group-label\"\n                      class=\"example-radio-group\"\n                      >\n                      <h4>{{item.question}}</h4><br>\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let a of item.answers\" [value]=\"a\">\n                        <img class=\"answer-image\" src=\"{{a}}\" alt=\"\" (click)=\"zoomIn(a)\">\n                      </mat-radio-button>\n                    </mat-radio-group>\n                    <div *ngIf=\"item.type == 4\" class=\"example-radio-group\" >\n                        <h4>{{item.question}}</h4><br>\n                        <mat-checkbox *ngFor=\"let a of item.answers\" class=\"example-radio-button\">{{a}}</mat-checkbox>\n                    </div>\n                    <!-- <mat-selection-list *ngIf=\"item.type == 4\">\n                        <h4>{{item.question}}</h4><br>\n                        <mat-list-option *ngFor=\"let a of item.answers\" checkboxPosition=\"before\">\n                          {{a}}\n                        </mat-list-option>\n                    </mat-selection-list> -->\n                </div>\n            </div>\n            <ul class=\"myPoint\" NguCarouselPoint>\n              <li *ngFor=\"let j of myCarousel.pointNumbers; let j = index\" [class.active]=\"j==myCarousel.activePoint\" (click)=\"myCarousel.moveTo(j)\"></li>\n            </ul>\n            </ngu-carousel>\n    </div>\n  </div>\n</div>\n\n<div class=\"zoom\" *ngIf=\"zoom\">\n    <button class=\"btn btn-large btn-submit\" (click)=\"zoomOut()\">X</button>\n    <pinch-zoom [zoom-button]=\"true\">\n        <img src=\"{{selectedImage}}\" alt=\"\">\n    </pinch-zoom>\n</div>"

/***/ }),

/***/ "./src/app/quiz/quiz.component.scss":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".show {\n  position: absolute;\n  z-index: 1; }\n\n.hide {\n  display: none;\n  z-index: 0; }\n\n.zoom {\n  height: 100vh;\n  width: 100vw;\n  background: #1212124a;\n  position: fixed;\n  top: 0;\n  z-index: 9999; }\n\n.item {\n  padding: 10px;\n  box-sizing: border-box; }\n\n.tile {\n  min-height: 200px;\n  background-color: white;\n  background-size: cover !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); }\n\n.leftRs {\n  display: none; }\n\n.rightRs {\n  display: none; }\n\n.myPoint {\n  list-style-type: none;\n  text-align: center;\n  padding: 12px;\n  margin: 0;\n  white-space: nowrap;\n  overflow: auto;\n  box-sizing: border-box;\n  position: absolute;\n  width: 100%;\n  bottom: 5px;\n  left: 0; }\n\n.myPoint li {\n  display: inline-block;\n  border-radius: 999px;\n  background: #ffd785;\n  padding: 5px;\n  margin: 0 3px;\n  transition: .4s ease all; }\n\n.myPoint li.active {\n  background: #909090;\n  width: 10px; }\n\n.example-list {\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden; }\n\n.example-box {\n  padding: 5px 2px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0; }\n\n.example-radio-button {\n  margin: 5px; }\n\n.answer-image {\n  height: 40%;\n  width: 40%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EYW5pZWxHL0RvY3VtZW50cy9BUElTL3RlY25lY2lvL3NyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWE7RUFDYixVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsTUFBTTtFQUNOLGFBQWEsRUFBQTs7QUFHZjtFQUNJLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1Q0FBc0MsRUFBQTs7QUFHMUM7RUFDSSxhQUFhLEVBQUE7O0FBWWpCO0VBQ0ksYUFBYSxFQUFBOztBQVlqQjtFQUNJLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPLEVBQUE7O0FBRVg7RUFDSSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QixFQUFBOztBQUU1QjtFQUNJLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBSWY7RUFDSSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUhBRThDLEVBQUE7O0FBR2hEO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0QsRUFBQTs7QUFHeEQ7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRCxFQUFBOztBQUl4RDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xdWl6L3F1aXouY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiAwO1xufVxuXG4uem9vbSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogIzEyMTIxMjRhO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLml0ZW0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiAgXG4udGlsZSB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIC4zKTtcbn1cbiAgXG4ubGVmdFJzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBtYXJnaW46IGF1dG87XG4gICAgLy8gdG9wOiAwO1xuICAgIC8vIGJvdHRvbTogMDtcbiAgICAvLyB3aWR0aDogNTBweDtcbiAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgLy8gYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgLy8gbGVmdDogMDtcbn1cblxuLnJpZ2h0UnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAvLyB0b3A6IDA7XG4gICAgLy8gYm90dG9tOiAwO1xuICAgIC8vIHdpZHRoOiA1MHB4O1xuICAgIC8vIGhlaWdodDogNTBweDtcbiAgICAvLyBib3gtc2hhZG93OiAxcHggMnB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAvLyByaWdodDogMDtcbn1cblxuLm15UG9pbnQge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiAwO1xufVxuLm15UG9pbnQgIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZDc4NTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwIDNweDtcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZSBhbGw7XG59XG4ubXlQb2ludCAgbGkuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTA5MDkwO1xuICAgIHdpZHRoOiAxMHB4O1xufVxuXG5cbi5leGFtcGxlLWxpc3Qge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJveCB7XG4gICAgcGFkZGluZzogNXB4IDJweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIFxuICAuY2RrLWRyYWctcHJldmlldyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgfVxuICBcbiAgLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxuXG5cbiAgLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4gIC5hbnN3ZXItaW1hZ2Uge1xuICAgIGhlaWdodDogNDAlO1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/fesm5/ngu-carousel.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");





var QuizComponent = /** @class */ (function () {
    function QuizComponent(cdr) {
        this.cdr = cdr;
        this.slideNo = 0;
        this.withAnim = true;
        this.resetAnim = true;
        this.started = false;
        this.zoom = false;
        this.selectedImage = '';
        this.time = "";
        this.carouselConfig = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            load: 3,
            interval: { timing: 100000000, initialDelay: 1000 },
            loop: false,
            touch: true,
            velocity: 0.2
        };
        this.test = "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>\n    {{movie.title}}\n    <img *cdkDragPreview [src]=\"movie.poster\" [alt]=\"movie.title\">\n  </div>\n</div>";
        // carouselItems = [this.test, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.carouselItems = [
            { number: 6,
                type: 1,
                question: "¿Cuál de los siguientes compuestos no es quiral?",
                answers: ["2,3-dibromobutano", "1,3-dibromobutano ", " 2-clorobutano"]
            },
            { number: 6,
                type: 2,
                image: "https://i.stack.imgur.com/ORdas.png",
                question: "Es la molécula se muestra a continuación quiral o aquiral?",
                answers: ["quiral", "aquiral"]
            },
            { number: 6,
                type: 3,
                question: "Es la molécula se muestra a continuación quiral o aquiral?",
                answers: ["https://i.stack.imgur.com/ORdas.png", "https://energia-nuclear.net/uploads/definicio/12/1/molecula.jpg", "https://energia-nuclear.net/uploads/definicio/32/1/athomic-theory.png"]
            },
            { number: 6,
                type: 4,
                question: "¿Cuál de los siguientes compuestos no es quiral?",
                answers: ["2,3-dibromobutano", "1,3-dibromobutano ", " 2-clorobutano"]
            }
        ];
        this.carouselAnswers = [
            null,
            null
        ];
        this.movies = [
            {
                title: 'Episode I - The Phantom Menace',
                poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
            },
            {
                title: 'Episode II - Attack of the Clones',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
            },
            {
                title: 'Episode III - Revenge of the Sith',
                poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
            },
            {
                title: 'Episode IV - A New Hope',
                poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
            }
        ];
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent.prototype.onChange = function (e) {
        this.percentage = 100 / this.carouselItems.length * (e.currentSlide + 1);
    };
    QuizComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
        this.percentage = 100 / this.carouselItems.length * (this.myCarousel.activePoint + 1);
    };
    QuizComponent.prototype.reset = function () {
        this.myCarousel.reset(!this.resetAnim);
    };
    QuizComponent.prototype.moveTo = function (slide) {
        this.myCarousel.moveTo(slide, !this.withAnim);
    };
    QuizComponent.prototype.startTimer = function () {
        var _this = this;
        var seconds = 900;
        setInterval(function () {
            seconds--;
            _this.time = _this.displayTimeElapsed(seconds);
        }, 1000);
    };
    QuizComponent.prototype.displayTimeElapsed = function (seconds) {
        return Math.floor(seconds / 3600) + ':' + Math.floor(seconds / 60) + ':' + Math.floor(seconds % 60);
    };
    QuizComponent.prototype.startExam = function () {
        this.started = true;
        this.startTimer();
    };
    QuizComponent.prototype.zoomIn = function (image) {
        this.selectedImage = image;
        this.zoom = true;
    };
    QuizComponent.prototype.zoomOut = function () {
        this.zoom = false;
    };
    QuizComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.movies, event.previousIndex, event.currentIndex);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCarousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ngu_carousel__WEBPACK_IMPORTED_MODULE_2__["NguCarousel"])
    ], QuizComponent.prototype, "myCarousel", void 0);
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.scss */ "./src/app/quiz/quiz.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.html":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  result works!\n</p>\n"

/***/ }),

/***/ "./src/app/result/result.component.scss":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/result/result.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/room/room.component.html":
/*!******************************************!*\
  !*** ./src/app/room/room.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\">\n    <div class=\"col s12\">\n        <!-- blue-grey darken-1 -->\n      <div class=\"card card-full\">\n          <!-- white-text -->\n        <div class=\"card-content \">\n          <span class=\"card-title\">Room</span>\n          <!-- <p>I am a very simple card. I am good at containing small bits of information.\n          I am convenient because I require little markup to use effectively.</p> -->\n          <form #roomForm=\"ngForm\" (ngSubmit)=\"onSubmit(roomForm)\" validate>\n            <div class=\"row\">\n              <div class=\"col s12\">\n                <div class=\"input-field inline\">\n                  <i class=\"material-icons prefix\">assignment_turned_in</i>                      \n                  <input id=\"roomId\" type=\"text\" class=\"validate\" #roomId name=\"roomId\" ngModel required pattern=\"([a-zA-Z]{3})(\\d{3})\">\n                  <label for=\"roomId\">Room ID</label>\n                  <!-- <span class=\"helper-text\" data-error=\"wrong\" data-success=\"right\">Helper text</span> -->\n                </div>\n              </div>\n            </div>\n  \n            <div class=\"card-action\">\n              <button class=\"btn btn-large btn-submit\" type=\"submit\" [disabled]=\"!roomForm.valid\">Entrar</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/room/room.component.scss":
/*!******************************************!*\
  !*** ./src/app/room/room.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20vcm9vbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/room/room.component.ts":
/*!****************************************!*\
  !*** ./src/app/room/room.component.ts ***!
  \****************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/room.service */ "./src/app/shared/room.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RoomComponent = /** @class */ (function () {
    function RoomComponent(roomService, route) {
        this.roomService = roomService;
        this.route = route;
    }
    RoomComponent.prototype.ngOnInit = function () {
    };
    RoomComponent.prototype.onSubmit = function (form) {
        console.log('asdasd');
        // let postBody = { user: {email: f.value.email_inline}}
        //   this.roomService.login(postBody)
        //     .subscribe(
        //       (result) => {
        //         localStorage.setItem('email', f.value.user);
        //         localStorage.setItem('authorization', result.headers.get('authorization'));
        //         this.success.emit(true);
        //       },
        //       (error) => {
        //         console.error(error);
        //         this.success.emit(false);
        //       }
        //     );
        this.route.navigateByUrl('/user');
    };
    RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.scss */ "./src/app/room/room.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/shared/room.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/room.service.ts ***!
  \****************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoomService = /** @class */ (function () {
    function RoomService() {
    }
    RoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\">\n    <div class=\"col s12 m6\">\n        <!-- blue-grey darken-1 -->\n      <div class=\"card card-full\">\n          <!-- white-text -->\n        <div class=\"card-content \">\n          <span class=\"card-title\">Estudiante</span>\n          <!-- <p>I am a very simple card. I am good at containing small bits of information.\n          I am convenient because I require little markup to use effectively.</p> -->\n          <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\" validate>\n            <div class=\"row\">\n              <div class=\"col s12\">\n                <div class=\"input-field inline\">\n                  <i class=\"material-icons prefix\">account_circle</i>                      \n                  <input id=\"enrollment\" type=\"email\" class=\"validate\" #enrollment name=\"enrollment\" ngModel required pattern=\"A(\\d{8})\">\n                  <label for=\"enrollment\">Matrícula</label>\n                  <!-- <span class=\"helper-text\" data-error=\"wrong\" data-success=\"right\">Helper text</span> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"card-action\">\n              <button class=\"btn btn-large btn-submit\" type=\"submit\" [disabled]=\"!userForm.valid\">Entrar</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserComponent = /** @class */ (function () {
    function UserComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.onSubmit = function (form) {
        // let postBody = { user: {email: f.value.email_inline}}
        //   this.userService.login(postBody)
        //     .subscribe(
        //       (result) => {
        //         localStorage.setItem('email', f.value.user);
        //         localStorage.setItem('authorization', result.headers.get('authorization'));
        //         this.success.emit(true);
        //       },
        //       (error) => {
        //         console.error(error);
        //         this.success.emit(false);
        //       }
        //     );
        this.route.navigateByUrl('/quiz');
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiEndpoint: 'https://shrouded-cove-16169.herokuapp.com/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/DanielG/Documents/APIS/tecnecio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map