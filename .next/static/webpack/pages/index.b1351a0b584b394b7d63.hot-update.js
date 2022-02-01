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
    marginTop: '1rem'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9qZWN0cyIsInAiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJ0YWdzIiwibWFwIiwidCIsInZpc2l0Iiwic291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWFBO0FBS0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLG1CQUNmLDJEQUFDLDZEQUFEO0FBQVMsV0FBUyxNQUFsQjtBQUFtQixJQUFFLEVBQUM7QUFBdEIsZ0JBQ0UsMkRBQUMsb0VBQUQsT0FERixlQUVFLDJEQUFDLGtFQUFEO0FBQWMsTUFBSTtBQUFsQixjQUZGLGVBR0UsMkRBQUMsd0RBQUQsUUFDR0MsNkRBQUEsQ0FBY0MsQ0FBRCxpQkFDWiwyREFBQyxtREFBRDtBQUFVLEtBQUcsRUFBRUE7QUFBZixnQkFDRSwyREFBQyw4Q0FBRDtBQUFLLEtBQUcsRUFBRUEsQ0FBQyxDQUFDQztBQUFaLEVBREYsZUFFRSwyREFBQyx1REFBRCxxQkFDRSwyREFBQyxzREFBRDtBQUFhLE9BQUs7QUFBbEIsR0FBb0JELENBQUMsQ0FBQ0UsS0FBdEIsQ0FERixlQUVFLDJEQUFDLDZDQUFELE9BRkYsQ0FGRixlQU1FLDJEQUFDLG1EQUFEO0FBQVUsV0FBUyxFQUFDO0FBQXBCLEdBQWlDRixDQUFDLENBQUNHLFdBQW5DLENBTkYsZUFPRSxxRkFDRSwyREFBQyx1REFBRDtBQUFjLE9BQUssRUFBRTtBQUFFQyxhQUFTLEVBQUU7QUFBYjtBQUFyQixXQURGLGVBRUUsMkRBQUMsa0RBQUQsUUFDR0osQ0FBQyxDQUFDSyxJQUFGLENBQU9DLEdBQVAsQ0FBWUMsQ0FBRCxpQkFDViwyREFBQyw4Q0FBRDtBQUFLLEtBQUcsRUFBRUE7QUFBVixHQUFjQSxDQUFkLENBREQsQ0FESCxNQUZGLENBUEYsZUFnQkUsMkRBQUMsc0RBQUQscUJBQ0UsMkRBQUMsd0RBQUQ7QUFBZSxNQUFJLEVBQUVQLENBQUMsQ0FBQ1E7QUFBdkIsVUFERixlQUVFLDJEQUFDLHdEQUFEO0FBQWUsTUFBSSxFQUFFUixDQUFDLENBQUNTO0FBQXZCLFlBRkYsQ0FoQkYsQ0FERCxDQURILENBSEYsQ0FERjs7S0FBTVgsUTtBQWdDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMTM1MWEwYjU4NGIzOTRiN2Q2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJsb2dDYXJkLFxuICBDYXJkSW5mbyxcbiAgRXh0ZXJuYWxMaW5rcyxcbiAgR3JpZENvbnRhaW5lcixcbiAgSGVhZGVyVGhyZWUsXG4gIEhyLFxuICBUYWcsXG4gIFRhZ0xpc3QsXG4gIFRpdGxlQ29udGVudCxcbiAgVXRpbGl0eUxpc3QsXG4gIEltZyxcbn0gZnJvbSAnLi9Qcm9qZWN0U3R5bGUnO1xuaW1wb3J0IHtcbiAgU2VjdGlvbixcbiAgU2VjdGlvbkRpdmlkZXIsXG4gIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnQnO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IChcbiAgPFNlY3Rpb24gbm9wYWRkaW5nIGlkPVwicHJvamVjdHNcIj5cbiAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8U2VjdGlvblRpdGxlIG1haW4+UHJvamVjdHM8L1NlY3Rpb25UaXRsZT5cbiAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgIHtwcm9qZWN0cy5tYXAoKHApID0+IChcbiAgICAgICAgPEJsb2dDYXJkIGtleT17cH0+XG4gICAgICAgICAgPEltZyBzcmM9e3AuaW1hZ2V9IC8+XG4gICAgICAgICAgPFRpdGxlQ29udGVudD5cbiAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT57cC50aXRsZX08L0hlYWRlclRocmVlPlxuICAgICAgICAgICAgPEhyIC8+XG4gICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgPENhcmRJbmZvIGNsYXNzTmFtZT1cImNhcmQtaW5mb1wiPntwLmRlc2NyaXB0aW9ufTwvQ2FyZEluZm8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMXJlbScgfX0+U3RhY2s8L1RpdGxlQ29udGVudD5cbiAgICAgICAgICAgIDxUYWdMaXN0PlxuICAgICAgICAgICAgICB7cC50YWdzLm1hcCgodCkgPT4gKFxuICAgICAgICAgICAgICAgIDxUYWcga2V5PXt0fT57dH08L1RhZz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIDwvVGFnTGlzdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VXRpbGl0eUxpc3Q+XG4gICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXtwLnZpc2l0fT5MaXZlPC9FeHRlcm5hbExpbmtzPlxuICAgICAgICAgICAgPEV4dGVybmFsTGlua3MgaHJlZj17cC5zb3VyY2V9PlNvdXJjZTwvRXh0ZXJuYWxMaW5rcz5cbiAgICAgICAgICA8L1V0aWxpdHlMaXN0PlxuICAgICAgICA8L0Jsb2dDYXJkPlxuICAgICAgKSl9XG4gICAgPC9HcmlkQ29udGFpbmVyPlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=