"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./framework/shopify/product/loadAllProducts.ts":
/*!******************************************************!*\
  !*** ./framework/shopify/product/loadAllProducts.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadAllProducts\": () => (/* binding */ loadAllProducts)\n/* harmony export */ });\nconst fetchApi = async () => {\n  const url = \"https://jsonplaceholder.typicode.com/todos\";\n  const response = await fetch(url, {\n    method: \"GET\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  });\n  const data = await response.json();\n  return {\n    data\n  };\n};\n\nconst loadAllProducts = async () => {\n  const products = await fetchApi();\n  return products.data;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcmFtZXdvcmsvc2hvcGlmeS9wcm9kdWN0L2xvYWRBbGxQcm9kdWN0cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTUEsUUFBUSxHQUFHLFlBQ2pCO0FBQ0ksUUFBTUMsR0FBRyxHQUFHLDRDQUFaO0FBRUEsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRUYsR0FBRixFQUFPO0FBQy9CRyxJQUFBQSxNQUFNLEVBQUUsS0FEdUI7QUFFL0JDLElBQUFBLE9BQU8sRUFBRTtBQUNULHNCQUFnQjtBQURQO0FBRnNCLEdBQVAsQ0FBNUI7QUFPQSxRQUFNQyxJQUFJLEdBQUcsTUFBTUosUUFBUSxDQUFDSyxJQUFULEVBQW5CO0FBRUEsU0FBTztBQUFFRCxJQUFBQTtBQUFGLEdBQVA7QUFDSCxDQWREOztBQWdCTyxNQUFNRSxlQUFlLEdBQUcsWUFDL0I7QUFDSSxRQUFNQyxRQUFRLEdBQUcsTUFBTVQsUUFBUSxFQUEvQjtBQUNBLFNBQU9TLFFBQVEsQ0FBQ0gsSUFBaEI7QUFDSCxDQUpNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcC8uL2ZyYW1ld29yay9zaG9waWZ5L3Byb2R1Y3QvbG9hZEFsbFByb2R1Y3RzLnRzP2EyODMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBmZXRjaEFwaSA9IGFzeW5jICgpID0+XG57XG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3NcIlxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggdXJsLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9XG4gICAgfSApXG4gICAgXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgcmV0dXJuIHsgZGF0YSB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkQWxsUHJvZHVjdHMgPSBhc3luYyAoKTogUHJvbWlzZTxhbnlbXT4gPT5cbntcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoQXBpKClcbiAgICByZXR1cm4gcHJvZHVjdHMuZGF0YVxufSJdLCJuYW1lcyI6WyJmZXRjaEFwaSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJsb2FkQWxsUHJvZHVjdHMiLCJwcm9kdWN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./framework/shopify/product/loadAllProducts.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _framework_shopify_product_loadAllProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/shopify/product/loadAllProducts */ \"./framework/shopify/product/loadAllProducts.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/slavo3/Documents/slavo3/koderag/pages/index.tsx\";\n\n\nasync function getStaticProps() {\n  const products = await (0,_framework_shopify_product_loadAllProducts__WEBPACK_IMPORTED_MODULE_0__.loadAllProducts)();\n  return {\n    props: {\n      products\n    },\n    revalidate: 4 * 60 * 60\n  };\n}\n\nconst Home = ({\n  products\n}) => {\n  console.log(products);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"Kode Rag Shop\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), JSON.stringify(products)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBR08sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUYsMkZBQWUsRUFBdEM7QUFDQSxTQUFPO0FBQ0xHLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQTtBQURLLEtBREY7QUFJTEUsSUFBQUEsVUFBVSxFQUFFLElBQUksRUFBSixHQUFTO0FBSmhCLEdBQVA7QUFNRDs7QUFFRCxNQUFNQyxJQUFJLEdBQUcsQ0FBRTtBQUFFSCxFQUFBQTtBQUFGLENBQUYsS0FDYjtBQUVFSSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBWjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFSU0sSUFBSSxDQUFDQyxTQUFMLENBQWVQLFFBQWYsQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBVkQ7O0FBWUEsaUVBQWVHLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgbG9hZEFsbFByb2R1Y3RzIH0gZnJvbSBcIi4uL2ZyYW1ld29yay9zaG9waWZ5L3Byb2R1Y3QvbG9hZEFsbFByb2R1Y3RzXCJcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgbG9hZEFsbFByb2R1Y3RzKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdHNcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDQgKiA2MCAqIDYwXG4gIH1cbn1cblxuY29uc3QgSG9tZSA9ICggeyBwcm9kdWN0cyB9OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPiApID0+XG57XG4gIFxuICBjb25zb2xlLmxvZyhwcm9kdWN0cylcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPktvZGUgUmFnIFNob3A8L2gxPlxuICAgICAgeyBKU09OLnN0cmluZ2lmeShwcm9kdWN0cykgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJsb2FkQWxsUHJvZHVjdHMiLCJnZXRTdGF0aWNQcm9wcyIsInByb2R1Y3RzIiwicHJvcHMiLCJyZXZhbGlkYXRlIiwiSG9tZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();