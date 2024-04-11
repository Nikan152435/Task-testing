/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_tests_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/__tests__/app.js */ \"./src/js/__tests__/app.js\");\n/* eslint-disable-line linebreak-style */\n/* eslint-disable import/extensions */\n\n\n\n\n//# sourceURL=webpack://ahs/./src/index.js?");

/***/ }),

/***/ "./src/js/__tests__/app.js":
/*!*********************************!*\
  !*** ./src/js/__tests__/app.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate */ \"./src/js/__tests__/validate.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./src/js/__tests__/card.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n/* eslint-disable linebreak-style */\n/* eslint-disable consistent-return */\n\n\nvar card = document.querySelector('.input');\nvar submit = document.querySelector('.submit');\nvar cards = _toConsumableArray(document.querySelectorAll('.card'));\nfunction checkCard() {\n  if (card.value === '') {\n    return false;\n  }\n  cards.forEach(function (el) {\n    if (el.className.includes('nocard')) {\n      el.classList.remove('nocard');\n    }\n  });\n  if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(card.value)) {\n    card.classList.remove('novalid');\n    card.classList.add('valid');\n    var type = (0,_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(card.value);\n    cards.forEach(function (el) {\n      if (!el.className.includes(type)) {\n        el.classList.add('nocard');\n      }\n    });\n  } else {\n    card.classList.remove('valid');\n    card.classList.add('novalid');\n  }\n}\nsubmit.addEventListener('click', function (event) {\n  event.preventDefault();\n  checkCard();\n});\ncard.addEventListener('input', function () {\n  if (card.value === '') {\n    cards.forEach(function (el) {\n      if (el.className.includes('nocard')) {\n        el.classList.remove('nocard');\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack://ahs/./src/js/__tests__/app.js?");

/***/ }),

/***/ "./src/js/__tests__/card.js":
/*!**********************************!*\
  !*** ./src/js/__tests__/card.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cardNumber)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\n/* eslint-disable consistent-return */\n/* eslint-disable linebreak-style */\nfunction cardNumber(setValue) {\n  var value = String(setValue).replace(/\\D/g, '');\n  if (/^(?:3[47][0-9]{13})$/.test(value)) {\n    return 'amex';\n  }\n  if (/^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test(value)) {\n    return 'visa';\n  }\n  if (/^(?:5[1-5][0-9]{14})$/.test(value)) {\n    return 'master';\n  }\n  if (/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/.test(value)) {\n    return 'discover';\n  }\n  if (/^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/.test(value)) {\n    return 'diners_club';\n  }\n  if (/^(?:(?:2131|1800|35\\d{3})\\d{11})$/.test(value)) {\n    return 'jcb';\n  }\n  if (/^2||6/.test(value)) {\n    return 'mir';\n  }\n}\n\n//# sourceURL=webpack://ahs/./src/js/__tests__/card.js?");

/***/ }),

/***/ "./src/js/__tests__/validate.js":
/*!**************************************!*\
  !*** ./src/js/__tests__/validate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ luhnAlgoritm)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\n/* eslint-disable no-cond-assign */\n/* eslint-disable no-plusplus */\n/* eslint-disable linebreak-style */\nfunction luhnAlgoritm(setValue) {\n  if (/[^0-9-\\s]+/.test(setValue)) {\n    return false;\n  }\n  var sum = 0;\n  var value = String(setValue).replace(/\\D/g, '');\n  for (var i = 0; i < value.length; i++) {\n    var n = parseInt(value[i], 10);\n    sum += value.length % 2 === i % 2 && (n *= 2) > 9 ? n - 9 : n;\n  }\n  return sum % 10 === 0;\n}\n\n//# sourceURL=webpack://ahs/./src/js/__tests__/validate.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ahs/./src/css/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;