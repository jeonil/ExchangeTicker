webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_common_order_book_order_book_component__ = __webpack_require__("./src/app/component/common/order-book/order-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_container_main_main_component__ = __webpack_require__("./src/app/component/container/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_exchange_huobi_service__ = __webpack_require__("./src/app/service/exchange/huobi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_exchange_bithumb_service__ = __webpack_require__("./src/app/service/exchange/bithumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipe_value_pipe__ = __webpack_require__("./src/app/pipe/value.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directive_value_directive__ = __webpack_require__("./src/app/directive/value.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__component_common_order_book_order_book_component__["a" /* OrderBookComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_container_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pipe_value_pipe__["a" /* ValuePipe */],
                __WEBPACK_IMPORTED_MODULE_10__directive_value_directive__["a" /* ValueDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'main', pathMatch: 'full' },
                    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_5__component_container_main_main_component__["a" /* MainComponent */] },
                ]),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__service_exchange_huobi_service__["a" /* HuobiService */],
                __WEBPACK_IMPORTED_MODULE_7__service_exchange_bithumb_service__["a" /* BithumbService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/common/order-book/order-book.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.section > .row:nth-child(2n-1){\r\n    background-color: rgb(240, 245, 250);\r\n}\r\n\r\n.section > .row {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.section > .row > .gage{\r\n    position: absolute;\r\n    top:0;\r\n    right: 75%;\r\n    height:100%;\r\n    z-index: -1;\r\n    -webkit-transition: width 0.2s ease;\r\n    transition: width 0.2s ease;\r\n}\r\n\r\n.section.asks > .row > .gage {\r\n    background-color: rgba(255, 0, 0, 0.1);\r\n}\r\n\r\n.section.bids > .row > .gage {\r\n    background-color: rgba(0, 0, 255, 0.1);\r\n}\r\n\r\n.section.asks > .row{\r\n    -webkit-animation: newAsk 1s ease;\r\n            animation: newAsk 1s ease;\r\n}\r\n\r\n.section.bids > .row{\r\n    -webkit-animation: newBid 1s ease;\r\n            animation: newBid 1s ease;\r\n}\r\n\r\n@-webkit-keyframes newAsk {\r\n    50%{\r\n        background-color: rgba(255,0,0,0.1);\r\n    }\r\n}\r\n\r\n@keyframes newAsk {\r\n    50%{\r\n        background-color: rgba(255,0,0,0.1);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes newBid {\r\n    50%{\r\n        background-color: rgba(0,0,255,0.1);\r\n    }\r\n}\r\n\r\n@keyframes newBid {\r\n    50%{\r\n        background-color: rgba(0,0,255,0.1);\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/component/common/order-book/order-book.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"orderbook text-right\">\n  <section class=\"row pt-1 pb-1 no-gutters text-muted\">\n    <div class=\"col col-3 text-ask\"></div>\n    <div class=\"col col-3\">price</div>\n    <div class=\"col col-3\">quantity</div>\n    <div class=\"col col-3\">total</div>\n  </section>\n\n  <section class=\"section asks\">\n    <section class=\"row no-gutters\" *ngFor=\"let item of asks, let i = index; trackBy: trackByFunc\">\n      <div class=\"col col-3 text-ask\">ask {{limit - i}}</div>\n      <div class=\"col col-3\">{{item.price | value : decimal.base}}</div>\n      <div class=\"col col-3\">{{item.quantity | value : decimal.counter}}</div>\n      <div class=\"col col-3\">{{item.total | value : decimal.counter}}</div>\n      <div class=\"gage\" [style.width.%]=\"item.total / maxTotal * 25\"></div>\n    </section>\n  </section>\n\n  <section class=\"section bids\">\n    <section class=\"row no-gutters\" *ngFor=\"let item of bids, let i = index;  trackBy: trackByFunc\">\n      <div class=\"col col-3 text-bid\">bids {{i + 1}}</div>\n      <div class=\"col col-3\">{{item.price | value : decimal.base}}</div>\n      <div class=\"col col-3\">{{item.quantity | value : decimal.counter}}</div>\n      <div class=\"col col-3\">{{item.total | value : decimal.counter}}</div>\n      <div class=\"gage\" [style.width.%]=\"item.total / maxTotal * 25\"></div>\n    </section>\n  </section>\n</section>"

/***/ }),

/***/ "./src/app/component/common/order-book/order-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderBookComponent = /** @class */ (function () {
    function OrderBookComponent() {
        this.highlight = {
            asks: {},
            bids: {}
        };
        this.limit = 10;
    }
    OrderBookComponent.prototype.ngOnInit = function () {
    };
    OrderBookComponent.prototype.ngOnChanges = function (chgs) {
        var orderbook = chgs.orderbook;
        if (orderbook) {
            var _a = orderbook.currentValue, asks = _a.asks, bids = _a.bids;
            this.asks = asks.slice(0, this.limit).reverse();
            this.bids = bids.slice(0, this.limit);
        }
    };
    Object.defineProperty(OrderBookComponent.prototype, "maxTotal", {
        get: function () {
            return Math.max(this.asks[0].total, this.bids[this.bids.length - 1].total);
        },
        enumerable: true,
        configurable: true
    });
    OrderBookComponent.prototype.trackByFunc = function (index, item) {
        return "" + item.price;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], OrderBookComponent.prototype, "orderbook", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], OrderBookComponent.prototype, "decimal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], OrderBookComponent.prototype, "limit", void 0);
    OrderBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-book',
            template: __webpack_require__("./src/app/component/common/order-book/order-book.component.html"),
            styles: [__webpack_require__("./src/app/component/common/order-book/order-book.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderBookComponent);
    return OrderBookComponent;
}());



/***/ }),

/***/ "./src/app/component/container/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ".orderbook-title{\r\n    padding: .5rem 0;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    background-color: rgb(240, 245, 250);\r\n}"

/***/ }),

/***/ "./src/app/component/container/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"row no-gutters\">\n  <div class=\"col col-6\">\n    <div class=\"orderbook-title\">Huobi</div>\n    <app-order-book [orderbook]=\"HuobiService.market.btc_usdt.orderbook\" [decimal]=\"HuobiService.market.btc_usdt.decimal\"></app-order-book>\n  </div>\n  <div class=\"col col-6\">\n    <div class=\"orderbook-title\">Bithumb</div>\n    <app-order-book [orderbook]=\"BithumbService.market.btc_krw.orderbook\" [decimal]=\"BithumbService.market.btc_krw.decimal\"></app-order-book>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/component/container/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_exchange_huobi_service__ = __webpack_require__("./src/app/service/exchange/huobi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_exchange_bithumb_service__ = __webpack_require__("./src/app/service/exchange/bithumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(BithumbService, HuobiService) {
        this.BithumbService = BithumbService;
        this.HuobiService = HuobiService;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/component/container/main/main.component.html"),
            styles: [__webpack_require__("./src/app/component/container/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_exchange_bithumb_service__["a" /* BithumbService */],
            __WEBPACK_IMPORTED_MODULE_1__service_exchange_huobi_service__["a" /* HuobiService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/directive/value.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValueDirective = /** @class */ (function () {
    function ValueDirective() {
    }
    ValueDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appValue]'
        }),
        __metadata("design:paramtypes", [])
    ], ValueDirective);
    return ValueDirective;
}());



/***/ }),

/***/ "./src/app/pipe/value.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValuePipe = /** @class */ (function () {
    function ValuePipe() {
        var _this = this;
        this.toValue = function (n, decimal, coma, fillZero) {
            if (n === void 0) { n = 0; }
            if (decimal === void 0) { decimal = 0; }
            if (coma === void 0) { coma = true; }
            if (fillZero === void 0) { fillZero = true; }
            if (isNaN(n) === true)
                return 'N/A';
            if (typeof decimal === 'number') {
                n = _this.cutDecimal(n, decimal);
            }
            var s = n.toString().split('.');
            var f = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            if (decimal === 0)
                return f;
            if (!s[1]) {
                s[1] = '';
            }
            if (fillZero === true && s[1].length < decimal) {
                var l = decimal - s[1].length;
                for (var i = 0; i < l; i++) {
                    s[1] += '0';
                }
            }
            return f + '.' + s[1];
        };
        this.cutDecimal = function (n, p) {
            var m = Math.pow(10, p), a = n * m, t = Math[a < 0 ? 'ceil' : 'floor'](a);
            return t / m;
        };
        this.getDecimal = function (n) {
            if (n === void 0) { n = 0; }
            return ((n === null ? 0 : n).toString().split('.')[1] || '').length;
        };
    }
    ValuePipe.prototype.transform = function (v, a) {
        return this.toValue(v, a);
    };
    ValuePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'value'
        })
    ], ValuePipe);
    return ValuePipe;
}());



/***/ }),

/***/ "./src/app/service/exchange/bithumb.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BithumbConfig; });
var BithumbConfig = {
    market: [
        { parameter: { counter: 'btc', base: 'krw' }, decimal: { counter: 4, base: 0 } }
    ],
    currency: {
        btc: 'BTC',
        krw: 'KRW'
    }
};


/***/ }),

/***/ "./src/app/service/exchange/bithumb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BithumbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bithumb_config__ = __webpack_require__("./src/app/service/exchange/bithumb.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BithumbService = /** @class */ (function () {
    function BithumbService(http) {
        this.http = http;
        this.config = __WEBPACK_IMPORTED_MODULE_3__bithumb_config__["a" /* BithumbConfig */];
        this.name = 'bithumb';
        this.working = false;
        this.market = {};
        this.user = {
            asset: {},
            fee: { maker: 0.2, taker: 0.2 },
        };
        this.marketUpdate = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        for (var i in this.config.market) {
            var market = this.config.market[i];
            this.market[market.parameter.counter + "_" + market.parameter.base] = {
                orderbook: {
                    asks: [],
                    bids: []
                },
                decimal: market.decimal,
                parameter: market.parameter
            };
            this.marketTread(market.parameter);
        }
    }
    BithumbService.prototype.marketTread = function (market) {
        var _this = this;
        var counter = market.counter, base = market.base;
        this.http.get("https://api.bithumb.com/public/orderbook/" + this.config.currency[counter])
            .subscribe(function (data) {
            if (data.status !== '0000') {
                _this.working = false;
                return;
            }
            var storage = _this.market[counter + "_" + base];
            var aTotal = 0, bTotal = 0;
            storage.orderbook = {
                asks: data.data.asks.map(function (item) { return ({
                    price: Number(item.price),
                    quantity: Number(item.quantity),
                    total: aTotal += Number(item.quantity)
                }); }),
                bids: data.data.bids.map(function (item) { return ({
                    price: Number(item.price),
                    quantity: Number(item.quantity),
                    total: bTotal += Number(item.quantity)
                }); })
            };
            _this.marketUpdate.next(market);
            setTimeout(function () { return _this.marketTread(market); }, 1000);
        }, function () {
            _this.working = false;
            setTimeout(function () { return _this.marketTread(market); }, 1000);
        });
    };
    BithumbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BithumbService);
    return BithumbService;
}());



/***/ }),

/***/ "./src/app/service/exchange/huobi.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HuobiConfig; });
var HuobiConfig = {
    market: [
        { parameter: { counter: 'btc', base: 'usdt' }, decimal: { counter: 4, base: 4 } }
    ],
    currency: {
        btc: 'btc',
        krw: 'krw',
        usdt: 'usdt'
    }
};


/***/ }),

/***/ "./src/app/service/exchange/huobi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HuobiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__huobi_config__ = __webpack_require__("./src/app/service/exchange/huobi.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HuobiService = /** @class */ (function () {
    function HuobiService(http) {
        this.http = http;
        this.config = __WEBPACK_IMPORTED_MODULE_3__huobi_config__["a" /* HuobiConfig */];
        this.name = 'huobi';
        this.working = false;
        this.market = {};
        this.user = {
            asset: {},
            fee: { maker: 0.2, taker: 0.2 },
        };
        this.marketUpdate = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        for (var i in this.config.market) {
            var market = this.config.market[i];
            this.market[market.parameter.counter + "_" + market.parameter.base] = {
                orderbook: { asks: [], bids: [] },
                decimal: market.decimal,
                parameter: market.parameter
            };
            this.marketTread(market.parameter);
        }
    }
    HuobiService.prototype.marketTread = function (market) {
        var _this = this;
        var counter = market.counter, base = market.base;
        var symbol = "" + this.config.currency[counter] + this.config.currency[base];
        this.http.get('https://api.huobi.pro/market/depth?type=step1', { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('symbol', symbol) })
            .subscribe(function (data) {
            if (data.status !== 'ok') {
                _this.working = false;
                return;
            }
            var storage = _this.market[counter + "_" + base];
            var aTotal = 0, bTotal = 0;
            storage.orderbook = {
                asks: data.tick.asks.map(function (item) { return ({
                    price: item[0],
                    quantity: item[1],
                    total: aTotal += item[1]
                }); }),
                bids: data.tick.bids.map(function (item) { return ({
                    price: item[0],
                    quantity: item[1],
                    total: bTotal += item[1]
                }); })
            };
            _this.marketUpdate.next(market);
            setTimeout(function () { return _this.marketTread(market); }, 1000);
        }, function () { return _this.working = false; });
    };
    HuobiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HuobiService);
    return HuobiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map