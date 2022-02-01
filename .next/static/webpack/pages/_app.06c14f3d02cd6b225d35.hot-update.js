self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_theme__WEBPACK_IMPORTED_MODULE_1__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, pageProps)));
}
_c = App;
App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Object).isRequired
};
App.propTypes = {
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Object).isRequired
};

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/styles/global.js":
/*!******************************!*\
  !*** ./src/styles/global.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-normalize */ "./node_modules/styled-normalize/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle`
  ${styled_normalize__WEBPACK_IMPORTED_MODULE_0__.normalize};
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes/default */ "./src/themes/default.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/styles/global.js");
/* module decorator */ module = __webpack_require__.hmd(module);






const Theme = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
  theme: _themes_default__WEBPACK_IMPORTED_MODULE_1__.default
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_global__WEBPACK_IMPORTED_MODULE_2__.default, null), children);

_c = Theme;
Theme.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default().instanceOf(Object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Theme);

var _c;

$RefreshReg$(_c, "Theme");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvdGhlbWVzL2RlZmF1bHQuanMiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiT2JqZWN0IiwiaXNSZXF1aXJlZCIsIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwibm9ybWFsaXplIiwicHJvcHMiLCJ0aGVtZSIsImZvbnRzIiwibWFpbiIsImNvbG9ycyIsImJhY2tncm91bmQxIiwicHJpbWFyeTEiLCJ0aXRsZSIsIlRoZW1lIiwiY2hpbGRyZW4iLCJhY2NlbnQxIiwiYnV0dG9uIiwiYmFja2dyb3VuZDIiLCJicmVha3BvaW50cyIsInNtIiwibWQiLCJsZyIsInhsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQXVDO0FBQ3BELHNCQUNFLHVJQUNFLDJEQUFDLGtEQUFELHFCQUNFLDJEQUFDLFNBQUQsRUFBZUEsU0FBZixDQURGLENBREYsQ0FERjtBQU9EO0tBUnVCRixHO0FBVXhCQSxHQUFHLENBQUNHLFNBQUosR0FBZ0I7QUFBRUYsV0FBUyxFQUFFRyw0REFBQSxDQUFxQkMsTUFBckIsRUFBNkJDO0FBQTFDLENBQWhCO0FBQ0FOLEdBQUcsQ0FBQ0csU0FBSixHQUFnQjtBQUFFRCxXQUFTLEVBQUVFLDREQUFBLENBQXFCQyxNQUFyQixFQUE2QkM7QUFBMUMsQ0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFFQSxNQUFNQyxZQUFZLEdBQUdDLGdFQUFrQjtBQUN2QyxJQUFJQyx1REFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW9CQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUFaLENBQWtCQyxJQUFLO0FBQ3JEO0FBQ0Esa0JBQW1CSCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFaLENBQW1CQyxXQUFZO0FBQzVELGFBQWNMLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJFLFFBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW9CTixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUFaLENBQWtCSyxLQUFNO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0EzQkE7QUE2QkEsK0RBQWVWLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNVyxLQUFLLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsa0JBQ1osMkRBQUMsNERBQUQ7QUFBZSxPQUFLLEVBQUVSLG9EQUFLQTtBQUEzQixnQkFDRSwyREFBQyw0Q0FBRCxPQURGLEVBRUdRLFFBRkgsQ0FERjs7S0FBTUQsSztBQU9OQSxLQUFLLENBQUNmLFNBQU4sR0FBa0I7QUFBRWdCLFVBQVEsRUFBRWYsNERBQUEsQ0FBcUJDLE1BQXJCLEVBQTZCQztBQUF6QyxDQUFsQjtBQUVBLCtEQUFlWSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkEsK0RBQWU7QUFDYjtBQUNBTixPQUFLLEVBQUU7QUFDTEssU0FBSyxFQUFFLDJCQURGO0FBRUxKLFFBQUksRUFBRTtBQUZELEdBRk07QUFNYjtBQUNBQyxRQUFNLEVBQUU7QUFDTkUsWUFBUSxFQUFFLHNCQURKO0FBRU5ELGVBQVcsRUFBRSxTQUZQO0FBR05LLFdBQU8sRUFBRSx1QkFISDtBQUlOQyxVQUFNLEVBQUUsdUJBSkY7QUFLTkMsZUFBVyxFQUFFO0FBTFAsR0FQSztBQWNiO0FBQ0FDLGFBQVcsRUFBRTtBQUNYQyxNQUFFLEVBQUUsK0JBRE87QUFFWEMsTUFBRSxFQUFFLCtCQUZPO0FBR1hDLE1BQUUsRUFBRSxnQ0FITztBQUlYQyxNQUFFLEVBQUU7QUFKTztBQWZBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wNmMxNGYzZDAyY2Q2YjIyNWQzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUaGVtZT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvVGhlbWU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5BcHAucHJvcFR5cGVzID0geyBDb21wb25lbnQ6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCB9O1xyXG5BcHAucHJvcFR5cGVzID0geyBwYWdlUHJvcHM6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSAnc3R5bGVkLW5vcm1hbGl6ZSc7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAke25vcm1hbGl6ZX07XHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDYyLjUlO1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5tYWlufTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kMX07XHJcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5MX07XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG4gIGgxLGgyLGgzLGg0LGg1LGg2LGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLnRpdGxlfTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZXMvZGVmYXVsdCc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnLi9nbG9iYWwnO1xyXG5cclxuY29uc3QgVGhlbWUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L1RoZW1lUHJvdmlkZXI+XHJcbik7XHJcblxyXG5UaGVtZS5wcm9wVHlwZXMgPSB7IGNoaWxkcmVuOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gVGVtcCBmb250c1xyXG4gIGZvbnRzOiB7XHJcbiAgICB0aXRsZTogJ1NwYWNlIEdyb3Rlc2ssIHNhbnMtc2VyaWYnLFxyXG4gICAgbWFpbjogJ1NwYWNlIEdyb3Rlc2ssIHNhbnMtc2VyaWYnLFxyXG4gIH0sXHJcbiAgLy8gQ29sb3JzIGZvciBsYXlvdXRcclxuICBjb2xvcnM6IHtcclxuICAgIHByaW1hcnkxOiAnaHNsKDIwNCwyMy44JSw5NS45JSknLFxyXG4gICAgYmFja2dyb3VuZDE6ICcjMEYxNjI0JyxcclxuICAgIGFjY2VudDE6ICdoc2woMzQuOSw5OC42JSw3Mi45JSknLFxyXG4gICAgYnV0dG9uOiAnaHNsKDIwNS4xLDEwMCUsMzYuMSUpJyxcclxuICAgIGJhY2tncm91bmQyOiAnaHNsKDIzMi43LDI3LjMlLDIzLjclKScsXHJcbiAgfSxcclxuICAvLyBCcmVha3BvaW50cyBmb3IgcmVzcG9uc2l2ZSBkZXNpZ25cclxuICBicmVha3BvaW50czoge1xyXG4gICAgc206ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KScsXHJcbiAgICBtZDogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJyxcclxuICAgIGxnOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpJyxcclxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpJyxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9