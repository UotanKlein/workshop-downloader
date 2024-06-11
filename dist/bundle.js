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

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _workWithFiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../workWithFiles.js */ \"./workWithFiles.js\");\n\n\n(0,_workWithFiles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://steamdownloader/./src/init.js?");

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Directory: () => (/* binding */ Directory),\n/* harmony export */   File: () => (/* binding */ File)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './fs/promises'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './path.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nclass File {\n    constructor(name, parent = null) {\n      this.name = name;\n      this.parent = parent;\n      this.path = parent ? Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './path.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(parent.path, name) : name;\n      this.type = 'file';\n    }\n\n    toString() {\n      return JSON.stringify(this, (key, value) => {\n        if (key === 'parent' && value) {\n            return value.path;\n        }\n        return value;\n      }, 2);\n    }\n}\n  \nclass Directory {\n    constructor(name, parent = null) {\n      this.name = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './path.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(name);\n      this.parent = parent;\n      this.path = parent ? Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './path.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(parent.path, name) : name;\n      this.type = 'directory';\n      this.children = [];\n    }\n  \n    async loadChildren() {\n      const childrenNames = await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './fs/promises'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.path);\n      this.children = await Promise.all(childrenNames.map(async (childName) => {\n        const childPath = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './path.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.path, childName);\n        if (((await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './fs/promises'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(childPath))).isDirectory()) {\n          const newDirec = new Directory(childName, this);\n          await newDirec.loadChildren();\n          return newDirec;\n        } else {\n          return new File(childName, this);\n        }\n\n      }));\n      return this.children;\n    }\n\n    getChildren(name) {\n      const child = this.children.find((ch) => ch.name === name);\n      if (!child) {\n        throw new Error('No such');\n      }\n      if (child.type !== 'directory') {\n        throw new Error(`${name} not directory`);\n      }\n      return child;\n    }\n\n    getParent() {\n      if (!this.parent) {\n        throw new Error('Cannot go back');\n      }\n      return this.parent;\n    }\n\n    toString() {\n      return JSON.stringify(this, (key, value) => {\n        if (key === 'parent' && value) {\n            return value.path;\n        }\n        return value;\n      }, 2);\n    }\n  }\n\n\n\n//# sourceURL=webpack://steamdownloader/./src/tree.js?");

/***/ }),

/***/ "./workWithFiles.js":
/*!**************************!*\
  !*** ./workWithFiles.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/tree.js */ \"./src/tree.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async() => {\n    const fileList = document.querySelector('.left-aside-file-list');\n    new _src_tree_js__WEBPACK_IMPORTED_MODULE_0__.Directory()\n    \n    console.log('fs');\n});\n\n//# sourceURL=webpack://steamdownloader/./workWithFiles.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/init.js");
/******/ 	
/******/ })()
;