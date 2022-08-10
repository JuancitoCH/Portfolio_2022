/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/pages/router.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var PATH = {
  url: "/",
  template: "index.html"
};

var Router = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Router() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PATH;

    _classCallCheck(this, Router);

    this.path = path;
    this.initRouter();
  }

  _createClass(Router, [{
    key: "initRouter",
    value: function initRouter() {
      console.log(window.location.pathname);
      window.location.hash = 234;
      console.log(window.location.hash);
    }
  }]);

  return Router;
}()));

/* harmony default export */ const router = ((/* unused pure expression or super */ null && (Router)));
;// CONCATENATED MODULE: ./src/index.js



var app = document.querySelector('#app'); // const newRouter = new Router()
/******/ })()
;