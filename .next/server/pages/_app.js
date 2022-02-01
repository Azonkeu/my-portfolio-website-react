(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1338:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4229);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
;// CONCATENATED MODULE: ./src/themes/default.js
/* harmony default export */ var themes_default = ({
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
;// CONCATENATED MODULE: external "styled-normalize"
var external_styled_normalize_namespaceObject = require("styled-normalize");;
;// CONCATENATED MODULE: ./src/styles/global.js


const GlobalStyles = external_styled_components_.createGlobalStyle`
  ${external_styled_normalize_namespaceObject.normalize};
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
/* harmony default export */ var global = (GlobalStyles);
;// CONCATENATED MODULE: ./src/styles/theme.js






const Theme = ({
  children
}) => /*#__PURE__*/external_react_default().createElement(external_styled_components_.ThemeProvider, {
  theme: themes_default
}, /*#__PURE__*/external_react_default().createElement(global, null), children);

Theme.propTypes = {
  children: external_prop_types_default().instanceOf(Object).isRequired
};
/* harmony default export */ var theme = (Theme);
;// CONCATENATED MODULE: ./src/pages/_app.js



function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement(theme, null, /*#__PURE__*/external_react_default().createElement(Component, pageProps)));
}
App.propTypes = {
  Component: external_prop_types_default().instanceOf(Object).isRequired
};
App.propTypes = {
  pageProps: external_prop_types_default().instanceOf(Object).isRequired
};

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(1338));
module.exports = __webpack_exports__;

})();