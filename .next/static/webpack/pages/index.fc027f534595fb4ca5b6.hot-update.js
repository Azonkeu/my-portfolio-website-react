self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectStyle */ "./src/components/Projects/ProjectStyle.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constant */ "./src/constants/constant.js");
/* module decorator */ module = __webpack_require__.hmd(module);





const Projects = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  nopadding: true,
  id: "projects"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
  main: true
}, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.GridContainer, null, _constants_constant__WEBPACK_IMPORTED_MODULE_3__.projects.map(p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.BlogCard, {
  key: p
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.Img, {
  src: p.image
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.TitleContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.HeaderThree, {
  title: true
}, p.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.Hr, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.CardInfo, {
  className: "card-info"
}, p.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.TitleContent, {
  style: {
    marginTop: '1.5rem',
    color: 'yellow',
    fontSize: '1.2em'
  }
}, "Stack"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.TagList, null, p.tags.map(t => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.Tag, {
  key: t
}, t)), ";")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.UtilityList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.ExternalLinks, {
  href: p.visit
}, "Live"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectStyle__WEBPACK_IMPORTED_MODULE_1__.ExternalLinks, {
  href: p.source
}, "Source"))))));

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9qZWN0cyIsInAiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJjb2xvciIsImZvbnRTaXplIiwidGFncyIsIm1hcCIsInQiLCJ2aXNpdCIsInNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFhQTtBQUtBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxtQkFDZiwyREFBQyw2REFBRDtBQUFTLFdBQVMsTUFBbEI7QUFBbUIsSUFBRSxFQUFDO0FBQXRCLGdCQUNFLDJEQUFDLG9FQUFELE9BREYsZUFFRSwyREFBQyxrRUFBRDtBQUFjLE1BQUk7QUFBbEIsY0FGRixlQUdFLDJEQUFDLHdEQUFELFFBQ0dDLDZEQUFBLENBQWNDLENBQUQsaUJBQ1osMkRBQUMsbURBQUQ7QUFBVSxLQUFHLEVBQUVBO0FBQWYsZ0JBQ0UsMkRBQUMsOENBQUQ7QUFBSyxLQUFHLEVBQUVBLENBQUMsQ0FBQ0M7QUFBWixFQURGLGVBRUUsMkRBQUMsdURBQUQscUJBQ0UsMkRBQUMsc0RBQUQ7QUFBYSxPQUFLO0FBQWxCLEdBQW9CRCxDQUFDLENBQUNFLEtBQXRCLENBREYsZUFFRSwyREFBQyw2Q0FBRCxPQUZGLENBRkYsZUFNRSwyREFBQyxtREFBRDtBQUFVLFdBQVMsRUFBQztBQUFwQixHQUFpQ0YsQ0FBQyxDQUFDRyxXQUFuQyxDQU5GLGVBT0UscUZBQ0UsMkRBQUMsdURBQUQ7QUFBYyxPQUFLLEVBQUU7QUFBRUMsYUFBUyxFQUFFLFFBQWI7QUFBdUJDLFNBQUssRUFBRSxRQUE5QjtBQUF3Q0MsWUFBUSxFQUFFO0FBQWxEO0FBQXJCLFdBREYsZUFFRSwyREFBQyxrREFBRCxRQUNHTixDQUFDLENBQUNPLElBQUYsQ0FBT0MsR0FBUCxDQUFZQyxDQUFELGlCQUNWLDJEQUFDLDhDQUFEO0FBQUssS0FBRyxFQUFFQTtBQUFWLEdBQWNBLENBQWQsQ0FERCxDQURILE1BRkYsQ0FQRixlQWdCRSwyREFBQyxzREFBRCxxQkFDRSwyREFBQyx3REFBRDtBQUFlLE1BQUksRUFBRVQsQ0FBQyxDQUFDVTtBQUF2QixVQURGLGVBRUUsMkRBQUMsd0RBQUQ7QUFBZSxNQUFJLEVBQUVWLENBQUMsQ0FBQ1c7QUFBdkIsWUFGRixDQWhCRixDQURELENBREgsQ0FIRixDQURGOztLQUFNYixRO0FBZ0NOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZjMDI3ZjUzNDU5NWZiNGNhNWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQmxvZ0NhcmQsXG4gIENhcmRJbmZvLFxuICBFeHRlcm5hbExpbmtzLFxuICBHcmlkQ29udGFpbmVyLFxuICBIZWFkZXJUaHJlZSxcbiAgSHIsXG4gIFRhZyxcbiAgVGFnTGlzdCxcbiAgVGl0bGVDb250ZW50LFxuICBVdGlsaXR5TGlzdCxcbiAgSW1nLFxufSBmcm9tICcuL1Byb2plY3RTdHlsZSc7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudCc7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxuICA8U2VjdGlvbiBub3BhZGRpbmcgaWQ9XCJwcm9qZWN0c1wiPlxuICAgIDxTZWN0aW9uRGl2aWRlciAvPlxuICAgIDxTZWN0aW9uVGl0bGUgbWFpbj5Qcm9qZWN0czwvU2VjdGlvblRpdGxlPlxuICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAge3Byb2plY3RzLm1hcCgocCkgPT4gKFxuICAgICAgICA8QmxvZ0NhcmQga2V5PXtwfT5cbiAgICAgICAgICA8SW1nIHNyYz17cC5pbWFnZX0gLz5cbiAgICAgICAgICA8VGl0bGVDb250ZW50PlxuICAgICAgICAgICAgPEhlYWRlclRocmVlIHRpdGxlPntwLnRpdGxlfTwvSGVhZGVyVGhyZWU+XG4gICAgICAgICAgICA8SHIgLz5cbiAgICAgICAgICA8L1RpdGxlQ29udGVudD5cbiAgICAgICAgICA8Q2FyZEluZm8gY2xhc3NOYW1lPVwiY2FyZC1pbmZvXCI+e3AuZGVzY3JpcHRpb259PC9DYXJkSW5mbz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRpdGxlQ29udGVudCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxLjVyZW0nLCBjb2xvcjogJ3llbGxvdycsIGZvbnRTaXplOiAnMS4yZW0nIH19PlN0YWNrPC9UaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8VGFnTGlzdD5cbiAgICAgICAgICAgICAge3AudGFncy5tYXAoKHQpID0+IChcbiAgICAgICAgICAgICAgICA8VGFnIGtleT17dH0+e3R9PC9UYWc+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICA8L1RhZ0xpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFV0aWxpdHlMaXN0PlxuICAgICAgICAgICAgPEV4dGVybmFsTGlua3MgaHJlZj17cC52aXNpdH0+TGl2ZTwvRXh0ZXJuYWxMaW5rcz5cbiAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3Auc291cmNlfT5Tb3VyY2U8L0V4dGVybmFsTGlua3M+XG4gICAgICAgICAgPC9VdGlsaXR5TGlzdD5cbiAgICAgICAgPC9CbG9nQ2FyZD5cbiAgICAgICkpfVxuICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9