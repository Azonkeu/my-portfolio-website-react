(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.js");



function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_theme__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, pageProps)));
}
App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Object).isRequired
};
App.propTypes = {
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Object).isRequired
};

/***/ }),

/***/ "./src/styles/global.js":
/*!******************************!*\
  !*** ./src/styles/global.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ "styled-normalize");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);


const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  ${styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/default */ "./src/themes/default.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global */ "./src/styles/global.js");






const Theme = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
  theme: _themes_default__WEBPACK_IMPORTED_MODULE_3__.default
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_global__WEBPACK_IMPORTED_MODULE_4__.default, null), children);

Theme.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Theme);

/***/ }),

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Temp fonts
  fonts: {
    title: 'Space Grotesk, sans-serif',
    main: 'Space Grotesk, sans-serif'
  },
  // Colors for layout
  colors: {
    primary1: 'hsl(204,23.8%,95.9%)',
    background1: '#0F1624',
    accent1: 'hsl(34.9,98.6%,72.9%)',
    button: 'hsl(205.1,100%,36.1%)',
    background2: 'hsl(232.7,27.3%,23.7%)'
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  }
});

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-normalize");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8td2Vic2l0ZS1yZWFjdC8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0Ly4vc3JjL3N0eWxlcy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLXdlYnNpdGUtcmVhY3QvLi9zcmMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0Ly4vc3JjL3RoZW1lcy9kZWZhdWx0LmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0L2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL215LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8td2Vic2l0ZS1yZWFjdC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLXdlYnNpdGUtcmVhY3QvZXh0ZXJuYWwgXCJzdHlsZWQtbm9ybWFsaXplXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiT2JqZWN0IiwiaXNSZXF1aXJlZCIsIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwibm9ybWFsaXplIiwicHJvcHMiLCJ0aGVtZSIsImZvbnRzIiwibWFpbiIsImNvbG9ycyIsImJhY2tncm91bmQxIiwicHJpbWFyeTEiLCJ0aXRsZSIsIlRoZW1lIiwiY2hpbGRyZW4iLCJhY2NlbnQxIiwiYnV0dG9uIiwiYmFja2dyb3VuZDIiLCJicmVha3BvaW50cyIsInNtIiwibWQiLCJsZyIsInhsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQXVDO0FBQ3BELHNCQUNFLHVJQUNFLDJEQUFDLGtEQUFELHFCQUNFLDJEQUFDLFNBQUQsRUFBZUEsU0FBZixDQURGLENBREYsQ0FERjtBQU9EO0FBRURGLEdBQUcsQ0FBQ0csU0FBSixHQUFnQjtBQUFFRixXQUFTLEVBQUVHLDREQUFBLENBQXFCQyxNQUFyQixFQUE2QkM7QUFBMUMsQ0FBaEI7QUFDQU4sR0FBRyxDQUFDRyxTQUFKLEdBQWdCO0FBQUVELFdBQVMsRUFBRUUsNERBQUEsQ0FBcUJDLE1BQXJCLEVBQTZCQztBQUExQyxDQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBLE1BQU1DLFlBQVksR0FBR0MsZ0VBQWtCO0FBQ3ZDLElBQUlDLHVEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBb0JDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JDLElBQUs7QUFDckQ7QUFDQSxrQkFBbUJILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJDLFdBQVk7QUFDNUQsYUFBY0wsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkUsUUFBUztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxtQkFBb0JOLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JLLEtBQU07QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTNCQTtBQTZCQSwrREFBZVYsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1XLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxrQkFDWiwyREFBQyw0REFBRDtBQUFlLE9BQUssRUFBRVIsb0RBQUtBO0FBQTNCLGdCQUNFLDJEQUFDLDRDQUFELE9BREYsRUFFR1EsUUFGSCxDQURGOztBQU9BRCxLQUFLLENBQUNmLFNBQU4sR0FBa0I7QUFBRWdCLFVBQVEsRUFBRWYsNERBQUEsQ0FBcUJDLE1BQXJCLEVBQTZCQztBQUF6QyxDQUFsQjtBQUVBLCtEQUFlWSxLQUFmLEU7Ozs7Ozs7Ozs7OztBQ2ZBLCtEQUFlO0FBQ2I7QUFDQU4sT0FBSyxFQUFFO0FBQ0xLLFNBQUssRUFBRSwyQkFERjtBQUVMSixRQUFJLEVBQUU7QUFGRCxHQUZNO0FBTWI7QUFDQUMsUUFBTSxFQUFFO0FBQ05FLFlBQVEsRUFBRSxzQkFESjtBQUVORCxlQUFXLEVBQUUsU0FGUDtBQUdOSyxXQUFPLEVBQUUsdUJBSEg7QUFJTkMsVUFBTSxFQUFFLHVCQUpGO0FBS05DLGVBQVcsRUFBRTtBQUxQLEdBUEs7QUFjYjtBQUNBQyxhQUFXLEVBQUU7QUFDWEMsTUFBRSxFQUFFLCtCQURPO0FBRVhDLE1BQUUsRUFBRSwrQkFGTztBQUdYQyxNQUFFLEVBQUUsZ0NBSE87QUFJWEMsTUFBRSxFQUFFO0FBSk87QUFmQSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRoZW1lPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lPlxuICAgIDwvPlxuICApO1xufVxuXG5BcHAucHJvcFR5cGVzID0geyBDb21wb25lbnQ6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCB9O1xuQXBwLnByb3BUeXBlcyA9IHsgcGFnZVByb3BzOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSAnc3R5bGVkLW5vcm1hbGl6ZSc7XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAke25vcm1hbGl6ZX07XG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgfVxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLm1haW59O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZDF9O1xuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnkxfTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbiAgaDEsaDIsaDMsaDQsaDUsaDYsYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnRpdGxlfTtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgbGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lcy9kZWZhdWx0JztcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnLi9nbG9iYWwnO1xuXG5jb25zdCBUaGVtZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAge2NoaWxkcmVufVxuICA8L1RoZW1lUHJvdmlkZXI+XG4pO1xuXG5UaGVtZS5wcm9wVHlwZXMgPSB7IGNoaWxkcmVuOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQgfTtcblxuZXhwb3J0IGRlZmF1bHQgVGhlbWU7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIC8vIFRlbXAgZm9udHNcbiAgZm9udHM6IHtcbiAgICB0aXRsZTogJ1NwYWNlIEdyb3Rlc2ssIHNhbnMtc2VyaWYnLFxuICAgIG1haW46ICdTcGFjZSBHcm90ZXNrLCBzYW5zLXNlcmlmJyxcbiAgfSxcbiAgLy8gQ29sb3JzIGZvciBsYXlvdXRcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTE6ICdoc2woMjA0LDIzLjglLDk1LjklKScsXG4gICAgYmFja2dyb3VuZDE6ICcjMEYxNjI0JyxcbiAgICBhY2NlbnQxOiAnaHNsKDM0LjksOTguNiUsNzIuOSUpJyxcbiAgICBidXR0b246ICdoc2woMjA1LjEsMTAwJSwzNi4xJSknLFxuICAgIGJhY2tncm91bmQyOiAnaHNsKDIzMi43LDI3LjMlLDIzLjclKScsXG4gIH0sXG4gIC8vIEJyZWFrcG9pbnRzIGZvciByZXNwb25zaXZlIGRlc2lnblxuICBicmVha3BvaW50czoge1xuICAgIHNtOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCknLFxuICAgIG1kOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknLFxuICAgIGxnOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpJyxcbiAgICB4bDogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KScsXG4gIH0sXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtbm9ybWFsaXplXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9