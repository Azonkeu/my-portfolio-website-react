self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _Header_HeaderStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/HeaderStyle */ "./src/components/Header/HeaderStyle.js");
/* harmony import */ var _FooterStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterStyle */ "./src/components/Footer/FooterStyle.js");
/* module decorator */ module = __webpack_require__.hmd(module);





const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterStyle__WEBPACK_IMPORTED_MODULE_2__.FooterWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterStyle__WEBPACK_IMPORTED_MODULE_2__.LinkList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterStyle__WEBPACK_IMPORTED_MODULE_2__.LinkColumn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterStyle__WEBPACK_IMPORTED_MODULE_2__.LinkTitle, null, "Call"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterStyle__WEBPACK_IMPORTED_MODULE_2__.LinkItem, {
  href: "tel:00237652126440"
}, "(+237) 652-126440")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterStyle__WEBPACK_IMPORTED_MODULE_2__.LinkColumn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterStyle__WEBPACK_IMPORTED_MODULE_2__.LinkTitle, null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterStyle__WEBPACK_IMPORTED_MODULE_2__.LinkItem, {
  href: "mailto:mazonkeu@gmail.com"
}, "mazonkeu@gmail.com"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterStyle__WEBPACK_IMPORTED_MODULE_2__.SocialIconsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterStyle__WEBPACK_IMPORTED_MODULE_2__.CompanyContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterStyle__WEBPACK_IMPORTED_MODULE_2__.Slogan, null, "Let creativity lead!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterStyle__WEBPACK_IMPORTED_MODULE_2__.SocialContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_HeaderStyle__WEBPACK_IMPORTED_MODULE_1__.SocialIcons, {
  href: "https://github.com/Azonkeu"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillGithub, {
  size: "3rem"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_HeaderStyle__WEBPACK_IMPORTED_MODULE_1__.SocialIcons, {
  href: "https://www.linkedin.com/in/azonkeu-ornela-software-developer/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillLinkedin, {
  size: "3rem"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_HeaderStyle__WEBPACK_IMPORTED_MODULE_1__.SocialIcons, {
  href: "https://www.instagram.com/ornela9238/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillInstagram, {
  size: "3rem"
})))));

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQSxNQUFNQSxNQUFNLEdBQUcsbUJBQ2IsMkRBQUMsdURBQUQscUJBQ0UsMkRBQUMsa0RBQUQscUJBQ0UsMkRBQUMsb0RBQUQscUJBQ0UsMkRBQUMsbURBQUQsZUFERixlQUVFLDJEQUFDLGtEQUFEO0FBQVUsTUFBSSxFQUFDO0FBQWYsdUJBRkYsQ0FERixlQUtFLDJEQUFDLG9EQUFELHFCQUNFLDJEQUFDLG1EQUFELGdCQURGLGVBRUUsMkRBQUMsa0RBQUQ7QUFBVSxNQUFJLEVBQUM7QUFBZix3QkFGRixDQUxGLENBREYsZUFhRSwyREFBQyw4REFBRCxxQkFDRSwyREFBQywwREFBRCxxQkFDRSwyREFBQyxnREFBRCwrQkFERixDQURGLGVBSUUsMkRBQUMseURBQUQscUJBQ0UsMkRBQUMsNERBQUQ7QUFBYSxNQUFJLEVBQUM7QUFBbEIsZ0JBQ0UsMkRBQUMsd0RBQUQ7QUFBYyxNQUFJLEVBQUM7QUFBbkIsRUFERixDQURGLGVBSUUsMkRBQUMsNERBQUQ7QUFBYSxNQUFJLEVBQUM7QUFBbEIsZ0JBQ0UsMkRBQUMsMERBQUQ7QUFBZ0IsTUFBSSxFQUFDO0FBQXJCLEVBREYsQ0FKRixlQU9FLDJEQUFDLDREQUFEO0FBQWEsTUFBSSxFQUFDO0FBQWxCLGdCQUNFLDJEQUFDLDJEQUFEO0FBQWlCLE1BQUksRUFBQztBQUF0QixFQURGLENBUEYsQ0FKRixDQWJGLENBREY7O0tBQU1BLE07QUFpQ04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODIwZTJjOTRkNWJhMzYyMjcxZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBaUZpbGxHaXRodWIsIEFpRmlsbEluc3RhZ3JhbSwgQWlGaWxsTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5pbXBvcnQgeyBTb2NpYWxJY29ucyB9IGZyb20gJy4uL0hlYWRlci9IZWFkZXJTdHlsZSc7XG5pbXBvcnQge1xuICBDb21wYW55Q29udGFpbmVyLFxuICBGb290ZXJXcmFwcGVyLFxuICBMaW5rQ29sdW1uLFxuICBMaW5rSXRlbSxcbiAgTGlua0xpc3QsXG4gIExpbmtUaXRsZSxcbiAgU2xvZ2FuLFxuICBTb2NpYWxDb250YWluZXIsXG4gIFNvY2lhbEljb25zQ29udGFpbmVyLFxufSBmcm9tICcuL0Zvb3RlclN0eWxlJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Rm9vdGVyV3JhcHBlcj5cbiAgICA8TGlua0xpc3Q+XG4gICAgICA8TGlua0NvbHVtbj5cbiAgICAgICAgPExpbmtUaXRsZT5DYWxsPC9MaW5rVGl0bGU+XG4gICAgICAgIDxMaW5rSXRlbSBocmVmPVwidGVsOjAwMjM3NjUyMTI2NDQwXCI+KCsyMzcpIDY1Mi0xMjY0NDA8L0xpbmtJdGVtPlxuICAgICAgPC9MaW5rQ29sdW1uPlxuICAgICAgPExpbmtDb2x1bW4+XG4gICAgICAgIDxMaW5rVGl0bGU+RW1haWw8L0xpbmtUaXRsZT5cbiAgICAgICAgPExpbmtJdGVtIGhyZWY9XCJtYWlsdG86bWF6b25rZXVAZ21haWwuY29tXCI+XG4gICAgICAgICAgbWF6b25rZXVAZ21haWwuY29tXG4gICAgICAgIDwvTGlua0l0ZW0+XG4gICAgICA8L0xpbmtDb2x1bW4+XG4gICAgPC9MaW5rTGlzdD5cbiAgICA8U29jaWFsSWNvbnNDb250YWluZXI+XG4gICAgICA8Q29tcGFueUNvbnRhaW5lcj5cbiAgICAgICAgPFNsb2dhbj5MZXQgY3JlYXRpdml0eSBsZWFkITwvU2xvZ2FuPlxuICAgICAgPC9Db21wYW55Q29udGFpbmVyPlxuICAgICAgPFNvY2lhbENvbnRhaW5lcj5cbiAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQXpvbmtldVwiPlxuICAgICAgICAgIDxBaUZpbGxHaXRodWIgc2l6ZT1cIjNyZW1cIiAvPlxuICAgICAgICA8L1NvY2lhbEljb25zPlxuICAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hem9ua2V1LW9ybmVsYS1zb2Z0d2FyZS1kZXZlbG9wZXIvXCI+XG4gICAgICAgICAgPEFpRmlsbExpbmtlZGluIHNpemU9XCIzcmVtXCIgLz5cbiAgICAgICAgPC9Tb2NpYWxJY29ucz5cbiAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL29ybmVsYTkyMzgvXCI+XG4gICAgICAgICAgPEFpRmlsbEluc3RhZ3JhbSBzaXplPVwiM3JlbVwiIC8+XG4gICAgICAgIDwvU29jaWFsSWNvbnM+XG4gICAgICA8L1NvY2lhbENvbnRhaW5lcj5cbiAgICA8L1NvY2lhbEljb25zQ29udGFpbmVyPlxuICA8L0Zvb3RlcldyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9