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
    color: 'yellow'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9qZWN0cyIsInAiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJjb2xvciIsInRhZ3MiLCJtYXAiLCJ0IiwidmlzaXQiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYUE7QUFLQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsbUJBQ2YsMkRBQUMsNkRBQUQ7QUFBUyxXQUFTLE1BQWxCO0FBQW1CLElBQUUsRUFBQztBQUF0QixnQkFDRSwyREFBQyxvRUFBRCxPQURGLGVBRUUsMkRBQUMsa0VBQUQ7QUFBYyxNQUFJO0FBQWxCLGNBRkYsZUFHRSwyREFBQyx3REFBRCxRQUNHQyw2REFBQSxDQUFjQyxDQUFELGlCQUNaLDJEQUFDLG1EQUFEO0FBQVUsS0FBRyxFQUFFQTtBQUFmLGdCQUNFLDJEQUFDLDhDQUFEO0FBQUssS0FBRyxFQUFFQSxDQUFDLENBQUNDO0FBQVosRUFERixlQUVFLDJEQUFDLHVEQUFELHFCQUNFLDJEQUFDLHNEQUFEO0FBQWEsT0FBSztBQUFsQixHQUFvQkQsQ0FBQyxDQUFDRSxLQUF0QixDQURGLGVBRUUsMkRBQUMsNkNBQUQsT0FGRixDQUZGLGVBTUUsMkRBQUMsbURBQUQ7QUFBVSxXQUFTLEVBQUM7QUFBcEIsR0FBaUNGLENBQUMsQ0FBQ0csV0FBbkMsQ0FORixlQU9FLHFGQUNFLDJEQUFDLHVEQUFEO0FBQWMsT0FBSyxFQUFFO0FBQUVDLGFBQVMsRUFBRSxRQUFiO0FBQXVCQyxTQUFLLEVBQUU7QUFBOUI7QUFBckIsV0FERixlQUVFLDJEQUFDLGtEQUFELFFBQ0dMLENBQUMsQ0FBQ00sSUFBRixDQUFPQyxHQUFQLENBQVlDLENBQUQsaUJBQ1YsMkRBQUMsOENBQUQ7QUFBSyxLQUFHLEVBQUVBO0FBQVYsR0FBY0EsQ0FBZCxDQURELENBREgsTUFGRixDQVBGLGVBZ0JFLDJEQUFDLHNEQUFELHFCQUNFLDJEQUFDLHdEQUFEO0FBQWUsTUFBSSxFQUFFUixDQUFDLENBQUNTO0FBQXZCLFVBREYsZUFFRSwyREFBQyx3REFBRDtBQUFlLE1BQUksRUFBRVQsQ0FBQyxDQUFDVTtBQUF2QixZQUZGLENBaEJGLENBREQsQ0FESCxDQUhGLENBREY7O0tBQU1aLFE7QUFnQ04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWMzNmZhMjc3YTkwOTM1ZGUzODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCbG9nQ2FyZCxcbiAgQ2FyZEluZm8sXG4gIEV4dGVybmFsTGlua3MsXG4gIEdyaWRDb250YWluZXIsXG4gIEhlYWRlclRocmVlLFxuICBIcixcbiAgVGFnLFxuICBUYWdMaXN0LFxuICBUaXRsZUNvbnRlbnQsXG4gIFV0aWxpdHlMaXN0LFxuICBJbWcsXG59IGZyb20gJy4vUHJvamVjdFN0eWxlJztcbmltcG9ydCB7XG4gIFNlY3Rpb24sXG4gIFNlY3Rpb25EaXZpZGVyLFxuICBTZWN0aW9uVGl0bGUsXG59IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50JztcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiAoXG4gIDxTZWN0aW9uIG5vcGFkZGluZyBpZD1cInByb2plY3RzXCI+XG4gICAgPFNlY3Rpb25EaXZpZGVyIC8+XG4gICAgPFNlY3Rpb25UaXRsZSBtYWluPlByb2plY3RzPC9TZWN0aW9uVGl0bGU+XG4gICAgPEdyaWRDb250YWluZXI+XG4gICAgICB7cHJvamVjdHMubWFwKChwKSA9PiAoXG4gICAgICAgIDxCbG9nQ2FyZCBrZXk9e3B9PlxuICAgICAgICAgIDxJbWcgc3JjPXtwLmltYWdlfSAvPlxuICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8SGVhZGVyVGhyZWUgdGl0bGU+e3AudGl0bGV9PC9IZWFkZXJUaHJlZT5cbiAgICAgICAgICAgIDxIciAvPlxuICAgICAgICAgIDwvVGl0bGVDb250ZW50PlxuICAgICAgICAgIDxDYXJkSW5mbyBjbGFzc05hbWU9XCJjYXJkLWluZm9cIj57cC5kZXNjcmlwdGlvbn08L0NhcmRJbmZvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGl0bGVDb250ZW50IHN0eWxlPXt7IG1hcmdpblRvcDogJzEuNXJlbScsIGNvbG9yOiAneWVsbG93JyB9fT5TdGFjazwvVGl0bGVDb250ZW50PlxuICAgICAgICAgICAgPFRhZ0xpc3Q+XG4gICAgICAgICAgICAgIHtwLnRhZ3MubWFwKCh0KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRhZyBrZXk9e3R9Pnt0fTwvVGFnPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgPC9UYWdMaXN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxVdGlsaXR5TGlzdD5cbiAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3AudmlzaXR9PkxpdmU8L0V4dGVybmFsTGlua3M+XG4gICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXtwLnNvdXJjZX0+U291cmNlPC9FeHRlcm5hbExpbmtzPlxuICAgICAgICAgIDwvVXRpbGl0eUxpc3Q+XG4gICAgICAgIDwvQmxvZ0NhcmQ+XG4gICAgICApKX1cbiAgICA8L0dyaWRDb250YWluZXI+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==